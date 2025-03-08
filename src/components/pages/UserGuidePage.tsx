import LinkExternal from "@/assets/link-external.svg";
import Relume from "@/assets/relume.svg";
import Link from "@/components/ui/Link.tsx";

export default function UserGuidePage() {
  const steps = [
    {
      title: "Unlock Your Trading Potential with a Simple Registration Process",
      description: "Follow these easy steps to create your NightTrader.Exchange account and start trading.",
    },
    {
      title: "Step 1: Visit the NightTrader.Exchange Registration Page",
      description: "Navigate to our homepage and click on the 'Sign Up' button.",
    },
    {
      title: "Step 2: Fill Out Your Registration Details",
      description: "Provide your email address, create a strong password, and agree to our terms.",
    }
  ];

  const secure = [
    {
      title: "Why Identity Verification is Crucial for Your Security",
      hint: "Verifying your identity helps protect your account from unauthorized access.",
    },
    {
      title: "Steps to Complete Your Identity Verification Process",
      hint: "Follow these simple steps to verify your identity quickly and easily.",
    },
    {
      title: "Common Questions About Identity Verification Answered",
      hint: "Get answers to frequently asked questions about the verification process.",
    }
  ];

  const deposit = [
    {
      title: "Step 1: Choose Your Payment Method",
      hint: "Select from various options like bank transfer or credit card.",
    },
    {
      title: "Step 2: Enter Deposit Amount",
      hint: "Specify how much you wish to deposit.",
    },
    {
      title: "Step 3: Confirm Your Transaction",
      hint: "Review the details and confirm to proceed.",
    }
  ];

  const firstTrade = [
    {
      title: "Easily Select Trading Pairs and Execute Market Orders",
      hint: "Getting started with trading is simple and intuitive on NightTrader.",
    },
    {
      title: "Choosing the Right Trading Pairs Made Easy",
      hint: "Select from a variety of trading pairs to match your strategy.",
    },
    {
      title: "Understanding Market Orders for Successful Trading",
      hint: "Learn how market orders work to ensure your trades execute smoothly.",
    }
  ];

  const withdraw = [
    {
      title: "Step-by-Step Withdrawal Process",
      hint: "Follow these simple steps to complete your withdrawal.",
    },
    {
      title: "Withdrawal Methods Available",
      hint: "Choose from various methods including bank transfer and crypto.",
    },
    {
      title: "Important Withdrawal Tips",
      hint: "Always double-check your wallet address before sending funds.",
    }
  ];
  
  return (
    <>
      <div
        className={"flex flex-col gap-3 md:gap-6 py-14 md:py-28 px-8 md:px-16 empty-image text-white text-center md:text-start"}>
        <p className={"text-3xl md:text-6xl font-bold"}>Welcome to NightTrader</p>
        <p className={"text-base"}>Your comprehensive guide to navigating the NightTrader platform with ease and
          confidence.</p>
      </div>
      <div className={"flex flex-col gap-5 md:gap-10 py-14 md:py-28 px-8 md:px-16"}>
        <p className={"text-2xl md:text-4xl font-semibold w-full"}>Your Step-by-Step Guide to Registering on NightTrader.Exchange</p>
        <div className={"flex flex-col md:flex-row gap-6 md:gap-12"}>
          {
            steps.map((service) => (
              <div
                key={service.title}
                className={"w-full flex flex-col gap-8 text-center"}
              >
                <div className={"aspect-3/2 empty-image"}/>
                <div className={"flex flex-col gap-4"}>
                  <p className={"text-2xl font-semibold"}>{service.title}</p>
                  <p className={"text-base"}>{service.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className={"flex flex-col gap-20 py-14 md:py-28 px-8 md:px-16 text-center"}>
        <div className={"flex flex-col items-center justify-center"}>
          <p className={"text-4xl md:text-5xl font-bold pb-6"}>Secure Your Account: A Guide to Identity Verification</p>
        </div>
        <div className={"flex flex-col md:flex-row gap-12 items-center justify-center"}>
          {
            secure.map(({title, hint}) => (
              <div className={"flex flex-col items-center gap-6 w-full"} key={title}>
                <Relume className={"size-12"}/>
                <p className={"text-3xl font-bold"}>{title}</p>
                <p className={"text-base"}>{hint}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div className={"flex flex-col gap-20 py-14 md:py-28 px-8 md:px-16 text-center"}>
        <div className={"flex flex-col items-center justify-center"}>
          <p className={"text-base font-semibold"}>Deposit</p>
          <p className={"text-4xl md:text-5xl font-bold pb-6"}>Quick and Easy Steps to Fund Your Account</p>
          <p className={"text-base"}>Funding your NightTrader.Exchange account is simple and secure. Follow these easy
            steps to get started and begin trading.</p>
        </div>
        <div className={"flex flex-col md:flex-row gap-6 md:gap-12"}>
          {
            deposit.map((service) => (
              <div
                key={service.title}
                className={"w-full flex flex-col gap-8 text-center"}
              >
                <div className={"aspect-3/2 empty-image"}/>
                <div className={"flex flex-col gap-4"}>
                  <p className={"text-2xl font-semibold"}>{service.title}</p>
                  <p className={"text-base"}>{service.hint}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className={"flex flex-col gap-5 md:gap-10 py-14 md:py-28 px-8 md:px-16"}>
        <p className={"text-2xl md:text-4xl font-semibold w-full"}>Your Step-by-Step Guide to Placing Your First Trade</p>
        <div className={"flex flex-col md:flex-row gap-6 md:gap-12"}>
          {
            firstTrade.map((service) => (
              <div
                key={service.title}
                className={"w-full flex flex-col gap-8"}
              >
                <div className={"aspect-3/2 empty-image"}/>
                <div className={"flex flex-col gap-4"}>
                  <p className={"text-2xl font-semibold"}>{service.title}</p>
                  <p className={"text-base"}>{service.hint}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className={"flex flex-col gap-10 md:gap-20 pt-7 pb-14 md:py-28 px-8 md:px-16"}>
        <div className={"flex flex-col md:flex-row gap-5 md:gap-20"}>
          <div className={"w-full flex flex-col gap-2 md:gap-4"}>
            <p className={"text-base font-semibold"}>Withdraw</p>
            <p className={"text-3xl md:text-5xl font-semibold"}>How to Withdraw Funds from NightTrader.Exchange</p>
          </div>
          <div className={"w-full flex flex-col gap-5 md:gap-8"}>
            <p className={"text-base md:text-lg"}>Withdrawing your funds from NightTrader.Exchange is a straightforward
              process. Simply navigate to the withdrawal section in your account dashboard, select your preferred
              withdrawal method, and enter the amount you wish to withdraw. Ensure all details are correct before
              confirming your transaction.</p>
          </div>
        </div>
      </div>
      <div className={"flex flex-col gap-20 py-14 md:py-28 px-8 md:px-16"}>
        <div className={"flex flex-col md:flex-row gap-12 items-center justify-center"}>
          {
            withdraw.map(({title, hint}) => (
              <div className={"flex flex-col items-start gap-6 w-full"} key={title}>
                <Relume className={"size-12"}/>
                <p className={"text-3xl font-bold"}>{title}</p>
                <p className={"text-base"}>{hint}</p>
              </div>
            ))
          }
        </div>
      </div>
      <div className={"flex flex-col gap-20 py-14 md:py-28 px-8 md:px-16"}>
        <div className={"flex flex-col items-center gap-6 p-8 md:py-20 border border-black text-center"}>
          <p className={"text-3xl md:text-5xl font-semibold"}>Need Help? Have a Suggestion?</p>
          <p className={"text-base md:text-lg"}>Contact us with your question or comment, or ask our Support Team to</p>
          <div className={"flex gap-4"}>
            <Link
              to={"/contact"}
              className={"flex w-full md:w-auto gap-3 items-center py-3 px-6 border border-black"}
            >
              Contact
            </Link>
            <Link
              to={"https://t.me/Nighttrader_org_Chat"}
              target={"_blank"}
              rel={"noopener noreferrer"}
              className={"flex w-full md:w-auto gap-3 items-center py-3 px-6 border border-black"}
            >
              Support
              <LinkExternal className={"size-4"}/>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}