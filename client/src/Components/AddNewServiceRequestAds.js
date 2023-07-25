
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState, useEffect } from 'react';
import { useCookies } from "react-cookie"
import { useGetUserID } from "../CustomHooks/useGetUserID"
import axios from 'axios';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';


export default function NewServiceRequestAds() {
  const userID = useGetUserID ()
  console.log("Ads service post ueseID:", userID)
  const [ cookies, _] = useCookies(["access_token"])
  console.log("acess:", cookies)
  const [category, setCategory] = useState("Education")
  const [subject, setSubject] = useState('')
  const [telephone, setTelephone] = useState('')
  const [description, setDescription] = useState ()
  const [featured, setFeatured] = useState (false)
  const [isFormSubmit, setFormSubmitted] = useState (false)
  const [location, setLocation] = useState ('')
  const navigate = useNavigate()


  const handleCategory = (e) => {
    setCategory(e.target.value)
    console.log("service category:", category)
  }

 
  const handleFeatured = (e) => {
    setFeatured(e.target.checked)
  }

  useEffect(() => {
    console.log("category:", category)
  }, [userID,
      category, 
      subject, 
      featured, ]);

  const handleSubmit = async (e) => {
    e.preventDefault()


        try {
          const response = await axios.post("/servicerequests/addnewservicerequset", 
          {
            category: category,
            subject: subject,
            location: location,
            telephone: telephone,
            description: description,
            featured: featured,
          },{
            withCredentials: true,
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${cookies.access_token}`
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
          <Form.Group as={Col} className="mb-3" controlId="formGridSubject">
           <Form.Label>Subject</Form.Label>
           <Form.Control placeholder="Safety First: Certified Electrician for Your Peace of Mind"
                         value={subject}
                         required = {true}
                         onChange={(e) => setSubject(e.target.value)}/>
          </Form.Group>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCategoryType">
            <Form.Label>Catergory</Form.Label>
              <Form.Select value={category} 
                          onChange={handleCategory}>
               {/* <option >Select...</option> */}
               <option value="Education">Education</option>
               <option value="Legal">Legal</option>
               <option value="Tax">Tax</option>
               <option value="Childcare">Childcare</option>
               <option value="General">General</option>

            </Form.Select>
          </Form.Group>


      
     <Form.Group as={Col} className="mb-3" controlId="formGridLocation">
       <Form.Label>Location</Form.Label>
       <Form.Control placeholder="Richmond"
                     value={location}
                     required = {true}
                     onChange={(e) => setLocation(e.target.value)}/>
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
