function createRoom(x, y) {
    var div = document.createElement("div");
    div.style.width = x.toString();
    div.style.height = y.toString();
    div.style.background = "grey";
    div.style.color = "white";
    div.style.border.color = "black";
    document.getElementById("main").appendChild(div);
}