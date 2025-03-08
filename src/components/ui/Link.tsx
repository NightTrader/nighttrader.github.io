import clsx from "clsx";
import React from "react";
import {NavLink, NavLinkProps} from "react-router-dom";

export interface Props extends NavLinkProps {
  children: React.ReactNode;
}

export default function Link(props: Props) {
  const {children, className, ...navLinkProps} = props;
  
  return (
    <NavLink
      {...navLinkProps}
      className={"group relative inline-block"}
    >
      <div className={clsx("bg-white relative transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2 z-2", className)}>
        {children}
      </div>
      <div className="absolute top-0 left-0 w-full h-full bg-black transition-all duration-300 opacity-0 group-hover:opacity-100 z-1" />
    </NavLink>
  );
}