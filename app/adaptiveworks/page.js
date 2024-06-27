'use client'
import Navigation from '../../components/navigation'
//import styles from '../../styles/styles.module.css'
//import Header from '@/pages/components/header'
import SideBar from '@/components/sidebar'
import { AgGridReact } from "ag-grid-react"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-quartz.css"
import { useMemo, useState, useEffect } from "react"



export default function Page() {

  const defaultColDef = useMemo(() => {
    return {
      flex: 1,
      filter: true,
      floatingFilter: false,
      filterParams: { buttons: ['apply', 'clear'] }
    }

  })



  // Row Data to Display
  const [rowData, setRowData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("../api/adaptiveworks/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          }
        });

        // Check if the response status is OK (status code 200-299)
        if (!response.ok) {
          throw new Error(`HTTP Error! Status: ${response.status}`);
        }

        // Parse the JSON
        const data = await response.json();
        console.log(data);
        setRowData(data.entities);

      } catch (error) {
        console.error('Error Fetching Data:', error);
      }
    };

    fetchData();
  }, []);







  // Column Definitions for Headers
  const [colDefs, setColDefs] = useState([
    {
      field: "SYSID",
      headerName: "Milestone ID"
    },
    {
      field: 'Name',
      headerName: "Name"
    },
    {
      field: "CreatedOn",
      headerName: "Created On",
      filter: 'agDateColumnFilter'
    },
    {
      field: "DueDate",
      headerName: "Due Date",
      filter: 'agDateColumnFilter'
    },
    {
      field: "PercentCompleted",
      headerName: "% Complete",
    }
  ])





  return (
    <>
      <div className="ag-theme-quartz" style={{ height: 700 }}>
        <h3>API Landing Page</h3>
        <Navigation />
         <SideBar />
          <h3>Adaptive Works Milestones</h3>
        <AgGridReact rowData={rowData} columnDefs={colDefs} defaultColDef={defaultColDef} pagination={true} paginationPageSize={25} paginationPageSizeSelector={[25, 50]} />
      </div>
    </>
)

}