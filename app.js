const content = document.querySelector('p');

//log out the list of classes belonging to the const content
console.log(content.classList);

//adding classes
content.classList.add('error');

//removing a class
content.classList.remove('error');

content.classList.add('success');