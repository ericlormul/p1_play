import {Pipe} from 'angular2/core';

@Pipe({name: 'startsWith'})
export class StartsWithPipe {
  transform(array:any[], keyWord:string) {
  	return array.filter((item) => {return item.name.startsWith(keyWord);});
  }
}
