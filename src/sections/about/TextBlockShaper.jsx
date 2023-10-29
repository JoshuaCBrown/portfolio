import { shaperMaker } from "./AboutSummary.js";

const TextBlockShaper = () => {
  const lineArr = shaperMaker();
  const allButFirstLine = lineArr.slice(1);

  return (
    <>
    {/* {console.log(lineArr)} */}
      <p className="aboutSummary">
        {lineArr[0]}
        {allButFirstLine.map((line) => (
          <>
            <br />{line}
          </>
        ))}
      </p>
    </>
  );
};

export default TextBlockShaper;
