import { PartialType } from '@nestjs/mapped-types';
import { DogDto } from './dog.dto';

export class UpdateDogDto extends PartialType(DogDto) {
  likeCount: number;
  onFavorite: boolean;
}
