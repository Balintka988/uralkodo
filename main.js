let array = [
    { uralkodo: "I. István", 
        esemeny: "Koronázás", 
        evszam: 1000 
    },
    { uralkodo: "I. István", 
        esemeny: "Pannonhalmi apátság megalapítása", 
        evszam: 1001 
    },
    { uralkodo: "IV. Béla", 
        esemeny: "Tatárjárás", 
        evszam: "1241-1242" 
    },
    { uralkodo: "Mátyás király", 
        esemeny: "Bécs elfoglalása", 
        evszam: 1485 
    },
    { uralkodo: "Mátyás király", 
        esemeny: "Kenyérmezei csata", 
        evszam: 1479 
    },
    { uralkodo: "II. Rákóczi Ferenc", 
        esemeny: "A szabadságharc kezdete", 
        evszam: 1703 
    },
    { uralkodo: "II. Rákóczi Ferenc", 
        esemeny: "A szabadságharc vége", 
        evszam: 1711 
    }
  ];

const table = document.createElement('table');
document.body.appendChild(table);
 
const colgroup = document.createElement('coldroup');
table.appendChild(colgroup);

const col = document.createElement('col');
colgroup.appendChild(col);

const thead = document.createElement('thead');
table.appendChild(thead);
 
const tr = document.createElement('tr');
thead.appendChild(tr);

const th = document.createElement('th');
tr.appendChild(th);

const td = document.createElement('td');
tr.appendChild(td);

const tbody = document.createElement('tbody');
table.appendChild(tbody);