import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PushNotificationPage } from './push-notification-page';

describe('PushNotificationPage', () => {
  let component: PushNotificationPage;
  let fixture: ComponentFixture<PushNotificationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PushNotificationPage],
    }).compileComponents();

    fixture = TestBed.createComponent(PushNotificationPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
