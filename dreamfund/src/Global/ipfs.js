// import axios from "axios";

// const infuraProjectId = process.env.NEXT_INFURA_SECRATE_KEY;
// const infuraProjectSecret = process.env.NEXT_INFURA_PROJECT_ID;

// // Base64 encode the project ID and secret for Basic Auth
// const auth = Buffer.from(`${infuraProjectId}:${infuraProjectSecret}`).toString(
//   "base64"
// );

// export async function uploadFile(file) {
//   try {
//     const formData = new FormData();
//     formData.append("file", file);

//     const response = await axios.post(
//       "https://ipfs.infura.io:5001/api/v0/add",
//       formData,
//       {
//         headers: {
//           Authorization: `Basic ${auth}`,
//           "Content-Type": "multipart/form-data",
//         },
//       }
//     );

//     const { Hash } = response.data;
//     console.log("Uploaded file:", Hash);
//     return Hash; // This is the IPFS hash of the uploaded file
//   } catch (error) {
//     console.error("Failed to upload file:", error);
//     throw error;
//   }
// }

const fs = require("fs");

import { create } from "kubo-rpc-client";

import path from "path";

const infuraProjectId = process.env.NEXT_INFURA_SECRATE_KEY;
const infuraProjectSecret = process.env.NEXT_INFURA_PROJECT_ID;

export async function uploadFile(filePath) {
  const auth =
    "Basic " +
    Buffer.from(`${infuraProjectId}:${infuraProjectSecret}`).toString("base64");

  const client = await create({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
    headers: {
      authorization: auth,
    },
  });

  // Read the file as a stream
  const fileStream = fs.createReadStream(filePath);

  // Add the file to IPFS
  const result = await client.add(fileStream);

  console.log("Uploaded file:", result.path);
  return result.path; // This is the IPFS path of the uploaded file
}

// // Usage example
// const filePath = path.join(__dirname, "your_file_path_here.txt"); // Update this path to your file
// uploadSingleFile(filePath);
