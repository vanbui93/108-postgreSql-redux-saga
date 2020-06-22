console.log("Generator function: generator trong generator");

//Xin chào => Redux saga => kết thúc

function* printName() {
  yield 'redux saga'
}

function* hello() {
  yield 'Xin chào'
  yield* printName();
  yield '.Kết thúc.'
}

const iterator = hello();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());


//Đối với denerator function sủ dụng vòng lặp vô tận vô cùng an toàn, vì hàm chỉ chạy với lời gọi hàm next()
//than số done luôn là false
// console.log("Vòng lặp vô tận");

// function* helloGeneratorFunction() {
//   while (true) {
//     yield "Tôi đang lắng nghe..."
//   }
// }

// const iterator = helloGeneratorFunction();

// console.log('result 1',iterator.next());
// console.log('result 2',iterator.next());


// console.log("learning generator function");

// function* helloGeneratorFunction() {
//   // câu lệnh 1
//  yield 2019  //dừng !!!
//  // câu lệnh 2
//  return "Tự học lập trình redux saga" //kết thúc throw error
// }

// const result = helloGeneratorFunction();   //ilterators (giống 1 array)
// console.log('result 1',result.next());
// console.log('result 2',result.next());