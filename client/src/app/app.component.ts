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
  defaultQuestion : string = 'pet';
  defaultUser : string = 'Moamen Mohamed';
  genders : string[] = ['male', 'female'];
  isSubmitted : boolean = false;

  // onSubmit(form : NgForm) {
  //   console.log(form);
  // }


  handleSuggest() {
    // setvalue
    this.signupForm.setValue({
      userData : {
        username : 'Mo2',
        email : ''
      },
      secret : this.defaultQuestion,
      gender : 'male'
    })
    // patch
    // this.signupForm.form.patchValue({
    //   userData : {
    //     username : 'Mo2',
    //   },
    // })
  }

  user = {
    userName : '',
    email : '',
    secretQuestion : '',
    gender : '',
  }

  onSubmit() {
    this.isSubmitted = true;
    console.log(this.signupForm);
    this.user.userName = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestion = this.signupForm.value.secret;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }

  constructor(private accountData : AccountsDataService){}

  accounts! : {name : string; status : string}[];

  ngOnInit(): void {
    this.accounts = this.accountData.accounts;
  }


}
