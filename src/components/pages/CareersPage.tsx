import Logo from "@/assets/logo.svg";

export default function CareersPage() {
  return (
    <>
      <div className={"py-14 md:py-28 px-8 md:px-16 empty-image text-white"}>
        <p className={"text-3xl md:text-6xl font-bold pb-3 md:pb-6"}>Join Our Team</p>
        <p className={"text-base md:text-lg"}>Discover a rewarding career with NightTrader.Exchange, where innovation
          and collaboration drive success.</p>
      </div>
      <div className={"flex flex-col items-center justify-center py-14 md:py-28 px-8 md:px-16 text-center"}>
        <p className={"text-base font-semibold"}>Join</p>
        <p className={"text-4xl md:text-5xl font-bold pb-6"}>Job Openings</p>
        <p className={"text-base"}>Explore exciting career opportunities at NightTrader and become part of our
          innovative team.</p>
      </div>
      <div className={"flex flex-col items-center py-7 md:py-14 px-4 md:px-8"}>
        <Logo className={"size-12"}/>
        <p className={"text-lg font-semibold"}>Oops, it seems empty here.</p>
      </div>
    </>
  );
}