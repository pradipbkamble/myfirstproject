import { Component, OnInit } from "@angular/core"


@Component({
    selector:"app-product",
    templateUrl:"./product.component.html",
    styleUrls:["./product.component.scss"],
})

export class ProductComponent implements OnInit{
    ngOnInit(): void {
        setTimeout(() => {
            this.productstatus=false;
        },3000);

    }
    productstatus:boolean=true
    productname:string="Electronic Devices"
    productId:number=123
    productinfo=`<h4>Oppo Mobile</h4>`
    onproductsearch!:string
    Cartstatusproduct:string="product is added to the cart"
    Noofproducts:number=0
    updatecartstatus(event:any){
        this.Noofproducts++
        this.Cartstatusproduct=`${this.Noofproducts} added in the cart`
// let val=(event.target as HTMLInputElement).value
console.log("clicked")

    }
    removeproduct(event:any){

        if(this.Noofproducts>1){
            this.Noofproducts--
            this.Cartstatusproduct=`${this.Noofproducts} remove from the cart`
        }
        
    }
    Onproductsearch(event:Event){
 let val=(event.target as HTMLInputElement).value
 this.onproductsearch=val
    }
}


