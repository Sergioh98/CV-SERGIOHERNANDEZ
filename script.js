// Inicializar animaciones al hacer scroll
AOS.init({
    duration: 1000, // Duración de la animación en ms
    once: true,     // Que se anime solo una vez al bajar
    offset: 100     // Comienza a animar 100px antes de que el elemento sea visible
});

// Lógica del Video con Delay
document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('.profile-video');
    
    if(video) {
        setTimeout(() => {
            video.play().catch(error => {
                console.log("El navegador bloqueó el autoplay (común en móviles):", error);
            });
            // Opcional: añadir clase para efecto de transición visual si deseas
            video.classList.add('is-playing'); 
        }, 4000); // 4000ms = 4 segundos
    }
});

/* - Lógica Depurada y Optimizada */

document.addEventListener('DOMContentLoaded', () => {

    // --- 3. EFECTO TYPEWRITER PRO (Para el Nombre H1) ---
    // Este script escribe el texto completo letra por letra
    const typeWriterElement = document.querySelector('.typewriter-effect');
    
    if (typeWriterElement) {
        const textToType = typeWriterElement.getAttribute('data-text') || typeWriterElement.innerText;
        typeWriterElement.innerText = ''; // Limpiamos el texto inicial
        
        let i = 0;
        function type() {
            if (i < textToType.length) {
                typeWriterElement.innerHTML += textToType.charAt(i);
                i++;
                setTimeout(type, 100); // Velocidad de escritura (ms)
            } else {
                // Cuando termina de escribir, quitamos el cursor parpadeante después de un tiempo
                setTimeout(() => {
                    typeWriterElement.classList.add('typing-done');
                }, 2000);
            }
        }
        // Iniciamos el efecto
        setTimeout(type, 500);
    }

    // --- 4. EFECTO H2 (Separación de letras + Animación) ---
    const sectionTitles = document.querySelectorAll('h2');
    
    sectionTitles.forEach(element => {
        const text = element.innerText;
        // Limpiamos el HTML interno para reconstruirlo
        element.innerHTML = ''; 
        
        // Creamos la estructura respetando palabras
        const newHtml = text.split(' ').map((word, wordIndex) => {
            const letters = word.split('').map((char, charIndex) => 
                `<span class="char" style="animation-delay: ${(wordIndex * 100) + (charIndex * 30)}ms">${char}</span>`
            ).join('');
            return `<span class="word-wrapper">${letters}</span>`;
        }).join(' '); // Espacio real entre palabras
        
        element.innerHTML = newHtml;
    });
});
