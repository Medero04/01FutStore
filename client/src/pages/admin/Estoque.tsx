import { useEffect, useState } from "react";
import { useLocation } from "wouter";

export default function AdminEstoque() {
  const [, setLocation] = useLocation();
  const [estoque, setEstoque] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [salvando, setSalvando] = useState<string | null>(null);
  const token = localStorage.getItem("admin_token");

  async function fetchEstoque() {
    try {
      const res = await fetch("/api/estoque", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      setEstoque(data);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchEstoque();
  }, []);

  async function atualizarQuantidade(produtoId: number, tamanho: string, quantidade: number) {
    const key = `${produtoId}-${tamanho}`;
    setSalvando(key);
    try {
      await fetch(`/api/estoque/${produtoId}/${tamanho}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ quantidade }),
      });
      await fetchEstoque();
    } finally {
      setSalvando(null);
    }
  }

  // Agrupar por produto
  const porProduto = estoque.reduce((acc: any, item: any) => {
    if (!acc[item.id]) {
      acc[item.id] = { nome: item.nome, tamanhos: [] };
    }
    if (item.tamanho) {
      acc[item.id].tamanhos.push(item);
    }
    return acc;
  }, {});

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <p className="text-yellow-500 text-xl animate-pulse">Carregando...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-zinc-800 px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <h1 className="text-yellow-500 font-bold text-xl tracking-widest uppercase">
            01FutStore
          </h1>
          <nav className="flex gap-4">
            <button
              onClick={() => setLocation("/admin/dashboard")}
              className="text-zinc-400 text-sm uppercase tracking-wider hover:text-white"
            >
              Dashboard
            </button>
            <button
              onClick={() => setLocation("/admin/produtos")}
              className="text-zinc-400 text-sm uppercase tracking-wider hover:text-white"
            >
              Produtos
            </button>
            <button
              onClick={() => setLocation("/admin/estoque")}
              className="text-yellow-500 text-sm uppercase tracking-wider border-b border-yellow-500 pb-1"
            >
              Estoque
            </button>
          </nav>
        </div>
        <button
          onClick={() => {
            localStorage.removeItem("admin_token");
            setLocation("/admin/login");
          }}
          className="text-red-400 text-sm uppercase tracking-wider hover:text-red-300"
        >
          Sair
        </button>
      </header>

      <main className="p-6 space-y-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-zinc-400 text-xs uppercase tracking-wider">
            Controle de Estoque por Tamanho
          </h2>
        </div>

        {Object.keys(porProduto).length === 0 ? (
          <div className="text-center py-20">
            <p className="text-zinc-600">Nenhum produto cadastrado ainda.</p>
            <button
              onClick={() => setLocation("/admin/produtos")}
              className="mt-4 text-yellow-500 underline text-sm"
            >
              Cadastrar produtos
            </button>
          </div>
        ) : (
          Object.entries(porProduto).map(([id, prod]: any) => (
            <div key={id} className="bg-zinc-900 border border-zinc-800 p-6">
              <h3 className="text-white font-bold mb-4 uppercase tracking-wide">
                {prod.nome}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {prod.tamanhos.map((item: any) => {
                  const key = `${id}-${item.tamanho}`;
                  const esgotado = item.quantidade === 0;
                  return (
                    <div
                      key={item.tamanho}
                      className={`border p-3 text-center ${
                        esgotado
                          ? "border-red-800 bg-red-950"
                          : "border-zinc-700 bg-zinc-800"
                      }`}
                    >
                      <p className="text-zinc-400 text-xs uppercase tracking-wider mb-2">
                        {item.tamanho}
                      </p>
                      <input
                        type="number"
                        min={0}
                        defaultValue={item.quantidade}
                        onBlur={(e) =>
                          atualizarQuantidade(
                            Number(id),
                            item.tamanho,
                            Number(e.target.value)
                          )
                        }
                        className="w-full bg-black border border-zinc-600 text-white text-center py-1 focus:border-yellow-500 outline-none text-lg font-bold"
                      />
                      {esgotado && (
                        <p className="text-red-400 text-xs mt-1 uppercase">
                          Esgotado
                        </p>
                      )}
                      {salvando === key && (
                        <p className="text-yellow-500 text-xs mt-1">
                          Salvando...
                        </p>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))
        )}
      </main>
    </div>
  );
}