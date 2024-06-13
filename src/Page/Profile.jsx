import React from "react";
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import ProfilePicture from '../Components/ProfilePicture'
import Summary from '../Components/Summary'
import Expereince from '../Components/Experience'
import Skills from '../Components/Skills'
export default function Profile() {


    return (
        <>
            {/* Header Section */}
            <Header></Header>
            {/* Body Section*/}
            <div className="container">
                {/* Profile Picture*/}
                <ProfilePicture></ProfilePicture>
                {/* Summary */}
                <Summary></Summary>
                {/* Experience */}
                <Expereince></Expereince>
                {/* Skill */}
                <Skills></Skills>
            </div >
            {/* Footer Section */}
            <Footer></Footer>
        </>

    )
}