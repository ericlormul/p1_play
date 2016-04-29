import {Component} from 'angular2/core';
import {ProgramService} from '../../shared/index';
import {ROUTER_DIRECTIVES} from 'angular2/router';


@Component({
	selector: 'p1-search',
	templateUrl: 'app/+search/components/search.component.html',
	styleUrls: ['app/+search/components/search.component.css'],
	directives: [ROUTER_DIRECTIVES],
	providers: [ProgramService]
})

export class SearchComponent {
	keyWord: string;
	result: any;
	errorMessage: string;

	constructor(private programService: ProgramService) {}

  /*
   * @returns return false to prevent default form submit behavior to refresh the page.
   */

	search(query: string): boolean {
		if(query) {
			this.programService.search(query)
					.subscribe(programs => this.result = programs, error => this.errorMessage = <any>error);
		}

		return false;
	}
}
