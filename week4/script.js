function getValue(){
    var element = document.getElementById('txtInput');
    alert(element.value);
}
function myLoadFunction(){
    var element = document.getElementById('btnSubmit');
    element.addEventListener('click', getValue);
}
document.addEventListener('DOMContentLoaded', myLoadFunction);