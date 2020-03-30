import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcuctShopComponent } from './procuct-shop.component';

describe('ProcuctShopComponent', () => {
  let component: ProcuctShopComponent;
  let fixture: ComponentFixture<ProcuctShopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcuctShopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcuctShopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
