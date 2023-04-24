import { Injectable } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class AccountsDataService {

  constructor(private logging : LoggingService) { }

  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  addAccount(name : string, status: string) {
    this.accounts.push({
      name: name,
      status: status
    });
    this.logging.logStatusChanged(status)
  }

  updateStatus(id : number , newStatus : string) {
    this.accounts[id].status = newStatus;
    this.logging.logStatusChanged(newStatus)
  }

}
