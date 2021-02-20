import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { StoriesComponent } from './stories/stories.component';
import { ToursComponent } from './tours/tours.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'tours', component:ToursComponent},
  {path:'stories', component:StoriesComponent},
  {path:'contact', component:ContactComponent},
  {path:'footer', component:FooterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
