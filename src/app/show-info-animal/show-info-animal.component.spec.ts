import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInfoAnimalComponent } from './show-info-animal.component';

describe('ShowInfoAnimalComponent', () => {
  let component: ShowInfoAnimalComponent;
  let fixture: ComponentFixture<ShowInfoAnimalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowInfoAnimalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowInfoAnimalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
