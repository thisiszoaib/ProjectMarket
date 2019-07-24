import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BusinessOnboardComponent } from './business-onboard/business-onboard.component';
import { BusinessComponent } from './business/business.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReferrerComponent } from './referrer/referrer.component';
import { AuthGuard } from './services/auth.guard';
import { StudentConfirmationScreenComponent } from './student-confirmation-screen/student-confirmation-screen.component';
import { StudentOnboardComponent } from './student-onboard/student-onboard.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'student', component: StudentComponent },
  { path: 'student/form', component: StudentOnboardComponent, canActivate: [AuthGuard], data: { role: 'Student' } },
  { path: 'student/form/confirmation', component: StudentConfirmationScreenComponent },
  { path: 'student/signup', component: StudentOnboardComponent, canActivate: [AuthGuard], data: { role: 'Student' } },
  { path: 'business', component: BusinessComponent },
  { path: 'business/form', component: BusinessOnboardComponent },
  { path: 'referrer', component: ReferrerComponent },
  { path: 'admin', component: AdminComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
