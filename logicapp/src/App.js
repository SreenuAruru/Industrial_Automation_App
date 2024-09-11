// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./App.css";

// function App() {
//   const [files, setFiles] = useState([]);
//   const [feedback, setFeedback] = useState("");
//   const [message, setMessage] = useState("");

//   const handleFileChange = (e) => {
//     const fileArray = Array.from(e.target.files); // Convert FileList to an array
//     setFiles(fileArray);
//   };

//   const handleFeedbackChange = (e) => {
//     setFeedback(e.target.value);
//   };

//   const handleUpload = async () => {
//     const formData = new FormData();
//     for (let i = 0; i < files.length; i++) {
//       formData.append("files", files[i]);
//     }

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/upload",
//         formData,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );
//       setMessage(response.data.message);
//       await handleGetFiles(); // Fetch updated files after upload
//     } catch (error) {
//       setMessage("Error uploading files");
//     }
//   };

//   const handleSubmitFeedback = async () => {
//     try {
//       const response = await axios.post("http://localhost:5000/feedback", {
//         feedback,
//       });
//       setMessage(response.data.message);
//     } catch (error) {
//       setMessage("Error submitting feedback");
//     }
//   };

//   const handleDelete = async (fileId) => {
//     try {
//       const response = await axios.delete(
//         `http://localhost:5000/delete/${fileId}`
//       );
//       setMessage(response.data.message);
//       await handleGetFiles(); // Fetch updated files after deletion
//     } catch (error) {
//       setMessage("Error deleting file");
//     }
//   };

//   const handleGetFiles = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/files");
//       setFiles(Array.isArray(response.data) ? response.data : []); // Ensure files is always an array
//     } catch (error) {
//       console.log("Error fetching files");
//       setFiles([]); // Reset to an empty array on error
//     }
//   };

//   // Fetch all files when the component mounts
//   useEffect(() => {
//     handleGetFiles();
//   }, []); // Empty dependency array ensures this runs only on mount

//   return (
//     <div className="app-container">
//       <h1 className="app-title">File Upload & Feedback</h1>
//       <input
//         type="file"
//         multiple
//         onChange={handleFileChange}
//         className="file-input"
//       />
//       <button onClick={handleUpload} className="btn btn-upload">
//         Upload
//       </button>
//       <br />
//       <textarea
//         placeholder="Enter your feedback"
//         value={feedback}
//         onChange={handleFeedbackChange}
//         className="feedback-input"
//       />
//       <button onClick={handleSubmitFeedback} className="btn btn-feedback">
//         Submit Feedback
//       </button>
//       <div className="message">{message}</div>

//       <h2 className="file-list-title">Uploaded Files</h2>
//       <ul className="file-list">
//         {files.length > 0 ? (
//           files.map((file) => (
//             <li key={file.id} className="file-list-item">
//               {file.filename}
//               <button
//                 onClick={() => handleDelete(file.id)}
//                 className="btn btn-delete"
//               >
//                 Delete
//               </button>
//             </li>
//           ))
//         ) : (
//           <li>No files uploaded.</li>
//         )}
//       </ul>
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./App.css";

// function App() {
//   const [files, setFiles] = useState([]);
//   const [feedbackList, setFeedbackList] = useState([]);
//   const [feedback, setFeedback] = useState("");
//   const [message, setMessage] = useState("");

//   const handleFileChange = (e) => {
//     const fileArray = Array.from(e.target.files); // Convert FileList to an array
//     setFiles(fileArray);
//   };

//   const handleFeedbackChange = (e) => {
//     setFeedback(e.target.value);
//   };

//   const handleUpload = async () => {
//     const formData = new FormData();
//     for (let i = 0; i < files.length; i++) {
//       formData.append("files", files[i]);
//     }

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/upload",
//         formData,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );
//       setMessage(response.data.message);
//       await handleGetFiles(); // Fetch updated files after upload
//     } catch (error) {
//       setMessage("Error uploading files");
//     }
//   };

//   const handleSubmitFeedback = async () => {
//     try {
//       const response = await axios.post("http://localhost:5000/feedback", {
//         feedback,
//       });
//       setMessage(response.data.message);
//       await handleGetFeedback(); // Fetch updated feedback after submission
//     } catch (error) {
//       setMessage("Error submitting feedback");
//     }
//   };

//   const handleDeleteFile = async (fileId) => {
//     try {
//       const response = await axios.delete(
//         `http://localhost:5000/delete/${fileId}`
//       );
//       setMessage(response.data.message);
//       await handleGetFiles(); // Fetch updated files after deletion
//     } catch (error) {
//       setMessage("Error deleting file");
//     }
//   };

//   const handleDeleteFeedback = async (feedbackId) => {
//     try {
//       const response = await axios.delete(
//         `http://localhost:5000/feedback/${feedbackId}`
//       );
//       setMessage(response.data.message);
//       await handleGetFeedback(); // Fetch updated feedback after deletion
//     } catch (error) {
//       setMessage("Error deleting feedback");
//     }
//   };

//   const handleGetFiles = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/files");
//       setFiles(Array.isArray(response.data) ? response.data : []); // Ensure files is always an array
//     } catch (error) {
//       console.log("Error fetching files");
//       setFiles([]); // Reset to an empty array on error
//     }
//   };

//   const handleGetFeedback = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/feedback");
//       setFeedbackList(Array.isArray(response.data) ? response.data : []); // Ensure feedbackList is always an array
//     } catch (error) {
//       console.log("Error fetching feedback");
//       setFeedbackList([]); // Reset to an empty array on error
//     }
//   };

//   // Fetch all files and feedback when the component mounts
//   useEffect(() => {
//     handleGetFiles();
//     handleGetFeedback();
//   }, []); // Empty dependency array ensures this runs only on mount

//   return (
//     <div className="app-container">
//       <h1 className="app-title">File Upload & Feedback</h1>
//       <input
//         type="file"
//         multiple
//         onChange={handleFileChange}
//         className="file-input"
//       />
//       <button onClick={handleUpload} className="btn btn-upload">
//         Upload
//       </button>
//       <br />
//       <textarea
//         placeholder="Enter your feedback"
//         value={feedback}
//         onChange={handleFeedbackChange}
//         className="feedback-input"
//       />
//       <button onClick={handleSubmitFeedback} className="btn btn-feedback">
//         Submit Feedback
//       </button>
//       <div className="message">{message}</div>

//       <h2 className="file-list-title">Uploaded Files</h2>
//       <ul className="file-list">
//         {files.length > 0 ? (
//           files.map((file) => (
//             <li key={file.id} className="file-list-item">
//               {file.filename}
//               <button
//                 onClick={() => handleDeleteFile(file.id)}
//                 className="btn btn-delete"
//               >
//                 Delete
//               </button>
//             </li>
//           ))
//         ) : (
//           <li>No files uploaded.</li>
//         )}
//       </ul>

//       <h2 className="feedback-list-title">Feedback</h2>
//       <ul className="feedback-list">
//         {feedbackList.length > 0 ? (
//           feedbackList.map((item) => (
//             <li key={item.id} className="feedback-list-item">
//               {item.feedback}
//               <button
//                 onClick={() => handleDeleteFeedback(item.id)}
//                 className="btn btn-delete"
//               >
//                 Delete
//               </button>
//             </li>
//           ))
//         ) : (
//           <li>No feedback available.</li>
//         )}
//       </ul>
//     </div>
//   );
// }

// export default App;

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "./App.css";

// function App() {
//   const [files, setFiles] = useState([]);
//   const [feedbackList, setFeedbackList] = useState([]);
//   const [selectedFiles, setSelectedFiles] = useState([]);
//   const [selectedFeedback, setSelectedFeedback] = useState("");
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     fetchFiles();
//     fetchFeedback();
//   }, []);

//   const handleFileChange = (e) => {
//     const fileArray = Array.from(e.target.files);
//     setSelectedFiles(fileArray);
//   };

//   const handleUpload = async () => {
//     const formData = new FormData();
//     for (let i = 0; i < selectedFiles.length; i++) {
//       formData.append("files", selectedFiles[i]);
//     }

//     try {
//       const response = await axios.post(
//         "http://localhost:5000/upload",
//         formData,
//         {
//           headers: { "Content-Type": "multipart/form-data" },
//         }
//       );
//       setMessage(response.data.message);
//       fetchFiles(); // Refresh files after upload
//     } catch (error) {
//       setMessage("Error uploading files");
//     }
//   };

//   const handleSubmitFeedback = async () => {
//     try {
//       const response = await axios.post("http://localhost:5000/feedback", {
//         feedback: selectedFeedback,
//       });
//       setMessage(response.data.message);
//       fetchFeedback(); // Refresh feedback after submission
//     } catch (error) {
//       setMessage("Error submitting feedback");
//     }
//   };

//   const handleDeleteFile = async (fileId) => {
//     try {
//       const response = await axios.delete(
//         `http://localhost:5000/delete/file/${fileId}`
//       );
//       setMessage(response.data.message);
//       fetchFiles(); // Refresh files after deletion
//     } catch (error) {
//       setMessage("Error deleting file");
//     }
//   };

//   const handleDeleteFeedback = async (feedbackId) => {
//     try {
//       const response = await axios.delete(
//         `http://localhost:5000/delete/feedback/${feedbackId}`
//       );
//       setMessage(response.data.message);
//       fetchFeedback(); // Refresh feedback after deletion
//     } catch (error) {
//       setMessage("Error deleting feedback");
//     }
//   };

//   const fetchFiles = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/files");
//       setFiles(response.data);
//     } catch (error) {
//       console.log("Error fetching files");
//     }
//   };

//   const fetchFeedback = async () => {
//     try {
//       const response = await axios.get("http://localhost:5000/feedback");
//       setFeedbackList(response.data);
//     } catch (error) {
//       console.log("Error fetching feedback");
//     }
//   };

//   return (
//     <div className="app-container">
//       <h1 className="app-title">File Upload & Feedback</h1>
//       <input
//         type="file"
//         multiple
//         onChange={handleFileChange}
//         className="file-input"
//       />
//       <button onClick={handleUpload} className="btn btn-upload">
//         Upload
//       </button>
//       <br />
//       <textarea
//         placeholder="Enter your feedback"
//         value={selectedFeedback}
//         onChange={(e) => setSelectedFeedback(e.target.value)}
//         className="feedback-input"
//       />
//       <button onClick={handleSubmitFeedback} className="btn btn-feedback">
//         Submit Feedback
//       </button>
//       <div className="message">{message}</div>

//       <h2 className="file-list-title">Uploaded Files</h2>
//       <ul className="file-list">
//         {files.map((file) => (
//           <li key={file.id} className="file-list-item">
//             {file.filename}
//             <button
//               onClick={() => handleDeleteFile(file.id)}
//               className="btn btn-delete"
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>

//       <h2 className="feedback-list-title">User Feedback</h2>
//       <ul className="feedback-list">
//         {feedbackList.map((feedback) => (
//           <li key={feedback.id} className="feedback-list-item">
//             {feedback.user_feedback}
//             <button
//               onClick={() => handleDeleteFeedback(feedback.id)}
//               className="btn btn-delete"
//             >
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [files, setFiles] = useState([]);
  const [feedbackList, setFeedbackList] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedFeedback, setSelectedFeedback] = useState("");
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchFiles();
    fetchFeedback();
  }, []);

  const handleFileChange = (e) => {
    const fileArray = Array.from(e.target.files);
    setSelectedFiles(fileArray);
  };

  const handleUpload = async () => {
    const formData = new FormData();
    for (let i = 0; i < selectedFiles.length; i++) {
      formData.append("files", selectedFiles[i]);
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/upload",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setMessage(response.data.message);
      fetchFiles(); // Refresh files after upload
      setSelectedFiles([]); // Clear selected files
      document.querySelector(".file-input").value = ""; // Clear file input
    } catch (error) {
      setMessage("Error uploading files");
    }
  };

  const handleSubmitFeedback = async () => {
    try {
      const response = await axios.post("http://localhost:5000/feedback", {
        feedback: selectedFeedback,
      });
      setMessage(response.data.message);
      fetchFeedback(); // Refresh feedback after submission
      setSelectedFeedback(""); // Clear feedback input
    } catch (error) {
      setMessage("Error submitting feedback");
    }
  };

  const handleDeleteFile = async (fileId) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/delete/file/${fileId}`
      );
      setMessage(response.data.message);
      fetchFiles(); // Refresh files after deletion
    } catch (error) {
      setMessage("Error deleting file");
    }
  };

  const handleDeleteFeedback = async (feedbackId) => {
    try {
      const response = await axios.delete(
        `http://localhost:5000/delete/feedback/${feedbackId}`
      );
      setMessage(response.data.message);
      fetchFeedback(); // Refresh feedback after deletion
    } catch (error) {
      setMessage("Error deleting feedback");
    }
  };

  const fetchFiles = async () => {
    try {
      const response = await axios.get("http://localhost:5000/files");
      setFiles(response.data);
    } catch (error) {
      console.log("Error fetching files");
    }
  };

  const fetchFeedback = async () => {
    try {
      const response = await axios.get("http://localhost:5000/feedback");
      setFeedbackList(response.data);
    } catch (error) {
      console.log("Error fetching feedback");
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">File Upload & Feedback</h1>
      <input
        type="file"
        multiple
        onChange={handleFileChange}
        className="file-input"
      />
      <button onClick={handleUpload} className="btn btn-upload">
        Upload
      </button>
      <br />
      <textarea
        placeholder="Enter your feedback"
        value={selectedFeedback}
        onChange={(e) => setSelectedFeedback(e.target.value)}
        className="feedback-input"
      />
      <button onClick={handleSubmitFeedback} className="btn btn-feedback">
        Submit Feedback
      </button>
      <div className="message">{message}</div>

      <h2 className="file-list-title">Uploaded Files</h2>
      <ul className="file-list">
        {files.map((file) => (
          <li key={file.id} className="file-list-item">
            {file.filename}
            <button
              onClick={() => handleDeleteFile(file.id)}
              className="btn btn-delete"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <h2 className="feedback-list-title">User Feedback</h2>
      <ul className="feedback-list">
        {feedbackList.map((feedback) => (
          <li key={feedback.id} className="feedback-list-item">
            {feedback.user_feedback}
            <button
              onClick={() => handleDeleteFeedback(feedback.id)}
              className="btn btn-delete"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
