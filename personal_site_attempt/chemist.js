let nextButton = document.getElementById('next');
let previousButton = document.getElementById('previous');
let currentImage = document.querySelector('img');
let page1 = document.getElementById('page1');
let page2 = document.getElementById('page2');
let page3 = document.getElementById('page3');
let page4 = document.getElementById('page4');
let page5 = document.getElementById('page5');
let imgDiv = document.getElementById('imgDiv');
let buttonDiv = document.getElementById('buttonDiv')

page2.style.display = 'none'
page3.style.display = 'none'
page4.style.display = 'none'
page5.style.display = 'none'

nextButton.onclick = function(event){
    event.preventDefault();
    if(currentImage == page1){
        page1.style.display = 'none'
        page2.style.display = 'block'
    }
    
    if(currentImage == page2){
        page2.style.display = 'none'
        page3.style.display = 'block'
    }
}