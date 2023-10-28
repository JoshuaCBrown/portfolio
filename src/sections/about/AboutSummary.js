const aboutText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

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

const blockStruct = [pOne, pTwo, pThree, pFour, pFive, pSix, pSeven, pFour, pThree];

export function shaperMaker() {
  let lineArr = [];
  let second = 0;
  for (let i = 0; i < blockStruct.length; ++i) {
    let first = second;
    second += blockStruct[i];
    while (charArr[second] !== " ") {
      ++second;
    }
    lineArr[i] = charArr.slice(first, second).join("").trim();
  }
  lineArr[blockStruct.length] = charArr.slice(second);
  console.log(blockStruct);
  console.log(charArr);
  console.log(lineArr);
  return lineArr;
}
