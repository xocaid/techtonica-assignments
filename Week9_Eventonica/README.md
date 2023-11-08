# Eventonica

Eventonica is a user-friendly web application designed to streamline calendar event management, with a focus on enabling collaboration among multiple users. The project's primary goal is to provide a robust and intuitive platform for individuals and teams to effortlessly create, schedule, and coordinate events, ultimately simplifying event organization and enhancing user collaboration. Whether for personal or professional use, Eventonica empowers users to efficiently manage their event schedules and make the most of their time.

## Technologies
- <b>Stack:</b> React, JavaScript/Node.js, Express, SQL, and Postgres
- <b> Backend:</b>  Node.js and Express
- <b> Relational Database(s):</b>  SQL database (Postgres) to store and organize event-related data

## Project Requirements
 - Create(add) & delete events and users with customizable attributes using HTTP request methods: POST and DELETE. 
 - Manage data with React state and develop forms for user and event creation.
 - Allow users to search for events by using GET requests to retreieve filtered event data from the server.
 - Store event and user data in a SQL database.
 - Allow users to (un)favorite events using a PUT request. 

## Installation 
### Cloning Repository
To get started with the project, follow these steps:
<br/>

1. Clone the repository to your local machine using the following command:
   ```
   git clone git@github.com:xocaid/techtonica-assignments.git
   ```
2. Navigate to the project directory:
   ```
   cd Week9_Eventonica
   ```
3. Run command to download dependencies for client & server folders:
   ```
   npm install
   ```
4. Open app in the development mode, run command for client & server:
   ```
   npm start
   ```
5. Open [http://localhost:3000](http://localhost:3000) to view in development mode in your browser.

6. Open [http://localhost:4000](http://localhost:4000) to view the backend in your browser. 

### Setting Up Database
To get started with the databse, follow these steps:

1. Navigate to the `db.sql` file on the project directory: 
   ```
   server/db/db.sql
   ```
2. Using Postico, or your preferred GUI and/or Terminal, create a new database named `eventonica`.
3. Under the `Queries` tab --> `SQL Query` paste `db.sql` file contents 
4. Select ALL and push `Execute Selection`.
5. The tables and data will appear under the `Tables` tab. If they do not, hit the refresh button.

## Future Development 
