/*Make a controller for user management */ 
Path: controllers/UserController.js
 import { PrismaClient } from "@prisma/client";

 export const getAllUsers = async (req, res, next) => {
   try {
const prisma = new PrismaClient();
     const users = await prisma.user.findMany({
       select: {
         id: true,
         email: true,

         username: true,
         fullName: true,
         description: true,
         profileImage: true,
         userRole: true,
         isProfileInfoSet: true,
         createdAt: true,
       },
     });
     return res.status(200).json({ users });
   } catch (err) {
     console.log(err);
     return res.status(500).send("Internal Server Error");
   }
 };
