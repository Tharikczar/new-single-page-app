import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'uxClone';

  constructor() {
    window.addEventListener('scroll', function () {
      const header = document.querySelector('header');
      header?.classList.toggle('sticky', window.scrollY > 0);
      header?.style.background
    });
  }
  onMenuClick() {
    console.log('ONCLICKMENU');
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle?.classList.toggle('active');
    navigation?.classList.toggle('active');
  }
  toggleChange() {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle?.classList.remove('active');
    navigation?.classList.remove('active');
  }
}
