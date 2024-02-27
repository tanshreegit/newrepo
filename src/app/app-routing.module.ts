import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ChefsComponent } from './chefs/chefs.component';
import { ContactComponent } from './contact/contact.component';
import { EventsComponent } from './events/events.component';
import { GalleryComponent } from './gallery/gallery.component';
import { MenuComponent } from './menu/menu.component';
import { DropDownComponent } from './drop-down/drop-down.component';

const routes: Routes = [
  {
    path:'header',component:HeaderComponent,
  },
  {
    path:'footer',component:FooterComponent,
  },
  {
    path:'',component:HomeComponent,

  },
  {
    path:'about',component:AboutComponent,

  },
  {
    path:'chefs',component:ChefsComponent,

  },
  {
    path:'contact',component:ContactComponent,

  },
  {
    path:'events',component:EventsComponent,

  },
  {
    path:'gallery',component:GalleryComponent,
  },
  {
    path:'menu',component:MenuComponent,

  },
  {
    path:'dropdown',component:DropDownComponent,

  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
