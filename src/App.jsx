// Import necessary modules from Appwrite
import { Client, Storage } from "appwrite";
import { useState } from "react";

const App = () => {
  // Initialize Appwrite client
  const client = new Client();
  const storage = new Storage(client);

  // Configure your Appwrite project
  client
    .setEndpoint("https://cloud.appwrite.io/v1") // Your Appwrite endpoint
    .setProject("66f35d650019a5b0dcd8"); // Your project ID

  // Function to handle the file download
  const handleDownload = async () => {
    try {
      // Specify the file ID
      const fileId = "66f362920007baaf9094";

      // Get the file download URL (or use a direct download approach)
      const result = storage.getFileDownload(fileId);

      // Create a temporary link to trigger the download
      const link = document.createElement("a");
      link.href = result.href; // Download URL from Appwrite
      link.setAttribute("download", "filename.apk"); // Set the download attribute for filename
      document.body.appendChild(link);
      link.click();
      link.remove(); // Remove the link element after triggering the download
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };

  return (
    <div>
      <h1>Download APK</h1>
      <button onClick={handleDownload}>Download File</button>
    </div>
  );
};

export default App;
