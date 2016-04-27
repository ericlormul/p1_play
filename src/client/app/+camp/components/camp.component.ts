import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {CampService, Camp} from '../../shared/index';
import {RouteParams} from 'angular2/router';


@Component({
	selector: 'p1-camp',
	templateUrl: 'app/+camp/components/camp.component.html',
	styleUrls: ['app/+camp/components/camp.component.css'],
	providers: [CampService]
})

export class CampComponent implements OnInit {
	id: number;
	camp: Camp;
	errorMessage: string;

	constructor(private _campService: CampService, private routeParams: RouteParams) {};

	ngOnInit() {
		this.id = Number(this.routeParams.get('id'));
		this.getCamp();
	}

	getCamp() {
		this._campService.getCamp(this.id)
			.subscribe(camp => this.camp = camp, error => this.errorMessage = <any>error);
	}

}
