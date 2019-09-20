import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from "@angular/http";
import { SearchPipe } from './filter.pipe';
// search module
import { AppComponent } from './app.component';
import { JobService } from './job.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@NgModule({
  imports: [BrowserModule, FormsModule, Ng2SearchPipeModule, HttpClientModule, HttpModule, BrowserAnimationsModule, AngularMaterialModule, Ng2SearchPipeModule, Ng2SearchPipeModule, NgxPaginationModule],
  declarations: [AppComponent, SearchPipe],
  bootstrap: [AppComponent],
  providers: [
    JobService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
