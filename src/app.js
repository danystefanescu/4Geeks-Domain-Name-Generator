let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let com = [".com", ".net", ".org"];

const domainName = (arrP, arrA, arrN, arrC) => {
  for (let i = 0; i < arrP.length; i++) {
    for (let x = 0; x < arrA.length; x++) {
      for (let y = 0; y < arrN.length; y++) {
        for (let w = 0; w < arrC.length; w++) {
          let domGen = arrP[i] + arrA[x] + arrN[y] + arrC[w];
          console.log(domGen);
        }
      }
    }
  }
};

domainName(pronoun, adj, noun, com);
