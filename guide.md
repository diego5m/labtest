# project creation

```bash
ng new <project name>
```

configurations:

if question to share with google: N

CSS  [ https://developer.mozilla.org/docs/Web/CSS ]

Do you want to enable Server-Side Rendering (SSR) and Static Site Generation (SSG/Prerendering)?, Seleccione: N

# Add Angular Material

move into project:

```bash
cd <project name>
```

```bash
ng add @angular/material
```

Would you like to proceed?, digite: Y

Azure/Blue   [Preview: https://material.angular.io?theme=azure-blue]

Set up global Angular Material typography styles?, digite: Y

Include and enable animations

# For internationalization:

```bash
npm install @ngx-translate/core @ngx-translate/http-loader --save
```

# To not have problems late: only in MAC

```bash
cd..

sudo chown -R alumnos ./<project-name>
```

# Proyect Deployment

first folders:

## to internationalization config:

in the folder `public` in the root of project, create the next folders:

- public
    - assets
        - i18n


in the folder `i18n` create the nex files

- en.json
- es.json

content of the files:

en.json

```json

{
  "filter": {
    "label": "Filter",
    "placeholder": "Enter text to filter"
  },
  "product": {
    "id": "No.",
    "title": "Title",
    "price": "Price",
    "description": "Description",
    "category": "Category",
    "image": "Image",
    "rate": "Rate",
    "count": "Count"
  },
  "footer": {
    "rights": "Copyright © 2024 {{ api }}, All rights reserved",
    "intro": "Developed ",
    "author": "by {{ team }} Team"
  }
}

```

***

es.json

```json
{
  "filter": {
    "label": "Filtrar",
    "placeholder": "Digite texto a filtrar"
  },
  "product": {
    "id": "Núm.",
    "title": "Título",
    "price": "Precio",
    "description": "Descripción",
    "category": "Categoria",
    "image": "Imagen",
    "rate": "calificación",
    "count": "Cantidad"
  },
  "footer": {
    "rights": "Derechos de autor © 2024 {{ api }}, Todos los derechos reservados",
    "intro": "Desarrollado ",
    "author": "por el Equipo {{ team }}"
  }
}
```

# appConfig Configuration

details to add provide HttpClient to project configuration

add the next imports

folder `/src/app`

file `app.config.ts`

```javascript

//Project imports
import { HttpClient, provideHttpClient } from "@angular/common/http";
import { importProvidersFrom } from '@angular/core';
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

```

add this function `HttpLoaderFactory` after imports:

```javascript

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

```

next add this methods to array `providers` of constant `appConfig`:

```javascript

provideHttpClient(),
importProvidersFrom(
  TranslateModule.forRoot({
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient]
    }
  })
)

```

## Result

```typescript

```

# Project structure

Follow the next folder structure in

`/src/app`

- src
    - app
        - products
            - components
            - model
            - services
        - public
            - components


## for create the components

open IDE terminal

follow the next comands one at time:

structure to create components:

```bash

ng generate component <context>/components/<name-of-component> --skip-tests=true

```

public components:

```bash

ng generate component public/components/header-content --skip-tests=true
ng generate component public/components/footer-content --skip-tests=true
ng generate component public/components/language-switcher --skip-tests=true

```

products components:

```bash

ng generate component products/components/product-list --skip-tests=true

```

# modifi AppComponent

add the next imports to class `AppComponent`

file `app.components.ts`

folder `/src/app`

```typescript

//Project imports
import { HeaderContentComponent } from './public/components/header-content/header-content.component';
import { FooterContentComponent } from './public/components/footer-content/footer-content.component';
import { ProductListComponent } from "./products/components/product-list/product-list.component";
import { TranslateService } from "@ngx-translate/core";

```

add the next classes in array

`imports` in `@Component` in class `AppComponent`

in file `app.component.ts`

, HeaderContentComponent, FooterContentComponent, ProductListComponent


add the next constructor to class `AppComponent`

```javascript

constructor(translate: TranslateService) {
  translate.setDefaultLang('en');
  translate.use('en');
}

```

replace content of file `app.component.html`

```html

<app-header-content></app-header-content>
<app-product-list></app-product-list>
<app-footer-content></app-footer-content>

```



## result

```
```


# LanguageSwitcherComponent develop

add the next imports to class `LanguageSwitcherComponent`

file `language-switcer.component.ts`

folder `/src/app/public/component/language-switcer`

```javascript

//Project imports
import { TranslateService } from "@ngx-translate/core";
import { MatButtonToggleModule } from '@angular/material/button-toggle';

```

add the next to array `imports` in `@Component`

`MatButtonToggleModule`

replace content of class LanguageSwitcherComponent

```typescript

currentLang: string = 'en';
languages: string[] = ['en', 'es'];

constructor(private translate: TranslateService) {
  this.currentLang = translate.currentLang;
}

useLanguage(language: string) : void {
  this.translate.use(language);
}

```

replace content of file `language-switcher.component.html`

```html

<mat-button-toggle-group [value]="currentLang" appearance="standard" aria-label="Preferred Language" name="language">
  @for (language of languages; track language) {
    <mat-button-toggle (click)="useLanguage(language)"
                       [aria-label]="language"
                       [value]="language">{{ language.toUpperCase() }}
    </mat-button-toggle>
  }
</mat-button-toggle-group>

```

# HeaderContentComponent

add imports

file `header-content.componet.ts`

folder `/src/app/public/components/header-content`

```typescript

//Project imports
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LanguageSwitcherComponent } from "../language-switcher/language-switcher.component";

```

in `@Component` in `imports` add

`MatToolbarModule, MatButtonModule, MatIconModule, LanguageSwitcherComponent`

replace content of 

file `header-content.component.html`

```html

<mat-toolbar color="primary">
  <button mat-icon-button class="example-icon" aria-label="Example icon-button with menu icon">
    <mat-icon>menu</mat-icon>
  </button>
  <span>Fake Store</span>
  <span class="example-spacer"></span>
  <button mat-icon-button class="example-icon favorite-icon" aria-label="Example icon-button with heart icon">
    <mat-icon>favorite</mat-icon>
  </button>
  <button mat-icon-button class="example-icon" aria-label="Example icon-button with share icon">
    <mat-icon>share</mat-icon>
  </button>
  <span>
    <app-language-switcher/>
  </span>
</mat-toolbar>

```

replace

file `heacer-content.component.css`

```css

.example-spacer {
  flex: 1 1 auto;
}

```

# FooterContentComponent

add the next imports

file `footer-content.component.ts`

folder `/src/app/public/components/footer-content`

```typescript

//Porject imports
import { TranslateModule } from '@ngx-translate/core';

```

add the next

in `@Component` in `imports`

`TranslateModule`


repalce the content

file `footer-content.component.html`

```html

<footer style="background-color: #333; color: #fff; text-align: center; padding: 10px;">
  <p>{{ 'footer.rights' | translate: {api: 'Fake Store API'} }}</p>
  <p>
    {{ 'footer.intro' | translate }}
    {{ 'footer.author' | translate: {team: 'DAOS'} }}
  </p>
</footer>

```

# cretion of product and rating entitys

follow the next comands:

for product:

```bash

ng generate class products/model/product --type=entity --skip-tests=true

```

for sub list rating:

```bash

ng generate class products/model/rating --type=entity --skip-tests=true

```

# rating class

file `rating.entity.ts`

folder `/src/app/products/model`

```typescript

rate: number;
count: number;

constructor() {
  this.rate = 0;
  this.count = 0;
}

```

# product class

add this import

file `product.entity.ts`

folder `/src/app/products/model`

```typescript
import { Rating } from './rating.entity';
```

add the next

file `product.entity.ts`

folder `/src/app/products/model`


```typescript

id: number;
title: string;
price: number;
description: string;
category: string;
image: string;
rating: Rating;

constructor() {
  this.id = 0;
  this.title = '';
  this.price = 0;
  this.description = '';
  this.category = '';
  this.image = '';
  this.rating = new Rating();
}

```

# create service fakestoreapi

follow the next command

```bash

ng generate service products/services/fakestore-api --skip-tests=true

```

imports to class FakestoreApiService

file `fakestore-api.service.ts`

folder `/src/app/products/services`

```typescript

//Project imports
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable } from 'rxjs';

```



replace content of class `FakestoreApiService`

file `fakestore-api.service.ts`

```typescript

private baseUrl: string = 'https://fakestoreapi.com';
private http: HttpClient = inject(HttpClient);

getProducts(): Observable<any> {
  return this.http.get(`${this.baseUrl}/products`);
}

```


# ProductListComponent

add the next imports to class `ProductListComponent`

file `product-list.component.ts`

folder `/src/app/products/components/product-list`


```typescript

//Project imports
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Product } from "../../model/product.entity";
import { FakestoreApiService } from '../../services/fakestore-api.service';
import { TranslateModule } from "@ngx-translate/core";

```

add the next into

`@Components` in `imports`

`MatFormFieldModule, MatInputModule, MatTableModule, MatCardModule, TranslateModule`


Replace the content of class `ProductListComponent`


file `product-list.component.ts`

```typescript

products: Array<Product> = [];
displayedColumns: string[] = ['id', 'title', 'price', 'description', 'category', 'image'];
dataSource: any;

constructor(private fakestoreApiService: FakestoreApiService) {
}

applyFilter(event: Event) {
  const filterValue = (event.target as HTMLInputElement).value;
  this.dataSource.filter = filterValue.trim().toLowerCase();
}

ngOnInit(): void {
  this.fakestoreApiService.getProducts().subscribe((data: any) => {
    this.products = data;
    this.dataSource = new MatTableDataSource(this.products);
  });
}

```


replace the content

file `product-list.component.html`

```html

<mat-card>
  <mat-card-content>

    <mat-form-field>
      <mat-label>{{ 'filter.label' | translate }}</mat-label>
      <input matInput (keyup)="applyFilter($event)" placeholder="{{ 'filter.placeholder' | translate }}" #input>
    </mat-form-field>

    <table mat-table [dataSource]="dataSource" class="mat-elevation-z8">

      <ng-container matColumnDef="id">
        <th mat-header-cell *matHeaderCellDef> {{ 'product.id' | translate }}</th>
        <td mat-cell *matCellDef="let element"> {{element.id}} </td>
      </ng-container>

      <ng-container matColumnDef="title">
        <th mat-header-cell *matHeaderCellDef> {{ 'product.title' | translate }} </th>
        <td mat-cell *matCellDef="let element"> {{element.title}} </td>
      </ng-container>

      <ng-container matColumnDef="price">
        <th mat-header-cell *matHeaderCellDef> {{ 'product.price' | translate }} </th>
        <td mat-cell *matCellDef="let element"> {{element.price}} </td>
      </ng-container>

      <ng-container matColumnDef="description">
        <th mat-header-cell *matHeaderCellDef> {{ 'product.description' | translate }} </th>
        <td mat-cell *matCellDef="let element"> {{element.description}} </td>
      </ng-container>

      <ng-container matColumnDef="category">
        <th mat-header-cell *matHeaderCellDef> {{ 'product.category' | translate }} </th>
        <td mat-cell *matCellDef="let element"> {{element.category}} </td>
      </ng-container>

      <ng-container matColumnDef="image">
        <th mat-header-cell *matHeaderCellDef> {{ 'product.image' | translate }} </th>
        <td mat-cell *matCellDef="let element"><img  width="50px" height="50px" src="{{element.image}}">   </td>
      </ng-container>

      <ng-container matColumnDef="rate">
        <th mat-header-cell *matHeaderCellDef> {{ 'product.rate' | translate }} </th>
        <td mat-cell *matCellDef="let element"> {{element.rating.rate}} </td>
      </ng-container>

      <ng-container matColumnDef="count">
        <th mat-header-cell *matHeaderCellDef> {{ 'product.count' | translate }} </th>
        <td mat-cell *matCellDef="let element"> {{element.rating.count}} </td>
      </ng-container>

      <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
      <tr mat-row *matRowDef="let row; columns: displayedColumns;"></tr>

      <!-- Row shown when there is no matching data. -->
      <tr class="mat-row" *matNoDataRow>
        <td class="mat-cell" colspan="4">No data matching the filter "{{input.value}}"</td>
      </tr>
    </table>

  </mat-card-content>
</mat-card>

```

replace the content

file `product-list.component.css`

```css

table {
  width: 100%;
}

.mat-mdc-form-field {
  font-size: 14px;
  width: 100%;
}

```
