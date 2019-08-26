

[CmdletBinding()]
param
(
    [Parameter(Mandatory = $true, HelpMessage="Enter the URL of the target site, e.g. 'https://intranet.mydomain.com/sites/targetSite'")]
    [String]
    $TargetSiteUrl,

    [Parameter(Mandatory = $true, HelpMessage="Enter the filepath for the template, e.q. Folder\File.xml or Folder\File.pnp")]
    [String]
    $FilePath
)

Write-Host -ForegroundColor Yellow "Target Site URL: $targetSiteUrl"
Write-Host -ForegroundColor Yellow "Applying Template: $FilePath"

try
{
    Connect-PnPOnline -Url $TargetSiteUrl -ErrorAction Stop -UseWebLogin
    
    Apply-PnPProvisioningTemplate -Path $FilePath

    Disconnect-PnPOnline

}
catch
{
    Write-Host -ForegroundColor Red "Exception occurred!" 
    Write-Host -ForegroundColor Red "Exception Type: $($_.Exception.GetType().FullName)"
    Write-Host -ForegroundColor Red "Exception Message: $($_.Exception.Message)"
}