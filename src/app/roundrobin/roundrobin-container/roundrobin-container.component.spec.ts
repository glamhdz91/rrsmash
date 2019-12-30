import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoundrobinContainerComponent } from './roundrobin-container.component';

describe('RoundrobinContainerComponent', () => {
  let component: RoundrobinContainerComponent;
  let fixture: ComponentFixture<RoundrobinContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoundrobinContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoundrobinContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
