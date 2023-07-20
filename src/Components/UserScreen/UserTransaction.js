import React, { useEffect, useState } from 'react'
import Navbar from '../Modals/Navbar'
import axiosInstance from '../../requests';
import PageTop from '../Modals/PageTop';
import Transaction from '../Modals/Transaction';

function UserTransaction() {

    const [loading,setLoading] = useState(true)
    const [transactions,setTransaction] = useState([]) ;


    useEffect(()=>{
        const fetchData = async ()=> {
          console.log('in') ;
          await axiosInstance.get('/all-transactions',{
              headers: {
                  'x-hasura-role' : 'user',
                  'x-hasura-user-id' : 1
              },
              params : {
                  "limit": 14,
                  "offset": 2
              }
          }).then((res) =>{
              setTransaction(res.data.transactions)
              console.log(res.data.transactions) ;
              setLoading(false) ;
          }).catch((err) => {
              console.log(err) ;
          })
        }
          fetchData() ;
    },[]) ;
    


  return (
    <>
   
  

   {loading ? <div className=""> Loading </div>  : 
      <div className='flex'>
        <Navbar role='user'/>
        <div className="flex flex-col w-full">

        <PageTop  heading={'Transactions'}  className='w-full'/>
        <div className="bg-white pl-8 mr-10 pt-5 pb-5 mb-5 rounded-xl">
              
              {transactions.map((t) => (
                 
                <Transaction name={t.transaction_name} category={t.category} key={t.id} amount={t.amount} t_type={t.type} date={t.date}/>
                
              ))}
            </div>

        </div>
    </div>
    }
    </>
  )
}

 export default UserTransaction 