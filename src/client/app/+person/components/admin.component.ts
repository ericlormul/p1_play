import {Component} from 'angular2/core';
import {ProgramService} from '../../shared/index';
import {LoginService} from '../../shared/index';
import {OnInit} from 'angular2/core';
import {Router} from 'angular2/router';
declare var Trumbowyg: any;

@Component({
	selector: 'person-admin',
	templateUrl: 'app/+person/components/admin.component.html',
	styleUrls: ['app/+person/components/admin.component.css'],
	providers: [ProgramService]
})

export class PersonAdminComponent implements OnInit {
	errorMessage:string;
	program ={};
	status = {success: false, fail: false };

	constructor(
		private programService:ProgramService, private loginService:LoginService,
		private _router:Router
	) {}

	ngOnInit() {
		// if(!this.loginService.getPerson() || this.loginService.getRole() !== 'admin') {
		// 	this._router.navigate(['Home']);
		// }
		// $('#description').trumbowyg();
	}

	submitProgram() {
		this.programService.create(this.program, this.loginService.getToken())
			.subscribe(() => {
				this.program = {};
				this.status.success = true;
				setTimeout(() => this.status.success=false, 3000);
			}, error => {
				this.errorMessage = error;
				this.status.fail = true;
				setTimeout(() => this.status.fail=false, 3000);
			});
	}
}
