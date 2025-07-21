import React from "react";
import SplitText from "../TextAnimations/SplitText/SplitText";

const handleAnimationComplete = () => {
  console.log("All letters have animated!");
};

function Hero() {
  return (
    <SplitText
      text="Hi, I am Ionut!"
      className="hero-font"
      delay={100}
      duration={0.6}
      ease="power3.out"
      splitType="chars"
      from={{ opacity: 0, y: 40 }}
      to={{ opacity: 1, y: 0 }}
      threshold={0.1}
      rootMargin="-100px"
      textAlign="center"
      onLetterAnimationComplete={handleAnimationComplete}
    />
  );
}

export default Hero;
