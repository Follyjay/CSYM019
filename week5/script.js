/*function clickMeFunction(){
    var element = document.getElementById('circle');
    element.style.backgroundColor = 'white';
    
}*/
function clickFuntion(){
    var element = document.getElementById('circle');
    element.style.opacity = 0.5;
    //element.addEventListener('click', clickMeFunction)
}
document.addEventListener('DOMContentLoaded', clickFuntion);