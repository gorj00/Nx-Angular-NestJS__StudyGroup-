import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClipboardModule } from 'ngx-clipboard';

import { ContentLayoutRoutes } from './content-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { StudyGroupsContainer } from '../../pages/study-groups/study-groups.container';
import { StudyGroupsComponent } from '../../pages/study-groups/study-groups.component';
import { LightTableComponent } from '../../pages/ui-web-pages/tables/light-table/light-table.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ContentLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
    ClipboardModule
  ],
  declarations: [
    StudyGroupsContainer,
    DashboardComponent,
    UserProfileComponent,
    StudyGroupsComponent,
    IconsComponent,
    MapsComponent,
    LightTableComponent,
  ]
})

export class ContentLayoutModule {}