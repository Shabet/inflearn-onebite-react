function returnFalse() {
  console.log("false 함수");
  return false;
}

function returnTrue() {
  console.log("true 함수");
  return true;
}

console.log(returnFalse() && returnTrue());
console.log(returnTrue() && returnFalse());

console.log(returnTrue() || returnFalse());

//단락 평가 활용 사례
function printName(person) {
  if (!person) {
    console.log("person에 값이 없음");
    return;
  }

  console.log(person.name);
}

function printNameV2(person) {
  console.log(person && person.name);
}

function printNameV3(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}

printName();
printNameV2({ name: "이정환" });
printNameV3({ name2: "이정환" });
