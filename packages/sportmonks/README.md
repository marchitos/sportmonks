# SportMonks Node.js V3 API

## Installation
```js
npm install sportmonks
```

## Import
```js
import { SportMonks } from 'sportmonks';
const sportmonks = new SportMonks({ apiKey: "__YOUR_API_TOKEN__"});
```

## Usage
You can retrieve SportMonks data of the following type:
- core
- odds
- football

```js
const sportmonks = new SportMonks({ apiKey: "__YOUR_API_TOKEN__"});

// retrieve all countries in your subscription
await sportmonks.core.getCountries();

// retrieve all markets in your subscription
await sportmonks.odds.getMarkets();

// retrieve all the leagues in your subscription
await sportmonks.football.getLeagues();
```

The lib comes with types so you will see all the methods available for each type while your are typing.

## Response
All the methods resolve a response width the following type:

```ts
export interface IApiResponse<T> {
    ok: boolean;
    data?: T;
    pagination?: {
        count: number;
        per_page: number;
        current_page: number;
        next_page: string | null;
        has_more: boolean;
    },
    subscription?: {
        meta: any[];
        plans: any[];
        add_ons: any[];
        widgets: any[];
    },
    rate_limit?: {
        resets_in_seconds: number;
        remaining: number;
        requested_entity: string;
    },
    timezone?: string;
    error?: any;
}
```

You can check for `ok` param to see if the response is successful.
If the response will fail, you can see the failure data in the `error` property.
The response is also enriched with all the metadata provided by SportMonks API.

```js
const resp = await sportmonks.football.getLeagues();
if (resp.ok) console.log(resp.data);
```

## Select, Include and Filter
All the lib methods allow an options param to provide selecting, including and filtering capabilities.

## Include entities

## Select fields
You can limit the size of the response by selecting only the field you need from the resourse you are requesting.
In the following example we will retrieve only the `name` and `leg` from the fixtures:

```js
const resp = await sportmonks.football.fixtures({ select: ['name', 'leg'] });
```

You can specify the field you want to retrieve as an array for the select property of the options. 

## Filters
