# LinkedIn-Clone

Quick setup

From the repository root you can install both frontend and backend dependencies with one command:

```powershell
npm run bootstrap
```

Or run the provided PowerShell helper (Windows PowerShell):

```powershell
# standard install (runs the same commands as bootstrap)
.\setup.ps1

# deterministic CI-style install using package-lock.json
.\setup.ps1 -CI
```

Notes

- `node_modules` is ignored and not committed to Git. After cloning run the commands above to recreate dependencies.
- For reproducible CI installs prefer `npm ci` (the `-CI` flag in the script uses that).
