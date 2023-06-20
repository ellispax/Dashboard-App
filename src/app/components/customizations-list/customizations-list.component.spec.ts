import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizationsListComponent } from './customizations-list.component';

describe('CustomizationsListComponent', () => {
  let component: CustomizationsListComponent;
  let fixture: ComponentFixture<CustomizationsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizationsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomizationsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
