import File from "@/assets/file.svg";
import Link from "@/components/ui/Link.tsx";

export default function AdvertisingPage() {
  return (
    <>
      <div className={"py-14 md:py-28 px-8 md:px-16 empty-image text-white"}>
        <p className={"text-base font-semibold pb-2 md:pb-4"}>Advertise</p>
        <p className={"text-3xl md:text-6xl font-bold pb-3 md:pb-6"}>Advertise / Ad Placement</p>
        <p className={"text-base md:text-lg"}>Advertise with us to effectively promote your brand, increase profits and
          engage your target audience.</p>
      </div>
      <div className={"flex flex-col gap-20 py-14 md:py-28 px-8 md:px-16 text-center"}>
        <div className={"flex flex-col items-center justify-center"}>
          <p className={"text-4xl md:text-5xl font-bold pb-6"}>Connect With Us</p>
          <p className={"text-base"}>We’re excited to hear about your advertising needs!</p>
        </div>
        <div className={"flex gap-6 items-center justify-center"}>
          <Link
            key={"submit"}
            to={"https://tally.so/r/3yoGZW"}
            target={"_blank"}
            rel={"noopener noreferrer"}
            className={"flex w-full justify-between md:w-auto gap-3 items-center py-3 px-6 border border-black"}
          >
            Connect
            <File className={"size-4"}/>
          </Link>
        </div>
      </div>
    </>
  );
}