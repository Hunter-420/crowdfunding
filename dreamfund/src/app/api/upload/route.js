// /pages/api/upload.js
import { create } from "kubo-rpc-client";
import fs from "fs";
import path from "path";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { file } = req.body;

  const auth =
    "Basic " +
    Buffer.from(
      process.env.INFURA_PROJECT_ID + ":" + process.env.INFURA_SECRET_KEY
    ).toString("base64");

  const client = await create({
    host: "ipfs.infura.io",
    port: 5001,
    protocol: "https",
    headers: {
      authorization: auth,
    },
  });

  const filePath = path.join("/tmp", file.name); // Temporary storage for the file
  await fs.promises.writeFile(filePath, file.buffer);

  const fileStream = fs.createReadStream(filePath);

  const result = await client.add(fileStream);

  fs.unlinkSync(filePath); // Clean up the temporary file

  res.status(200).json(result);
}
