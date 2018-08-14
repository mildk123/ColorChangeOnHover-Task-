// Defining IDs As Variables

var box = document.getElementById("box");
var text = document.getElementById("text");

// Funtion to Perform When Mouse Hovers Over Content

function athover() {
    text.style.display = "block";
};

// Funtion to Perform When Mouse Moves Out of Content
function atout() {
    text.style.display = "none";
    box.removeAttribute("onMouseOver");
};

// Function to perform when User Click in Box
function clicked() {
    var background = ["#FFCDD2", "#F8BBD0", "#CE93D8", "#B39DDB", "#3F51B5", "#42A5F5", "#4FC3F7", "#26C6DA", "#26A69A", "#A5D6A7", "#9CCC65", "#795548"];
    var foreground = ["#F48FB1", "#9C27B0", "#F50057", "#311B92", "#1A237E", "#00E5FF", "#C6FF00", "#00E676", "#76FF03", "#FF6D00", "#FFAB00", "#FFFFFF", "#000000"];
    var randomBackground = Math.floor(Math.random() * background.length);
    var randomforeground = Math.floor(Math.random() * foreground.length);

    box.className = "styledbox";

    box.style.backgroundColor = background[randomBackground];

    text.innerHTML = "MAGIC!"

    text.style.color = foreground[randomforeground ];
    text.style.display = "block"
    box.removeAttribute("onMouseout");
}