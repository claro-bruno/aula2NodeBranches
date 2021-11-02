import { Router } from 'express';
import { SpecificationsRepository } from '../repositories/implementations/SpecificationsRepository';
import { CreateSpecificatinService } from '../services/CreateSpecificationService';

const specificationsRoutes = Router();
const specificationsRepository = SpecificationsRepository.getInstance();

specificationsRoutes.post('/', (request, response) => {
  const {  name, description } = request.body;

  const createSpecificationService = new CreateSpecificatinService(specificationsRepository);
  createSpecificationService.execute({ name, description })
  return response.status(201).send();
});

specificationsRoutes.post('/', (request, response) => {
  const all = specificationsRepository.list();
  return response.json(all);
});

export { specificationsRoutes };