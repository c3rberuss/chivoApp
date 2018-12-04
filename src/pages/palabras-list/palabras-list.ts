import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';

@IonicPage()
@Component({
  selector: 'page-palabras-list',
  templateUrl: 'palabras-list.html',
})
export class PalabrasListPage {

    items:any;
    limit:number;
    objects: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
            private database: DatabaseProvider) {
                this.limit = 10;
    }

    ionViewDidLoad() {
        this.items = this.database.get_list_palabras(this.limit).valueChanges();
    }

  doInfinite(infiniteScroll) {

    setTimeout(() => {

        // FIXME: arreglar el infinite scroll
        
        // this.objects.ref.get().then((snap)=>{
        //     let last = snap.docs[snap.docs.length-1];
        //
        //     this.database.get_palabras_scroll(last).snapshotChanges().subscribe( palabras => {
        //         let palabras_ = palabras.map( palabra => {
        //             return {
        //                 id: palabra.payload.doc.data().id,
        //                 palabra: palabra.payload.doc.data().palabra
        //             }
        //         });
        //
        //         this.items = this.items.concat(palabras_);
        //
        //     });
        // })
        this.limit = this.limit + 5;
        this.items = this.database.get_list_palabras(this.limit).valueChanges();

      infiniteScroll.complete();
  }, 800);
  }


}
