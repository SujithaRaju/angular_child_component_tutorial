import { Component } from '@angular/core';
import { Customer } from './customer';

@Component({
    selector:'customer-list',
    templateUrl:'./customer-list.components.html'

})

export class CustomersListComponents{
    customers : Customer[] = [
        {customerNumber:1,name:'Sujitha',address:'MGR Nagar',city:'Tirupur',state:'Tamilnadu',country:'india'},
        {customerNumber:2,name:'Mohan',address:'Aravakuruchi',city:'Karur',state:'Tamilnadu',country:'india'},
        {customerNumber:3,name:'Darren',address:'Highlan Knoll',city:'Charlotte',state:'North Carolina',country:'USA'}
    ]
}