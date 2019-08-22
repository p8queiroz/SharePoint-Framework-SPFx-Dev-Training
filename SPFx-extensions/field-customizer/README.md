## app

This is where you include your WebPart documentation.

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

gulp clean - TODO
gulp test - TODO
gulp serve - TODO
gulp bundle - TODO
gulp package-solution - TODO


List deployment
This solution expects the site to contain a Notifications list. Here are 2 options to ensure this list exists:

Option 1: Use the included PnP provisioning template
A PnP Remote Provisioning template has been provided (NotificationList.xml) along with a PowerShell script to apply the template to your site (ApplyTemplate.ps1). This is by far the easiest way to get the list on a site but requires some minor setup.

You can also use this template as part of a Site Design.

Prerequisites
You'll need the SharePoint PnP PowerShell Cmdlets for SharePoint Online. It's a very quick install and if you don't have it already, go get it! You'll end up using it for far more than just this sample.

Running the PowerShell script
Using a PowerShell console (you can even use the powershell terminal included in Visual Studio Code), navigate to the assets folder in this sample. Run the script like this:

.\ApplyTemplate.ps1 https://yourtenant.sharepoint.com/sites/yoursite NotificationList.xml