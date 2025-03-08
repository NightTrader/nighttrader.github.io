import MailSend from "@/assets/mail-send.svg";
import Expander from "@/components/ui/Expander.tsx";
import Link from "@/components/ui/Link.tsx";

export default function FaqPage() {
  const questions = [
    {
      title: "What is NightTrader?",
      description: ["1. We prioritize security, speed and user experience, providing a robust platform for both beginners and experienced traders.", "2. Our mission is to make cryptocurrency trading fun, exciting and accessible to everyone."],
    },
    {
      title: "How to create an account?",
      description: "To create an account, visit our homepage and click on the 'Sign Up' button. Fill out the required information and verify your email address. Once verified, you can log in and start trading.",
    },
    {
      title: "Is my data secure?",
      description: "We are committed to maintaining a safe and stress free trading environment.",
    },
    {
      title: "What are the fees?",
      description: "We strive to keep costs low while providing excellent customer service.",
    },
    {
      title: "How to contact support?",
      description: "You can reach our support team by clicking the 'Contact' button on our website. We provide assistance through email and live chat for your convenience. Our team is available 24/7/365 to help with any questions or issues.",
    },
  ];
  
  return (
    <>
      <div className={"py-14 md:py-28 px-8 md:px-16"}>
        <p className={"text-base font-semibold pb-2 md:pb-4"}>Answers</p>
        <p className={"text-3xl md:text-6xl font-bold pb-3 md:pb-6"}>Your Questions Answered</p>
        <p className={"text-base md:text-lg"}>Find the answers below to common queries about our services and how to get the most from this advanced decentralized trading platform.</p>
      </div>
      <div className={"flex flex-col md:flex-row gap-10 md:gap-20 py-14 md:py-28 px-8 md:px-16"}>
        <div className={"w-full flex flex-col gap-3 md:gap-6"}>
          <p className={"text-3xl md:text-5xl font-semibold"}>FAQs</p>
          <p className={"text-base md:text-lg"}>Find answers to your most essential questions about NightTrader Exchange here.</p>
          <Link
            to={"mailto:info@nighttrader.exchange"}
            className={"flex gap-3 items-center justify-between py-3 px-6 border border-black"}
          >
            <p className={"text-base"}>info@nighttrader.exchange</p>
            <MailSend/>
          </Link>
        </div>
        <div className={"w-full"}>
          {
            questions.map(({ title, description }) => (
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
    </>
  );
}