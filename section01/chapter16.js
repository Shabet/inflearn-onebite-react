//1. 상수 객체
const animal = {
  type: "고양이",
  name: "나비",
  color: "black",
};

// animal = { a: 1 }; //error

animal.age = 2; //추가
animal.name = "까망이"; //수정
delete animal.color;

console.log(animal);

//2. 메서드
//-> 값이 함수인 프로퍼티를 말함

const person = {
  name: "이정환",
  //메서드
  sayHi: function () {
    console.log("hi");
  },
  sayHi2: () => {
    console.log("hi");
  },
  sayHi3() {
    console.log("hi");
  },
};

person.sayHi();
person.sayHi2();
person.sayHi3();
person["sayHi"]();
person["sayHi2"]();
person["sayHi3"]();
