import express from 'express';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';

const app = express();
const prisma = new PrismaClient();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Получить все заявки (для админки, опционально)
app.get('/api/requests', async (req, res) => {
  try {
    const requests = await prisma.contactRequest.findMany({
      orderBy: { createdAt: 'desc' }
    });
    res.json(requests);
  } catch (error) {
    res.status(500).json({ error: 'Ошибка при получении заявок' });
  }
});

// Создать новую заявку
app.post('/api/contact', async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;

    if (!name || !phone) {
      return res.status(400).json({ error: 'Имя и телефон обязательны' });
    }

    const request = await prisma.contactRequest.create({
      data: {
        name,
        phone,
        email: email || null,
        message: message || null
      }
    });

    res.json({ success: true, id: request.id });
  } catch (error) {
    console.error('Ошибка при создании заявки:', error);
    res.status(500).json({ error: 'Ошибка при отправке заявки' });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});

