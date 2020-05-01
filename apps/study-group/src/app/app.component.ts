import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@study-group/api-interfaces';
import { DashboardFacade } from '@study-group/studgr-redux';

@Component({
  selector: 'study-group-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient,
              private dashboardFacade: DashboardFacade) {}

  ngOnInit() {
    // TODO: Example only, to delete
    this.dashboardFacade.loading();
  }
}
