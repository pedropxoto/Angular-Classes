import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListApComponent } from './list-ap.component';

describe('ListApComponent', () => {
  let component: ListApComponent;
  let fixture: ComponentFixture<ListApComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListApComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListApComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
