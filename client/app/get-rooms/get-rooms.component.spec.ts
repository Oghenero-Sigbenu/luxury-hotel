import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetRoomsComponent } from './get-rooms.component';

describe('GetRoomsComponent', () => {
  let component: GetRoomsComponent;
  let fixture: ComponentFixture<GetRoomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetRoomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetRoomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
