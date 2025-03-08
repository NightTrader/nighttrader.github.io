import File from "@/assets/file.svg";
import Relume from "@/assets/relume.svg";
import Expander from "@/components/ui/Expander.tsx";
import Link from "@/components/ui/Link.tsx";
import generateSrcSet from "@/util/generateSrcSet.ts";

export default function NewListingPage() {
  const secureItems = [
    {
      title: "Increased Visibility",
      hint: "Showcase your coin to thousands of active traders daily.",
    },
    {
      title: "Diverse User Base",
      hint: "Access a growing community of cryptocurrency enthusiasts and investors.",
    },
  ];

  const questions = [
    {
      title: "What is the process?",
      description: "To list your coin, you need to submit a detailed application through our platform. Our team will review your submission and may reach out for additional information. Once approved, we will guide you through the next steps.",
    },
    {
      title: "Are there any fees?",
      description: "Yes, there are listing fees associated with the process. The fees vary based on the type of coin and its market potential. Detailed fee structures are available on our website.",
    },
    {
      title: "What are the requirements?",
      description: "To qualify for listing, your coin must meet specific technical and regulatory standards. We require a comprehensive whitepaper and a clear roadmap. Additionally, a strong community backing is essential.",
    },
    {
      title: "How long does it take?",
      description: "The review process typically takes between 2 to 4 weeks, depending on the complexity of your application. We strive to keep you updated throughout the process. Timely responses to our inquiries can help expedite your listing.",
    },
    {
      title: "Can I appeal a decision?",
      description: "Yes, if your application is denied, you may appeal the decision. We encourage applicants to address any feedback provided during the review. Our team is here to assist you in improving your application for future consideration.",
    },
  ];

  const submitButton = (
    <Link
      key={"submit"}
      to={"https://tally.so/r/3yoGZW"}
      target={"_blank"}
      rel={"noopener noreferrer"}
      className={"flex w-full justify-between md:w-auto gap-3 items-center py-3 px-6 border border-black"}
    >
      Apply
      <File className={"size-4"}/>
    </Link>
  )
  
  return (
    <>
      <div className={"py-14 md:py-28 px-8 md:px-16 empty-image text-white"}>
        <p className={"text-3xl md:text-6xl font-bold pb-3 md:pb-6"}>List Your Coin</p>
        <p className={"text-base md:text-lg"}>Open the door to new opportunities and take your project to the next level
          — submit your cryptocurrency for listing on NightTrader Exchange today!</p>
      </div>
      <div className={"flex flex-col md:flex-row items-center py-14 px-8 md:py-28 md:px-16 gap-10 md:gap-20"}>
        <div className={"w-full"}>
          <p className={"text-base font-bold pb-4"}>Elevate</p>
          <p className={"text-3xl md:text-5xl font-bold pb-6"}>Unlock Your Coin's Potential</p>
          <p className={"pb-8"}>Listing your coin on NightTrader exchange means tapping into a vibrant community of
            global traders. Gain unparalleled visibility and connect with a diverse user base eager to explore new
            decentralized opportunities.</p>
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
            {submitButton}
          </div>
        </div>
        <div className={"w-full"}>
          <img
            sizes="(max-width: 1024px) 100vw"
            srcSet={generateSrcSet("/imgs/bg/owl-safe", "png", "w")}
            src="/imgs/bg/owl-safe/1024.png"
            alt="owl image"
            loading={"lazy"}
          />
        </div>
      </div>
      <div className={"flex flex-col md:flex-row gap-10 md:gap-20 py-14 md:py-28 px-8 md:px-16"}>
        <div className={"w-full flex flex-col gap-3 md:gap-6"}>
          <p className={"text-3xl md:text-5xl font-semibold"}>Listing FAQ's</p>
          <p className={"text-base md:text-lg"}>Find answers to your questions about our streamlined coin listing
            process and associated fees.</p>
        </div>
        <div className={"w-full"}>
          {
            questions.map(({title, description}) => (
              <Expander
                key={title}
                title={title}
                className={"border-t border-black last:border-b"}
              >
                {
                  Array.isArray(description) ? (
                    description.map((text) => (
                      <p key={text}>{text}</p>
                    ))
                  ) : (
                    <p>{description}</p>
                  )
                }
              </Expander>
            ))
          }
        </div>
      </div>
      <div className={"flex flex-col gap-20 py-14 md:py-28 px-8 md:px-16 text-center"}>
        <div className={"flex flex-col items-center justify-center"}>
          <p className={"text-4xl md:text-5xl font-bold pb-6"}>Let's Connect for A Win-Win Solution!</p>
          <p className={"text-base"}>Request to list your coin / token with us today.</p>
        </div>
        <div className={"flex gap-6 items-center justify-center"}>
          {submitButton}
        </div>
      </div>
    </>
  );
}