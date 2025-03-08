import Relume from "@/assets/relume.svg";

export default function AboutPage() {
  const milestones = [
    {
      title: "Launch Year",
      description: "Conceived in 2014, the NightTrader Decentralized Exchange was designed to revolutionize trading with innovative, cutting-edge solutions. It remains the only DEX in the world that supports high-speed Bitcoin trading.",
    },
    {
      title: "1st Real World Concept of Viability Milestone",
      description: "Achieved 10,000 registered users within the first three months of operation.",
    },
    {
      title: "Partnership Growth",
      description: "Forged strategic partnerships with top blockchain projects to expand and enhance our service offerings.",
    },
    {
      title: "Global Expansion",
      description: "Extended our reach to over 30 countries, bringing trading accessibility to a worldwide audience.",
    },
  ];
  
  return (
    <>
      <div className={"flex flex-col gap-6 py-14 md:py-28 px-8 md:px-16 empty-image text-white text-center md:text-start"}>
        <p className={"text-3xl md:text-5xl font-bold"}>Welcome to NightTrader</p>
        <p className={"text-base md:text-lg"}>At NightTrader.exchange, we empower traders with innovative solutions for a seamless
          trading experience.</p>
      </div>
      <div className={"flex flex-col md:flex-row items-center py-14 md:py-28 px-8 md:px-16 gap-10 md:gap-20"}>
        <div className={"w-full"}>
          <p className={"text-base font-semibold pb-4"}>Innovative</p>
          <p className={"text-3xl md:text-5xl font-bold pb-6"}>Our Journey - The Birth of NightTrader.exchange</p>
          <p className={"text-base md:text-lg"}>NightTrader.exchange was founded with a vision to revolutionize the cryptocurrency trading experience. Inspired by the need for a user-friendly and super secure platform, we set out and succeeded at empowering traders of all skill levels.</p>
        </div>
        <div className={"w-full aspect-square empty-image"}/>
      </div>
      <div className={"flex flex-col md:flex-row py-14 md:py-28 px-8 md:px-16 gap-10 md:gap-20"}>
        <div className={"w-full"}>
          <p className={"text-base font-semibold pb-4"}>Milestones</p>
          <p className={"text-3xl md:text-5xl font-bold pb-6"}>Our Journey - Key Milestones Achieved at NightTrader.exchange</p>
          <p className={"text-base md:text-lgx.svg"}>At NightTrader.Exchange, your protection and safeguard is our top priority. We utilize advanced technologies to ensure a secure trading environment.</p>
        </div>
        <div className={"w-full flex flex-col gap-4"}>
          {
            milestones.map(({ title, description }, i, arr) => (
              <div
                key={title}
                className={"flex gap-3 md:gap-5 md:gap-10"}
              >
                <div className={"flex flex-col gap-4 items-center"}>
                  <div>
                    <Relume className={"size-8 md:size-12"}/>
                  </div>
                  {i < arr.length - 1 && <div className={"h-full w-[2px] bg-black"}/>}
                </div>
                <div>
                  <p className={"text-lg font-semibold pb-2 md:pb-4"}>{title}</p>
                  <p className={"text-base"}>{description}</p>
                  {i < arr.length - 1 && <div className={"h-10 md:h-18"}/>}
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </>
  );
}