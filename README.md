A simple demo for Google Tag Manager setup in a React app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and [npm-gtm-module]().

## To start with the project

- Create A Google Tag Manager (GTM) container (this will then contain the google analytics tag and is what gets implemented on the react site)

- Optionally, install the Tag Assistant Chrome extension which helps debug GA & GTM implementations (or can be inspected in dev tools)

## Adding multiple environments for different GTM container versions

In Google Tag Manager, set different environments under `Admin > Environments` and add `gtm_auth` and `gtm_preview `from the tag snippet to the project

## Testing if GTM is being implemented

npm run
Tag Assistent extenstion should show an implemnented tag.

## Detect route changes

In GTM workspace set a History Change Trigger to detect route change. New tags can be added and fired based on Hisroty Change trriger.

After each set up, publish the workspace container.

_Testing git rebase with this_
