import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const storePortfolio = async (req, res, next) => {
    try {
      // Destructure the required fields from the request body
      const { cvFile, coverPhoto, about, skills } = req.body;
  
      // Create a new portfolio using Prisma
      const portfolio = await prisma.portfolio.create({
        data: {
          cvFile,
          coverPhoto,
          about,
          skills,
        },
      });
  
      // Respond with a success message and the created portfolio
      return res.status(201).json({
        message: 'Portfolio created successfully',
        portfolio,
      });
    } catch (error) {
      // Handle any errors and respond with an error message
      console.error("Error:", error);
      return res.status(500).json({
        message: 'Failed to create portfolio',
        error: error.message,
      });
    }
  };
  

export const viewPortfolio = async (req, res) => {
    try {
        const { id } = req.params;
        const portfolio = await prisma.portfolio.findUnique({
            where: {
                id: parseInt(id),
            },
        });
        res.status(200).json({ message: 'Portfolio fetched successfully', portfolio });
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch portfolio', error: error.message });
    }
};