import { useEffect, useState } from "react";
import { useLocation } from "wouter";

interface Produto {
  id?: number;
  nome: string;
  descricao: string;
  preco: number;
  preco_custo: number;
  categoria: string;
  ativo: boolean;
  imagens: string[];
  estoque: { tamanho: string; quantidade: number }[];
}

const TAMANHOS = ["PP", "P", "M", "G", "GG", "XGG"];

const produtoVazio: Produto = {
  nome: "",
  descricao: "",
  preco: 0,
  preco_custo: 0,
  categoria: "",
  ativo: true,
  imagens: ["", "", "", "", ""],
  estoque: TAMANHOS.map((t) => ({ tamanho: t, quantidade: 0 })),
};

export default function AdminProdutos() {
  const [, setLocation] = useLocation();
  const [produtos, setProdutos] = useState<any[]>([]);
  const [modal, setModal] = useState(false);
  const [editando, setEditando] = useState<Produto>(produtoVazio);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem("admin_token");

  async function fetchProdutos() {
    const res = await fetch("/api/produtos");
    const data = await res.json();
    setProdutos(data);
  }

  useEffect(() => {
    fetchProdutos();
  }, []);

  async function salvar() {
    setLoading(true);
    try {
      const url = editando.id
        ? `/api/produtos/${editando.id}`
        : "/api/produtos";
      const method = editando.id ? "PUT" : "POST";

      await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          ...editando,
          imagens: editando.imagens.filter((i) => i !== ""),
        }),
      });

      await fetchProdutos();
      setModal(false);
      setEditando(produtoVazio);
    } finally {
      setLoading(false);
    }
  }

  async function deletar(id: number) {
    if (!confirm("Tem certeza que deseja deletar este produto?")) return;
    await fetch(`/api/produtos/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    await fetchProdutos();
  }

  function abrirEdicao(produto: any) {
    setEditando({
      ...produto,
      imagens: produto.imagens?.map((i: any) => i.url) || ["", "", "", "", ""],
      estoque: produto.estoque?.length
        ? produto.estoque
        : TAMANHOS.map((t) => ({ tamanho: t, quantidade: 0 })),
    });
    setModal(true);
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
              className="text-yellow-500 text-sm uppercase tracking-wider border-b border-yellow-500 pb-1"
            >
              Produtos
            </button>
            <button
              onClick={() => setLocation("/admin/estoque")}
              className="text-zinc-400 text-sm uppercase tracking-wider hover:text-white"
            >
              Estoque
            </button>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              setEditando(produtoVazio);
              setModal(true);
            }}
            className="bg-yellow-500 text-black font-bold px-4 py-2 text-sm uppercase tracking-wider hover:bg-yellow-400"
          >
            + Novo Produto
          </button>
          <button
            onClick={() => {
              localStorage.removeItem("admin_token");
              setLocation("/admin/login");
            }}
            className="text-red-400 text-sm uppercase tracking-wider hover:text-red-300"
          >
            Sair
          </button>
        </div>
      </header>

      <main className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {produtos.map((produto) => (
            <div
              key={produto.id}
              className="bg-zinc-900 border border-zinc-800 p-4 space-y-3"
            >
              {/* Imagem */}
              {produto.imagens?.[0]?.url ? (
                <img
                  src={produto.imagens[0].url}
                  alt={produto.nome}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-zinc-800 flex items-center justify-center">
                  <span className="text-zinc-600 text-sm">Sem imagem</span>
                </div>
              )}

              <div>
                <h3 className="text-white font-bold">{produto.nome}</h3>
                <p className="text-zinc-400 text-sm">{produto.categoria}</p>
                <p className="text-yellow-500 font-bold">
                  R$ {Number(produto.preco).toFixed(2)}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <span
                  className={`text-xs uppercase tracking-wider px-2 py-1 ${
                    produto.ativo
                      ? "bg-green-900 text-green-400"
                      : "bg-red-900 text-red-400"
                  }`}
                >
                  {produto.ativo ? "Ativo" : "Inativo"}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => abrirEdicao(produto)}
                    className="text-yellow-500 text-sm hover:text-yellow-400 uppercase tracking-wider"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => deletar(produto.id)}
                    className="text-red-400 text-sm hover:text-red-300 uppercase tracking-wider"
                  >
                    Deletar
                  </button>
                </div>
              </div>
            </div>
          ))}

          {produtos.length === 0 && (
            <div className="col-span-3 text-center py-20">
              <p className="text-zinc-600">Nenhum produto cadastrado ainda.</p>
              <button
                onClick={() => { setEditando(produtoVazio); setModal(true); }}
                className="mt-4 text-yellow-500 underline text-sm"
              >
                Cadastrar primeiro produto
              </button>
            </div>
          )}
        </div>
      </main>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-zinc-900 border border-zinc-700 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-zinc-800 flex items-center justify-between">
              <h2 className="text-yellow-500 font-bold uppercase tracking-wider">
                {editando.id ? "Editar Produto" : "Novo Produto"}
              </h2>
              <button
                onClick={() => setModal(false)}
                className="text-zinc-400 hover:text-white text-xl"
              >
                ✕
              </button>
            </div>

            <div className="p-6 space-y-4">
              {/* Nome */}
              <div>
                <label className="text-zinc-400 text-xs uppercase tracking-wider block mb-1">Nome</label>
                <input
                  value={editando.nome}
                  onChange={(e) => setEditando({ ...editando, nome: e.target.value })}
                  className="w-full bg-black border border-zinc-700 text-white px-4 py-2 focus:border-yellow-500 outline-none"
                />
              </div>

              {/* Descrição */}
              <div>
                <label className="text-zinc-400 text-xs uppercase tracking-wider block mb-1">Descrição</label>
                <textarea
                  value={editando.descricao}
                  onChange={(e) => setEditando({ ...editando, descricao: e.target.value })}
                  rows={3}
                  className="w-full bg-black border border-zinc-700 text-white px-4 py-2 focus:border-yellow-500 outline-none resize-none"
                />
              </div>

              {/* Preços */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-zinc-400 text-xs uppercase tracking-wider block mb-1">Preço de Venda</label>
                  <input
                    type="number"
                    value={editando.preco}
                    onChange={(e) => setEditando({ ...editando, preco: Number(e.target.value) })}
                    className="w-full bg-black border border-zinc-700 text-white px-4 py-2 focus:border-yellow-500 outline-none"
                  />
                </div>
                <div>
                  <label className="text-zinc-400 text-xs uppercase tracking-wider block mb-1">Preço de Custo</label>
                  <input
                    type="number"
                    value={editando.preco_custo}
                    onChange={(e) => setEditando({ ...editando, preco_custo: Number(e.target.value) })}
                    className="w-full bg-black border border-zinc-700 text-white px-4 py-2 focus:border-yellow-500 outline-none"
                  />
                </div>
              </div>

              {/* Categoria */}
              <div>
                <label className="text-zinc-400 text-xs uppercase tracking-wider block mb-1">Categoria</label>
                <input
                  value={editando.categoria}
                  onChange={(e) => setEditando({ ...editando, categoria: e.target.value })}
                  className="w-full bg-black border border-zinc-700 text-white px-4 py-2 focus:border-yellow-500 outline-none"
                  placeholder="Ex: Brasileirão, Premier League..."
                />
              </div>

              {/* Imagens */}
              <div>
                <label className="text-zinc-400 text-xs uppercase tracking-wider block mb-2">
                  Imagens (URLs — até 5)
                </label>
                {editando.imagens.map((url, i) => (
                  <input
                    key={i}
                    value={url}
                    onChange={(e) => {
                      const novas = [...editando.imagens];
                      novas[i] = e.target.value;
                      setEditando({ ...editando, imagens: novas });
                    }}
                    className="w-full bg-black border border-zinc-700 text-white px-4 py-2 focus:border-yellow-500 outline-none mb-2"
                    placeholder={`URL da imagem ${i + 1}`}
                  />
                ))}
              </div>

              {/* Estoque */}
              <div>
                <label className="text-zinc-400 text-xs uppercase tracking-wider block mb-2">
                  Estoque por Tamanho
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {editando.estoque.map((item, i) => (
                    <div key={item.tamanho} className="flex items-center gap-2">
                      <span className="text-zinc-400 text-sm w-10">{item.tamanho}</span>
                      <input
                        type="number"
                        min={0}
                        value={item.quantidade}
                        onChange={(e) => {
                          const novo = [...editando.estoque];
                          novo[i].quantidade = Number(e.target.value);
                          setEditando({ ...editando, estoque: novo });
                        }}
                        className="flex-1 bg-black border border-zinc-700 text-white px-2 py-1 focus:border-yellow-500 outline-none text-center"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Ativo */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="ativo"
                  checked={editando.ativo}
                  onChange={(e) => setEditando({ ...editando, ativo: e.target.checked })}
                  className="w-4 h-4 accent-yellow-500"
                />
                <label htmlFor="ativo" className="text-zinc-400 text-sm uppercase tracking-wider">
                  Produto ativo (visível na vitrine)
                </label>
              </div>

              {/* Botões */}
              <div className="flex gap-3 pt-2">
                <button
                  onClick={salvar}
                  disabled={loading}
                  className="flex-1 bg-yellow-500 text-black font-bold py-3 uppercase tracking-wider hover:bg-yellow-400 disabled:opacity-50"
                >
                  {loading ? "Salvando..." : "Salvar Produto"}
                </button>
                <button
                  onClick={() => setModal(false)}
                  className="flex-1 border border-zinc-700 text-zinc-400 py-3 uppercase tracking-wider hover:border-zinc-500"
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}