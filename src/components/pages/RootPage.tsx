import Footer from "@/components/app/Footer.tsx";
import Header from "@/components/app/Header.tsx";
import useScrollOnRouteChange from "@/hook/useScrollOnRouteChange.ts";
import {Outlet} from "react-router-dom";

export default function RootPage() {
  useScrollOnRouteChange();
  
  return (
    <>
      <Header/>
      <div className={'flex justify-center'}>
        <div className={"max-w-360"}>
          <Outlet/>
          <Footer/>
        </div>
      </div>
    </>
  )
}