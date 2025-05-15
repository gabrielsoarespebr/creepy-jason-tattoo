import "./Home.css";

import { Banner } from "./Banner";
import { About } from "./About";

export const Home = () => {
  return (
    <>
      <div id="disclaimer-container">
        <p id="disclaimer-text">disclaimer: unofficial site &#9733; fan-made</p>
      </div>
      <Banner />
      <About />
    </>
  );
};
