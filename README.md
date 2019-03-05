# JACC _ Shopping list :purse:
This project is live on [heroku](https://jacc-shopping.herokuapp.com/)
#### Created by: @onwordi @ aterna01 @wright1 @whooolia

## :computer: To run the project locally computer 
1. Clone of fork the repo

2. Go into the project folder cd JACC

3. Run npm i

4. Create a file config.env in your root directory and save the database credentials in this format:
```export DB_URL = postgres://_your_db_info_```
5. Run npm start

6. Go to localhost:4040 for the home page

7. Enjoy our amazing shopping list :boom:

- For testing: run npm test (Database testing need additional credentials)

## Overview
Users want to be able to see a history of their shopping lists and remember what they ordered, quantity with an estimate of price.

With this app, we will create an MVP, using just one user Jane Doe, to show how easy it is to add/view to their shopping list.

## :ok_woman: User journey
1. User goes to the website and sees a **Welcome User page**

2. User clicks on ` Add to list ` button

3. User see the **Shopping List page**
  <br>a) User will see a **form** with the following fields: Item, Quantity, Approx Price, to add their data
  <br>b) User will submit form
  
4. User will be taken to **Current list page** to view the whole list
  <br>a) There will be a button ` Add more items ` to add more items
  
5. User will be taken back to Shopping list page to add more

6. All pages will have a link to the Home page

7. Colour Scheme
![color-scheme](https://i.imgur.com/WIXODYM.png)

## :bulb: What we worked on
:heavy_check_mark: Day 1<br>
`Green` : Client side pages<br>
`Purple` : Database<br>
`Red & Bottom purple` : Express with views breakdown<br>
![whiteboarding](https://user-images.githubusercontent.com/36998110/50238746-25874a80-03b8-11e9-8a0f-374860479dc1.png)

:heavy_check_mark: Day 2
- Work on the partials
- Style HTML & CSS 
- Post and Get queries from the database

:heavy_check_mark: Day 3 (Based on raised issues)

## :smile: What we’re proud of 
- Great planning from Tuesday afternoon
- File setup on Tuesday evening before parting
- Clear simple whiteboarding
- Good code rotation
- Making sure each team member understood each step and logic for the project. (Considering some absences)
- Added inital tests before writing logic
- Use router in controller instead of app.get

## :muscle: Stretch goal
- Login/Logout functionality to link multiply people to view all their different shopping lists.
- Delete : to give users the options to delete an entry
- Update : to give users the option to update an incorrect entry

