import React, { useState,useContext } from 'react'
import URLContext from '../Context/URLShortner/UrlContext'
import './CSS/Analytics.css';
import VisitHistoryItems from './VisitHistoryItems'

const Analytics = () => {
  const [Value, setValue] = useState("")
  const [history, sethistory] = useState([])

  const context = useContext(URLContext);
  const {History} = context;

  // Handle the input of Url for Short
  const handleChange = (e) => {
    const random = e.target.name = e.target.value;
    setValue(random)
  }

  //  Handle the Paste text in the Url Section
  const pasteText = async () => {
    const text = await navigator.clipboard.readText();
    setValue(text);
  }
  const handleAnalyticsBtn = async() =>{
    const historyData = await History(Value)
    sethistory(historyData)
    // console.log(historyData)
  }

  return (
    <>
      <div className="UrlAnalytics">
        <div className={`container analyticsBox`}>
        <div className="group container text-center my-3  ">
            <i className="icon fa-regular fa-clipboard" onClick={pasteText}></i>
            <input value={Value} placeholder="Enter the Short URL" type="search" className="input" name='shortURL' onChange={handleChange} />
          </div>
          <button className='btn btn-primary btn-rounded analyticsBtn my-3' onClick={handleAnalyticsBtn} >Show Analytics</button>
        </div>
      </div>
        <div className="container AnalyticsResults my-2 text-center" id='analytics'>
          <div className="totalSearches my-2">Total Searches : {history.length} </div>
          <div className="container row anlyticsItemsBox ">
            {history.map((e)=>{
              return <div className="col" key={e._id}>
                <VisitHistoryItems History = {e}/>
              </div>
            })}
          </div>
        </div>
    </>
  )
}

export default Analytics