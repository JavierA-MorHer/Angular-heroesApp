import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent  {

  constructor( private route:Router,
               private authService:AuthService) { }

  login(){
    
    this.authService.login()
      .subscribe( resp => {
        console.log(resp);

        if( resp.id){
          this.route.navigate(['./heroes'])
        }
      })
    //
  }


}
