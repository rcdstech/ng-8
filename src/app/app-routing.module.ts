import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { AboutComponent } from './page/about/about.component';
import { ContactComponent } from './page/contact/contact.component';
import { SingleBlogComponent } from './page/single-blog/single-blog.component';
import { BlogComponent } from './page/blog/blog.component';
import { PortfolioDetailsComponent } from './page/portfolio-details/portfolio-details.component';
import { ElementsComponent } from './page/elements/elements.component';
import { PortfolioComponent } from './page/portfolio/portfolio.component';
import { ServicesComponent } from './page/services/services.component';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'singleBlog', component: SingleBlogComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'portfolioDetails', component: PortfolioDetailsComponent},
  {path: 'elements', component: ElementsComponent},
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'services', component: ServicesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
