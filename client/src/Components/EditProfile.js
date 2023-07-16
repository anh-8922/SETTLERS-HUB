
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
import Spinner from '../Features/Spinner';

export default function EditProfile () {
    const userID = useGetUserID ()
    console.log("Add property post ueseID:", userID)
    const [ cookies, _] = useCookies(["access_token"])
    console.log("acess:", cookies)
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
    const {data} = useFetchData(`http://localhost:5000/user/listoneuser/${userID}`)
    console.log("data:", data)

    const navigate = useNavigate ()
    

    useEffect(() => {
      console.log("gender:", gender);
    }, [
      userID,
      gender,
      title,
      about,
      telephone,
      addressline1,
      addressline2,
      city,
      postCode,
    ]);
    
    useEffect(() => {
      if (data && data.selectedUser) {
        const {
          gender,
          title,
          address,
          image,
          telephone,
          about,
        } = data.selectedUser;
        const addressline1 = address && address.length > 0 ? address[0].addressline1 : " "
        const addressline2 = address && address.length > 0 ? address[0].addressline2 : " "
        const city = address && address.length > 0 ? address[0].city : '';
        const postCode = address && address.length > 0 ? address[0].postcode : ''
        const profileImage = image ? `https://res.cloudinary.com/dgnqjr0we/image/upload/${image}` : profile 
        setGender(gender);
        setTitle(title);
        setAddressline1(addressline1);
        setAddressline2(addressline2);
        setCity(city);
        setPostCode(postCode);
        setImage(profileImage);
        setTelephone(telephone);
        setAbout(about);
      } 
      // else {
      //   setGender();
      //   setTitle();
      //   setAddressline1();
      //   setAddressline2();
      //   setCity();
      //   setPostCode();
      //   setImage({
      //     url: profile,
      //     file: null,
      // });
      //   setTelephone();
      //   setAbout();}
      
    }, [data]);



    const handleGender = (e) => {
      setGender(e.target.value)
      console.log("Gendery:", gender)
    }
    console.log("title:", title)
    const handleImageChange = (e) => {
        console.log("the file is", e.currentTarget.files[0]);
    
        if (!e.currentTarget.files[0]) return;
    
        // if (e.currentTarget.files[0].size > 1000000) {
        //   alert("This file is bigger than 10kB");
        //   return;
        // }
        setImage({
          url: URL.createObjectURL(e.currentTarget.files[0]),
          file: e.currentTarget.files[0],
        });
      };


    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append("owner", userID )
        // formData.append("cookies", cookies )
        formData.append("gender", gender)
        formData.append("address[0][addressline1]", addressline1)
        formData.append("address[0][addressline2]", addressline2)
        formData.append("address[0][city]", city)
        formData.append("address[0][postcode]", postCode)
        formData.append("title", title)
        formData.append("telephone", telephone)
        formData.append("about", about)
        formData.append("image", image.file || image)
        

        console.log("formData:", formData)
        try {
          const response = await axios.put(`http://localhost:5000/user/updateprofile`, formData, {
          withCredentials: true,
            headers: {
              "Content-type": "multipart/form-data; charset=UTF-8",
            },
          });
          
          setFormSubmitted(true);
          console.log("form data", formData)
          console.log("Response:", response);
          
          // navigate("/user");
        } catch (error) {
          console.log("Error:", error);
        }

  }
  const handleClose =() => {

    navigate("/profile")
  }
  
    

    return(
        <div>
      { !isFormSubmit ? (
        <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formFile" className="mb-3">
            <Form.Label>Select your Profile image</Form.Label>
            <Form.Control type="file" 
                          onChange={handleImageChange}/>
      </Form.Group>
      <div>
        <img
          className="Upladed-image"
          style={{width:"150px", height:"150px"}}
          src={image.file ? URL.createObjectURL(image.file) :image }
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
                    //  required = {true}
                     onChange={(e) => setAddressline1(e.target.value)}/>
     </Form.Group>

     <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
       <Form.Label>Address line 2</Form.Label>
       <Form.Control placeholder= "1234 Main St" 
                     value={addressline2}
                    //  required = {true}
                     onChange={(e) => setAddressline2(e.target.value)}/>
     </Form.Group>
     </Row>

     <Row className="mb-3">
       <Form.Group as={Col} controlId="formGridCity">
         <Form.Label>City</Form.Label>
         <Form.Control value={city}
                      //  required = {true}
                       onChange={(e) => setCity(e.target.value)}/>
       </Form.Group>

       <Form.Group as={Col} controlId="formGridZip">
         <Form.Label>Post Code</Form.Label>
         <Form.Control  value={postCode}
                        // required = {true}
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
        <div style={{display:"flex", justifyContent:"flex-end", alignItems:"flex-end", marginRight:"3rem"}} onClick={handleClose}>
        <Stack sx={{ width: '30%' }} spacing={2} >
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