import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { StudyGroupsContainer } from '../../pages/study-groups/study-groups.container';

export const ContentLayoutRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'student-profile', component: UserProfileComponent },
  { path: 'study-groups', component: StudyGroupsContainer },
  { path: 'messages', component: IconsComponent },
  { path: 'meetings', component: MapsComponent }
];
