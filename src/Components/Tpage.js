import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import Explore from "./Explore";
import Create from "./Create";
import Share from "./Share";
import Footer from "./Footer";

const Tpage = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <Explore />
      <Create />
      <Share />
      <Footer />
    </div>
  );
};

export default Tpage;
