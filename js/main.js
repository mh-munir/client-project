const MobileNav = document.querySelector('.mobile-nav');
const OpenNav = document.querySelector('.open-nav');
const ClossNav = document.querySelector('.closs-nav');

OpenNav.addEventListener('click',()=>{
    MobileNav.classList.add('mobile-show');
    
})

ClossNav.addEventListener('click',()=>{
    MobileNav.classList.remove('mobile-show');
})


var Sticky = "sticky";
var scrollTrigger = 500;

window.onscroll = function() {
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.getElementsByTagName("header")[0].classList.add(Sticky);
  } else {
    document.getElementsByTagName("header")[0].classList.remove(Sticky);
  }
};
