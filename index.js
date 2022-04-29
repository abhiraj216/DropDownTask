function myfunc() {
  var a = document.getElementById("myList").value;
  if (a === "Maharashtra") {
    var arr = ["Mumbai", "Pune", "Kolhapur"];
    document.getElementById("demo").innerHTML = arr;
  } else if (a === "Punjab") {
    var arr = ["Amritsar", "Bhatinda", "Moga"];
    document.getElementById("demo").innerHTML = arr;
  } else {
    var arr = ["Bangalore", "Hubli", "Mysore"];
    document.getElementById("demo").innerHTML = arr;
  }
}
