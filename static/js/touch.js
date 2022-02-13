var a = window.document.querySelectorAll("a")
var h3_a = window.document.querySelector("h3 > a")

a[0].ontouchstart = () => {
    a.style.color = "#1a1aff"
    a.style.textDecoration = "underline"
}

a[0].ontouchend = () => {
    a.style.color = "#3a0070"
    a.style.textDecoration = "none"
}

a[1].ontouchstart = () => {
    a.style.color = "#1a1aff"
    a.style.textDecoration = "underline"
}

a[1].ontouchend = () => {
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