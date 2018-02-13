# Angular5 Office365 Adal Example

Example of using [Adal.js](https://github.com/AzureAD/azure-activedirectory-library-for-js) in Angular5. App show how to:
- authorize user
- acquire token for Microsoft Graph Api
- get user messages
- silence renew token

Example use only standard [Adal.js](https://github.com/AzureAD/azure-activedirectory-library-for-js) (without wrappers) and typings from [@types/adal-angular](https://www.npmjs.com/package/@types/adal-angular).


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.6.

## To make it working

- setup Replay URLs in Azure portal for your app

![Replay URLs](https://i.imgur.com/qcym6os.png)

- set «oauth2AllowImplicitFlow»: true in your app manifest

![Replay URLs](https://hsto.org/getpro/habr/post_images/a8c/006/3e7/a8c0063e715f028d87c699b509c077a1.png)

- give permissions to Microsoft Graph API

![Replay URLs](https://habrastorage.org/getpro/habr/post_images/577/90d/18d/57790d18d896fc12f972e381e7cee382.png)

- set your tenant, and clientId in environments/environment.ts
