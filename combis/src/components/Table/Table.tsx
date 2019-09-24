import * as Strap from 'reactstrap';
import React, { Fragment, useState, useEffect, FunctionComponent } from 'react';
import TablePropsType from '../../@types/TablePropsType';
import SavePerson from '../../data/combisClient';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Table.css';

const Table = (data: TablePropsType) => {
    const [status, setStatus] = useState(0);

    useEffect(() => {
        if(status === 200) 
            alert("Data is saved successfully.")
        else if(status === 500) 
            alert("There is something wrong. Don't try to save the same data")
        else if(status === 400)
            alert("You are trying to send non valid data")
    }, [status]);

    return (
        <div className="tableMargins">
            <Strap.Table striped>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Zip code</th>
                    <th>City</th>
                    <th>Phone number</th>
                </tr>

                {
                    data.data !== undefined
                    ?
                        data.data.map((item: Array<any>) => {
                            let zipCode: number = item[2];
                            return (
                                <tbody>
                                    <tr>
                                        <td>{item[0]}</td>
                                        <td>{item[1]}</td>
                                        <td className={isNaN(zipCode)
                                            ? "nonValidField" : ""}>{item[2]}</td>
                                        <td>{item[3]}</td>
                                        <td>{item[4]}</td>
                                    </tr>
                                </tbody>
                            );
                        })
                    : ''
                }
            </Strap.Table>

            <Strap.Button
                className="text-center col-2 offset-5"
                onClick={async() => setStatus(await SavePerson(data.data))}
            >
                Save data
            </Strap.Button>
        </div>
    );
}

export default Table;