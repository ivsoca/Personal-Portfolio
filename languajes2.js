const content = {
  es: `
         <div class="blog-container" >
          <h1>Cómo empecé en este mundo
          <img src="./assets/Banderas/español.png" class="flags" onclick="changeLanguage('es')" alt="">
            <img src="./assets/Banderas/ingles.png" class="flags" onclick="changeLanguage('en')" alt="">
            </h1>
          <br>
          <p class="parrafo-introduccion">Primeros pasos!</p>
          <br>
           <p class="cutoff-text">Mis primeros pasos en la programación comenzaron hace un par de años, cuando vi una serie llamada Mr. Robot. Desde ese momento, el mundo de la tecnología de la información (IT) capturó mi interés y despertó una pasión que no conocía.</p>
            <p>Con una base sólida, me uní a la academia de Ceibal en el programa de Jóvenes a Programar. En este programa, no solo aprendí sobre programación y desarrollo web, sino que también adquirí conocimientos prácticos en HTML, CSS, JavaScript, Node.js y Bootstrap. Uno de los momentos más destacados fue participar en un proyecto grupal donde desarrollamos un e-commerce. Esta experiencia me permitió aplicar lo aprendido y trabajar en equipo para crear una solución real y funcional.</p>

            <p>Recientemente, me gradué de este programa y, aunque ya he recorrido un camino significativo, sigo formándome continuamente. Mi objetivo es seguir expandiendo mis conocimientos y habilidades en el desarrollo web, con la esperanza de contribuir a proyectos innovadores y seguir creciendo en esta apasionante carrera.</p>

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
   
        
         <div class="blog-container">
         <h1>How I Started in This World
          <img src="./assets/Banderas/español.png" class="flags" onclick="changeLanguage('es')" alt="">
            <img src="./assets/Banderas/ingles.png" class="flags" onclick="changeLanguage('en')" alt=""></h1>
          <br>
          <p class="parrafo-introduccion">First Steps!</p>
          <br>      
          <p class="cutoff-text">My first steps in programming began a couple of years ago when I watched a series called Mr. Robot. From that moment, the world of information technology (IT) captured my interest and sparked a passion I didn't know I had.</p>
          <p>With a solid foundation, I joined the Ceibal academy in the Jóvenes a Programar program. In this program, I not only learned about programming and web development but also gained practical knowledge in HTML, CSS, JavaScript, Node.js, and Bootstrap. One of the highlights was participating in a group project where we developed an e-commerce site. This experience allowed me to apply what I had learned and work as a team to create a real and functional solution.</p>
          <p>Recently, I graduated from this program, and although I have already come a long way, I continue to educate myself continuously. My goal is to keep expanding my knowledge and skills in web development, with the hope of contributing to innovative projects and continuing to grow in this exciting career.</p>

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
