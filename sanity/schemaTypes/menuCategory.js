const ALLERGENS = [
  "glutine",
  "lattosio",
  "frutta a guscio",
  "uova",
  "pesce",
  "molluschi",
  "soia",
  "sedano",
  "senape",
  "sesamo",
];

export const menuCategory = {
  name: "menuCategory",
  title: "Menu Category",
  type: "document",
  fields: [
    {
      name: "category",
      title: "Category Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "order",
      title: "Display Order",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    },
    {
      name: "items",
      title: "Dishes",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "name",
              title: "Dish Name",
              type: "string",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "description",
              title: "Description",
              type: "text",
              rows: 3,
            },
            {
              name: "price",
              title: "Price (€)",
              type: "number",
              validation: (Rule) => Rule.required().min(0),
            },
            {
              name: "allergens",
              title: "Allergens",
              type: "array",
              of: [{ type: "string" }],
              options: {
                list: ALLERGENS.map((a) => ({ title: a, value: a })),
              },
            },
            {
              name: "photo",
              title: "Photo",
              type: "image",
              options: { hotspot: true },
            },
            {
              name: "available",
              title: "Available",
              type: "boolean",
              initialValue: true,
            },
          ],
          preview: {
            select: { title: "name", subtitle: "price", media: "photo" },
            prepare({ title, subtitle, media }) {
              return { title, subtitle: subtitle ? `€${subtitle}` : "", media };
            },
          },
        },
      ],
    },
  ],
  preview: {
    select: { title: "category", subtitle: "order" },
    prepare({ title, subtitle }) {
      return { title, subtitle: `Order: ${subtitle}` };
    },
  },
};
