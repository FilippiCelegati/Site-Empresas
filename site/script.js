let time = 4000,
    currentImageIndex = 0,
    images = document
                .querySelectorAll("#slider img")
    max = images.length; /*MAXIMO DE IMAGEM QUE VAI RODAR*/

function nextImage() { /*chama as imagens*/

    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if(currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")
}

function start() { /*lógica de troca de imagem*/
    setInterval(() => {
        // troca de image
        nextImage()
    }, time)
}

window.addEventListener("load", start)

