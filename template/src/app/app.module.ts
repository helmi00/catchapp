import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed!
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabase} from 'angularfire2/database';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';


const config = {
    apiKey: 'AIzaSyBu8uY-tqL5C0aKRZF0yxlnb4EZecdLHZE',
    authDomain: 'my-project-1556121986761.firebaseapp.com',
    databaseURL: 'https://my-project-1556121986761.firebaseio.com',
    projectId: 'my-project-1556121986761',
    storageBucket: 'my-project-1556121986761.appspot.com',
    messagingSenderId: '212856553178'
};
// firebase.initializeApp(config);

@NgModule({
    declarations: [
        AppComponent,
        NavbarComponent
    ],
    imports: [
        BrowserAnimationsModule,
        NgbModule.forRoot(),
        FormsModule,
        RouterModule,
        AppRoutingModule,
        ComponentsModule,
        ExamplesModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
