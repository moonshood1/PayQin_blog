import React from "react";
import Summary from "../components/wrappers/Summary";
import Features from "../components/wrappers/Features";
import Previous from "../components/wrappers/Previous";
import Footer from "../components/wrappers/Footer";
import Overlay from "../components/wrappers/Overlay";

const Home = ({ showOverlay, setShowOverlay }) => {
  const handleClick = () => {
    setShowOverlay(false);
  };
  return (
    <div>
      {showOverlay && <Overlay setShowOverlay={setShowOverlay} />}
      <div onClick={handleClick}>
        <div>
          <Summary />
        </div>
        <div>
          <Features />
        </div>
        <div>
          <Previous />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
