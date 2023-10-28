import { shaperMaker } from "./AboutSummary";

const TextBlockShaper = () => {
  const lineArr = shaperMaker();
  return (
    <>
    {/* {console.log(lineArr)} */}
      <p className="aboutSummary">
        {lineArr.map((line) => (
          <>
            {line}<br />
          </>
        ))}
      </p>
    </>
  );
};

export default TextBlockShaper;
