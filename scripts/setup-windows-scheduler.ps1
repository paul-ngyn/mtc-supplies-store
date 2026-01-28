# Setup Windows Task Scheduler to ping Supabase every 3 days
# Run this script as Administrator

$TaskName = "SupabaseKeepAlive"
$ProjectPath = "c:\Users\pauln\OneDrive\Desktop\MTC-STORE\mtc-supplies-store"
$ScriptPath = "c:\Users\pauln\OneDrive\Desktop\MTC-STORE\mtc-supplies-store\scripts\ping-supabase.js"

# Check if running as administrator
$isAdmin = ([Security.Principal.WindowsPrincipal] [Security.Principal.WindowsIdentity]::GetCurrent()).IsInRole([Security.Principal.WindowsBuiltInRole]::Administrator)

if (-not $isAdmin) {
    Write-Host "Please run this script as Administrator!" -ForegroundColor Red
    Write-Host "Right-click PowerShell and select Run as Administrator" -ForegroundColor Yellow
    exit 1
}

# Remove existing task if it exists
$existingTask = Get-ScheduledTask -TaskName $TaskName -ErrorAction SilentlyContinue
if ($existingTask) {
    Write-Host "Removing existing task..." -ForegroundColor Yellow
    Unregister-ScheduledTask -TaskName $TaskName -Confirm:$false
}

# Create the action - run node with the ping script
$Action = New-ScheduledTaskAction -Execute "node" -Argument $ScriptPath -WorkingDirectory $ProjectPath

# Create trigger - every 3 days at 9 AM
$Trigger = New-ScheduledTaskTrigger -Daily -DaysInterval 3 -At 9am

# Create settings
$Settings = New-ScheduledTaskSettingsSet -AllowStartIfOnBatteries -DontStopIfGoingOnBatteries -StartWhenAvailable -RunOnlyIfNetworkAvailable

# Register the task
Register-ScheduledTask -TaskName $TaskName -Action $Action -Trigger $Trigger -Settings $Settings -Description "Pings Supabase every 3 days to prevent the free tier from pausing due to inactivity"

Write-Host ""
Write-Host "Scheduled task created successfully!" -ForegroundColor Green
Write-Host ""
Write-Host "Task Details:" -ForegroundColor Cyan
Write-Host "  - Name: $TaskName"
Write-Host "  - Runs: Every 3 days at 9:00 AM"
Write-Host "  - Script: $ScriptPath"
Write-Host ""
Write-Host "To verify, open Task Scheduler and look for SupabaseKeepAlive" -ForegroundColor Yellow
