import { Component, OnInit } from '@angular/core';

import {AuthService} from '../../services/auth.service';
import { User } from 'src/app/models/user.module';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent  implements OnInit{
  constructor(
    private authService:AuthService
  ){
  }

  user:User|null=null

  ngOnInit():void{
    this.authService.getProfile()
    .subscribe(data=>{
      this.user=data
    })
  }

}
