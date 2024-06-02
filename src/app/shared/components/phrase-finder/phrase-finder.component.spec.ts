import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhraseFinderComponent } from './phrase-finder.component';

describe('PhraseFinderComponent', () => {
  let component: PhraseFinderComponent;
  let fixture: ComponentFixture<PhraseFinderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [PhraseFinderComponent]
    });
    fixture = TestBed.createComponent(PhraseFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
