import Image from "next/image";

export default function Header() {
  
  return (
    
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
    )
}
