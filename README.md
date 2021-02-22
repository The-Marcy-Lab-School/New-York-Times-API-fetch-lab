# New-York-Times-API-lab

You will be using many [APIs from the New York Times](https://developer.nytimes.com/). 

## Demo

Study the gif below to get a fell for what you'll be building.

## Create a Dev Account with NYT and get an API-Key

Follow [these instructions](https://developer.nytimes.com/get-started). First, create an account and sign in. Then, register apps. The New York Times will assume you are a developer who plans on creating an app that uses their APIs. Since we are not making a _real_ application, and since we're just using these APIs for our lab, you can create a new app and call it "Marcy Lab Practice". Scroll down and make sure you click "Enable" for **all** the APIs. 

[image]

You'll be given an API-key, which you will need to use as a query parameter in **ALL** your `fetch` requests to these APIs. Familize yourself with [all the APIs](https://developer.nytimes.com/apis) the New York Times has to offer!

## Build your Web App!

Create the needed files to build the web app that resembles the gif above. You should build out each of the following feature one at a time, coding a little and testing a little as you go.

## Top Stories

When your web app loads, we should see a list of 5 **Top Stories** by the New York Times at the top of the page. These should be the same story titles as the [New York Times homepage](https://www.nytimes.com/). Use the [Top Stories API](https://developer.nytimes.com/docs/top-stories-product/1/overview) to get your data. Your lists of top stories in your web app should be links that will open up a **new tab** to the article directly from the New York Times website. 

## Search Stories

Below your Top Stories should be a form where the user can search for news articles. Use the [Article Search API](https://developer.nytimes.com/docs/articlesearch-product/1/routes/articlesearch.json/get). Your form only needs one text input and one submit button. When a user submits the form, your web app should display 10 article links that each open up a **new tab** to the articles directly from the the New York Times website. If the user makes another search by re-submitting the form, the previous search results should be "cleared out". 

> Make sure your fetch call has both the `api-key` and `q` query parameters. 
> `GET https://api.nytimes.com/svc/search/v2/articlesearch.json?q={searchTerm}&api-key={key}`

## Most Popular Stories

New York Times defines three ways to get the most popular stories: [Most Emailed](https://developer.nytimes.com/docs/most-popular-product/1/routes/emailed/%7Bperiod%7D.json/get), [Most Shared](https://developer.nytimes.com/docs/most-popular-product/1/routes/shared/%7Bperiod%7D.json/get), and [Most Viewed](https://developer.nytimes.com/docs/most-popular-product/1/routes/viewed/%7Bperiod%7D.json/get). Your web app should have a form that consists of a dropdown that has options: `Most Emailed, Most Shared, or Most Viewed`, another dropdown that has options for the period: `1 day, 7 days, or 30 days`, and a submit button. When the form is submitted, it will display the 5 most popular articles within that period. 

> For example, submitting the form when the selected options are "Most Emailed" and "7 days" will make a request to `https://api.nytimes.com/svc/mostpopular/v2/emailed/7.json`. 

## Build your own feature

The New York Times APIs have so much data. Create your own feature, but it must be intuitive for your user to understand what the feature is and how to use it. 
