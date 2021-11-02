import { Specification }  from '../model/Specification';

interface ICreateSpecificationDTO {
  name: string,
  description: string,
};

interface ISpecificationsRepository {
  findbyName(name: string): Specification;
  list(): Specification [];
  create({ name, description }: ICreateSpecificationDTO): void;

}

export { ISpecificationsRepository, ICreateSpecificationDTO };
