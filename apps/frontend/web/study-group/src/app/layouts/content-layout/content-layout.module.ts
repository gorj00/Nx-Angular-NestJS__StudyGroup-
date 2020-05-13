import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';
import { UiWebPagesModule } from '../../ui-web-pages/ui-web-pages.module';

import { ContentLayoutRoutes } from './content-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { StudentProfileComponent } from '../../pages/student-profile/student-profile.component';
import { StudyGroupsContainer } from '../../pages/study-groups/study-groups.container';
import { StudyGroupsComponent } from '../../pages/study-groups/study-groups.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ContentLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    // TODO: Delete
    ClipboardModule,
    UiWebPagesModule,
  ],
  declarations: [
    StudyGroupsContainer,
    DashboardComponent,
    StudentProfileComponent,
    StudyGroupsComponent,
    IconsComponent
  ]
})
export class ContentLayoutModule {}
