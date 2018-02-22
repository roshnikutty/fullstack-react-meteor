import React from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';
import EmployeeDetail from './EmployeeDetail';

let EmployeeList = (props) => {
    // console.log(props.employees) will give the 20 employees subscribed below

    let employeeList = props.employees.map((employee, index) =>
        <EmployeeDetail key={index} employee={employee} />); //pass each employee as prop to EmployeeDetail

    return (
        <div>
            <div className='employee-list'>
                {employeeList}
            </div>
        </div>
    );
}

//'react-meteor-data' allows to create container
// Container:  function that allows data to be updated when 
//it is passed on to React whenever a subscription changes - 
//watcher for any changes that happen in the collection to be reflected 
// back to front end

export default withTracker(() => {
    //set up subscription
    Meteor.subscribe('employees');

    //return object that will be sent to EmployeeList as props
    return { employees: Employees.find({}).fetch() }  //finds records and fetches them
})(EmployeeList);