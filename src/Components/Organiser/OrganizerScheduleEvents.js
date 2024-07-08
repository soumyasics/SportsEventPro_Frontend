import React from 'react'
import './OrganizerScheduleEvents.css'

function OrganizerScheduleEvents() {

    return (

        <div className='OrganizerScheduleEvents'>

            <div className='OrganizerScheduleEvents-div-1'>

                <div className='OrganizerScheduleEvents-div-1-header'>

                    <h1 className='OrganizerScheduleEvents-div-1-h1'>Schedule Events </h1>
                    <p>Fill In The Details</p>

                </div>

                <div className='OrganizerScheduleEvents-div-1-body'>

                    <div className='OrganizerScheduleEvents-div-1-body-inpcontain'>

                        {/* left side input fields */}
                        <div className='OrganizerScheduleEvents-div-1-body-inpcontain-left'>

                            {/* event name */}
                            <div className='OrganizerScheduleEvents-div-1-body-inpcontain-left-inpcontain'>
                                
                                <label className='OrganiserScheduleEvents-div-1-body-inpcontain-label'>Event Name</label>
                                <input type='text' className='OrganizerScheduleEvents-div-1-body-inpcontain-left-inp' placeholder='Enter The Event Name'></input>
                           
                            </div>

                            {/* event category */}
                            <div className='OrganizerScheduleEvents-div-1-body-inpcontain-left-inpcontain-select'>
                                
                                <label className='OrganiserScheduleEvents-div-1-body-inpcontain-label'>Category</label>
                                <select className="OrganizerScheduleEvents-Content-Input-Country" aria-label="Default select example">

                                    <option className='OrganizerScheduleEvents-Content-Input-Select-Option' selected name="state">Select Category</option>
                                    <option value="Cricket">Cricket</option>
                                    <option value="Football">Football</option>
                                    <option value="Tennis">Tennis</option>
                                    <option value="Table Tennis">Table Tennis</option>

                                </select>
                            
                            </div>

                            {/* event venue */}
                            <div className='OrganizerScheduleEvents-div-1-body-inpcontain-left-inpcontain'>
                                
                                <label className='OrganiserScheduleEvents-div-1-body-inpcontain-label'>Venue</label>
                                <input type='text' className='OrganizerScheduleEvents-div-1-body-inpcontain-left-inp' placeholder='Venue'></input>
                            
                            </div>

                        </div>
                        
                        {/* right side input fields */}
                        <div className='OrganizerScheduleEvents-div-1-body-inpcontain-right'>
                            
                            {/* event date */}
                            <div className='OrganizerScheduleEvents-div-1-body-inpcontain-right-inpcontain'>
                                
                                <label className='OrganiserScheduleEvents-div-1-body-inpcontain-label'>Date</label>
                                <input type='Date' className='OrganizerScheduleEvents-div-1-body-inpcontain-right-inp' ></input>
                            
                            </div>

                            {/* event time */}
                            <div className='OrganizerScheduleEvents-div-1-body-inpcontain-right-inpcontain'>
                                
                                <label className='OrganiserScheduleEvents-div-1-body-inpcontain-label'>Time</label>
                                <input type='time' className='OrganizerScheduleEvents-div-1-body-inpcontain-right-inp' placeholder='Match Time'></input>
                           
                            </div>

                            {/* event banner */}
                            <div className='OrganizerScheduleEvents-div-1-body-inpcontain-right-inpcontain'>
                                
                                <label className='OrganiserScheduleEvents-div-1-body-inpcontain-label'>Upload Banner</label>
                                <input type='file' placeholder='Upload Document' className='OrganiserScheduleEvents-Content-input-banner'/>                            
                            
                            </div>

                        </div>


                    </div>

                    <button className='AButton'>Send Request</button>

                </div>

            </div>

        </div>

    )

}

export default OrganizerScheduleEvents
