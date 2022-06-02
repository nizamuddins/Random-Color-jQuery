function myfunc() {
    const red = Math.floor(Math.random() * 125);

    const green = Math.floor(Math.random() * 125);

    const blue = Math.floor(Math.random() * 125);

    const color = `rgb(${red},${green},${blue})`

    return color;
}

const body = $("body");

const id = setInterval(() => {

    const color = myfunc();

    body.css("background-color", color)

}, 1000)

const button = $("button");

button.click( function () {

    clearInterval(id);

    button.text(myfunc());

})
