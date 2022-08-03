//Challenge
const paras = document.querySelectorAll('p');
paras.forEach(para => {

    //use text content instaed in order to get even the text that is hidden
    //thisis because inner text won't capture hidden text
    if(para.textContent.includes('error')){
        para.classList.add('error');
    }
    else if(para.textContent.includes('success')){
        para.classList.add('success');
    }
})

//toggling classes
const title = document.querySelector('.title');

title.classList.toggle('test');//add test class
title.classList.toggle('test');//remove test class