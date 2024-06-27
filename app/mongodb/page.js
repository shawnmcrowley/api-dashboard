import React from "react"
import Navigation from '../../components/navigation'
import DataTable from "@/components/DataTable"
import styles from '../../styles/styles.module.css'


const HomePage = ({ allEntities }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Identifier',
        accessor: '_id',
              
                
      },
      {
        Header: 'Name',
        accessor: 'entities.Name',
        id: 'Name'    
      },
      {
        Header: 'Created On',
        accessor: 'CreatedOn',
      },
      {
        Header: 'Due Date',
        accessor: 'DueDate',
      },
      {
        Header: '% Complete',
        accessor: "PercentCompleted"
      }
    
    ],
    []
  );
 
  console.log(JSON.stringify(allEntities))
  

  return (
<>
    <div className={styles.container}>
    <div className={styles.header}>
      <h3>API Landing Page</h3>
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
        <h3>NoSQL Database Milestones</h3>
      <DataTable columns={columns} data={allEntities} />
          </div>
  </div>
    <div>
    </div>
    </>
  );
};

export async function getStaticProps() {
    try {
        const response = await fetch("http://localhost:3000/api/mongodb/")
        
  
        // Check if the response status is OK (status code 200-299)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
  
        // Parse the JSON
        const data = await response.json();
        console.log(data);
        
  
        return {
            props: { allEntities: data || [] }
        };
    } catch (error) {
        console.error('Error fetching data:', error);
  
        // Return empty props or handle the error as needed
        return {
            props: { allEntities: [] }
        };
    }
  }
    
export default HomePage