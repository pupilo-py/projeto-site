var a = window.document.querySelector("a")
var h3_a = window.document.querySelector("h3 > a")

a.ontouchstart = () => {
    a.style.color = "#1a1aff"
    a.style.textDecoration = "underline"
}

a.ontouchend = () => {
    a.style.color = "#3a0070"
    a.style.textDecoration = "none"
}

h3_a.ontouchstart = () => {
    h3_a.style.color = "#3a0070"
    h3_a.style.textDecoration = "underline"
}

h3_a.ontouchend = () => {
    h3_a.style.color = "#1a1aff"
    h3_a.style.textDecoration = "none"
}