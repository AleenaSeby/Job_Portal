import { Pipe, PipeTransform } from '@angular/core';
import { IJob } from './job';

@Pipe({
  name: 'SearchPipe'
})

export class SearchPipe implements PipeTransform {
  transform(items: Array<IJob>, expSearch: string, locSearch: string, skillSearch: string, companySearch: string) {
    if (items && items.length) {
      return items.filter(item => {
        if (expSearch && item.experience.toLowerCase().indexOf(expSearch.toLowerCase()) === -1) {
          return false;
        }
        if (locSearch && item.location.toLowerCase().indexOf(locSearch.toLowerCase()) === -1) {
          return false;
        }
        if (skillSearch && item.skills.toLowerCase().indexOf(skillSearch.toLowerCase()) === -1) {
          return false;
        }
        if (companySearch && item.companyname.toLowerCase().indexOf(companySearch.toLowerCase()) === -1) {
          return false;
        }

        return true;
      })
    }
    else {
      return items;
    }
  }
}


