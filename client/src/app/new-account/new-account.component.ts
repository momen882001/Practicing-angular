import { Component} from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { AccountsDataService } from '../services/accounts-data.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent {

  constructor(private logging : LoggingService, private accountData : AccountsDataService){}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountData.addAccount(accountName, accountStatus);
    this.logging.logStatusChanged(accountStatus);
  }
}
