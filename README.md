# Welcome to Flight Search Service
## Project Setup
- clone the project on your local
- Execute `npm install` on the same path as of your root directory of the downloaded project
- Create a `.env` file in the root directory and add the following environment variable
    - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece pf json

```
{
     "development": {
    "username": <your db login name>,
    "password": <your db password>,
    "database": "FlightSearch-DB-dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
 
```
- once you've added you db config as listed above , go to the src folder from your terminal and execute `npx sequalize db:create`
and then execute

`npx sequelize db:migrate`
```

##DB Design
  -Airplane
  -Flight
  -Airport
  -City

  -A flight belongs to an airplane but one airplane can be used in multiple flights
  -A city has many airports but one airport belongs to a city
  -One airport can have many flights, but a flight belongs to one airport



