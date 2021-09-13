import React, {useState,useEffect} from 'react';
import {Bar} from "react-chartjs-2";
import "./Dashboard.css"

function Dashboard() {

    const [chartData, setChartData] = useState({})

    const fetchPrices = async () => {
        const res = await fetch("https://api.coincap.io/v2/assets/?limit=5")
        const data = await res.json()
        console.log(data)
        setChartData({
            labels: data.data.map((crypto) => crypto.name),
            datasets: [
              {
                label: "Price in USD",
                data: data.data.map((crypto) => crypto.priceUsd),
                backgroundColor: [
                  "#ffbb11",
                  "#ecf0f1",
                  "#50AF95",
                  "#f3ba2f",
                  "#2a71d0"
                ]
              }
            ]
          })
        }
      

    
useEffect(() => {
   fetchPrices()
}, [])
    return (
        <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2" >Dashboard</h1>

        <div className="btn-toolbar mb-2 mb-md-0">
          <div className="btn-group me-2">
            <button type="button" className="btn btn-sm btn-outline-secondary">Share</button>
            <button type="button" className="btn btn-sm btn-outline-secondary">Export</button>
          </div>
          <button type="button" className="btn btn-sm btn-outline-secondary dropdown-toggle">
            <span data-feather="calendar"></span>
            This week
          </button>
        </div>
      </div>
      
      <div className="d-flex justify-content-center ">
<div>
          <Bar
          data={chartData}
          width={100}
          heigh={100}
          options={{
            responsive:true,
            plugins: {
              title: {
                display: true,
                text: "Cryptocurrency prices"
              },
              
              legend: {
                display: true,
                position: "bottom"
             },
             
                scales: {
                    x: {
                        type: 'time',
                        min: new Date('2019-01-01').valueOf(),
                        max: new Date('2019-12-31').valueOf()
                    },
                    y: {
                        type: 'linear',
                        min: 0,
                        max: 100
                    }
                }
            
             
            }
            
          }}
        />
         
         </div>     
         <div>
          <Bar
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Cryptocurrency prices"
              },
              legend: {
                display: true,
                position: "bottom"
             }
            }
          }}
        />
         </div>
         </div>
         </div>
       
   
      

  
       
       
    )
}

export default Dashboard;
