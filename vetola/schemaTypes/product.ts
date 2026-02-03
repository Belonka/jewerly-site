import { defineType, defineField } from "sanity";

export const product = defineType({
  name: "product",
  title: "Products",
  type: "document",
  fields: [
    defineField({
      name: "legacyId",
      title: "Legacy ID (optional)",
      type: "number",
      description: "ID from old JSON (optional)",
    }),

    defineField({
      name: "title",
      title: "Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "category",
      title: "Category (code)",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "categoryUkr",
      title: "Category (Ukr)",
      type: "string",
    }),

    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),

    defineField({
      name: "isNew",
      title: "New",
      type: "boolean",
      initialValue: false,
    }),

    defineField({
      name: "material",
      title: "Material",
      type: "string",
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),

    defineField({
      name: "size",
      title: "Size",
      type: "string",
    }),

     defineField({
      name: "imageKeys",
      title: "Image keys or paths",
      type: "array",
      of: [
        defineField({
        name: "img",
        type: "object",
        fields: [
          { name: "src", type: "string", title: "S3 key or public path" },
          { name: "alt", type: "string", title: "Alt text" },
        ],
      }),
  ],
      // [{ type: "string" }],
      // description: 'Examples: "products/ring-01.avif" OR "/images/Ring-black.JPG"',
    }),

    // defineField({
    //   name: "images",
    //   title: "Images",
    //   type: "array",
    //   of: [
    //     defineField({
    //       name: "image",
    //       title: "Image",
    //       type: "image",
    //       options: { hotspot: true },
    //       fields: [
    //         defineField({ name: "alt", title: "Alt text", type: "string" }),
    //       ],
    //     }),
    //   ],
    //   options: { layout: "grid" },
    //   validation: (Rule) => Rule.min(1),
    // }),
  ],
});
// import { defineType } from 'sanity'

// export const product = defineType({
//   name: 'product',
//   title: 'Product',
//   type: 'document',
//   fields: [
//     {
//       name: 'title',
//       title: 'Title',
//       type: 'string',
//     },
//   ],
// })