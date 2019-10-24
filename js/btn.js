window.addEventListener('DOMContentLoaded', () => {
      var btnMobileContacts = document.querySelector('.btn-contacts'),
          btnMobileMenu = document.querySelector('.btn-menu'),
          blockMobileContacts = document.querySelector('.block-mobile-contacts'),
          blockMobileMenu = document.querySelector('.block-mobile-menu');

    btnMobileContacts.addEventListener('click', visibleContacts);
    btnMobileMenu.addEventListener('click', visibleMenu);
    
    function visibleMenu(){
       if(blockMobileMenu.offsetHeight <= 0) {
            blockMobileMenu.style.height = blockMobileMenu.children[0].offsetHeight + 'px';
            btnMobileContacts.removeEventListener('click', visibleContacts);
        } else {
            blockMobileMenu.style.height = '0px';
            btnMobileContacts.addEventListener('click', visibleContacts);
        }
    }
    
    function visibleContacts() {
        if(blockMobileContacts.offsetHeight <= 0) {
            blockMobileContacts.style.height = blockMobileContacts.children[0].offsetHeight + 'px';
            btnMobileMenu.removeEventListener('click', visibleMenu);
        } else {
            blockMobileContacts.style.height = '0px';
            btnMobileMenu.addEventListener('click', visibleMenu);
        }
    }
})