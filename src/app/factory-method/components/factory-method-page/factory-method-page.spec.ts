import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactoryMethodPage } from './factory-method-page';

describe('FactoryMethodPage', () => {
  let component: FactoryMethodPage;
  let fixture: ComponentFixture<FactoryMethodPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FactoryMethodPage],
    }).compileComponents();

    fixture = TestBed.createComponent(FactoryMethodPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
