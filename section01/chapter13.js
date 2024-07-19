//1. 콜백 함수
function main(value) {
  //   console.log(value);
  value();
}

function sub() {
  console.log("I am sub");
}

main(sub);

main(() => {
  console.log("I am sub");
});

//2. 콜백 함수 활용
function repeat(count) {
  for (let idx = 0; idx < count; idx++) {
    console.log(idx + 1);
  }
}

function repeatDouble(count) {
  for (let idx = 0; idx < count; idx++) {
    console.log((idx + 1) * 2);
  }
}

repeat(5);
repeatDouble(5);

function repeatCall(count, callback) {
  for (let idx = 0; idx < count; idx++) {
    callback(idx);
  }
}

repeatCall(5, function (idx) {
  console.log(idx + 1);
});

repeatCall(5, (idx) => {
  console.log((idx + 1) * 4);
});
