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
var core_1 = require('@angular/core');
var StarComponent = (function () {
    function StarComponent() {
        //rating:  number = 4; // default value initial to use of @Input() Decorator.
        this.rating = 4; //using @Input Decorator to get the value inputted from main container.
    }
    StarComponent.prototype.ngOnChanges = function () {
        this.starWidth = this.rating * 86 / 5; // here 86 is width of div with rating span elements.
    }; // but this event fires, only when there is change, 
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], StarComponent.prototype, "rating", void 0);
    StarComponent = __decorate([
        core_1.Component({
            selector: 'ai-star',
            templateUrl: 'app/shared/star.component.html',
        }), 
        __metadata('design:paramtypes', [])
    ], StarComponent);
    return StarComponent;
}());
exports.StarComponent = StarComponent;
// Now to send the data back from Nested Component to Main Component.- we use @Output(). The only way nested Component can pass data back to main component
// is with the help of events. 
//These @Input(). @Output() can be considered as public APIs of Nested Component. 
//# sourceMappingURL=star.component.js.map