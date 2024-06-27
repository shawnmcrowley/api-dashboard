import { Card, CardDescription, CardContent, CardHeader, CardFooter, CardTitle } from "@/components/ui/card"

export default function Content() {

  return (
    <Card>
      <CardHeader>
        <CardTitle>Getting Started: Version 1.0 by Shawn M. Crowley</CardTitle>
      <CardDescription>Design Goals  
      <div>

        <ol>
          <li>
            Connect via API to Adaptive Works api service and acquire current exported
            data in realtime (Done)
          </li>
          <li>
            Validate the API&#39;s provide the same data and valiation as the existing
            export, just in real time without exports, staging, scripts, loads. etc.
            (Done)
          </li>
          <li>
            Validate that changes in the data schema within Adaptive Works is available
            in real time without data manipulation (In Process)
          </li>
          <li>Store REST API Data in a NoSQL DataStore (Done)</li>
          <li>
            Display Data in a UI that can pull from Adaptive Works/NoSQL Data
            Store/Compare the Two (In Process)
          </li>
          <li>Make Next JS UI PWA so it can be downloaded or used easily via mobile</li>
          <li>
            Use Next JS as it&#39;s the recommendation for the Digital Business
            Platform... same technologies
          </li>
        </ol>

        <h2>Process Goals</h2>

        <ol>
          <li>Demonstrate a Design and Code First Agile Process</li>
          <li>Version Control</li>
          <li>Documentation</li>
          <li>API First Design</li>
          <li>Swagger Docs</li>
          <li>Comprehensive Logging</li>
          <li>Application Integration Only thru API</li>
          <li>Containerization</li>
        </ol>

        <h2>Next Steps</h2>

        <ol>
          <li>
            Testing Power BI ability to query API&#39;s Directly or NoSQL Directly for
            it&#39;s reporting needs
          </li>
          <li>
            Evaluate API push directly to a SnowFlake Warehouse for Power BI reporting
            and remove NoSQL
          </li>
          <li>Evaluate API vs. AirByte OpenSource</li>
        </ol>

        <h2>To Do</h2>

        <ol>
          <li>
            Include a manifest.json file in this project for PWA Availability and add a
            Service Worker
          </li>
          <li>Add to GitHub Actions for Auto Build and CI/CD</li>
          <li>Add Toasts and Loading Spinner</li>
          <li>Add Error and Loading Pages</li>
          <li>Add Swagger Server for API Docs</li>
          <li>Add SSL Certificate</li>
        </ol>

        <p>First, run the development server:</p>

        <p><code></code>`bash npm run dev</p>

        <p><code></code>`</p>

        <p>
          Open <a href="http://localhost:3000/">http://localhost:3000/</a> with your
          browser to see the result.
        </p>

        <h2>Deploy on Vercel</h2>

        <p>
          The easiest way to deploy this app is to use the
          <a
            href="https://vercel.com/new?utm_medium=default-template&amp;filter=next.js&amp;utm_source=create-next-app&amp;utm_campaign=create-next-app-readme"
          >Vercel Platform</a
          >
          from the creators of Next.js.
        </p>
    </div>
        </CardDescription>
        </CardHeader>
    </Card>
  )

}