import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users.component';
describe('UsersComponent', () => {
	let component: UsersComponent;
	let fixture: ComponentFixture<UsersComponent>;
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [FormsModule],
			schemas: [NO_ERRORS_SCHEMA],
			declarations: [UsersComponent]
		});
		fixture = TestBed.createComponent(UsersComponent);
		component = fixture.componentInstance;
	});
	it('can load instance', () => {
		expect(component).toBeTruthy();
	});
	it(`toggle has default value`, () => {
		expect(component.toggle).toEqual(false);
	});

	it('should run #ngOnInit()', async () => {
		component.ngOnInit();
	});

	it('should run #trackByFn()', async () => {
		component.trackByFn({}, {
			id: {}
		});
	});
});
