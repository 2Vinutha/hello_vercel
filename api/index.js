module.exports = (req, res) => {
  const name = process.env.NAME || "Vercel + Serverless";
  res.json({ 
    message: `Hello from ${name} 👋`, 
    timeUtc: new Date().toISOString() 
  });
};
