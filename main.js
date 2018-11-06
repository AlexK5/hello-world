function consoleLog(){
  console.log("Hello, World!");
}

function popUp(){
  alert("Hello, World!");
}

function browser(){
  var p = document.getElementById("paragraph");
  p.innerHTML = "Hello, World!";
}

function stranger(){
  var name = prompt("What is your name?");
  var p = document.getElementById("greeting");
  p.innerHTML = "Hello, " + name;
}
