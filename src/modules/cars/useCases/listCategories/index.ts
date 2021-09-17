import { CategoryRepository } from '../../repositories/implementations/CategoryRepository'
import { ListCategoriesController } from './ListCategoriesController'
import { ListCategoriesUseCase } from './ListCategoriesUseCase'

export default (): ListCategoriesController => {
  const categoryRepository = null

  const listCategoriesUseCase = new ListCategoriesUseCase(categoryRepository)

  const listCategoriesController = new ListCategoriesController(
    listCategoriesUseCase
  )

  return listCategoriesController
}
