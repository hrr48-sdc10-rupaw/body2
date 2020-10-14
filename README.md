This file is for the body section of the SDC. It does not include the hero-section or the reviews section.

If first time runing this program please follw the instructions below to start application properly.

In you terminal in the root folder run the following scripts:

- Run script "npm install" to install dependencies

- Run script "npm run seed" to seed the database

- Run script "npm start" to start server

In seperate terminal window, cd into client folder and run the following scripts:

- Run script "npm install" to install dependencies

- Run script "npm run build" to build webpack bundle

Go to http://localhost:3000 in your browser to see the app.

Access different products but adding query params like so:

- http://localhost:3000/?id=85


#CRUD Operations:


- Create | POST: '/moist-air/'
  - Games can be created and added to the database. Game information that is included in the body will be added to the new document.

- Read | GET: '/moist-air/'
  - Get all games in the database.

- Read | GET: '/moist-air/game'
  - Uses query parameters to find games based on 'id'.
    - 'id' is not the object _id, but an id given in the original data generation script

- Update | PUT: '/moist-air/game'
  - Updates one game
  - Uses query parameters to find games based on 'id'.
    - 'id' is not the object _id, but an id given in the original data generation script
  - Currently updates the price of the game. Can be expanded to many other peramteres for update
  
- Delete | DELETE: '/moist-air/game'
  - Deletes one game
  - Finds game to be deleted by referencing query perameters
  - Looks for the id of the game and then deletes that one document using deleteOne
    - 'id' is not the object _id, but an id given in the original data generation script
