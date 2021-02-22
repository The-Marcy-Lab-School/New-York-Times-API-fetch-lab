# New-York-Times-API-lab

You will be using many [APIs from the New York Times](https://developer.nytimes.com/). 

## DEMO

Study out the gif below to get a fell for what you'll be building.

## Create an Dev Account with NYT and get an API-Key

Follow [these instructions](https://developer.nytimes.com/get-started). First, create an account and sign in. Then, register apps. The New York Times will assume you are a developer who plans on creating an app that uses their APIs. Since we are not making a _real_ application, and since we're just using these APIs for our lab, you can create a new app and call it "Marcy Lab Practice". Scroll down and make sure you click "Enable" for **all** the APIs. 

[image]

You'll be given an API-key, which you will need to use as a query parameter in **ALL** you `fetch` requests to these APIs. Familize yourself with [all the APIs](https://developer.nytimes.com/apis) the New York Times has to offer!

## Build your Web App!

Create the needed files to build the web app that resembles the gif above. You should build out each of the following feature one at a time, coding a little and testing a little as you go.

## Top Stories

When your web app loads, we should see a list of 5 **Top Stories** by the New York Times at the top of the page. These should be the same story titles as the [New York Times homepage](https://www.nytimes.com/). Use the [Top Stories API](https://developer.nytimes.com/docs/top-stories-product/1/overview) to get your data. Your lists of top stories in your web app should be links that will open up a **new tab** to the article directly from the New York Times website. 

## Search Stories

Below your Top Stories should be a form where the user can search for news articles. Use the [Article Search API](https://developer.nytimes.com/docs/articlesearch-product/1/routes/articlesearch.json/get) You form only needs one text input and one submit button. When a user submits the form, your web app should display 10 article links that each open up a **new tab** to the articles directly from the the New York Times website. If the user makes another search by re-submitting the form, the previous search results should be "cleared out". 

> Make sure your fetch call has both the `api-key` and `q` query parameters. `GET https://api.nytimes.com/svc/search/v2/articlesearch.json?q={search}&api-key={key}`


