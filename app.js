// 34

// let a = prompt("a ni kiriting:");
// let b = prompt("b ni kiriting:");
// let c = prompt("c ni kiriting:");
// let comparison = a < b < c ? "Yes" : "No";
// console.log(comparison);

// 35
// let a = 2;
// let b = -1;
// let c = -3;

// if (a >= b && b >= c) {
//   a = a * 2;
//   b = b * 2;
//   c = c * 2;
//  result = `${a}, ${b}, ${c}`;
// } else {
//   a = Math.abs(a);
//   b = Math.abs(b);
//   c = Math.abs(c);
//   result = `${a}, ${b}, ${c}`;
// }

// console.log(result);

// 38
// let x = 0.54;
// let y = 0.09;
// let z = 1.61;

// if (x >= 1 && x <= 3) {
//   console.log(x);
// } else if (y >= 1 && y <= 3) {
//   console.log(y);
// } else if (z >= 1 && z <= 3) {
//   console.log(z);
// }

// 39;
// let x = 0;
// let y = 1;

// if (x < y) {
//   let a = (x + y) / 2;
//   let b = 2 * x * 2 * y;
//   console.log(a, b);
// } else {
//   let b = (x + y) / 2;
//   let a = 2 * x * 2 * y;
//   console.log(a, b);
// }

// 44
// let x = 3;
// let y = 1;
// let z = 3;
// if (x + y > z && x + z > y && y + z > x) {
//   console.log("Yes");
// } else {
//   console.log("No");
// }

// 45
let a = 8;
let b = 9;
let c = 5;
let result = b * b - 4 * a * c;
if (result > 0) {
  let x1 = -b + Math.sqrt(result) / (2 * a);
  let x2 = -b - Math.sqrt(result) / (2 * a);
  console.log(x1, x2);
} else if (result == 0) {
  let x = -b;
  console.log(x);
} else {
  console.log("No ");
}
