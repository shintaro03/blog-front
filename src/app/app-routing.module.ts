import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import { PostPageComponent } from './post-page/post-page.component'

const routes: Routes = [
  {path: 'signup', component: SignUpPageComponent},
  {path: 'post', component: PostPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
