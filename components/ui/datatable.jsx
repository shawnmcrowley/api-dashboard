import { useState, useEffect } from 'react';


export default function DataTable({ data }) {

    // Define the state for the filtered data
    const [filteredData, setFilteredData] = useState(data);
    // Define the state for the filter value
    	const [filter, setFilter] = useState('');
    	// Define the effect for filtering the data by name
    	useEffect(() => {
    	// If the filter is empty, use the original data
    	if (filter === '') {
    	setFilteredData(data);
    	// Otherwise, use the data that matches the filter
    	} else {
    	setFilteredData(data.filter((item) => item.name.toLowerCase().includes(filter.toLowerCase())));
    	}
    	}, [filter, data]); // Run the effect whenever the filter or the data changes
    	// Define the columns of the data table
    	const columns = [
	{
        selector: 'name',
    	name: 'Name',
    	sortable: true
    	},
    	{
    	name: 'Type',
    	selector: 'type',
    	sortable: true
    	},
    	{
    	name: 'Description',
    	selector: 'description',
    	sortable: false
    	}
    	];
    	// Define the options of the data table
    	const options = {
    	pagination: true,
    	paginationPerPage: 10,
    	paginationRowsPerPageOptions: [10, 20, 50],
    	responsive: true
    	};
    	// Define the handler for the filter input change
    	const handleFilterChange = (e) => {
    	// Set the filter value to the input value
    	setFilter(e.target.value);
    	};
    	// Return the page component
    	return (
    	<>
        <input type="text" placeholder="Filter by name" value={filter} onChange={handleFilterChange} />
    	<Table
    	columns={columns}
    	data={filteredData}
    	options={options}
    	/>
        </>
    	)
    	}
    