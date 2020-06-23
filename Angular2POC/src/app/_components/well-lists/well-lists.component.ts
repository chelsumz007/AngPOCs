import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'well-lists',
	templateUrl: './well-lists.component.html',
	styleUrls: ['./well-lists.component.css']
})
export class WellListsComponent implements OnInit {
	wellList: any;
	showAddWells: boolean = false;
	currentSource: any;

	constructor() { }

	ngOnInit() {
		this.wellList = [
			{ name: "newrlswell", type: "rls", sourceKey: 10001 },
			{ name: "testWell", type: "esp", sourceKey: 11001 },
			{ name: "testWell2", type: "rls", sourceKey: 10001 }
		]
	}

	/**
	 * Toggling Show Logic
	 */
	showAddWellsFn(event) {
		this.showAddWells = !this.showAddWells;
		this.currentSource = event;
	}

	/**
	 * New Wells Adition Logic
	 */
	newWellDetails(event) {
		this.wellList.push(event);
	}

	/**
	 * Improvement Function
	 */
	trackByFn(index, item) {
		return index;
	}
}