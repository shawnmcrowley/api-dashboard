
## Getting Started: Version 1.0  by Shawn M. Crowley

## Design Goals

1. Connect via API to Adaptive Works api service and acquire current exported data in realtime (Done)
2. Validate the API's provide the same data and valiation as the existing export, just in real time without exports, staging, scripts, loads. etc. (Done)
3. Validate that changes in the data schema within Adaptive Works is available in real time without data manipulation (In Process)
4. Store REST API Data in a NoSQL DataStore (Done)
5. Display Data in a UI that can pull from Adaptive Works/NoSQL Data Store/Compare the Two (Done)
6. Make Next JS UI PWA so it can be downloaded or used easily via mobile
7. Use Next JS as it's the recommendation for the Digital Business Platform... same technologies

## Process Goals

1. Demonstrate a Design and Code First Agile Process
2. Version Control
3. Documentation (add Swagger Details and Docs with Backend Server)
4. API First Design
5. Comprehensive Logging (Done - Both in Console and Logs)
7. Application Integration Only thru API
5. Containerization

## Next Steps

1. Testing Power BI ability to query API's Directly or NoSQL Directly for it's reporting needs (Updated - Use Airbyte to integrate NoSQL and Snowflake)
2. Evaluate API vs. AirByte OpenSource for Synchronization in SnowFlake

## To Do

1. Include a manifest.json file in this project for PWA Availability and add a Service Worker
2. Add to GitHub Actions for Auto Build and CI/CD
3. Add Toasts and Loading Spinner 
4. Add Error and Loading Pages
5. Add Swagger Server for API Docs
6. Add SSL Certificate
7. Fix Layouts and column interface (Done - Navigation and Data Grid)
8. Need to clean up extra files, layouts, and components

First, run the development server:

```bash
npm run dev

```

Open [http://localhost:3000/](http://localhost:3000/) with your browser to see the result.


## Deploy on Vercel

The easiest way to deploy this app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.
