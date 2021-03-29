import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegulamentoCampanhaComponent } from './regulamento-campanha.component';

describe('RegulamentoCampanhaComponent', () => {
  let component: RegulamentoCampanhaComponent;
  let fixture: ComponentFixture<RegulamentoCampanhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegulamentoCampanhaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegulamentoCampanhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
