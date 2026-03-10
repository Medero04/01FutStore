import { useState } from "react";
import { useLocation } from "wouter";

export default function AdminLogin() {
  const [, setLocation] = useLocation();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    setLoading(true);
    setErro("");

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      const data = await res.json();

      if (!res.ok) {
        setErro(data.error || "Erro ao fazer login");
        return;
      }

      localStorage.setItem("admin_token", data.token);
      localStorage.setItem("admin_info", JSON.stringify(data.admin));
      setLocation("/admin/dashboard");
    } catch {
      setErro("Erro de conexão com o servidor");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="bg-zinc-900 border border-yellow-500 p-8 w-full max-w-md">
        <h1 className="text-yellow-500 text-3xl font-bold mb-2 tracking-widest uppercase">
          01FutStore
        </h1>
        <p className="text-zinc-400 mb-8 text-sm uppercase tracking-wider">
          Área Administrativa
        </p>

        <div className="space-y-4">
          <div>
            <label className="text-zinc-400 text-xs uppercase tracking-wider block mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black border border-zinc-700 text-white px-4 py-3 focus:border-yellow-500 outline-none"
              placeholder="admin@futstore.com"
            />
          </div>

          <div>
            <label className="text-zinc-400 text-xs uppercase tracking-wider block mb-1">
              Senha
            </label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleLogin()}
              className="w-full bg-black border border-zinc-700 text-white px-4 py-3 focus:border-yellow-500 outline-none"
              placeholder="••••••••"
            />
          </div>

          {erro && (
            <p className="text-red-500 text-sm">{erro}</p>
          )}

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-yellow-500 text-black font-bold py-3 uppercase tracking-widest hover:bg-yellow-400 transition-colors disabled:opacity-50"
          >
            {loading ? "Entrando..." : "Entrar"}
          </button>
        </div>
      </div>
    </div>
  );
}