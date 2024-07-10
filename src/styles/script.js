$(document).ready(function() {
   $('#mobile_btn').on('click', function() {
       $('#mobile_menu').toggleClass('active');
       $('#mobile_btn').find('i').toggleClass('fa-X');
   });

   const sections = $('section');
   const navItems = $('.nav-item');

   $(window).on('scroll', function() {
       const header = $('header');
       const scrollPosition = $(window).scrollTop() + header.outerHeight();
       let activeSectionIndex = 0;

       if (scrollPosition <= header.outerHeight()) {
           header.css('box-shadow', 'none');
       } else {
           header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1)');
       }

       sections.each(function(i) {
           const section = $(this);
           const sectionTop = section.offset().top;
           const sectionBottom = sectionTop + section.outerHeight();

           if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
               activeSectionIndex = i;
               return false;
           }
       });

       // Atualiza os itens do menu de navegação
       navItems.removeClass('active');
       navItems.eq(activeSectionIndex).addClass('active');
   });

   ScrollReveal().reveal('#banner', {
      origin: 'right', // Corrigido 'rigth' para 'right'
      duration: 3000, // Aumentei a duração para 3000 ms
      distance: '20%'
   });
   ScrollReveal().reveal('#shape', {
      origin: 'right', // Corrigido 'rigth' para 'right'
      duration: 3000, // Aumentei a duração para 3000 ms
      distance: '20%'
   });

   ScrollReveal().reveal('#cta',{
      origin: 'left',
      durantion: 2000,
      distance: '40%'
   })
   ScrollReveal().reveal('.dish',{
      origin: 'left',
      durantion: 2000,
      distance: '30%'
   })
   ScrollReveal().reveal('#testimonial_chef',{
      origin: 'left',
      durantion: 1000,
      distance: '20%'
   })
   ScrollReveal().reveal('.feedback',{
      origin: 'rigth',
      durantion: 1000,
      distance: '20%'
   })
});
