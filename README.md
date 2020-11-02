# Angular-Template (Angular v10)

This project show a possible way to structre an angular app by clean architecture principles. Also it can be used as a template for new angular applications.

In addition this configuration uses [Jest](https://jestjs.io/) instead of jasmine for tests. Wich enables features like parallel execution of tests, generation coverage reports and removing a headless browser as dependency. 

Also this project includes 
* an example [Dockerfile](Dockerfile) for building and running an angular application in docker on an nginx server (including basic [nginx configuration](nginx/server.conf)).
* an example [Dockerfile](Dockerfile.sonar) for running tests and sending coverage reports to a SonarQube
* an example [Jenkinsfile](Jenkinsfile) including steps for SonarQube, buil the docker image and deploy it to a remote registry


## Possible Component-Frameworks:
* [Angular Material](https://material.angular.io/)
  * used in 
    * Wessling Portal 
    * OVsoftware HotDeskBooking
* [NG-Zorro](https://ng.ant.design/docs/introduce/en)
  * used in
    * Egeplast Webkalkulator
    * OVSoftware KVN-Prototyp
* [PrimeNG](https://www.primefaces.org/primeng/#/)