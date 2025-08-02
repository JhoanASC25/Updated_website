let nextButton = document.getElementById('next');
let previousButton = document.getElementById('previous');
let currentImage = 1;
let page1 = document.getElementById('page1');
let page2 = document.getElementById('page2');
let page3 = document.getElementById('page3');
let page4 = document.getElementById('page4');
let page5 = document.getElementById('page5');
let imgDiv = document.getElementById('imgDiv');
let buttonDiv = document.getElementById('buttonDiv')
previousButton.style.display = 'none'
page2.style.display = 'none'
page3.style.display = 'none'
page4.style.display = 'none'
page5.style.display = 'none'

nextButton.onclick = function(event){
    event.preventDefault();
    if(currentImage ==  1){
        page1.style.display = 'none'
        page2.style.display = 'block'
        currentImage ++;
    }else if(currentImage == 2){
        page2.style.display = 'none'
        page3.style.display = 'block'
        currentImage ++;
    }else if(currentImage == 3){
        page3.style.display = 'none'
        page4.style.display = 'block'
        currentImage ++;
    }else if(currentImage == 4){
        page4.style.display = 'none'
        page5.style.display = 'block'
        currentImage++;
        nextButton.style.display = 'none'
    }

    if(currentImage > 1){
        previousButton.style.display = 'block'
    }
}

previousButton.onclick = function(event){
    event.preventDefault();
    if(currentImage == 5){
        currentImage--;
        page4.style.display = 'block'
        page5.style.display = 'none'
    }else if(currentImage == 4){
        currentImage--;
        page3.style.display = 'block'
        page4.style.display = 'none'
    }else if(currentImage == 3){
        currentImage--;
        page2.style.display = 'block'
        page3.style.display = 'none'
    }else if(currentImage == 2){
        currentImage--;
        previousButton.style.display = 'none'
        page1.style.display = 'block'
        page2.style.display = 'none'
    }

    if(currentImage < 5){
        nextButton.style.display = 'block'
    }
}
