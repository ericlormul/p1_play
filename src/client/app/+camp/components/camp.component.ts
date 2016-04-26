import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {CampService, Camp} from '../../shared/index';


@Component({
	selector: 'p1-camp',
	templateUrl: 'app/+camp/components/camp.component.html',
	styleUrls: ['app/+camp/components/camp.component.css'],
	providers: [CampService]
})

export class CampComponent implements OnInit {
	camp: Camp;
	errorMessage: string;

	constructor(private _campService: CampService) {};

	ngOnInit() { this.getCamp(); }

	getCamp() {
		this._campService.getCamp(1)
			.subscribe(camp => this.camp = camp, error => this.errorMessage = <any>error);
	}

}
