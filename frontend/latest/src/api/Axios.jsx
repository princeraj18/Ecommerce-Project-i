import React from 'react'

import axios from "axios";

// 🔗 Base URL of your backend
const api = axios.create({
  baseURL: "http://localhost:5000/api", // change this to your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});