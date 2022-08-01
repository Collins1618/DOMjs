// to select items use the css selectors as strins inside the query
//selector method
//select the first paragraph in the document using paragraph selector
//this selects the first p tag in the document
// const para = document.querySelector("p");


//select last p tag using css class selector
// const para = document.querySelector('div.error');
// console.log(para);

//selecting all the elements of a given type using querySelectorAll
const paras = document.querySelectorAll('p');
console.log(paras[2]);

//you can also use forEach on a Node list
paras.forEach(para => {
    console.log(para);
});

