// ============== Const Serv ==============
const express = require('express')
const app = express()
const port = 3000

// ============== Const's =================
const path = require('path')
const fs = require('fs')

// ============== Const Api ===============
const api = require('./api')

// =============== App ====================


// =================== Abrir o servidor ==========================
app.listen(port, () => {
  console.log(`O Servidor Esta Aberto Em: http://localhost:${port}`)
})
