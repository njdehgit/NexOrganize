import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.json({
    message: 'Welcome to NexOrganize API',
    version: '1.0.0',
    endpoints: {
      health: '/health',
      api: '/api'
    }
  });
});

app.get('/health', (req, res) => {
  res.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// API routes
app.get('/api/clients', (req, res) => {
  res.json({
    message: 'Clients endpoint - Coming soon',
    data: []
  });
});

app.get('/api/projects', (req, res) => {
  res.json({
    message: 'Projects endpoint - Coming soon',
    data: []
  });
});

app.get('/api/invoices', (req, res) => {
  res.json({
    message: 'Invoices endpoint - Coming soon',
    data: []
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 NexOrganize API server running on port ${PORT}`);
  console.log(`📋 Health check: http://localhost:${PORT}/health`);
  console.log(`🌐 API endpoints: http://localhost:${PORT}/api`);
});