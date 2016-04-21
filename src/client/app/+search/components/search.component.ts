import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

import {CampService} from '../../shared/index';


@Component({
	selector: 'p1-search',
	templateUrl: 'app/+search/components/search.component.html',
	styleUrls: ['app/+search/components/search.component.css'],
	directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
	providers: [CampService]
})

export class SearchComponent {
	keyWord: string;
	search_result: string[];

	constructor(private campService: CampService) {}

  /*
   * @returns return false to prevent default form submit behavior to refresh the page.
   */

	search(query: string): boolean {
		if(!query) query = '';
		this.search_result = this.campService.search(query);
		return false;
	}
}
