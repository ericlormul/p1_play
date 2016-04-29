import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {ProgramService} from '../../shared/index';
import {ROUTER_DIRECTIVES} from 'angular2/router';

@Component({
	selector: 'p1-program-directory',
  templateUrl: 'app/+program_directory/components/program-directory.component.html',
  styleUrls: ['app/+program_directory/components/program-directory.component.css'],
  providers: [ProgramService],
  directives: [ROUTER_DIRECTIVES]
})

export class ProgramDirectoryComponent implements OnInit {
	selectedCategory: string;
	categories: string[];
	programsByCategory: any;
	errorMessage: string;

	constructor(private programService: ProgramService) {}

	ngOnInit() {
		this.categories = ['High School','friends','family','photos'];
		this.clickCategory(this.categories[0]);
	}

	clickCategory(category: string) {
		this.selectedCategory = category;
		this.programService.getByCategory(category)
				.subscribe(programs => this.programsByCategory = programs, error => this.errorMessage = <any>error);
	}
}
