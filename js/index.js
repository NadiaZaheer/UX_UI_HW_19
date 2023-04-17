

const scrollTomyWorkButton=document.getElementById('scroll-to-myWork');
const workSection=document.getElementById('id-myWork');

scrollTomyWorkButton.addEventListener('click',()=>{workSection.scrollIntoView({behavior:'smooth'});
});

const contactLink = document.querySelector('a[href="#contact"]');
const contactForm = document.querySelector("form");
contactLink.addEventListener("click",function(event){
  event.preventDefault();
  const contactFormPosition=contactForm.getBoundingClientRect().top;
  window.scrollTo({

    top:contactFormPosition,behavior:"smooth"

  });
});