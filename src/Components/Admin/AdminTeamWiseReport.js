import './AdminTeamWiseReport.css';
import img from "../../Assets/Back Button.svg";
import img2 from '../../Assets/Search Button.svg';
import React, { useEffect, useState } from 'react';
import axiosInstance from '../Constant/BaseURL';
import { Link } from 'react-router-dom';

function AdminTeamWiseReport() {
    const [ticketData, setTicketData] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [filteredData, setFilteredData] = useState([]);
    const [eve1, setEve1] = useState([]);

    useEffect(() => {
        axiosInstance.post('viewPAprvdEnrollmentsforTicket').then(res => {
            setEve1(res.data.data);
            setFilteredData(res.data.data);
        }).catch(err => {
            console.log(err);
        });
    }, []);

    const handleSearch = (event) => {
        const { value } = event.target;
        setSearchInput(value);
        if (value === "") {
            setFilteredData(eve1);
        } else {
            const filtered = eve1.filter((team) => 
                team.coachId.name.toLowerCase().includes(value.toLowerCase())
            );
            setFilteredData(filtered);
        }
    };

    return (
        <div className='container AdminTeamWiseReportMainDivBG'>
            <div className='AdminTeamWiseReport-header'>
                <button className='AdminTeamWiseReport-headercontainer-BackButton'>
                    <Link to='/admindashboard'><img src={img} alt=' ' /></Link>
                </button>
                <h1 className='AdminTeamWiseReport-headercontainer-h1'>Team Wise Report</h1>
            </div>

            <div className='AdminTeamWiseReport-search-container'>
                <label>Team Name:</label>
                <input 
                    type='search' 
                    placeholder='Search Here' 
                    className='AdminTeamWiseReport-search'
                    value={searchInput}
                    onChange={handleSearch}
                />
                <button className='AdminTeamWiseReport-search-button'><img src={img2} alt=' ' /> </button>
            </div>

            <div className='AdminTeamWiseReport-results'>
                {searchInput && (
                    <h2 className='AdminTeamWiseReport-team-name'>Results for: {searchInput}</h2>
                )}
                {filteredData.length === 0 ? (
                    <p className='AdminTeamWiseReport-no-data'>No data found</p>
                ) : (
                    <table className='AdminTeamWiseReport-Table container'>
                        <thead>
                            <tr className='AdminTeamWiseReport-tableHeadRow container'>
                                <td className='col-1 AdminTeamWiseReport-tableHeadData-start'>Sl</td>
                                <td className='col-2 AdminTeamWiseReport-tableHeadData'>Team Name</td>
                                <td className='col-4 AdminTeamWiseReport-tableHeadData'>Event Name</td>

                                <td className='col-2 AdminTeamWiseReport-tableHeadData'>Score</td>
                                <td className='col-3 AdminTeamWiseReport-tableHeadDataEnd'>Result</td>
                            </tr>
                        </thead>
                        <tbody className='tbodyclass'>
                            {Array.isArray(filteredData) && filteredData.map((data, index) => (
                                <tr key={index} className='AdminTeamWiseReport-tableBodyRow container'>
                                    <td className='col-1 AdminTeamWiseReport-tableBodyData'>{index + 1}</td>
                                    <td className='col-2 AdminTeamWiseReport-tableBodyData'>{data.coachId.teamName}</td>
                                    <td className='col-4 AdminTeamWiseReport-tableBodyData'>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
                                            <div style={{ display: "flex", flexDirection: 'row', gap: '8px' }}>
                                                <h1 className='AdminTeamWiseReport-body-h1-2'>{data.eventId.name}</h1>

                                                <h1 className='AdminTeamWiseReport-body-h1-2'>{data.eventId.category}</h1>
                                            </div>
                                            <div className='AdminTeamWiseReport-body-2'>
                                                <h5 className='AdminTeamWiseReport-body-h5'>Venue: {data.eventId.venue}</h5>
                                                <h2 className='AdminTeamWiseReport-body-h2'>{data.eventId.date.slice(0, 10)}</h2>
                                            </div>
                                        </div>
                                    </td>
                                    <td className='col-2 AdminTeamWiseReport-tableBodyData'>{data.score}</td>
                                    <td className='col-3 AdminTeamWiseReport-tableBodyData-end'>{data.position}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </div>
    )
}

export default AdminTeamWiseReport;
