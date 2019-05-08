import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { FormsModule } from '@angular/forms';
import { PostPageComponent } from './post-page/post-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SignUpPageComponent,
    PostPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
