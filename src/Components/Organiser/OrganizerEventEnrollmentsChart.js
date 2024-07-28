import React, { useEffect, useState } from 'react';
import axiosInstance from '../Constant/BaseURL';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';
import './organizerChat.css';

function OrganizerEventEnrollmentsChart() {
    const [chartData, setChartData] = useState([]);
    const COLORS = [
        '#A10303', '#00C49F', '#FFBB28', '#FF8042', '#0088FE',
        '#8A2BE2', '#A52A2A', '#DEB887', '#5F9EA0', '#D2691E',
        '#FF7F50', '#6495ED', '#FFF8DC', '#DC143C'
    ];

    useEffect(() => {
        const fetchData = async () => {
            try {
                const organizerId = localStorage.getItem('organizerId');
                const response = await axiosInstance.post(`getEventsByOrg/${organizerId}`);
                setChartData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="container">
            <div className="chart-container">
                <ResponsiveContainer width='100%' height='100%'>
                    <PieChart>
                        <Pie
                            data={chartData}
                            dataKey='totalEnrollments'
                            nameKey='eventName'
                            cx='50%'
                            cy='50%'
                            outerRadius={150}
                            fill='#8884d8'
                            label
                        >
                            {
                                chartData.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))
                            }
                        </Pie>
                        <Tooltip />
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="chart-table-container">
                <table className="chart-table">
                    <thead>
                        <tr>
                            <th>Event Name</th>
                            <th>Total Enrollments</th>
                        </tr>
                    </thead>
                    <tbody>
                        {chartData.map((data, index) => (
                            <tr key={index}>
                                <td className="chart-event-name">{data.eventName}</td>
                                <td className="chart-enrollments">{data.totalEnrollments}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default OrganizerEventEnrollmentsChart;
