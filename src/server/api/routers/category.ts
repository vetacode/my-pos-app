import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";
import { z } from "zod";

export const categoryRouter = createTRPCRouter({
  getCategories: protectedProcedure.query(async ({ ctx }) => {
    const { db } = ctx;

    const categories = await db.category.findMany({
      select: {
        id: true,
        name: true,
     productCount: true, 

      },
    });

    return categories;
  }),

  createCategory: protectedProcedure
    .input(
      z.object({
        name: z
          .string()
          .min(3, "Minimal 3 karakter")
          .max(255, "Maksimal 255 karakter"),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { db } = ctx;

      const newCategory = await db.category.create({
        data: {
          name: input.name,
        },
        select: {
          id: true,
          name: true,
          productCount: true,
        },
      });

      return newCategory;
    }),

  deleteCategory: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { db } = ctx;

      const deletedCategory = await db.category.delete({
        where: {
          id: input.id,
        },
      });

      return deletedCategory;
    }),

  editCategory: protectedProcedure
    .input(
      z.object({
        categoryId: z.string(),
        name: z
          .string()
          .min(3, "Minimal 3 karakter")
          .max(255, "Maksimal 255 karakter"),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      const { db } = ctx;

      const editCategory = await db.category.update({
        where: {
          id: input.categoryId,
        },
        data: {
          name: input.name,
        },
      });

      return editCategory;
    }),
});
