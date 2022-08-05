import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdataitemComponent } from './updataitem.component';

describe('UpdataitemComponent', () => {
  let component: UpdataitemComponent;
  let fixture: ComponentFixture<UpdataitemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdataitemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdataitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
