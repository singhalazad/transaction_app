import React,{useState} from 'react'
import {useNavigate } from 'react-router-dom'  


export const TransactionForm = () => {
const [credentials, setcredentials] = useState({name:"",type:"",category:"",amount:""})
const[successAlert, setSuccessAlert] = useState(false)
  let navigate = useNavigate()

    const handleSubmit = async (e) => {
      try {
        e.preventDefault();
    
        const response = await fetch("https://bursting-gelding-24.hasura.app/api/rest/add-transaction", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "x-hasura-user-id": 1,
            "x-hasura-role":"user",
            "x-hasura-admin-secret":'g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF'
          },
          body: JSON.stringify({ 
            name: credentials.name,
            type: credentials.type,
            category: credentials.category,
            amount: credentials.amount,
            date: "2023-06-28T10:00:15+00:00",
            user_id: 1

            
          })
        });
    
        if (!response.ok) {
            alert("Enter Valid Credentials");
          } else {
            const data = await response.json();
            // localStorage.setItem("authToken", data.authToken);
            console.log(data.insert_transactions_one);
            // navigate("/");
            setSuccessAlert(true);
          }


      } catch (error) {
        console.error('An error occurred:', error);
        alert('An error occurred. Please try again.');
      }
    };
    
      console.log(credentials);
 const onChange=(event)=>{
    setcredentials({...credentials,[event.target.name]:event.target.value})
 }
  return (
    <div>
    {successAlert && <p>created successfully</p>}
      <div className="container mx-auto">
    <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="name" className="block mb-1">Name:</label>
        <input type="text" id="name" name="name" onChange={onChange} className="w-full px-3 py-2 border rounded" required/>
      </div>
      <div className="mb-4">
        <label htmlFor="type" className="block mb-1">Type:</label>
        <select id="type" name="type" onChange={onChange} className="w-full px-3 py-2 border rounded" required>
          <option value="">Select type</option>
          <option value="credit">Credit</option>
          <option value="debit">Debit</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="block mb-1">Category:</label>
        <input type="text" id="category" name="category" onChange={onChange} className="w-full px-3 py-2 border rounded" required/>
      </div>
      <div className="mb-4">
        <label htmlFor="amount" className="block mb-1">Amount:</label>
        <input type="integer" id="amount" name="amount" onChange={onChange} className="w-full px-3 py-2 border rounded" required/>
      </div>
      <div className="mb-4">
        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">Submit</button>
      </div>
    </form>
  </div>
    </div>
    
  )
}
