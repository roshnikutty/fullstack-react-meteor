import _ from 'lodash';                         //utilities library
import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/collections/employees';
import { image, helpers } from 'faker';

Meteor.startup(() => {
    //generate data after Meteor starts on server
    //check to see if data exists in the collection so that if it does, 
    //do not load new data
    const numberRecords = Employees.find({}).count();  //check everything that are in the collection, so use {}
    if (!numberRecords) {
        //callback is called 5000 times- used instead of a for-loop
        _.times(5000, () => {
            //createCard method generates a profile for a fake person
            const { name, email, phone } = helpers.createCard();

            //using values from above, insert new employee in the collection using meteor's mongo insert method
            Employees.insert({
                name,
                email,
                phone,
                avatar: image.avatar()
            });
        });
    }


    Meteor.publish('employees', (per_page_employees) => {
        return Employees.find({}, { limit: per_page_employees });
    })

});