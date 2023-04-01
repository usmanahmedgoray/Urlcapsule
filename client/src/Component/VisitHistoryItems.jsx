import React from 'react'

const VisitHistoryItems = (props) => {
  const { timeStamp } = props.History

  // Convert to Unix Seconds Format to MiliSeconds format
  const date = new Date(timeStamp / 1)
  // console.log(date.toString())
  return (
    <>
      <ul>
        <li className='list-unstyled'>
          {date.toLocaleString("en-PK")}
        </li>
      </ul>
    </>
  )
}

export default VisitHistoryItems