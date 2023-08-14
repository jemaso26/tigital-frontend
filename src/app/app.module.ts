import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { RegisterProfileComponent } from './register-profile/register-profile.component';
import { AuthService } from './auth.service';

import { RestAuthService } from './services/data-providers/RestAuthService';
import { REST_AUTH_SERVICE_TOKEN } from './shared/injection-tokens/rest.auth.token';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    RegisterProfileComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  providers: [
    {
      provide: REST_AUTH_SERVICE_TOKEN,
      useClass: RestAuthService,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
