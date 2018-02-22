import React from 'react';

let EmployeeDetail = (props) => {

    const { name, email, phone, avatar } = props.employee;

    return (<div className="thumbnail">
        <img src={avatar} />
        <div className="caption">
            <ul className="list-group">
                <li className="list-group-name">
                    Email: {email}
                </li>
                <li className="list-group-name">
                    Phone: {phone}
                </li>
            </ul>
        </div>
    </div>)
};

export default EmployeeDetail;