import {Component, Input, Output, EventEmitter} from 'angular2/core';

@Component({
    selector: 'like',
    template: `<p>
                <i 
                class="glyphicon glyphicon-heart"
                (click)="onClick()"
                [style.color] = "liked ? 'Deeppink': '#777'" 
                ></i> {{likes}} Likes
                </p>`,
    styles: ["p {font-size: 20px}"]
})
export class LikeComponent {

    @Input("likeStatus") liked: Boolean;
    @Input("totalLikes") likes: number;
    
    @Output() onChange = new EventEmitter();
    
    onClick() {
        this.liked = !this.liked;
        this.liked ? this.likes++ : this.likes--;
        this.onChange.emit({
            likedStatus: this.liked,
            totalLikes: this.likes
        });
    }
}