import {Injectable} from "@angular/core";
import {Http, Response} from "@angular/http";
import {AngularFire, FirebaseListObservable} from "angularfire2";


import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import "rxjs/add/observable/empty";

export class Product {
  // Unique Id
  id!: string;
  // Ref on category belongs to
  categoryId!: string;
  // The title
  title!: string;
  // Price
  price!: number;
  // MArk product with specialproce
  isSpecial!: boolean;
  // Description
  desc!: string;
  // Path to small image
  imageS!: string;
  // Path to large image
  imageL!: string;
}

@Injectable()
export class ProductService {
  productUrl = 'products';

  constructor(private af: AngularFire) {
  }

  getProducts(category?: string, search?: string): Observable<Product[]> {
    if (category || search) {
      let query = <any>{};
      if (category) {
        query.orderByChild = "categoryId";
        query.equalTo = category;
      } else {
        query.orderByChild = "title";
        query.startAt = search.toUpperCase();
        query.endAt = query.startAt + "\uf8ff";
      }
      return this.af.database
        .list(this.productUrl, {
          query: query
        })
        .catch(this.handleError);
    } else {
      return this.af.database
        .list(this.productUrl)
        .catch(this.handleError);
    }
  }

  getProduct(id: string): Observable<Product> {
    return this.af.database
      .object(this.productUrl + `/${+id - 1}`)
      .catch(this.handleError);
  }

  private handleError(error: any): Observable<any> {
    let errMsg = (error.message) ? error.message : error.status ?
      `${error.status} - ${error.statusText}` : 'Server error';
    window.alert(`An error occurred: ${errMsg}`);
    return Observable.throw(errMsg);
  }
}