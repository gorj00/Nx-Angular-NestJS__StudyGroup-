import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { UiWebPagesRoutes } from './ui-web-pages.routing';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Ui web pages imports
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TablesComponent } from './tables/tables.component';
import { MapsComponent } from './maps/maps.component';
import { IconsComponent } from './icons/icons.component';
import { ClipboardModule } from 'ngx-clipboard';
import { LightTableComponent } from './tables/light-table/light-table.component';
import { LightTableRowComponent } from './tables/light-table-row/light-table-row.component';
import { LightTableCellComponent } from './tables/light-table-cell/light-table-cell.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(UiWebPagesRoutes),
    FormsModule,
    NgbModule,
    ClipboardModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    MapsComponent,
    IconsComponent,
    LightTableComponent,
    LightTableRowComponent,
    LightTableCellComponent,
  ],
  exports: [
    DashboardComponent,
    UserProfileComponent,
    TablesComponent,
    MapsComponent,
    IconsComponent,
    LightTableComponent,
    LightTableRowComponent,
    LightTableCellComponent,
  ]
})
export class UiWebPagesModule {}
