webpackJsonp([0],{

/***/ 136:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 136;

/***/ }),

/***/ 180:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 180;

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(298);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage() {
        this.goals = this.fetchGoals();
    }
    HomePage.prototype.fetchGoals = function () {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].of([
            {
                _id: '0',
                active: 1,
                title: 'Drink More Water',
                direction: 'min',
                progress: 1,
                target: 8,
                recurrence: 'day',
                tallies: [
                    { _id: 0, goalId: 0, value: 1 },
                    { _id: 1, goalId: 0, value: 1 },
                    { _id: 2, goalId: 0, value: -1 }
                ]
            },
            {
                _id: '1',
                active: 1,
                title: 'Drink Lesss Booze',
                direction: 'max',
                progress: 1,
                target: 8,
                recurrence: 'week',
                tallies: [
                    { _id: 0, goalId: 0, value: 1 },
                    { _id: 1, goalId: 0, value: 1 },
                    { _id: 2, goalId: 0, value: 1 }
                ]
            },
            {
                _id: '2',
                active: 1,
                title: 'Meditate',
                direction: 'min',
                progress: 1,
                target: 1,
                recurrence: 'day',
                tallies: [
                    { _id: 0, goalId: 0, value: 1 }
                ]
            },
        ]);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/csougsta/workspace/EmproovMe/src/app/pages/home/home.page.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle icon-only>\n      <ion-icon name=\'menu\'></ion-icon>\n    </button>\n    <ion-title>\n      Menus\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n \n<ion-content class="home-page-content">\n  <ion-card>\n  	<ion-card-content>\n  		<si-goal-tracker [goal]="goal" *ngFor="let goal of goals | async"></si-goal-tracker>\n  	</ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/csougsta/workspace/EmproovMe/src/app/pages/home/home.page.html"*/
    }),
    __metadata("design:paramtypes", [])
], HomePage);

//# sourceMappingURL=home.page.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(254);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home_page__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_goal_tracker_goal_tracker_component__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_goal_tracker_goal_tracker_option_menu__ = __webpack_require__(566);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home_page__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_7__components_goal_tracker_goal_tracker_component__["a" /* GoalTrackerComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_goal_tracker_goal_tracker_option_menu__["a" /* GoalTrackerOptionMenu */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home_page__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_8__components_goal_tracker_goal_tracker_option_menu__["a" /* GoalTrackerOptionMenu */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 297:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home_page__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home_page__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            if (platform.is('cordova')) {
                statusBar.styleDefault();
                splashScreen.hide();
            }
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/csougsta/workspace/EmproovMe/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button ion-item (click)="openPage(homePage)">\n        <ion-icon name="home"></ion-icon> Home\n      </button>\n      <button ion-item (click)="openPage(friendsPage)">\n        <ion-icon name="podium"></ion-icon> Statistics\n      </button>\n      <button ion-item (click)="openPage(eventsPage)">\n        <ion-icon name="settings"></ion-icon> Settings\n      </button>\n      <button ion-item (click)="logout()">\n        <ion-icon name="log-out"></ion-icon> Logout\n      </button>\n      <button ion-item menuClose>\n        Close Menu\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav #content [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/csougsta/workspace/EmproovMe/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 564:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoalTrackerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__goal_tracker_option_menu__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_goal__ = __webpack_require__(565);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// import core components


// import the option menu

// import models

// import dialog content for adding a new goal
//import { GoalSettingsComponent } from '../../views/goal-settings/goal-settings.component';
var GoalTrackerComponent = (function () {
    function GoalTrackerComponent(popoverCtrl) {
        this.popoverCtrl = popoverCtrl;
    }
    GoalTrackerComponent.prototype.ngOnInit = function () {
        // set the current color and percentage
        this.currentColor = this.colorStatus();
        this.currentPercentComplete = this.percentComplete();
    };
    // add one to the goal progrss
    GoalTrackerComponent.prototype.modProgress = function (i) {
        if (this.goal.progress + i < 0) {
            return;
        }
        this.goal.progress += i;
        this.currentColor = this.colorStatus();
        this.currentPercentComplete = this.percentComplete();
        //    this.goalService.tally(this.goal, i)
        //      .then( result => {
        //        if ( result !== true ) {
        //          console.log('there was an error saving progress');
        //        }
        //      });
    };
    // remove this goal
    GoalTrackerComponent.prototype.deleteGoal = function () {
        //    this.goalService.delete(this.goal)
        //      .then(result => {
        //        if ( result !== true ) {
        //          console.log('there was an error deleting this goal');
        //        }
        //      });
        //    removeChat(chat: Chat): void {
        //    Chats.remove({_id: chat._id}).subscribe(() => {
        //    });
        //  }
    };
    // update this goal
    GoalTrackerComponent.prototype.openSettings = function () {
        //    const DIALOGREF = this.dialog.open( GoalSettingsComponent );
        //    let instance = DIALOGREF.componentInstance;
        //    instance.goal = this.goal;
    };
    // calulate the current percentage complete
    GoalTrackerComponent.prototype.percentComplete = function (asString) {
        if (asString === void 0) { asString = true; }
        if (asString) {
            return (this.goal.progress / this.goal.target) * 100 + '%';
        }
        else {
            return (this.goal.progress / this.goal.target) * 100;
        }
    };
    // returns the appropriate color string depending on the warn level
    GoalTrackerComponent.prototype.colorStatus = function () {
        var PROGRESSNUM = this.goal.progress / this.goal.target;
        if (this.goal.direction === 'max') {
            if (PROGRESSNUM < 0.5) {
                return '#4CAF50';
            }
            else if (PROGRESSNUM >= 0.50 && PROGRESSNUM < 1) {
                return '#FFC107';
            }
            else if (PROGRESSNUM >= 1) {
                return '#F44336';
            }
        }
        else if (this.goal.direction === 'min') {
            if (PROGRESSNUM <= 0.25) {
                return '#F44336';
            }
            else if (PROGRESSNUM < 1 && PROGRESSNUM > 0.25) {
                return '#FFC107';
            }
            else if (PROGRESSNUM >= 1) {
                return '#4CAF50';
            }
        }
    };
    GoalTrackerComponent.prototype.optionsMenu = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_2__goal_tracker_option_menu__["a" /* GoalTrackerOptionMenu */]);
        popover.present({
            ev: myEvent
        });
    };
    return GoalTrackerComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__models_goal__["a" /* Goal */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__models_goal__["a" /* Goal */]) === "function" && _a || Object)
], GoalTrackerComponent.prototype, "goal", void 0);
GoalTrackerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'si-goal-tracker',template:/*ion-inline-start:"/Users/csougsta/workspace/EmproovMe/src/app/components/goal-tracker/goal-tracker.component.html"*/'<ion-grid id="gt-wrapper">\n	<ion-row class="gt-top" align-items-center>\n		<ion-col>\n			<span class="gt-title">{{goal.title}}</span>\n			<div class="progress-indicator" [ngStyle]="{\'width\': currentPercentComplete, \'background-color\': currentColor}"></div>\n			<button ion-button icon-only class="gt-settings" (click)="optionsMenu($event)">\n				<ion-icon name="more"></ion-icon>\n			</button>\n		</ion-col>\n	</ion-row>\n	<ion-row class="gt-bottom">\n		<ion-col class="left-button-col">\n			<button ion-button icon-only (click)="modProgress(-1)">\n				<ion-icon name="remove"></ion-icon>\n			</button>\n		</ion-col>\n		<ion-col col-6>\n			<span class="gt-progress">{{goal.progress}} / {{goal.target}}</span>\n		</ion-col>\n		<ion-col class="right-button-col">\n			<button ion-button icon-only (click)="modProgress(1)">\n				<ion-icon name="add"></ion-icon>\n			</button>\n		</ion-col>\n	</ion-row>\n</ion-grid>\n'/*ion-inline-end:"/Users/csougsta/workspace/EmproovMe/src/app/components/goal-tracker/goal-tracker.component.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* PopoverController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* PopoverController */]) === "function" && _b || Object])
], GoalTrackerComponent);

var _a, _b;
//# sourceMappingURL=goal-tracker.component.js.map

/***/ }),

/***/ 565:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Goal; });
var Goal = (function () {
    function Goal() {
    }
    return Goal;
}());

//# sourceMappingURL=goal.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoalTrackerOptionMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(137);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GoalTrackerOptionMenu = (function () {
    function GoalTrackerOptionMenu(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    GoalTrackerOptionMenu.prototype.close = function () {
        this.viewCtrl.dismiss();
    };
    return GoalTrackerOptionMenu;
}());
GoalTrackerOptionMenu = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        template: "\n    <ion-list>\n      <ion-list-header>Options</ion-list-header>\n      <button ion-item (click)=\"close()\">Delete</button>\n      <button ion-item (click)=\"close()\">Settings</button>\n      <button ion-item (click)=\"close()\">Cancel</button>\n    </ion-list>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ViewController */]) === "function" && _a || Object])
], GoalTrackerOptionMenu);

var _a;
//# sourceMappingURL=goal-tracker.option.menu.js.map

/***/ })

},[249]);
//# sourceMappingURL=main.js.map