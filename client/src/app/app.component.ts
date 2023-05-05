// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   servers : any = [];

//   onServer(serverData : {serverName: string , serverContent: string}) {
//     this.servers.push({
//       type: 'server',
//       name : serverData.serverName,
//       content : serverData.serverContent
//     })
//   }

//   onBlueprint(blueprint : {serverName: string , serverContent: string}) {
//     this.servers.push({
//       type: 'blueprint',
//       name : blueprint.serverName ,
//       content : blueprint.serverContent
//     })
//   }

// }

import { Component , OnInit , ViewChild } from '@angular/core';
import { AccountsDataService } from './services/accounts-data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  @ViewChild('f')  signupForm! : NgForm;

  // onSubmit(form : NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.signupForm);
  }

  constructor(private accountData : AccountsDataService){}

  accounts! : {name : string; status : string}[];

  ngOnInit(): void {
    this.accounts = this.accountData.accounts;
  }


}
