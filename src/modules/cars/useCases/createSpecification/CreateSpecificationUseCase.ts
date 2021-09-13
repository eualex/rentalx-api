import {
  ICreateSpecificationDTO,
  ISpecificationsRepository
} from '../../repositories/ISpecificationsRepository'

export class CreateSpecificationUseCase {
  constructor(private specificationRepository: ISpecificationsRepository) {}

  execute({ name, description }: ICreateSpecificationDTO): void {
    const specificationAlreadyExists =
      this.specificationRepository.findByName(name)

    if (specificationAlreadyExists) {
      throw new Error(`Specification ${name} already exists`)
    }

    this.specificationRepository.create({ name, description })
  }
}
