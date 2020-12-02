var user = "John Doe"; // = is the operator
var nrOfUsers = 10 + 3 + 5; // nrOfUsers = 18 and + is the operator
var result = 5 * 3; // result = 15 and * is the operator
var bigger = 10 > 5; // bigger = true and > is the operator
console.log(user);
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var fruitString = fruits.toString();
console.log(fruitString); // Banana,Orange,Apple,Mango
var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var splice = myArray.splice(3, 5);

console.log(splice); // will print out 3,4,5,6,7
console.log(myArray); // will print out 0,1,2,8,9

var myArray = ["Banana", "Orange", "Apple", "Mango"];
var splice = myArray.splice(0, 1);

console.log(splice); // will print out 0=Banana
console.log(myArray); // will print out 0,1,2,8,9

// Array med Variabler
var cars = ["Saab", "Volvo", "BMW"];

// POP = tar bort sista värdet
var numbersArray = [4, 9];
numbersArray.pop();
console.log(numbersArray);

// SPLICE = 1 första värdet andra 1 hur många i arrayen.
var numbersArray = [3, 8];
var splice = numbersArray.splice(1, 1);
console.log(numbersArray);

// skriver ut första värder i arrayen
var numbersArray = [7, 9];
console.log(numbersArray[0]);

//
var numbersArray = [6, 7];
console.log(numbersArray[0]);
numbersArray.push((Boolean = false)); //Push + på en värde detta fall false som värde.
console.log(numbersArray.length); //hur många värden i array

//
var numbersArray = [2, "nisse", 7];
numbersArray[1] = 234; //byter ut array 1 till 234
console.log(numbersArray);

//
numbersArray = [2, false, "nisse"]; //int, bolean, string
numbersArray.pop(); //ta bort sista värdet
console.log(numbersArray);
var numbersArray = numbersArray.toString(); //göra om alla värden till sträng
console.log(numbersArray);

//
var user = "john doe"; //variabel
var users = [user]; //variablern user läggs o array
console.log(user);

//
var numValue = 3;
numValue = numValue + 10;
numValue = numValue + 20;
console.log(numValue);

//
var numValue = 6;
numValue = numValue * 18;
console.log(numValue);

//
var numValue = 232;
numValue = numValue - 22;
numValue = numValue / 3;
console.log(numValue);

//
var firstname = "Patrik ";
var lastname = "Axelsson";
console.log(firstname + lastname);

//
var increaser = 4;
var increaseBy = 3;
increaser = increaser + increaseBy;
console.log(increaser);

//
var tal = 25 > 10;
console.log(tal);

//
var tal = "45" + "65";
tal = 45 + 65;
console.log(tal);

//
var tal1 = "45";
var tal2 = "65";
rätt = tal1 + tal2;
console.log(rätt);

//
var tal1 = "45";
var tal2 = "65";
rätt = tal1 * tal2;
console.log(rätt);

//
let height = 180;

if (height > 100) {
  console.log("higher than 100");
} else if (height < 180) {
  console.log("lower than 180");
} else if (height == 190) {
  console.log("exactly 190");
} else if (height === 190) {
  console.log("exactly 190 and same type");
}
//

let car1 = {
  color: "blue",
  brand: "bmw",
  engine: "v8",
  topSpeed: 320,
  fuel: 50,
  Light: {
    frontLight: "red",
    backLight: "green",
  },
};
let car2 = {
  color: "red",
  brand: "volvo",
  engine: "v8",
  topSpeed: 300,
  fuel: 70,
  start: function () {
    console.log("Car Started!");
  },
  tanka: function () {
    this.fuel = this.fuel + 10;
    return (this.fuel = 100);
  },
};

console.log(car1);
console.log(car2);
