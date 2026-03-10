import { Router } from "express";
import pool from "../db.js";
import { authMiddleware } from "../middleware/auth.js";

const router = Router();

// Listar todos os produtos (público)
router.get("/", async (_req, res) => {
  try {
    const { rows: produtos } = await pool.query(`
      SELECT p.*,
        json_agg(
          json_build_object('id', i.id, 'url', i.url, 'ordem', i.ordem, 'is_capa', i.is_capa)
          ORDER BY i.ordem
        ) FILTER (WHERE i.id IS NOT NULL) as imagens,
        json_agg(
          json_build_object('tamanho', e.tamanho, 'quantidade', e.quantidade)
          ORDER BY e.tamanho
        ) FILTER (WHERE e.id IS NOT NULL) as estoque
      FROM produtos p
      LEFT JOIN produto_imagens i ON p.id = i.produto_id
      LEFT JOIN estoque e ON p.id = e.produto_id
      GROUP BY p.id
      ORDER BY p.created_at DESC
    `);

    res.json(produtos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar produtos" });
  }
});

// Buscar produto por ID (público)
router.get("/:id", async (req, res) => {
  try {
    const { rows } = await pool.query(
      "SELECT * FROM produtos WHERE id = $1",
      [req.params.id]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: "Produto não encontrado" });
    }

    const { rows: imagens } = await pool.query(
      "SELECT * FROM produto_imagens WHERE produto_id = $1 ORDER BY ordem",
      [req.params.id]
    );

    const { rows: estoque } = await pool.query(
      "SELECT * FROM estoque WHERE produto_id = $1",
      [req.params.id]
    );

    res.json({ ...rows[0], imagens, estoque });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar produto" });
  }
});

// Criar produto (admin)
router.post("/", authMiddleware, async (req, res) => {
  const { nome, descricao, preco, preco_custo, categoria, imagens, estoque } = req.body;

  try {
    const { rows } = await pool.query(
      "INSERT INTO produtos (nome, descricao, preco, preco_custo, categoria) VALUES ($1, $2, $3, $4, $5) RETURNING id",
      [nome, descricao, preco, preco_custo, categoria]
    );

    const produtoId = rows[0].id;

    if (imagens && imagens.length > 0) {
      for (let i = 0; i < imagens.length; i++) {
        await pool.query(
          "INSERT INTO produto_imagens (produto_id, url, ordem, is_capa) VALUES ($1, $2, $3, $4)",
          [produtoId, imagens[i], i, i === 0]
        );
      }
    }

    if (estoque && estoque.length > 0) {
      for (const item of estoque) {
        await pool.query(
          "INSERT INTO estoque (produto_id, tamanho, quantidade) VALUES ($1, $2, $3)",
          [produtoId, item.tamanho, item.quantidade]
        );
      }
    }

    res.status(201).json({ id: produtoId, message: "Produto criado com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao criar produto" });
  }
});

// Atualizar produto (admin)
router.put("/:id", authMiddleware, async (req, res) => {
  const { nome, descricao, preco, preco_custo, categoria, ativo } = req.body;

  try {
    await pool.query(
      "UPDATE produtos SET nome=$1, descricao=$2, preco=$3, preco_custo=$4, categoria=$5, ativo=$6 WHERE id=$7",
      [nome, descricao, preco, preco_custo, categoria, ativo, req.params.id]
    );

    res.json({ message: "Produto atualizado com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao atualizar produto" });
  }
});

// Deletar produto (admin)
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    await pool.query("DELETE FROM produtos WHERE id = $1", [req.params.id]);
    res.json({ message: "Produto deletado com sucesso!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao deletar produto" });
  }
});

export default router;