import { useAnimate } from "framer-motion";

export default function aboutAnimation() {
  const [scope, animate] = useAnimate();
  const simulOne = () => {
    return (
      animate(
        ".about-left-right-top-dashes",
        { height: "70%" },
        { duration: 0.15 }
      ),
      animate(
        ".about-left-right-bottom-top-dashes",
        { height: "100%" },
        { duration: 0.25 }
      ),
      animate(".about-middle-top-dashes", { width: "100%" }, { duration: 0.25 })
    );
  };
  const simulTwo = () => {
    return (
      animate(
        ".about-left-right-bottom-top-dashes",
        { width: "70%" },
        { duration: 0.15, ease: "easeOut" }
      ),
      animate(
        ".about-right-top-left-dashes",
        { width: "100%" },
        { duration: 0.15 }
      ),
      animate(
        ".about-left-right-bottom-bottom-dashes",
        { height: "100%" },
        { duration: 0.25 }
      ),
      animate(
        ".about-middle-middle-dashes",
        { width: "100%" },
        { duration: 0.5 }
      )
    );
  };
  const simulThree = () => {
    setSkylineReady(true);
    return animate(
      ".livin-in-the-city",
      { filter: "blur(0px)", opacity: 1 },
      { duration: 1 }
    );
  };
  const simulFour = () => {
    setBgSkylineReady(true);
    return animate(
      ".tilted-container-dash",
      { height: "100%" },
      { duration: 0.7, delay: 0.2 }
    );
  };

  const showPhoto = () => {
    return (
      animate(
        ".fresh-foto",
        { filter: "blur(0)" },
        { duration: 1, delay: 1, ease: "easeOut" }
      ),
      animate(
        ".photo-border-reveal",
        { opacity: 1 },
        { duration: 0.5, delay: 0.5 }
      )
    );
  };

  const simulFive = () => {
    return (
      animate(".skyline-svg-bg", { opacity: 0.9 }, { duration: 1, delay: 0.5 }),
      animate(
        ".problem-solving",
        {
          opacity: [0, 0.5, 1, 1],
          filter: ["blur(5px)", "blur(10px)", "blur(1px)", "blur(0px)"],
        },
        { duration: 1.5, delay: 0.5 }
      ),
      animate(".go-button", { opacity: 1 }, { duration: 2, delay: 1 })
    );
  };

  const runAnimation = async () => {
    await showPhoto();
    await animate(
      ".photo-container-dashes",
      { opacity: 1, rotate: [270, 0] },
      { ease: "easeOut", duration: 0.7 }
    );
    await animate(
      ".about-left-right-top-dashes",
      { width: "100%" },
      { duration: 0.25, delay: 0.25 }
    );
    await simulOne();
    await simulTwo();
    await animate(
      ".about-right-middle-left-dashes",
      { width: "100%" },
      { duration: 0.25 }
    );
    await simulThree();
    await simulFour();
    setAnimateMe(true);
    await simulFive();
  };
  runAnimation().catch(console.error);
}
