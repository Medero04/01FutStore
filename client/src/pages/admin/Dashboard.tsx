import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const COLORS = ["#EAB308", "#F59E0B", "#D97706", "#B45309", "#92400E"];

export default function AdminDashboard() {
  const [, setLocation] = useLocation();
  const [produtos, setProdutos] = useState<any[]>([]);
  const [estoque, setEstoque] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem("admin_token");
  const admin = JSON.parse(localStorage.getItem("admin_info") || "{}");

  useEffect(() => {
    async function fetchData() {
      try {
        const [prodRes, estRes] = await Promise.all([
          fetch("/api/produtos"),
          fetch("/api/estoque", {
            headers: { Authorization: `Bearer ${token}` },
          }),
        ]);
        const prodData = await prodRes.json();
        const estData = await estRes.json();
        setProdutos(prodData);
        setEstoque(estData);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  function handleLogout() {
    localStorage.removeItem("admin_token");
    localStorage.removeItem("admin_info");
    setLocation("/admin/login");
  }

  // Estatísticas
  const totalProdutos = produtos.length;
  const produtosAtivos = produtos.filter((p) => p.ativo).length;
  const totalEstoque = estoque.reduce((acc: number, e: any) => acc + (e.quantidade || 0), 0);
  const estoqueZerado = estoque.filter((e: any) => e.quantidade === 0).length;

  // Dados para gráfico de estoque por produto
  const estoqueByProduto = produtos.map((p) => ({
    nome: p.nome?.substring(0, 15) + "...",
    total: estoque
      .filter((e: any) => e.id === p.id)
      .reduce((acc: number, e: any) => acc + (e.quantidade || 0), 0),
  }));

  // Dados para gráfico de categorias
  const categorias = produtos.reduce((acc: any, p) => {
    const cat = p.categoria || "Sem categoria";
    acc[cat] = (acc[cat] || 0) + 1;
    return acc;
  }, {});
  const categoriasData = Object.entries(categorias).map(([name, value]) => ({
    name,
    value,
  }));

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
              className="text-yellow-500 text-sm uppercase tracking-wider border-b border-yellow-500 pb-1"
            >
              Dashboard
            </button>
            <button
              onClick={() => setLocation("/admin/produtos")}
              className="text-zinc-400 text-sm uppercase tracking-wider hover:text-white transition-colors"
            >
              Produtos
            </button>
            <button
              onClick={() => setLocation("/admin/estoque")}
              className="text-zinc-400 text-sm uppercase tracking-wider hover:text-white transition-colors"
            >
              Estoque
            </button>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-zinc-400 text-sm">{admin.nome}</span>
          <button
            onClick={handleLogout}
            className="text-red-400 text-sm uppercase tracking-wider hover:text-red-300"
          >
            Sair
          </button>
        </div>
      </header>

      <main className="p-6 space-y-6">
        {/* Cards de estatísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Total de Produtos", value: totalProdutos, color: "text-yellow-500" },
            { label: "Produtos Ativos", value: produtosAtivos, color: "text-green-400" },
            { label: "Itens em Estoque", value: totalEstoque, color: "text-blue-400" },
            { label: "Tamanhos Esgotados", value: estoqueZerado, color: "text-red-400" },
          ].map((card) => (
            <div key={card.label} className="bg-zinc-900 border border-zinc-800 p-6">
              <p className="text-zinc-400 text-xs uppercase tracking-wider mb-2">
                {card.label}
              </p>
              <p className={`text-4xl font-bold ${card.color}`}>{card.value}</p>
            </div>
          ))}
        </div>

        {/* Gráficos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Estoque por produto */}
          <div className="bg-zinc-900 border border-zinc-800 p-6">
            <h2 className="text-zinc-400 text-xs uppercase tracking-wider mb-4">
              Estoque por Produto
            </h2>
            {estoqueByProduto.length > 0 ? (
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={estoqueByProduto}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#27272a" />
                  <XAxis dataKey="nome" tick={{ fill: "#71717a", fontSize: 10 }} />
                  <YAxis tick={{ fill: "#71717a", fontSize: 10 }} />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#18181b", border: "1px solid #3f3f46" }}
                    labelStyle={{ color: "#fafafa" }}
                  />
                  <Bar dataKey="total" fill="#EAB308" />
                </BarChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-zinc-600 text-sm text-center py-10">
                Nenhum produto cadastrado
              </p>
            )}
          </div>

          {/* Categorias */}
          <div className="bg-zinc-900 border border-zinc-800 p-6">
            <h2 className="text-zinc-400 text-xs uppercase tracking-wider mb-4">
              Produtos por Categoria
            </h2>
            {categoriasData.length > 0 ? (
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={categoriasData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}`}
                  >
                    {categoriasData.map((_, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{ backgroundColor: "#18181b", border: "1px solid #3f3f46" }}
                  />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <p className="text-zinc-600 text-sm text-center py-10">
                Nenhuma categoria cadastrada
              </p>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}