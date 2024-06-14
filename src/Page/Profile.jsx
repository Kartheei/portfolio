import React from "react";
import Footer from '../Components/Footer'
import Header from '../Components/Header'
import ProfilePicture from '../Components/ProfilePicture'
import Summary from '../Components/Summary'
import Expereince from '../Components/Experience'
import Skills from '../Components/Skills'
import Projects from '../Components/Projects'

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

                {/* Projects */}
                <Projects></Projects>

                {/* Skill */}
                <Skills></Skills>

            </div >

            {/* Footer Section */}
            <Footer></Footer>
        </>

    )
}