import React from 'react'

import './About.css'

export default function About() {
    return (
        <div className="about-container">
            <h1 className="about-heading">About</h1>
            <div className="about-main">
                <p className="about-content">
                    This is an realtime AI based Yoga Trainer which detects your pose how well you are doing.
                    We created this as our capstone project, and We will also deploy this project
                    so people can use it and mainly the developers can who are learning AI can learn 
                    from this project and make their own AI or they can also improve in this project.
                    This is an open source project, The code is available on the GitHub - <a href="https://github.com/aviralkhanduja/Swasth">github/aviralkhanduja</a>
                    
                    This AI first predicts keypoints or coordinates of different parts of the body(basically where
                    they are present in an image) and then it use another classification model to classify the poses if 
                    someone is doing a pose and if AI detects that pose more than 95% probability and then it will notify you are 
                    doing correctly(by making virtual skeleton green). We have used Tensorflow pretrained Movenet Model To Predict the 
                    Keypoints and building a neural network top of that which uses these coordinates and classify a yoga pose.

                    We have trained the model in python and as in tensorflowJS we can leverage the support of browser so we converted 
                    the keras/tensorflow model to tensorflowJS.
                </p>
                <div className="developer-info">
                    <h4>About developers</h4>
                    <p className="about-content">We are Team 19.
                        We love to work with technology and love to share on our leader Aviral's youtube channel, 
                        We hope this project will help you. 
                    </p>
                    <h4>Contact</h4>
                    <a href="https://www.youtube.com/channel/UCEZ9G8kseDiKaEeVLv5Ub2Q/videos"><p  className="about-content">Youtube</p></a>
                    <a href="https://github.com/aviralkhanduja?tab=repositories"><p  className="about-content">GitHub</p></a>
                </div>
            </div>
        </div>
    )
}
