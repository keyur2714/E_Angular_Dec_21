import { Contact } from "./contact.model";

export class Customer {
    constructor(public id ?: number,public name ?: string,public address ?: string,public city ?: string,public contact ?: Contact[]){}
}