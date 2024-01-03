import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsErgebnisseComponent } from './ins-ergebnisse.component';

describe('InsErgebnisseComponent', () => {
  let component: InsErgebnisseComponent;
  let fixture: ComponentFixture<InsErgebnisseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsErgebnisseComponent]
    });
    fixture = TestBed.createComponent(InsErgebnisseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
