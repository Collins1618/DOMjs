//handle a copy event on the page
const copy = document.querySelector('.copy-me');
copy.addEventListener('copy', () => {
    console.log('Oi! my content is copyright');
})

//handle a mouse move event on the page
const box = document.querySelector('.box');
box.addEventListener('mousemove', e => {
    // console.log(e);
    //console.log(e.offsetX, e.offsetY);
    box.textContent = `X pos = ${e.offsetX} Y pos = ${e.offsetY}`;
})

document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY);
});