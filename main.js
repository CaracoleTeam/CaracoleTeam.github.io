(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div style=\"\">\n    <app-header></app-header>\n    <router-outlet></router-outlet>\n    \n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'caracole-webpage';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _cronograma_cronograma_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./cronograma/cronograma.component */ "./src/app/cronograma/cronograma.component.ts");
/* harmony import */ var _membros_membros_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./membros/membros.component */ "./src/app/membros/membros.component.ts");
/* harmony import */ var _projetos_projetos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./projetos/projetos.component */ "./src/app/projetos/projetos.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _cronograma_cronograma_component__WEBPACK_IMPORTED_MODULE_8__["CronogramaComponent"],
                _membros_membros_component__WEBPACK_IMPORTED_MODULE_9__["MembrosComponent"],
                _projetos_projetos_component__WEBPACK_IMPORTED_MODULE_10__["ProjetosComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(_app_routes__WEBPACK_IMPORTED_MODULE_5__["ROUTES"])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _cronograma_cronograma_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cronograma/cronograma.component */ "./src/app/cronograma/cronograma.component.ts");
/* harmony import */ var _membros_membros_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./membros/membros.component */ "./src/app/membros/membros.component.ts");
/* harmony import */ var _projetos_projetos_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./projetos/projetos.component */ "./src/app/projetos/projetos.component.ts");




var ROUTES = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'cronograma', component: _cronograma_cronograma_component__WEBPACK_IMPORTED_MODULE_1__["CronogramaComponent"] },
    { path: 'membros', component: _membros_membros_component__WEBPACK_IMPORTED_MODULE_2__["MembrosComponent"] },
    { path: 'projetos', component: _projetos_projetos_component__WEBPACK_IMPORTED_MODULE_3__["ProjetosComponent"] },
];


/***/ }),

/***/ "./src/app/cronograma/cronograma.component.css":
/*!*****************************************************!*\
  !*** ./src/app/cronograma/cronograma.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table{\n    margin: 20px 20px 20px 0px;\n    box-shadow: 4px 9px 21px -2px rgba(0,0,0,0.74);\n}\n#calendarWrapper{\n    max-width:100%;position:relative;overflow:auto ;display: flex;align-items: center;\n}\nh2{\n    font-family: 'Oswald', sans-serif;\n    color:  #ef522a;\n}\n@media (max-width: 767px) {\n    \n    #calendarWrapper{\n        padding: 0;\n        display: block;\n    }\n    h2{\n        text-align: center;\n    }\n}\n"

/***/ }),

/***/ "./src/app/cronograma/cronograma.component.html":
/*!******************************************************!*\
  !*** ./src/app/cronograma/cronograma.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"p-5\" >\n    <h2>Cronograma</h2>\n    <div id=\"calendarWrapper\" class=\"px-0\" >\n  \n        <table class=\"table table-striped table-dark\" >\n        \n          <tbody>\n            <tr >\n              <th scope=\"row\">KICK OFF</th>\n              <td>16/08/2018</td>\n              \n            </tr>\n            <tr>\n              <th scope=\"row\">STATUS REPORT 1</th>\n              <td>13/09/2018</td>\n              \n            </tr>\n            <tr>\n              <th scope=\"row\">STATUS REPORT 2</th>\n              <td>25/10/2018</td>\n              \n            </tr>\n            <tr>\n              <th scope=\"row\">STATUS REPORT 3</th>\n              <td>06/12/2018</td>\n              \n            </tr>\n          </tbody>\n        </table>\n        <table class=\"table table-striped table-dark\" >\n        \n          <tbody>\n            <tr >\n              \n              <th scope=\"row\">Fase 1</th>\n              <td>Definição do problema</td>\n              <td>-----------</td>\n              <td>Dossiê V.1</td>\n            </tr>\n            <tr>\n              \n              <th scope=\"row\">Fase 2</th>\n              <td>Hipóteses vindas da pesquisa de campo</td>\n              <td>Abordagem técnica</td>\n              <td>Dossiê V.2</td>\n            </tr>\n            <tr>\n              \n              <th scope=\"row\">Fase 3</th>\n              <td>Protótipos testados com usuários</td>\n              <td>Protótipos de subsistemas</td>\n              <td>Dossiê V.3</td>\n            </tr>\n            <tr>\n              \n              <th scope=\"row\">Fase 4</th>\n              <td>POC</td>\n              <td>Pitch</td>\n              <td>Dossiê V.4</td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n</div>\n"

/***/ }),

/***/ "./src/app/cronograma/cronograma.component.ts":
/*!****************************************************!*\
  !*** ./src/app/cronograma/cronograma.component.ts ***!
  \****************************************************/
/*! exports provided: CronogramaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CronogramaComponent", function() { return CronogramaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CronogramaComponent = /** @class */ (function () {
    function CronogramaComponent() {
    }
    CronogramaComponent.prototype.ngOnInit = function () {
    };
    CronogramaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cronograma',
            template: __webpack_require__(/*! ./cronograma.component.html */ "./src/app/cronograma/cronograma.component.html"),
            styles: [__webpack_require__(/*! ./cronograma.component.css */ "./src/app/cronograma/cronograma.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CronogramaComponent);
    return CronogramaComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "footer{\n  background-color: #131313;\n  position: fixed;\n  bottom: 0;\n  width: 100%;\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <article>\n      \n      <div style=\"display:flex;align-items: center;justify-content: center;\">\n        <a href=\"https://github.com/CaracoleTeam\"><img  src=\"/assets/git.svg\" class=\"mx-4\" style=\"width:70px;height: 70px;padding: 10px ;\"></a>\n        <a href=\"https://drive.google.com/drive/folders/0ADQDzsa-TTRiUk9PVA\"><img href=\"\" src=\"/assets/google.png\" class=\"mx-4\" style=\"width:70px;height: 70px;padding: 10px ;\"></a>\n        <a href=\"https://trello.com/grupoge\"><img src=\"/assets/trello.png\" class=\"mx-4\" style=\"width:70px;height: 70px;padding: 10px ;\"></a>\n      </div>\n   </article>\n   <p style=\"text-align:center; font-size: 13px;\">©2018 por Grupo Caracole C.E.S.A.R. School</p>\n</footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"shadow navbar navbar-expand-lg navbar-light bg-light py-0\" style=\"z-index:9999;\">\n  \n  <a class=\"navbar-brand\" href=\"index.html\">\n      <img src=\"/assets/logo.png\"  alt=\"\">\n    \n  </a>\n  \n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarText\" aria-controls=\"navbarText\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse  \" id=\"navbarText\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/']\" href=\"#\" >Home </a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/cronograma']\" href=\"#\">Cronograma</a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/membros']\"  href=\"#\">Membros</a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/projetos']\"  href=\"#\">Projetos</a>\n      </li>\n      <li class=\"nav-item\">\n          <a class=\"nav-link\" [routerLink]=\"['/contato']\" href=\"#\">Contato</a>\n      </li>\n      \n    </ul>\n    \n  </div>\n</nav>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {margin:0; padding: 0;}\n\n\n/** formata elementos que tem backgrounds parallax **/\n\n\n.bgParallax {\n    font-family: 'Oswald', sans-serif;\n    color:#FFF;\n    width: 100%;\n    position: relative;\n    min-height: 100%;\n    \n    background-position: 60% 50%;\n    background-repeat: repeat;\n    background-attachment: fixed;\n}\n\n\n/* Define backgrounds dos divs */\n\n\n#quemsomos {background-image: url('/assets/background.JPG');}\n\n\n#objectivo {background-color: #f4f4f4f4;}\n\n\n/** Formata o article que vai o texto **/\n\n\n#quemsomos article {\n  width: 90%;\n  text-align: left;\n  margin:0 auto;\n  padding: 100px 0px 100px 0px;\n  \n}\n\n\n#quemsomos p {\n    text-shadow:0 0 10px rgba(0,0,0,0.7);\n}\n\n\n#objectivo article {\n    text-align:right;\n    display:flex;\n    width: 90%;\n    padding: 50px 0 80px 0;\n    \n\n}\n\n\n#objectivo article div {\n    padding-right: 15px;\n    padding-left: 20px;\n}\n\n\n@media (max-width: 767px) {\n    #objectivo article{\n        display: contents;\n        text-align: center;\n        margin:0;\n    }\n    #objImg{\n        width: 100%;\n    }\n    #objectivo article div {\n        padding: 30px 10px 30px 10px;\n    }\n}\n\n\n#objectivo p {\n    color: #4c4c4c\n}\n\n\n/** formata texto **/\n\n\narticle h1 {font-size:40px;color: #ef522a; }\n\n\narticle p {line-height: 30px; font-size:20px; margin-top:15px;}\n\n\narticle p a {color:#FFF; text-decoration:none; font-size:30px;}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"quemsomos\" class=\"bgParallax\" data-speed=\"15\">\n    <article>\n       <h1>Quem somos?</h1>\n       <p>Somos uma Startup recifense, criada por seis alunos de graduação, que visa ajudar o meio social através da inovação e tecnologia. <br>\nA CARACOLE nasceu a partir da nossa vontade de mudar o que conhecemos e melhorar isto para as próximas gerações, de uma forma simples porém super inovadora. </p>\n    </article>\n</div>\n\n<div id=\"objectivo\" class=\"bgParallax shadow\" data-speed=\"15\">\n    <article style=\"\">\n        <div  >\n            <h1>Nosso objetivo</h1>\n            <p>A nossa aspiração é tornar aquilo que um dia foi complexo, em algo altamente intuitivo e acessível para todos.\n               Ou seja; transformar os meios sociais, otimizar problemas, criar soluções inovadoras e produzir experiências positivas aos nossos usuários. </p>\n        </div>\n        <div style=\"padding:0px 0  100px 0;\">\n            <img id=\"objImg\" src=\"/assets/fisio.jpg\" style=\"width:70%;\" >\n        </div>\n      \n      </article>\n        \n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/membros/membros.component.css":
/*!***********************************************!*\
  !*** ./src/app/membros/membros.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2{\n    font-family: 'Oswald', sans-serif;\n    color:  #ef522a;\n}\n\np{\n    line-height: 30px; font-size:20px; margin-top:15px;\n    font-family: 'Roboto',sans-serif;\n    \n}\n\n.memberContainer{\n    display: flex;\n    width: 300px;\n}\n\n@media (max-width: 767px) {\n    .memberContainer{\n        display: block;\n        \n    }\n    #maria{\n        height: 210px;\n    }\n}\n\n.memberItem{\n    text-align: center;\n    margin: 10px 40px 10px 40px;\n    \n}\n\n.memberItem img{\n    padding: 20px;\n    border-radius: 50%;\n    width: 100%\n}"

/***/ }),

/***/ "./src/app/membros/membros.component.html":
/*!************************************************!*\
  !*** ./src/app/membros/membros.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"p-5\">\n  <h2>Membros</h2>\n  <p>\n      Somos uma startup constituida por alunos de graduação da instituição C.E.S.A.R. (Centro de Estudos e Sistemas Avançados do Recife) dos cursos de Bacharelado de Ciência da Computação e Design. \n  </p>\n  <div class=\"memberContainer\">\n    <div class=\"memberItem\">\n        <img src=\"/assets/bela.JPG\">\n        <h4>Maria Isabela R. B. Teodoro</h4>\n        <h3>Design</h3>\n        <p>mirbt@cesar.school</p>\n      </div>\n    <div class=\"memberItem\">\n      <img src=\"/assets/joao.jpg\">\n      <h4>João Victor Pessoa</h4>\n      <h3>Ciência da computação</h3>\n      <p>jvpass@cesar.school</p>\n    </div>\n    <div class=\"memberItem\">\n        <img src=\"/assets/maria.jpg\" id=\"maria\" height=\"180px\">\n        <h4>Maria do Carmo A. A. Correia</h4>\n        <h3>Ciência da computação</h3>\n        <p>mcaac@cesar.school</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/membros/membros.component.ts":
/*!**********************************************!*\
  !*** ./src/app/membros/membros.component.ts ***!
  \**********************************************/
/*! exports provided: MembrosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembrosComponent", function() { return MembrosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MembrosComponent = /** @class */ (function () {
    function MembrosComponent() {
    }
    MembrosComponent.prototype.ngOnInit = function () {
    };
    MembrosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-membros',
            template: __webpack_require__(/*! ./membros.component.html */ "./src/app/membros/membros.component.html"),
            styles: [__webpack_require__(/*! ./membros.component.css */ "./src/app/membros/membros.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MembrosComponent);
    return MembrosComponent;
}());



/***/ }),

/***/ "./src/app/projetos/projetos.component.css":
/*!*************************************************!*\
  !*** ./src/app/projetos/projetos.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".projectDescriptionWrapper{\n    width: 100%;\n    \n    height: auto;\n    \n    \n    \n    \n}\n#descriptionHeader{\n    padding:10px;\n    background-color: #3D231B;\n    \n\n}\n.imagesWrapper{\n    display: flex;\n    position: relative;\n    margin-top: 20px;\n    max-width: 100%;\n    max-height: 300px;\n    \n}\n.imagesWrapper img{\n    width: 40%;\n    height: 100%;\n    margin-left: 40px;\n}\n.imagesWrapper p{\n    margin-left: 15px;\n}\nh2{\n    font-family: 'Oswald', sans-serif;\n    color: #F68C64\n}\nh4{\n    font-size: 20px;\n    color: whitesmoke;\n}"

/***/ }),

/***/ "./src/app/projetos/projetos.component.html":
/*!**************************************************!*\
  !*** ./src/app/projetos/projetos.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"projectDescriptionWrapper\">\n  <div id=\"descriptionHeader\" class=\"shadow\">\n      <h2 class=\"mx-4\">Projeto Avant</h2>\n      <h4 class=\"mx-4\">O projeto AVANT nasceu a partir de uma parceria com o IMIP (Instituto de Medicina Integral Professor Fernando Figueira), qual é uma entidade filantrópica brasileira situada no Recife, Pernambuco, e atua nas áreas de assistência médico-social, ensino, pesquisa e extensão comunitária.</h4>\n      \n  </div>\n  <div  class=\"imagesWrapper\" >\n      <img id=\"lala\" src=\"/assets/group2.jpg\" >\n      <p>\n          A princípio, o IMIP em contato com o C.E.S.A.R (Centro de Estudos e Sistemas Avançados do Recife), trouxe para a CARACOLE o desafio de realizar uma melhoria e otimização dos processos realizados na reabilitação de pacientes com AVC (Acidente Vascular Cerebral).\n \n\n          Após apresentações dos problemas que estavam impedindo no desenvolvimento de pesquisas e eficiência nos procedimentos realizados no instituto, identificou-se que seria necessária a criação de um método capaz de otimizar o trabalho realizado com os pacientes. Atualmente, o AVC é considerado uma doença de urgência médica, e que é responsável por 10% das internações hospitalares no Brasil, contudo, por ser uma doença tempo-dependente, quanto mais rápido o início dol tratamento, mais rápida é a possibilidade de recuperação sem sequelas. \n          \n          Hoje, o maior problema enfrentado pelo IMIP e que a CARACOLE resolveu abraçar, é: \"Como será avaliada a cadência, velocidade e comprimento dos pacientes que tiveram AVC\". No presente, é necessária toda uma equipe para realizar esse processo de reabilitação (pessoas para contar as passadas, para conferir a contagem, para medir o comprimento, para calcular a velocidade em que é realizada a cadência entre outros..), o que acaba atrasando algumas pesquisas do instituto em relação a esta doença. \n          \n          Para a concretização desse projeto, temos como um tempo base de 4 meses (qual corresponde ao semestre atual que está sendo cursado), onde passará por etapas metodológicas para a validação do mesmo. \n          \n          ​\n          \n          Nossa primeira entrega está acordada para o dia 16/08/2018, onde será apresentada a problemática atual do projeto. \n      </p>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/projetos/projetos.component.ts":
/*!************************************************!*\
  !*** ./src/app/projetos/projetos.component.ts ***!
  \************************************************/
/*! exports provided: ProjetosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjetosComponent", function() { return ProjetosComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjetosComponent = /** @class */ (function () {
    function ProjetosComponent() {
    }
    ProjetosComponent.prototype.ngOnInit = function () {
    };
    ProjetosComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projetos',
            template: __webpack_require__(/*! ./projetos.component.html */ "./src/app/projetos/projetos.component.html"),
            styles: [__webpack_require__(/*! ./projetos.component.css */ "./src/app/projetos/projetos.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProjetosComponent);
    return ProjetosComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/joao/Caracole/caracole-webpage/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map