import React from "react";
import '../../App.css';
import Footer from '../Footer'
import ServiceCards from '../ServiceCards'


export default function Services(){
    return (
    <><h1 className="services">SERVICES</h1>;
        <ServiceCards/>
        <Footer/>
    </>)
}