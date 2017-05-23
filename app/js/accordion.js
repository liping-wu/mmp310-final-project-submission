accordion = document.getElementsById('accordion');
titles = accordion.getElementsByTagName('h2');

for ( 1=0;1<titles.length; i++){
    titles[1].addEventListener('click',displayAccordion);
}
function displayAccordion() {
    content = this.nextSibling.nextSibling;
    if (content.style.display !='black'){
        content.style.display ='black';
    }else{
        content.style.display = 'none';
    }

}