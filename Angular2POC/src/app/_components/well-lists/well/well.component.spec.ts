import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { WellComponent } from './well.component';
describe('WellComponent', () => {
	let component: WellComponent;
	let fixture: ComponentFixture<WellComponent>;
	beforeEach(() => {
		const formBuilderStub = () => ({
			group: object => ({}),
			control: (string, required) => ({})
		});
		TestBed.configureTestingModule({
			schemas: [NO_ERRORS_SCHEMA],
			declarations: [WellComponent],
			providers: [{ provide: FormBuilder, useFactory: formBuilderStub }]
		});
		fixture = TestBed.createComponent(WellComponent);
		component = fixture.componentInstance;
	});
	it('can load instance', () => {
		expect(component).toBeTruthy();
	});
	it(`isSubmitted has default value`, () => {
		expect(component.isSubmitted).toEqual(false);
	});
	describe('ngOnInit', () => {
		it('makes expected calls', () => {
			const formBuilderStub: FormBuilder = fixture.debugElement.injector.get(
				FormBuilder
			);
			spyOn(formBuilderStub, 'group').and.callThrough();
			spyOn(formBuilderStub, 'control').and.callThrough();
			component.ngOnInit();
			expect(formBuilderStub.group).toHaveBeenCalled();
			expect(formBuilderStub.control).toHaveBeenCalled();
		});
	});
});
