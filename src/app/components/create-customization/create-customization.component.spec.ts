import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomizationComponent } from './create-customization.component';

describe('CreateCustomizationComponent', () => {
  let component: CreateCustomizationComponent;
  let fixture: ComponentFixture<CreateCustomizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCustomizationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCustomizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
