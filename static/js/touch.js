var a = window.document.querySelectorAll("a")
var h3_a = window.document.querySelector("h3 > a")

a[0].ontouchstart = () => {
    a[0].style.color = "#A5B300"
    a[0].style.textDecoration = "underline"
}

a[0].ontouchend = () => {
    a[0].style.color = "#390066"
    a[0].style.textDecoration = "none"
}

a[1].ontouchstart = () => {
    a[1].style.color = "#A5B300"
    a[1].style.textDecoration = "underline"
}

a[1].ontouchend = () => {
    a[1].style.color = "#390066"
    a[1].style.textDecoration = "none"
}

h3_a.ontouchstart = () => {
    h3_a.style.color = "#390066"
    h3_a.style.textDecoration = "underline"
}

h3_a.ontouchend = () => {
    h3_a.style.color = "#A5B300"
    h3_a.style.textDecoration = "none"
}