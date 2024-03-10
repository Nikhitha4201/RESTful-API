How to setup and run locally :

Create a new folder.
Open that folder in any code editor (vs code).
Open terminal ( ctrl + ~ ) on code edit.
In new folder create a .env file and create a PORT and variables and assign value
now simply paste this code in .env file .

PORT=2000
DB_CONNECTION_URL=mongodb://localhost:27017/mydb

After in terminal type this commands to install all dependencies and run server.
                  npm i       and  npm start          
Finally, if you get below message in terminal then your server will running successfully.

Routes And It's Functionality

For this use any API using tools like Postman or Curl or Thunder Client. I used Thunder client.
This route is used to create a new collection in database with a req fields.
In thunder client click on new request and select this options
method as post  url as http://localhost:2000/api/v1/courses/
pass this json data as a  body as your required value.
{
 "title": "C Programming Course",
        "content": "Basic informative course",
       "videos": 50,
        "active": true
        }
Finally press send to insert data in mongodb data base and get a inserted    
data as a response.
If user is already in db it will return course is already exist as response. 
  READ ONE : 
        This route is used to read specific course info by passing that course id as a param.
         method  as get:
          url  as:   http://localhost:2000/api/v1/courses/ 65ed65adfddc1b541b8d2885
         After clicking send you will get that specific course  details as response.
  READ ALL : 
            Read all route is used to get all  courses data existing in the mongodb data base .
            method  as get:
             url  as:  http://localhost:2000/api/v1/courses/
           After clicking send you will get  all courses details as response.
  UPDATE : 
            This route is used to update specific course by passing that course id as a param.
             method  as put:
             url  as:  http://localhost:2000/api/v1/update/ 65ed65adfddc1b541b8d2885
             After sending you will get updated course details as response.
  DELETE : 
            This route is used to delete specific course by passing that course id as a param.
             method as delete:
             url  as: http://localhost:2000/api/v1/delete/ 65ed65adfddc1b541b8d2885
						 After clicking send your data will be  deleted successfully as response.
•	After clicking send your data will be  deleted successfully as response.

