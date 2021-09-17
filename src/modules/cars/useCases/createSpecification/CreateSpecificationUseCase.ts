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

  async execute({ name, description }: ICreateSpecificationDTO): Promise<void> {
    const specificationAlreadyExists =
      await this.specificationRepository.findByName(name)

    if (specificationAlreadyExists) {
      throw new Error(`Specification ${name} already exists`)
    }

    await this.specificationRepository.create({ name, description })
  }
}
