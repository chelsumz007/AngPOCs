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
			{ name: "Mahesh", age: 25 },
			{ name: "Shakti", age: 23 },
			{ name: "Krishna", age: 23 },
			{ name: "Radha", age: 21 },
		]
	}

}
