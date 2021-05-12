# Oberton Chrome FreeTon Extension
## Manage and use FreeTon crypto wallets in Chrome

Oberton Chrome FreeTon Extension is in-browser blockchain crypto wallet of FreeTon blockchain network.

Get started


```
npm install // to install project dependencies
npm run build // to make production build to the dist folder that can be loaded as unpacked extension to Chrome

// or
npm run serve // to run the app on localhost:1235 for better debugging experience
```

## Features

- Create Wallet (Sufr and Multisig)
- Send token
- View transactions and messages
- Confirm mutisig trsactions

## Credentianls

Oberton Chrome FreeTon Extension stores wallet credentians locally, encrypted by sha-256 sum of entered digit pin code and does not send any credentials to any external endpoint.

Each enter to the app, user provides pin code created earlier to decrypt the wallets storage to keep interacting with added wallets.
