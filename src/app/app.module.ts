import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header/header.component';
import { FooterComponent } from './ui/footer/footer.component';
import { AboutComponent } from './page/about/about.component';
import { HomeComponent } from './page/home/home.component';
import { ServicesComponent } from './page/services/services.component';
import { PortfolioComponent } from './page/portfolio/portfolio.component';
import { ElementsComponent } from './page/elements/elements.component';
import { PortfolioDetailsComponent } from './page/portfolio-details/portfolio-details.component';
import { BlogComponent } from './page/blog/blog.component';
import { SingleBlogComponent } from './page/single-blog/single-blog.component';
import { ContactComponent } from './page/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    HomeComponent,
    ServicesComponent,
    PortfolioComponent,
    ElementsComponent,
    PortfolioDetailsComponent,
    BlogComponent,
    SingleBlogComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
