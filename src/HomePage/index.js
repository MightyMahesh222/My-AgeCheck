import { differenceInCalendarDays,differenceInMonths, differenceInYears, addYears,addMonths } from 'date-fns';
import { useState } from 'react';
import './index.css'
const Home=()=>{
    const [startDate,setStartDate]=useState('')
    const [endDate]=useState(new Date())
    const [months,setMonths]=useState('')
    const [days,setDays]=useState('')
    const [years,setYears]=useState('')
    const [show,setShow]=useState(false)
    const [valid,setValid]=useState(false)


    const calculateDistance=async()=>{
        const start=new Date(startDate)
        const end=new Date(endDate)
        setShow(true)

        if (startDate!==''){
            setValid(true)
        }

        const yearsDiff=differenceInYears(end,start);
        setYears(yearsDiff)

        const addingYears=addYears(start,yearsDiff)

        const monthsDiff=differenceInMonths(end,addingYears);
        setMonths(monthsDiff)

        const addMonth=addMonths(addingYears,monthsDiff);

        const daysDiff=differenceInCalendarDays(end,addMonth);
        setDays(daysDiff)
       
    }

    const changingDate=event=>{
        setStartDate(event.target.value)

    }

    return(
        <div className='MainDiv'>
            
            <h1>Age Calculator</h1>
        <input
        type="date"
        value={startDate}
        onChange={changingDate}
        />
        
      <button onClick={calculateDistance}>GET MY AGE</button>
      {valid ?
            show?
      <p className='para'>
      {days<0? `Don't test my coding skills bro,Please Enter valid date of birth...`:(months===0 && years===0)?`You are ${days} days old` : years===0?
        `You are ${months} months & ${days} days old` : months===0?`You are ${years} years & ${days} days old` :
        days===0? `You are ${years} years, ${months} months old` :`You are ${years} years, ${months} months & ${days} days old` }
      </p> 
      : null
        : null}
        </div>
    )
}

export default Home