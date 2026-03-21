const express = require('express');
const cors = require('cors');
const path = require('path');

const veiculosRouter = require('./routes/veiculos');
const clientesRouter = require('./routes/clientes');
const motoristasRouter = require('./routes/motoristas');
const contratosRouter = require('./routes/contratos');
const manutencoesRouter = require('./routes/manutencoes');
const acidentesRouter = require('./routes/acidentes');
const pagamentosRouter = require('./routes/pagamentos');
const relatoriosRouter = require('./routes/relatorios');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/veiculos', veiculosRouter);
app.use('/api/clientes', clientesRouter);
app.use('/api/motoristas', motoristasRouter);
app.use('/api/contratos', contratosRouter);
app.use('/api/manutencoes', manutencoesRouter);
app.use('/api/acidentes', acidentesRouter);
app.use('/api/pagamentos', pagamentosRouter);
app.use('/api/relatorios', relatoriosRouter);

// Serve frontend em produção
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'EletrichEnt Locação API' });
});

app.listen(PORT, () => {
  console.log(`🚗 EletrichEnt Locação - Servidor rodando em http://localhost:${PORT}`);
});
