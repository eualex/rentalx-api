import { Category } from '@modules/cars/models/Category'

import {
  ICategoryRepository,
  ICreateCategoryDTO
} from './ICategoriesRepository'

export class CategoryRepository implements ICategoryRepository {
  private categories: Category[]

  constructor() {
    this.categories = []
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
