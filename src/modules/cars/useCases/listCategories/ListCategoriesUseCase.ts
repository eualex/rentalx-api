import { Category } from '../../models/Category'
import { CategoryRepository } from '../../repositories/CategoryRepository'

export class ListCategoriesUseCase {
  constructor(private categoryRepository: CategoryRepository) {}

  execute(): Category[] {
    const categories = this.categoryRepository.list()

    return categories
  }
}
