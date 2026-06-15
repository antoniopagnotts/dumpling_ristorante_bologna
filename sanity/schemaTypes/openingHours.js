const DAYS = [
  "Lunedì",
  "Martedì",
  "Mercoledì",
  "Giovedì",
  "Venerdì",
  "Sabato",
  "Domenica",
];

export const openingHours = {
  name: "openingHours",
  title: "Opening Hours",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "schedule",
      title: "Weekly Schedule",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "day",
              title: "Day",
              type: "string",
              options: {
                list: DAYS.map((d) => ({ title: d, value: d })),
              },
              validation: (Rule) => Rule.required(),
            },
            {
              name: "isOpen",
              title: "Open",
              type: "boolean",
              initialValue: true,
            },
            {
              name: "openTime",
              title: "Opening Time",
              type: "string",
              description: "e.g. 12:00",
              hidden: ({ parent }) => !parent?.isOpen,
            },
            {
              name: "closeTime",
              title: "Closing Time",
              type: "string",
              description: "e.g. 22:00",
              hidden: ({ parent }) => !parent?.isOpen,
            },
          ],
          preview: {
            select: {
              day: "day",
              isOpen: "isOpen",
              openTime: "openTime",
              closeTime: "closeTime",
            },
            prepare({ day, isOpen, openTime, closeTime }) {
              return {
                title: day,
                subtitle: isOpen ? `${openTime} – ${closeTime}` : "Chiuso",
              };
            },
          },
        },
      ],
    },
    {
      name: "exceptions",
      title: "Exceptions (Holidays / Special Closures)",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "date",
              title: "Date",
              type: "date",
              validation: (Rule) => Rule.required(),
            },
            {
              name: "label",
              title: "Label",
              type: "string",
              description: "e.g. Natale, Ferragosto",
            },
            {
              name: "isClosed",
              title: "Closed on this date",
              type: "boolean",
              initialValue: true,
            },
          ],
          preview: {
            select: { date: "date", label: "label", isClosed: "isClosed" },
            prepare({ date, label, isClosed }) {
              return {
                title: label ?? date,
                subtitle: isClosed ? "Chiuso" : "Orario speciale",
              };
            },
          },
        },
      ],
    },
  ],
};
