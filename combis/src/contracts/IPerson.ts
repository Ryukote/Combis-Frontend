interface IPerson extends Array<IPerson> {
    name: string;
    surname: string;
    zipCode: number;
    city: string;
    phoneNumber: string;
}

export default IPerson;