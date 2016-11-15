System.register(['@angular/core', './demo.service'], function(exports_1, context_1) {
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
    var core_1, demo_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (demo_service_1_1) {
                demo_service_1 = demo_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_demoService) {
                    this._demoService = _demoService;
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.getFoods();
                };
                AppComponent.prototype.getFoods = function () {
                    var _this = this;
                    this._demoService.getFoods().subscribe(function (data) { _this.foods = data.results; }, function (err) { return console.error(err); }, function () { return console.log(_this.foods); });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'demo-app',
                        template: "\n  <h1>Angular2 HTTP applications</h1>\n  <h2>From GET  API </h2>\n  <ul> \n  <li *ngFor=\"let book of foods\">{{book.name}}</li>\n    \n  </ul>"
                    }), 
                    __metadata('design:paramtypes', [demo_service_1.DemoService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map