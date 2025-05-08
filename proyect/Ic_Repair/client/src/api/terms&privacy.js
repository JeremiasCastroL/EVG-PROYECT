import axios from "axios";

const ADMIN = 'http://localhost:3000/api/admin'

export const updateTerms = (formData) =>
    axios.put(`${ADMIN}/terms-of-use`, formData)