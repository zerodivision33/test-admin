import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagedocsComponent } from './managedocs.component';

describe('ManagedocsComponent', () => {
  let component: ManagedocsComponent;
  let fixture: ComponentFixture<ManagedocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagedocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagedocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
