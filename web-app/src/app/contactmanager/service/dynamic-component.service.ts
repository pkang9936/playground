import { Injectable, Inject, ComponentFactoryResolver } from '@angular/core';
import {NotificationComponent} from '../components/panel/notification.component';

@Injectable({
  providedIn: 'root'
})
export class DynamicComponentService {
  rootViewContainer: any;

  constructor(private factoryResolver: ComponentFactoryResolver) {
  }

  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }

  addDynamicComponent() {
    const factory = this.factoryResolver.resolveComponentFactory(NotificationComponent);
    const component = factory.create(this.rootViewContainer.parentInjector);
    this.rootViewContainer.insert(component.hostView);
  }
}
