import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MomsDrawingsComponent } from './moms-drawings.component';

describe('MomsDrawingsComponent', () => {
  let component: MomsDrawingsComponent;
  let fixture: ComponentFixture<MomsDrawingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MomsDrawingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MomsDrawingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
