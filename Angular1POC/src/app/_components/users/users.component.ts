import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'ang-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

	users: any;
	toggle: boolean = false;

	constructor() { }

	ngOnInit() {
		this.users = [
			{ id: 1, name: "Mahesh", age: 25 },
			{ id: 2, name: "Shakti", age: 23 },
			{ id: 3, name: "Krishna", age: 23 },
			{ id: 4, name: "Radha", age: 21 },
		]
	}

	trackByFn(index, item) {
    return item.id;
  }

}
