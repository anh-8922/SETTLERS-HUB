
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState, useEffect } from 'react';
import { useCookies } from "react-cookie"
import { useGetUserID } from "../CustomHooks/useGetUserID"
import axios from 'axios';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { useNavigate, useParams } from 'react-router-dom';
import useFetchData from '../CustomHooks/useFetchData';
import profile from "../Assets/profile.png"

export default function EditProfile () {
    const [gender, setGender] = useState('')
    const [title, setTitle] =useState('Mr')
    const [addressline1, setAddressline1] = useState('')
    const [addressline2, setAddressline2] = useState('')
    const [city, setCity] = useState ('')
    const [ postCode, setPostCode] = useState ('')
    const [about, setAbout] = useState('')
    const [telephone, setTelephone] = useState()
    const [image, setImage] = useState({
        url: profile,
        file: null,
    })
    const [isFormSubmit, setFormSubmitted] = useState (false)

    const navigate = useNavigate ()
    const handleGender = (e) => {
        setGender(e.target.value)
        console.log("Gendery:", gender)
      }
    console.log("title:", title)

    const handleImageChange = (e) => {
        console.log("the file is", e.currentTarget.files[0]);
    
        if (!e.currentTarget.files[0]) return;
    
        if (e.currentTarget.files[0].size > 1000000) {
          alert("This file is bigger than 10kB");
          return;
        }
        setImage({
          url: URL.createObjectURL(e.currentTarget.files[0]),
          file: e.currentTarget.files[0],
        });
      };

    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return(
        <div>
      { !isFormSubmit ? (
        <Form onSubmit={handleSubmit}>
        {/* <div>
        <label className="cursorointer">
          Select your Profile image
          <input
            id="file"
            type="file"
            className="hidden"
            onChange={handleImageChange}
            accept="image/png, image/jpeg"
          />
        </label>
      </div> */}
        <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Select your Profile image</Form.Label>
            <Form.Control type="file" 
                          onChange={handleImageChange}/>
      </Form.Group>
      <div>
        <img
          className="Upladed-image"
          style={{width:"150px", height:"150px"}}
          src={image.url || profile}
          alt="profile"
        />
      </div>
        <Row className="mb-3">
        <Form.Label>Gender</Form.Label>
        <div key={`inline-radio`} className="mb-3">
        
        <Form.Check
           inline
           label="Male"
           name="group1"
           type="radio"
           id="male"
           value="Male"
           checked={gender === 'Male'}
           onChange={handleGender}
           
         />
         
        <Form.Check
           inline
           label="Female"
           name="group1"
           type="radio"
           id="female"
           value="Female"
           checked={gender === 'Female'} 
           onChange={handleGender}
         />

        <Form.Check
           inline
           label="Other"
           name="group1"
           type="radio"
           id="other"
           value="Other"
           checked={gender === 'Other'} 
           onChange={handleGender}
         /> 
        </div>
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridPropertyType">
        <Form.Label>Title</Form.Label>
         <Form.Select value={title} 
                      onChange={(e) => setTitle(e.target.value)}>
           {/* <option >Select...</option> */}
           <option value="Mr">Mr</option>
           <option value="Mrs">Mrs</option>
           <option value="Miss">Miss</option>
           <option value="Ms">Ms</option>
           <option value="Dr">Dr</option>
           <option value="Sir">Sir</option>
           <option value="Professor">Professor</option>
           
          
         </Form.Select>
        </Form.Group>

        <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
       <Form.Label>Telephone</Form.Label>
       <Form.Control placeholder="077"
                     value={telephone}
                     onChange={(e) => setTelephone(e.target.value)}/>
     </Form.Group>
        </Row>

       




        <Row className="mb-3">
     <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
       <Form.Label>Address</Form.Label>
       <Form.Control placeholder="Apartment, studio, or floor"
                     value={addressline1}
                     required = {true}
                     onChange={(e) => setAddressline1(e.target.value)}/>
     </Form.Group>

     <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
       <Form.Label>Address line 2</Form.Label>
       <Form.Control placeholder= "1234 Main St" 
                     value={addressline2}
                     required = {true}
                     onChange={(e) => setAddressline2(e.target.value)}/>
     </Form.Group>
     </Row>

     <Row className="mb-3">
       <Form.Group as={Col} controlId="formGridCity">
         <Form.Label>City</Form.Label>
         <Form.Control value={city}
                       required = {true}
                       onChange={(e) => setCity(e.target.value)}/>
       </Form.Group>

       <Form.Group as={Col} controlId="formGridZip">
         <Form.Label>Post Code</Form.Label>
         <Form.Control  value={postCode}
                        required = {true}
                        onChange={(e) => setPostCode(e.target.value)} />
       </Form.Group>
     </Row>
     {/* <Form.Group controlId="formFileMultiple" className="mb-3">
       <Form.Label>Profile Image</Form.Label>
       <Form.Control type="file" 
                     required = {true}
                     name="images"
                     onChange={handleImageChange} />
     </Form.Group> */}

    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
       <Form.Label>About</Form.Label>
       <Form.Control as="textarea" 
                     rows={10} 
                     type="text" 
                     value={about} 
                     onChange={(e) => setAbout(e.target.value)} />
     </Form.Group>


     <Button variant="primary" type="submit">
       Submit
     </Button>
   </Form>
      ): ( 
        <div style={{display:"flex", justifyContent:"flex-end", marginRight:"3rem"}}>
        <Stack sx={{ width: '30%' }} spacing={2} onClick={() => navigate("/profile")}>
              <Alert variant="filled" severity="success">
                <AlertTitle style={{ color: 'white' }}>Sucess</AlertTitle>
                <strong style={{ color: 'white' }}>Profile Updated Successfully!</strong>
              </Alert>
              </Stack>
        </div>
      )} 
    

    </div>
    )
}