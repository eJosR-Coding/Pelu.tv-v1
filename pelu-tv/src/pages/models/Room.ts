import mongoose, { Schema, model, models } from 'mongoose';

const RoomSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

// Verifica si el modelo ya existe para evitar errores en hot-reloading en desarrollo
const Room = models.Room || model('Room', RoomSchema);

export default Room;
