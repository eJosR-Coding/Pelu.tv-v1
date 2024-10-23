import { NextApiRequest, NextApiResponse } from 'next';
import dbConnect from '../../../libs/dbConnect';
import Room from '../models/Room';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  await dbConnect(); // Conectar a la base de datos

  switch (method) {
    case 'GET':
      try {
        const rooms = await Room.find({}); // Obtener todas las habitaciones
        res.status(200).json({ success: true, data: rooms });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case 'POST':
      try {
        const room = await Room.create(req.body); // Crear una nueva habitación
        res.status(201).json({ success: true, data: room });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
