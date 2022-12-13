/* let price = 799;
let quality = 10;
 let totalCost = price * quality;

 console.log(`TOTAL Cost : `, totalCost, ` yan `);*/

/*let userName = prompt(`Please enter user Name`);
 let canDrive = confirm(`are you can drive?`);
 alert(`hello`);
  console.log(`User Name: `, userName);
  document.write(`<h1> hello ${userName}</h>`);*/

/*let a = 7;
let b = 8;
  let c = a + b;
  let d = a * b;
  console.log(`value in c : `, c);
 console.log(`value in d : `, d);
 console.log(typeof a, typeof b, typeof c, typeof d);*/
/*let a = `777.777$`;
console.log(a, typeof a);
a = parseFloat(a);
console.log(a, typeof a);
let b = `777.788`;
b = +b;
console.log(b, typeof b);
let c = `777$`;
c = parseFloat(c);
console.log(c, typeof c);
let d = 126.1256;
d = Math.round(d);
let f = 126.126;
f = Math.floor(f);
let y = 125.123;
y = Math.ceil(y);
console.log(d);
console.log(f);
console.log(y);*/

// 1)функция поиска периметра квадрата / search function for the perimeter of a square
let sideLengthSquare = +prompt(`please enter side length of a square`);
let perimeterSquare = sideLengthSquare * 4;

console.log(`perimete Squere`, perimeterSquare);

// 2)обьем куба и площадь его боковой поверхности / volume of a cube and its lateral surface area
let cubeEdgeLength = +prompt(`please enter cube edge length`);
let cubeVolume = Math.pow(cubeEdgeLength, 3);

console.log(`cube volume`, cubeVolume);

let sideSurfaceAreaCube = 4 * Math.pow(cubeEdgeLength, 2);

console.log(`Side surface area of the cube`, sideSurfaceAreaCube);

// 3)найти длину окружности и площадь круга / find the circumference and area of a circle

let circleRadius = +prompt(`please enter circle radius`);
const pi = 3.14;
let circumference = circleRadius * pi;

console.log(`circumference`, circumference);

let areaCircle = pi * Math.pow(circleRadius, 2);

console.log(`area of a circle`, areaCircle);

// 4)определение плотности материала / material density determination

let volumeMatter = +prompt(`Please enter volume of a matter`);
let massMatter = +prompt(`Please enter mass of a matter`);
let materialDensityDetermination = volumeMatter * massMatter;

console.log(`material density determination`, materialDensityDetermination);

// 5)плотность населения государства / state population density
let numberInhabitantsState = +prompt(
  `please enter number of inhabitants in the state`
);
let stateArea = +prompt(`please enter the number in the state  area`);
let statePopulationDensity = numberInhabitantsState / stateArea;

console.log(`state population density`, statePopulationDensity);

//5) поиск гипотенузы треугольника / finding the hypotenuse of a triangle
//Math. sqrt()

let firstLeg = +prompt(`please enter first leg `);
let secondtLeg = +prompt(`please enter second leg `);
let hypotenuseTriangle = Math.sqrt(
  Math.pow(firstLeg, 2) * Math.pow(secondtLeg, 2)
);
console.log(`finding the hypotenuse of a triangle`, hypotenuseTriangle);

// расчет значения y прилюбых введенных a  / calculation of the value y for any input a

let a = +prompt(`please enter any input a `);
let y = (Math.pow(a, 2) + 10) / Math.sqrt(Math.pow(a, 2) + 1);
y = Math.floor(y);
console.log(`calculation of the value y for any input a`, y);
