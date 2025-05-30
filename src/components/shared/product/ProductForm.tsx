import { z } from "zod";

export const productSchema = z.object({
  name: z.string().min(3, "Minimal 3 karakter").max(255, "Maksimal 255 karakter"),
  price: z.number().min(0, "Harga tidak boleh negatif"),
  stock: z.number().min(0, "Stok tidak boleh negatif"),
  imageUrl: z.string().url("URL tidak valid").optional(),
  categoryId: z.string().uuid("ID kategori tidak valid"),
});

