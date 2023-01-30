import Navbar from '../components/Navbar/Navbar';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {StyledTitle,StyledSubTitle, Avatar,
} from "../components/Styles";
export default function Dashboard(props) {
    return (
        <div>
            <Navbar></Navbar>
            <StyledTitle size={65}>
                    Welcome {props.name},
            </StyledTitle>
            <StyledSubTitle size={27}>
                You can access our services by utilizing the Navbar
            </StyledSubTitle>
        </div>
    );
}