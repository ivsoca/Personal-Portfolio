const content = {
  es: `
   
        
         <div class="blog-container">
         <h1>21 BlackJack
          <img src="./assets/Banderas/español.png" class="flags" onclick="changeLanguage('es')" alt="">
            <img src="./assets/Banderas/ingles.png" class="flags" onclick="changeLanguage('en')" alt=""></h1>
          <br>
          <p class="parrafo-introduccion">Mini Project to Practice Logic</p>
          <br>      
          <p class="cutoff-text">To practice my programming logic, I decided to create a mini-project based on the popular game of 21 Blackjack. This project was an excellent opportunity to put my knowledge and skills to the test.</p>
          <p>
          Not only did I focus on the game's logic, but I also wanted to give it a personal and creative touch. To do this, I designed each of the cards in Photoshop using the "pixel art" technique. This process was both challenging and rewarding, as it allowed me to combine my technical skills with my passion for design.
          </p>
          <p>
          The development of the project involved writing the code to handle the game's rules, such as dealing cards, calculating scores, and managing the decisions of the player and the dealer. Through this exercise, I delved into fundamental programming concepts and data manipulation.
          </p>
          <p>
          This 21 Blackjack project not only reinforced my understanding of programming logic but also allowed me to explore the creative process of game development.
          </p>

           <p>Here you can see the finished project:</p>
           <a href="https://ivsoca.github.io/21-Black-Jack/" style="
            background-color: #e63946; /* Rojo suave */
            color: #ffffff; /* Letra blanca */
            border: none;
            text-decoration: none;
            border-radius: 5px; /* Bordes redondeados */
            padding: 10px 20px; /* Espaciado interno */
            font-size: 18px; /* Tamaño de la fuente */
            cursor: pointer; /* Cursor en forma de mano */
            transition: background-color 0.3s ease; /* Transición suave para el color de fondo */
          ">
            21 BlackJack proyect   
          </a>
           <br>
           <br>

              <a href="./blog-pages/blog.html"><i class="fa-solid fa-arrow-left" style="color: #ffffff;"></i></a> 
          <div class="col-12 text-center">
          </div>
          <div class="footer-content">
            <p>&copy; 2024 Made. by Iván Soca</p>
            <div class="social-icons">
                <!-- Agrega más enlaces de redes sociales según sea necesario -->
            </div>
        </div>
    `,

  en: `
         <div class="blog-container" >
          <h1>21 BlackJack
          <img src="./assets/Banderas/español.png" class="flags" onclick="changeLanguage('es')" alt="">
            <img src="./assets/Banderas/ingles.png" class="flags" onclick="changeLanguage('en')" alt="">
            </h1>
          <br>
          <p class="parrafo-introduccion">Mini proyecto para practicar logica!</p>
          <br>
           <p class="cutoff-text">Para practicar mi lógica de programación, decidí crear un mini proyecto basado en el popular juego de 21 Blackjack. Este proyecto fue una excelente oportunidad para poner a prueba mis conocimientos y habilidades adquiridas hasta el momento.</p>

           <p>
           No solo me enfoqué en la lógica del juego, sino que también quise darle un toque personal y creativo. Para ello, diseñé cada una de las cartas en Photoshop utilizando la técnica de "pixel art". Este proceso fue tanto desafiante como gratificante, ya que pude combinar mis habilidades técnicas con mi pasión por el diseño.
           </p>

           <p>
           El desarrollo del proyecto implicó escribir el código que manejara las reglas del juego, como el reparto de cartas, el cálculo de puntuaciones y las decisiones del jugador y del dealer. A través de este ejercicio, profundicé en conceptos fundamentales de la programación y la manipulación de datos.
           </p>

           <p>
            Este proyecto de 21 Blackjack no solo reforzó mi comprensión de la lógica de programación, sino que también me permitió explorar el proceso creativo de un videojuego.
           </p>

           <p>Aca puedes ver el proyecto terminado:</p>
           <a href="https://ivsoca.github.io/21-Black-Jack/" style="
            background-color: #e63946; /* Rojo suave */
            color: #ffffff; /* Letra blanca */
            border: none;
            text-decoration: none;
            border-radius: 5px; /* Bordes redondeados */
            padding: 10px 20px; /* Espaciado interno */
            font-size: 18px; /* Tamaño de la fuente */
            cursor: pointer; /* Cursor en forma de mano */
            transition: background-color 0.3s ease; /* Transición suave para el color de fondo */
          ">
            21 BlackJack proyecto   
          </a>
           <br>
           <br>
              <a href="./blog-pages/blog.html"><i class="fa-solid fa-arrow-left" style="color: #ffffff;"></i></a> 
          <div class="col-12 text-center">
          </div>
          <div class="footer-content">
            <p>&copy; 2024 Made. by Iván Soca</p>
            <div class="social-icons">
                <!-- Agrega más enlaces de redes sociales según sea necesario -->
            </div>
        </div>
    `,
};

function changeLanguage(language) {
  document.getElementById("content").innerHTML = content[language];
}

// Set initial content to Spanish
changeLanguage("es");
