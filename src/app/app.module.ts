import { ManagedocsService } from './managedocs.service';
import { UserService } from './user.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { PlateService } from './plate.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { PlatesComponent } from './pages/plates/plates.component';
import { ManagedocsComponent } from './pages/managedocs/managedocs.component';
import { UsersComponent } from './pages/users/users.component';
import { UsersService } from './users.service';
import { ChefsComponent } from './pages/chefs/chefs.component';
import { ChefsService } from './chefs.service';


@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    PlatesComponent,
    ManagedocsComponent,
    UsersComponent,
    ChefsComponent
  ],
  providers: [AuthService, AuthGuard, PlateService, UserService, ManagedocsService, UsersService, ChefsService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
