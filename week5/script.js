function clickMeFunction(){
    var element = document.getElementById('circle');
    
    var positionLeft = element.offsetLeft;
    element.style.left = positionLeft - 10 + 'px';
    
}
function clickFuntion(){
    //var element = document.getElementById('circle');
    //element.addEventListener('click', clickMeFunction);
    document.addEventListener('keydown', clickMeFunction);
}
document.addEventListener('DOMContentLoaded', clickFuntion);