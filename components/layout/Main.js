import MainFooter from "../common/footer/MainFooter";
import MainHeader from "../common/header/MainHeader";

const Main = ({ children }) => {
  return (
    <>
      <MainHeader></MainHeader>
      <main className="bg-base-100 text-black py-2">{children}</main>
      <MainFooter></MainFooter>
    </>
  );
};

export default Main;
