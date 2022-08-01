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
paras.forEach(para => {
    console.log(para.innerText);
    para.innerText += " new text";
})


