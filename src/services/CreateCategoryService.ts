import { CategoriesRepository } from "../repositories/implementations/CategoriesRepository";
import { ICategoriesRepository, ICreateCategoryDTO } from '../repositories/ICategoriesRepository';

interface IRequest {
  name: string,
  description: string,
}

class CreateCategoryService {
  constructor(private categoriesRepository: ICategoriesRepository ) {};

  execute({ name, description }: IRequest): void {
    const categoryAlreadExists = this.categoriesRepository.findbyName(name);
    if(categoryAlreadExists) {
      throw new Error ('Category Alread Exists!')
    }
    this.categoriesRepository.create({ name, description })
  }
}

export { CreateCategoryService };