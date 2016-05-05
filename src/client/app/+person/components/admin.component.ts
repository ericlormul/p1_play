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
	session:any = {session: {}, location:{}};
	provider:any = {provider: {}, location:{}};
	categories:any[] = [{id:1, name: '旅游'},{id:2, name: '数学'}];
	status = {success: false, fail: false };
	msg = {success:'', fail:''};
	providers:any[] = [];
	programs:any[] = [];
	description:any;

	constructor(
		private programService:ProgramService, private loginService:LoginService,
		private _router:Router, private sessionService:SessionService,
		private providerService:ProviderService, private categoryService:CategoryService
	) {}

	ngOnInit() {
		if(!this.loginService.getPerson() || this.loginService.getRole() !== 'admin') {
			this._router.navigate(['Home']);
			return;
		}

		// this.categoryService.getAll()
		// 										.subscribe((categories) => {
		// 											this.categories = categories;
		// 										}, error => {
		// 											this.errorMessage = error;
		// 										});
		$('.datepicker').pickadate();
		this.description = CKEDITOR.replace('description');
		this.description.on( 'change', (evt: any) => this.program.description = evt.editor.getData()
		);
	}

	getProviders() {
		this.providerService.getAll()
												.subscribe(providers => {
													this.providers = providers;
												}, error => {
													this.errorMessage = error;
												});
	}

	selectProvider(id:number) {
		this.program.provider_id = id;
	}

	selectProgram(id:number) {
		this.session.session.program_id = id;
	}

	searchProgram(keyword:string) {
		this.programService.search(keyword)
											 .subscribe(programs => this.programs = programs,
											 	error => this.errorMessage = error);
	}

	getProgram() {
		if(this.program.id) {
			this.programService.get(this.program.id)
												 .subscribe(program => {
												 	this.program = program;
												 	this.description.setData(program.description);
												 },
												 		error => {
											 			this.errorMessage = error;
														this.msg.fail = error;
														this.status.fail = true;
														setTimeout(() => {
															this.status.fail=false;
															this.msg.fail = '';
														}, 3000);
												 		}
												 	);
												}
	}

	getSession() {
		if(this.session.session.id) {
					this.sessionService.get(this.session.session.id)
											 .subscribe(session => this.session = session,
											 		error => {
											 			this.errorMessage = error;
														this.msg.fail = error;
														this.status.fail = true;
														setTimeout(() => {
															this.status.fail=false;
															this.msg.fail = '';
														}, 3000);
											 		}
											 	);
											}
	}

	getProvider() {
		if(this.provider.provider.id) {
		this.providerService.get(this.provider.provider.id)
											 .subscribe(provider => this.provider = provider,
											 		error => {
											 			this.errorMessage = error;
														this.msg.fail = error;
														this.status.fail = true;
														setTimeout(() => {
															this.status.fail=false;
															this.msg.fail = '';
														}, 3000);
											 		}
											 	);
											}
	}

	submitProgram() {
		if(this.program.id) {
			this.programService.update(this.program, this.loginService.getToken())
				.subscribe((res) => {
					this.program = {};
					this.description.setData('');
					this.status.success = true;
					this.msg.success = 'Program has been updated. ID is ' + res.id + '.';
					setTimeout(() => {
						this.status.success=false;
						this.msg.success ='';
					}, 3000);
				}, error => {
					this.errorMessage = error;
					this.status.fail = true;
					this.msg.fail = error;
					setTimeout(() => {
						this.status.fail=false;
						this.msg.fail = '';
					}, 3000);
				});
		}else {
			this.programService.create(this.program, this.loginService.getToken())
				.subscribe((res) => {
					this.program = {};
					this.description.setData('');
					this.status.success = true;
					this.msg.success = 'New program has been created. ID is ' + res.id + '.';
					setTimeout(() => {
						this.status.success=false;
						this.msg.success ='';
					}, 3000);
				}, error => {
					this.errorMessage = error;
					this.status.fail = true;
					this.msg.fail = error;
					setTimeout(() => {
						this.status.fail=false;
						this.msg.fail = '';
					}, 3000);
				});
		}
	}

	submitSession() {
		if(this.session.session.id) {
			this.sessionService.update(this.session, this.loginService.getToken())
				.subscribe((res) => {
					this.session = {session: {}, location:{}};
					this.status.success = true;
					this.msg.success = 'Session has been updated. ID is ' + res.id + '.';
					setTimeout(() => {
						this.status.success=false;
						this.msg.success ='';
					}, 3000);
				}, error => {
					this.errorMessage = error;
					this.status.fail = true;
					this.msg.fail = error;
					setTimeout(() => {
						this.status.fail=false;
						this.msg.fail = '';
					}, 3000);
				});
		}else {
			this.sessionService.create(this.session, this.loginService.getToken())
				.subscribe((res) => {
					this.session = {session: {}, location:{}};
					this.status.success = true;
					this.msg.success = 'New session has been created. ID is ' + res.id + '.';
					setTimeout(() => {
						this.status.success=false;
						this.msg.success ='';
					}, 3000);
				}, error => {
					this.errorMessage = error;
					this.status.fail = true;
					this.msg.fail = error;
					setTimeout(() => {
						this.status.fail=false;
						this.msg.fail = '';
					}, 3000);
				});
		}
	}

	submitProvider() {
		if(this.provider.provider.id) {
			this.providerService.update(this.provider, this.loginService.getToken())
				.subscribe((res) => {
					this.provider = {provider: {}, location:{}};
					this.status.success = true;
					this.msg.success = 'Provider has been updated. ID is  ' + res.id + '.';
					setTimeout(() => {
						this.status.success=false;
						this.msg.success ='';
					}, 3000);
				}, error => {
					this.errorMessage = error;
					this.status.fail = true;
					this.msg.fail = error;
					setTimeout(() => {
						this.status.fail=false;
						this.msg.fail = '';
					}, 3000);
				});
		}else {
			this.providerService.create(this.provider, this.loginService.getToken())
				.subscribe((res) => {
					this.provider = {provider: {}, location:{}};
					this.status.success = true;
					this.msg.success = 'New provider has been created. ID is ' + res.id + '.';
					setTimeout(() => {
						this.status.success=false;
						this.msg.success ='';
					}, 3000);
				}, error => {
					this.errorMessage = error;
					this.status.fail = true;
					this.msg.fail = error;
					setTimeout(() => {
						this.status.fail=false;
						this.msg.fail = '';
					}, 3000);
				});
		}
	}

}
