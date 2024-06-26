
import React from "react"
import Navigation from "../components/navigation"
import styles from "../styles/styles.module.css"
import Header from "../components/header"
import SideBar from "../components/sidebar"
import Content from "../components/content"


export default function HomePage () { 

  return (
    
    <div className={styles.container}>
    <div className={styles.header}>
    <Header/>
    <Navigation/>
    </div>
    <div className={styles.sidebar}>
      <SideBar/>
    </div>
    <div className={styles.content}>
    <Content/>
    </div>
    </div>
  )
}