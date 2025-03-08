import LinkExternal from "@/assets/link-external.svg";
import Relume from "@/assets/relume.svg";
import ChevronRight from "@/assets/chevron-right.svg";

import Button from "@/components/ui/Button.tsx";
import Link from "@/components/ui/Link.tsx";
import generateSrcSet from "@/util/generateSrcSet.ts";
import {NavLink} from "react-router-dom";

export default function HomePage() {
  const journeyItems = [
    {
      title: "Get Started by Easily Creating Your NightTrader Account",
      hint: "Visit our registration page to create your account.",
    },
    {
      title: "Easily Deposit Funds Into Your Account",
      hint: "Choose your preferred payment method to deposit funds.",
    },
    {
      title: "Start Trading",
      hint: "No KYC for weekly transactions totaling less than 10K.",
    }
  ];

  const secureItems = [
    {
      title: "Multi-Signature Wallets",
      hint: "Unlock the power of financial independence by possessing your own funds with total and independent control over your wallet.",
    },
    {
      title: "Two-Factor Authentication",
      hint: "Enhance your account security with our robust two-factor authentication feature.",
    },
  ];

  const favouritesItems = ["DAI", "BTC", "BCH", "LTC", "ETH", "BLK", "BAY", "BAYR", "BAYF", "MATIC"];
  
  return (
    <>
      <div className={"flex flex-col md:flex-row items-center gap-10 md:gap-20 py-14 md:py-28 px-8 md:px-16"}>
        <div className={"w-full"}>
          <p className={"text-3xl md:text-6xl font-bold pb-6"}>Upgrade Your Trading Game with NightTrader</p>
          <p className={"text-base font-monospace"}>NightTrader.exchange revolutionizes your trading experience with advanced tools and real-time insights. Enjoy seamless transactions and unparalleled security, all tailored for both novice and expert traders.</p>
          <div className={"flex gap-4 pt-8"}>
            <Link
              to={"https://my2.nighttrader.exchange/auth/register"}
              target={"_blank"}
              rel={"noopener noreferrer"}
              className={"flex w-full md:w-auto gap-3 items-center py-3 px-6 border border-black"}
            >
              Get Started
              <LinkExternal className={"size-4"}/>
            </Link>
            <NavLink to={"/about"}>
              <Button
                variant={"outlined"}
              >
                Learn More
              </Button>
            </NavLink>
          </div>
        </div>
        <div className={"aspect-video w-full "}>
          <iframe
            width={"100%"}
            height={"100%"}
            src="https://www.youtube.com/embed/Vm-NKUG-I9k"
            title="NightTrader Exchange Introduction - Commercial"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
      <div className={"flex flex-col gap-20 py-14 md:py-28 px-8 md:px-16 text-center"}>
        <div className={"flex flex-col items-center justify-center"}>
          <p className={"text-base font-semibold"}>Trade</p>
          <p className={"text-4xl md:text-5xl font-bold pb-6"}>Embark on Your Trading Journey with NightTrader</p>
          <p className={"text-base"}>Trading on NightTrader.exchange is simple and straightforward. Follow our step-by-step guide to begin your
            trading experience today.</p>
        </div>
        <div className={"flex flex-col md:flex-row gap-12 items-center justify-center"}>
          {
            journeyItems.map(({title, hint}) => (
              <div className={"flex flex-col items-center gap-6 w-full"} key={title}>
                <Relume className={"size-12"}/>
                <p className={"text-3xl font-bold"}>{title}</p>
                <p className={"text-base"}>{hint}</p>
              </div>
            ))
          }
        </div>
        <div className={"flex gap-6 items-center justify-center"}>
          <Link
            to={"https://my2.nighttrader.exchange/auth/register"}
            target={"_blank"}
            rel={"noopener noreferrer"}
            className={"flex w-full md:w-auto gap-3 items-center py-3 px-6 border border-black"}
          >
            Start
            <LinkExternal className={"size-4"}/>
          </Link>
        </div>
      </div>
      <div className={"flex flex-col md:flex-row items-center py-14 px-8 md:py-28 md:px-16 gap-10 md:gap-20"}>
        <div className={"w-full"}>
          <p className={"text-base font-bold pb-4"}>Secure</p>
          <p className={"text-3xl md:text-5xl font-bold pb-6"}>Uncompromising Safety and Security for All Your Trades</p>
          <p className={"pb-8"}>At NightTrader.Exchange, your protection and safeguard is our top priority. We utilize advanced technologies to ensure a secure trading environment.</p>
          <div className={"flex flex-col md:flex-row gap-6"}>
            {
              secureItems.map(({title, hint}) => (
                <div
                  key={title}
                  className={"flex flex-col gap-4 w-full"}
                >
                  <Relume/>
                  <p className={"text-lg font-bold"}>{title}</p>
                  <p className={"text-sm font-monospace"}>{hint}</p>
                </div>
              ))
            }
          </div>
          <div className={"pt-8"}>
            <NavLink to={"/services"}>
              <Button
                icon={<ChevronRight/>}
                variant={"plain"}
                reversed
              >Learn More</Button>
            </NavLink>
          </div>
        </div>
        <div className={"w-full"}>
          <img
            sizes="(max-width: 1024px) 100vw"
            srcSet={generateSrcSet("/imgs/bg/owl-safe", "png", "w")}
            src="/imgs/bg/owl-safe/1024.png"
            alt="owl image"
          />
        </div>
      </div>
      <div className={"flex flex-col py-10 md:py-20 px-8 md:px-16 gap-6"}>
        <p className={"w-full text-center text-base font-bold"}>Trade your Favorite Coins</p>
        <div className={"flex gap-6 flex-wrap justify-center"}>
          {
            favouritesItems.map((coin) => (
              <div
                key={coin}
                className={"flex gap-2 items-center"}
              >
                <div>
                  <img src={`/imgs/coin/${coin}.png`} width="22"/>
                </div>
                <p className={"text-2xl font-semibold"}>{coin}</p>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}