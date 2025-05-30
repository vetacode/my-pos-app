import { createTRPCRouter, protectedProcedure } from "@/server/api/trpc";

export const productRouter = createTRPCRouter({
getProducts: protectedProcedure.query(async ({ ctx }) => {
  const { db } = ctx;

  const products = await db.product.findMany({
    select: {
      id: true,
      name: true,
      price: true,
      stock: true,
      imageUrl: true,
      category: {
        select: {
          id: true,
          name: true,
        },
      },
    },
  });

  return products;
    
}),
});
