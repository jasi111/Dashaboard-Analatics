import React from 'react';
import { Bar,Line,Pie,Doughnut, Bubble } from 'react-chartjs-2';
import "./Dashboard.css"
const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  
  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  
  const Products = () => (
    <>
    {/* <div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
     
      <div className=" row mx-auto">
      <div className="chartFlex">
          <div>
      <Bar data={data}width={100} height={100} options={options} />
      </div>
      <div>
      <Bar data={data} options={options} />
      </div>
      </div>
      </div>
      </div> */}
<div className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
     
<div class="flex-container">
  <div class="flex-item-left">
  <Bar data={data}width={100} height={100} options={options} />

  </div>
  <div class="flex-item-right">
  <Line data={data}width={100} height={100} options={options} />
 
  </div>
  <div className="flex-item-left">
  <Doughnut data={data}width={100} height={100} options={options} />
  </div>
 
 
  </div>
 

</div>
    </>
  );
  


export default Products
