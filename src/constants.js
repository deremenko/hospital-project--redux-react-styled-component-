import { generateUniqueId } from "./helpers/generateUniqueId.js";

export const API_URL = 'http://localhost:8000';

export const doctorList = [
  { id: generateUniqueId(), label: 'Доктор Менгеле' },
  { id: generateUniqueId(), label: 'Доктор Хирт' },
  { id: generateUniqueId(), label: 'Доктор Криг' },
];

export const tableHeaderNames = [
  {value: 'Имя',},
  {value: 'Доктор'},
  {value: 'Дата'},
  {value: 'Жалоба'},
  {value: ''},  
]

export const sortFieldName = [
  { id: generateUniqueId(), label: 'Имя', value: "patient" },
  { id: generateUniqueId(), label: 'Доктор', value: "doctor" },
  { id: generateUniqueId(), label: 'Дата', value: "date"},
];

export const sortDirectionOptions = [
  { id: generateUniqueId(), label: 'По возрастанию' },
  { id: generateUniqueId(), label: 'По убыванию' },
];

export const defaultTime = "T10T00:00:00.000Z"