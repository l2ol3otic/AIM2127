import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssetprocessComponent } from './assetprocess.component';

describe('AssetprocessComponent', () => {
  let component: AssetprocessComponent;
  let fixture: ComponentFixture<AssetprocessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssetprocessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssetprocessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
