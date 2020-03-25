import { Component, ViewContainerRef, ComponentFactoryResolver, Type } from '@angular/core';
import { LazyCompAComponent } from './lazy-comp-a/lazy-comp-a.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lazyComp';
  lazyCom: Promise<Type<LazyCompAComponent>>;

  constructor(private viewContainerRef: ViewContainerRef, private cfr: ComponentFactoryResolver){
  }

  async load(){

    /**
     * Lazy load the component by appending the component data to the DOM
     */
    // this.viewContainerRef.clear();
    // const {LazyCompAComponent} = await import('./lazy-comp-a/lazy-comp-a.component');
    // this.viewContainerRef.createComponent(this.cfr.resolveComponentFactory(LazyCompAComponent));

    /**
     * Lazy load the component using ngComponentOutlet
     */
    
    if(!this.lazyCom){
      this.lazyCom = import('./lazy-comp-a/lazy-comp-a.component')
      .then(({LazyCompAComponent}) => LazyCompAComponent);
    }
  }
}
