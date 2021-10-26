let pagination_elemnts = document.querySelector('#pagination');

current_page = 1;
row = 5;

function DisplaysItems(current_page, row, users, wrapper) {
	wrapper.innerHTML = '';
	current_page--;
	// console.log(current_page);
	// console.log(row);

	let start = current_page * row;
	let end = start + row;
	// console.log(start);
	// console.log(end);
	// console.log(items);
	let PaginationItems = users.slice(start, end);

	PaginationItems.map((user) => {
		let items_elemnts = document.createElement('div');
		items_elemnts.classList.add('user');
		items_elemnts.innerText = user;s
		wrapper.appendChild(items_elemnts);
	});
}


function setUpPagination(items, row, pagination_elemnts) {
	pagination_elemnts.innerHTML = '';
	let PageCount = Math.ceil(items.length / row);
	for (let i = 1; i < PageCount + 1; i++) {
		let btn = PaginationButton(users, i);
		pagination_elemnts.appendChild(btn);
	}
}

function PaginationButton(users, page) {
	let button = document.createElement('button');
	button.innerText = page;
	if (current_page === page) {
		button.classList.add('active');
	}
	button.addEventListener('click', function() {
		current_page = page;
		DisplaysItems(current_page, row, users);
		let current_btn = document.querySelector('.pagenumbers button.active');
		current_btn.classList.remove('active');
		button.classList.add('active');
	});
	return button;
}
DisplaysItems(current_page, row, listUsers);
setUpPagination(listUsers, row, pagination_elemnts);











