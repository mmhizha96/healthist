import { Component, OnInit } from '@angular/core';
import { Carousel, Dropdown, Sidenav, initTE } from 'tw-elements';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit{
  instance:any;
  ngOnInit(): void {
    initTE({ Carousel, Dropdown, Sidenav });
    this.instance = Sidenav.getInstance(
      document.getElementById("sidenav-1")
      )

      this.breakpointObserver.observe([
        "(max-width: 1024px)"
      ]).subscribe((result: BreakpointState) => {

        if (result.matches) {

            this.instance.changeMode("over");

        }



      });

  }

  constructor(
    private breakpointObserver: BreakpointObserver,
  ) {
    // detect screen size changes

    this.breakpointObserver.observe([
      "(max-width: 1024px)"
    ]).subscribe((result: BreakpointState) => {

      if (result.matches) {

          this.instance.changeMode("over");

      } else {
        this.instance.changeMode("push");

      }
    });
  }

}
