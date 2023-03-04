import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildoverviewComponent } from './buildoverview.component';

describe('BuildoverviewComponent', () => {
  let component: BuildoverviewComponent;
  let fixture: ComponentFixture<BuildoverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuildoverviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
