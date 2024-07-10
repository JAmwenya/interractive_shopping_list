* interractive_shopping_list
    - objective
Develop a webpage with a shopping list. Users can add items to the list, mark items as purchased, and clear the list.

* index.html - a file that contains a page with a simple shopping list.

    - input type text - a data field that takes in text user intput.

    - list id - represents an unordered list.

    - add button - adds input to the list.

    - Mark Purchased - marks all the items in the list as purchased at first click and if clicked again it unmarks all previously marked items.

    - Clear List - deletes all the contents of the list.

* style.css - a file that holds the styles used for the shopping list page.

* index.js - a file containing the javascript functions and events used in the shopping list page.
    
    - load function - loads the list saved in the local storage.

    - save function - saves the created list to local storage.

    - click event listeners have been added to listen for clicks and perfom actions like adding to the list, marking items as purchased by striking through item names and clearing items from the list.

    - if an individual item is clicked once, it is marked as purchased. if it is clicked for the second time, it is unmarked.