import { Injectable } from '@nestjs/common';
import { CreateDogDto } from './dto/create-dog.dto';

@Injectable()
export class DogsService {
  create(createDogDto: CreateDogDto) {
    return 'This action adds a new dog';
  }

  findAll() {
    return `This action returns all dogs`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dog`;
  }

  remove(id: number) {
    return `This action removes a #${id} dog`;
  }
}
