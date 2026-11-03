import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InformesPdf } from './informes-pdf';

describe('InformesPdf', () => {
  let component: InformesPdf;
  let fixture: ComponentFixture<InformesPdf>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InformesPdf],
    }).compileComponents();

    fixture = TestBed.createComponent(InformesPdf);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
