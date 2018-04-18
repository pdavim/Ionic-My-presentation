import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, } from 'ionic-angular';
//import { PostPage } from '../post/post';

/**
 * Generated class for the BlogPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-blog',
  templateUrl: 'blog.html',
})
export class BlogPage {
  //  @ViewChild('popoverContent', {read: ElementRef}) content: ElementRef;
  //  @ViewChild('popoverText', {read: ElementRef}) text: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}


ionViewDidLoad() {
  console.log('ionViewDidLoad BlogPage');
}


}
