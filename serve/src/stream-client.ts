import { StreamClient } from "@stream-io/node-sdk";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config(); 

const apiKey = process.env.STREAM_API_KEY as string;
const apiSecret = process.env.STREAM_API_SECRET as string;

export const client = new StreamClient(apiKey, apiSecret); 
