import { Router } from 'express'

import { CategoryRepository } from '@repositories/CategoryRepository'
import { CreateCategoryService } from '@services/CreateCategoryService'

export const categoriesRoutes = Router()
const categoryRepository = new CategoryRepository()

categoriesRoutes.post('/', (req, res) => {
  const { name, description } = req.body

  const createCategoryService = new CreateCategoryService(categoryRepository)

  createCategoryService.execute({ name, description })

  return res.status(201).send()
})

categoriesRoutes.get('/', (_, res) => {
  const categories = categoryRepository.list()

  return res.status(200).json(categories)
})
