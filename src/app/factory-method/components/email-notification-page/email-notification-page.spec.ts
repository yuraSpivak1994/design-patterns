import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailNotificationPage } from './email-notification-page';

describe('EmailNotificationPage', () => {
  let component: EmailNotificationPage;
  let fixture: ComponentFixture<EmailNotificationPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmailNotificationPage],
    }).compileComponents();

    fixture = TestBed.createComponent(EmailNotificationPage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
