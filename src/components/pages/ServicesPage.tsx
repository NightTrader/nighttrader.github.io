import Link from "@/components/ui/Link.tsx";

import MailSend from "@/assets/mail-send.svg";

export default function ServicesPage() {
  const services = [
    {
      tile: "Fast Transactions",
      description: "NightTrader offers lightning-fast transactions and high scalability, addressing common performance issues in other exchanges.",
    },
    {
      tile: "Unmatched Security",
      description: "Through multi-signature technology and non-custodial trading, NightTrader significantly reduces the risk of hacks and theft, a common issue with centralized exchanges.",
    },
    {
      tile: "Cost-Effective",
      description: "NightTrader maintains competitive trading fees, making it more affordable for users seeking efficient cryptocurrency exchange solutions.",
    }
  ];
  
  return (
    <>
      <div className={"flex flex-col text-center justify-center gap-3 md:gap-6 py-14 md:py-28 px-8 md:px-16"}>
        <p className={"text-3xl md:text-6xl font-bold"}>Our Services</p>
        <p className={"text-base md:text-lg"}>Explore our comprehensive trading solutions designed for both novice and experienced traders alike.</p>
      </div>
      <div className={"flex flex-col gap-5 md:gap-10 py-14 md:py-28 px-8 md:px-16"}>
        <p className={"text-2xl md:text-4xl font-semibold w-full text-center "}>Unlock the Power of Our Advanced Trading Services</p>
        <div className={"flex flex-col md:flex-row gap-6 md:gap-12"}>
          {
            services.map((service) => (
              <div
                key={service.tile}
                className={"w-full flex flex-col gap-8"}
              >
                <div className={"aspect-3/2 empty-image"} />
                <div className={"flex flex-col gap-4"}>
                  <p className={"text-2xl font-semibold"}>{service.tile}</p>
                  <p className={"text-base"}>{service.description}</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className={"flex flex-col gap-10 md:gap-20 pt-7 pb-14 md:py-28 px-8 md:px-16"}>
        <div className={"flex flex-col md:flex-row gap-5 md:gap-20"}>
          <div className={"w-full flex flex-col gap-2 md:gap-4"}>
            <p className={"text-base font-semibold"}>Empower</p>
            <p className={"text-3xl md:text-5xl font-semibold"}>Unlock New Opportunities with Our Coin Listings</p>
          </div>
          <div className={"w-full flex flex-col gap-5 md:gap-8"}>
            <p className={"text-base md:text-lg"}>At NightTrader, we provide a seamless platform for listing your cryptocurrency. Our extensive network and
              robust technology ensure that your coin reaches a wider audience, enhancing its visibility and potential
              for growth. Join us to leverage our expertise and take your project to the next level.</p>
            <Link
              to={"mailto:coinlisting@nighttrader.exchange"}
              className={"flex gap-3 items-center justify-between py-3 px-6 border border-black"}
            >
              <p>coinlisting@nighttrader.exchange</p>
              <MailSend/>
            </Link>
          </div>
        </div>
        <div className={"aspect-3/2 w-full empty-image"}/>
      </div>
    </>
  );
}