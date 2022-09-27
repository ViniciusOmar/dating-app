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
                console.log(response);
            },
            error: error =>
            {
                console.log("Error message: " + error.error);
                console.log(error);
            }
        })
    }

    logout()
    {
        this.accountService.logout();
    }
}
