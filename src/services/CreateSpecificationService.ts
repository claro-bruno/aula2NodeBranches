import { SpecificationsRepository } from "../repositories/implementations/SpecificationsRepository";
import { ISpecificationsRepository, ICreateSpecificationDTO } from '../repositories/ISpecificationsRepository';

interface IRequest {
  name: string,
  description: string,
}

class CreateSpecificatinService {
  constructor(private specificationsRepository: ISpecificationsRepository ) {};

  execute({ name, description }: IRequest): void {
    const specificationAlreadExists = this.specificationsRepository.findbyName(name);
    if(specificationAlreadExists) {
      throw new Error ('Specification Alread Exists!')
    }
    this.specificationsRepository.create({ name, description })
  }
}

export { CreateSpecificatinService };