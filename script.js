let body = document.getElementsByTagName("body")[0];
let table = document.createElement("table");
let tbody = document.createElement("tbody");
let tr = document.createElement("tr");
let th1 = document.createElement("th");
let th2 = document.createElement("th");
let th3 = document.createElement("th");

th1.textContent ="Movie Name";
th2.textContent = "Release Year";
th3.textContent = "Type";

tr.appendChild(th1);
tr.appendChild(th2);
tr.appendChild(th3);
tbody.appendChild(tr);
table.appendChild(tbody);
body.appendChild(table);

window.addEventListener('load', function() {

    let tr2 = document.createElement("tr");
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let tr3 = document.createElement("tr");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    let td6 = document.createElement("td");
    let tr4 = document.createElement("tr");
    let td7 = document.createElement("td");
    let td8 = document.createElement("td");
    let td9 = document.createElement("td");

    tbody.appendChild(tr2);
    tbody.appendChild(tr3);
    tbody.appendChild(tr4);

    td1.textContent ="Pirates of the carrabean";
    td2.textContent = "2018";
    td3.textContent = "Mystery";

    td4.textContent ="Harry Potter";
    td5.textContent = "2010";
    td6.textContent = "fantasy";

    td7.textContent ="Star Wars";
    td8.textContent = "2019";
    td9.textContent = "SF";

    tr2.appendChild(td1);
    tr2.appendChild(td2);
    tr2.appendChild(td3);
    tr3.appendChild(td4);
    tr3.appendChild(td5);
    tr3.appendChild(td6);
    tr4.appendChild(td7);
    tr4.appendChild(td8);
    tr4.appendChild(td9);

})







