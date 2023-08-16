//navbar mobile
const menuButton = document.querySelector('.toggle');
const headerMenu = document.querySelector('.header-menu');
  
  menuButton.addEventListener('click', function() {
      headerMenu.classList.toggle('active');
  });

window.addEventListener('scroll', function(){

  const button = document.querySelector('.btn-content');
  let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollPosition > 100) {
    button.style.opacity = '1';
  } else {
    button.style.opacity = '0';
  }
});

window.addEventListener('scroll', function(){

  const button = document.querySelector('.social-fixed');
  let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrollPosition > 100) {
    button.style.opacity = '1';
  } else {
    button.style.opacity = '0';
  }
});

window.addEventListener("scroll", function(){
  let header = document.querySelector(".header");

  if (this.window.pageYOffset > 0){
    header.classList.add("sticky");
  }

  else{
    header.classList.remove("sticky");
  }
});