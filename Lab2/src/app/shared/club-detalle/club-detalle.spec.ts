import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubDetalle } from './club-detalle';

describe('ClubDetalle', () => {
  let component: ClubDetalle;
  let fixture: ComponentFixture<ClubDetalle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClubDetalle]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClubDetalle);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
