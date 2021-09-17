import { inject, injectable } from 'tsyringe'

import {
  ICreateSpecificationDTO,
  ISpecificationsRepository
} from '../../repositories/ISpecificationsRepository'

@injectable()
export class CreateSpecificationUseCase {
  constructor(
    @inject('SpecificationsRepository')
    private specificationRepository: ISpecificationsRepository
  ) {}

  execute({ name, description }: ICreateSpecificationDTO): void {
    const specificationAlreadyExists =
      this.specificationRepository.findByName(name)

    if (specificationAlreadyExists) {
      throw new Error(`Specification ${name} already exists`)
    }

    this.specificationRepository.create({ name, description })
  }
}
