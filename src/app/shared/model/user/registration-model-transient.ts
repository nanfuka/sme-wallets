import { Registration } from './Registration';

/**
 * @author Daniel Comboni
 * 
 * a model / entity class RegsitrationTransient.
 */

export class RegistrationTransient extends Registration {

    timestampStr: string;

    constructor($id: number, $userId: number, $industryType: string, $name: string, $email: string, $address: string, $contactNumber: string, $city: string, $state: string, $country: string, $zip: string, $corAddress: string, $corCity: string, $corState: string, $corCountry: string, $corZipCode: string, $companyName: string, $crName: string, $companyEmail: string, $companyAddress: string, $timestamp: string, $timestampStr: string) {
        super($id, $userId, $industryType, $name, $email, $address, $contactNumber, $city, $state, $country, $zip, $corAddress, $corCity, $corState, $corCountry, $corZipCode, $companyName, $crName, $companyEmail, $companyAddress, $timestamp);
        this.timestampStr = $timestampStr;
    }
}

