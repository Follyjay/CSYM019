function updateParagraph() {
    var element = document.getElementById('paragraph');
    element.firstChild.nodeValue = 'New Heading';
}
function updateH1() {
    var element = document.getElementById('pageheading');
    element.firstChild.nodeValue = 'New paragraph contents';
}
function reverseH1() {
    var element = document.getElementById('pageheading');
    element.firstChild.nodeValue = 'Page content';
}
function myLoadFunction() {
    var element = document.getElementById('pageheading');
    element.addEventListener('mouseenter', updateH1);
    element.addEventListener('mouseleave', reverseH1);
    
    var element = document.getElementById('paragraph');
    element.addEventListener('click', updateParagraph);
}
document.addEventListener('DOMContentLoaded', myLoadFunction);