import React from "react";

import clsx from "clsx";

import ChevronDown from "@/assets/chevron-down.svg";
import Relume from "@/assets/relume.svg";
import Logo from "@/assets/logo.svg";
import Menu from "@/assets/menu.svg";
import X from "@/assets/x.svg";

import {NavLink, NavLinkProps, useLocation} from "react-router-dom";

type HeaderItem = {
  label: string;
  hint: string;
  disabled?: boolean;
  link?: NavLinkProps,
  action?: () => void;
};

type HeaderSection = {
  title: string;
  children: HeaderItem[];
};


export default function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const { pathname } = useLocation();

  React.useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  
  const closeMenu = () => {
    setIsOpen(false);
  };
  
  const structure: HeaderSection[] = [
    {
      title: "Explore Our Pages",
      children: [
        {
          label: "About Us",
          hint: "Learn more about our mission and values.",
          link: {
            to: "/about",
          },
        },
        {
          label: "Contact",
          hint: "Get in touch with our support team.",
          link: {
            to: "/contact",
          },
        },
        {
          label: "Bug Bounty",
          hint: "Report bugs for crypto.",
          link: {
            to: "bug-bounty",
          },
          action: closeMenu,
        },
      ]
    },
    {
      title: "Additional Resources",
      children: [
        {
          label: "Affiliate Program",
          hint: "Join us and earn rewards.",
          link: {
            to: "/affiliate"
          },
        },
        {
          label: "API Documentation",
          hint: "Learn how to incorporate your project with the NightTrader Exchange.",
          link: {
            to: "https://docs.google.com/document/d/1ySsqMlCpJAbFRlUOupzNIYQ3N7lmrnfaVtQvqFE5Vj4/edit?tab=t.0",
            target: "_blank",
            rel: "noopener noreferrer",
          },
          action: closeMenu,
        },
        {
          label: "Legal",
          hint: "Learn about out Terms of Use, Risk Policy, and more.",
          link: {
            to: "/legal",
          },
        },
      ]
    },
    {
      title: "Stay Connected",
      children: [
        {
          label: "Feedback",
          hint: "Share your thoughts and suggestions.",
          link: {
            to: "https://t.me/Nighttrader_org_Chat",
            target: "_blank",
            rel: "noopener noreferrer",
          },
          action: closeMenu,
        },
        {
          label: "Blog",
          hint: "Articles covering the latest and greatest.",
          link: {
            to: "/blog",
          },
        },
      ]
    },
    {
      title: "Get Started",
      children: [
        {
          label: "User guide",
          hint: "Explore common questions and answers.",
          link: {
            to: "/guide",
          },
        },
        {
          label: "FAQ",
          hint: "Explore common questions and answers.",
          link: {
            to: "/faq",
          },
        },
      ]
    },
  ];
  
  return (
    <>
      <div className={"py-4"}>
        <div className={"h-8"}/>
      </div>
      <header className={clsx("top-0 left-0 w-full top-0 fixed z-5", isOpen && "h-screen")}>
        <div className={"border-b bg-white"}>
          <div className={"w-full flex gap-4 py-4 px-5 md:px-16 items-center justify-between md:justify-start max-w-360 m-auto"}>
            <NavLink to={"/"}><Logo/></NavLink>
            <div className={"gap-8 hidden md:flex"}>
              <NavLink
                to={"https://my2.nighttrader.exchange/"}
                target={"_blank"}
                rel="noopener noreferrer"
              >
                Exchange
              </NavLink>
              <NavLink to={"/services"}>Our Services</NavLink>
              <NavLink
                to={"https://t.me/Nighttrader_org_Chat"}
                target={"_blank"}
                rel="noopener noreferrer"
              >
                Support Center
              </NavLink>
              <div
                className={"flex cursor-pointer"}
                onClick={() => setIsOpen((v) => !v)}
              >
                <p>More</p>
                <ChevronDown className={clsx("transition duration-300", isOpen && "rotate-180")}/>
              </div>
            </div>
            <button
              type={"button"}
              className={"cursor-pointer"}
              onClick={() => setIsOpen((v) => !v)}
            >
              {isOpen && <X className={"md:hidden"}/>}
              {!isOpen && <Menu className={"md:hidden"}/>}
            </button>
          </div>
        </div>
        <div
          className={clsx(
            "flex flex-col overflow-scroll transition-all duration-300 bg-white",
            isOpen ? "h-screen" : "h-0"
          )}
        >
          <div className={"flex flex-col md:flex-row gap-8 px-5 md:px-16 py-4 md:py-8 max-w-360 m-auto"}>
            <div className={"flex flex-col gap-4 md:hidden"}>
              <NavLink
                to={"https://my2.nighttrader.exchange/"}
                target={"_blank"}
                rel="noopener noreferrer"
              >
                Exchange
              </NavLink>
              <NavLink to={"/services"}>Our Services</NavLink>
              <NavLink
                to={"https://t.me/Nighttrader_org_Chat"}
                target={"_blank"}
                rel="noopener noreferrer"
              >
                Support Center
              </NavLink>
            </div>
            {
              structure.map(({title, children}) => (
                <div
                  key={title}
                  className={"flex flex-col gap-2"}
                >
                  <p className={"px-2 text-sm font-bold"}>{title}</p>
                  {children.map((item) => (
                    <NavLink
                      key={item.label}
                      onClick={item.action}
                      className={"flex gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded-sm"}
                      {...item.link}
                      to={item.link?.to || "#"}
                    >
                      <div>
                        <Relume/>
                      </div>
                      <div>
                        <p className={"text-base font-bold"}>{item.label}</p>
                        <p className={"text-sm font-monospace"}>{item.hint}</p>
                      </div>
                    </NavLink>
                  ))}
                </div>
              ))
            }
          </div>
          <div className={"h-full"}/>
          <div className={"bg-black"}>
            <div className={"text-white px-16 py-4 w-full max-w-360 m-auto"}>
              <p>Ready to trade with us? <u>Sign up for free</u></p>
            </div>
          </div>
          <div className={"py-4"}>
            <div className={"h-8"}/>
          </div>
        </div>
      </header>
    </>
  );
}