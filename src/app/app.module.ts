import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllcourseComponent } from './components/allcourse/allcourse.component';
import { HeaderComponent } from './components/header/header.component';
import { PostgraduateComponent } from './components/postgraduate/postgraduate.component';
import { UndergraduateComponent } from './components/undergraduate/undergraduate.component';
import { NewsComponent } from './components/news/news.component';
import { BottomComponent } from './components/bottom/bottom.component';
import { MatCardModule } from '@angular/material/card'; 
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { FooterComponent } from './components/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { MatProgressBarModule } from '@angular/material/progress-bar'; 
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SearchbarComponent } from './components/searchbar/searchbar.component'; 
import { NgSelectModule } from '@ng-select/ng-select';


const appRoutes: Routes = [
  {path:'', component: AllcourseComponent},
  {path:'postgraduate', component: PostgraduateComponent},
  {path:'undergraduate', component: UndergraduateComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    AllcourseComponent,
    HeaderComponent,
    PostgraduateComponent,
    UndergraduateComponent,
    NewsComponent,
    BottomComponent,
    FooterComponent,
    SearchbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatButtonModule,
    FormsModule,
    MatProgressBarModule,
    Ng2SearchPipeModule,
    NgSelectModule,
    NgMultiSelectDropDownModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
