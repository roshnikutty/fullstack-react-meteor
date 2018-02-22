import React, { Component } from 'react';
import { withTracker } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';
import EmployeeDetail from './EmployeeDetail';

const PER_PAGE_EMPLOYEES = 20;

class EmployeeList extends Component {
    // console.log(props.employees) will give the 20 employees subscribed below
    componentWillMount() {
        this.page = 1;      //page count on load
    }

    handleSubmit() {
        Meteor.subscribe('employees', PER_PAGE_EMPLOYEES * (this.page + 1))
        this.page++;
    }

    //pass each employee as prop to EmployeeDetail
    render() {
        return (
            <div>
                <div className='employee-list'>
                    {this.props.employees.map((employee) =>
                        <EmployeeDetail key={employee._id} employee={employee} />)
                    }
                </div>
                <button className='btn btn-primary'
                    onClick={() => this.handleSubmit()}>
                    Load More...
            </button>
            </div>
        );
    }
}

//'react-meteor-data' allows to create container
// Container:  function that allows data to be updated when 
//it is passed on to React whenever a subscription changes - 
//watcher for any changes that happen in the collection to be reflected 
// back to front end

export default withTracker(() => {
    //set up subscription
    Meteor.subscribe('employees', PER_PAGE_EMPLOYEES);

    //return object that will be sent to EmployeeList as props
    return { employees: Employees.find({}).fetch() }  //finds records and fetches them
})(EmployeeList);