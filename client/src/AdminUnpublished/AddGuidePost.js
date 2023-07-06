import { useState } from "react";
import noimage from "../Assets/noimage.png";
import axios from "axios";
//import MainLayout from '../Layout/MainLayout';
import { useNavigate } from "react-router-dom";
//import '../Styles/Page.css';

export default function AddGuidePost ( ) {

  const [title, setTitle] = useState('');
  const [subtitle, setsubtitle] = useState('');
  const [subtitle1, setsubtitle1] = useState('');
  const [subtitle2, setsubtitle2] = useState('');
  const [abstract, setAbstract] = useState('');
  const [paragraph, setParagraph] = useState('');
  const [paragraph1, setParagraph1] = useState('');
  const [paragraph2, setParagraph2] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState({
    url: noimage,
    file: null,
  });
  const [formSubmitted, setFormSubmitted] = useState(false);


  const handleImageChange = (e) => {
    console.log("the file is", e.currentTarget.files[0]);
    
  if (!e.currentTarget.files[0]) return;
    
  if (e.currentTarget.files[0].size > 100000000) {
          alert("This file is bigger than 1000kB");
          return;
        }
    setImage({
            url: URL.createObjectURL(e.currentTarget.files[0]),
            file: e.currentTarget.files[0],
        });
      };



    const handleSubmit = async (e) => {
      e.preventDefault()
      const formData = new FormData();
      formData.append("title", title);
      formData.append("subtitle", subtitle);
      formData.append("subtitle1", subtitle1);
      formData.append("subtitle2", subtitle2);
      formData.append("category", category);
      formData.append("abstract", abstract);
      formData.append("paragraph", paragraph);
      formData.append("paragraph1", paragraph1);
      formData.append("paragraph2", paragraph2)
      if (image.file) {
        formData.append("image", image.file);
        
      }
      

      for (let pair of formData.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }
    
      try {
        const response = await axios.post('/guide/add', formData,);
        setFormSubmitted(true);
        console.log("Response:", response);
      } catch (error) {
        console.log("Error:", error);
      }
    };
    

    return(
        <>
        
          <div className='Admin-addPost' style={{
            display: "flex",
            flexDirection:"column",
            width:"100rem"

            
          }}>
            {!formSubmitted ? (
              <form className="addForm" style={{
                display: "flex",
                flexDirection:"column",
                width:"60rem"

              }} onSubmit={handleSubmit}>
                <label>Add your recipe title:</label>
                <input
                  type="text"
                  id="title"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <label>Add Abstract:</label>
                <div>
                  <input 
                    type="text"
                    id='abstract'
                    value={abstract}
                    onChange={(e) => setAbstract(e.target.value)}
                    placeholder="Add Abstract"
                  />
                  
                </div>
                <div>
                    <label>Add subtitle:</label>
                    <textarea
                    type="text"
                    id="subtitle"
                    placeholder="subtitle"
                    value={subtitle}
                    onChange={(e) => setsubtitle(e.target.value)}
                    />
                </div>
                <label>Add paragraph:</label>
                <textarea
                style={{height:"20rem"}}
                  type="text"
                  id="paragraph"
                  placeholder="Paragraph"
                  value={paragraph}
                  onChange={(e) => setParagraph(e.target.value)}
                />
                <div>
                    <label>Add subtitle1:</label>
                    <textarea
                    type="text"
                    id="subtitle1"
                    placeholder="subtitle1"
                    value={subtitle1}
                    onChange={(e) => setsubtitle1(e.target.value)}
                    />
                </div>
                <label>Add paragraph1:</label>
                <textarea
                style={{height:"20rem"}}
                  type="text"
                  id="paragraph1"
                  placeholder="Paragraph1"
                  value={paragraph1}
                  onChange={(e) => setParagraph1(e.target.value)}
                />
                <div>
                    <label>Add subtitle2:</label>
                    <textarea
                    type="text"
                    id="subtitle2"
                    placeholder="subtitle2"
                    value={subtitle2}
                    onChange={(e) => setsubtitle2(e.target.value)}
                    />
                </div>
                <label>Add paragraph2:</label>
                <textarea
                style={{height:"20rem"}}
                  type="text"
                  id="paragraph2"
                  placeholder="Paragraph2"
                  value={paragraph2}
                  onChange={(e) => setParagraph2(e.target.value)}
                />
                <label>Category: </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="">Select a category</option>
                  <option value="info">Info</option>
                  <option value="health">Health</option>
                  <option value="work">Work</option>
            
                </select>
                <div className="uploadImage">
                    <label>Add an image:</label>
                    <div id="uploadInput">
                      <input
                        type="file"
                        accept="image/png, image/jpeg"
                        name="image"
                        onChange={handleImageChange}
                      />
                      <img
                    
                        src={image.url || noimage}
                        alt=""
                      />
                    </div>
                    
                </div>
                <button type="submit">Submit</button>
              </form>
            ) : (
              <div style={{
                            color:'green', 
                            fontSize:'3rem', 
                            display:'flex', 
                            justifyContent:'center', 
                            marginTop:'48%', 
                            alignContent:'center'}}>Recipe submitted successfully!</div>
            )}
          </div>





        </>
    )
}


//const handleAddIngredient = () => {
//    setIngredients([...ingredients, newIngredient]);
//    setNewIngredient('');
//  };

//ingredients.forEach((ingredient, index) => {
 //   formData.append(`ingredients[${index}]`, ingredient);
 // });

 //<button type="button" onClick={handleAddIngredient}>Add Ingredient</button>
 //<ul>
 //{ingredients.map((ingredient, index) => (
//   <li key={index}>{ingredient}</li>
// ))}
//</ul>