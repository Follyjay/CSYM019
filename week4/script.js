function getValue(){
    var element = document.getElementById('txtInput');
    var element2 = document.getElementById('mydiv');
    element2.innerText = element.value;
}
function myLoadFunction(){
    var element = document.getElementById('txtInput');
    element.addEventListener('keyup', getValue);
}
document.addEventListener('DOMContentLoaded', myLoadFunction);