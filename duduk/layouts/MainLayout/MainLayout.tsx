import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
