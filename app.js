//Adding and changing page content
const para = document.querySelector('p'); //first paragraph on the page

// console.log(para.innerText)

//update inner text on the first paragraph\
//override the older text completely
// para.innerText = "ninjas are awesome!"; 

//append to the end of the paragraph
// para.innerText += " ninjas are awesome!"

//change the text of several items at once
const paras = document.querySelectorAll('p'); //grab all p tags

//cycle through a node list using foreach
// paras.forEach(para => {
//     console.log(para.innerText);
//     para.innerText += " new text";
// })

//change the html on a page
const content = document.querySelector('.content');

// console.log(content.innerHTML);

// content.innerHTML += '<h2>THIS IS A NEW H2</h2>';// += APPEND, = OVERWRITE

const people = ['mario', 'luigi', 'yoshi'];
people.forEach(person => {
    let ul = document.querySelector('ul');
    ul.innerHTML += `<li>${person}</li>`;
});