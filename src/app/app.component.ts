import { Component, OnInit } from '@angular/core';
import * as Raven from 'raven-js';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-sentry-demo';

  inputValue: any = 'Altere-me';

  constructor(private appService: AppService) {}

  ngOnInit() {
    Raven.setUserContext({
      username: 'Jonas Ruth',
      email: 'jonas.ruth@serpro.gov.br',
      id: '777'
    });
  }

  onChange() {
    try {
      this.inputValue.map(x => {
        console.log(x * 2);
      });
    } catch (e) {
      Raven.captureException(new Error(`Oops, something went wrong: ${e}`));
    }
  }

  callService() {
    this.appService.getList().subscribe(
      (data) => {
        console.log('dados', data);
      }
    );
  }
}
