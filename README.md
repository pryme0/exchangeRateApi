# exchangeRateApi

 ## Api for getting latest exchange rates 

 How to Run the application

 ** clone the repository **  


#### Run **npm install** to install dependencies

#### Run **npm start** to start nodejs server;

> you can get the latest exchange rates for a base currency by sending a get request to the applications api/rates endpoint.

> The base currency should be sent as a query parameter with name base.

> To get exchange rates of a base currency compared with other specific currencies ,pass the base currency and the other currencies you want to compare it against as query parameters i.e
> 
>> api/rates?base=USD&currency=INR,CAD,ISK,PHP,AUD  or

>> api/rates?base=USD&currency=INR&currency=CAD&currency=ISK&currency=PHP&currency=AUD

>example response for single currency  


>{  
    "base": "USD",  
    "date": "2021-01-28",  
    "rates": {  
        "INR": 73.0468943843  
    }  
}  

> example response for multiple currency  

>{  
    "base": "USD",  
    "date": "2021-01-28",  
    "rates": {  
        "THB": 30.0347365809,  
        "NZD": 1.4066661153,  
        "PLN": 3.7607311223,  
        "INR": 73.0468943843  
    }  
}  
>Base Route <https://curencyrateapi.herokuapp.com/api>
>Rates Route <https://curencyrateapi.herokuapp.com/api/rates?base=USD&currency=INR&currency=CAD&currency=ISK&currency=PHP&currency=AUD>



