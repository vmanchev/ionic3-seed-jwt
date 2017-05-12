import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {AuthService} from '../providers/auth-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = 'HomePage';

  pages: Array<{title: string, component: any, method?: any}>;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public authService: AuthService) {

    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      {title: 'Начало', component: 'HomePage'},
      {title: 'Рецепти', component: 'PrescriptionsPage'},
      {title: 'Прегледи', component: 'AppointmentsPage'},
      {title: 'Лекари', component: 'DoctorsPage'},
      {title: 'Изход', component: 'LoginPage', method: 'logout'}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {

    if (page.method && page.method === 'logout') {
      this.authService.logout();
    }

    this.nav.setRoot(page.component);
  }
}
