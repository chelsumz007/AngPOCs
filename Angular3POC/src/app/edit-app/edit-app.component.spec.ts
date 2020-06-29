import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EditAppComponent } from './edit-app.component';
describe('EditAppComponent', () => {
	let component: EditAppComponent;
	let fixture: ComponentFixture<EditAppComponent>;
	beforeEach(() => {
		const dndDropEventStub = () => ({
			dropEffect: {},
			data: { name: {}, type: {} },
			index: {}
		});
		const dropEffectStub = () => ({});
		TestBed.configureTestingModule({
			imports: [FormsModule],
			schemas: [NO_ERRORS_SCHEMA],
			declarations: [EditAppComponent],
			providers: [
			]
		});
		fixture = TestBed.createComponent(EditAppComponent);
		component = fixture.componentInstance;
	});
	it('can load instance', () => {
		expect(component).toBeTruthy();
	});
	it(`success has default value`, () => {
		expect(component.success).toEqual(false);
	});
	it(`modelFields has default value`, () => {
		expect(component.modelFields).toEqual([]);
	});
	it(`report has default value`, () => {
		expect(component.report).toEqual(false);
	});
	it(`reports has default value`, () => {
		expect(component.reports).toEqual([]);
	});
	it('should run #updateForm()', async () => {
		component.model = component.model || {};
		component.model._id = '_id';
		component.model.name = 'name';
		component.model.description = 'description';
		component.model.theme = {
			bannerImage: {},
			bgColor: {},
			textColor: {}
		};
		component.model.attributes = 'attributes';
		component.updateForm();
	});
	it('should run #initReport()', async () => {
		component.model = component.model || {};
		component.model._id = '_id';
		component.initReport()
	});
	it('should run #toggleValue()', async () => {
		component.toggleValue({
			selected: {}
		});
	});
	it('should run #addValue()', async () => {
		component.addValue({
			push: function () { }
		});
	});
	it('should run #removeField()', async () => {
		component.model = component.model || {};
		component.model.attributes = {
			splice: function () { }
		};
		component.removeField({});
	});
	it('should run #ngOnInit()', async () => {
		component.ngOnInit();
	});
});
