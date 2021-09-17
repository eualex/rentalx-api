import { inject, injectable } from 'tsyringe'

import {
  ICategoryRepository,
  ICreateCategoryDTO
} from '../../repositories/ICategoriesRepository'

@injectable()
export class CreateCategoryUseCase {
  constructor(
    @inject('CategoryRepository')
    private categoryRepository: ICategoryRepository
  ) {}

  async execute({ description, name }: ICreateCategoryDTO): Promise<void> {
    const categoryAlreadyExists = await this.categoryRepository.findByName(name)

    if (categoryAlreadyExists) {
      throw new Error('Category already exists!')
    }

    await this.categoryRepository.create({ name, description })
  }
}
