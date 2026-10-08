$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath $PSScriptRoot
$runtimeNode = Join-Path $env:USERPROFILE '.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node.exe'
$nodeCommand = Get-Command node -ErrorAction SilentlyContinue
$nodePath = if ($nodeCommand) { $nodeCommand.Source } elseif (Test-Path -LiteralPath $runtimeNode) { $runtimeNode } else { throw 'Node.js is missing. Install Node.js LTS from https://nodejs.org, then reopen PowerShell.' }
if (!(Test-Path -LiteralPath 'node_modules/vite/bin/vite.js')) { throw 'Dependencies are missing. Open this project folder and run npm install after installing Node.js LTS.' }
& $nodePath 'node_modules/vite/bin/vite.js' --host 127.0.0.1
