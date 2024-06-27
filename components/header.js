import React from "react";
import Image from "next/image";
import { Card, CardDescription, CardContent, CardHeader, CardFooter, CardTitle } from "@/components/ui/card"
import Navigation from "../components/navigation"


export default function Header() {

  return (

    <Card>
      <CardHeader>
        <CardTitle>        
          <Image
            src="/LycraLogo.jpg"
            alt="The Lycra Company Logo"
            width={80}
            height={80}
            />API Landing Page
        </CardTitle>
        <CardDescription> UI used to provide access for various API Integrations, including the raw payloads, OpenAPI documents for each API, and synchronization of datasources via api</CardDescription>
      </CardHeader>
      <CardFooter><Navigation/></CardFooter>
      </Card>
  )
}
