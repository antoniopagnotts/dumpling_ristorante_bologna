export const restaurant = {
  name: "restaurant",
  title: "Restaurant Info",
  type: "document",
  __experimental_actions: ["update", "publish"],
  fields: [
    {
      name: "name",
      title: "Restaurant Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "tagline",
      title: "Tagline",
      type: "string",
    },
    {
      name: "address",
      title: "Address",
      type: "text",
      rows: 3,
    },
    {
      name: "phone",
      title: "Phone",
      type: "string",
    },
    {
      name: "email",
      title: "Email",
      type: "string",
    },
    {
      name: "googleMapsEmbedUrl",
      title: "Google Maps Embed URL",
      type: "url",
      description: "Full embed URL from Google Maps share > Embed map",
    },
    {
      name: "socialLinks",
      title: "Social Links",
      type: "object",
      fields: [
        {
          name: "instagram",
          title: "Instagram URL",
          type: "url",
        },
        {
          name: "facebook",
          title: "Facebook URL",
          type: "url",
        },
      ],
    },
  ],
  preview: {
    select: { title: "name", subtitle: "tagline" },
  },
};
