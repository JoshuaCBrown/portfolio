const aboutText =
  "My name is Josh Brown. I like problem solving and making things. I am a self-taught full stack web developer with experience in the MERN stack, and intend to one day enter into a career as a professional programmer. While I am fairly early in my programming journey, I have already fallen in love with programming, in that it shares the same foundational attributes as my favorite hobbies: creativity, problem solving, and a virtually endless supply of new information to continuously learn and grow. Click the buttons below to learn more about me, or click here for a single page, non-interactive version of my resume. ";

const charArr = aboutText.split("");
// const wordLengthArr = charArr.map((word) => {
//   const wordLength = word.split('');
//   return wordLength.length;
// })

//change these values to change proportions of each line
const proportionArr = [0.05, 0.08, 0.1, 0.12, 0.15, 0.17, .2];

const pOne = Math.trunc(charArr.length * proportionArr[0]);
const pTwo = Math.trunc(charArr.length * proportionArr[1]);
const pThree = Math.trunc(charArr.length * proportionArr[2]);
const pFour = Math.trunc(charArr.length * proportionArr[3]);
const pFive = Math.trunc(charArr.length * proportionArr[4]);
const pSix = Math.trunc(charArr.length * proportionArr[5]);
const pSeven = Math.trunc(charArr.length * proportionArr[6]);

const blockStruct = [pOne, pTwo, pThree, pFour, pFive, pSix, pSeven];

export function shaperMaker () {
  let lineArr = [];
  let second = 0;
  for (let i = 0; i < blockStruct.length; ++i) {
    let first = second;
    second += blockStruct[i];
    while (charArr[second] !== " " && second < (charArr.length-1)) {
      ++second;
    }
    lineArr[i] = charArr.slice(first, second).join("").trim();
  }
  lineArr[blockStruct.length] = charArr.slice(second).join('').trim();
  console.log(blockStruct);
  console.log(charArr);
  console.log(lineArr);
  return lineArr;
}
