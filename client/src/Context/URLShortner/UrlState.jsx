import React from 'react';
import URLContext from './UrlContext';

const UrlState = (props) => {
  // const visitHistory = []

  // const [History, setHistory] = useState(visitHistory)
 
  const url = 'http://localhost:8001';

  // Create Short url in the Data

  const createShortUrl = async(data)=>{
    const response = await fetch(`${url}/api/url`,{
      method : 'POST',
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({url:data})
    })
    const json = await response.json();
    const Shortid = json.Shortid;
    console.log(data);
    return Shortid; 
  }


  const Shorturl = async(data)=>{
    let temp = await createShortUrl(data);
    return await temp
    }

  // Get the Analytics
  const getAnalytics = async(data)=>{
    let shortid = data.slice(30,40)
    console.log(shortid)
    const response = await fetch(`${url}/api/url/analytics/${shortid}`,{
      method : 'GET',
      headers: {
        "Content-Type": "application/json",
      }
    })
    const json = await response.json();
    // console.log(json.visitHistory)
     return json.visitHistory
  }

  const History = async(data)=>{
    let temp = await getAnalytics(data);
    return temp
    }

  return (
    <URLContext.Provider value={{Shorturl,History}}>
        {props.children}
    </URLContext.Provider>
  )
}

export default UrlState