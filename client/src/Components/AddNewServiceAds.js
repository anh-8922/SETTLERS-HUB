
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
import { useNavigate } from 'react-router-dom';


export default function NewServiceAds() {
  const userID = useGetUserID ()
  console.log("Ads service post ueseID:", userID)
  const [ cookies, _] = useCookies(["access_token"])
  console.log("acess:", cookies)
  const [category, setCategory] = useState('Plumber')
  const [subject, setSubject] = useState('')
  const [telephone, setTelephone] = useState('')
  const [rate, setRate] = useState('')
  const [experience, setExperience] = useState ("")
  const [qulification, setQulification] = useState ('')
  const [description, setDescription] = useState ()
  const [featured, setFeatured] = useState (false)
  const [isFormSubmit, setFormSubmitted] = useState (false)
  const [location, setLocation] = useState ('')
  const navigate = useNavigate()


  const handleCategory = (e) => {
    setCategory(e.target.value)
    console.log("service category:", category)
  }

  const handleExperience = (e) => {
    setExperience(e.target.value)
    console.log("experiance:",experience)
  }
 
  const handleFeatured = (e) => {
    setFeatured(e.target.checked)
  }

  useEffect(() => {
    console.log("category:", category)
  }, [userID,
      category,  
      rate, 
      subject, 
      featured, ]);

  const handleSubmit = async (e) => {
    e.preventDefault()


        try {
          const response = await axios.post("/serviceprovider/addnewserviceprovider", 
          {
            category: category,
            subject: subject,
            location: location,
            rate: rate,
            experience: experience,
            qulifications: qulification,
            telephone: telephone,
            description: description,
            featured: featured,
          },{
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
            },
          });
    
          
          console.log("Response:", response);
          if (response.data.success === true){
            setFormSubmitted(true)
            // navigate("/profile")
          }
          
        } catch (error) {
          console.log("Error:", error);
        }

  }

  
  return (
    <div>
      { !isFormSubmit ? (
        <Form onSubmit={handleSubmit}>

        <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCategoryType">
        <Form.Label>Catergory</Form.Label>
         <Form.Select value={category} 
                      onChange={handleCategory}>
           {/* <option >Select...</option> */}
           <option value="Plumber">Plumber</option>
           <option value="Electrician">Electrician</option>
           <option value="HVAC Technician">HVAC Technician</option>
           <option value="Mechanic">Mechanic</option>
           <option value="Painter">Painter</option>
           <option value="Gardener/ Landscaper">Gardener/ Landscaper</option>
           <option value="General">General</option>
          
         </Form.Select>
        </Form.Group>

        <Form.Group as={Col} className="mb-3" controlId="formGridSubject">
       <Form.Label>Subject</Form.Label>
       <Form.Control placeholder="Safety First: Certified Electrician for Your Peace of Mind"
                     value={subject}
                     required = {true}
                     onChange={(e) => setSubject(e.target.value)}/>
     </Form.Group>
      
     <Form.Group as={Col} className="mb-3" controlId="formGridLocation">
       <Form.Label>Location</Form.Label>
       <Form.Control placeholder="Richmond"
                     value={location}
                     required = {true}
                     onChange={(e) => setLocation(e.target.value)}/>
     </Form.Group>
       

       </Row>
        <Row className="mb-3">

        <Form.Group as={Col} controlId="formGridRate">
       <Form.Label>Rate p/hr</Form.Label>
       <InputGroup className="mb-3" as={Col} >
         <InputGroup.Text>£</InputGroup.Text>
         <Form.Control type="text" 
                       required = {true}
                       placeholder="Rate"
                       value={rate}
                       onChange={(e) => setRate (e.target.value)} />
                       
        
         </InputGroup>
         </Form.Group>

        <Form.Group as={Col} controlId="formGridExperianced">
        <Form.Label>Experience</Form.Label>
         <Form.Select value={experience} 
                      onChange={handleExperience}>
           {/* <option >Select...</option> */}
           <option value="<1 year">{"< 1 year"}</option>
           <option value="1 year">1 year</option>
           <option value="2 year">2 years</option>
           <option value="3 year">3 years</option>
           <option value="> 3 year"> {"> 3 years"}</option>
          
         </Form.Select>
        </Form.Group>


     <Form.Group as={Col} controlId="formGridQulification">
       <Form.Label>Qulification </Form.Label>
       <Form.Control placeholder="NVQ level  "
                     value={qulification}
                     required = {true}
                     onChange={(e) => setQulification(e.target.value)}/>
         </Form.Group>

         <Form.Group as={Col} controlId="formGridTelephone">
       <Form.Label>Telephone Number </Form.Label>
       <Form.Control placeholder="07"
                     value={telephone}
                     required = {true}
                     onChange={(e) => setTelephone(e.target.value)}/>
         </Form.Group>

        </Row>





   
     <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
       <Form.Label> Description</Form.Label>
       <Form.Control as="textarea" 
                     required = {true}
                     rows={10} 
                     type="text" 
                     value={description} 
                     onChange={(e) => setDescription(e.target.value)} />
     </Form.Group>

     <Form.Group className="mb-3" id="formGridCheckbox">
       <Form.Check type="checkbox" label="Featured"  checked={featured} onChange={handleFeatured}/>
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
                <strong style={{ color: 'white' }}>Posted Successfully!</strong>
              </Alert>
              </Stack>
        </div>
      )}
    

    </div>
  );
}
