
function buttonClickColor(class_1){
    const buttons = document.querySelector(class_1);

    if (buttons.classList.contains('is-toggled')){
        buttons.classList.remove('is-toggled');
    }else {
        buttons.classList.add('is-toggled');
    }
    
}