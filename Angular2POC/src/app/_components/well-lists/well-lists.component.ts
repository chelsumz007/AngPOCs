import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
	selector: 'well-lists',
	templateUrl: './well-lists.component.html',
	styleUrls: ['./well-lists.component.css']
})
export class WellListsComponent implements OnInit {
	wellList: any;
	showAddWells: boolean = false;
	currentSource: any;

	constructor(private route: ActivatedRoute, private router: Router) { }

	ngOnInit() {
		this.wellList = [
			{ id: 1, name: "newrlswell", type: "rls", sourceKey: 10001 },
			{ id: 2, name: "testWell", type: "esp", sourceKey: 11001 },
			{ id: 3, name: "testWell2", type: "rls", sourceKey: 10001 }
		]
	}

	showAddWellsFn(event) {
		this.showAddWells = !this.showAddWells;
		this.currentSource = event;
	}

	newWellDetails(event) {
		this.wellList.push(event);
	}

	trackByFn(index, item) {
		return item.id;
	}

}