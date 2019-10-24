window.onscroll = function(event) {
    let header = document.querySelector('header'),
        fixElement = document.querySelector('.contact'),
        headerHeight = header.clientHeight - fixElement.clientHeight;
    if(window.pageYOffset >= headerHeight){
        fixElement.style.cssText = 'width: 100%; position: fixed; top: 0; left: 0; z-index:999;';
    } else {
        fixElement.style.position = 'static';
    }
}