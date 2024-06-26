import React from "react";
import Image from "next/image";
import {Card, CardDescription, CardContent, CardHeader, CardFooter, CardTitle} from "@/components/ui/card"


export default function Header() {
  
  return (
    
    <Card className="w-[350px]">
      <CardHeader>
      <CardTitle>      
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
        API Landing Page - UI Used to Provide Access for Various API Integrations

          </CardContent>
          <CardFooter></CardFooter>
         
         
      </Card>
    )
}
