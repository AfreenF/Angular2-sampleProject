// this is Container Component

// As the component here is a root component, by convention, the file name is called as app, then type of module - > Component. Hence app.component

import {Component} from '@angular/core'; 
import {ProductListComponent} from './products/product-list.component';// no need to specify file extensions anywhere.

@Component({
	selector: 'pm-app', // <- pm-app is the directive name used in HTML. If we plan to reference componen in HTML, we use the selector(Component name in HTML).
						// Whenever angular compiler comes across this directive in HTML, This component is loaded.
	/*template: `<div>
				<h1>{{pageTitle}}</h1>
				<div>My First Component</div>
			  </div>` */ 			// This pageTitle is property what defined in class AppComponent
	
						// use linked template for length html i.e,  templateUrl: option to include the html file. The above use of template is an inline template.
						//templateUrl:'app/products/product-list.component.html'
	/* templateUrl:'app/products/product-sample.html'*/ 
	template:`<div>
				<h1>{{pageTitle}}</h1>
			    <pm-products></pm-products>
			  </div>`,	
			   
	directives:[ProductListComponent]   // This directive is include to let compiler know, that <pm-products> is a directive defined in ProductListComponent class.
				// As we are using ProductListComponent class, we also need to import it as where it is defined.So,importing at top.
})

export class AppComponent{
	pageTitle: string = "ACME Product Management";
}

/* As this file contains export (use to make it available for other components), 
the file has automatically become a module. The file containing import keyword also makes it a module.
Here AppComponent is a component Name, a Class. pageTitle is its property. string is datatype of that property and the value
assigned to it is the Default Value. 

A Class becomes angular component when we give a component, the metadata. 
Angular needs that metadata to understands how to instantiate component, construct the view and interact with component.

We define the metadata with Angular's Component function. In typescript we attach that function to the Class as a Decorator.

A Decorator is a function that adds metadata to a Class, its members or its arguments. Example of Decorator is @Component()
*/
