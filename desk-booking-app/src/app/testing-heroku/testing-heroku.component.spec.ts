import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingHerokuComponent } from './testing-heroku.component';

describe('TestingHerokuComponent', () => {
  let component: TestingHerokuComponent;
  let fixture: ComponentFixture<TestingHerokuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingHerokuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingHerokuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
