export default function handler (req, res) {
  // Handle the incoming request and send a response
  res.status(200).json({ message: 'Hello from the server root!' })
}
