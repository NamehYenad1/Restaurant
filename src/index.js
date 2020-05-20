import { generateHome } from './Home';
import { generateMenu } from './Menu';
const content = document.getElementById('content');

content.appendChild(generateHome());


function clear() {
    content.innerHTML = '';
}


// content.appendChild(generateMenu());


const HomeButton = document.getElementById('Home');
HomeButton.addEventListener('click', function() {
    clear();
    content.appendChild(generateHome());
    buttonContent = document.getElementById('button');
    buttonContent.addEventListener('click', function() {
        console.log('hi');
        clear();
        content.appendChild(generateMenu());

    })
})

const MenuButton = document.getElementById('Menu');
MenuButton.addEventListener('click', function() {

    clear();
    content.appendChild(generateMenu());

})

var buttonContent = document.getElementById('button');
buttonContent.addEventListener('click', function() {
    console.log('hi');
    clear();
    content.appendChild(generateMenu());

})