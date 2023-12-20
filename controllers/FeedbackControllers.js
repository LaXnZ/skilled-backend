import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const submitFeedback = async (req, res) => {
  const { userId, content, rating } = req.body;

  try {
    const feedback = await prisma.feedback.create({
      data: {
        userId,
        content,
        rating,
      },
    });

    res.status(201).json(feedback);
  } catch (error) {
    res.status(500).json({ error: 'Error submitting feedback' });
  }
};