import { NextSeo } from "next-seo";
import ThemeToggler from "../components/common/header/ThemeToggler";
import RecentMedicine from "../components/home/recent/RecentMedicine";
import Slider from "../components/home/slider/Slider";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Know About Medicine"
        description="MedicineBD offers over 25k+ medicine details for free of cost"
      />
      <RecentMedicine />
    </>
  );
}
