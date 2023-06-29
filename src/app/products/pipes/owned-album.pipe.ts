import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ownedAlbum'
})
export class OwnedAlbumPipe implements PipeTransform {

  transform(value: boolean): "Taylor's Version" | "Stolen Version" {
    return value
    ? "Taylor's Version"
    : "Stolen Version";
  }

}
