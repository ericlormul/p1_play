import {Component} from 'angular2/core';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/common';

@Component({
	selector: 'p1-search',
	templateUrl: 'app/+search/components/search.component.html',
	styleUrls: ['app/+search/components/search.component.css'],
	directives: [CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class SearchComponent {
	keyWord: string;
}
