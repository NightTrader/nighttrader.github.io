import ChevronDown from "@/assets/chevron-down.svg";
import clsx from "clsx";
import React from "react";

export interface Props extends React.PropsWithChildren {
  className?: string;
  value?: boolean;
  title: string;
}

export default function Expander($p: Props) {
  const [isOpen, setOpen] = React.useState(!!$p.value);
  
  return (
    <div className={$p.className}>
      <button
        type={"button"}
        className={"w-full flex item-center justify-between py-5 cursor-pointer"}
        onClick={() => setOpen((v) => !v)}
      >
        <p className={"text-lg font-semibold"}>{$p.title}</p>
        <ChevronDown className={clsx("transition duration-300 size-8", isOpen && "rotate-180")}/>
      </button>
      <div className={clsx("overflow-hidden transition-all duration-300", isOpen ? "max-h-40" : "max-h-0")}>
        <div className={"pb-6"}>
          {$p.children}
        </div>
      </div>
    </div>
  );
}