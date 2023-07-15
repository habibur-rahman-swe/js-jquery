var txt = "";
var person = {first_name: "Habibullah", last_name: "Habib", age: 30};

var x = 10;

do {
    document.write(x + "<br>");
    x--;
} while (x > 0);

document.getElementById("man").innerHTML = "<button id=\"button\">button</button>";

document.getElementById("button").onclick = function() {
    document.body.style.backgroundColor = "rgb("+ Math.random() * 255 + ", " + Math.random(255) * 255 + ", " + Math.random(255) * 255 + ")";
}

