const express = require('express');

//const app = express()

const axios = require('axios');

const getWebsites = async (req, res) => {
  const response = await axios('https://jsonplaceholder.typicode.com/users');

  const data = await response.data;

  res.json(data);
};

const getUsers = async (req, res) => {
  const response = await axios('https://jsonplaceholder.typicode.com/users');

  const data = await response.data;

  const allUsers = data.map((users) => {
    const { name, email, company } = users;

    return {
      name: name,
      email: email,
      company: company.name,
    };
  });

  allUsers.sort(function (a, b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;

    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;

    return 0;
  });

  res.json(allUsers);
};

const getSuite = async (req, res) => {
  const response = await axios.get(
    'https://jsonplaceholder.typicode.com/users'
  );
  const data = await response.data;

  const suites = data.filter((user) => {
    return user.address.suite.includes('Suite');
  });

  return res.json(suites);
};

module.exports = {
  getSuite,
  getUsers,
  getWebsites,
};
