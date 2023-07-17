import '../Style/component.css';
import React, {useState, useEffect} from 'react';
//import jsonp from 'jsonp';
import MailchimpSubscribe from "react-mailchimp-subscribe";
//import InputField from './InputField';
//import { useGHStContext } from '../Context/ModelContext';

export default function NewsLetter() {

    const url = "https://gmail.us14.list-manage.com/subscribe/post?u=6a87fbd0acfde1990f478f459&id=1dc21506de";
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
                    {/*<form
                        className="subcribe-form"
                        onSubmit={(e) => handleSubmit(e)}
                        method="POST" noValidate
                    >
                        <h2>SIGN UP TO THE NEWSLETTER</h2>
                        <label>Email</label>
                        <input
                        type="email"
                        name="EMAIL"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        ></input>
                        <input
                        type="text"
                        name="FNAME"
                        onChange={(e) => setFullName(e.target.value)}
                        ></input>
                        <button type="submit">Submit</button>
                        
                            
                           
    </form>*/}
                        <MailchimpSubscribe
    url={url}
    render={({ subscribe, status, message }) => (
      <div>
        <SimpleForm onSubmitted={formData => subscribe(formData)} />
        {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
        {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
        {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
      </div>
    )}
  />
                    </div>
                </div>
                <div className="N-body" style={{width: "25%"}}>
                    <div className="N-child-1" style={{borderTopRightRadius:'1rem'}}></div>
                    <div></div>
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

