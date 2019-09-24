import React, { useState, useEffect } from 'react';
import IPerson from '../../contracts/IPerson';
import Papa from 'papaparse';
import Table from '../Table/Table';

import 'bootstrap/dist/css/bootstrap.min.css';
import './ReadData.css';

const ReadData = () => {
    const [data, setData] = useState(Array<IPerson>());

    function readSingleFile(e: any) {
        var file = e.target.files[0];
        if (!file) {
          return;
        }
        var reader = new FileReader();
        reader.onload = function(e) {
            let contents = e.target!.result;
            let result = Papa.parse(contents as string, { dynamicTyping: false});
            
            let data: IPerson[] = result.data;
            setData(data);
        };
        reader.readAsText(file);
      }

    return (
        <div className="col-6 offset-3">
            <input 
                type="file"
                accept=".csv"
                id="file-input"
                onChange={e => readSingleFile(e)}
            />
            {
                data != null
                ?
                    <Table data={data}/>
                : ''
            }
        </div>
    );
}

export default ReadData;