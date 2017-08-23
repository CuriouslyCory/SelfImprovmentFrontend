import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

const NAVELEMENTS = [
  {name: 'Home', icon: 'home', route: '/home'},
  {name: 'Statistics', icon: 'assessment', route: '/stats'},
  {name: 'Settings', icon: 'settings', route: '/settings'},
  {name: 'Log Out', icon: 'eject', route: '/logout'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Be The Change';
  public navElements = NAVELEMENTS;
  public pageTitle: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    router.events.subscribe((url: any) => {
      if (url.url !== '/') {
        this.pageTitle = this.navElements.filter( ( element: any ) => element.route === url.url )[0].name;
      }
    });
  }
}
