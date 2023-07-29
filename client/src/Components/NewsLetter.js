import '../Style/component.css';
import React, {useState, useEffect} from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import phone1 from '../Assets/phone1.png';

export default function NewsLetter() {

    const url = `https://gmail.us14.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
    const SimpleForm = () => <MailchimpSubscribe url={url}/>

    return(
        <div className="newsletter"> 
            
            <div className='newsletter-content'>
                <div className="N-body" style={{width: "15%"}}>
                    <div className="N-child-1" style={{borderTopLeftRadius:'1rem'}}></div>
                    <div id="child-1a">
                        <h5>NEWSLETTER</h5>
                        <h2>SETTLER HUB</h2>
                    </div>
                </div>
                <div className="N-body" style={{width: "60%"}}>
                    <div className="N-child-1" style={{display: "flex", 
                                                        flexDirecton: "row", 
                                                        justifyContent: "center", 
                                                        gap:"2rem"}}>
                        <h5>NEWS</h5><h5>NEWS</h5><h5>NEWS</h5><h5>NEWS</h5><h5>NEWS</h5>
                    </div>
                    <div className="N-child-center">
                   
                    <MailchimpSubscribe
                        url={url}
                        render={({ subscribe, status, message }) => (
                        <div>
                            <h2>SIGN UP TO THE NEWS LETTER</h2>
                            <SimpleForm onSubmitted={formData => subscribe(formData)}/>
                            {status === "sending" && <div style={{ color: "blue", }}>sending...</div>}
                            {status === "error" && <div style={{ color: "red", }} dangerouslySetInnerHTML={{__html: message}}/>}
                            {status === "success" && <div style={{ color: "green",}}>Subscribed !</div>}
                        </div>
                        )}
                    />
                    </div>
                </div>
                <div className="N-body" style={{width: "25%"}}>
                    <div className="N-child-1" style={{borderTopRightRadius:'1rem'}}>ALL ABOARD</div>
                    <div>
                        <div style={{width:'15rem', height:'15rem', backgroundSize:'cover', backgroundImage: `url("${phone1}")`}}></div>
                        <h6>WWW.SETTLERHUB.COM</h6>
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}



{/*export function MailchimpFormModel(props) {
    const postUrl = `https://gmail.us14.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
    return(
        <>
            <MailchimpSubscribe
                url = {postUrl}
                render = {({ subscribe, status, message }) => (
                    <NewsLetter
                        status = {status}
                        message = {message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </>
    )
                */}

