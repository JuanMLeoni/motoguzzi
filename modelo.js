const tiempomili = 5000;
const fotos = document.querySelector(".Fotos");
const botones = document.querySelectorAll(".Boton1");
let desplazamieto = 100 / botones.length
fotos.style.width = `${100 * botones.length}%`
let imgACT = 0;
botones[imgACT].classList.add("activo")
for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", () => {
        botones[imgACT].classList.remove("activo")
        let k = i*desplazamieto
        imgACT = i
        fotos.style.transform = `translateX(-${k}%)`
        botones[i].classList.add("activo")
    })
}

setInterval(() => {
    botones[imgACT].classList.remove("activo")
    if (imgACT == 2) {
        imgACT = 0
    }
    else {
        imgACT++
    }
    let k = imgACT * desplazamieto
    fotos.style.transform = `translateX(-${k}%)`
    botones[imgACT].classList.add("activo")
}, tiempomili)

