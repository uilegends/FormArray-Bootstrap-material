import {
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory,
  OnInit
} from '@angular/core';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
@Component({
  selector: 'app-comp1ncomp2',
  templateUrl: './comp1ncomp2.component.html',
  styleUrls: ['./comp1ncomp2.component.css']
})
export class Comp1ncomp2Component {
  title = 'app';
  componentRef: any;
  @ViewChild('loadComponent', { read: ViewContainerRef }) entry: ViewContainerRef;
  cmpData = [
    {
      "Id": 1,
      "Name": "Component one"
    },
    {
      "Id": 2,
      "Name": "Component two"
    }
  ]

  constructor(private resolver: ComponentFactoryResolver) { }
  createComponent(Id: number) {
    this.entry.clear();
    if (Id == 1) {
      const factory = this.resolver.resolveComponentFactory(Comp1Component);
      this.componentRef = this.entry.createComponent(factory);
    } else if (Id == 2) {
      const factory = this.resolver.resolveComponentFactory(Comp2Component);
      this.componentRef = this.entry.createComponent(factory);
    }
    this.componentRef.instance.message = "Called by comp1ncomp2";
  }
  destroyComponent() {
    this.componentRef.destroy();
  }

  selectName(event: any) {
    const id = event.value
    this.createComponent(id);
  }
}
