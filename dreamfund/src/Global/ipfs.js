import axios from "axios";

const infuraProjectId = "8904b3e84b93487ba5d1b221a2e4825a";
const infuraProjectSecret =
  "T8ogzqxcMtL33iv+UJgHT7TanzhA+bcaP+VCB5vEw8ker3vf5c8q+Q";

// Base64 encode the project ID and secret for Basic Auth
const auth = Buffer.from(`${infuraProjectId}:${infuraProjectSecret}`).toString(
  "base64"
);

export async function uploadFile(file) {
  try {
    const formData = new FormData();
    formData.append("file", file);

    const response = await axios.post(
      "https://ipfs.infura.io:5001/api/v0/add",
      formData,
      {
        headers: {
          Authorization: `Basic ${auth}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );

    const { Hash } = response.data;
    console.log("Uploaded file:", Hash);
    return Hash; // This is the IPFS hash of the uploaded file
  } catch (error) {
    console.error("Failed to upload file:", error);
    throw error;
  }
}
