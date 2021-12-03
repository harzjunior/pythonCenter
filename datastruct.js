// var harz = [
//   {
//     name: "Harz",
//     age: "30",
//     height: "150",
//     weight: "150 kg",
//     hair: "brown",
//     eyes: "blue",
//     complexion: "fair",
//     country: "France",
//     city: "Berlin",
//     address: "Berlin, Germany",
//     phone: "0123456789",
//     email: "sample@gmail.com",
//     password: "ngd1234",
//     image: "harz.jpg",
//   },
// ];
// console.log(harz);

// var ben = [
//   {
//     name: "Zero",
//     age: "30",
//     height: "150",
//     weight: "150 kg",
//     hair: "brown",
//     eyes: "blue",
//     complexion: "fair",
//     country: "Germany",
//     city: "Berlin",
//     address: "Berlin, Germany",
//     phone: "0123456789",
//   },
//   {
//     name: "One",
//     age: "30",
//     height: "150",
//     weight: "150 kg",
//     hair: "brown",
//     eyes: "blue",
//     complexion: "fair",
//     country: "Germany",
//     city: "Berlin",
//     address: "Berlin, Germany",
//     phone: "0123456789",
//   },
//   {
//     name: "Two",
//     age: "30",
//     height: "150",
//     weight: "150 kg",
//     hair: "brown",
//     eyes: "blue",
//     complexion: "fair",
//     country: "Germany",
//     address: "Berlin, Germany",
//     phone: "0123456789",
//   },
//   {
//     name: "Three",
//     age: "30",
//     height: "150",
//     weight: "150 kg",
//     hair: "brown",
//     eyes: "blue",
//     complexion: "fair",
//     country: "Germany",
//     city: "Berlin",
//     address: "Berlin, Germany",
//     phone: "0123456789",
//   },
//   {
//     name: "Four",
//     age: "30",
//     height: "150",
//     weight: "150 kg",
//     hair: "brown",
//     eyes: "blue",
//     complexion: "fair",
//     country: "Germany",
//     city: "Berlin",
//     address: "Berlin, Germany",
//     phone: "0123456789",
//   },
//   {
//     name: "Five",
//     age: "30",
//     height: "150",
//     weight: "150 kg",
//     hair: "brown",
//     eyes: "blue",
//     complexion: "fair",
//     country: "Germany",
//     city: "Berlin",
//     address: "Berlin, Germany",
//     phone: "0123456789",
//   },
//   {
//     name: "Six",
//     age: "30",
//     height: "150",
//     weight: "150 kg",
//     hair: "brown",
//     eyes: "blue",
//     complexion: "fair",
//     country: "Germany",
//     city: "Berlin",
//     face: "round",
//     address: "Berlin, Germany",
//     phone: "0123456789",
//   },
// ];

// //find index
// var benIndex = ben.findIndex((items) => items.face === "round"); //round found at index 6
// console.log(benIndex);

// //find name
// var benName = ben.find((items) => items.name === "Six");
// console.log(benName);

// //delete ben
// ben.splice(2, 3); //delete 3 items starting at index 2
// console.log(ben);

// ben.push({
//   name: "James",
//   age: "23",
//   height: "170",
//   weight: "80 kg",
//   hair: "brown",
//   eyes: "blue",
//   complexion: "fair",
//   country: "Germany",
//   city: "Berlin",
//   address: "Berlin, Germany",
//   phone: "0123456789",
// });

// console.log("map------------------------");
// ben.map((item) => {
//   console.log(item);
// });

// console.log(
//   "forEach---------------------------------------------------------------------------------------------------------------------------------------------"
// );
// ben.forEach((element) => {
//   console.log(element);
// });

// console.log(
//   "for of---------------------------------------------------------------------------------------------------------------------------------------------"
// );
// for (var element of ben) {
//   console.log(element);
// }

// console.log(
//   "forLoop---------------------------------------------------------------------------------------------------------------------------------------------"
// );
// for (var i = 0; i < ben.length; i++) {
//   console.log(ben);
// }

//implement a binary sort
// function binarySearch(array, target) {
//   var start = 0;
//   var end = array.length - 1;
//   var middle;

//   while (start <= end) {
//     middle = Math.floor((start + end) / 2);
//     if (array[middle] === target) {
//       return middle;
//     } else if (array[middle] < target) {
//       start = middle + 1;
//     } else {
//       end = middle - 1;
//     }
//   }
//   return "";
// }

// var search = binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7);

// console.log(search + 1, " found at index", search);

//implement a bubble sort
function bubbleSort(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = 0; j < array.length; j++) {
      if (array[i] > array[j]) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      console.log(array);
    }
    console.log(" ");
  }
  return array;
}

console.log(bubbleSort([ 2, 4, 6, 8]));

2
4
6