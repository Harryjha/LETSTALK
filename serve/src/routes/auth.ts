import { UserObjectRequest } from "@stream-io/node-sdk";
import { Router, Request, Response } from "express";
import {client} from "../stream-client"
const router = Router();

router.post("/createUser", async (req: Request, res: Response) =>{
    const { username, name , image} = req.body;

    if(!username || !name || !image){
        return res.status(400).json({message: "Required field is empty "})
    }

    const newUser: UserObjectRequest ={ 
        id: username,
        role: "user",
        name,
        image,
    };
   
  const user = await client.upsertUsers({
    users: {
        [newUser.id]: newUser,
      },
  });
  const expiry = Math.floor(Date.now() / 1000) + 24 * 60 * 600; 
  const token = client.createToken(username, expiry);    

  return res.status(200).json({ token, username, name });
});

export default router;