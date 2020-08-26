import { FIELDS } from '@antlerengineering/form-builder';
import * as yup from 'yup';
export const feedbackForm = () => [
  {
    type: FIELDS.singleSelect,
    name: 'type',
    label: 'Type',
    options: ['General', 'Bug', 'Idea'],
    validation: yup
      .string()
      .nullable()
      .required('Required'),
  },
  {
    type: FIELDS.text,
    fieldVariant: 'long',
    name: 'message',
    label: 'Message',
    validation: yup
      .string()
      .max(600, 'Must be at most 600 characters')
      .required('Required'),
  },
];
