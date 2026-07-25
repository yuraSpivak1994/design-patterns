import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmsNotificationPage } from './sms-notification-page';

describe('SmsNotificationPage', () => {
  let component: SmsNotificationPage;
  let fixture: ComponentFixture<SmsNotificationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SmsNotificationPage],
    }).compileComponents();

    fixture = TestBed.createComponent(SmsNotificationPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
