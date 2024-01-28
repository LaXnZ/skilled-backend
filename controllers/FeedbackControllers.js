import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const submitFeedback = async (req, res) => {
  const { userId, fullName, description, profileImage, isProfileInfoSet } = req.body;

  try {
    const userForm = await prisma.userForm.create({
      data: {
        userId,
        fullName,
        description,
        profileImage,
        isProfileInfoSet,
      },
    });

    res.status(201).json(userForm);
  } catch (error) {
    res.status(500).json({ error: 'Error submitting feedback' });
  }
};


export const getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await prisma.userForm.findMany();
    res.status(200).json(feedbacks);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching feedbacks' });
  }
}

