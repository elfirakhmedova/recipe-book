import { defineCollection, z } from "astro:content";

const recipes = defineCollection({
    type: "content",
    schema: z.object({
        title: z.string(),
        description: z.string(),
        prepTime: z.number(),
        cookTime: z.number(),
        servings: z.number(),
        tags: z.array(z.string()),
        ingredients: z.array(z.string()),
        dressing: z.array(z.string()),
        instructions: z.array(z.string()),
    }),
});

export const collections = {
    recipes,
};