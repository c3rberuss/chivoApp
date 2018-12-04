import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import domtoimage from 'dom-to-image';
import { Platform, LoadingController } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-palabra-detail',
    templateUrl: 'palabra-detail.html',
})
export class PalabraDetailPage {

    public palabra: any;

    constructor(public navCtrl: NavController, public navParams: NavParams,
        public viewCtrl: ViewController, private loadingCtrl: LoadingController,
        private share: SocialSharing, private platform: Platform) {

            this.palabra = this.navParams.get("palabra");
        }

        close() {
            this.viewCtrl.dismiss();
        }

        shareInFacebook() {

            const loader = this.loadingCtrl.create({
              content: "Cargando..."
            });
            loader.present();

            domtoimage.toJpeg(document.getElementById("share-image"),
            { quality: 1.0 })
            .then(dataUrl => {
                // TEMP: solución temporal para generar las imagenes.

                this.share.share("chivoApp", "chivoApp :')", dataUrl, "enlace")
                    .then((e)=>{
                        console.log(e);
                        loader.dismiss();
                    })
                    .catch((e) => {
                        console.log(e);
                        loader.dismiss();
                    })
            })
            .catch(function(error) {
                console.error('oops, something went wrong!', error);
            });


        }

    }
