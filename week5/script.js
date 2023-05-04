
function moveElement(event){
    var element = document.getElementById('circle');
    
    var positionLeft = element.offsetLeft;
    var positionTop = element.offsetTop;

    if (event.keyCode == 37){
        element.style.left = positionLeft - 10 + 'px';
    }
    if (event.keyCode == 38){
        element.style.top = positionTop - 10 + 'px';
    }
    if (event.keyCode == 39){
        element.style.left = positionLeft + 10 + 'px';
    }
    if (event.keyCode == 40){
       element.style.top = positionTop + 10 + 'px';
    }
}
function clickFuntion(){
    //var element = document.getElementById('circle');
    //element.addEventListener('click', clickMeFunction);
    document.addEventListener('keydown', moveElement);
}
document.addEventListener('DOMContentLoaded', clickFuntion);