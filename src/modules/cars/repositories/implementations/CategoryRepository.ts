import { getRepository, Repository } from 'typeorm'

import { Category } from '../../entities/Category'
import {
  ICategoryRepository,
  ICreateCategoryDTO
} from '../ICategoriesRepository'

export class CategoryRepository implements ICategoryRepository {
  private repositories: Repository<Category>

  public static INSTANCE: CategoryRepository

  private constructor() {
    this.repositories = getRepository(Category)
  }

  public static getInstance(): CategoryRepository {
    if (!CategoryRepository.INSTANCE) {
      CategoryRepository.INSTANCE = new CategoryRepository()
    }

    return CategoryRepository.INSTANCE
  }

  async create({ description, name }: ICreateCategoryDTO): Promise<void> {
    const category = this.repositories.create({ description, name })

    await this.repositories.save(category)
  }

  async list(): Promise<Category[]> {
    const categories = await this.repositories.find()

    return categories
  }

  async findByName(name: string): Promise<Category> {
    const category = await this.repositories.findOne({ where: { name } })

    return category
  }
}
