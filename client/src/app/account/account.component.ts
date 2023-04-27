import { Component,Input} from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { AccountsDataService } from '../services/accounts-data.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
})
export class AccountComponent {
  @Input() account!: {name: string, status: string};
  @Input() id!: number;

  constructor(private logging : LoggingService , private accountData : AccountsDataService){}

  onSetTo(status: string) {
    this.accountData.updateStatus(this.id,status);
    // this.logging.logStatusChanged(status);
    this.accountData.statusUpdated.emit(status);
  }
}
