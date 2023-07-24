
import ServiceProvidertCard from "../../Components/ServiceProviderCard";
import useFetchData from "../../CustomHooks/useFetchData";
import Spinner from "../Spinner"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddServiceMessages from "../AddServiceMessage"
import AddServiceReview from "../AddServiceReview"
import { useState } from "react"

export default function Plumbers () {
    const {data, refetch} = useFetchData('/serviceprovider/listserviceproviders')
    console.log("request data:", data)
    const [message, setMessage] = useState(false)
    const [review, setReview] = useState(false)
    const [postIdToMessage, setPostIdToMessage] = useState('')
    console.log("message post id:", postIdToMessage)

    const style = {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: 1000,
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: 24,
                p: 4,
              };

    if (!data) {
        return <Spinner />;
      }


      const plumbers = data.serviceProvidersAds.filter((item) => item.category === "Plumber")
      console.log("plumbers:", plumbers)

    const handleRequestMessage = (_id) => {
        
        console.log("message for service req id:", _id)
        setPostIdToMessage(_id)
        console.log("set message post id:", _id)
        setMessage(true)

    }


    const handleRequestReview = (_id) => {
      console.log("Review for service req id:", _id)
      setPostIdToMessage(_id)
      console.log("set review post id:", _id)
      setReview(true)

    }
    
    const handleCloseMessage = () => {
        setMessage (false)
        refetch()
    }
    const handleCloseReview = () => {
      setReview (false)
      refetch()
  }

    return(
        <div>
            {
                plumbers.map((item) => {
                    const {_id, subject, location, createdAt, description, rate, qulifications, experience, owner } = item
                    const created = new Date (createdAt)
                    const year = created.getFullYear()
                    const month = created.getMonth() + 1
                    const day = created.getDate()
                    return(
                        <ServiceProvidertCard handleMessage={() => handleRequestMessage(item._id)}
                                              handleReview={() => handleRequestReview (item._id)}
                                              key={_id}
                                              _id={_id}
                                              firstName={owner.firstName}
                                              lastName={owner.lastName}
                                              subject={subject}
                                              location={location}
                                              rate={rate}
                                              experience={experience}
                                              qulifications={qulifications}
                                              description={description}
                                              createdAt = {`${year}-${month}-${day}`}/>
                    )
                })
            }

{ message ? (     <div>
       <Modal sx={style}
        open={message}
        onClose={handleCloseMessage}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Message{" "}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <AddServiceMessages  postId={postIdToMessage}
                              handleCloseMessage ={handleCloseMessage}/>
          </Typography>
        </Box>
      </Modal>
            </div>): (null)
       
    }   
    { review ? (     <div>
       <Modal sx={style}
        open={review}
        onClose={handleCloseReview}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box >
          <Typography id="modal-modal-title" variant="h6" component="h2">
           Review{" "}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                <AddServiceReview  postId={postIdToMessage}
                                     handleCloseReview ={handleCloseReview}/>
          </Typography>
        </Box>
      </Modal>
            </div>): (null)
       
    } 
            
        </div>
    )
}





