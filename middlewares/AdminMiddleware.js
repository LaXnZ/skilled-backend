// make a middleware to check if the user is admin or not. if the user is admin, then he can proceed to the next middleware. if not, then he will get a 403 error.

import { PrismaClient } from "@prisma/client";

export const isAdmin = async (req, res, next) => {
    try {
        if (req.userId) {
        const prisma = new PrismaClient();
        const user = await prisma.user.findUnique({
            where: { id: req.userId },
        });
        if (user?.userRole === "ADMIN") {
            return next();
        }
        return res.status(403).send("You are not authorized to access this route.");
        }
        return res.status(400).send("UserId should be required.");
    } catch (err) {
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
    }