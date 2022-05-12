hexnum = true;

function changeColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
    


    function RGBcolor() {
        let stringColor = randomColor.toString();
        let first = stringColor.slice(0, 2);
        let second = stringColor.slice(2, 4);
        let third = stringColor.slice(4, 6);
        console.log(first);
        console.log(second);
        console.log(third);
        return "rgb " + parseInt(first,16) + " " + parseInt(second,16) + " " +parseInt(third,16);
    }

    if (hexnum) {
        $("#colortext").text("#" + randomColor.toUpperCase());

    } else {
        $("#colortext").text(RGBcolor());
    }
}
$("#hex").on("click", function () {
    hexnum = true;
});

$("#num").on("click", function () {
    hexnum = false;
});
