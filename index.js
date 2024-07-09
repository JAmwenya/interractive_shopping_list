document.addEventListener('DOMContentLoaded', () => {
    const item = document.getElementById('item');
    const add = document.getElementById('add');
    const mark = document.getElementById('mark');
    const clear = document.getElementById('clear');
    const list = document.getElementById('list');

    // Load saved list from local storage
    function load() {
        const savedList = localStorage.getItem('list');
        if (savedList) {
            list.innerHTML = savedList;
            const items = list.getElementsByTagName('li');
            for (let i = 0; i < items.length; i++) {
                items[i].addEventListener('click', () => {
                    items[i].classList.toggle('purchased');
                    save();
                });
                items[i].setAttribute('contenteditable', 'true');
                items[i].addEventListener('input', save);
            }
        }
    }

    // Save current list to local storage
    function save() {
        localStorage.setItem('list', list.innerHTML);
    }

    // Add new item to the list and save
    add.addEventListener('click', () => {
        if (item.value.trim() !== '') {
            const li = document.createElement('li');
            li.textContent = item.value;
            li.addEventListener('click', () => {
                li.classList.toggle('purchased');
                save();
            });
            li.setAttribute('contenteditable', 'true');
            li.addEventListener('input', save);
            list.appendChild(li);
            item.value = '';
            save();
        }
    });

    // Toggle mark all items as purchased/unpurchased
    mark.addEventListener('click', () => {
        const items = list.getElementsByTagName('li');
        let allMarked = true;
        for (let i = 0; i < items.length; i++) {
            if (!items[i].classList.contains('purchased')) {
                allMarked = false;
                break;
            }
        }
        for (let i = 0; i < items.length; i++) {
            if (allMarked) {
                items[i].classList.remove('purchased');
            } else {
                items[i].classList.add('purchased');
            }
        }
        save();
    });

    // Clear the list and save
    clear.addEventListener('click', () => {
        list.innerHTML = '';
        save();
    });

    // Load the list on page load
    load();
});
