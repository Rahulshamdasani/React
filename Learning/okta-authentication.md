

## S1 : Getting your credentials
- go to https://manage.auth0.com/ and create your account
- application -> applications -> create a new application
- select the one which supports react
- ONce the app is created, skip the quick start
- go to settings 
  - in callback url 
    - add the following url: http://localhost:3000/api/auth/callback
  - in the allowed logout urls
    - add the following url: http://localhost:3000
- save and go to application

## S2 Setting up the application
- For reference go to https://github.com/auth0/nextjs-auth0
- go to the application and install dependecies
  - <code> npm install @auth0/nextjs-auth0 </code>
  - double check that depencies are in the package.json
- Create .env.local file
  - We need 
    - AUTH0_SECRET
    - AUTH0_BASE_URL
    - AUTH0_ISSUER_BASE_URL
    - AUTH0_CLIENT_ID
    - AUTH0_CLIENT_SECRET
  - Auth0_SECRET is the secret key that is used to sign the JWT
    - Auth0_BASE_URL is the url of the Auth0 server
    - WE need to run the command <code>node -e "console.log(crypto.randomBytes(32).toString('hex'))"</code>
    - once we run this command we wil get a random string which will be used as the secret key
  - For now the base url is  http://localhost:3000
  - Issuer Base url, client id and client secret is the domain, client id, and client secret which can be found in the Auth0 dashboard in the settings -> domain

## S3 Setting up the application file structure
- Create the following structure api -> auth -> [...auth0].js
- import the auth0 library in this auth0.js file
- <code> import {handleAuth} from '@auth0/nextjs-auth0' </code>
- Dont forget to export the auth
- <code> export default handleAuth() </code>

## S4 Setting up app.js
- Since we will be using the auth0 library we need to import it in the app.js file
- <code> import {UserProvider as OktaProvider} from '@auth0/nextjs-auth0' </code>
- wrap the app with the oktaProvider
- now if you goto <code> http://localhost:3000/api/auth/login </code> you will be able to login with okta.


## S5 Setting up the callback
- Currently without anything it will be redirected to home page
- to change this 
- goto app.js
- <code> import Link from "next/link"</code>
- <code> Link href = "api/auth/login" </code> this will take you to the login page
- <code> Link href = "api/auth/logout" </code> this will end the session and logout the user


