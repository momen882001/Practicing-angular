import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { FormsModule } from '@angular/forms';
import { BasicHighlightDirective } from './Directives/Basic-Highlight/basic-highlight.directive';
import { BetterHighlightDirective } from './Directives/Better-Highlight/better-highlight.directive';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AccountsDataService } from './services/accounts-data.service';
import { LoggingService } from './services/logging.service';
import { ServerComponent } from './servers/server/server.component';
import { ServersComponent } from './servers/servers.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './users/user/user.component';
import { ServersService } from './servers/servers.service';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'servers',
    component: ServersComponent,
    children: [
      { path: ':id', component: ServerComponent },
      { path: ':id/edit', component: EditServerComponent },
    ],
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [{ path: ':id/:name', component: UserComponent }],
  },
];

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    AccountComponent,
    NewAccountComponent,
    ServerComponent,
    ServersComponent,
    EditServerComponent,
    HomeComponent,
    UsersComponent,
    UserComponent,
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoutes)],
  providers: [AccountsDataService, LoggingService, ServersService],
  bootstrap: [AppComponent],
})
export class AppModule {}
