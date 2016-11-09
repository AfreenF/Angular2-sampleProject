// this is Directive Component

import {Component, OnInit} from '@angular/core'; // Added OnInit in the same import line, as it is too imported from angular core module.
import {IProduct} from './product';
import {StarComponent} from '../shared/star.component';

@Component({
	selector:'pm-products', // this creates a custom directive, and we can use this directive in other pages.
	templateUrl:'app/products/product-list.component.html', // path relative to index-2.html.	 
	styleUrls : ['app/products/product-list.component.css'],  //to create styles specific to template or component. alternate way of defining styles internally is by using format 
	                        //styles:['thead {color:#337AB7}']
				// styles specific to Component.
	directives: [StarComponent]			
	})

// typescript comes with strong typing. we can see below, how for each variable we have used related datatype. Except for products array, 
// for which any[] is used. To specify custom types, we can create interface. An interface is the specification identifying related set of properties & methods.
// A class supports the specification by implementing the interface. We can use interface as datatype.ES 5 and ES2015 doesnt support interface but typescript does. 
// this means interface is development time only. Let us create Interface (in other file product.ts) to make our application more strongly typed.

//export class ProductListComponent{
	export class ProductListComponent implements OnInit{
	pageTitle: string = 'Product List';
	imageWidth: number = 50;
	imageMargin: number = 2;
	showImage: boolean = true;
	listFilter: string = "cart";
	//products: any[] = [			// use any[] when datatype is not known. any[] can be any datatype.
    products: IProduct[] = [	
		{
			"productId": 1,
			"productName": "Leaf Rake",
			"productCode": "GDN-0011",
			"releaseDate": "March 19, 2016",
			"description": "Leaf rake with 48-inch wooden handle.",
			"price": 19.95,
			"starRating": 3.2,
			"imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
		},
		{
			"productId": 2,
			"productName": "Garden Cart",
			"productCode": "GDN-0023",
			"releaseDate": "March 18, 2016",
			"description": "15 gallon capacity rolling garden cart",
			"price": 32.99,
			"starRating": 4.2,
			"imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
		},
		{
			"productId": 5,
			"productName": "Hammer",
			"productCode": "TBX-0048",
			"releaseDate": "May 21, 2016",
			"description": "Curved claw steel hammer",
			"price": 8.9,
			"starRating": 4.8,
			"imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
		},
		{
			"productId": 8,
			"productName": "Saw",
			"productCode": "TBX-0022",
			"releaseDate": "May 15, 2016",
			"description": "15-inch steel blade hand saw",
			"price": 11.55,
			"starRating": 3.7,
			"imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
		},
		{
			"productId": 10,
			"productName": "Video Game Controller",
			"productCode": "GMG-0042",
			"releaseDate": "October 15, 2015",
			"description": "Standard two-button video game controller",
			"price": 35.95,
			"starRating": 4.6,
			"imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
		}
	]; 

	toggleImage() : void{  // here we wont user 'function' keyword explicity. Use of () identifies it as function. As this function 
						   // returns nothing, hence void is used here.
			this.showImage = !this.showImage;
	}
	ngOnInit() : void{   // this property should be included whenever class implements OnInit.
		console.log('In OnInit');
	}
}


/* Angular provides certain life cycle hooks. Component life cycle - 
-Create, Render, Create and Render Children, Processess changes when its data type property change i.e Process Changes, and 
Destroy before removing it from DOM.


OnInit - Use this lifecycle hook to Perform Component Intialization, retrieve data. 
OnChange - Use this hook to Perform action after change to input properties.
OnDestroy - Used to destroy before removing it from DOM.

Let us implements these lifecycle hooks to understand how it works.*/

/* Nested Components
Nested Component consists of template and Class, which later included in main or parent Component.
Main component gives input to nested component and nested component gives output by raising events. 

so, let us create nested component to show start rating symbols in star rating coloumn to improve visualization.*/