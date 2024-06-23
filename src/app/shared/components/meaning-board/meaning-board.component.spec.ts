import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeaningBoardComponent } from './meaning-board.component';

describe('MeaningBoardComponent', () => {
  let component: MeaningBoardComponent;
  let fixture: ComponentFixture<MeaningBoardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MeaningBoardComponent]
    });
    fixture = TestBed.createComponent(MeaningBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
