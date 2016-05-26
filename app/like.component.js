System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var LikeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LikeComponent = (function () {
                function LikeComponent() {
                    this.onChange = new core_1.EventEmitter();
                }
                LikeComponent.prototype.onClick = function () {
                    this.liked = !this.liked;
                    this.liked ? this.likes++ : this.likes--;
                    this.onChange.emit({
                        likedStatus: this.liked,
                        totalLikes: this.likes
                    });
                };
                __decorate([
                    core_1.Input("likeStatus"), 
                    __metadata('design:type', Boolean)
                ], LikeComponent.prototype, "liked", void 0);
                __decorate([
                    core_1.Input("totalLikes"), 
                    __metadata('design:type', Number)
                ], LikeComponent.prototype, "likes", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], LikeComponent.prototype, "onChange", void 0);
                LikeComponent = __decorate([
                    core_1.Component({
                        selector: 'like',
                        template: "<p>\n                <i \n                class=\"glyphicon glyphicon-heart\"\n                (click)=\"onClick()\"\n                [style.color] = \"liked ? 'Deeppink': '#777'\" \n                ></i> {{likes}} Likes\n                </p>",
                        styles: ["p {font-size: 20px}"]
                    }), 
                    __metadata('design:paramtypes', [])
                ], LikeComponent);
                return LikeComponent;
            }());
            exports_1("LikeComponent", LikeComponent);
        }
    }
});
//# sourceMappingURL=like.component.js.map