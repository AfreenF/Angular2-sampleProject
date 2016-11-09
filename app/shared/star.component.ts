import {Component, OnChanges, Input} from '@angular/core';

@Component({
	selector: 'ai-star',
	templateUrl: 'app/shared/star.component.html',
	//styleUrl: 'app/shared/star.component.css'
})

export class StarComponent implements OnChanges{
	//rating:  number = 4; // default value initial to use of @Input() Decorator.
	@Input() rating:  number = 4;  //using @Input Decorator to get the value inputted from main container.
	starWidth: number;
	
	ngOnChanges() : void{		// This to fix the width of star rating based on number of rating like say 0.2 or 0.4 etc..
		this.starWidth = this.rating * 86/5; // here 86 is width of div with rating span elements.
	}									// but this event fires, only when there is change, 
							//that is why when page is loaded, we are not able to view width of star specific to rating number and we are
							// not getting here actual rating values from input.So passing data to nested component from main component is required here.
							//that is obtained b @Input() Decorator, we can.
}

// Now to send the data back from Nested Component to Main Component.- we use @Output(). The only way nested Component can pass data back to main component
// is with the help of events. 

//These @Input(). @Output() can be considered as public APIs of Nested Component.