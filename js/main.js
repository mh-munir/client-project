const MobileNav = document.querySelector('.mobile-nav');
const OpenNav = document.querySelector('.open-nav');
const ClossNav = document.querySelector('.closs-nav');

OpenNav.addEventListener('click',()=>{
    MobileNav.classList.add('mobile-show');
    
})

ClossNav.addEventListener('click',()=>{
    MobileNav.classList.remove('mobile-show');
})