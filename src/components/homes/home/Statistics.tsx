"use client";

import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import man1 from '/statistics/man1.jpg';
import man2 from '/statistics/man2.jpg';
import woman1 from '/statistics/woman1.jpg';  
import woman2 from '/statistics/woman2.jpg';

// Define types for the bar data and pie data
interface BarData {
  name: string;
  male: number;
  female: number;
}

interface PieData {
  name: string;
  value: number;
}

export default function Statistics() {
  const barData: BarData[] = [
    { name: '18 - 20', male: 1, female: 5 },
    { name: '21 - 30', male: 8, female: 8 },
    { name: '31 - 45', male: 15, female: 10 },
    { name: '45 - Above', male: 18, female: 14 },
  ];

  const pieData1: PieData[] = [
    { name: 'Male', value: 32 },
    { name: 'Female', value: 68 },
  ];

  const pieData2: PieData[] = [
    { name: 'Non-Diabetic', value: 32 },
    { name: 'Diabetic', value: 68 },
  ];

  const pieColors = ['rgb(179, 96, 158)', 'rgb(232, 127, 175)'];

  // Define props for renderStars
  interface RenderStarsProps {
    percentage: number;
    gender: "male" | "female";
  }

  const renderStars = ({ percentage, gender }: RenderStarsProps): JSX.Element[] => {
    const stars: JSX.Element[] = [];
    const yellowStars = Math.round(percentage / 20); // Calculate how many yellow stars based on percentage
    const blackStars = 5 - yellowStars; // The remaining stars will be black
    for (let i = 0; i < yellowStars; i++) {
      stars.push(
        <img
          src={gender === "male" ? man1 : woman1}
          alt={gender}
          key={`yellow-${i}`}
          style={{ width: "35px", height: "56px", margin: "3px" }}
        />
      );
    }
    for (let i = 0; i < blackStars; i++) {
      stars.push(
        <img
          src={gender === "male" ? man2 : woman2}
          alt={gender}
          key={`black-${i}`}
          style={{ width: "35px", height: "56px", margin: "3px" }}
        />
      );
    }
    return stars;
  };

  // Interface for PieChartComponent props
  interface PieChartProps {
    data: PieData[];
    order: number;
  }

  const PieChartComponent = ({ data, order }: PieChartProps): JSX.Element => {
    const pieHeight = order === 1 ? 400 : 200; // Set height based on key

    return (
      <div style={{ padding: '20px', margin: '20px' }}>
        <ResponsiveContainer width="100%" height={pieHeight}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius="70%"
              fill="#8884d8"
              dataKey="value"
              startAngle={-270} // Rotate the pie chart by 90 degrees counter-clockwise
            >
              {data.map((_, index) => (
                <Cell key={`cell-${index}`} fill={pieColors[index]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
        
        <p
          style={{
            margin: '30px 10px',
            width: '80%',
            textAlign: 'center',
            marginLeft: 'auto',
            marginTop: '0px',
            marginBottom: '0px',
            marginRight: 'auto',
            fontStyle: 'italic',
            fontSize: '1.1em',
          }}
        >
          {order === 1 ? 'Gender distribution of Disrupted Sleep Quality' : 'Disease Distrubition of Sleep deprived people'}
        </p>
      </div>
    );
  };

  // Bar Chart Component
  const BarChartComponent = (): JSX.Element => {
    return (
      <div style={{ padding: '20px', margin: '20px' }}>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="male" fill="rgb(179, 96, 158)" name="Male" />
            <Bar dataKey="female" fill="rgb(232, 127, 175)" name="Female" />
          </BarChart>
        </ResponsiveContainer>
        <p
          style={{
            margin: '30px 10px',
            width: '80%',
            textAlign: 'center',
            marginLeft: 'auto',
            marginTop: '0px',
            marginBottom: '0px',
            marginRight: 'auto',
            fontStyle: 'italic',
            fontSize: '1.1em',
          }}
        >
          Age Distribution of Disrupted Sleep Quality
        </p>
      </div>
    );
  };

  return (
    <section id="statistics">
      <div className="container section-padding" style={{ paddingBottom: '0px' }}>
        <div className="row">
          <div className="col-12 wow fadeInUp wow fadeIn">
            <div className="section-title text-center">
              <span>NapLytics</span>
              <h2>Sleep Distribution</h2>
            </div>
          </div>

          <div className="col-md-6 col-12 wow fadeIn">
            <PieChartComponent data={pieData1} order={1} />
          </div>

          <div className="col-md-6 col-12 wow fadeIn">
            <BarChartComponent />
          </div>
        </div>

        {/* New Row for the second Pie chart and Star ratings */}
        <div className="row">
          <div className="col-md-6 col-12 wow fadeIn">
            <div style={{ padding: '20px', margin: '20px' }}>
              <div style={{ textAlign: 'center', height : '200px' }}>
                <div>
                  <div>{renderStars({ percentage: pieData2[0].value, gender: "male" })}</div>
                </div>
                <div>
                  <div>{renderStars({ percentage: pieData2[1].value, gender: "female" })}</div>
                </div>
              </div>
                <div className='text-center'>
                    <p style={{margin : '10px 0 0 0'}}>Male vs Female Disease Distrubition</p>
                </div>
            </div>
          </div>
          <div className="col-md-6 col-12 wow fadeIn">
            <PieChartComponent data={pieData2} order={2} />
          </div>
        </div>
      </div>
    </section>
  );
}
