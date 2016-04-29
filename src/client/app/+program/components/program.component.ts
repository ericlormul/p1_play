import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core';
import {ProgramService} from '../../shared/index';
import {RouteParams} from 'angular2/router';


@Component({
	selector: 'p1-program',
	templateUrl: 'app/+program/components/program.component.html',
	styleUrls: ['app/+program/components/program.component.css'],
	providers: [ProgramService]
})

export class ProgramComponent implements OnInit {
	id: number;
	program: any;
	errorMessage: string;

	constructor(private _programService: ProgramService, private routeParams: RouteParams) {};

	ngOnInit() {
		this.id = Number(this.routeParams.get('id'));
		this.getProgram();
	}

	getProgram() {
		this._programService.get(this.id)
			.subscribe(program => this.program = program, error => this.errorMessage = <any>error);
	}

}
