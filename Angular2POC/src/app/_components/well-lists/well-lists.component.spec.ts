import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { WellListsComponent } from './well-lists.component';
describe('WellListsComponent', () => {
	let component: WellListsComponent;
	let fixture: ComponentFixture<WellListsComponent>;
	beforeEach(() => {
		TestBed.configureTestingModule({
			schemas: [NO_ERRORS_SCHEMA],
			declarations: [WellListsComponent]
		});
		fixture = TestBed.createComponent(WellListsComponent);
		component = fixture.componentInstance;
	});
	it('can load instance', () => {
		expect(component).toBeTruthy();
	});
	it(`showAddWells has default value`, () => {
		expect(component.showAddWells).toEqual(false);
	});
  it('should run #ngOnInit()', async () => {
    component.ngOnInit();
  });
  it('should run #showAddWellsFn()', async () => {
    component.showAddWellsFn({});
	});
  it('should run #trackByFn()', async () => {
    component.trackByFn({}, {});
  });
});
