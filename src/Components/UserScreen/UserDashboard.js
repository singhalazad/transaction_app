import React, { useEffect, useState } from 'react'
import MainScreen from '../Modals/MainScreen'
import Navbar from '../Modals/Navbar'
import PageTop from '../Modals/PageTop'
import axiosInstance from '../../requests'
import credit1 from '../Assets/1.svg'
import debit1 from '../Assets/2.svg'
import { useParams } from 'react-router-dom'
import Transaction from '../Modals/Transaction'


function UserDashboard() {

  const [loading,isLoading] = useState(true)
  const [loading2,setLoading2] = useState(true) ;
  const [credit,setCredit] = useState(0) ;
  const [debit,setDebit] = useState(0) ;
  const {id} = useParams() ;
  const intValue = parseInt(id) ;
  const [transactions,setTransaction] = useState([]) ;
  // const id = this.props.match.params.id ;

  useEffect(()=>{
    const fetchData = async () =>{
      console.log(parseInt(id)) ;
      await axiosInstance.get('/credit-debit-totals',{headers : {
        'x-hasura-role' : 'user' ,
        'x-hasura-user-id' : 1
      }}).then((res) => {
        const data = res.data.totals_credit_debit_transactions ;
        // console.log(data[0].sum) ;
        setDebit(data[0].sum) ;
        setCredit(data[1].sum) ;

      }).catch((err) => {
        console.log('error',err)
      })
      isLoading(false) ;
    }

    const fetchData2 = async ()=> {
      console.log('in') ;
      await axiosInstance.get('/all-transactions',{
          headers: {
              'x-hasura-role' : 'user',
              'x-hasura-user-id' : 1
          },
          params : {
              "limit": 4,
              "offset": 2
          }
      }).then((res) =>{
          setTransaction(res.data.transactions)
          console.log(res.data.transactions) ;
          setLoading2(false) ;
      }).catch((err) => {
          console.log(err) ;
      })
    }
      fetchData() ;
      fetchData2() ;
},[]) ;


  return (
    <>
    {loading ? <div className=""> Loading </div>  : 
      <div className='flex'>
        <Navbar role='user'/>


        {/* Top Section */}
        <div className="flex flex-col w-full">
          <PageTop  heading={'Accounts'}  className='w-full'/>
          <div className="bg-[#f1f8ff]">
            <div className="flex  py-4  justify-around flex-col xl:flex-row items-center gap-20 xl:gap-0"> 
                <div className="bg-white flex pt-5  pl-8 pr-2 rounded-2xl w-1/2 xl:w-2/6 justify-between">
                  <div className="flex flex-col">
                    <div className="text-[#16DBAA] font-bold text-3xl"> ${credit} </div>
                    <div className="text-[#718EBF]"> Credit </div>
                  </div>
                  <img src={credit1} alt="" />
                </div>


                <div className="bg-white flex  pt-5  pl-8 pr-2 rounded-2xl w-1/2 xl:w-2/6  justify-between">
                  <div className="flex flex-col">
                    <div className="text-[#FE5C73] font-bold text-3xl"> ${debit} </div>
                    <div className="text-[#718EBF]"> Debit </div>
                  </div>
                  <img src={debit1} alt="" />
                </div>
            </div>
          </div>
          <div className="pl-10 pt-5 pr-10 bg-[#f1f8ff]">
            <div className="capitalize text-xl mb-4 text-[#333B69] font-bold"> Last Transaction </div>
            <div className="bg-white pl-4 pr-4 mr-10 ml-10 pt-5 pb-5 mb-5 rounded-xl">
              
              {transactions.map((t) => (
                
                
                  <Transaction name={t.transaction_name} category={t.category} key={t.id} amount={t.amount} t_type={t.type} date={t.date}/>
                
              ))}
            </div>

          </div>
        </div>

    </div>
    }
      
  </>
  )
}

export default UserDashboard