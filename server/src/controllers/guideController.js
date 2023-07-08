import Guide from "../model/Guide.js"

export const handleListGuide = async (req, res) => {
    try{
        const guides = await Guide.find()
        .select("-__v")
        console.log("Guide list:" , guides)
        res.send(guides)
    } catch (error) {
        console.log('Error list post:', error.message)
        res.send('Error in listing post' + error.message)
    }

}

export const handleAddGuide = async (req, res) => {
  console.log("handleAddGuide:", req.body);

  try {
    let {
      title, 
      subtitle, 
      subtitle1, 
      subtitle2, 
      category, 
      abstract, 
      paragraph, 
      paragraph1, 
      paragraph2, 
      image } = req.body;
    
    if (req.file) {
      image  = req.file.filename;
    }
    const addNewGuide = await Guide.create({
      title,
      subtitle,
      subtitle1, 
      subtitle2,
      category,
      abstract,
      paragraph,
      paragraph1, 
      paragraph2,
      image,
    });

    console.log("New Guide post added:", addNewGuide);
    res.send('New guide post added to the DB');
  } catch (error) {
    console.log("Error adding post:", error.message);
    res.send('Error in adding post: ' + error.message);
  }
};


export const handleEditGuide = async (req, res) => {
    try {
      const { _id, title, subtitle, category, abstract, paragraph} = req.body;
      let image = req.body.image;
  
      
      if (req.file) {
        image = req.file.filename; 
      }
  
      const updatedGuide = await Guide.findByIdAndUpdate(
        _id,
        {
            title,
            subtitle,
            category,
            abstract,
            paragraph,
            image,
        },
        { new: true }
      );
  
      console.log("Updated post:", updatedGuide);
      res.send("post updated in the DB");
    } catch (error) {
      console.log("Error updating post:", error.message);
      res.send("Error in updating post: " + error.message);
    }
  };
  

export const handeleDeleteGuide = async (req, res) => {
    console.log("Delete guide:", req.params)

    try{
        const deleteGuide = await Guide.findByIdAndDelete(req.params.id)
        console.log('Delete guide:', deleteGuide)
        res.send("guide deleted from the DB")
    } catch (error) {
        console.log('Error deleting recipe:', error.message)
        res.send('Error in deleting recipe:', error.message)
    }

}


export const handleSearchGuide = async (req, res) => {
    try {
      const text = req.query.text;
      console.log("Search text:", text);
      if (!text) {
        return res.send({ success: false, error: "No search text provided" });
      }
      const regExp = new RegExp(text, "i");
  
      const searchGuide = await Guide.find({
        $or: [
          { title: regExp },
          { abstract: regExp },
          { paragraph: regExp }
        ]
      })
        .select("-__v");
  
      res.send({ success: true, searchGuide });
      console.log(searchGuide)
    } catch (error) {
      console.log("Search error:", error.message);
      res.send({ success: false, error: error.message });
    }
  };
  

  //image  = req.file.filename;