/*Allow users to edit existing list items.
Implement persistence using local storage to save the list even after the page reloads. */

//set js script to run after the html content has loaded
document.addEventListener('DOMContentLoaded', () => {
//declare variables for list input and deletion buttons.
const item = document.getElementById('item');
const add = document.getElementById('add');
const mark = document.getElementById('mark');
const clear = document.getElementById('clear');
const list = document.getElementById('list');

//create a new list item and add it to the list.
add.addEventListener('click', () => {
    //ensure white spaces and empty items are not added to list
    if(item.value.trim() !== ''){
        const li = document.createElement('li');
        li.textContent = item.value;
        li.addEventListener('click', () => {
            li.classList.toggle('purchased');
        });
        list.appendChild(li);
        item.value = '';
    }
});
mark.addEventListener('click', () => {
    const items = list.getElementsByTagName('li');
    let allMarked = true;
    for (let i = 0; i < items.length; i++) {
        items[i].style.textDecoration = 'line-through';
    }
    if (!items[i].classList.contains('purchased')) {
        allMarked = false;
    }
})
    for (let i = 0; i < items.length; i++) {
        if (allMarked) {
        item[i].classList.remove('purchased');
    } else {
        item[i].classList.add('purchased');
    }
}
save(); 
});
clear.addEventListener('click', () => {
    list.innerHTML = '';
});

function save() {
    localStorage.setItem('list', list.innerHTML);
};
