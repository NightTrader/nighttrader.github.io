import AboutPage from "@/components/pages/AboutPage.tsx";
import AdvertisingPage from "@/components/pages/AdvertisingPage.tsx";
import AffiliatePage from "@/components/pages/AffiliatePage.tsx";
import BlogPage from "@/components/pages/BlogPage.tsx";
import BugBountyPage from "@/components/pages/BugBountyPage.tsx";
import CareersPage from "@/components/pages/CareersPage.tsx";
import ContactPage from "@/components/pages/ContactPage.tsx";
import FaqPage from "@/components/pages/FaqPage.tsx";
import HomePage from "@/components/pages/HomePage.tsx";
import LegalPage from "@/components/pages/LegalPage.tsx";
import NewListingPage from "@/components/pages/NewListingPage.tsx";
import RootPage from "@/components/pages/RootPage.tsx";
import ServicesPage from "@/components/pages/ServicesPage.tsx";
import UserGuidePage from "@/components/pages/UserGuidePage.tsx";
import {createBrowserRouter} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "legal",
        element: <LegalPage />
      },
      {
        path: "affiliate",
        element: <AffiliatePage />
      },
      {
        path: "blog",
        element: <BlogPage />,
      },
      {
        path: "services",
        element: <ServicesPage />,
      },
      {
        path: "about",
        element: <AboutPage />,
      },
      {
        path: "faq",
        element: <FaqPage />,
      },
      {
        path: "contact",
        element: <ContactPage />,
      },
      {
        path: "bug-bounty",
        element: <BugBountyPage />,
      },
      {
        path: "listing",
        element: <NewListingPage />,
      },
      {
        path: "advertising",
        element: <AdvertisingPage />,
      },
      {
        path: "careers",
        element: <CareersPage />,
      },
      {
        path: "guide",
        element: <UserGuidePage />,
      },
    ]
  }
])

export default router;