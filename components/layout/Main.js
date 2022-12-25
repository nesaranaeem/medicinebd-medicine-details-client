import MainFooter from "../common/footer/MainFooter";
import MainHeader from "../common/header/MainHeader";

const Main = ({ children }) => {
  return (
    <>
      <MainHeader></MainHeader>
      <main>{children}</main>
      <MainFooter></MainFooter>
    </>
  );
};

export default Main;
