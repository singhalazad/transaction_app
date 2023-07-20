import React, { useEffect, useState } from 'react'
import axiosInstance from '../../requests'
import DeleteIcon from '../Assets/delete.svg'
import EditIcon from '../Assets/edit.svg'
import UpIcon from '../Assets/up.svg'
import DownIcon from '../Assets/down.svg'
import { Link } from 'react-router-dom'


const Transaction = ({ name, category,id, amount, t_type, date }) => {
  const [transactions, setTransactions] = useState([
    // { id: 1, description: 'Expense 1', amount: -10 },
    // { id: 2, description: 'Income 1', amount: 50 },
    // { id: 3, description: 'Expense 2', amount: -20 },
  ]);

  const deleteTransaction = async (e) => {
    try {
      e.preventDefault();
  
      const response = await fetch("https://bursting-gelding-24.hasura.app/api/rest/delete-transaction", {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          "x-hasura-user-id": 1,
          "x-hasura-role":"user",
          "x-hasura-admin-secret":'g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF'
        },
        body: JSON.stringify({ 
          id

          
        })
      });
  
      if (!response.ok) {
          alert("Enter Valid Credentials");
        } else {
          const data = await response.json();
          // localStorage.setItem("authToken", data.authToken);
          console.log(data);
          // navigate("/");
          // setSuccessAlert(true);
        }


    } catch (error) {
      console.error('An error occurred:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <table className="table-auto">
  <tbody>
    <tr className="grid grid-cols-7 gap-2">
      <td className="flex justify-center">
        <img src={UpIcon} alt="up" className="max-w-xs max-h-6" />
      </td>
      <td className="text-center whitespace-no-wrap">{name}</td>
      <td className="text-center whitespace-no-wrap">{category}</td>
      <td className="text-center whitespace-no-wrap">{date}</td>
      <td className="text-center whitespace-no-wrap">{amount}</td>
      <td className="flex justify-center">
        <img src={EditIcon} alt="editIcon" className="max-w-xs max-h-6" />
      </td>
      <td className="flex justify-center">
        <img src={DeleteIcon} alt="deleteIcon" className="max-w-xs max-h-6" />
      </td>
    </tr>
    {/* Add more rows here if needed */}
  </tbody>
</table>
  )}

export default Transaction;
