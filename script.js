 // Imágenes y testimonios
 const images = document.querySelectorAll('.carousel-images img');
 const testimonials = [
     {
         text: "Increíble experiencia, excelente servicio.",
         name: "Juan Pérez",
         car: "Toyota Corolla"
     },
     {
         text: "Todo fue perfecto, el auto estaba en excelentes condiciones.",
         name: "María Gómez",
         car: "Ford Mustang"
     },
     {
         text: "The proces was quick and easy.",
         name: "Carls Lshulz",
         car: "Corvette Spark"
     },
     {
         text: "I loved It!.",
         name: "Miariah Carey",
         car: "Lamborghini Uracan"
     },
     {
         text: "Best experience of my life.",
         name: "Monica Laos",
         car: "BMW Z4"
     },
     {
         text: "The car roar like a real lion!.",
         name: "Sebastian D'aspana ",
         car: "Ferrari Portofino"
     },
     {
         text: "Faster than a jaguar😉.",
         name: "James Soutsh",
         car: "Pagani Ul3"
     },
     {
         text: "The was luxurious, very elegant and a real super sport.",
         name: "Casnadra Elmos",
         car: "Mercedes-Benz"
     }
 ];

 let currentIndex = 0;

 // Cambiar imágenes y testimonios
 setInterval(() => {
     // Cambiar imagen
     images.forEach((img, index) => {
         img.classList.toggle('active', index === currentIndex);
     });

     // Cambiar testimonio
     const testimonial = testimonials[currentIndex];
     document.getElementById('testimonialText').textContent = `"${testimonial.text}"`;
     document.getElementById('testimonialName').textContent = `- ${testimonial.name}`;
     document.getElementById('testimonialCar').textContent = `Auto rentado: ${testimonial.car}`;

     // Incrementar índice
     currentIndex = (currentIndex + 1) % images.length;
 }, 3000); // Cambiar cada 3 segundos