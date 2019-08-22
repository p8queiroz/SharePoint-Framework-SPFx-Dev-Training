# SharePoint Framework Extensions - SPFx Extensions

  

This Training covers some important concepts in SharePoint Framework Development. In this series you'll learn how to create, test and deploy your SharePoint application. Keep in mind that all code examples are using TypeScript based using React js. If you're not familiar with React, please [take some time to learn more about it](https://reactjs.org/).  Here are some topics you'll be able to work with after taking the course:

| SPFx content | Description |
|--|--|
|SharePoint Framework (SPFx) - WebParts  | how to create and deploy webparts in a Office 365 environment |
|SharePoint Framework (SPFx) - Extensions | SharePoint Application Customizer / SharePoint Command Sets /              SharePoint Field Customizer 
 | Powershell 	| How to deploy your application using powershell|
 | External APIs| How to connect to external API using a SharePoint environment|
  
## List deployment

The examples along the trainning solution expects the site to contain a  specific lists  list. Here are 2 options to ensure this list exists in your site:

### Option 1: Use the included PnP provisioning template

A PnP Remote Provisioning template has been provided ([XXX.xml]) along with a PowerShell script to apply the template to your site ([xxx.ps1]. This is by far the easiest way to get the list on a site but requires some minor setup.

#### Prerequisites

You'll need the  [SharePoint PnP PowerShell Cmdlets for SharePoint Online](https://github.com/SharePoint/PnP-PowerShell). It's a very quick install and if you don't have it already, go get it! You'll end up using it for far more than just this sample.

#### Running the PowerShell script

Using a PowerShell console (you can even use the powershell terminal included in Visual Studio Code), navigate to the assets folder in this sample. Run the script like this:

.\powershellFile.ps1 https://contoso.sharepoint.com/sites/yoursite list.xml

# Building the code

  

Some of the examples required you to have a SharePoint list already available in your environment. I'll let you know when you'll need it. Please clone the repository and navigate to the SPFx extension directory you want to work with.

  

git clone the repo

  

Inside of each repository, you can run by using the terminal, the following code:

  

npm i

npm i -g gulp // in case you don't have gulp install.

gulp

  

Each package produces the following:

  

- lib/* - intermediate-stage commonjs build artifacts

- dist/* - the bundled script, along with other resources

- deploy/* - all resources which should be uploaded to a CDN.

  
  

## Build options

  

-gulp clean - TODO

-gulp test - TODO

-gulp serve - TODO

-gulp bundle - TODO

-gulp package-solution - TODO

  
  
