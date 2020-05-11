import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudgrReduxModule } from '@study-group/studgr-redux';
import { StudgrModelsModule } from '@study-group/studgr-models';

@NgModule({
  imports: [
    CommonModule,
    StudgrReduxModule,
    StudgrModelsModule,
  ]
})
export class StudgrCoreModule {}
