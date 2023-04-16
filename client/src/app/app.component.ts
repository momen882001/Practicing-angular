import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  servers : any = [];


  onServer(serverData : {serverName: string , serverContent: string}) {
    this.servers.push({
      type: 'server',
      name : serverData.serverName,
      content : serverData.serverContent
    })
  }

  onBlueprint(blueprint : {serverName: string , serverContent: string}) {
    this.servers.push({
      type: 'blueprint',
      name : blueprint.serverName ,
      content : blueprint.serverContent
    })
  }

}
