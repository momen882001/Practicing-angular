import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent {
  // newServerName: string = ''; // using local reference instead
  newServerContent: string = '';
 @Output() serverCreated = new EventEmitter<{serverName : string, serverContent : string}>();
 @Output() blueprintCreated = new EventEmitter<{serverName : string, serverContent : string}>();

  constructor() {}

  onAddingServer(serverNameInput : HTMLInputElement) {
    this.serverCreated.emit({serverName : serverNameInput.value, serverContent : this.newServerContent})
  }

  onAddingBluePrint(serverNameInput : HTMLInputElement) {
  this.blueprintCreated.emit({serverName : serverNameInput.value, serverContent : this.newServerContent})
  }
}
