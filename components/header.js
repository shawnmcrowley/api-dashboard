import React from "react";
import Image from "next/image";
import { Card, CardDescription, CardContent, CardHeader, CardFooter, CardTitle } from "@/components/ui/card"
import Navigation from "../components/navigation"


export default function Header() {

  return (

    <Card className="w-[1000px]">
      <CardHeader>
        <CardTitle>
        <Navigation/>
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/LycraLogo.jpg"
            alt="The Lycra Company Logo"
            width={80}
            height={80}
            priority
          />API Landing Page
        </CardTitle>
        <CardDescription></CardDescription>
      </CardHeader>
      <CardContent>
        UI used to provide access for various API Integrations, including the raw payloads, OpenAPI documents for each API, and synchronization of datasources via api
      </CardContent>
      <CardFooter></CardFooter>
      </Card>
  )
}
