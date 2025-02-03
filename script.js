// Seleccionamos el contenedor de corazones
const heartsContainer = document.querySelector('.hearts-container');

// Creamos múltiples corazones
const numHearts = 30; // Cambia este número para agregar más o menos corazones

for (let i = 0; i < numHearts; i++) {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  
  // Posición inicial aleatoria
  const startX = Math.random() * window.innerWidth;
  heart.style.left = `${startX}px`;

  // Duración de animación aleatoria
  const duration = Math.random() * 3 + 4; // Entre 4 y 7 segundos
  heart.style.animationDuration = `${duration}s`;

  // Retraso de inicio aleatorio
  const delay = Math.random() * 3; // Hasta 3 segundos de retraso
  heart.style.animationDelay = `${delay}s`;

  // Agregamos el corazón al contenedor
  heartsContainer.appendChild(heart);
}


function toggleNota() {
    let carta = document.querySelector(".carta");
    let nota = document.querySelector(".nota");

    if (!carta.classList.contains("abierta")){
        carta.classList.add("abierta");
        nota.classList.add("nota-guardada");
    }else{
        nota.classList.remove("nota-guardada");

        setTimeout(() => {
            carta.classList.remove("abierta");
        }, 500);

    }
    
}



