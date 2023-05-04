function clickMeFunction(){
    var element = document.getElementById('circle');
    element.style.backgroundColor = 'white';
    alert('The button was pressed');
}
function clickFuntion(){
    var element = document.getElementById('circle');
    element.addEventListener('click', clickMeFunction)
}
document.addEventListener('DOMContentLoaded', clickFuntion);