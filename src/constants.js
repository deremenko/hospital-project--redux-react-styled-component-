import { generateUniqueId } from "./helpers/generateUniqueId.js";

export const API_URL = 'http://localhost:8000';

export const doctorList = [
  { id: generateUniqueId(), label: 'Доктор Менгеле' },
  { id: generateUniqueId(), label: 'Доктор Хирт' },
  { id: generateUniqueId(), label: 'Доктор Криг' },
];