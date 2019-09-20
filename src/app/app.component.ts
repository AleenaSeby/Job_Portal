import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JobService } from './job.service';
import { ISample } from './Sample';
import { IJob } from './job';
import { Pipe, PipeTransform } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';


// @Pipe({
//   name: 'filter'
// })
// export class FilterPipe implements PipeTransform {
//   transform(items: Array<any>, filter: {[key: string]: any }): Array<any> {
//       return items.filter(item => {
//               let notMatchingField = Object.keys(filter)
//                                            .find(key => item[key] !== filter[key]);

//               return !notMatchingField; // true if matches all fields
//           });
//   }
// }

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Job Portal';
  searchText: any;
  filter;
  _jobArray: IJob[];
  public errorMsg;
  count: number;

  dataSource = new MatTableDataSource<IJob>(this._jobArray);
  @ViewChild(MatPaginator) paginator: MatPaginator;
 // @ViewChild(MatPaginator) paginator: MatPaginator;
  // restItems: any;
  // restItemsUrl  = 'https://jobsqared.herokuapp.com/jobs';
  //headers = new HttpHeaders().set('Content-Type', 'application/json');

  //public jobs = [];
 

  constructor(private _job: JobService) { }
  // ngOnInit() {
  //  this._job.getJob()
  //   .subscribe(data => this.jobs = data,
  //     error => this.errorMsg = error);

  //   console.log("--result---",this.jobs);
  // }   
   getJob(): void {
    this._job.getJob()
      .subscribe(
        resultArray => {
         // this.count = this._jobArray.length;
          return this._jobArray = resultArray;
        },
        error => console.log("Error :: " + error)
      );
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.getJob();
  }

  ngAfterViewInit() {
    //this.dataSource.paginator = this.paginator;
  }
  // Read all REST Items
  // getRestItems(): void {
  //   this.restItemsServiceGetRestItems()
  //     .subscribe(
  //       restItems => {
  //         this.restItems = restItems;
  //         console.log(this.restItems);
  //       }
  //     )
  // }

  // Rest Items Service: Read all REST Items
  // restItemsServiceGetRestItems() {
  //   return this.http
  //     .get<any[]>(this.restItemsUrl)
  //     .pipe(map(data => data));
  // }

  
}
