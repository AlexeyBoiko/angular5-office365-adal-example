# Angular5 Office365 Adal Example

Example of using [Adal.js](https://github.com/AzureAD/azure-activedirectory-library-for-js) in Angular5. App show how to:
- authorize user
- acquire token for Microsoft Graph Api
- get user messages
- silence renew token

Example use only standard [Adal.js](https://github.com/AzureAD/azure-activedirectory-library-for-js) (without wrappers) and typings from [@types/adal-angular](https://www.npmjs.com/package/@types/adal-angular).


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.6.

## To make it working

- set your tenant, and clientId in environments/environment.ts
- setup Replay URLs in Azure portal

![Replay URLs](https://i.imgur.com/qcym6os.png)
