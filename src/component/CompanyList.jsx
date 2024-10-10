import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CompanyList() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    // Fetch the companies list from the backend API
    fetch('http://localhost:5173/api/companies')  // Correct backend API URL
      .then(response => response.json())  // Parse the response as JSON
      .then(data => setCompanies(data))   // Set the companies in state
      .catch(error => console.error('Error fetching companies:', error));
  }, []);

  return (
    <div className="mt-7 p-2 border shadow-lg ">
      <h2 className='text-2xl mb-2'>Companies</h2>
      <hr />
      <p className='mb-2 p-3'>Name</p>
      <hr />
      <ul>
        {companies.map(company => (
          <div className='flex gap-6 p-3 shadow-lg'>
            <li key={company.id} className='mb-3'>
              <Link to={`/company/${company.id}`} className='font-bold'>{company.name}</Link>
              <ul>
                <li>{company.businessStructure}</li>
              </ul>
              <hr />
            </li>
            <p className='text-blue-600 font-bold'>{company.domicile}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default CompanyList;
