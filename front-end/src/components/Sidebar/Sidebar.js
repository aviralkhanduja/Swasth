import React from 'react'

import { poseImages } from '../../utils/pose_images'

import './Sidebar.css'

export default function DropDown({ poseList, setCurrentPose }) {
return (
        <div
        id='sidebar'  
        >
        <ul id="sidebar-list">
            {poseList.map((pose,index) => (
                <li onClick={() => setCurrentPose(pose)} key={index}>
                        <p>{pose}</p>&nbsp;&nbsp;
                        <img 
                            src={poseImages[pose]}
                            className="dropdown-img"
                            alt='yoga-posi'
                        />
                        
                </li>
            ))}
            
        </ul>
              
          
      </div>
    )
}
 