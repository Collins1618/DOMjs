// const button = document.querySelector('button');

// //add an event listener using the addEventListener methods
// button.addEventListener('click', () => {
//     console.log("you clicked me");
// });

const ul = document.querySelector('ul');
// ul.remove();

const button = document.querySelector('button');
button.addEventListener('click', () => {
    //first way to add an element upon clicking
    // ul.innerHTML += '<li>something new</li>'

    const li = document.createElement('li') //created and sitting aroung
    //we have a reference to it

    li.textContent = 'something new to do'
    // ul.append(li); //add to the bottom of the parent
    ul.prepend(li);
})

const items = document.querySelectorAll('li'); //nodelist of li tags

items.forEach(item => {
    item.addEventListener('click', e => {
        // console.log('item clicked');
        // console.log(e);
        // console.log(e.target);
        // console.log(item); // we can access the element using the item
        //becaus we have access to items when we cycling through itmes
        // e.target.style.textDecoration = 'line-through';
        console.log('event in LI')
        e.stopPropagation(); //stops event bubbling up to the parent
        e.target.remove(); //remove clicked element from webpage
    });
})

ul.addEventListener('click', e => {
    console.log('event in UL');
})