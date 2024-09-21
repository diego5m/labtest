import axios from "axios";
const http = axios.create({
    baseURL: 'https://restcountries.com/v3.1',
});
export class CountryApiService {
    getCountry()   {
        return http.get('/lang/spanish');
    }
}