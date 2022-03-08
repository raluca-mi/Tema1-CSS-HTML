import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mail'
})
export class MailPipe implements PipeTransform {

  transform(firstName: string, surname: string, age:number): string {
    return firstName+'-'+surname+age.toString()+"@company.com";
  }

}
