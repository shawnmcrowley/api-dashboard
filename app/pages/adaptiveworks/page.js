'use client'

import { AgGridReact } from "ag-grid-react"
import "ag-grid-community/styles/ag-grid.css"
import "ag-grid-community/styles/ag-theme-quartz.css"
import { useMemo, useState, useEffect, Suspense } from "react"
import Layout from '../../../components/layout'




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
    <Layout>
      
      <h1>Adaptive Works Milestones</h1>
      <div className="ag-theme-quartz" style={{ height: '650px' }}>
          <AgGridReact rowData={rowData} columnDefs={colDefs} defaultColDef={defaultColDef} pagination={true} paginationPageSize={25} paginationPageSizeSelector={[25, 50]} />
      </div>
      
    </Layout>
)

}