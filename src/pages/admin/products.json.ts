import type { APIRoute } from "astro";
import { prisma } from "@lib/prisma-client";

export const get: APIRoute = async () => {
  const products = await prisma.product.findMany({})
  return new Response(JSON.stringify({ products }), {
    status: 200
  });
}