import {Component} from 'angular2/core';
import {LikeComponent} from './like.component'
@Component({
    selector: 'my-app',
    template: '<like [totalLikes] = "post.likes" [likeStatus] = "post.liked" (onChange) = "out($event)"></like>',
    directives: [LikeComponent]
})
export class AppComponent {
    post = {
        likes: 1,
        liked: false
    }
    out($event){
        console.log($event);
    }
}