const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  let filePath = path.join(process.cwd(), 'data.json');
  if (!fs.existsSync(filePath)) {
    filePath = path.join(__dirname, '..', 'data.json');
  }

  if (req.method === 'GET') {
    try {
      if (fs.existsSync(filePath)) {
        const raw = fs.readFileSync(filePath, 'utf8');
        return res.status(200).json(JSON.parse(raw));
      } else {
        return res.status(404).json({ error: 'data.json not found' });
      }
    } catch (err) {
      return res.status(500).json({ error: 'Failed to read data.json', message: err.message });
    }
  }

  if (req.method === 'POST') {
    try {
      const payload = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      try {
        fs.writeFileSync(filePath, JSON.stringify(payload, null, 2), 'utf8');
      } catch (writeErr) {
        console.warn('Filesystem is read-only in Vercel serverless runtime:', writeErr.message);
      }
      return res.status(200).json({ success: true, message: 'Data synced successfully' });
    } catch (err) {
      return res.status(400).json({ error: 'Invalid JSON body', message: err.message });
    }
  }

  return res.status(405).json({ error: 'Method Not Allowed' });
};
