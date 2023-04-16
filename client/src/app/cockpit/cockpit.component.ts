import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent {
  newServerName: string = '';
  newServerContent: string = '';
 @Output() serverCreated = new EventEmitter<{serverName : string, serverContent : string}>();
 @Output() blueprintCreated = new EventEmitter<{serverName : string, serverContent : string}>();

  constructor() {}

  onAddingServer() {
    this.serverCreated.emit({serverName : this.newServerName, serverContent : this.newServerContent})
  }

  onAddingBluePrint() {
  this.blueprintCreated.emit({serverName : this.newServerName, serverContent : this.newServerContent})
  }
}
