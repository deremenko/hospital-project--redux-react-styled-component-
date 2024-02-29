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
  { id: generateUniqueId(), label: 'Имя' },
  { id: generateUniqueId(), label: 'Доктор' },
  { id: generateUniqueId(), label: 'Дата' },
];

export const sortDirectionOptions = [
  { id: generateUniqueId(), label: 'По возрастанию' },
  { id: generateUniqueId(), label: 'По убыванию' },
];