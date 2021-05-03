import React from "react";
import Summary from "../components/Summary";
import Features from "../components/Features";
import Previous from "../components/Previous";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
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
  );
};

export default Home;
