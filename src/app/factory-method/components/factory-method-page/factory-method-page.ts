import { Component } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-factory-method-page',
  imports: [MatTabsModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './factory-method-page.html',
  styleUrl: './factory-method-page.scss',
})
export class FactoryMethodPage {}
