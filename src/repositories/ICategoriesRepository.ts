import { Category }  from '../model/Category';

interface ICreateCategoryDTO {
  name: string,
  description: string,
};

interface ICategoriesRepository {
  findbyName(name: string): Category;
  list(): Category [];
  create({ name, description }: ICreateCategoryDTO): void;

}

export { ICategoriesRepository, ICreateCategoryDTO };