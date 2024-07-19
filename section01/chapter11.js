//함수 선언
function greeting() {
  console.log("Hello");
}

greeting();

let area1 = getArea(10, 20);
let area2 = getArea(30, 40);

console.log(area1);
console.log(area2);
console.log(getArea(3, 4));

//호이스팅
//-> 끌어올리다 라는 뜻
function getArea(width, height) {
  function another() {
    console.log("another");
  }
  another();

  let area = width * height;

  return area;
}
