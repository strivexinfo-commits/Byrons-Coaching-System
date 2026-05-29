// Diese Datei läuft auf dem Server (geschützt). Dein KI-Schlüssel ist hier NICHT sichtbar —
// er kommt aus den Vercel "Environment Variables". Niemand kann ihn auslesen.

export default async function handler(req, res) {
  // Nur POST erlauben
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Nur POST erlaubt' });
  }

  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: 'Kein API-Schlüssel auf dem Server gesetzt.' });
  }

  try {
    const { system, content } = req.body || {};
    if (!content) {
      return res.status(400).json({ error: 'Kein Inhalt übergeben.' });
    }

    const r = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': apiKey,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',

        max_tokens: 1500,
        system: system || '',
        messages: [{ role: 'user', content }]
      })
    });

    const data = await r.json();
    if (data.error) {
      return res.status(500).json({ error: data.error.message || 'KI-Fehler' });
    }
    const text = (data.content && data.content[0] && data.content[0].text) || '';
    return res.status(200).json({ text });
  } catch (e) {
    return res.status(500).json({ error: 'Server-Fehler: ' + e.message });
  }
}
