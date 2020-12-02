const DELETE_IMAGE_BASE64 = "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjQyN3B0IiB2aWV3Qm94PSItNDAgMCA0MjcgNDI3LjAwMTMxIiB3aWR0aD0iNDI3cHQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTIzMi4zOTg0MzggMTU0LjcwMzEyNWMtNS41MjM0MzggMC0xMCA0LjQ3NjU2My0xMCAxMHYxODljMCA1LjUxOTUzMSA0LjQ3NjU2MiAxMCAxMCAxMCA1LjUyMzQzNyAwIDEwLTQuNDgwNDY5IDEwLTEwdi0xODljMC01LjUyMzQzNy00LjQ3NjU2My0xMC0xMC0xMHptMCAwIi8+PHBhdGggZD0ibTExNC4zOTg0MzggMTU0LjcwMzEyNWMtNS41MjM0MzggMC0xMCA0LjQ3NjU2My0xMCAxMHYxODljMCA1LjUxOTUzMSA0LjQ3NjU2MiAxMCAxMCAxMCA1LjUyMzQzNyAwIDEwLTQuNDgwNDY5IDEwLTEwdi0xODljMC01LjUyMzQzNy00LjQ3NjU2My0xMC0xMC0xMHptMCAwIi8+PHBhdGggZD0ibTI4LjM5ODQzOCAxMjcuMTIxMDk0djI0Ni4zNzg5MDZjMCAxNC41NjI1IDUuMzM5ODQzIDI4LjIzODI4MSAxNC42Njc5NjggMzguMDUwNzgxIDkuMjg1MTU2IDkuODM5ODQ0IDIyLjIwNzAzMiAxNS40MjU3ODEgMzUuNzMwNDY5IDE1LjQ0OTIxOWgxODkuMjAzMTI1YzEzLjUyNzM0NC0uMDIzNDM4IDI2LjQ0OTIxOS01LjYwOTM3NSAzNS43MzA0NjktMTUuNDQ5MjE5IDkuMzI4MTI1LTkuODEyNSAxNC42Njc5NjktMjMuNDg4MjgxIDE0LjY2Nzk2OS0zOC4wNTA3ODF2LTI0Ni4zNzg5MDZjMTguNTQyOTY4LTQuOTIxODc1IDMwLjU1ODU5My0yMi44MzU5MzggMjguMDc4MTI0LTQxLjg2MzI4Mi0yLjQ4NDM3NC0xOS4wMjM0MzctMTguNjkxNDA2LTMzLjI1MzkwNi0zNy44Nzg5MDYtMzMuMjU3ODEyaC01MS4xOTkyMTh2LTEyLjVjLjA1ODU5My0xMC41MTE3MTktNC4wOTc2NTctMjAuNjA1NDY5LTExLjUzOTA2My0yOC4wMzEyNS03LjQ0MTQwNi03LjQyMTg3NS0xNy41NTA3ODEtMTEuNTU0Njg3NS0yOC4wNjI1LTExLjQ2ODc1aC04OC43OTY4NzVjLTEwLjUxMTcxOS0uMDg1OTM3NS0yMC42MjEwOTQgNC4wNDY4NzUtMjguMDYyNSAxMS40Njg3NS03LjQ0MTQwNiA3LjQyNTc4MS0xMS41OTc2NTYgMTcuNTE5NTMxLTExLjUzOTA2MiAyOC4wMzEyNXYxMi41aC01MS4xOTkyMTljLTE5LjE4NzUuMDAzOTA2LTM1LjM5NDUzMSAxNC4yMzQzNzUtMzcuODc4OTA3IDMzLjI1NzgxMi0yLjQ4MDQ2OCAxOS4wMjczNDQgOS41MzUxNTcgMzYuOTQxNDA3IDI4LjA3ODEyNiA0MS44NjMyODJ6bTIzOS42MDE1NjIgMjc5Ljg3ODkwNmgtMTg5LjIwMzEyNWMtMTcuMDk3NjU2IDAtMzAuMzk4NDM3LTE0LjY4NzUtMzAuMzk4NDM3LTMzLjV2LTI0NS41aDI1MHYyNDUuNWMwIDE4LjgxMjUtMTMuMzAwNzgyIDMzLjUtMzAuMzk4NDM4IDMzLjV6bS0xNTguNjAxNTYyLTM2Ny41Yy0uMDY2NDA3LTUuMjA3MDMxIDEuOTgwNDY4LTEwLjIxODc1IDUuNjc1NzgxLTEzLjg5NDUzMSAzLjY5MTQwNi0zLjY3NTc4MSA4LjcxNDg0My01LjY5NTMxMyAxMy45MjU3ODEtNS42MDU0NjloODguNzk2ODc1YzUuMjEwOTM3LS4wODk4NDQgMTAuMjM0Mzc1IDEuOTI5Njg4IDEzLjkyNTc4MSA1LjYwNTQ2OSAzLjY5NTMxMyAzLjY3MTg3NSA1Ljc0MjE4OCA4LjY4NzUgNS42NzU3ODIgMTMuODk0NTMxdjEyLjVoLTEyOHptLTcxLjE5OTIxOSAzMi41aDI3MC4zOTg0MzdjOS45NDE0MDYgMCAxOCA4LjA1ODU5NCAxOCAxOHMtOC4wNTg1OTQgMTgtMTggMThoLTI3MC4zOTg0MzdjLTkuOTQxNDA3IDAtMTgtOC4wNTg1OTQtMTgtMThzOC4wNTg1OTMtMTggMTgtMTh6bTAgMCIvPjxwYXRoIGQ9Im0xNzMuMzk4NDM4IDE1NC43MDMxMjVjLTUuNTIzNDM4IDAtMTAgNC40NzY1NjMtMTAgMTB2MTg5YzAgNS41MTk1MzEgNC40NzY1NjIgMTAgMTAgMTAgNS41MjM0MzcgMCAxMC00LjQ4MDQ2OSAxMC0xMHYtMTg5YzAtNS41MjM0MzctNC40NzY1NjMtMTAtMTAtMTB6bTAgMCIvPjwvc3ZnPg=="

const boardEl = document.querySelector('#board')
const boardHeaderEl = document.querySelector('#board-header');
let numberOfColumns = null;

async function insertItems() {
    const contentColumns = document.getElementsByClassName('content-column')

    for (let contentColumn of contentColumns) {
        contentColumn.innerHTML = '';
    }

    const items = await getItems();

    for (let itemObj of items) {

        let itemEl = document.createElement('div')
        itemEl.className = 'card';
        itemEl.draggable = true;
        itemEl.id = itemObj.id;

        let leftButtonEl = document.createElement('button');
        leftButtonEl.className = 'nav-btn';
        leftButtonEl.innerText = '<'
        leftButtonEl.addEventListener('click', () => {
            moveItem(itemObj.id, itemObj.state - 1)
        })
        itemEl.appendChild(leftButtonEl);

        let textEl = document.createElement('p');
        textEl.innerText = itemObj.content;
        itemEl.appendChild(textEl);

        let rightButtonEl = document.createElement('button')
        rightButtonEl.className = 'nav-btn';
        rightButtonEl.innerText = '>'
        rightButtonEl.addEventListener('click', () => {
            moveItem(itemObj.id, itemObj.state + 1)
        })
        itemEl.appendChild(rightButtonEl);


        let deleteImgEl = document.createElement('img')
        deleteImgEl.addEventListener('click', () => {
            deleteItem(itemObj.id);
        })
        deleteImgEl.src = DELETE_IMAGE_BASE64;

        itemEl.appendChild(deleteImgEl);

        let columnToAppendToEl = document.querySelector('#column-' + itemObj.state)
        if (columnToAppendToEl) {
            columnToAppendToEl.appendChild(itemEl);
        } else {
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
        column.className = 'content-column';
        column.id = 'column-' + columnObj.statusKey
        boardEl.appendChild(column);
    }

    var cardEl = null;
    var targetColumn = null;
    document.addEventListener('dragstart', (event) => {
        cardEl = event.target;
    });

    document.addEventListener('dragover', (event) => {
        event.preventDefault();
    });

    document.addEventListener('drop', async (event) => {
        event.preventDefault();
        let parentNode = event.target
        while (parentNode != undefined) {
            if (parentNode.className && parentNode.id.includes('column-')) {
                targetColumn = parentNode;
                break;
            }
            parentNode = parentNode.parentNode;
        }
        if (targetColumn) {
            let desiredColumnId = parseInt(targetColumn.id.substr(targetColumn.id.length - 1));
            moveItem(cardEl.id, desiredColumnId);
        }
    });
}

async function getItems() {
    const response = await fetch(
        'http://localhost:8000/api/',
        {
            method: 'GET'
        });
    return await response.json()
}

async function deleteItem(itemId) {
    await fetch(
        'http://localhost:8000/api/',
        {
            method: 'DELETE',
            body: JSON.stringify({
                "id": itemId,
                "state": null,
                "content": null,
            })
        }
    )
    await insertItems();
}

async function addItem(columnId) {
    let userInput = prompt('Please enter a title for the new item')
    if (userInput) {
        await fetch(
            'http://localhost:8000/api/',
            {
                method: 'PUT',
                body: JSON.stringify({
                    "id": null,
                    "state": columnId,
                    "content": userInput,
                })
            }
        )
        await insertItems();
    } else {
        alert('Please enter a valid input. Item was not created.')
    }
}

async function moveItem(itemId, preferredColumnId) {
    if (preferredColumnId >= numberOfColumns || preferredColumnId < 0) {
        return;
    }

    await fetch(
        'http://localhost:8000/api/',
        {
            method: 'POST',
            body: JSON.stringify({
                "id": itemId,
                "state": preferredColumnId
            })
        }
    )
    await insertItems();
}

// Extra function due to me hating .then()
async function initialize() {
    await initializeHeader();
    await insertItems();
}

initialize();
