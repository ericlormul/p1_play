import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';
import {Camp} from '../../shared/index';
import {CampService} from '../../shared/index';
import {ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
	selector: 'p1-search',
	templateUrl: 'app/+search/components/search.component.html',
	styleUrls: ['app/+search/components/search.component.css'],
	directives: [CORE_DIRECTIVES, FORM_DIRECTIVES, ROUTER_DIRECTIVES],
	providers: [CampService]
})

export class SearchComponent {
	keyWord: string;
	result: Camp[];
	errorMessage: string;

	constructor(private campService: CampService) {}

  /*
   * @returns return false to prevent default form submit behavior to refresh the page.
   */

	search(query: string): boolean {
		if(!query) query = '';
		this.campService.search(query)
				.subscribe(camps => this.result = camps, error => this.errorMessage = <any>error);
		return false;
	}
}
