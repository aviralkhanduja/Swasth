

const calorieph={
    Tree:348, 
    Chair:95, 
    Cobra:162, 
    Warrior:400, 
    Dog:488.44,
    Shoulderstand:163.8, 
    Traingle:100
}
export default function Feedback(props){
    const {time,pose}=props.appPose;
    const calories=(time/3600)*calorieph[pose];
    return (
        <div style={{backgroundColor:"white",width:"40%",height:"38rem",margin:"auto",padding:"14px",borderRadius:"10px"}}>
            <h2 style={{textAlign:"center",color:"rgb(253, 97, 97)"}}>Feedback</h2>
            <p>Hi, The feedback has been generated utilizing your correct position time only.We dynamically prepare the calories burned as per the 
                weight,height and posture time of an individual.
            </p>
            <p>Here are your stats:</p>
            <ul>
                <li style={listStyle}>
                    Your Pose: {pose}
                </li>
                <li style={listStyle}>
                    Your Time: {time}
                </li>
                <li style={listStyle}>
                    Calories Burnt: {calories}
                </li>
                <li style={listStyle}>
                    Your performance was <span style={{color:"rgb(253, 97, 97)",fontWeight:"600",fontSize:"1.2rem"}}>infinitely</span> better than the last time
                </li>
            </ul>
            <h3 style={{marginTop:'2rem'}}>Quote for you, Aviral:</h3>
            <p style={{fontWeight:"700",fontSize:"1rem",color:"rgb(253, 97, 97)"}}>“A fit body, a calm mind, a house full of love. These things cannot be bought – they must be earned.”</p>
        </div>
    );
}
const listStyle={
    marginTop:"1rem"
}