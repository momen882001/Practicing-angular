import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription, interval ,Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit , OnDestroy{
  constructor( private router : Router , private userService : UserService) {}
  private firstObsSubscription! : Subscription;



  ngOnInit() {
    // Observable subscribe
  //  this.firstObsSubscription = interval(1000).subscribe(count => {
  //     console.log(count);

  //   })
  }

  ngOnDestroy(): void {
    // Observable unsubscribe
    // this.firstObsSubscription.unsubscribe();
  }

  onLoadServersPage(id : number) {
    // code then navigate
    this.router.navigate(['/servers' , id , 'edit'] , {queryParams: {allowedit : 1} , fragment : 'loading'} )
  }
}
