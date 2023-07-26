import React from "react";
import Footer from "../Components/Footer";

export default function MainLayout({children}) {
    return(
        <div className="main">
            <div>{children}</div>
            <Footer/>                       
        </div>
    )
}