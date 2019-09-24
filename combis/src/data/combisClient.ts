import axios from 'axios';
import { config } from '../constants/personConstants';
import IPerson from '../contracts/IPerson';

const SavePerson = async(data: IPerson[] | undefined) => {
    let storage = {
        collection: [] as unknown as IPerson
    };

    let person: Array<IPerson> = new Array<IPerson>();

    data!.map((item) => {
        person.push(item as IPerson);
    })

    let options = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    let collection: Array<any> = new Array<any>();

    person.map((item) => {
        let data = {
            "name": item[0],
            "surname": item[1],
            "zipCode": item[2],
            "city": item[3],
            "phoneNumber": item[4]
        }

        collection.push(data);
    })

    return await axios.post(
        config.savePersonUrl,
        collection,
        options
    ).then(response => {
        return response.status as number
    }).catch(error => {
        return 500;
    })
}

export default SavePerson;