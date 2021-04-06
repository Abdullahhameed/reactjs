import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';

function Users() {

    // const [users, setUser] = useState([
    //     { name: 'Abdullah', age: 32, address: 'karachi' },
    //     { name: 'Asif', age: 92 },
    //     { name: 'Zain', age: 392 },
    //     { name: 'Ali', age: 11 },
    // ])
    const [users, setUser] = useState([])

    useEffect(()=>{
        fetch("http://dummy.restapiexample.com/api/v1/employees").then((data)=>{
            // console.warn("data ::", data)
            data.json().then(result => {
                console.warn('result ::', result)
                setUser(result.data)
            })
        })
    },[])

    return (
        <div>
            <h1>Users list is Here</h1>
            {/* {
                users.map((items, i)=>
                    <div key={i}>
                        <span>{items.name}</span>
                        <span></span>
                    </div>
                )
            }
            
            {
                users.length===4?<div>Yes</div>:<div>No</div>
            } */}
            <>
                {/* <Button variant="primary">Primary</Button>{' '}
                <Button variant="secondary">Secondary</Button>{' '}
                <Button variant="success">Success</Button>{' '}
                <Button variant="warning">Warning</Button>{' '}
                <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>{' '}
                <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>{' '}
                <Button variant="link">Link</Button> */}
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Salary</th>
                            <th>Age</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((item, index)=>
                                <tr key={index}>
                                    <td>{item.id}</td>
                                    <td>{item.employee_name}</td>
                                    <td>{item.employee_salary}</td>
                                    <td>{item.employee_age}</td>
                                </tr>
                            )
                        }
                        {/* {
                            users.map((items, index) =>
                                <tr key={index}>
                                    <td>{index}</td>
                                    <td>{items.name}</td>
                                    <td>{items.age}</td>
                                    <td>{items.address}</td>
                                </tr>)
                        } */}
                    </tbody>
                </Table>
            </>
        </div>
    );
}

export default Users