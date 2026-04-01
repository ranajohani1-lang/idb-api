export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();

  const { prompt } = req.body;

  const response = await fetch('https://backend.blockadelabs.com/api/v1/skybox', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-api-key': process.env.SKYBOX_API_KEY
    },
    body: JSON.stringify({
      prompt: prompt,
      skybox_style_id: 2
    })
  });

  const data = await response.json();
  res.status(200).json(data);
}
