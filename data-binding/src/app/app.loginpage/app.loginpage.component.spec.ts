import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLoginpageComponent } from './app.loginpage.component';

describe('AppLoginpageComponent', () => {
  let component: AppLoginpageComponent;
  let fixture: ComponentFixture<AppLoginpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppLoginpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppLoginpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
