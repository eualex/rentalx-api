import { CategoryRepository } from '@repositories/CategoryRepository'

interface IRequest {
  name: string
  description: string
}

export class CreateCategoryService {
  constructor(private categoryRepository: CategoryRepository) {}

  execute({ description, name }: IRequest): void {
    const categoryAlreadyExists = this.categoryRepository.findByName(name)

    if (categoryAlreadyExists) {
      throw new Error('Category already exists!')
    }

    this.categoryRepository.create({ name, description })
  }
}
