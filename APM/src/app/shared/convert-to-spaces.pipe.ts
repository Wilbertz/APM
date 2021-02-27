import { createOfflineCompileUrlResolver } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convertToSpaces'
})
export class ConvertToSpacesPipe implements PipeTransform{
    transform(value: string, character: string): string {
        console.log('In transform');
        var result = value.replace(character, ' ');
        console.log(result);
        return result;
    }
}