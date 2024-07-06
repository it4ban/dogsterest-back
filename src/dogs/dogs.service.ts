import { Injectable } from '@nestjs/common';
import { UpdateDogDto } from './dto/update-dog.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Dog } from './entities/dog.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DogsService {
  constructor(
    @InjectRepository(Dog)
    private dogRepository: Repository<Dog>,
  ) {}

  findAll() {
    return this.dogRepository.find();
  }

  findOne(id: number) {
    return this.dogRepository.findOneBy({ id });
  }

  async updateOne(id: number, updateDogDto: UpdateDogDto) {
    return await this.dogRepository.update(id, updateDogDto);
  }
}
