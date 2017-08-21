import { Component, OnInit } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  mobileMenu: Boolean = false;

  constructor() { }

  ngOnInit() {
    // $(document).foundation();
  }

  // tried the method below for responsive screen sizing but doesn't work :(
  // checkWindowWidth(window): Boolean {
  //   const medScreen: Number = 640; // taken from Zurb-Foundation css breakpoints
  //   if (window.innerWidth < medScreen) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  navBtnClick() {
    this.mobileMenu = !this.mobileMenu;
    console.log('Click for mobileMenu show up!', this.mobileMenu);
  }
  menuBtnClick() {
    setTimeout(()=> this.mobileMenu = !this.mobileMenu, 750);
    console.log('Click for mobileMenu to go away', this.mobileMenu);
  }
}
