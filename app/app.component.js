// this is Container Component
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// As the component here is a root component, by convention, the file name is called as app, then type of module - > Component. Hence app.component
var core_1 = require('@angular/core');
var product_list_component_1 = require('./products/product-list.component'); // no need to specify file extensions anywhere.
var AppComponent = (function () {
    function AppComponent() {
        this.pageTitle = "ACME Product Management";
    }
    AppComponent = __decorate([
        // no need to specify file extensions anywhere.
        core_1.Component({
            selector: 'pm-app',
            // Whenever angular compiler comes across this directive in HTML, This component is loaded.
            /*template: `<div>
                        <h1>{{pageTitle}}</h1>
                        <div>My First Component</div>
                      </div>` */ // This pageTitle is property what defined in class AppComponent
            // use linked template for length html i.e,  templateUrl: option to include the html file. The above use of template is an inline template.
            //templateUrl:'app/products/product-list.component.html'
            /* templateUrl:'app/products/product-sample.html'*/
            template: "<div>\n\t\t\t\t<h1>{{pageTitle}}</h1>\n\t\t\t    <pm-products></pm-products>\n\t\t\t  </div>",
            directives: [product_list_component_1.ProductListComponent] // This directive is include to let compiler know, that <pm-products> is a directive defined in ProductListComponent class.
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
/* As this file contains export (use to make it available for other components),
the file has automatically become a module. The file containing import keyword also makes it a module.
Here AppComponent is a component Name, a Class. pageTitle is its property. string is datatype of that property and the value
assigned to it is the Default Value.

A Class becomes angular component when we give a component, the metadata.
Angular needs that metadata to understands how to instantiate component, construct the view and interact with component.

We define the metadata with Angular's Component function. In typescript we attach that function to the Class as a Decorator.

A Decorator is a function that adds metadata to a Class, its members or its arguments. Example of Decorator is @Component()
*/
//# sourceMappingURL=app.component.js.map