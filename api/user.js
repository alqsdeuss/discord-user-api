export default function handler(req, res) {
  const { id } = req.query;

  if (!id) {
    res.status(400).json({ error: "Missing 'id' query parameter" });
    return;
  }

  // Date generate automat pe baza id-ului, ca exemplu
  const userData = {
    id,
    username: `User_${id.slice(-4)}`, // ultimele 4 cifre din id
    discriminator: ("0000" + (parseInt(id.slice(-4)) % 10000)).slice(-4), // un discriminator 0000-9999
    avatar_url: `https://cdn.discordapp.com/avatars/${id}/avatar.png`
  };

  res.status(200).json(userData);
}
