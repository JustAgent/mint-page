import React from "react";
import "./styles/Content.css";

const Content = () => {
  return (
    <div className="content">
      <div className="name">Your NFT Name</div>

      <h2 className="desc">
        Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa
        egestas mollis varius; dignissim elementum. Mollis tincidunt mattis
        hendrerit dolor eros enim, nisi ligula ornare.{" "}
      </h2>
      <span>
        <button>-</button>
        <input className="placeholder" placeholder="count"></input>
        <button>+</button>
      </span>
      <div>
        <button className="mint">Mint Now</button>
      </div>
    </div>
  );
};

export default Content;
