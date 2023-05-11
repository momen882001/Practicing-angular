import { Component, OnInit } from '@angular/core';
import { ServersService } from './servers.service';
import { Router , ActivatedRoute} from '@angular/router'
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  public servers: {id: number, name: string, status: string}[] = [];

  constructor(private serversService: ServersService , private router : Router , private route : ActivatedRoute , private userService : UserService ) { }

  public activeFlag : boolean = false;

  ngOnInit() {
    this.servers = this.serversService.getServers();

    this.userService.activeEmmiter.subscribe( data => {
      this.activeFlag = data
    })
  }

  onReloadPage() {
    // this.router.navigate(['servers'], { relativeTo: this.route})
  }

  onActive() {
    this.userService.activeEmmiter.next(true);
    console.log('done');

  }

}
