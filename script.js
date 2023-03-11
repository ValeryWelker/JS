let arr = [];
function addtable() {
	for (let i = 0; arr.length < 30; i++) {
		randomnum = Math.floor(Math.random() * 100);
		arr.push(randomnum);
	}
} 

function foo() {
	randomnum = Math.floor(Math.random() * 100);
	arr.push(randomnum);
	let arrayvalues = document.querySelector('#arrayval');
	let p = document.createElement('p');	
	p.textContent = "После добавления числа, массив содержит цифры: " + arr;
	arrayvalues.appendChild(p);
	let table = document.querySelector('#table');
	td31.textContent = arr[30];
	td32.textContent = arr[31];
	td33.textContent = arr[32];
	td34.textContent = arr[33];
	td35.textContent = arr[34];
	td36.textContent = arr[35];
	table.appendChild(tr6);
	tr6.appendChild(td31);
	tr6.appendChild(td32);
	tr6.appendChild(td33);	
	tr6.appendChild(td34);	
	tr6.appendChild(td35);	
	tr6.appendChild(td36);	
	if (td31.textContent > 50) {
	td31.style.backgroundColor = "#FFA500";
	}
	if (td32.textContent > 50) {
		td32.style.backgroundColor = "#FFA500";
	}
	if (td33.textContent > 50) {
		td33.style.backgroundColor = "#FFA500";
	}
	if (td34.textContent > 50) {
		td34.style.backgroundColor = "#FFA500";
	}
	if (td35.textContent > 50) {
		td35.style.backgroundColor = "#FFA500";
	}
	if (td36.textContent > 50) {
		td36.style.backgroundColor = "#FFA500";
	}

}