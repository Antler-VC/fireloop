import { FieldType } from '@antlerengineering/form-builder';

export const feedbackForm = () => [
  {
    type: FieldType.singleSelect,
    name: 'type',
    label: 'Type',
    options: ['General', 'Bug', 'Idea'],
    required: true,
  },
  {
    type: FieldType.paragraph,
    fieldVariant: 'long',
    name: 'message',
    label: 'Message',
    maxCharacters: 600,
    required: true,
  },
];
