let row = prompt('what is row do you want ?');
let col = prompt('what is colume do you want ?');

function CreateTable() {
    let placeTable = document.querySelector('.tableCreate');
    let table = document.createElement('table');
    table.classList.add('tableStyle')
    table.setAttribute('border', '1');
    for (let i = 1; i <= parseInt(row); i++) {
        let rowTable = document.createElement('tr');
        table.appendChild(rowTable);
        for (let j = 1; j <= parseInt(col); j++) {
            let colTable = document.createElement('td');
            colTable.textContent = i * j;
            rowTable.appendChild(colTable);

        }

    }

    placeTable.appendChild(table);

}

CreateTable();