import { Injectable } from '@nestjs/common';
import { Dog } from 'src/dogs/entities/dog.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class FavouritesService {
  constructor(
    @InjectRepository(Dog)
    private dogRepository: Repository<Dog>,
  ) {}

  async getFavourites() {
    return await this.dogRepository.find({
      where: {
        onFavourite: true,
      },
    });
  }
}
