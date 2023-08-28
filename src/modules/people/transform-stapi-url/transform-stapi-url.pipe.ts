import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TransformStapiUrlPipe implements PipeTransform {
  constructor(private configService: ConfigService) {
    //Seria bueno tener esto en un unico punto, link de posible implementacion https://www.tomray.dev/nestjs-config
    this.baseUrlSwapi = this.configService.get<string>('baseUrlSwapi');
    this.apiUrl = this.configService.get<string>('apiUrl');
  }
  private baseUrlSwapi;
  private apiUrl;
  transform(value: any, metadata: ArgumentMetadata) {
    return {
      ...value,
      homeworld: value.homeworld.replace(this.baseUrlSwapi, this.apiUrl),
      films: value.films.map((film: string) =>
        film.replace(this.baseUrlSwapi, this.apiUrl),
      ),
      vehicles: value.vehicles.map((vehicle: string) =>
        vehicle.replace(this.baseUrlSwapi, this.apiUrl),
      ),
      starships: value.starships.map((starship: string) =>
        starship.replace(this.baseUrlSwapi, this.apiUrl),
      ),
      url: value.url.replace(this.baseUrlSwapi, this.apiUrl),
    };
  }
}
