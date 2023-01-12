import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { User } from '../../user';

@Component({
  selector: 'app-viewuser',
  templateUrl: './viewuser.component.html',
  styleUrls: ['./viewuser.component.css']
})
export class ViewuserComponent implements OnInit {
  msg: any = [];
  public users: User[];
  avail: boolean;
  arr: any[];
  constructor(public router: Router, public adminService: AdminService) { }

  ngOnInit(): void {
    this.check();
    this.readUser();
  }

  check() {
    this.adminService.check().subscribe(
      data => {
        console.log(data);
      },
      (error) => {

        if (error instanceof HttpErrorResponse) {

          this.router.navigate(['/login']);

        }
        console.log(error);
      }
    );

  }

  readUser() {
    this.adminService.getAllUser().subscribe(
      (data: any) => {
        this.arr = data.msg;
        this.users = data.msg;
        // console.log(data);
      },
      (error) => {

        if (error instanceof HttpErrorResponse) {

          this.router.navigate(['/login']);

        }
        console.log(error);
      }
    );
    // console.log();
  }
  block(user) {

    const userid = user._id;

    this.adminService.blockuser(userid).subscribe(
      data => {
        // console.log(data);
        this.adminService.avail = true;
        this.adminService.msg = 'Successfully Blocked User!!!';
        this.router.navigate(['/admin']);
      },
      (error) => {

        if (error instanceof HttpErrorResponse) {

          this.router.navigate(['/login']);

        }
        console.log(error);
      }
    );
  }

  unblock(user) {

    const userid = user._id;

    this.adminService.unblockuser(userid).subscribe(
      data => {
        // console.log(data);
        this.adminService.avail = true;
        this.adminService.msg = 'Successfully Unblocked User!!!';
        this.router.navigate(['/admin']);
      },
      (error) => {

        if (error instanceof HttpErrorResponse) {

          this.router.navigate(['/login']);

        }
        console.log(error);
      }
    );
  }

  delete(user) {

    const userid = user._id;
    this.adminService.deleteuser(userid).subscribe(
      data => {
        // console.log(data);
        this.adminService.avail = true;
        this.adminService.msg = 'Successfully Deleted User!!!';
        this.router.navigate(['/admin']);
      },
      (error) => {

        if (error instanceof HttpErrorResponse) {

          this.router.navigate(['/login']);

        }
        console.log(error);
      }
    );
  }
}