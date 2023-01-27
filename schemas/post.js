export default {
  name: "post",
  type: "document",
  title: "Post",
  groups: [
    {
      name: "meta",
      title: "Meta",
    },
    {
      name: "content",
      title: "Content",
    },
  ],
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
      validation: (Rule) => Rule.required(),
      group: "meta",
    },
    {
      name: "date",
      type: "date",
      title: "Date Published",
      validation: (Rule) => Rule.required(),
      group: "meta",
    },
    {
      name: "slug",
      type: "slug",
      title: "Slug",
      validation: (Rule) => Rule.required(),
      group: "meta",
      options: {
        source: "title",
        maxLength: 200,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      name: "description",
      type: "string",
      title: "Description",
      validation: (Rule) => Rule.required(),
      group: "meta",
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      validation: (Rule) => Rule.required(),
      group: "meta",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      validation: (Rule) => Rule.required(),
      group: "meta",
      to: { type: "author" },
    },
    {
      name: "featured_image",
      type: "image",
      title: "Featured Image",
      validation: (Rule) => Rule.required(),
      group: "meta",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "attribution",
          type: "string",
          title: "Attribution",
        },
      ],
    },
    {
      name: "content",
      type: "array",
      title: "Content",
      group: "content",
      validation: (Rule) => Rule.required(),
      of: [{ type: "block" }, { type: "image" }],
    },
  ],
};
