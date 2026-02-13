import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaClubs } from './lista-clubs';
import { provideZonelessChangeDetection } from '@angular/core';

describe('ListaClubs', () => {
  let component: ListaClubs;
  let fixture: ComponentFixture<ListaClubs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaClubs],
      providers:[provideZonelessChangeDetection()]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaClubs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
