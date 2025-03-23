// src/collections/Productos.ts

import type { CollectionConfig } from 'payload'

const Productos: CollectionConfig = {
  slug: 'productos',
  admin: {
    useAsTitle: 'nombre',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'nombre',
      label: 'Nombre del producto',
      type: 'text',
      required: true,
    },
    {
      name: 'modelo',
      label: 'Modelo',
      type: 'text',
      required: true,
    },
    {
      name: 'descripcion',
      label: 'Descripción',
      type: 'textarea',
    },
    {
      name: 'precioUnidad',
      label: 'S/. Precio unidad',
      type: 'number',
      required: true,
      admin: {
        description: 'Agregue aquí el costo del precio unitario', // Se muestra debajo del campo
      },
    },
    {
      name: 'deseaPrecioPorMayor',
      label: '¿Desea configurar precio al por mayor?',
      type: 'checkbox',
      required: false,
    },
    {
      type: 'row',
      admin: {
        condition: (data) => data?.deseaPrecioPorMayor === true,
      },
      fields: [
        {
          name: 'umbralPorMayor',
          label: 'Umbral de ventas al por mayor',
          type: 'number',
          required: true,
          admin: {
            description:
              'Configure aquí a partir de cuántas unidades se considera al por mayor este producto',
          },
        },
        {
          name: 'precioPorMayor',
          label: 'S/. Precio por mayor',
          type: 'number',
          required: true,
          admin: {
            description: 'Configure aquí el precio',
          },
        },
      ],
    },
    {
      name: 'incentivarVenta',
      label: '¿Incentivar venta?',
      type: 'checkbox',
      required: false,
    },
    {
      name: 'textoIncentivo',
      label: 'Texto para incentivar la venta',
      type: 'text',
      required: true,
      admin: {
        condition: (data) => data?.incentivarVenta === true,
      },
    },
    {
      name: 'activarOferta',
      label: '¿Desea activar oferta?',
      type: 'checkbox',
      required: false,
    },
    {
      type: 'row',
      admin: {
        condition: (data) => data?.activarOferta === true,
      },
      fields: [
        {
          name: 'fechaInicio',
          label: 'Fecha de Inicio',
          type: 'date',
          required: true,
          admin: {
            date: {
              pickerAppearance: 'dayOnly', // Puedes quitarlo si quieres fecha+hora
            },
          },
        },
        {
          name: 'fechaFin',
          label: 'Fecha de Fin',
          type: 'date',
          required: true,
          admin: {
            date: {
              pickerAppearance: 'dayOnly',
            },
          },
        },
      ],
    },
    {
      name: 'imagen',
      label: 'Imagen del producto',
      type: 'upload',
      relationTo: 'media', // (vamos a crear "media" abajo)
    },
  ],
}

export default Productos
