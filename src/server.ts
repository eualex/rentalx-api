import express, { json } from 'express'
import swaggerUi from 'swagger-ui-express'

import { routes } from './routes'
import swaggerFile from './swagger.json'

import './database'

const app = express()

app.use(json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use(routes)

console.log('teste')

app.listen(3333, () => console.log('Server is running!'))
