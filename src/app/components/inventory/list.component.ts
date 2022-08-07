import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Inventory } from "../../models/inventory.model";
import { InventoryRepository } from "../../models/inventory.repository";

@Component({
    selector: "list-inventory",
    templateUrl: "list.component.html"
})

export class ListComponent {

    title = 'Inventory List';

    constructor(private repository: InventoryRepository,
        private router: Router) 
    { }

    get inventoryList(): Inventory[] {
        return this.repository.getInventory();        
    }

    deleteMethod(id: string) {
        if(confirm("Are you sure do you want to delete?")) {
            this.router.navigateByUrl("inventory/delete/"+id);
        }
    }
    
}