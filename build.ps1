$ErrorActionPreference = 'Stop'
Set-Location -LiteralPath $PSScriptRoot
$runtimeNode = Join-Path $env:USERPROFILE '.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node.exe'
$nodeCommand = Get-Command node -ErrorAction SilentlyContinue
$nodePath = if ($nodeCommand) { $nodeCommand.Source } elseif (Test-Path -LiteralPath $runtimeNode) { $runtimeNode } else { throw 'Node.js is missing. Install Node.js LTS from https://nodejs.org, then reopen PowerShell.' }
& $nodePath 'node_modules/typescript/bin/tsc' --noEmit
if ($LASTEXITCODE -ne 0) { throw 'TypeScript validation failed.' }
& $nodePath 'node_modules/vite/bin/vite.js' build
if ($LASTEXITCODE -ne 0) { throw 'Vite build failed.' }
