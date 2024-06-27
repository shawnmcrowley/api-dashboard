'use client'
import { Card, CardDescription, CardContent, CardHeader, CardFooter, CardTitle } from "@/components/ui/card"

export default function Content() {

  return (
    <Card>
      <CardHeader>
        <CardTitle>Getting Started: Version 1.0 by Shawn M. Crowley</CardTitle>
      <CardDescription>
        Design Goals  
     
            Connect via API to Adaptive Works api service and acquire current exported
            data in realtime (Done)
        
            Validate the API&#39;s provide the same data and valiation as the existing
            export, just in real time without exports, staging, scripts, loads. etc.
            (Done)
        
            Validate that changes in the data schema within Adaptive Works is available
            in real time without data manipulation (In Process)
    
         Store REST API Data in a NoSQL DataStore (Done)
          
            Display Data in a UI that can pull from Adaptive Works NoSQL Data
            Store Compare the Two (In Process)
          
          Make Next JS UI PWA so it can be downloaded or used easily via mobile
          
            Use Next JS as is the recommendation for the Digital Business
            Platform... same technologies
         
        Process Goals

        
          Demonstrate a Design and Code First Agile Process
          Version Control
          Documentation
          API First Design
          Swagger Docs
          Comprehensive Logging
          Application Integration Only thru API
          Containerization
        

      Next Steps

            Testing Power BI ability to query APIs Directly or NoSQL Directly for
            its reporting needs
            Evaluate API push directly to a SnowFlake Warehouse for Power BI reporting
            and remove NoSQL

          Evaluate API vs. AirByte OpenSource


        To Do

       
            Include a manifest.json file in this project for PWA Availability and add a
            Service Worker

          Add to GitHub Actions for Auto Build and Continuous Integration and Deployment
          Add Toasts and Loading Spinner
          Add Error and Loading Pages
          Add Swagger Server for API Docs
          Add SSL Certificate
        
        </CardDescription>
        </CardHeader>
    </Card>
  )

}