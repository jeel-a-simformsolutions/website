import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/employee.png";
import Common from "./Common";

const About = () => {
    return (
        <>
        <Common 
        name="Welcome to the About Page"
        imgsrc={web}
        visit="/Contect"
        btname="Contect Now"/>
         </>
    )
}

export default About;