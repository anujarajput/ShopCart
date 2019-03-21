import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobPartComponent } from './mob-part.component';

describe('MobPartComponent', () => {
  let component: MobPartComponent;
  let fixture: ComponentFixture<MobPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
