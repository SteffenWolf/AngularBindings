import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  username = '';
  title = 'data-binding-assignment';
  buttonStatus = true;

  onUsernameChange() {
    if(this.username === ''){
      this.buttonStatus = true;
    } else {
      this.buttonStatus = false;
    }
  }

  reset() {
    this.username = '';
    this.onUsernameChange();
  }

}
