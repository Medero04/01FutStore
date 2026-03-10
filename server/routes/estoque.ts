import { Router } from "express";
import pool from "../db.js";
import { authMiddleware } from "../middleware/auth.js";

const router = Router();

// Atualizar quantidade de estoque (admin)
router.put("/:produtoId/:tamanho", authMiddleware, async (req, res) => {
  const { quantidade } = req.body;

  try {
    await pool.query(
      `INSERT INTO estoque (produto_id, tamanho, quantidade)
       VALUES ($1, $2, $3)
       ON CONFLICT (produto_id, tamanho) DO UPDATE SET quantidade = $3`,
      [req.params.produtoId, req.params.tamanho, quantidade]
    );

    res.json({ message: "Estoque atualizado!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao atualizar estoque" });
  }
});

// Listar estoque completo (admin)
router.get("/", authMiddleware, async (_req, res) => {
  try {
    const { rows } = await pool.query(`
      SELECT p.id, p.nome, e.tamanho, e.quantidade
      FROM produtos p
      LEFT JOIN estoque e ON p.id = e.produto_id
      ORDER BY p.nome, e.tamanho
    `);
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao buscar estoque" });
  }
});

export default router;