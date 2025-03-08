import Logo from "@/assets/logo.svg";
import Button from "@/components/ui/Button.tsx";
import Input from "@/components/ui/Input.tsx";
import {NavLink, NavLinkProps} from "react-router-dom";

type FooterItem = {
  label: string;
  disabled?: boolean;
  link?: NavLinkProps,
  action?: () => void;
};

type FooterSection = {
  title: string;
  children: FooterItem[];
};

export default function Footer() {
  const footerLinks: FooterSection[] = [
    {
      title: "Quick Links",
      children: [
        {
          label: "Exchange",
          link: {
            to: 'https://my2.nighttrader.exchange/auth/register',
            target: "_blank",
            rel: "noopener noreferrer",
          }
        },
        {
          label: "Our Services",
          link: {
            to: "/services",
          }
        },
        {
          label: "About Us",
          link: {
            to: "/about"
          }
        },
        {
          label: "Bug Bounty",
          link: {
            to: "/bug-bounty"
          }
        },
      ]
    },
    {
      title: "Resources",
      children: [
        {
          label: "API Documentation",
          link: {
            to: "https://docs.google.com/document/d/1ySsqMlCpJAbFRlUOupzNIYQ3N7lmrnfaVtQvqFE5Vj4/edit?tab=t.0",
            target: "_blank",
            rel: "noopener noreferrer",
          }
        },
        {
          label: "Legal",
          link: {
            to: "/legal",
          }
        },
      ]
    },
    {
      title: "Follow Us",
      children: [
        {
          label: "Twitter Feed",
          link: {
            to: "https://x.com/nighttraderO",
            target: "_blank",
            rel: "noopener noreferrer",
          }
        },
        {
          label: "LinkedIn Profile",
          link: {
            to: "https://www.linkedin.com/company/nighttrader/",
            target: "_blank",
            rel: "noopener noreferrer",
          }
        },
        {
          label: "YouTube Channel",
          link: {
            to: "https://www.youtube.com/@NightTrader.Exchange",
            target: "_blank",
            rel: "noopener noreferrer",
          }
        },
        {
          label: "Blog",
          link: {
            to: "/blog",
          }
        },
      ]
    },
    {
      title: "Support",
      children: [
        {
          label: "Help Center",
          link: {
            to: "https://t.me/Nighttrader_org_Chat",
            target: "_blank",
            rel: "noopener noreferrer",
          }
        },
        {
          label: "Feedback",
          link: {
            to: "https://t.me/Nighttrader_org_Chat",
            target: "_blank",
            rel: "noopener noreferrer",
          }
        },
        {
          label: "FAQ",
          link: {
            to: "/faq",
          }
        },
      ]
    },
    {
      title: "Business",
      children: [
        {
          label: "Listing Request",
          link: {
            to: "/listing"
          }
        },
        {
          label: "Advertising Request",
          link: {
            to: "/advertising",
          }
        },
        {
          label: "Careers",
          link: {
            to: "/careers"
          }
        },
      ]
    },
    {
      title: "Contact",
      children: [
        {
          label: "General Inquiries",
          link: {
            to: "/contact"
          }
        },
      ]
    },
  ]
  
  return (
    <footer className={"py-10 md:py-20 px-8 md:px-16"}>
      <div className={"flex flex-col md:flex-row gap-6 justify-between pb-20"}>
        <div>
          <p className={"text-lg font-semibold"}> Subscribe to Our News Letter</p>
          <p className={"text-base"}>Stay informed with the latest news and offers.</p>
        </div>
        <div className={"flex flex-col gap-3"}>
          <div className={"flex flex-col md:flex-row gap-3"}>
            <Input
              placeholder={"Your Email Here"}
            />
            <Button variant={"outlined"}>Join</Button>
          </div>
          <p className={"text-xs"}>By subscribing, you accept our Privacy Policy.</p>
        </div>
      </div>
      <div className={"flex flex-col md:flex-row gap-10 border-t border-b border-black justify-between py-20"}>
        {
          footerLinks.map(({title, children}) => (
            <div
              key={title}
              className={"flex flex-col gap-4"}
            >
              <p className={"text-sm font-bold"}>{title}</p>
              {children.map((item) => (
                item.disabled ? (
                  <p
                    key={item.label}
                    className={"text-gray-300 text-sm"}
                  >{item.label}</p>
                ) : (
                  (item.link && (
                    <NavLink
                      key={item.label}
                      className={"text-sm"}
                      {...item.link}
                    >
                      {item.label}
                    </NavLink>
                  ))
                  ||
                  (item.action && (
                    <button
                      key={item.label}
                      type={"button"}
                      className={"text-sm"}
                      onClick={item.action}
                    >
                      {item.label}
                    </button>
                  ))
                  ||
                  (<p
                    key={item.label}
                    className={"text-sm"}
                  >{item.label}</p>)
                )
              ))}
            </div>
          ))
        }
      </div>
      <div className={"flex flex-col md:flex-row gap-10 items-center justify-between pt-8"}>
        <Logo/>
        <p className={"text-sm"}>© 2014-2025 NightTrader. All rights reserved.</p>
      </div>
    </footer>
  );
}