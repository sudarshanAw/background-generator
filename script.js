h3 = document.querySelector("h3");
color_1 = document.querySelector(".color_1");
color_2 = document.querySelector(".color_2");
body = document.querySelector("body")


function changeBackground() {
    body.style.background = "linear-gradient(to right"+
       "," + color_1.value + "," + color_2.value
    ")"
    print_test(body.style.background)
    h3.textContent = body.style.background;
}
color_1.addEventListener("input",changeBackground);

color_2.addEventListener("input",changeBackground);


function print_test(data){
    console.log(data)
}