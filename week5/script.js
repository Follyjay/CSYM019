function clickMeFunction(){
    var element = document.getElementById('circle');
    var changeopacity = parseFloat(element.style.opacity);
    element.style.opacity = changeopacity - 0.1;
    
}
function clickFuntion(){
    var element = document.getElementById('circle');
    element.style.opacity = 1;
    element.addEventListener('click', clickMeFunction)
}
document.addEventListener('DOMContentLoaded', clickFuntion);