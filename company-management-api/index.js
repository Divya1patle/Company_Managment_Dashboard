
const express = require('express');
const app = express();
const port = 5173;

// Sample data
const companies = [
  {
    id: 1, name: 'TL Flex Holdings LLC', domicile: 'Delaware', businessStructure: 'Limited Liability Company', domicileCounty: "New Castle",
    domicileCity: "Wilmington",
    serviceState: "Delaware",
    domesticState: "Delaware",
    parValue: "100 USD",
    authorizedShare: "1,000,000 Shares",
    naicsCode: "541330",
    businessPurpose: "NO",
    formationDate: "2015-04-15",
  },
  {
    id: 2, name: 'Business_Name', domicile: 'Delaware', businessStructure: 'Limited Liability Company', domicileCounty: "New Castle",
    domicileCity: "Washington",
    serviceState: "Delaware",
    domesticState: "Delaware",
    parValue: "200 USD",
    authorizedShare: "2,000,000 Shares",
    naicsCode: "541330",
    businessPurpose: "YES",
    formationDate: "2018-04-15",
  },
  {
    id: 3, name: 'TL Flex Holdings LLC', domicile: 'Delaware', businessStructure: 'Limited Liability Company', domicileCounty: "New Castle",
    domicileCity: "Wilmington",
    serviceState: "Delaware",
    domesticState: "Delaware",
    parValue: "100 USD",
    authorizedShare: "1,000,000 Shares",
    naicsCode: "541330",
    businessPurpose: "NO",
    formationDate: "2015-04-15",
  },
  {
    id: 4, name: 'Business_Name', domicile: 'Delaware', businessStructure: 'Limited Liability Company', domicileCounty: "New Castle",
    domicileCity: "Washington",
    serviceState: "Delaware",
    domesticState: "Delaware",
    parValue: "200 USD",
    authorizedShare: "2,000,000 Shares",
    naicsCode: "541330",
    businessPurpose: "YES",
    formationDate: "2018-04-15",
  },
  {
    id: 5, name: 'Business_Name', domicile: 'Delaware', businessStructure: 'Limited Liability Company', domicileCounty: "New Castle",
    domicileCity: "Washington",
    serviceState: "Delaware",
    domesticState: "Delaware",
    parValue: "200 USD",
    authorizedShare: "2,000,000 Shares",
    naicsCode: "541330",
    businessPurpose: "YES",
    formationDate: "2018-04-15",
  },
  {
    id: 6, name: 'Business_Name', domicile: 'Delaware', businessStructure: 'Limited Liability Company', domicileCounty: "New Castle",
    domicileCity: "Washington",
    serviceState: "Delaware",
    domesticState: "Delaware",
    parValue: "200 USD",
    authorizedShare: "2,000,000 Shares",
    naicsCode: "541330",
    businessPurpose: "YES",
    formationDate: "2018-04-15",
  },
  {
    id: 7, name: 'Business_Name', domicile: 'Delaware', businessStructure: 'Limited Liability Company', domicileCounty: "New Castle",
    domicileCity: "Washington",
    serviceState: "Delaware",
    domesticState: "Delaware",
    parValue: "200 USD",
    authorizedShare: "2,000,000 Shares",
    naicsCode: "541330",
    businessPurpose: "YES",
    formationDate: "2018-04-15",
  },
];

// Get all companies
app.get('/api/companies', (req, res) => {
  res.json(companies);
});

// Get company by ID
app.get('/api/companies/:id', (req, res) => {
  const company = companies.find(c => c.id === parseInt(req.params.id));
  if (!company) return res.status(404).send('Company not found');
  res.json(company);
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start server
app.listen(port, () => console.log(`Server running on port ${port}`)); // Corrected line with backticks
