import type { APIRoute } from "astro";
import { prisma } from "@lib/prisma-client";


export const get: APIRoute = async ({ params }) => {
  const { id } = params;
  if (!id) throw new Error("Routing error")

  const product = await prisma.product.findUniqueOrThrow({ where: { id: parseInt(id, 10) } })

  return new Response(JSON.stringify({ product }), {
    status: 200
  });
}