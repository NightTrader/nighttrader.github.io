import clsx from "clsx";
import React from "react";

export interface Props extends React.PropsWithChildren {
  icon?: React.ReactNode;
  reversed?: boolean;
  variant?: "plain" | "outlined" | "solid";
}

export default function Button($p: Props) {
  return (
    <button
      type={"button"}
      className={clsx("flex gap-2 cursor-pointer items-center", $p.reversed && "flex-row-reverse", {
        "bg-black border border-black text-white fill-white px-6 py-3 transition duration-300 hover:bg-white hover:text-black": $p.variant === "solid" || !$p.variant,
        "border border-black px-6 py-3 transition duration-300 hover:bg-black hover:text-white": $p.variant === "outlined",
        "p-2 transition duration-300 hover:underline": $p.variant === "plain",
      })}
    >
      {$p.icon}
      {$p.children}
    </button>
  );
}