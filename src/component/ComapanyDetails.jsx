import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

function CompanyDetails() {
  const { id } = useParams();
  const [company, setCompany] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5173/api/companies/${id}`)
      .then(response => response.json())
      .then(data => setCompany(data))
      .catch(error => console.error("Error fetching company details:", error));
  }, [id]);

  if (!company) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <div className='mt-7'>
        <div className='border flex shadow-lg p-3'>
          <div>
            <h1>{company.name} <span className='text-blue-600 font-bold bg-sky-100 p-1 rounded-full '>{company.domicile}</span></h1>
            <p>{company.businessStructure} | Member Managed-<span className='text-blue-600 font-bold'>Contact_Person</span></p>
          </div>
        </div>
        <ul className='flex gap-3 ms-6 mt-6'>
          <Link to={':id'}>Details</Link>
          <Link>Locations</Link>
          <Link>Key Personnel</Link>
          <Link>Records</Link>
          <Link>Orders</Link>
          <Link>Services</Link>
          <Link>Subscriptions</Link>
          <Link>Contacts</Link>
          <Link>Account Manager</Link>
        </ul>
        <div className="mt-7 p-5 border shadow-lg ">
          <h4 className='font-bold text-2xl mb-5'>General Info</h4>
          <div className='grid grid-flow-col gap-20'>
            <div className=''>
              <h1 className='font-bold text-l'>Legal Name</h1>
              <p className='mb-4'>{company.name}</p>
              <h1 className='font-bold text-l'>Domicile City</h1>
              <p className='mb-4'>{company.domicileCity}</p>
              <h1 className='font-bold text-l'>PAR Value</h1>
              <p className='mb-4'>{company.parValue}</p>
              <h1 className='font-bold text-l'>Business Purpose</h1>
              <p className='mb-4'>Business Purpose</p>
              <h1 className='font-bold text-l'>Formation Date</h1>
              <p className='mb-4'>{company.formationDate}</p>
            </div>
            <div>
              <h1 className='font-bold text-l'>Business Structure</h1>
              <p className='mb-4'>{company.businessStructure}</p>
              <h1 className='font-bold text-l'>Service State</h1>
              <p className='mb-4'>{company.serviceState}</p>
              <h1 className='font-bold text-l'>Authorized Share</h1>
              <p className='mb-4'>{company.authorizedShare}</p>
              <h1 className='font-bold text-l'>Weather board-certified professional entity</h1>
              <p className='mb-4'>{company.businessPurpose}</p>
              <h1 className='font-bold text-l'>Dissolution Date</h1>
              <p className='mb-4'>null</p>
            </div>
            <div>
              <h1 className='font-bold text-l'>Domicile State</h1>
              <p className='mb-4'>{company.domicile}</p>
              <h1 className='font-bold text-l'>Domestic State</h1>
              <p className='mb-4'>{company.domesticState}</p>
              <h1 className='font-bold text-l'>NAICS Code</h1>
              <p className='mb-4'>{company.naicsCode}</p>
            </div>
            <div>
              <h1 className='font-bold text-l'>Domicile Country</h1>
              <p className='mb-4'>{company.domicileCounty}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CompanyDetails;

