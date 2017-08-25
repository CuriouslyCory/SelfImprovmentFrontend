// import core libraries
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// import services
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public email: string;
  public password: string;
  public error: string;

  constructor ( private authService: AuthService, private router: Router ) { }

  ngOnInit() {
  }

  login () {
    this.authService.login(this.email, this.password)
      .then(result => {
        console.log(result);
        if ( result === true ) {
          console.log('should navigate');
          this.router.navigate(['/home']);
        } else {
          this.error = 'Invalid username or password';
        }
      });
  }

}
