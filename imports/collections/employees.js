//Declare collection

import { Mongo } from 'meteor/mongo'; //mongo server runs with meteor

export const Employees = new Mongo.Collection('employees'); //employees is name of collection
