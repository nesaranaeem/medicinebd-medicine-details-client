import ThemeToggler from "../components/common/header/ThemeToggler";
import RecentMedicine from "../components/home/recent/RecentMedicine";
import Slider from "../components/home/slider/Slider";

export default function Home() {
  return (
    <>
      <ThemeToggler></ThemeToggler>

      <RecentMedicine />
    </>
  );
}
