"use client"

import { PieChart, Pie, Tooltip } from 'recharts';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Legend, ResponsiveContainer  } from 'recharts';

export default function Statistics() {


    const barData = [
        { name: 'Mon', uv: 4000, pv: 2400, amt: 2400 },
        { name: 'Tue', uv: 3000, pv: 1398, amt: 2210 },
        { name: 'Wed', uv: 2000, pv: 9800, amt: 2290 },
        { name: 'Thu', uv: 2780, pv: 3908, amt: 2000 },
        { name: 'Fri', uv: 1890, pv: 4800, amt: 2181 },
        { name: 'Sat', uv: 2390, pv: 3800, amt: 2500 },
        { name: 'Sun', uv: 3490, pv: 4300, amt: 2100 },
      ];
    
    const pieData = [
        { name: 'Excellent', value: 40 },
        { name: 'Good', value: 30 },
        { name: 'Not Bad', value: 30 },
        { name: 'Not Good', value: 10 },
        { name: 'Bad', value: 10 },
    ];

    const BarChartComponent = () => {
        return (
          <div style={{ padding: '20px', margin : '20px' }}>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={barData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="pv" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
            <p style={{margin : '30px 10px', width : '80%', textAlign : 'center',marginLeft : 'auto', marginTop : '0px', marginBottom : '0px', marginRight : 'auto', fontStyle : 'italic', fontSize : '1.1em'}}>
                Over 75% of respondents expressed a preference for virtual support groups as a means of discussing their sleep challenges and sharing strategies for better rest.
            </p>
          </div>
        );
    };


    const PieChartComponent = () => {
        return (
          <div style={{ padding: '20px', margin : '20px' }}>
            <p style={{margin : '30px 10px', width : '80%', textAlign : 'center',marginLeft : 'auto', marginTop : '0px', marginBottom : '0px', marginRight : 'auto', fontStyle : 'italic', fontSize : '1.1em'}}>
                The results of the recent sleeping survey indicate that participants reported a significant improvement in sleep quality after implementing support measures such as mindfulness and sleep hygiene practices.
            </p>
            <ResponsiveContainer width="100%" height={400}>
                <PieChart>
                <Pie data={pieData} cx='50%' cy='50%' labelLine={false} outerRadius='70%' fill="#8884d8" dataKey="value">
                    {/* You can add custom colors or more slices */}
                </Pie>
                <Tooltip />
                </PieChart>
            </ResponsiveContainer>
          </div>
        );
    };



    return (

        <section id='statistics'>
            <div className='container section-padding' style={{paddingBottom : '0px'}}>
                <div className='row'>
                    <div className="col-12 wow fadeInUp wow fadeIn">
                        <div className="section-title text-center">
                            <span>Statistics</span>
                            <h2>Comparing Sleep Health Across Countries</h2>
                        </div>
                    </div>

                    <div className='col-md-6 col-12 wow fadeIn'>
                        <PieChartComponent />
                    </div>

                    <div className='col-md-6 col-12 wow fadeIn'>
                        <BarChartComponent />
                    </div>
                </div>
            </div>
        </section>
    )
}
