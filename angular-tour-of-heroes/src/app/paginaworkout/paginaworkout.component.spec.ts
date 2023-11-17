import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaworkoutComponent } from './paginaworkout.component';

describe('PaginaworkoutComponent', () => {
  let component: PaginaworkoutComponent;
  let fixture: ComponentFixture<PaginaworkoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginaworkoutComponent]
    });
    fixture = TestBed.createComponent(PaginaworkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
