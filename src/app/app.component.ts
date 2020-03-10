import { Component } from '@angular/core';

import { SlimLoadingBarService } from "ng2-slim-loading-bar";
import { 
  NavigationStart
  ,NavigationCancel
  ,NavigationEnd 
  ,NavigationError
  ,Event
  ,Router
} from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 9 Demo';

  constructor(private loadingBar: SlimLoadingBarService, private router:Router){
    this.router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
      
    })};

    private navigationInterceptor(event: Event): void {

      if(event instanceof NavigationStart){
        this.loadingBar.start();
      }

      if(event instanceof NavigationEnd){
        this.loadingBar.complete();
      }

      if(event instanceof NavigationError || event instanceof NavigationCancel ){
        this.loadingBar.stop()
      }
    }
  }