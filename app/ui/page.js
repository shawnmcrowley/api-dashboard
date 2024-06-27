
import React from "react"
import Header from "../../components/header"
import SideBar from "../../components/sidebar"
import Content from "../../components/content"
import styles from "../../styles/styles.module.css"


export default function HomePage() {

  return (

    <div className={styles.container}>
      <div className={styles.header}>
        <Header />
      </div>
      <div className={styles.sidebar}>
        <SideBar />
      </div>
      <div className={styles.content}>
        <Content />
      </div>
    </div>
  )
}