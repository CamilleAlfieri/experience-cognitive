export default (compilerOptions) => (req, res, next) => {
  console.log(req)
  res.send(`
  <html>
  <body>
    <div id="app"></div>
    <script src="/client.js"></script>
  </body>
  </html>
  `)
}