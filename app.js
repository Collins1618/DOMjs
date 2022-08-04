// const button = document.querySelector('button');

// //add an event listener using the addEventListener methods
// button.addEventListener('click', () => {
//     console.log("you clicked me");
// });

const ul = document.querySelector('ul');
// ul.remove();

const items = document.querySelectorAll('li'); //nodelist of li tags

items.forEach(item => {
    item.addEventListener('click', e => {
        // console.log('item clicked');
        // console.log(e);
        // console.log(e.target);
        // console.log(item); // we can access the element using the item
        //becaus we have access to items when we cycling through itmes
        // e.target.style.textDecoration = 'line-through';
        e.target.remove(); //remove clicked element from webpage
    });
})