import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {CampService, Camp} from '../../shared/index';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
	selector: 'p1-camp-directory',
  templateUrl: 'app/+camp_directory/components/camp-directory.component.html',
  styleUrls: ['app/+camp_directory/components/camp-directory.component.css'],
  providers: [CampService],
  directives: [ROUTER_DIRECTIVES]
})

export class CampDirectoryComponent implements OnInit {
	selectedCategory: string;
	categories: string[];
	campsByCategory: Camp[];
	errorMessage: string;

	constructor(private campService: CampService) {}

	ngOnInit() {
		this.categories = ['High School','friends','family','photos'];
		this.clickCategory(this.categories[0]);
	}

	clickCategory(category: string) {
		this.selectedCategory = category;
		this.campService.get_by_category(category)
				.subscribe(camps => this.campsByCategory = camps, error => this.errorMessage = <any>error);
	}
}
