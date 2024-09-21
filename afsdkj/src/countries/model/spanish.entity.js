import { CountryName } from './countryName.entity.js';
import { Currency } from './currency.entity.js';
import { Flag } from './flag.entity.js';
import { CoatOfArms } from './CoatOfArms.entity.js';

export class Spanish {
    constructor(
        name = new CountryName(),
        officialName = '',
        currency = new Currency(),
        capital = '',
        region = '',
        subregion = '',
        languages = '',
        area = 0,
        population = 0,
        flag = new Flag(),
        coatOfArms = new CoatOfArms()
    ) {
        this.name = name;
        this.officialName = officialName;
        this.currency = currency;
        this.capital = capital;
        this.region = region;
        this.subregion = subregion;
        this.languages = languages;
        this.area = area;
        this.population = population;
        this.flag = flag;
        this.coatOfArms = coatOfArms;
    }
}