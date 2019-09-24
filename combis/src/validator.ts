import { IValidator, ValidationResult } from 'ts.validator.fluent/dist';
import IPerson from './contracts/IPerson';

const validatePersonRules = (validator: IValidator<IPerson>) : ValidationResult => {
    return validator
        .NotEmpty(x => x.name, "Name cannot be empty")
        .Length(x => x.name, 3, 15, "Name is not valid")
        .NotEmpty(x => x.surname, "Surname cannot be empty")
        .Length(x => x.surname, 3, 15, "Surname is not valid")
        .NotEmpty(x => x.city, "City cannot be empty")
        .Length(x => x.city, 2, 35, "City name is not valid")
        .Contains(x => x.phoneNumber, "+", "Phone number is not valid or is not in valid format")
        .ToResult();
};

export default validatePersonRules;