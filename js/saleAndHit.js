window.addEventListener('DOMContentLoaded', () => {
     const arrWithHit = [
         { 
             img: "/img/menu/rolls/8.jpg", 
             title: 'Позиция номер 1',
             weight: 200,
             price: 72
         }, 
         { 
             img: "/img/menu/pizza/6.jpg", 
             title: 'Позиция номер 2',
             weight: 900,
             price: 175
         },
         { 
             img: "/img/menu/sets/7.jpg", 
             title: 'Позиция номер 3',
             weight: 2000,
             price: 350
        },
         { 
             img: "/img/menu/soups/9.jpg", 
             title: 'Позиция номер 4',
             weight: 400,
             price: 90
        },
         { 
             img: "/img/menu/sushi/10.jpg", 
             title: 'Позиция номер 5',
             weight: 35,
             price: 18
        }
    ];
    
    const arrWithSale = [
        { 
             img: "/img/menu/rolls/17.jpg", 
             title: 'Позиция номер 1',
             weight: 200,
             price: 69
         }, 
         { 
             img: "/img/menu/rolls/7.jpg", 
             title: 'Позиция номер 2',
             weight: 200,
             price: 67
         },
         { 
             img: "/img/menu/desserts/2.jpg", 
             title: 'Позиция номер 3',
             weight: 250,
             price: 100
        },
         { 
             img: "/img/menu/noodles/1.jpg", 
             title: 'Позиция номер 4',
             weight: 300,
             price: 120
        },
         { 
             img: "/img/menu/pizza/5.jpg", 
             title: 'Позиция номер 5',
             weight: 900,
             price: 162
        },
        { 
             img: "/img/menu/sets/5.jpg", 
             title: 'Позиция номер 6',
             weight: 1200,
             price: 250
        },
        { 
             img: "/img/menu/sets/6.jpg", 
             title: 'Позиция номер 7',
             weight: 1400,
             price: 280
        },
        { 
             img: "/img/menu/soups/1.jpg", 
             title: 'Позиция номер 8',
             weight: 400,
             price: 96
        }
    ];

    createProductCard(addHitTape, addSaleTape);
    
    function createProductCard(cbForbHit, cbForbSale) {
        const sliderHit = document.querySelector('.slider-hit'),
              sliderSale = document.querySelector('.slider-sale');
        if(sliderHit) {
            productItem(arrWithHit, sliderHit);
        }
        if(sliderSale) {
            productItem(arrWithSale, sliderSale);
        }
        cbForbHit();
        cbForbSale();
    }

    
    function productItem(arr, slider) {
        for(let elem of arr) {
            let producrItem = document.createElement('div');
            producrItem.classList.add('productItem');
            let img = new Image();
            img.classList.add('productItem__img')
            img.src = '..' + elem.img;
            img.alt = "";
            let title = document.createElement('h3');
            title.classList.add('productItem__title');
            title.innerHTML = elem.title;
            let weight = document.createElement('div');
            weight.classList.add('productItem__weight');
            weight.innerHTML = elem.weight + 'г';
            let btn = document.createElement('div');
            btn.classList.add('btn');
            let btnPrice = document.createElement('div');
            btnPrice.classList.add('btn__price');
            btnPrice.innerHTML = elem.price + ' грн';
            let btnButton = document.createElement('div');
            btnButton.classList.add('btn__button')
            btnButton.innerHTML = 'Заказать';

            btn.appendChild(btnPrice);
            btn.appendChild(btnButton);
            producrItem.appendChild(img);
            producrItem.appendChild(title);
            producrItem.appendChild(weight);
            producrItem.appendChild(btn);
            slider.appendChild(producrItem);
        }  
    }
    

    function addSaleTape() {
        let productItemImg = document.querySelectorAll('.productItem__img');
        for(let elem of productItemImg) {
            for(let productCard of arrWithSale) {
                let regExp = new RegExp(checkRegularExpression(productCard.img));
                if(regExp.test(elem.src)){
                    let sale = document.createElement('div'),
                        saleTape = document.createElement('div');
                    
                    sale.classList.add('sale');
                    saleTape.classList.add('sale__tape');
                    saleTape.innerHTML = 'акция';
                    
                    sale.appendChild(saleTape);
                    elem.parentElement.insertBefore(sale, elem);
                }
            }
        }
    }
    
    
    function addHitTape() {
        let productItemImg = document.querySelectorAll('.productItem__img');
        for(let elem of productItemImg) {
            for(let productCard of arrWithHit) {
                let regExp = new RegExp(checkRegularExpression(productCard.img));
                if(regExp.test(elem.src)){
                    let hit = document.createElement('div');
                    
                    hit.classList.add('hit');
                    
                    elem.parentElement.insertBefore(hit, elem);
                }
            }
        }
    }
    
    //ВАРИАНТ С РЕГУЛЯРНЫМ ВЫРАЖЕНИЕМ (В ДОКУМЕНТН HTML НУЖНО БУДЕТ ПОМЕНЯТЬ МЕСТАМИ СКРИПЫ ИБО ЭТО ТВАРИАНТ МЕНЯЕТ BODY, ВСЕ СКРИПТЫ ДОЛЖНЫ ИДТИ ПОСЛЕ ЭТОГО )
    
    
//    function addSaleTape() {
//        for(let elem of arrWithSale) {
//            let regExp = '<img class="productItem__img" src="' + elem.img + '" alt="">';
//            if(new RegExp(checkRegularExpression(regExp)).test(document.body.innerHTML)) {
//                let body = document.body.innerHTML;
//                body = body.replace(new RegExp(checkRegularExpression(regExp), 'g'), '<div class="sale"><div class="sale__tape">акция</div></div>' + regExp);
//                document.body.innerHTML = body;
//            }
//        }   
//    }
//    
//    function addHitTape() {
//        for(let elem of arrWithHit) {
//            let regExp = '<img class="productItem__img" src="' + elem.img + '" alt="">';
//            if(new RegExp(checkRegularExpression(regExp)).test(document.body.innerHTML)) {
//                let body = document.body.innerHTML;
//                body = body.replace(new RegExp(checkRegularExpression(regExp), 'g'), '<div class="hit"></div>' + regExp);
//                document.body.innerHTML = body;
//            }
//        }  
//    }
//
    function checkRegularExpression(str) {
        var test = str.replace(/([.+*$?\\\/{}|()\[\]^])/g, '\\$1');
        return test
    }
})
