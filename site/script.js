/*BOTÃO*/

const btnMobile = document.getElementById('btn-mobile');

        function toggleMenu(event) {
            if (event.type === 'touchstart') event.preventDefault();
            const links = document.getElementById('links');
            links.classList.toggle('active');
            const active = links.classList.contains('active');
            event.currentTarget.setAttribute('aria-expanded', active);
            if (active) {
                 event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
            } else {
                event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
            } 
        }


     btnMobile.addEventListener('click', toggleMenu);
     btnMobile.addEventListener('touchstart', toggleMenu);



/************************************************************************************/

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


