import React from "react";
import heroimg from "../image/heroimg1.png"

const Hero = () => {
  return (
    <section className="hero">
      <div className="herocontaint">
        <h1>Poetry Haven Inc</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint
          expedita tempore rem, harum eius voluptatibus nisi totam sapiente,
          tenetur earum ipsam maiores assumenda consequuntur. Minima mollitia
          necessitatibus impedit dolorem minus.
        </p>
        <button>Subscribe Now</button>
      </div>
      <div className="heroimage">
        <img src={heroimg} alt="Poetry Haven" />
      </div>
    </section>
  );
};


export default Hero;
