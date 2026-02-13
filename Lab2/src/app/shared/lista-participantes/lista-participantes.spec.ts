import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaParticipantes } from './lista-participantes';

describe('ListaParticipantes', () => {
  let component: ListaParticipantes;
  let fixture: ComponentFixture<ListaParticipantes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaParticipantes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaParticipantes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
