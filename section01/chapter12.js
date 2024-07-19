//1. 함수 표현식
function funcA() {
  console.log("funcA");
}

let varA = funcA;
console.log(varA);

varA();

//호이스팅 (X)
let varB = function () {
  console.log("funcB");
};

varB();

//2. 화살표 함수
// let varC = () => {
//   return 1;
// };

let varC = (value) => {
  console.log(value);
  return value + 1;
};

console.log(varC(10));
