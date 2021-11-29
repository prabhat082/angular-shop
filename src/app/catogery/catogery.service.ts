import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {AngularFireAuthModule} from 'angularfire2/auth';
import{ AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument} from "angularfire2/firestore"

import {AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable} from 'angularfire2/database';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


export class Category {
  // Unique Id
  id!: string;
  // The title
  title!: string;
  // Description
  desc!: string;
  // Path to small image
  imageS!: string;
  // Path to large image
  imageL!: string;
}

@Injectable()
  export class CategoryService {

  // URL to Categories web api
  private categoriesUrl = 'categories';

  // // We keep categories in cache variable
  // private categories: FirebaseListObservable<Category[]> ;

  constructor(private http: HttpClient,
              private af: AngularFireAuthModule,
              private db: AngularFireDatabase,
              afdb : AngularFireDatabase) {
 
  }

  getCategories(): Observable<Category[]> {
    return this.db.database
      .list(this.categoriesUrl)
      .catch(this.handleError);
  }


  private handleError(error: any): Observable<any> {
    let errMsg = (error.message) ? error.message : error.status ?
      `${error.status} - ${error.statusText}` : 'Server error';
    window.alert(`An error occurred: ${errMsg}`);
    return Observable.throw(errMsg);
  }


  getCategory(id: string) {
    return this.db.database
      .object(this.categoriesUrl + `/${+id - 1}`)
      .catch(this.handleError);
  }
}