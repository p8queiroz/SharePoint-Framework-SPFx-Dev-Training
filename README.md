# SharePoint Framework Extensions - SPFx

This application covers one important concept in SharePoint Framework Development known as SharePoint Framework Extensions.

 - SharePoint Application Customizer 
 - SharePoint Command Sets 
 - SharePoint Field Customizer

#  Building the code

Some of the examples required you to have a SharePoint list already available in your environment. I'll let you know when you'll need it. Please clone the repository and navigate to the SPFx extension directory you want to work with.

    git clone the repo

Inside of each repository, you can run by using the terminal, the following code:

    npm i
	npm i -g gulp // in case you don't have gulp install. 
	gulp

Each package produces the following:

-   lib/* - intermediate-stage commonjs build artifacts
-   dist/* - the bundled script, along with other resources
-   deploy/* - all resources which should be uploaded to a CDN.


##  Build options

	-gulp clean - TODO 
	-gulp test - TODO 
	-gulp serve - TODO 
	-gulp bundle - TODO 
	-gulp package-solution - TODO


## UML diagrams

The main diagram of the application :

```mermaid
sequenceDiagram
A ->> B: Hello Bob, how are you?
B-->>J: How about you John?
B--x A: I am good thanks!
B-x J: I am good thanks!
Note right of J: B <br/> test <br/>that the text does<br/>not fit on a row.

Bob-->Alice: ...
A-> J: Yes... J?
```
And this will produce a flow chart:

```mermaid
graph LR
A[Square Rect] -- Link text --> B((Circle))
A --> C(Round Rect)
B --> D{Rhombus}
C --> D
```