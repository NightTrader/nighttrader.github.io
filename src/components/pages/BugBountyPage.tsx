import File from "@/assets/file.svg";
import Relume from "@/assets/relume.svg";
import Link from "@/components/ui/Link.tsx";

export default function BugBountyPage() {
  const journeyItems = [
    {
      title: "Step 1: Identify the Bug",
      hint: "Take note of any issues you encounter.",
    },
    {
      title: "Step 2: Submit Your Report",
      hint: "Use our online form to submit your findings.",
    },
    {
      title: "Step 3: Verification Process",
      hint: "Our team will review your submission promptly.",
    }
  ];
  
  const submitButton = (
    <Link
      key={"submit"}
      to={"https://tally.so/r/3yoGZW"}
      target={"_blank"}
      rel={"noopener noreferrer"}
      className={"flex w-full justify-between md:w-auto gap-3 items-center py-3 px-6 border border-black"}
    >
      Submit a bug
      <File className={"size-4"}/>
    </Link>
  )
  
  return (
    <>
      <div className={"py-14 md:py-28 px-8 md:px-16 empty-image text-white"}>
        <p className={"text-base font-semibold pb-2 md:pb-4"}>Secure</p>
        <p className={"text-3xl md:text-6xl font-bold pb-3 md:pb-6"}>Protecting Your Assets</p>
        <p className={"text-base md:text-lg"}>Join our Bug Bounty program to enhance project security and protect our trading community.</p>
      </div>
      <div className={"flex flex-col gap-10 md:gap-20 pt-7 pb-14 md:py-28 px-8 md:px-16"}>
        <div className={"flex flex-col md:flex-row gap-5 md:gap-20"}>
          <div className={"w-full flex flex-col gap-2 md:gap-4"}>
            <p className={"text-base font-semibold"}>Empower</p>
            <p className={"text-3xl md:text-5xl font-semibold"}>Unlock New Opportunities with Our Coin Listings</p>
          </div>
          <div className={"w-full flex flex-col gap-5 md:gap-8"}>
            <p className={"text-base md:text-lg"}>At NightTrader, we provide a seamless platform for listing your
              cryptocurrency. Our extensive network and
              robust technology ensure that your coin reaches a wider audience, enhancing its visibility and potential
              for growth. Join us to leverage our expertise and take your project to the next level.</p>
            {submitButton}
          </div>
        </div>
        <div className={"aspect-3/2 w-full empty-image"}/>
      </div>
      <div className={"flex flex-col gap-20 py-14 md:py-28 px-8 md:px-16 text-center"}>
        <div className={"flex flex-col items-center justify-center"}>
          <p className={"text-base font-semibold"}>Secure</p>
          <p className={"text-4xl md:text-5xl font-bold pb-6"}>How to Submit an Effective Bug Bounty Report</p>
          <p className={"text-base"}>Reporting a bug is straightforward. Follow our step-by-step guide to ensure your submission is processed processed quickly and efficiently.</p>
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
          {submitButton}
        </div>
      </div>
    </>
  );
}