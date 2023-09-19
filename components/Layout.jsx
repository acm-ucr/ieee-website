import Navigation from "./Navigation";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[url('../public/assets/circuit-board.svg')] bg-ieee-black text-white pt-12 flex flex-col items-center justify-center">
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
