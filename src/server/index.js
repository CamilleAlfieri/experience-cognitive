export default (compilerOptions) => (req, res, next) => {
  res.send(`
  <html>
  <body>
    <script src="/client.js"></script>
  </body>
  </html>
  `)
}