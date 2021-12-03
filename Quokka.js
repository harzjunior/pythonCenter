var tbody = document.querySelector("#tbody");
console.log(tbody);

var pp = document.querySelector("#p");
pp.innerHTML = "<h2>Hello Dom 2</h2>";
pp.innerHTML += "<p>This is a paragraph</p>";
console.log(pp);

//create a new element shows up in 2 seconds
var newElement = document.createElement("h2");
newElement.innerHTML = "Hello Dom";
setTimeout(function () {
  document.body.appendChild(newElement);
}, 900);

//create numbers from 1 to 10 in intervel of 3 second
var i = 1;
setInterval(function () {
  if (i <= 5) {
    var newElement = document.createElement("h2");
    newElement.innerHTML = "Hello Dom " + i;
    setTimeout(function () {
      document.body.appendChild(newElement);
    }, 1000);
    i++;
  } else {
    clearInterval(i);
  }
}, 1000);

d = new Date();
console.log(d);

document.getElementById("demo").innerHTML =
  "Today is " +
  d.getDate() +
  " / " +
  d.getMonth() +
  " / " +
  d.getFullYear() +
  " you know what time is it " +
  d.getHours() +
  ":" +
  d.getMinutes() +
  ":" +
  d.getSeconds();

console.log("#tbody node name is:", tbody.nodeName);

var nody = document.querySelectorAll("#h2");
h2.innerHTML = "p node name is: " + demo.nodeName + " tag";

//methods to check if the haschild/children
console.log("#tbody hasChildNodes?: ", tbody.hasChildNodes());

//cloneNode
var clone = tbody.cloneNode(true);
console.log("#tbody cloneNode: ", clone);
