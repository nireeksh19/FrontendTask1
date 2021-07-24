import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PostComponent } from './components/post/post.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { SigninComponent } from './components/signin/signin.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NavSecondaryComponent } from './components/nav-secondary/nav-secondary.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    AppComponent,
    PostComponent,
    SigninComponent,
    NavigationComponent,
    NavSecondaryComponent
  ],
  imports: [
    BrowserModule,
    ClickOutsideModule,
    BrowserAnimationsModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [
],
  bootstrap: [AppComponent]
})
export class AppModule { }