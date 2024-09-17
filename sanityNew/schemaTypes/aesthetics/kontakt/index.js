import {FiSettings} from 'react-icons/fi'

export default {
  name: 'aesthetic_kontakt',
  type: 'document',
  title: 'aesthetic_kontakt',
  icon: FiSettings,
  fields: [
    {
      title: 'Adresse',
      name: 'adresse',
      type: 'document',
      fields: [
        {
          name: 'strasse',
          title: 'Strasse',
          type: 'string',
        },
        {
          title: 'Ort',
          name: 'ort',
          type: 'string',
        },
      ],
    },
    {
      title: 'Kontakt',
      name: 'kontakt',
      type: 'document',
      fields: [
        {
          name: 'phone',
          title: 'Telefon',
          type: 'string',
        },
        {
          name: 'email',
          title: 'Email',
          type: 'string',
        },
        {
          name: 'fax',
          title: 'Fax',
          type: 'string',
        },
        {
          name: 'mobile',
          title: 'Mobil',
          type: 'string',
        },
      ],
    },
    {
      title: 'Öffnungszeiten',
      name: 'oeffnungszeiten',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      title: 'Telefonzeiten',
      name: 'telefonzeiten',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
  ],
}
