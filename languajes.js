const content = {
  es: `
         <div class="blog-container" >
          <h1>Sobre mi
          <img src="./assets/Banderas/español.png" class="flags" onclick="changeLanguage('es')" alt="">
            <img src="./assets/Banderas/ingles.png" class="flags" onclick="changeLanguage('en')" alt="">
            </h1>
          <br>
          <br>
          <p class="parrafo-introduccion">Un poquito sobre quien soy</p>
          <br>
           <p class="cutoff-text">¡Hola! Soy Iván Soca, un apasionado <strong>Desarrollador Front-End</strong> con un buen ojo para el diseño y un amor por crear sitios web hermosos y fáciles de usar.</p>
            <p>Con una sólida base en <strong>HTML, CSS y JavaScript</strong>, creo aplicaciones web responsivas e interactivas que brindan una experiencia de usuario excepcional.</p>
            <p>Explora este espacio para conocer mi trayectoria, mi trabajo y las habilidades técnicas que aporto. Estoy ansioso por encontrar oportunidades laborales donde pueda tener un impacto, expandir mis conocimientos y avanzar en mi carrera.</p>

              <a href="./blog-pages/blog.html"><i class="fa-solid fa-arrow-left" style="color: #ffffff;"></i></a> 
          <div class="col-12 text-center">
          </div>
         
    `,
  en: `
   
        
         <div class="blog-container">
         <h1>About me
          <img src="./assets/Banderas/español.png" class="flags" onclick="changeLanguage('es')" alt="">
            <img src="./assets/Banderas/ingles.png" class="flags" onclick="changeLanguage('en')" alt=""></h1>
          <br>
          <p class="parrafo-introduccion">A liitle about who I am</p>
          <br>
            <p class="cutoff-text">Hello! I'm Iván Soca, a passionate <strong>Front-End Developer</strong>  with a keen eye for design and a love for crafting beautiful, user-friendly websites. </p>
        <p>With a strong foundation in <strong>HTML, CSS, and JavaScript</strong>, I create responsive and interactive web applications that provide an exceptional user experience.</p>
        <p>Explore this space to learn about my background, my work, and the technical skills I bring to the table. I am eager to find job opportunities where I can make an impact, expand my knowledge, and advance my career.</p>

              <a href="./blog-pages/blog.html"><i class="fa-solid fa-arrow-left" style="color: #ffffff;"></i></a> 
          <div class="col-12 text-center">
          </div>
        
    `,
};

function changeLanguage(language) {
  document.getElementById("content").innerHTML = content[language];
}

// Set initial content to Spanish
changeLanguage("es");
