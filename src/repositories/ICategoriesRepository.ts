import { Category } from "@models/Category"

export interface ICreateCategoryDTO {
  name: string
  description: string
}

export interface ICategoryRepository {
  findByName: (name: string) => Category
  list: () => Category[]
  create: ({ description, name }: ICreateCategoryDTO) => void
}
