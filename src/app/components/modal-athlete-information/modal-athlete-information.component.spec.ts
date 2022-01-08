import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAthleteInformationComponent } from './modal-athlete-information.component';

describe('ModalAthleteInformationComponent', () => {
  let component: ModalAthleteInformationComponent;
  let fixture: ComponentFixture<ModalAthleteInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAthleteInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAthleteInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
