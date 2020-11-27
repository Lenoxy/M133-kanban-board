const boardEl = document.querySelector('#board')
const boardHeaderEl = document.querySelector('#board-header');
let numberOfColumns = null;

async function getItems() {
    const rows = document.getElementsByClassName('row')

    for(let row of rows){
        row.innerHTML = '';
    }

    let response = await fetch('http://localhost:8000/api/', {method: 'GET'});
    let items = await response.json()

    for (let itemObj of items) {

        let itemEl = document.createElement('div')
        itemEl.className = 'card';

        let leftButtonEl = document.createElement('button');
        leftButtonEl.addEventListener('click', () => {
            moveItem(itemObj.id, itemObj.state - 1)
        })
        leftButtonEl.className = 'nav-btn';
        leftButtonEl.innerText = '<'
        itemEl.appendChild(leftButtonEl);

        let textEl = document.createElement('p');
        textEl.innerText = itemObj.content;
        itemEl.appendChild(textEl);

        let rightButtonEl = document.createElement('button')
        rightButtonEl.addEventListener('click', () => {
            moveItem(itemObj.id, itemObj.state + 1)
        })
        rightButtonEl.className = 'nav-btn';
        rightButtonEl.innerText = '>'
        itemEl.appendChild(rightButtonEl);

        let columnToAppendToEl = document.querySelector('#column-' + itemObj.state)
        if(columnToAppendToEl){
            columnToAppendToEl.appendChild(itemEl);
        }else {
            console.error('Could not find desired column #column-' + itemObj.state);
        }
    }
}

async function initializeHeader() {
    let response = await fetch('http://localhost:8000/api/columns')
    let columns = await response.json();

    numberOfColumns = columns.length;
    for (let columnObj of columns) {
        // Build Header
        let columnHeaderEl = document.createElement('div')
        columnHeaderEl.innerText = columnObj.name;

        let addButtonEl = document.createElement('button')
        addButtonEl.innerText = '+';
        addButtonEl.addEventListener('click', () => {
            addItem(columnObj.statusKey)
        })
        columnHeaderEl.appendChild(addButtonEl);

        boardHeaderEl.appendChild(columnHeaderEl);

        // Build Table
        let column = document.createElement('div');
        column.className = 'row';
        column.id = 'column-' + columnObj.statusKey
        boardEl.appendChild(column);
    }

}

async function moveItem(itemId, preferredColumnNumber) {
    if(preferredColumnNumber >= numberOfColumns || preferredColumnNumber < 0){
        return;
    }

    console.log(itemId, preferredColumnNumber);
    const response = await fetch(
        'http://localhost:8000/api/',
        {
            method: 'POST',
            body: JSON.stringify({
                "id": itemId,
                "state": preferredColumnNumber
            })
        }
    )
    console.log(response)
    await getItems();
}

async function addItem(columnNumber) {
    //TODO
    console.log(columnNumber)
}


initializeHeader()
getItems();
