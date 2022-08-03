//changing attributes
// const link  = document.querySelector('a');

// console.log(link.getAttribute('href'))

// link.setAttribute('href', 'https://wwww.thenetninja.co.uk');
// link.innerText = 'The net ninja website';

// const msg = document.querySelector('p');
// console.log(msg.getAttribute('class'));
// msg.setAttribute('class', 'success');

// msg.setAttribute('style', 'color:green');

const title = document.querySelector('h1');

console.log(title.style);
console.log(title.style.color)

//adding styles to Css
title.style.margin = '50px';
title.style.color = 'crimson';
title.style.fontSize = '60px';

//deleting a style
title.style.margin ='';