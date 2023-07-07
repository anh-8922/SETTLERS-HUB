
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState, useEffect } from 'react';
import useFetchData from '../CustomHooks/useFetchData';
import axios from 'axios';


export default function NewProperty() {
  const [category, setCategory] = useState('')
  const [propertyType, setPropertyType] = useState('Flat')
  const [availableOn, setAvailableOn] = useState ('')
  const [rate, setRate] = useState('')
  const [addressline1, setAddressline1] = useState('')
  const [addressline2, setAddressline2] = useState('')
  const [city, setCity] = useState ('')
  const [ postCode, setPostCode] = useState ('')
  const [ beds, setBeds] = useState (1)
  const [ baths, setBaths] = useState (1)
  const [selectedImages, setSelectedImages] = useState([{url:'', file:null}])
  const [longitude, setLongitude] = useState()
  const [latitude, setLatitude] = useState ()
  const [description, setDescription] = useState ()
  const [featured, setFeatured] = useState (false)

  const myLocationAPI = process.env.REACT_APP_MY_GOOGLE_API

  const handleCategoryChange = (event) => {
    setCategory(event.target.value)
    console.log("category:", category)
  }

  const handlePropertyType = (e) => {
    setPropertyType(e.target.value)
    console.log("property type:", propertyType)
  }

  const handleDateChange = (e) => {
    setAvailableOn(e.target.value)
    console.log('Available on:', availableOn)
  }

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files)

    if (files.length > 5) {
      alert("You can only upload up to 5 files.")
      return
    }

    if (files.length = 0) {
      alert("Upload an image")
      return
    }

    const updatedImages = files.map((file) => ({
      url: URL.createObjectURL(file),
      file: file,
    }));
    setSelectedImages(updatedImages)
    console.log("updated images:", updatedImages)

  }

  const handleFeatured = (e) => {
    setFeatured(e.target.checked)
  }

  const handlePostCode = (e) => {
    setPostCode(e.target.value)
  }

  const fetchCoordinates = async () => {
    try {
      const response = await axios.get(`https://postcodes.io/postcodes/${postCode}`);
      const results = response.data.result;
     
       const longitude = results.longitude
        const latitude = results.latitude
        setLongitude(longitude);
        setLatitude(latitude);
        console.log("long:", longitude)
        console.log("lat:", latitude)
      
    } catch (error) {
      console.error('Error fetching coordinates:', error);
    }
  };

  useEffect(() => {
    fetchCoordinates();
  }, [postCode]);



  // const fetchCoordinates = async () => {
  //   console.log("postcode google:", postCode)
  //   try {
      
  //     const response = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${postCode}&key=${myLocationAPI}`);
  //     console.log("response:", response)
  //     const results = response.data.results;
  //    console.log('respond google:', results)
  //       const location = results[0].geometry.location;
  //       setLongitude(location.lng);
  //       setLatitude(location.lat);
    
  //   } catch (error) {
  //     console.error('Error fetching coordinates:', error);
  //   }
  // };

  // useEffect(() => {
  //   fetchCoordinates();
  // }, [postCode]);
  console.log("long:", longitude)
        console.log("lat:", latitude)

  console.log("Images:", selectedImages)
  console.log("Rate:", rate)
  console.log("Address line  one:", addressline1)
  console.log("Address line  one:", addressline2)
  console.log("City:", city)
  console.log("Post Code:", postCode)
  console.log("Beds:", beds)
  console.log("Baths:", baths)
  console.log("featured:", featured)

 


  useEffect(() => {
    console.log('category:', category)
    console.log('property type:', propertyType)
    console.log('Available on:', availableOn)
    console.log('Rate:', rate)
    console.log("Address line  one:", addressline1)
    // console.log("Address line  one:", addressline2)
    console.log("City:", city)
    console.log("Post Code:", postCode)
    // console.log("Images:",selectedImages)
    console.log("featured:", featured)
  }, [category, propertyType, availableOn, rate, addressline1, city, postCode, featured]);

  
  return (
    <Form>
         <Row className="mb-3">
         <Form.Label>Category</Form.Label>
         <div key={`inline-radio`} className="mb-3">
         
         <Form.Check
            inline
            label="Rent"
            name="group1"
            type="radio"
            id="rent"
            value="Rent"
            checked={category === 'Rent'}
            onChange={handleCategoryChange}
          />
          
            <Form.Check
            inline
            label="Sale"
            name="group1"
            type="radio"
            id="sale"
            value="Sale"
            checked={category === 'Sale'} 
            onChange={handleCategoryChange}
          />
         </div>
         </Row>
         <Row className="mb-3">
         <Form.Group as={Col} controlId="formGridPropertyType">
         <Form.Label>Property type</Form.Label>
          <Form.Select value={propertyType} 
                       onChange={handlePropertyType}>
            {/* <option >Select...</option> */}
            <option value="Flat">Flat</option>
            <option value="2-Level Flat">2-Level Flat</option>
            <option value="Studio Flats">Studio Flats</option>
            <option value="Converted Flat">Converted Flat</option>
            <option value="Detached House">Detached House</option>
            <option value="Semi-detached House">Semi-detached House</option>
            <option value="Terraced House">Terraced House</option>
            <option value="End of Terrace House">End of Terrace House</option>
           
          </Form.Select>
         </Form.Group>

         <Form.Group as={Col} controlId="formGridBeds">
          <Form.Label>Beds</Form.Label>
          <Form.Control type="number" 
                        // defaultValue='1' 
                        value={beds} 
                        onChange={(e) => setBeds(e.target.value)}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridBeds">
          <Form.Label>Baths</Form.Label>
          <Form.Control type="number" 
                        // defaultValue='1' 
                        value={baths} 
                        onChange={(e) => setBaths(e.target.value)}/>
        </Form.Group>

         <Form.Group as={Col} controlId="formGridAvailableOn">
          <Form.Label>Property Available on</Form.Label>
          <Form.Control type="date" 
                        placeholder="Property Available on" 
                        value={availableOn} 
                        onChange={handleDateChange}/>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridEmail">
        <Form.Label>Rate</Form.Label>
        <InputGroup className="mb-3" as={Col} >
          <InputGroup.Text>£</InputGroup.Text>
          <Form.Control type="text" 
                        placeholder="Rate"
                        value={rate}
                        onChange={(e) => setRate (e.target.value)} />
                        
         
          </InputGroup>
          </Form.Group>

         </Row>


         <Row className="mb-3">
      <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
        <Form.Label>Property Address</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor"
                      value={addressline1}
                      onChange={(e) => setAddressline1(e.target.value)}/>
      </Form.Group>

      <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
        <Form.Label>Address line 2</Form.Label>
        <Form.Control placeholder= "1234 Main St" 
                      value={addressline2}
                      onChange={(e) => setAddressline2(e.target.value)}/>
      </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control value={city}
                      onChange={(e) => setCity(e.target.value)}/>
        </Form.Group>

        {/* <Form.Group as={Col} controlId="formGridState">
          <Form.Label>City</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>...</option>
          </Form.Select>
        </Form.Group> */}

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Post Code</Form.Label>
          <Form.Control  value={postCode}
                         onChange={handlePostCode} />
        </Form.Group>
      </Row>
      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Upload Images</Form.Label>
        <Form.Control type="file" 
                      multiple
                      onChange={handleImageChange} />
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Property Description</Form.Label>
        <Form.Control as="textarea" rows={10} type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Featured"  checked={featured} onChange={handleFeatured}/>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}


