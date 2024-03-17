import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuiensomosComponent } from './quiensomos.component';

describe('QuiensomosComponent', () => {
  let component: QuiensomosComponent;
  let fixture: ComponentFixture<QuiensomosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuiensomosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuiensomosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
