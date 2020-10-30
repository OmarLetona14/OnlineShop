import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyproductsListComponent } from './myproducts-list.component';

describe('MyproductsListComponent', () => {
  let component: MyproductsListComponent;
  let fixture: ComponentFixture<MyproductsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyproductsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyproductsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
