# insecure_deserialization_test

A vulnerable Express server is created to demonstrate how the insecure deserialization of Cookies can let undesired executions in the server side.

## Step by step 
1. A cookie is created when the local API is started.
2. The Cookie can be accessed via the Local Storage
3. Modifying the Cookie (After decoding it in base64) grant access to a test JSON
4. Creating an injection via the modification of the Cookie JSON and then enconding it to change it for the actual Cookie show us a case of Insecure Deserealization

## Start the local server
1. Run `npm install` to install all dependencies. 
2. Run `npm start` to start the local API.

