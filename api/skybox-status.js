export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const { id } = req.query;

  const response = await fetch('https://backend.blockadelabs.com/api/v1/imagine/requests/' + id, {
    headers: {
      'x-api-key': process.env.SKYBOX_API_KEY
    }
  });

  const data = await response.json();
  res.status(200).json(data);
}
