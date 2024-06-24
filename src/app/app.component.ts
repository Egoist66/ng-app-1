import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {  } from './components/layout/header/header.component';
import { HomeComponent } from './components/pages/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'app-1';


  public _alert(): void {
    alert(this.title);
  }
}

