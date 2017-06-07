# SportMonks Soccer API

# installation
```js
npm install sportmonks
```

# usage
```js
var sportmonks = new Sportmonks(__YOUR_API_TOKEN__); 

sportmonks.get(endpoint,params).then( function(resp){
  //resp.data will contain your data
  //resp.meta will contain the meta informations
  console.log(resp);
});
```

## endpoint
you can get the endpoint from the [official sportmonks documentation](https://www.sportmonks.com/sports/soccer#documentation)
omitting the base url and the parameters (that are set with the params field)

```js
sportmonks.get('v2.0/countries').then( function(resp){
    console.log(resp)
});
```

## params
if you need to specify parameters you can set the params field as follow
```js
sportmonks.get('v2.0/countries/{id}', { id: 13, competitions: true }).then( function(resp){
    //id in the params field will replace {id} in the endpoint
    //competitions: true, will add include=competitions in query string
});
```

## pagination
page number can be added using the page param
```js
sportmonks.get('v2.0/fixtures/between/{from}/{to}', { from: '1998-01-01', to: '2017-12-01', page: 2, lineup: true}).then( function(resp) {
   //pagination info can be found in
   console.log(resp.meta.pagination)
});
```



