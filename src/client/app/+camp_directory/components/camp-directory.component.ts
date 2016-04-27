import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {CampService, Camp} from '../../shared/index';

@Component({
	selector: 'p1-camp-directory',
  templateUrl: 'app/+camp_directory/components/camp-directory.component.html',
  styleUrls: ['app/+camp_directory/components/camp-directory.component.css'],
  providers: [CampService]
})

export class CampDirectoryComponent {
	selectedCategory = 'home';
	categories = ['home','friends','family','photos'];

	clickCategory(category: string) {
		this.selectedCategory = category;
	}
}
