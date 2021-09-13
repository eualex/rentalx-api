import { Category } from '../models/Category'
import {
  ICategoryRepository,
  ICreateCategoryDTO
} from './ICategoriesRepository'

export class CategoryRepository implements ICategoryRepository {
  private categories: Category[]

  public static INSTANCE: CategoryRepository

  private constructor() {
    this.categories = []
  }

  public static getInstance(): CategoryRepository {
    if (!CategoryRepository.INSTANCE) {
      CategoryRepository.INSTANCE = new CategoryRepository()
    }

    return CategoryRepository.INSTANCE
  }

  create({ description, name }: ICreateCategoryDTO): void {
    const category = new Category()

    Object.assign(category, { name, description, created_at: new Date() })

    this.categories.push(category)
  }

  list(): Category[] {
    return this.categories
  }

  findByName(name: string): Category {
    const category = this.categories.find(
      c => c.name.toLowerCase().trim() === name.toLowerCase().trim()
    )

    return category
  }
}
