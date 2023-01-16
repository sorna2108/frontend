import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  public avail:boolean = false;
  public msg:string="";
  private baseUri: string = "https://backend-j2g3.onrender.com";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient, private router: Router) { }


  addPizza(body:any) {

    return this.http.post('https://backend-j2g3.onrender.com/addtocart', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }


  deletePizza(body:any) {
    return this.http.post('https://backend-j2g3.onrender.com/deletefromcart', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }


 EmptyCheck() {
    return this.http.get(this.baseUri + "/emptycheck", { headers: this.headers });
  }

  deletecart()
  {
    return this.http.post(this.baseUri + "/placeorder", { headers: this.headers });
  }
}
