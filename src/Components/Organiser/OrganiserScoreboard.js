import React, { useEffect, useState } from 'react'
import './OrganiserScoreboard.css'
import img from '../../Assets/FOOTBALL POSTER TEMPLATE 1(3).png'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../Constant/BaseURL'


const url = axiosInstance.defaults.url;

console.log("url,", url);



function OrganiserScoreboard() {

    const navigate = useNavigate()


    const [userData, setUserData] = useState();



        const getData=()=>{

        axiosInstance.post(`/viewEvents`).then(res => {

            console.log(res);


            setUserData(res.data.data);

        }).catch(err => {
            console.log(err);
        })

    }
    useEffect(() => {


getData()
      



    }, []);
    return (



        








        
            
        <div className='OrganiserScoreBoard '>
        {

(userData&&userData.length>=1)?(userData.map((x,index) => {


return(
                       
  

            <div className='OrganiserScoreBoard-MainDiv'>

                

                {/* div containing the card */}
                <div >

                    <div className='OrganiserScoreBoard-content'> {/* <--- array map in this div. Do not remove class or the page will break*/}

                        {/*a single card is from here to */}
                        <div className="card OrganiserScoreBoard-content-contain">

                        <img className='OrganiserScoreBoard-img' src={`${url}/${x?.banner?.filename}`} />{/*event image */}

                            <div className="card-body" style={{width:"100%"}}>

                                <div className="card-title">

                                    <h5 className='CardHeadTxtH5'>{x.name}</h5>{/* event name */}
                                    <h1 className='CardHeadTxtH1'>{x.category}</h1>{/* event category */}

                                </div>

                                <div className="card-text">

                                    <p className='CardTextP'>Place:{x.venue}{/* event location */}</p>
                                    <h2 className='CardTextH2'>{x.time}</h2> {/* event date and time */}
                                    <div className='OrganiserScoreBoard-button-contain'>

                                        <Link to='/OrganizerViewScore' style={{textDecoration:"none"}}><button className='OrganiserScoreBoard-button'>View Score</button></Link>

                                    </div>

                                </div>

                            </div>

                        </div>
                        {/* here is a single card  */}

                    </div>

                </div>


            </div>
)})):<h1></h1>


}
        </div>

    )

}

export default OrganiserScoreboard
