import { Link } from "react-router-dom";
export default function NewsFeed(){
    return (
        <div>
            <div style={{width:"fit-content",margin:'auto',marginTop:"3rem",fontSize:"1.2rem",color:"rgb(253, 97, 97)",textAlign:"center",fontWeight:"bold"}}>WEB SCRAPING,Coming Soon
            </div>
            <Link to='/localhost:8000/login/auth/google'>
                <div style={{color:"blue",textAlign:"center"}}>google</div>
            </Link>
        </div>
    );
}