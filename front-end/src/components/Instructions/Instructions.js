import React, { useState } from 'react'

import { poseInstructions } from '../../utils/data'

import { poseImages } from '../../utils/pose_images'

import './Instructions.css'

export default function Instructions({ currentPose,startYoga }) {

    const [instructions, setInsntructions] = useState(poseInstructions)

    return (
        
        <div id='instructions'>
            <h3 style={{textAlign:'center',color:'rgb(253, 97, 97)',marginTop:"1.5rem",marginBottom:"1.5rem"}}>General Instructions</h3>
            <div className="instructions-container">
                <ul className="instructions-list">
                    {instructions[currentPose].map((instruction) => {
                        return(
                            <li className="instruction">{instruction}</li>
                        )
                        
                    })}
                </ul>
                <img 
                    className="pose-demo-img"
                    src={poseImages[currentPose]}
                    alt="yoga-posi"
                />
            </div>
            <button
                onClick={startYoga}
                className="start-yoga">Start Pose
            </button>
        </div>
    )
}
