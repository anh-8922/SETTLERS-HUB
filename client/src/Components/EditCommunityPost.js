
import { useCookies } from "react-cookie";
import { useGetUserID } from "../CustomHooks/useGetUserID";
import { useEffect, useState } from "react";
import axios from "axios";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import useFetchData from "../CustomHooks/useFetchData";

export default function EditCommunitypost({ existingText, editPostId }) {
  const userID = useGetUserID();
  console.log("Add Community post userID:", userID);
  const [ cookies, _] = useCookies(["access_token"])
  console.log("access:", cookies);
  const [textEdit, setTextEdit] = useState(existingText);
  console.log("text:", textEdit);
  console.log("access:", cookies);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [emptyTextError, setEmptyTextError] = useState(false);
  // const [editedPostId, setEditPostId] = useState(editPostId);
  console.log("id:", editPostId)

  useEffect(() => {
    setTextEdit(existingText);
  }, [existingText])

  const handleSubmitEdit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("text", textEdit);
    formData.append("owner", userID);

    if (!textEdit || textEdit.trim() === "") {
      setEmptyTextError(true);
      console.log("Post text cannot be empty");
      return;
    }

    try {
      const response = await axios.put(`/community/edit/${editPostId}`, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          // "Authorization": `Bearer ${cookies.access_token}`,
        },
      });

      setFormSubmitted(true);
      console.log("Response:", response);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div>
      <div className="AddNewPostToCommunity">
        {!formSubmitted ? (
          <form onSubmit={handleSubmitEdit}>
            <label
              style={{
                display: "flex",
                gap: "2rem",
                marginTop: "2rem",
                fontSize: "1.2rem",
              }}
            >
              <textarea
                type="text"
                id="text"
                value={textEdit}
                // required={true}
                onChange={(e) => setTextEdit(e.target.value)}
                style={{ width: "40rem", height: "40rem" }}
              />
            </label>
            <div style={{ display: "flex", alignSelf: "center" }}>
              <button
                type="submit"
                style={{
                  marginTop: "2rem",
                  fontSize: "1.5rem",
                  width: "8rem",
                  backgroundColor: "#38AA5E",
                }}
              >
                Submit
              </button>
            </div>
          </form>
        ) : (
          <div
            style={{
              color: "green",
              fontSize: "3rem",
              display: "flex",
              justifyContent: "center",
              marginTop: "30%",
              alignContent: "center",
            }}
          >
            Post Edited Successfully!
          </div>
        )}
      </div>
      {emptyTextError && (
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            marginRight: "3rem",
          }}
        >
          <Stack sx={{ width: "30%" }} spacing={2}>
            <Alert variant="filled" severity="error">
              <AlertTitle style={{ color: "white" }}>Error</AlertTitle>
              <strong style={{ color: "white" }}>
                Edited post cannot be empty!
              </strong>
            </Alert>
          </Stack>
        </div>
      )}
    </div>
  );
}
