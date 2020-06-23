import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'well',
	templateUrl: './well.component.html',
	styleUrls: ['./well.component.css']
})
export class WellComponent implements OnInit {

	@Input() sourceKey: any;
	isSubmitted = false;
	wellForm: FormGroup;
	@Output() onAddingWell: EventEmitter<any> = new EventEmitter<any>();

	constructor(private fb: FormBuilder) {
	}

	ngOnInit() {
		this.wellForm = this.fb.group({
			name: this.fb.control('', Validators.required),
			type: this.fb.control('', Validators.required),
			sourceKey: this.fb.control(this.sourceKey)
		});
	}

	/**
	 * Getting Controls of Forms
	 */
	get f() { return this.wellForm.controls; }

	/**
	 * Form Submit Function
	 */
	onSubmit() {
		this.isSubmitted = true;
		if (!this.wellForm.valid) {
			return false;
		} else {
			this.onAddingWell.emit(this.wellForm.value);
		}
	}

}
