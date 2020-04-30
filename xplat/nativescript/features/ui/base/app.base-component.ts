import { Component } from '@angular/core';

// libs
import { BaseComponent } from '@study-group/core';
import { AppService } from '@study-group/nativescript/core';

export abstract class AppBaseComponent extends BaseComponent {
  constructor(protected appService: AppService) {
    super();
  }
}
