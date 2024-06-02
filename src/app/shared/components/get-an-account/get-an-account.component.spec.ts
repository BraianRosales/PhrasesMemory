import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAnAccountComponent } from './get-an-account.component';

describe('GetAnAccountComponent', () => {
  let component: GetAnAccountComponent;
  let fixture: ComponentFixture<GetAnAccountComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [GetAnAccountComponent]
    });
    fixture = TestBed.createComponent(GetAnAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
