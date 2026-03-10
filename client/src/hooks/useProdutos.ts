import { useEffect, useState } from "react";
import type { Product } from "@/lib/products";

export function useProdutos() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProdutos() {
      try {
        const res = await fetch("/api/produtos");
        const data = await res.json();

        // Converte o formato do banco para o formato do site
        const produtos: Product[] = data
          .filter((p: any) => p.ativo)
          .map((p: any) => ({
            id: String(p.id),
            name: p.nome,
            team: p.descricao || "",
            category: p.categoria as any,
            price: Number(p.preco),
            image: p.imagens?.[0]?.url || "",
            images: p.imagens?.map((i: any) => i.url) || [],
            sizes: p.estoque
              ?.filter((e: any) => e.quantidade > 0)
              .map((e: any) => e.tamanho) || [],
            estoque: p.estoque || [],
          }));

        setProducts(produtos);
      } catch (err) {
        console.error("Erro ao buscar produtos:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchProdutos();
  }, []);

  return { products, loading };
}