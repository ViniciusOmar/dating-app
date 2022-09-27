import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit
{
    loginModel:any = {};
    loggedIn: boolean = false;

    constructor(public accountService: AccountService) { }

    ngOnInit(): void
    {
    }

    login()
    {
        this.accountService.login(this.loginModel).subscribe(
        {
            next: response =>
            {
                this.loggedIn = true;
                console.log(response);
            },
            error: error =>
            {
                this.loggedIn = false;
                console.log("Error message: " + error.error);
                console.log(error);
            }
        })
    }

    logout()
    {
       this.loggedIn = false;
    }
}
