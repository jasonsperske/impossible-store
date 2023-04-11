import type { APIRoute } from "astro";
import { prisma } from "@lib/prisma-client";

export const post: APIRoute = async ({ request }) => {
  const formData = await request.formData();
  const guid = (formData.get('guid') ?? '') as string;
  const title = (formData.get('title') ?? '') as string;
  if (title.length === 0 || guid.length === 0) throw new Error("missing required fields GUID and/or Title")

  const existingProduct = await prisma.product.findUnique({ where: { guid } })
  if (existingProduct) throw new Error('Guid is already taken')

  const product = await prisma.product.create({
    data: {
      guid,
      title
    }
  })
  return new Response(JSON.stringify({
    product
  }), {
    status: 200
  })
}