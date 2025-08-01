let about_me_fontSize = document.getElementsByClassName('fontSize');
let increaseFontbutton = document.querySelector('increaseFontbutton');

increaseFontbutton.onclick = function(){
about_me_fontSize.style.fontSize = '100px';
for(i = 0; i < about_me_fontSize.length; i++){
    if(about_me_fontSize[i].value > 0){
        about_me_fontSize = "5px"
    }
    }
}