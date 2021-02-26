# kaholo-plugin-sonarqube

This Plugin is integrated with sonarqube restful api

## Prerequisits:
1) A working Version of Java version 11
2) A running sonarqube server, and a created user for that server
   [I Reccomend reading this documentation] (https://docs.sonarqube.org/latest/setup/get-started-2-minutes/)


## Each of the below methods requires a settings object with the following keys:
1) Username - the username for your sonarqube server user
2) Password - the password for your sonarqube server user
3) sonarqube Server Url - base sonarqube server url

## Create Project
Creates a new Project for scanning with in your sonarqube server

### Parameters:
1) Project Name - Displayed Name of the project
2) Project Key - Key of the project

## Get Active Users
Returns a list of active users in your sonarqube server

