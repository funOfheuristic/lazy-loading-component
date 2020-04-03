import { Component, ViewContainerRef, ComponentFactoryResolver, Type, Injector } from '@angular/core';
import { LazyCompAComponent } from './lazy-comp-a/lazy-comp-a.component';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lazyComp';
  lazyCom: Promise<Type<LazyCompAComponent>>;
  lazyInjector: Injector;
  data: string;

  constructor(
    private viewContainerRef: ViewContainerRef, 
    private cfr: ComponentFactoryResolver,
    private dataServise: DataService,
    private injector: Injector
    ){
  }

  async load(){

    this.dataServise.data = "Fun of Heuristic";
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
      this.data = "Some data"
      this.lazyInjector = Injector.create({
        providers: [{
          provide: 'childComp',
          useValue: this.data
        }],
        parent: this.injector
      });
      this.lazyCom = import('./lazy-comp-a/lazy-comp-a.component')
      .then(({LazyCompAComponent}) => LazyCompAComponent);
    }
  }
}
