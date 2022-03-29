import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UservalidComponent } from './uservalid.component';

describe('UservalidComponent', () => {
  let component: UservalidComponent;
  let fixture: ComponentFixture<UservalidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UservalidComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UservalidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
