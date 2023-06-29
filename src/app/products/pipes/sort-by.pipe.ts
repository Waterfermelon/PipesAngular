import { Pipe, PipeTransform } from '@angular/core';
import { Album } from '../interfaces/album.interface';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(albums: Album[], sortBy?: keyof Album | ''): Album[] {
    switch( sortBy ){
      case 'name':
        return albums.sort( (a,b) => (a.name > b.name ) ? 1 : -1 );
      
      case 'owned':
        return albums.sort( (a,b) => (a.owned > b.owned ) ? 1 : -1 );

      case 'color':
        return albums.sort( (a,b) => (a.color > b.color ) ? 1 : -1 );

      default:
        return albums;
    }

  }

}
