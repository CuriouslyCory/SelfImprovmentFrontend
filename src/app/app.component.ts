import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AuthService } from './services/auth.service';

const ROUTEINFO = [
  {name: 'Home', icon: 'home', route: '/home'},
  {name: 'Statistics', icon: 'assessment', route: '/stats'},
  {name: 'Settings', icon: 'settings', route: '/settings'},
  {name: 'Login', route: '/login'},
  {name: 'Log Out', icon: 'eject', clickAction: 'logout'}
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Be The Change';
  public routeInfo = ROUTEINFO;
  public pageTitle: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private authService: AuthService) {
    router.events.subscribe((url: any) => {
      if (url.url !== '/') {
         this.pageTitle = this.routeInfo.filter( ( element: any ) => element.route === url.url )[0].name;
      }
    });
  }

  navClick(clickAction) {
    // map to variable
  }

  logout (): void {
    this.authService.logout();
    this.router.navigate(['/login'])
  }
}
