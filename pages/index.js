import { NextSeo } from "next-seo";
import Stats from "../components/common/stats/Stats";
import RecentMedicine from "../components/home/recent/RecentMedicine";
import Slider from "../components/home/slider/Slider";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Explore Medicine Details"
        description="MedicineBD offers over 25k+ medicine details for free of cost"
      />

      <Slider />

      <RecentMedicine />
      <Stats />
    </>
  );
}
