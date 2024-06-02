import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSearchHistoryComponent } from './card-search-history.component';

describe('CardSearchHistoryComponent', () => {
  let component: CardSearchHistoryComponent;
  let fixture: ComponentFixture<CardSearchHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CardSearchHistoryComponent]
    });
    fixture = TestBed.createComponent(CardSearchHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
