<#
setup.ps1 - convenience script to install project dependencies from repo root.
Usage:
  .\setup.ps1        # runs bootstrap script (installs frontend & backend)
  .\setup.ps1 -CI    # runs deterministic installs (npm ci) for both packages
#>
param(
    [switch]$CI
)

Write-Host "Running repository setup..." -ForegroundColor Cyan

if ($CI) {
    Write-Host "Running deterministic install: npm ci --prefix backend && npm ci --prefix frontend" -ForegroundColor Yellow
    npm ci --prefix backend
    if ($LASTEXITCODE -ne 0) { throw "npm ci failed in backend (exit $LASTEXITCODE)" }
    npm ci --prefix frontend
    if ($LASTEXITCODE -ne 0) { throw "npm ci failed in frontend (exit $LASTEXITCODE)" }
} else {
    Write-Host "Running bootstrap (npm install --prefix backend && npm install --prefix frontend)" -ForegroundColor Yellow
    npm run bootstrap
    if ($LASTEXITCODE -ne 0) { throw "bootstrap script failed (exit $LASTEXITCODE)" }
}

Write-Host "Setup complete." -ForegroundColor Green
