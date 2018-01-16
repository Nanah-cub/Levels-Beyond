# Levels Beyond Assignment

## Running Projects 
---
The runable artifacts were put the deployables folder in the base directory.

### NoteTaker
In order to run the NoteTaker Project follow the below steps.
1. Install Java 8 on your local machine
2. Copy/Clone project to local machine 
3. In the command terminal please navigate to this folder using `cd /Users/JoshBuchanan/Desktop/Git/Levels-Beyond/Deployables/Note`
4. In the command terminal please excute the following command
  `java -jar NoteTaker-1.0-SNAPSHOT.jar`
  
### GitHub-Issues
In order to run the GitHub Issues project pleace follow the below instructions
1. Copy/Clone Project to local machine
2. Navigate to `INSTALL_LOCATION/Deployables/GitHub/dist` folder
3. Right click `index.html` and click `open with` and click your browser of choice. I expect it will work for just about any browser including Internet Explorer, but I have only tested using Chrome and Safari

## Design Descisions 
---
### NoteTaker
#### Frameworks/Databases
1. Spring Boot: I choose Spring Boot, because it provided a lot of the the functionality I wanted out of the box. I like using this framework a lot, because it has a lot of testing support out of the box, and encourages object oriented software development practices with Dependency Injection. 
2. Embedded Database: I choose to use an embedded database purely because it was the easiest to get up in running. It also wouldn't change my design overly much. 
3. Spring-Data-JPA: Spring Data JPA provided all the functionality I desired to complete this project. One possible issue with using it is the save method. When save is a called it inserts an object if the primary key doesn't exists and updates if it exists. This might not be the desired functionality.

## Reservations/TODO
---

### NoteTaker
1. The Note-Taking project was extremely simple for a backend project. If it grew more complicated these are the things I would consider.

* Use Spring-Config to handle configuration files. It currently is pure Java configuration, but I would probably use property files for database configurations and possible logging if it grew.
* Set up a logging configuration file
* Create builds for different enverionemnts
* Add more tests for controllers and services. The project could use some more specific tests. 
* Determine what is considered a failure, and how to handle a failure. In my project I considered a failure to occur if an id was provided in the git request, that does not exist in the database. 
* Change the way current tests are handled. Creating a test class that executes tests by name is not probably the best way to handle tests

### GitHub Issues


