import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubMain } from './clubMain';

describe('Club', () => {
  let component: ClubMain;
  let fixture: ComponentFixture<ClubMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubMain);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
