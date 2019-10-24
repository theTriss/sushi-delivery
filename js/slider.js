window.addEventListener('DOMContentLoaded', () => {
    var button = document.querySelectorAll('button'),
        sliderContainer = document.querySelector('.slider-container'),
        slider,
        translate = 0,
        counter = 0,
        that;
    button.forEach(function(elem,index){
        if(index % 2 == 0){
            button[index].addEventListener('click', leftButtonSliderAction);
        } else {
            button[index].addEventListener('click', rightButtonSliderAction);
        }
    })

    function sliderLeftMove() {
        counter += -10;
        slider.style.transform = 'translateX(' + counter + 'px)';
        if(counter > translate) {
            requestAnimationFrame(sliderLeftMove);
        }
        else {
            slider.appendChild(slider.firstElementChild);
            sliderReturn();
            that.addEventListener('click',leftButtonSliderAction);
            that.nextElementSibling.addEventListener('click',rightButtonSliderAction);
        }
    }

    function sliderRightMove() {
        translate += 10;
        slider.style.transform = 'translateX(' + translate + 'px)';
        if(translate < 0) {
            requestAnimationFrame(sliderRightMove);
        }
        else {
            that.addEventListener('click', rightButtonSliderAction);
            that.previousElementSibling.addEventListener('click', leftButtonSliderAction);
        }
    }

    function sliderReturn() {
        slider.style.transform = 'translateX(0px)';
    }

    function leftButtonSliderAction() {
        this.removeEventListener('click', leftButtonSliderAction);
        this.nextElementSibling.removeEventListener('click', rightButtonSliderAction);
        slider = this.parentElement.parentElement.nextElementSibling;
        that = this;
        counter = 0
        translate = -(slider.firstElementChild.getBoundingClientRect().left - slider.getBoundingClientRect().left + slider.firstElementChild.getBoundingClientRect().width)
        sliderLeftMove();
    }

    function rightButtonSliderAction() {
        this.removeEventListener('click', rightButtonSliderAction);
        this.previousElementSibling.removeEventListener('click', leftButtonSliderAction);
        slider = this.parentElement.parentElement.nextElementSibling;
        that = this;
        translate = -(slider.firstElementChild.getBoundingClientRect().left - slider.getBoundingClientRect().left + slider.firstElementChild.getBoundingClientRect().width);
        insertLastChildToSliderBegin();
    }

    function insertLastChildToSliderBegin() {
        slider.insertBefore(slider.lastElementChild, slider.firstElementChild);
        slider.style.transform = 'translateX(' + translate + 'px)';
        sliderRightMove();
    }
})