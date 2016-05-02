import {Component} from 'angular2/core';
import {ProgramService} from '../../shared/index';
import {LoginService} from '../../shared/index';
import {SessionService} from '../../shared/index';
import {ProviderService} from '../../shared/index';
import {CategoryService} from '../../shared/index';
import {StartsWithPipe} from '../../shared/index';
import {OnInit} from 'angular2/core';
import {Router} from 'angular2/router';

@Component({
	selector: 'person-admin',
	templateUrl: 'app/+person/components/admin.component.html',
	styleUrls: ['app/+person/components/admin.component.css'],
	providers: [ProgramService, SessionService, ProviderService, CategoryService],
	pipes: [StartsWithPipe]
})

export class PersonAdminComponent implements OnInit {
	errorMessage:string;
	program:any = {};
	session:any = {location:{}};
	provider:any = {location:{}};
	categories:any[] = [{id:1, name: '旅游'},{id:2, name: '数学'}];
	status = {success: false, fail: false };
	providers = [{id: 1, name: 'adjkjlj'},{id:2, name:'bcdfdafda'}];

	constructor(
		private programService:ProgramService, private loginService:LoginService,
		private _router:Router, private sessionService:SessionService,
		private providerService:ProviderService, private categoryService:CategoryService
	) {}

	ngOnInit() {
		// if(!this.loginService.getPerson() || this.loginService.getRole() !== 'admin') {
		// 	this._router.navigate(['Home']);
		// }

		// this.categoryService.getAll()
		// 										.subscribe((categories) => {
		// 											this.categories = categories;
		// 										}, error => {
		// 											this.errorMessage = error;
		// 										});

		let description = CKEDITOR.replace('description');
		description.on( 'change', evt => {
			this.program.description = evt.editor.getData();
		});
	}

	selectProvider(id:number) {
		this.program.provider = id;
	}

	getProgram() {
		if(this.program.id) {
			this.programService.get(this.program.id)
												 .subscribe(program => this.program = program,
												 		error => this.errorMessage = error
												 	);
												}
	}

	getSession() {
		if(this.session.id) {
					this.sessionService.get(this.session.id)
											 .subscribe(session => this.session = session,
											 		error => this.errorMessage = error
											 	);
											}
	}

	getProvider() {
		if(this.provider.id) {
		this.providerService.get(this.provider.id)
											 .subscribe(provider => this.provider = provider,
											 		error => this.errorMessage = error
											 	);
											}
	}

	submitprogram() {
		if(this.program.id) {
			this.programService.update(this.program, this.loginService.getToken())
				.subscribe(() => {
					this.program = {};
					this.status.success = true;
					setTimeout(() => this.status.success=false, 3000);
				}, error => {
					this.errorMessage = error;
					this.status.fail = true;
					setTimeout(() => this.status.fail=false, 3000);
				});
		}else {
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

	submitSession() {
		if(this.session.id) {
			this.sessionService.update(this.session, this.loginService.getToken())
				.subscribe(() => {
					this.session = {};
					this.status.success = true;
					setTimeout(() => this.status.success=false, 3000);
				}, error => {
					this.errorMessage = error;
					this.status.fail = true;
					setTimeout(() => this.status.fail=false, 3000);
				});
		}else {
			this.sessionService.create(this.session, this.loginService.getToken())
				.subscribe(() => {
					this.session = {};
					this.status.success = true;
					setTimeout(() => this.status.success=false, 3000);
				}, error => {
					this.errorMessage = error;
					this.status.fail = true;
					setTimeout(() => this.status.fail=false, 3000);
				});
		}
	}

	submitProvider() {
		if(this.provider.id) {
			this.providerService.update(this.provider, this.loginService.getToken())
				.subscribe(() => {
					this.provider = {};
					this.status.success = true;
					setTimeout(() => this.status.success=false, 3000);
				}, error => {
					this.errorMessage = error;
					this.status.fail = true;
					setTimeout(() => this.status.fail=false, 3000);
				});
		}else {
			this.providerService.create(this.provider, this.loginService.getToken())
				.subscribe(() => {
					this.provider = {};
					this.status.success = true;
					setTimeout(() => this.status.success=false, 3000);
				}, error => {
					this.errorMessage = error;
					this.status.fail = true;
					setTimeout(() => this.status.fail=false, 3000);
				});
		}
	}

}
