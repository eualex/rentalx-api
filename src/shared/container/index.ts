import { container } from 'tsyringe'

import { ICategoryRepository } from '../../modules/cars/repositories/ICategoriesRepository'
import { CategoryRepository } from '../../modules/cars/repositories/implementations/CategoryRepository'
import { SpecificationsRepository } from '../../modules/cars/repositories/implementations/SpecificationsRepository'
import { ISpecificationsRepository } from '../../modules/cars/repositories/ISpecificationsRepository'

container.registerSingleton<ICategoryRepository>(
  'CategoryRepository',
  CategoryRepository
)

container.registerSingleton<ISpecificationsRepository>(
  'SpecificationsRepository',
  SpecificationsRepository
)
