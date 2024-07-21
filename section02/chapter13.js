function add10(num) {
  const promise = new Promise((resolve, reject) => {
    //비동기 작업 실행하는 함수
    //executor

    setTimeout(() => {
      // const num = 10;
      //   const num = null;

      if (typeof num === "number") resolve(num + 10);
      else reject("num이 숫자가 아닙니다.");

      // console.log("안녕");
      // resolve("안녕");
      // reject("왜 실패했는지 이유...");
    }, 2000);
  });

  return promise;
}

// setTimeout(() => {
//   console.log(promise);
// }, 3000);

//then 메서드
//-> 그 이후에
// promise.then((value) => {
//   console.log(value);
// });

// promise.catch((error) => {
//   console.log(error);
// });

// promise
//   .then((value) => {
//     console.log(value);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const p = add10(0);
// p.then((result) => {
//   console.log(result);

//   const newP = add10(result);
//   newP.then((result) => {
//     console.log(result);
//   });
// });

add10(0)
  .then((result) => {
    console.log(result);
    return add10(result);
  })
  .then((result) => {
    console.log(result);
    return add10(undefined);
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });
