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

@NgModule({
  declarations: [
    AppComponent,
    CockpitComponent,
    ServerElementComponent,
    BasicHighlightDirective,
    BetterHighlightDirective,
    AccountComponent,
    NewAccountComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [AccountsDataService,LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
