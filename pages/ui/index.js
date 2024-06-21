
import React from "react"
import Navigation from "../components/navigation"
import styles from "../styles/styles.module.css"
import Image from "next/image";


const HomePage = () => {
 

  return (
<>
    <div className={styles.container}>
    <div className={styles.header}>
    <h3>
    <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/LycraLogo.jpg"
          alt="The Lycra Company Logo"
          width={50}
          height={50}
          priority
        />
      API Landing Page</h3>
      <Navigation/>
    </div>
    <div className={styles.sidebar}>
    API Strategy and Scenarios
    <ul>
      <li>Process for API Design</li>
      <li>API Usage</li>
      <li>Development Process</li>
      <li>Component Reuse</li>
    </ul>
    </div>
    <div className={styles.content}>
    <h2>Getting Started: Version 1.0 by Shawn M. Crowley</h2>

<h2>Design Goals</h2>

<ol>
  <li>
    Connect via API to Adaptive Works api service and acquire current exported
    data in realtime
  </li>
  <li>
    Validate the API&#39;s provide the same data and valiation as the existing
    export, just in real time without exports, staging, scripts, loads. etc.
  </li>
  <li>
    Validate that changes in the data schema within Adaptive Works is available
    in real time without data manipulation
  </li>
  <li>Store REST API Data in a NoSQL DataStore</li>
  <li>
    Display Data in a UI that can pull from Adaptive Works/NoSQL Data
    Store/Compare the Two
  </li>
  <li>Make Next JS UI PWA so it can be downloaded or used easily via mobile</li>
</ol>

<h2>Process Goals</h2>

<ol>
  <li>Demonstrate a Design and Code First Agile Process</li>
  <li>Version Control</li>
  <li>Documentation</li>
  <li>API First Design</li>
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
</ol>

<h2>To Do</h2>

<ol>
  <li>&lt;strike&gt;Fix FS Tab Images&lt;/strike&gt;</li>
  <li>
    &lt;strike&gt;Add Header and Footer and make page specific
    layout&lt;/strike&gt;
  </li>
  <li>
    &lt;strike&gt;Create DockerFile for Application Build and
    Automation&lt;/strike&gt;
  </li>
  <li>
    &lt;strike&gt;Fix Transition Screen Glitch (This is possibly related to
    Google Fonts download)&lt;/strike&gt; - This was corrected once a build was
    performed and Server was run in Production Mode
  </li>
  <li>
    Include a manifest.json file in this project for PWA Availability and add a
    Service Worker
  </li>
  <li>Add to GitHub Actions for Auto Build and CI/CD</li>
  <li>Add Toasts and Loading Spinner</li>
  <li>Add Error and Loading Pages</li>
</ol>

<p>First, run the development server:</p>

<p><code></code>`bash npm run dev</p>

<p><code></code>`</p>

<p>
  Open
  <a href="http://localhost:3000/ui"
    >http://localhost:3000/ui</a
  >
  with your browser to see the result.
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
  </div>
    <div>
    </div>
    </>
  );
};



 

export default HomePage