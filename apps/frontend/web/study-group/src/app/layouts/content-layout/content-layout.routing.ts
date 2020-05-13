import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { StudentProfileComponent } from '../../pages/student-profile/student-profile.component';
import { StudyGroupsContainer } from '../../pages/study-groups/study-groups.container';

export const ContentLayoutRoutes: Routes = [
         { path: 'dashboard', component: DashboardComponent },
         { path: 'student-profile', component: StudentProfileComponent },
         { path: 'study-groups', component: StudyGroupsContainer },
         { path: 'messages', component: IconsComponent },
         { path: 'meetings', component: StudyGroupsContainer }
       ];
