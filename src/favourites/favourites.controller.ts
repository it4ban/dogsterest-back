import { Controller, Get } from '@nestjs/common';
import { FavouritesService } from './favourites.service';

@Controller('favourites')
export class FavouritesController {
  constructor(private readonly favouritesService: FavouritesService) {}

  @Get()
  getFavourtes() {
    return this.favouritesService.getFavourites();
  }
}
