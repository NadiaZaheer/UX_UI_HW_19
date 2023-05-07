


const contactLink = document.querySelector('a[href="#contact"]'); //select the contact link
const contactForm = document.querySelector("form");//select the contact form
contactLink.addEventListener("click",function(event){
  event.preventDefault(); //prevent the default action of the link
  const contactFormPosition=contactForm.getBoundingClientRect().top;//get the position of the contact form relative to the view port
  window.scrollTo({

    top:contactFormPosition,//scroll to the position of the contact form
    behavior:"smooth"//animate to scroll

  });
});


$('.navbar-toggler').click(function() {
  $('.overlay').toggle();
});





