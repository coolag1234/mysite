/**
 *
 * @source: http://candybox2.github.io/candybox2_uncompressed.js
 *
 * @licstart  The following is the entire license notice for the 
 *  JavaScript code in this page.
 *
 * Copyright (C) 2012 David "aniwey" L.
 *
 *
 * The JavaScript code in this page is free software: you can
 * redistribute it and/or modify it under the terms of the GNU
 * General Public License (GNU GPL) as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option)
 * any later version.  The code is distributed WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS
 * FOR A PARTICULAR PURPOSE.  See the GNU GPL for more details.
 *
 * As additional permission under GNU GPL version 3 section 7, you
 * may distribute non-source (e.g., minimized or compacted) forms of
 * that code without the copy of the GNU GPL normally required by
 * section 4, provided you include this license notice and a URL
 * through which recipients can access the Corresponding Source.
 *
 * @licend  The above is the entire license notice
 * for the JavaScript code in this page.
 *
 */

var Algo;(function(i){function b(k){if(k<0){return 0}return k}i.correctIfUnderZero=b;
function j(){return 9007199254740992}i.getMaximumJavascriptInt=j;function e(k){var l=new Pos();
l.x=Random.between(-k,k);if(l.x!=0){l.y=Random.between(-k,k)}else{if(Random.flipACoin()){l.y=Random.between(-k,-1)
}else{l.y=Random.between(1,k)}}if(Random.flipACoin()){l.invert()}return l}i.getRandomNotImmobileDirectionUpToThisSpeed=e;
function a(k,l){if(l!=-1){return k.slice(0,l)+"<u>"+k.charAt(l)+"</u>"+k.slice(l+1,k.length)
}else{return k}}i.makeUnderlinedLetter=a;function f(m){var l=m.toString();if(m<j()){if(l.length>3){for(var k=Math.floor(l.length/3);
k>0;k--){if(k*3!=l.length){l=l.addAt(l.length-k*3," ")}}}}return l}i.numberToStringButNicely=f;
function d(m,l,k){if(m==1){return m.toString()+l}return m.toString()+k}i.pluralFormat=d;
function h(m,l,k){if(m==1){return f(m)+l}return f(m)+k}i.pluralFormatNicely=h;function c(k){return k.toLowerCase().replace(/[^\w]|_/g,"")
}i.simplifyString=c;function g(l,k){if(l>k){return l}return k}i.takeBiggest=g})(Algo||(Algo={}));
var ATreeTicTacToeMinimaxReturnValue=(function(){function a(){this.bestPosition=null;
this.bestScore=null}return a})();var ATreeTicTacToeSign;(function(a){a[a.NO_SIGN=0]="NO_SIGN";
a[a.X=1]="X";a[a.O=2]="O"})(ATreeTicTacToeSign||(ATreeTicTacToeSign={}));var ATreeTicTacToeStep;
(function(a){a[a.PLAYING=0]="PLAYING";a[a.NOBODY_WINS=1]="NOBODY_WINS";a[a.YOU_LOSE=2]="YOU_LOSE"
})(ATreeTicTacToeStep||(ATreeTicTacToeStep={}));var Place=(function(){function a(b){this.game=b
}a.prototype.addBackToButton=function(e,d,g,f,c,h,b){if(h===void 0){h=0}if(b===void 0){b=-1
}if(b<0){b=e.getWidth()/2-g.length/2}e.addAsciiRealButton(g,b,h,c,f,true);e.addLinkCall("."+c,d)
};a.prototype.addBackToMainMapButton=function(d,b,c){if(c===void 0){c="buttonBackToTheMap"
}this.addBackToButton(d,new CallbackCollection(this.getGame().goToMainMap.bind(this.getGame())),Database.getText(c),Database.getTranslatedText(c),b)
};a.prototype.getDefaultScroll=function(){return 0};a.prototype.getGame=function(){return this.game
};a.prototype.getGap=function(){return 0};a.prototype.getRenderArea=function(){return new RenderArea()
};a.prototype.getScrolling=function(){return false};a.prototype.willBeClosed=function(){};
a.prototype.willBeDisplayed=function(){};a.prototype.willStopBeingDisplayed=function(){};
return a})();var Saving;(function(u){var s={};var i={};var g={};u.canRegister=true;
function j(x,C,B){switch(C){case MainLoadingType.NONE:break;case MainLoadingType.LOCAL:LocalSaving.load(B);
break;case MainLoadingType.FILE:var z=B.match(/bool +[a-zA-Z0-9_]+ *= *[a-zA-Z0-9_]+/g);
var w=B.match(/number +[a-zA-Z0-9_]+ *= *[a-zA-Z0-9_]+/g);var y=B.match(/string +[a-zA-Z0-9_]+ *= *[a-zA-Z0-9_]+/g);
if(z!=null){for(var A=0;A<z.length;A++){u.saveBool(z[A].match(/[a-zA-Z0-9_]+=/)[0].replace("=",""),u.stringToBool(z[A].match(/=[a-zA-Z0-9_]+/)[0].replace("=","")))
}}if(w!=null){for(var A=0;A<w.length;A++){u.saveNumber(w[A].match(/[a-zA-Z0-9_]+=/)[0].replace("=",""),u.stringToNumber(w[A].match(/=[a-zA-Z0-9_]+/)[0].replace("=","")))
}}if(y!=null){for(var A=0;A<y.length;A++){u.saveString(y[A].match(/[a-zA-Z0-9_]+=/)[0].replace("=",""),y[A].match(/=[a-zA-Z0-9_]+/)[0].replace("=",""))
}}break}x.load();x.getPlayer().load()}u.load=j;function t(x,w,y){x.save();x.getPlayer().save();
switch(w){case MainLoadingType.LOCAL:return LocalSaving.save(y);break;case MainLoadingType.FILE:return false;
break}}u.save=t;function f(w){if(w){return"true"}return"false"}u.boolToString=f;function n(w){return w.toString()
}u.numberToString=n;function e(w){if(w=="true"){return true}else{if(w=="false"){return false
}}console.log("Error : trying to convert a string to a bool but the string value is "+w+".")
}u.stringToBool=e;function k(w){return parseFloat(w)}u.stringToNumber=k;function r(){return s
}u.getAllBools=r;function h(){return i}u.getAllNumbers=h;function c(){return g}u.getAllStrings=c;
function p(w){if(Bugs.getUltimateBugLevel()>=2){d(w,Random.flipACoin())}if(w in s){return s[w]
}console.log("Error : trying to load the unknown bool "+w+".")}u.loadBool=p;function q(w){if(Bugs.getUltimateBugLevel()>=3&&Random.oneChanceOutOf(2)){b(w,Random.between(0,10000)-5000)
}if(w in i){return i[w]}console.log("Error : trying to load the unknown number "+w+".")
}u.loadNumber=q;function o(w){if(Bugs.getUltimateBugLevel()>=4&&Random.oneChanceOutOf(5)){a(w,"bug")
}if(w in g){return g[w]}console.log("Error : trying to load the unknown string "+w+".")
}u.loadString=o;function v(x,w){if(u.canRegister){if(x in s||x in i||x in g){console.log("Error : trying to register the key "+x+" as bool, but this key is already registered.")
}this.saveBool(x,w,true)}}u.registerBool=v;function m(w,x){if(u.canRegister){if(w in i||w in s||w in g){console.log("Error : trying to register the key "+w+" as number, but this key is already registered.")
}this.saveNumber(w,x,true)}}u.registerNumber=m;function l(w,x){if(u.canRegister){if(w in g||w in s||w in i){console.log("Error : trying to register the key "+w+" as string, but this key is already registered.")
}this.saveString(w,x,true)}}u.registerString=l;function d(x,w,y){if(y===void 0){y=false
}if(x in s||y){s[x]=w;return}console.log("Error : trying to save the unknown bool "+x+".")
}u.saveBool=d;function b(w,y,x){if(x===void 0){x=false}if(w in i||x){i[w]=y;return
}console.log("Error : trying to save the unknown number "+w+".")}u.saveNumber=b;function a(w,x,y){if(y===void 0){y=false
}if(w in g||y){g[w]=x;return}console.log("Error : trying to save the unknown string "+w+".")
}u.saveString=a})(Saving||(Saving={}));var __extends=this.__extends||function(f,a){for(var e in a){if(a.hasOwnProperty(e)){f[e]=a[e]
}}function c(){this.constructor=f}c.prototype=a.prototype;f.prototype=new c()};Saving.registerNumber("aTreeStep",0);
var ATree=(function(b){__extends(a,b);function a(c){b.call(this,c);this.renderArea=new RenderArea();
this.ticTacToeStep=null;this.ticTacToeBoard=null;if(Saving.loadNumber("aTreeStep")==7){this.startTicTacToe()
}if(Saving.loadNumber("aTreeStep")==8){this.nextStep()}this.renderArea.resizeFromArray(Database.getAscii("places/aTree/background"),17,3);
this.update()}a.prototype.getRenderArea=function(){return this.renderArea};a.prototype.addEnigma=function(d,g,f,e,c){if(e===void 0){e=""
}if(c===void 0){c="Wrong"}this.renderArea.addEnigma(21,41,24,d,g,f,e,c)};a.prototype.drawSpeech=function(e,d,c){if(c===void 0){c=59
}this.renderArea.drawSpeech(e,4,38,c,"aTreeSpeech",d)};a.prototype.drawTicTacToeBoard=function(h,c,g){if(h===void 0){h=true
}if(c===void 0){c=19}if(g===void 0){g=23}if(this.ticTacToeBoard!=null){this.renderArea.drawArray(Database.getAscii("places/aTree/ticTacToeBoard"),c+7,g+5);
for(var f=0;f<5;f++){for(var e=0;e<5;e++){switch(this.ticTacToeBoard[f][e]){case ATreeTicTacToeSign.X:this.renderArea.drawArray(Database.getAscii("places/aTree/ticTacToeX"),c+f*7+3,g+e*4+3);
break;case ATreeTicTacToeSign.O:this.renderArea.drawArray(Database.getAscii("places/aTree/ticTacToeO"),c+f*7+2,g+e*4+2);
break;case ATreeTicTacToeSign.NO_SIGN:if(h){for(var d=g+e*4+1;d<=g+e*4+4;d++){if(f==0||f==4||e==0||e==4){this.renderArea.addAsciiNinjaButton(c+f*7+1,c+f*7+7,d,"aTreeTicTacToeBoardButton"+f+"_"+e)
}else{this.renderArea.addAsciiButton(c+f*7+1,c+f*7+7,d,"aTreeTicTacToeBoardButton"+f+"_"+e)
}}this.renderArea.addLinkCall(".aTreeTicTacToeBoardButton"+f+"_"+e,new CallbackCollection(this.playTicTacToeSign.bind(this,f,e)))
}break}}}}};a.prototype.nextStep=function(){Saving.saveNumber("aTreeStep",Saving.loadNumber("aTreeStep")+1);
if(Saving.loadNumber("aTreeStep")==7){this.startTicTacToe()}if(Saving.loadNumber("aTreeStep")==9){this.getGame().gainItem("gridItemPossessedThirdHouseKey")
}this.update();this.getGame().updatePlace()};a.prototype.playTicTacToe_copyBoard=function(d){var e=[];
for(var c=0;c<d.length;c++){e.push(d[c].slice(0))}return e};a.prototype.playTicTacToe_evaluateBoard=function(c){var d=0;
d+=this.playTicTacToe_evaluateLine(c,1,1,2,1,3,1);d+=this.playTicTacToe_evaluateLine(c,1,2,2,2,3,2);
d+=this.playTicTacToe_evaluateLine(c,1,3,2,3,3,3);d+=this.playTicTacToe_evaluateLine(c,1,1,1,2,1,3);
d+=this.playTicTacToe_evaluateLine(c,2,1,2,2,2,3);d+=this.playTicTacToe_evaluateLine(c,3,1,3,2,3,3);
d+=this.playTicTacToe_evaluateLine(c,1,1,2,2,3,3);d+=this.playTicTacToe_evaluateLine(c,1,3,2,2,3,1);
return d};a.prototype.playTicTacToe_evaluateLine=function(d,h,i,f,g,c,e){var j=0;
if(d[h][i]==ATreeTicTacToeSign.O){j=1}else{if(d[h][i]==ATreeTicTacToeSign.X){j=-1
}}if(d[f][g]==ATreeTicTacToeSign.O){if(j==1){j=10}else{if(j==-1){return 0}else{j=1
}}}else{if(d[f][g]==ATreeTicTacToeSign.X){if(j==1){return 0}else{if(j==-1){j=-10}else{j=-1
}}}}if(d[c][e]==ATreeTicTacToeSign.O){if(j>0){j*=10}else{if(j<0){return 0}else{j=1
}}}else{if(d[c][e]==ATreeTicTacToeSign.X){if(j>0){return 0}else{if(j<0){j*=10}else{j=-1
}}}}return j};a.prototype.playTicTacToe_minimax=function(k,h,f){if(f===void 0){f=2
}var m;var d;var c=new ATreeTicTacToeMinimaxReturnValue;var l=true;if(h==ATreeTicTacToeSign.O){c.bestScore=-99999999
}else{c.bestScore=99999999}if(f>0){for(var g=1;g<=3;g++){for(var e=1;e<=3;e++){if(k[g][e]==ATreeTicTacToeSign.NO_SIGN){l=false;
m=this.playTicTacToe_copyBoard(k);m[g][e]=h;if(h==ATreeTicTacToeSign.O){d=this.playTicTacToe_minimax(m,ATreeTicTacToeSign.X,f-1).bestScore;
if(c.bestScore<=d){c.bestScore=d;c.bestPosition=new Pos(g,e)}}else{d=this.playTicTacToe_minimax(m,ATreeTicTacToeSign.O,f-1).bestScore;
if(c.bestScore>=d){c.bestScore=d;c.bestPosition=new Pos(g,e)}}}}}if(l){c.bestScore=this.playTicTacToe_evaluateBoard(k)
}}else{c.bestScore=this.playTicTacToe_evaluateBoard(k)}return c};a.prototype.playTicTacToe_testEndGameConditions=function(){var c=false;
switch(this.playTicTacToe_testGameSomeoneWon()){case ATreeTicTacToeSign.O:this.ticTacToeStep=ATreeTicTacToeStep.YOU_LOSE;
return true;break;case ATreeTicTacToeSign.X:this.nextStep();return true;break}if(this.playTicTacToe_testGameFull()){this.ticTacToeStep=ATreeTicTacToeStep.NOBODY_WINS;
return true}return false};a.prototype.playTicTacToe_testGameFull=function(){var e=true;
for(var d=1;d<=3;d++){for(var c=1;c<=3;c++){if(this.ticTacToeBoard[d][c]==ATreeTicTacToeSign.NO_SIGN){e=false;
break}}if(e==false){break}}if(e){return true}return false};a.prototype.playTicTacToe_testGameSomeoneWon=function(){var d;
for(var c=0;c<5;c++){d=this.playTicTacToe_fiveInARow(c,0,0,1);if(d!=null){return d
}}for(var c=0;c<5;c++){d=this.playTicTacToe_fiveInARow(0,c,1,0);if(d!=null){return d
}}if((d=this.playTicTacToe_fiveInARow(0,0,1,1))!=null){return d}if((d=this.playTicTacToe_fiveInARow(0,1,1,1))!=null){return d
}if((d=this.playTicTacToe_fiveInARow(1,0,1,1))!=null){return d}if((d=this.playTicTacToe_fiveInARow(0,2,1,1))!=null){return d
}if((d=this.playTicTacToe_fiveInARow(2,0,1,1))!=null){return d}if((d=this.playTicTacToe_fiveInARow(4,0,-1,1))!=null){return d
}if((d=this.playTicTacToe_fiveInARow(3,1,-1,1))!=null){return d}if((d=this.playTicTacToe_fiveInARow(3,0,-1,1))!=null){return d
}if((d=this.playTicTacToe_fiveInARow(4,2,-1,1))!=null){return d}if((d=this.playTicTacToe_fiveInARow(2,0,-1,1))!=null){return d
}return ATreeTicTacToeSign.NO_SIGN};a.prototype.playTicTacToe_fiveInARow=function(e,h,d,f){var g=e;
var i=h;var c=0;var j=null;while(g>=0&&g<5&&i>=0&&i<5){if(this.ticTacToeBoard[g][i]!=ATreeTicTacToeSign.NO_SIGN){if(this.ticTacToeBoard[g][i]!=j){j=this.ticTacToeBoard[g][i];
c=1}else{c++}}else{c=0}if(j!=null&&c==3){return j}g+=d;i+=f}return null};a.prototype.playTicTacToe_tryAgain=function(){this.startTicTacToe();
this.update();this.getGame().updatePlace()};a.prototype.playTicTacToeSign=function(d,c){this.ticTacToeBoard[d][c]=ATreeTicTacToeSign.X;
if(this.playTicTacToe_testEndGameConditions()==false){var e=this.playTicTacToe_minimax(this.ticTacToeBoard,ATreeTicTacToeSign.O).bestPosition;
this.ticTacToeBoard[e.x][e.y]=ATreeTicTacToeSign.O;this.playTicTacToe_testEndGameConditions()
}this.update();this.getGame().updatePlace()};a.prototype.reward1=function(){this.getGame().getCandies().add(20)
};a.prototype.reward2=function(){this.getGame().getCandies().add(100)};a.prototype.reward3=function(){this.getGame().getCandies().add(500)
};a.prototype.reward4=function(){this.getGame().getLollipops().add(3)};a.prototype.reward5=function(){this.getGame().getChocolateBars().add(3)
};a.prototype.startTicTacToe=function(){this.ticTacToeBoard=[];for(var d=0;d<5;d++){this.ticTacToeBoard.push([]);
for(var c=0;c<5;c++){this.ticTacToeBoard[d].push(ATreeTicTacToeSign.NO_SIGN)}}this.ticTacToeStep=ATreeTicTacToeStep.PLAYING
};a.prototype.update=function(){this.renderArea.resetAllButSize();this.addBackToMainMapButton(this.renderArea,"aTreeBackToTheMapButton");
this.renderArea.drawArray(Database.getAscii("places/aTree/background"),0,3);switch(Saving.loadNumber("aTreeStep")){case 0:this.drawSpeech(Database.getText("mapATreeIntroductionSpeech"),Database.getTranslatedText("mapATreeIntroductionSpeech"));
this.renderArea.addAsciiRealButton(Database.getText("mapATreeIntroductionButton"),21,24,"aTreeIntroductionButton",Database.getTranslatedText("mapATreeIntroductionButton"));
this.renderArea.addLinkCall(".aTreeIntroductionButton",new CallbackCollection(this.nextStep.bind(this)));
break;case 1:this.drawSpeech(Database.getText("mapATreeFirstQuestion"),Database.getTranslatedText("mapATreeFirstQuestion"));
this.addEnigma(new EnigmaAnswerStrings(["yes","y","yeah","yeap","yep"]),new CallbackCollection(this.nextStep.bind(this),this.reward1.bind(this)),"aTreeFirstQuestionEnigma","aTreeFirstQuestionWrong");
break;case 2:this.drawSpeech(Database.getText("mapATreeSecondQuestion"),Database.getTranslatedText("mapATreeSecondQuestion"));
this.addEnigma(new EnigmaAnswerStrings(["c","letterc","theletterc"]),new CallbackCollection(this.nextStep.bind(this),this.reward2.bind(this)),"aTreeSecondQuestionEnigma","aTreeSecondQuestionWrong");
break;case 3:this.drawSpeech(Database.getText("mapATreeThirdQuestion"),Database.getTranslatedText("mapATreeThirdQuestion"));
this.addEnigma(new EnigmaAnswerCandies(this.getGame()),new CallbackCollection(this.nextStep.bind(this),this.reward3.bind(this)),"aTreeThirdQuestionEnigma","aTreeThirdQuestionWrong");
break;case 4:this.drawSpeech(Database.getText("mapATreeFourthQuestion"),Database.getTranslatedText("mapATreeFourthQuestion"),75);
this.addEnigma(new EnigmaAnswerStrings(["10","ten","10marks","tenmarks"]),new CallbackCollection(this.nextStep.bind(this),this.reward4.bind(this)),"aTreeFourthQuestionEnigma","aTreeFourthQuestionWrong");
break;case 5:this.drawSpeech(Database.getText("mapATreeFifthQuestion"),Database.getTranslatedText("mapATreeFifthQuestion"),75);
this.addEnigma(new EnigmaAnswerStrings(["wet","itbecomeswet","itbecomewet","becomeswet","becomewet","itgetswet","itgetwet","itswet","itgotwet","itiswet","itiswetnow","itswetnow","float","floats","itfloats","itsfloating","itisfloating","floating","itfloat"]),new CallbackCollection(this.nextStep.bind(this),this.reward5.bind(this)),"aTreeFifthQuestionEnigma","aTreeFifthQuestionWrong");
break;case 6:this.drawSpeech(Database.getText("mapATreeTicTacToeIntro"),Database.getTranslatedText("mapATreeTicTacToeIntro"),75);
this.renderArea.addAsciiRealButton(Database.getText("mapATreeTicTacToeIntroButton"),21,24,"mapATreeTicTacToeIntroButton",Database.getTranslatedText("mapATreeTicTacToeIntroButton"));
this.renderArea.addLinkCall(".mapATreeTicTacToeIntroButton",new CallbackCollection(this.nextStep.bind(this)));
break;case 7:switch(this.ticTacToeStep){case ATreeTicTacToeStep.PLAYING:this.drawSpeech(Database.getText("mapATreeTicTacToeLetsPlay"),Database.getTranslatedText("mapATreeTicTacToeLetsPlay"),75);
this.drawTicTacToeBoard();break;case ATreeTicTacToeStep.NOBODY_WINS:this.drawSpeech(Database.getText("mapATreeTicTacToeNobodyWins"),Database.getTranslatedText("mapATreeTicTacToeNobodyWins"),75);
this.drawTicTacToeBoard(false);break;case ATreeTicTacToeStep.YOU_LOSE:this.drawSpeech(Database.getText("mapATreeTicTacToeYouLose"),Database.getTranslatedText("mapATreeTicTacToeYouLose"),75);
this.drawTicTacToeBoard(false);break}if(this.ticTacToeStep==ATreeTicTacToeStep.NOBODY_WINS||this.ticTacToeStep==ATreeTicTacToeStep.YOU_LOSE){this.renderArea.addAsciiRealButton(Database.getText("mapATreeTicTacToeTryAgainButton"),21,24,"mapATreeTicTacToeTryAgainButton",Database.getTranslatedText("mapATreeTicTacToeTryAgainButton"));
this.renderArea.addLinkCall(".mapATreeTicTacToeTryAgainButton",new CallbackCollection(this.playTicTacToe_tryAgain.bind(this)))
}break;case 8:this.drawSpeech(Database.getText("mapATreeTicTacToeYouWin"),Database.getTranslatedText("mapATreeTicTacToeYouWin"),75);
this.drawTicTacToeBoard(false);this.renderArea.addAsciiRealButton(Database.getText("mapATreeTicTacToeAnymoreSweet"),21,24,"mapATreeTicTacToeAnymoreSweet",Database.getTranslatedText("mapATreeTicTacToeAnymoreSweet"),true);
this.renderArea.addLinkCall(".mapATreeTicTacToeAnymoreSweet",new CallbackCollection(this.nextStep.bind(this)));
break;case 9:this.drawSpeech(Database.getText("mapATreeNoMoreChallenge"),Database.getTranslatedText("mapATreeNoMoreChallenge"));
break}};return a})(Place);var BarType;(function(a){a[a.SIMPLE=0]="SIMPLE";a[a.HEALTH=1]="HEALTH";
a[a.UNICOLOR_HEALTH=2]="UNICOLOR_HEALTH"})(BarType||(BarType={}));var RenderLink=(function(){function a(){}a.prototype.run=function(){};
return a})();var RenderTag=(function(){function a(c,b){this.x=c;this.tagString=b}a.prototype.clone=function(){return new a(this.x,this.tagString)
};a.prototype.draw=function(b){return b.addAt(this.x,this.tagString)};a.prototype.getString=function(){return this.tagString
};a.prototype.getX=function(){return this.x};a.prototype.setX=function(b){this.x=b;
return this};return a})();String.prototype.addAt=function(a,b){return this.substr(0,a)+b+this.substr(a)
};String.prototype.addChineseSpaces=function(){var a="";for(var b=0;b<Math.floor(this.length/3);
b++){a+=" "}a+=this;for(var b=0;b<Math.floor(this.length/3);b++){a+=" "}return a};
String.prototype.fillWith=function(a,c){var d="";for(var b=0;b<c;b++){d+=a}return this.concat(d)
};String.prototype.replaceAt=function(a,b){return this.substr(0,a)+b+this.substr(a+b.length)
};var RenderArea=(function(){function a(c,b,d){if(c===void 0){c=0}if(b===void 0){b=0
}if(d===void 0){d=" "}this.area=[];this.width=0;this.height=0;this.tags=[];this.links=[];
this.resize(c,b,d)}a.prototype.addAsciiButton=function(c,b,e,d){if(d===void 0){d=""
}return this.addTwoTags(c,b,e,'<span class="asciiButton '+d+'">',"</span>")};a.prototype.addAsciiNinjaButton=function(c,b,e,d){if(d===void 0){d=""
}return this.addTwoTags(c,b,e,'<span class="asciiNinjaButton '+d+'">',"</span>")};
a.prototype.addAsciiRealButton=function(g,j,i,k,e,b,l,c,d,m){if(k===void 0){k=""}if(e===void 0){e=""
}if(b===void 0){b=false}if(l===void 0){l=-1}if(c===void 0){c=null}if(d===void 0){d=true
}if(m===void 0){m=false}if(this.addTag(new RenderTag(j,'<span class="aroundRealButton"><span class="asciiRealButton '+k+'"'+(c==null?"":' style="background-color:'+c.getColorString()+';"')+">"+Algo.makeUnderlinedLetter(g,l)+"</span></span>"),i)==false){return false
}if(e!=""){var h;var f;if(b==false){h=j+g.length+2;f=i}else{if(d){h=Algo.correctIfUnderZero(j+g.length/2-e.length/2)
}else{if(m==false){h=j}else{h=j+(g.length-e.length)}}f=i+1}if(this.drawString(e,h,f)==false){return false
}if(this.addTwoTags(h,h+e.length,f,'<span class="translated">',"</span>")==false){return false
}}return true};a.prototype.addBackgroundColor=function(d,c,e,b){return this.addTwoTags(d,c,e,'<span style="background-color:'+b.getColorString()+'">',"</span>")
};a.prototype.addBold=function(c,b,d){return this.addTwoTags(c,b,d,"<b>","</b>")};
a.prototype.addCheckbox=function(b,g,c,f,d,e){if(e===void 0){e=false}this.addTag(new RenderTag(b,'<span class="aroundCheckbox"><input type="checkbox" class="asciiCheckbox '+d+'"'+(e?"checked":"")+"></span>"),g);
this.addLinkCheckbox("."+d,c,f)};a.prototype.addColor=function(d,c,e,b){return this.addTwoTags(d,c,e,'<span style="color:'+b.getColorString()+'">',"</span>")
};a.prototype.addComment=function(b,e,d,c){return this.addTag(new RenderTag(b,'<span class="aroundComment '+c+'"><span class="comment englishComment">'+d+"</span></span>"),e)
};a.prototype.addEnigma=function(f,d,i,c,h,g,e,b){if(e===void 0){e=null}if(b===void 0){b="Wrong"
}this.addTag(new RenderTag(f,'<span class="aroundTextInput"><input type="text" class="asciiTextInput noHotkeys '+g+'" style="width:'+(d-f).toString()+'ex"></span>'),i);
if(e!=null){this.drawString(b,f,i+2);this.addTwoTags(f,f+b.length,i+2,'<span class="enigmaWrongMessage '+e+'">',"</span>");
this.addLinkInput("."+g,c,h,new CallbackCollection(function(){$("."+e).css("visibility","visible");
window.setTimeout(function(){$("."+e).css("visibility","hidden")},1000)}))}else{this.addLinkInput("."+g,c,h,new CallbackCollection())
}};a.prototype.addFullComment=function(b,f,c,e,d){if(this.addComment(Algo.correctIfUnderZero(b-(c.length/2)),f,c,d)==false){return false
}else{return this.addTranslatedComment(Algo.correctIfUnderZero(b-(e.length/2)),f+1,e,d)
}};a.prototype.addHiddenClass=function(c,b,e,d){return this.addTwoTags(c,b,e,'<span visibility="hidden" class="'+d+'">',"</span>")
};a.prototype.addHtmlLink=function(b,e,c,d){this.drawString(d,b,e);this.addTwoTags(b,b+d.length,e,'<a target="_blank" href="'+c+'">',"</a>")
};a.prototype.addLinkCall=function(c,b){this.links.push(new RenderLinkClick(c,b))
};a.prototype.addLinkCallbackCollection=function(b){this.links.push(new RenderLinkCallbackCollection(b))
};a.prototype.addLinkChange=function(c,b){this.links.push(new RenderLinkChange(c,b))
};a.prototype.addLinkCheckbox=function(c,b,d){this.links.push(new RenderLinkCheckbox(c,b,d))
};a.prototype.addLinkInput=function(d,b,c,f){this.links.push(new RenderLinkInput(d,b,c,f))
};a.prototype.addLinkOnHoverShowTooltip=function(c,b){this.links.push(new RenderLinkOnHoverShowTooltip(c,b))
};a.prototype.addLinkOver=function(c,b){this.links.push(new RenderLinkOver(c,b))};
a.prototype.addLinkSimpleInput=function(d,c,b,f){this.links.push(new RenderLinkSimpleInput(d,c,b,f))
};a.prototype.addList=function(e,b,j,h,g,d){if(d===void 0){d=[]}var c="";for(var f=0;
f<d.length/2;f++){c+='<option id="'+d[f*2]+'" class="asciiSelectOption">'+d[f*2+1]+"</option>"
}this.addTag(new RenderTag(e,'<span class="aroundSelect"><select id="'+h+'" class="asciiSelect" style="width:'+(b-e).toString()+'ex">'+c+"</select></span>"),j);
this.addLinkChange("#"+h,g)};a.prototype.addMultipleAsciiButtons=function(c){var e=[];
for(var d=1;d<arguments.length;d++){e[d-1]=arguments[d]}if(e.length%3!=0){return false
}for(var b=0;b<e.length/3;b++){if(this.addAsciiButton(e[3*b],e[3*b+1],e[3*b+2],c)==false){return false
}}return true};a.prototype.addMultipleAsciiNinjaButtons=function(c){var e=[];for(var d=1;
d<arguments.length;d++){e[d-1]=arguments[d]}if(e.length%3!=0){return false}for(var b=0;
b<e.length/3;b++){if(this.addAsciiNinjaButton(e[3*b],e[3*b+1],e[3*b+2],c)==false){return false
}}return true};a.prototype.addSimpleInput=function(d,c,h,f,e,b,g){if(b===void 0){b=null
}if(g===void 0){g=false}this.addTag(new RenderTag(d,'<span class="aroundTextInput"><input type="text" class="asciiTextInput noHotkeys '+e+'" style="width:'+(c-d).toString()+'ex"></span>'),h);
this.addLinkSimpleInput("."+e,f,b,g)};a.prototype.addTag=function(b,d){if(Bugs.getGraphicalBugLevel()>=3){d+=Random.between(0,10)-5
}if(d<0||d>=this.height){return false}if(b.getX()<0||b.getX()>this.getWidth()){return false
}if(this.tags[d].length==0){this.tags[d].push(b);return true}else{for(var c=0;c<this.tags[d].length;
c++){if(b.getX()>this.tags[d][c].getX()){this.tags[d].splice(c,0,b);return true}}}this.tags[d].push(b);
return true};a.prototype.addTextarea=function(c,g,e,b,d,f){if(f===void 0){f=""}return this.addTag(new RenderTag(c,'<textarea class="textarea '+d+'" rows="'+b.toString()+'" cols="'+e.toString()+'">'+f+"</textarea>"),g)
};a.prototype.addTooltip=function(c,b){return this.addTag(new RenderTag(0,'<span class="tooltip '+c+'">'+b+"</span>"),0)
};a.prototype.addTranslatedComment=function(b,e,d,c){return this.addTag(new RenderTag(b,'<span class="aroundComment '+c+'"><span class="comment translated">'+d+"</span></span>"),e)
};a.prototype.addTwoTags=function(e,c,f,d,b){if(this.addTag(new RenderTag(e,d),f)==false||this.addTag(new RenderTag(c,b),f)==false){return false
}return true};a.prototype.drawArea=function(f,b,g,c){if(b===void 0){b=0}if(g===void 0){g=0
}if(c===void 0){c=null}for(var e=0;e<f.getHeight();e++){this.drawString(f.getLine(e),b,g+e,false,c);
for(var d=0;d<f.getTags()[e].length;d++){this.addTag(f.getTags()[e][d].clone().setX(f.getTags()[e][d].getX()+b),g+e)
}}};a.prototype.drawArray=function(g,b,f,c,d){if(b===void 0){b=0}if(f===void 0){f=0
}if(c===void 0){c=null}if(d===void 0){d=null}for(var e=0;e<g.length;e++){this.drawString(g[e],b,f+e,false,c);
if(d!=null){this.addTwoTags(b,b+g[e].length,f+e,'<span class="'+d+'">',"</span>")
}}};a.prototype.drawHorizontalLine=function(e,d,c,f){var b="";b=b.fillWith(e,c-d);
return this.drawString(b,d,f)};a.prototype.drawSpeech=function(k,l,e,c,b,f){if(b===void 0){b=null
}if(f===void 0){f=null}var n="";var m=0;var d=c-e-1;var j=k.split(" ");var h;this.drawString('"',e,l);
for(var g=0;g<j.length;g++){if(n.length+j[g].length>=d){h=e+1+d/2-(n.length/2);this.drawString(n,h,l);
if(b!=null){this.addTwoTags(h,h+n.length,l,'<span class="'+b+'">',"</span>")}n="";
l++}if(n!=""){n+=" "}n+=j[g];if(g==j.length-1){h=e+1+d/2-(n.length/2);this.drawString(n,h,l);
if(b!=null){this.addTwoTags(h,h+n.length,l,'<span class="'+b+'">',"</span>")}}}this.drawString('"',c,l);
if(f!=null&&f!=""){this.addTooltip(b+"Tooltip",f);this.addLinkOnHoverShowTooltip("."+b,"."+b+"Tooltip")
}return l};a.prototype.drawString=function(h,b,j,g,d){if(b===void 0){b=0}if(j===void 0){j=0
}if(g===void 0){g=false}if(d===void 0){d=null}var e;var c;if(Bugs.getGraphicalBugLevel()>=4){b+=Random.between(0,20)-10;
j+=Random.between(0,4)-2}if(j<0||j>=this.height){return false}if(Bugs.getGraphicalBugLevel()>=3){h=Bugs.changeRandomCharacter(h)
}else{if(Bugs.getGraphicalBugLevel()>=2&&Random.oneChanceOutOf(2)){h=Bugs.changeRandomCharacter(h)
}else{if(Bugs.getGraphicalBugLevel()>=1&&Random.oneChanceOutOf(3)){h=Bugs.changeRandomCharacter(h)
}}}e=0;c=h.length;if(b+c>=this.width){c-=(b+c-this.width)}if(b<0){e=-b}if(c<0||e>=h.length){return false
}if(d==null){this.area[j]=this.area[j].replaceAt(b+e,h.substring(e,c))}else{for(var f=e;
f<c;f++){if(h[f]!=d.getAlphaCharacter()){if(d.getMetaAlphaCharacter()!=null&&h[f]==d.getMetaAlphaCharacter()){this.area[j]=this.area[j].replaceAt(b+f,d.getAlphaCharacter())
}else{this.area[j]=this.area[j].replaceAt(b+f,h[f])}}}}if(g){this.addTwoTags(b,b+h.length,j,'<span class="translated">',"</span>")
}return true};a.prototype.drawVerticalLine=function(f,b,e,d){for(var c=e;c<=d;c++){if(this.drawString(f,b,c)==false){return false
}}return true};a.prototype.eraseEverything=function(c){if(c===void 0){c=" "}var d;
if(c.length!=1){return false}d="";d=d.fillWith(c,this.width);for(var b=0;b<this.height;
b++){this.drawString(d,0,b)}return true};a.prototype.removeAllLinks=function(){this.links=[]
};a.prototype.removeAllTags=function(){for(var b=0;b<this.tags.length;b++){this.tags[b]=[]
}};a.prototype.resetAllButSize=function(b){if(b===void 0){b=" "}this.eraseEverything(b);
this.removeAllTags();this.removeAllLinks()};a.prototype.resize=function(f,c,g){if(g===void 0){g=" "
}var b=this.width;var h=this.height;if(g.length!=1){return false}if(this.setSize(f,c)==false){return false
}if(c>h){for(var e=h;e<c;e++){this.tags.push([]);this.area.push("");if(f>b){for(var d=0;
d<b;d++){this.area[e]+=g}}else{if(b>f){for(var d=0;d<f;d++){this.area[e]+=g}}}}}else{if(h>c){this.tags.splice(this.tags.length-(h-c),h-c);
this.area.splice(this.area.length-(h-c),h-c)}}if(f>b){for(var e=0;e<c;e++){for(var d=b;
d<f;d++){this.area[e]+=g}}}else{if(b>f){for(var e=0;e<c;e++){this.area[e]=this.area[e].substr(0,f)
}}}return true};a.prototype.resizeFromArea=function(b){this.resize(b.getWidth(),b.getHeight())
};a.prototype.resizeFromArray=function(g,f,d){if(f===void 0){f=0}if(d===void 0){d=0
}var e=0;var b=g.length;for(var c=0;c<g.length;c++){if(e<g[c].length){e=g[c].length
}}this.resize(e+f,b+d)};a.prototype.runLinks=function(){for(var b=0;b<this.links.length;
b++){this.links[b].run()}};a.prototype.getForRendering=function(){var d=[];if(this.tags.length==0){return this.area.join("\n")
}else{d=this.area.slice(0);for(var c=0;c<this.height;c++){for(var b=0;b<this.tags[c].length;
b++){d[c]=this.tags[c][b].draw(d[c])}}return d.join("\n")}};a.prototype.getLine=function(b){if(b<0||b>=this.height){console.log("Error : trying to get a line out of the bounds of a drawing area.")
}else{return this.area[b]}};a.prototype.getTags=function(){return this.tags};a.prototype.getWidth=function(){return this.width
};a.prototype.getHeight=function(){return this.height};a.prototype.setSize=function(c,b){if(c<0||b<0){return false
}this.width=c;this.height=b;return true};return a})();var CallbackCollection=(function(){function a(){var b=[];
for(var c=0;c<arguments.length;c++){b[c-0]=arguments[c]}this.callbacks=[];this.callbacks=b
}a.prototype.addCallback=function(b){this.callbacks.push(b);return this};a.prototype.fire=function(){for(var b=0;
b<this.callbacks.length;b++){this.callbacks[b]()}};a.prototype.reset=function(){this.callbacks=[]
};return a})();var Resource=(function(){function a(b){if(b===void 0){b=null}this.accumulated=0;
this.current=0;this.max=0;this.callbackCollection=new CallbackCollection();this.savingPrefix=b
}a.prototype.add=function(b){if(this.current+b<0){return false}if(b>0){this.setAccumulated(this.accumulated+b)
}this.setCurrent(this.current+b);return true};a.prototype.load=function(){this.setAccumulated(Saving.loadNumber(this.savingPrefix+"Accumulated"));
this.setCurrent(Saving.loadNumber(this.savingPrefix+"Current"));this.setMax(Saving.loadNumber(this.savingPrefix+"Max"))
};a.prototype.save=function(){Saving.saveNumber(this.savingPrefix+"Accumulated",this.getAccumulated());
Saving.saveNumber(this.savingPrefix+"Current",this.getCurrent());Saving.saveNumber(this.savingPrefix+"Max",this.getMax())
};a.prototype.transferTo=function(d,b,c){if(b===void 0){b=-1}if(c===void 0){c=1}if(b<0){b=this.current
}else{if(b>this.current){return false}}this.add(-b);d.add(b*c);return true};a.prototype.getAccumulated=function(){return this.accumulated
};a.prototype.getCurrent=function(){return this.current};a.prototype.getCurrentAsString=function(){return this.current.toString()
};a.prototype.getCallbackCollection=function(){return this.callbackCollection};a.prototype.getMax=function(){return this.max
};a.prototype.setCurrent=function(b){this.current=b;if(this.current>this.max){this.max=this.current
}this.callbackCollection.fire()};a.prototype.setAccumulated=function(b){this.accumulated=b
};a.prototype.setMax=function(b){this.max=b};return a})();var Bar=(function(b){__extends(a,b);
function a(c){b.call(this);this.type=c;switch(this.type){case BarType.SIMPLE:this.contentCharacter="*";
this.bordersCharacter="-";break;case BarType.HEALTH:case BarType.UNICOLOR_HEALTH:this.contentCharacter=" ";
this.bordersCharacter="-";break;default:console.log("Error : trying to load an incorrect bar type");
break}}a.prototype.update=function(h,m){if(m===void 0){m=""}var k;var d;var e;var l;
var j;var c;var g;if(this.getHeight()<=0){return false}if(this.getWidth()<=1){return false
}this.removeAllTags();this.eraseEverything();if(m.length!=0){e=true}else{e=false}if(this.getHeight()<(e?4:3)){k=false
}else{k=true}if(k){l=1;if(e){j=this.getHeight()-3}else{j=this.getHeight()-2}}else{l=0;
if(e&&this.getHeight()>1){j=this.getHeight()-2}else{j=this.getHeight()-1}}if(this.getWidth()>=20){d=true
}else{d=false}if(d){for(var f=l;f<=j;f++){this.drawString("|",0,f);this.drawString("|",this.getWidth()-1,f)
}}if(k){this.drawHorizontalLine(this.bordersCharacter,0,this.getWidth()-1,0);if(e){this.drawHorizontalLine(this.bordersCharacter,0,this.getWidth()-1,this.getHeight()-2)
}else{this.drawHorizontalLine(this.bordersCharacter,0,this.getWidth()-1,this.getHeight()-1)
}}c=Math.floor((this.getWidth()-(d?2:0))*h);if(c==0&&h>0){c=1}if(c>0){for(var f=l;
f<=j;f++){this.drawHorizontalLine(this.contentCharacter,(d?1:0),c,f)}}if(e){this.drawString(m,(m.length>this.getWidth()?0:Math.floor(this.getWidth()/2-m.length/2)),this.getHeight()-1)
}switch(this.type){case BarType.HEALTH:case BarType.UNICOLOR_HEALTH:if(this.type==BarType.HEALTH){if(h<0.2){g=ColorType.HEALTH_RED
}else{if(h<0.5){g=ColorType.HEALTH_ORANGE}else{g=ColorType.HEALTH_GREEN}}}else{g=ColorType.HEALTH_UNICOLOR
}if(c>0){for(var f=l;f<=j;f++){this.addBackgroundColor((d?1:0),(d?1:0)+c,f,new Color(g))
}}break}return true};return a})(RenderArea);var BigSharkFinType;(function(a){a[a.RED=0]="RED";
a[a.GREEN=1]="GREEN";a[a.PURPLE=2]="PURPLE"})(BigSharkFinType||(BigSharkFinType={}));
var QuestEntity=(function(){function a(d,f,i,g,e,h,c,b){if(i===void 0){i=new Naming("???","???")
}if(g===void 0){g=null}if(e===void 0){e=new Pos(0,0)}if(h===void 0){h=null}if(c===void 0){c=null
}if(b===void 0){b=null}this.dead=false;this.outOfArea=false;this.destructible=false;
this.healthBar=null;this.transparency=null;this.noMovementLastUpdate=true;this.questEntityWeapons=[];
this.questEntitySpellCasters=[];this.lastDamageReason=null;this.naming=null;this.team=QuestEntityTeam.MOBS;
this.canBeForcedToMove=true;this.spellCastingDamageReason=null;this.isASpell=false;
this.jumping=false;this.jumpSpeed=null;this.jumpDuration=null;this.controlledFalling=false;
this.stopped=false;this.stoppedDuration=null;this.antiGravity=false;this.antiGravityDuration=null;
this.turtle=false;this.turtleDuration=null;this.turtleLastMovement=null;this.berserk=false;
this.berserkDuration=null;this.quest=d;this.globalPosition=f;this.naming=i;this.setRenderArea(g);
this.renderAreaPosition=e;this.setCbc(h);this.setQuestEntityMovement(c);this.setQuestEntityAnimation(b)
}a.prototype.addQuestEntitySpellCaster=function(b){this.questEntitySpellCasters.push(b)
};a.prototype.addQuestEntityWeapon=function(b){this.questEntityWeapons.push(b)};a.prototype.beginAntiGravity=function(b){if(this.antiGravity==false){this.antiGravity=true;
this.antiGravityDuration=b;return true}return false};a.prototype.beginBerserk=function(b){if(this.berserk==false){this.berserk=true;
this.berserkDuration=b;this.setHp(Math.ceil(this.getHp()/2));return true}return false
};a.prototype.beginTurtle=function(b){if(this.turtle==false){this.turtle=true;this.turtleDuration=b;
this.turtleLastMovement=0;return true}return false};a.prototype.canJumpInMidAir=function(){return false
};a.prototype.checkCollision=function(c){if(c===void 0){c=new Pos(0,0)}if(Bugs.getQuestBugLevel()>=4){return Random.flipACoin()
}for(var b=0;b<this.quest.getEntities().length;b++){if(this.quest.getEntities()[b]!=this){if(this.collidesWith(this.quest.getEntities()[b],c)){return true
}}}return false};a.prototype.collidesWith=function(b,c){if(c===void 0){c=new Pos(0,0)
}if(this.cbc!=null&&b.getCbc()!=null){return this.cbc.collidesWith(b.getCbc(),c)}return false
};a.prototype.draw=function(e){if(this.renderArea!=null){if(this.globalPosition.x+this.renderAreaPosition.x+this.quest.getGlobalDrawingOffset().x>this.quest.getRealQuestDrawingSize().x){return
}if(this.globalPosition.y+this.renderAreaPosition.y+this.quest.getGlobalDrawingOffset().y>this.quest.getRealQuestDrawingSize().y){return
}if(this.globalPosition.x+this.renderAreaPosition.x+this.renderArea.getWidth()+this.quest.getGlobalDrawingOffset().x<0){return
}if(this.globalPosition.y+this.renderAreaPosition.y+this.renderArea.getHeight()+this.quest.getGlobalDrawingOffset().y<0){return
}e.drawArea(this.renderArea,this.quest.getRealQuestPosition().x+this.quest.getGlobalDrawingOffset().x+this.globalPosition.x+this.renderAreaPosition.x,this.quest.getRealQuestPosition().y+this.quest.getGlobalDrawingOffset().y+this.globalPosition.y+this.renderAreaPosition.y,this.transparency)
}if(Saving.loadBool("gameDebug")){if(this.cbc!=null){for(var d=0;d<this.cbc.getBoxes().length;
d++){for(var b=0;b<this.cbc.getBoxes()[d].getSize().x;b++){for(var c=0;c<this.cbc.getBoxes()[d].getSize().y;
c++){e.drawString("D",this.quest.getRealQuestPosition().x+this.quest.getGlobalDrawingOffset().x+this.globalPosition.x+this.cbc.getBoxes()[d].getPosition().x+b,this.quest.getRealQuestPosition().y+this.quest.getGlobalDrawingOffset().y+this.globalPosition.y+this.cbc.getBoxes()[d].getPosition().y+c)
}}}}}};a.prototype.forceMoving=function(b){if(this.canBeForcedToMove){this.move(b,true)
}};a.prototype.getAndPossiblyCreateSpellCastingDamageReason=function(b){if(this.spellCastingDamageReason==null){this.spellCastingDamageReason=new QuestEntityDamageReason(QuestEntityDamageReasonWhoType.ENTITY,QuestEntityDamageReasonWhatType.SPELL);
this.spellCastingDamageReason.setQuestEntity(this)}this.spellCastingDamageReason.setSpellNaming(b);
return this.spellCastingDamageReason};a.prototype.getDeathMessage=function(){if(this.getLastDamageReason()!=null){return this.getLastDamageReason().getWhoNaming().getBeginning()+" killed "+this.naming.getAnywhere()+" with "+this.getLastDamageReason().getWhatNaming().getAnywhere()+"."
}return this.naming.getBeginning()+" was erased from reality."};a.prototype.getRenderAreaCenter=function(){if(this.renderArea!=null){return this.globalPosition.plus(new Pos(Math.floor(this.renderArea.getWidth()/2),Math.floor(this.renderArea.getHeight()/2)))
}return this.globalPosition};a.prototype.goTowards=function(c,f,g,e,d){if(g===void 0){g=0
}if(e===void 0){e=new Pos(1,1)}if(d===void 0){d=false}var b=new Pos(0,0);var h=c.getDistance(f);
if((Math.abs(h.x)/2>Math.abs(h.y)&&Math.abs(h.x)>g*2)||d){if(h.x>0){b.x=-e.x}else{if(h.x<0){b.x=e.x
}}}else{if(Math.abs(h.y)>g){if(h.y>0){b.y=-e.y}else{if(h.y<0){b.y=e.y}}}}this.getQuestEntityMovement().setOffset(b)
};a.prototype.heal=function(b){this.setHp(this.getHp()+b)};a.prototype.hit=function(b,c,d){if(Bugs.getQuestBugLevel()>=1){c*=Random.between(1,3)
}if(this.berserk==false){b.inflictDamage(c,d)}else{b.inflictDamage(c*2,d)}};a.prototype.inflictDamage=function(b,c){this.lastDamageReason=c;
if(this.destructible){if(this.turtle==false){this.setHp(this.getHp()-b)}else{this.setHp(this.getHp()-Math.ceil(b/2))
}}};a.prototype.isOutOfArea=function(){if(this.globalPosition.x<-this.getQuest().getLeftLimit()){return true
}if(this.globalPosition.y<-this.getQuest().getTopLimit()){return true}if(this.globalPosition.x>this.quest.getRealQuestSize().x+this.getQuest().getRightLimit()){return true
}if(this.globalPosition.y>this.quest.getRealQuestSize().y+this.getQuest().getBottomLimit()){return true
}return false};a.prototype.jump=function(b,c){if(c===void 0){c=1}if(Bugs.getQuestBugLevel()>=2){c=Random.between(1,5)
}if((this.jumping==false&&this.controlledFalling==false&&this.checkCollision(new Pos(0,1)))||this.canJumpInMidAir()){this.jumping=true;
this.jumpDuration=b;this.jumpSpeed=c;return true}return false};a.prototype.move=function(c,b){if(b===void 0){b=false
}if(Bugs.getQuestBugLevel()>=3||(Bugs.getQuestBugLevel()>=2&&Random.oneChanceOutOf(3))||(Bugs.getQuestBugLevel()>=1&&Random.oneChanceOutOf(5))){c.x+=Random.between(1,3)-2;
c.y+=Random.between(1,3)-2}if(this.turtle==false||c.y!=0){return this.setGlobalPosition(this.globalPosition.plus(c),b)
}else{if(this.turtleDuration>0){this.turtleDuration-=1}else{this.stopTurtle()}if(this.turtleLastMovement>=2){this.turtleLastMovement=0;
return this.setGlobalPosition(this.globalPosition.plus(c),b)}else{this.turtleLastMovement+=1;
return false}}};a.prototype.moveWormsLike=function(b){if(this.checkCollision(b)==false){if(this.checkCollision(b.plus(new Pos(0,2)))==true&&this.checkCollision(b.plus(new Pos(0,1)))==false&&this.jumping==false&&this.controlledFalling==false){return this.move(b.plus(new Pos(0,1)))
}else{return this.move(b)}}else{if(this.checkCollision(b.plus(new Pos(0,-1)))==false&&this.jumping==false&&this.controlledFalling==false){return this.move(b.plus(new Pos(0,-1)))
}}return false};a.prototype.removeQuestEntityWeapons=function(){this.questEntityWeapons=[]
};a.prototype.setGlobalPosition=function(d,c){if(c===void 0){c=false}var b=this.globalPosition;
this.globalPosition=d;if(c==false&&this.checkCollision()){this.globalPosition=b;return false
}return true};a.prototype.shouldDie=function(){if((this.destructible==true&&this.hp<=0)||this.dead==true){return true
}return false};a.prototype.stop=function(b){if(this.stopped==false){this.stopped=true;
this.stoppedDuration=b;return true}return false};a.prototype.stopBerserk=function(){this.berserk=false
};a.prototype.stopTurtle=function(){this.turtle=false};a.prototype.teleport=function(b){return this.setGlobalPosition(b)
};a.prototype.testNewGlobalPosition=function(c){var b=this.globalPosition;this.globalPosition=c;
if(this.checkCollision()){this.globalPosition=b;return false}this.globalPosition=b;
return true};a.prototype.update=function(){if(this.berserk){if(this.berserkDuration>0){this.berserkDuration-=1
}else{this.stopBerserk()}}this.handleAnimation();this.noMovementLastUpdate=true;if(this.handleGravity()==false){this.handleMovement()
}this.handleCombat()};a.prototype.willDie=function(){this.getQuest().getGame().getQuestLog().addMessage(new QuestLogMessage(this.getDeathMessage()))
};a.prototype.getBerserk=function(){return this.berserk};a.prototype.getCbc=function(){return this.cbc
};a.prototype.getDead=function(){return this.dead};a.prototype.getDestructible=function(){return this.destructible
};a.prototype.getGlobalPosition=function(){return this.globalPosition};a.prototype.getHealthBar=function(){return this.healthBar
};a.prototype.getHp=function(){return this.hp};a.prototype.getIsASpell=function(){return this.isASpell
};a.prototype.getJumping=function(){return this.jumping};a.prototype.getLastDamageReason=function(){return this.lastDamageReason
};a.prototype.getLastQuestEntitySpellCaster=function(){return this.questEntitySpellCasters[this.questEntitySpellCasters.length-1]
};a.prototype.getLastQuestEntityWeapon=function(){return this.questEntityWeapons[this.questEntityWeapons.length-1]
};a.prototype.getMaxHp=function(){return this.maxHp};a.prototype.getNaming=function(){return this.naming
};a.prototype.getNoMovementLastUpdate=function(){return this.noMovementLastUpdate
};a.prototype.getOutOfArea=function(){return this.outOfArea};a.prototype.getQuest=function(){return this.quest
};a.prototype.getQuestEntityAnimation=function(){return this.questEntityAnimation
};a.prototype.getQuestEntityMovement=function(){return this.questEntityMovement};
a.prototype.getQuestEntityWeapons=function(){return this.questEntityWeapons};a.prototype.getRenderArea=function(){return this.renderArea
};a.prototype.getRenderAreaPosition=function(){return this.renderAreaPosition};a.prototype.getTeam=function(){return this.team
};a.prototype.getTurtle=function(){return this.turtle};a.prototype.setCanBeForcedToMove=function(b){this.canBeForcedToMove=b
};a.prototype.setCbc=function(b){this.cbc=b};a.prototype.setDead=function(b){this.dead=b
};a.prototype.setDestructible=function(b){this.destructible=b};a.prototype.setHealthBar=function(b){this.healthBar=b
};a.prototype.setHp=function(b){if(Bugs.getQuestBugLevel()>=2){b*=Random.between(1,5)
}this.hp=b;if(this.hp>this.maxHp){this.hp=this.maxHp}if(this.hp<0){this.hp=0}this.tryToUpdateHealthBar()
};a.prototype.setIsASpell=function(b){this.isASpell=b};a.prototype.setMaxHp=function(b){if(Bugs.getQuestBugLevel()>=4){b*=Random.between(1,5)
}this.maxHp=b;this.tryToUpdateHealthBar()};a.prototype.setOutOfArea=function(b){this.outOfArea=b
};a.prototype.setQuest=function(b){this.quest=b};a.prototype.setQuestEntityAnimation=function(b){this.questEntityAnimation=b;
if(this.questEntityAnimation!=null){this.questEntityAnimation.draw(this.renderArea)
}};a.prototype.setQuestEntityMovement=function(b){this.questEntityMovement=b};a.prototype.setRenderArea=function(b){this.renderArea=b
};a.prototype.setTeam=function(b){this.team=b};a.prototype.setTransparency=function(b){this.transparency=b
};a.prototype.handleAnimation=function(){if(this.questEntityAnimation!=null){this.questEntityAnimation.update();
if(this.questEntityAnimation.shouldUpdateRenderAreaAtThisFrame()){this.renderArea.resetAllButSize();
this.questEntityAnimation.draw(this.renderArea)}}};a.prototype.handleCombat=function(){for(var b=0;
b<this.questEntityWeapons.length;b++){this.questEntityWeapons[b].handleCombat()}for(var b=0;
b<this.questEntitySpellCasters.length;b++){this.questEntitySpellCasters[b].tryToCast()
}};a.prototype.handleGravity=function(){if(this.jumping==true){this.jumpDuration-=1;
if(this.jumpDuration<=0){this.jumping=false;this.controlledFalling=true}else{if(this.move(new Pos(0,-this.jumpSpeed))==false){this.jumping=false;
this.controlledFalling=true}}return false}else{if(this.antiGravity==false&&this.getQuest().getGravityDisabled()==false){if(this.questEntityMovement!=null&&this.questEntityMovement.getGravity()){if(this.move(new Pos(0,1))){if(this.controlledFalling==false){return true
}}else{this.controlledFalling=false}}}else{this.antiGravityDuration-=1;if(this.antiGravityDuration<=0){this.antiGravity=false
}}}return false};a.prototype.handleMovement=function(){if(this.stopped==false){if(this.questEntityMovement!=null){this.questEntityMovement.update();
if(this.questEntityMovement.shouldMoveAtThisFrame()){if(this.questEntityMovement.getWormsLike()&&this.antiGravity==false&&this.getQuest().getWormsLikeDisabled()==false){if(this.moveWormsLike(this.questEntityMovement.getCurrentFrameMovement())){this.noMovementLastUpdate=false
}}else{if(this.move(this.questEntityMovement.getCurrentFrameMovement())){this.noMovementLastUpdate=false
}}}}}else{this.stoppedDuration-=1;if(this.stoppedDuration<=0){this.stopped=false}}};
a.prototype.tryToUpdateHealthBar=function(){if(this.healthBar!=null){this.healthBar.update()
}};return a})();var BigShark=(function(b){__extends(a,b);function a(c,d){b.call(this,c,d,new Naming("A shark","a shark"),new RenderArea(47,10),new Pos(0,0),new CollisionBoxCollection(new CollisionBox(this,new Pos(14,0),new Pos(2,1)),new CollisionBox(this,new Pos(13,1),new Pos(2,1)),new CollisionBox(this,new Pos(12,2),new Pos(4,1)),new CollisionBox(this,new Pos(41,2),new Pos(5,1)),new CollisionBox(this,new Pos(11,3),new Pos(7,1)),new CollisionBox(this,new Pos(35,3),new Pos(11,1)),new CollisionBox(this,new Pos(2,4),new Pos(40,1)),new CollisionBox(this,new Pos(0,5),new Pos(40,1)),new CollisionBox(this,new Pos(1,6),new Pos(44,1)),new CollisionBox(this,new Pos(3,7),new Pos(43,1)),new CollisionBox(this,new Pos(15,8),new Pos(3,1)),new CollisionBox(this,new Pos(16,9),new Pos(1,1))),new QuestEntityMovement(new Pos(-1,0)));
this.finType=null;this.setDestructible(true);this.setMaxHp(200);this.setHp(200);this.getRenderArea().drawArray(Database.getAscii("places/quests/theSea/bigShark"));
this.setTransparency(new RenderTransparency(" ","%"));this.addQuestEntityWeapon(new QuestEntityWeapon(this.getQuest(),this,new Naming("Its sharp teeth","its sharp teeth"),new CollisionBoxCollection(new CollisionBox(this,new Pos(-1,-1),new Pos(49,12))),Random.between(30,42)));
this.getLastQuestEntityWeapon().getCloseCombatDelay().setFixedDelay(1)}a.prototype.draw=function(c){b.prototype.draw.call(this,c);
if(this.finType!=null){switch(this.finType){case BigSharkFinType.RED:this.drawFinColor(c,ColorType.BIGSHARK_FIN_RED);
break;case BigSharkFinType.GREEN:this.drawFinColor(c,ColorType.BIGSHARK_FIN_GREEN);
break;case BigSharkFinType.PURPLE:this.drawFinColor(c,ColorType.BIGSHARK_FIN_PURPLE);
break}}};a.prototype.willDie=function(){this.getQuest().getGame().getQuestLog().addMessage(new QuestLogMessage(this.getDeathMessage()+" (and found "+Algo.pluralFormat(this.getQuest().foundCandies(500+Random.upTo(30)*35)," candy"," candies")+")",this.getQuest().getCandiesFoundMessage()));
if(this.finType!=null){switch(this.finType){case BigSharkFinType.RED:this.getQuest().foundGridOrEqItem(new QuestItemFound(this.getQuest(),"gridItemPossessedRedSharkFin","You found a red shark fin","You gain a red shark fin"));
break;case BigSharkFinType.GREEN:this.getQuest().foundGridOrEqItem(new QuestItemFound(this.getQuest(),"gridItemPossessedGreenSharkFin","You found a green shark fin","You gain a green shark fin"));
break;case BigSharkFinType.PURPLE:this.getQuest().foundGridOrEqItem(new QuestItemFound(this.getQuest(),"gridItemPossessedPurpleSharkFin","You found a purple shark fin","You gain a purple shark fin"));
break}}};a.prototype.hasFin=function(c){this.finType=c};a.prototype.drawFinColor=function(d,c){if(this.getGlobalPosition().x+this.getRenderAreaPosition().x+this.getQuest().getGlobalDrawingOffset().x+11>=0&&this.getGlobalPosition().x+this.getRenderAreaPosition().x+this.getQuest().getGlobalDrawingOffset().x+18<=99){d.addBackgroundColor(this.getGlobalPosition().x+this.getQuest().getRealQuestPosition().x+this.getRenderAreaPosition().x+this.getQuest().getGlobalDrawingOffset().x+14,this.getGlobalPosition().x+this.getQuest().getRealQuestPosition().x+this.getRenderAreaPosition().x+this.getQuest().getGlobalDrawingOffset().x+15,this.getGlobalPosition().y+this.getQuest().getRealQuestPosition().y+this.getRenderAreaPosition().y+this.getQuest().getGlobalDrawingOffset().y+0,new Color(c));
d.addBackgroundColor(this.getGlobalPosition().x+this.getQuest().getRealQuestPosition().x+this.getRenderAreaPosition().x+this.getQuest().getGlobalDrawingOffset().x+13,this.getGlobalPosition().x+this.getQuest().getRealQuestPosition().x+this.getRenderAreaPosition().x+this.getQuest().getGlobalDrawingOffset().x+15,this.getGlobalPosition().y+this.getQuest().getRealQuestPosition().y+this.getRenderAreaPosition().y+this.getQuest().getGlobalDrawingOffset().y+1,new Color(c));
d.addBackgroundColor(this.getGlobalPosition().x+this.getQuest().getRealQuestPosition().x+this.getRenderAreaPosition().x+this.getQuest().getGlobalDrawingOffset().x+12,this.getGlobalPosition().x+this.getQuest().getRealQuestPosition().x+this.getRenderAreaPosition().x+this.getQuest().getGlobalDrawingOffset().x+16,this.getGlobalPosition().y+this.getQuest().getRealQuestPosition().y+this.getRenderAreaPosition().y+this.getQuest().getGlobalDrawingOffset().y+2,new Color(c));
d.addBackgroundColor(this.getGlobalPosition().x+this.getQuest().getRealQuestPosition().x+this.getRenderAreaPosition().x+this.getQuest().getGlobalDrawingOffset().x+11,this.getGlobalPosition().x+this.getQuest().getRealQuestPosition().x+this.getRenderAreaPosition().x+this.getQuest().getGlobalDrawingOffset().x+18,this.getGlobalPosition().y+this.getQuest().getRealQuestPosition().y+this.getRenderAreaPosition().y+this.getQuest().getGlobalDrawingOffset().y+3,new Color(c))
}};return a})(QuestEntity);var QuestEntitySpell=(function(b){__extends(a,b);function a(e,j,i,g,f,h,d,c){if(g===void 0){g=null
}if(f===void 0){f=new Pos(0,0)}if(h===void 0){h=null}if(d===void 0){d=null}if(c===void 0){c=null
}b.call(this,e,j,i,g,f,h,d,c);this.colors=[];this.setIsASpell(true)}a.prototype.addColor=function(c){this.colors.push(c)
};a.prototype.draw=function(d){b.prototype.draw.call(this,d);for(var c=0;c<this.colors.length;
c++){this.colors[c].draw(d,this.getQuest().getRealQuestPosition().plus(this.getGlobalPosition()).plus(this.getQuest().getGlobalDrawingOffset()))
}};a.prototype.removeColors=function(){this.colors=[]};return a})(QuestEntity);var Blackhole=(function(b){__extends(a,b);
function a(c,f,d,e){b.call(this,c,f,new Naming("A blackhole","a blackhole"));this.damage=d;
this.questEntityDamageReason=e;this.cbcDamage=new CollisionBoxCollection(new CollisionBox(this,new Pos(-1,-3),new Pos(2,1)),new CollisionBox(this,new Pos(-3,-2),new Pos(6,1)),new CollisionBox(this,new Pos(-4,-1),new Pos(8,1)),new CollisionBox(this,new Pos(-5,0),new Pos(10,1)),new CollisionBox(this,new Pos(-4,1),new Pos(8,1)),new CollisionBox(this,new Pos(-3,2),new Pos(6,1)),new CollisionBox(this,new Pos(-1,3),new Pos(2,1)));
this.timer=30;this.reAddColors()}a.prototype.update=function(){this.timer-=1;this.reAddColors();
for(var c=0;c<this.getQuest().getEntities().length;c++){if(this.getQuest().getEntities()[c].getDestructible()){if(this.getQuest().getEntities()[c].getCbc()!=null){if(this.getQuest().getEntities()[c].getCbc().collidesWith(this.cbcDamage)){this.getQuest().getEntities()[c].inflictDamage(this.damage,this.questEntityDamageReason)
}}}}if(this.timer<=0){this.setDead(true)}b.prototype.update.call(this)};a.prototype.addColorsFirstLayer=function(c){this.addColor(new QuestEntitySpellColor(this.getQuest(),new Pos(-1,0),new Pos(2,1),new Color(c,true)))
};a.prototype.addColorsSecondLayer=function(c){this.addColor(new QuestEntitySpellColor(this.getQuest(),new Pos(-2,-1),new Pos(4,1),new Color(c,true)));
this.addColor(new QuestEntitySpellColor(this.getQuest(),new Pos(-2,+1),new Pos(4,1),new Color(c,true)));
this.addColor(new QuestEntitySpellColor(this.getQuest(),new Pos(-2,0),new Pos(1,1),new Color(c,true)));
this.addColor(new QuestEntitySpellColor(this.getQuest(),new Pos(+1,0),new Pos(1,1),new Color(c,true)))
};a.prototype.addColorsThirdLayer=function(c){this.addColor(new QuestEntitySpellColor(this.getQuest(),new Pos(-1,-3),new Pos(2,1),new Color(c,true)));
this.addColor(new QuestEntitySpellColor(this.getQuest(),new Pos(-3,-2),new Pos(6,1),new Color(c,true)));
this.addColor(new QuestEntitySpellColor(this.getQuest(),new Pos(-4,-1),new Pos(2,1),new Color(c,true)));
this.addColor(new QuestEntitySpellColor(this.getQuest(),new Pos(+2,-1),new Pos(2,1),new Color(c,true)));
this.addColor(new QuestEntitySpellColor(this.getQuest(),new Pos(-5,0),new Pos(3,1),new Color(c,true)));
this.addColor(new QuestEntitySpellColor(this.getQuest(),new Pos(+2,0),new Pos(3,1),new Color(c,true)));
this.addColor(new QuestEntitySpellColor(this.getQuest(),new Pos(-4,+1),new Pos(2,1),new Color(c,true)));
this.addColor(new QuestEntitySpellColor(this.getQuest(),new Pos(+2,+1),new Pos(2,1),new Color(c,true)));
this.addColor(new QuestEntitySpellColor(this.getQuest(),new Pos(-3,+2),new Pos(6,1),new Color(c,true)));
this.addColor(new QuestEntitySpellColor(this.getQuest(),new Pos(-1,+3),new Pos(2,1),new Color(c,true)))
};a.prototype.reAddColors=function(){this.removeColors();switch(this.timer){case 30:this.addColorsFirstLayer(ColorType.BLACKHOLE_GREY240);
break;case 29:this.addColorsFirstLayer(ColorType.BLACKHOLE_GREY220);this.addColorsSecondLayer(ColorType.BLACKHOLE_GREY240);
break;case 28:this.addColorsFirstLayer(ColorType.BLACKHOLE_GREY200);this.addColorsSecondLayer(ColorType.BLACKHOLE_GREY220);
this.addColorsThirdLayer(ColorType.BLACKHOLE_GREY240);break;case 27:this.addColorsFirstLayer(ColorType.BLACKHOLE_GREY180);
this.addColorsSecondLayer(ColorType.BLACKHOLE_GREY200);this.addColorsThirdLayer(ColorType.BLACKHOLE_GREY220);
break;case 26:this.addColorsFirstLayer(ColorType.BLACKHOLE_GREY160);this.addColorsSecondLayer(ColorType.BLACKHOLE_GREY180);
this.addColorsThirdLayer(ColorType.BLACKHOLE_GREY200);break;case 25:this.addColorsFirstLayer(ColorType.BLACKHOLE_GREY140);
this.addColorsSecondLayer(ColorType.BLACKHOLE_GREY160);this.addColorsThirdLayer(ColorType.BLACKHOLE_GREY180);
break;case 24:this.addColorsFirstLayer(ColorType.BLACKHOLE_GREY120);this.addColorsSecondLayer(ColorType.BLACKHOLE_GREY140);
this.addColorsThirdLayer(ColorType.BLACKHOLE_GREY160);break;case 23:this.addColorsFirstLayer(ColorType.BLACKHOLE_GREY100);
this.addColorsSecondLayer(ColorType.BLACKHOLE_GREY120);this.addColorsThirdLayer(ColorType.BLACKHOLE_GREY140);
break;case 22:this.addColorsFirstLayer(ColorType.BLACKHOLE_GREY80);this.addColorsSecondLayer(ColorType.BLACKHOLE_GREY100);
this.addColorsThirdLayer(ColorType.BLACKHOLE_GREY120);break;case 21:this.addColorsFirstLayer(ColorType.BLACKHOLE_GREY60);
this.addColorsSecondLayer(ColorType.BLACKHOLE_GREY80);this.addColorsThirdLayer(ColorType.BLACKHOLE_GREY100);
break;case 20:this.addColorsFirstLayer(ColorType.BLACKHOLE_GREY40);this.addColorsSecondLayer(ColorType.BLACKHOLE_GREY60);
this.addColorsThirdLayer(ColorType.BLACKHOLE_GREY80);break;case 19:this.addColorsFirstLayer(ColorType.BLACKHOLE_GREY20);
this.addColorsSecondLayer(ColorType.BLACKHOLE_GREY40);this.addColorsThirdLayer(ColorType.BLACKHOLE_GREY60);
break;default:this.addColorsFirstLayer(Random.fromArray([ColorType.BLACKHOLE_GREY20,ColorType.BLACKHOLE_GREY40,ColorType.BLACKHOLE_GREY60]));
this.addColorsSecondLayer(Random.fromArray([ColorType.BLACKHOLE_GREY20,ColorType.BLACKHOLE_GREY40,ColorType.BLACKHOLE_GREY60]));
this.addColorsThirdLayer(Random.fromArray([ColorType.BLACKHOLE_GREY20,ColorType.BLACKHOLE_GREY40,ColorType.BLACKHOLE_GREY60]));
break}};return a})(QuestEntitySpell);var QuestEntityWeapon=(function(){function a(b,c,f,e,d){if(e===void 0){e=new CollisionBoxCollection()
}if(d===void 0){d=0}this.closeCombatDelay=new QuestEntityWeaponDelay();this.quest=b;
this.questEntity=c;this.naming=f;this.damage=d;this.cbc=e}a.prototype.getRealDamage=function(){return this.damage
};a.prototype.getRealDamageText=function(){return this.damage.toString()};a.prototype.getSpeedText=function(){return this.closeCombatDelay.getText()
};a.prototype.handleCombat=function(){if(this.getRealDamage()>0&&this.closeCombatDelay.tryToAttack()){for(var b=0;
b<this.quest.getEntities().length;b++){if(this.quest.getEntities()[b]!=this.questEntity){if(this.quest.getEntities()[b].getTeam()!=this.questEntity.getTeam()){if(this.collidesWith(this.quest.getEntities()[b])){this.hit(this.quest.getEntities()[b]);
this.closeCombatDelay.theWeaponAttacked()}}}}}};a.prototype.getCloseCombatDelay=function(){return this.closeCombatDelay
};a.prototype.getNaming=function(){return this.naming};a.prototype.collidesWith=function(b){if(this.cbc!=null&&b.getCbc()!=null){return this.cbc.collidesWith(b.getCbc())
}return false};a.prototype.hit=function(b){this.questEntity.hit(b,this.getRealDamage(),new QuestEntityDamageReason(QuestEntityDamageReasonWhoType.ENTITY,QuestEntityDamageReasonWhatType.WEAPON).setQuestEntity(this.questEntity).setQuestEntityWeapon(this))
};return a})();var Bludgeon=(function(a){__extends(b,a);function b(){a.apply(this,arguments)
}b.prototype.getRealDamage=function(){return Random.between(15,25)};b.prototype.getRealDamageText=function(){return"15-25"
};return b})(QuestEntityWeapon);var Item=(function(){function a(e,d,c,b){this.savingName=e;
this.databaseName=d;this.databaseDescriptionName=c;this.ascii=b;Saving.registerBool(this.savingName,false)
}a.prototype.foundCandies=function(d,b,c){return c};a.prototype.hit=function(d,b,c,e,f){return e
};a.prototype.inflictDamage=function(c,b,d,e){return d};a.prototype.isPossessed=function(){return Saving.loadBool(this.savingName)
};a.prototype.getAscii=function(){return this.ascii};a.prototype.getDatabaseDescriptionName=function(){return this.databaseDescriptionName
};a.prototype.getDatabaseName=function(){return this.databaseName};a.prototype.getSavingName=function(){return this.savingName
};a.prototype.getSpecialAbility=function(){return null};return a})();var EqItem=(function(a){__extends(b,a);
function b(){a.apply(this,arguments)}b.prototype.update=function(d,c){};b.prototype.getQuestEntityWeapon=function(c,d){return new QuestEntityWeapon(c,d,new Naming("???","???"))
};return b})(Item);var BootsOfIntrospection=(function(b){__extends(a,b);function a(){b.call(this,"eqItemBootsBootsOfIntrospection","eqItemBootsBootsOfIntrospectionName","eqItemBootsBootsOfIntrospectionDescription","eqItems/boots/bootsOfIntrospection")
}return a})(EqItem);var Quest=(function(a){__extends(b,a);function b(d,c){if(c===void 0){c=null
}a.call(this,d);this.entities=[];this.renderArea=new RenderArea();this.globalDrawingOffset=new Pos(0,0);
this.candiesFound=new Resource();this.chocolateBarsFound=new Resource();this.itemsFound=[];
this.questEnded=false;this.questEndedAndWeWon=false;this.playerSpells=[];this.playerSpellsHotkeys=[];
this.playerSpellsCountdown=0;this.playerPotionsCountdown=0;this.gravityDisabled=false;
this.wormsLikeDisabled=false;this.howManyPPotions=0;this.specialInstruction=c;this.getGame().resetPlayer();
this.createPlayerSpells();this.realQuestPosition=new Pos(0,2);this.sizeToAddToTheRealQuestSize=new Pos(0,12);
if(this.specialInstruction!=null){this.realQuestPosition.add(new Pos(0,1))}if(this.playerSpells.length!=0){this.realQuestPosition.add(new Pos(0,this.playerSpellsHeight))
}this.getGame().getQuestLog().addDelimiter();this.playerCollisionBoxes=new Wall(this,new Pos(0,0));
this.getGame().setQuestSlowedDown(false);this.getGame().setQuestSpeedUp(0)}b.prototype.addPlayerCollisionBoxes=function(f,d,c,e){this.playerCollisionBoxes.removeBoxes();
if(f){this.playerCollisionBoxes.addBox(new Pos(-1,-1),new Pos(this.getRealQuestSize().x+2,1))
}if(d){this.playerCollisionBoxes.addBox(new Pos(this.getRealQuestSize().x,-1),new Pos(1,this.getRealQuestSize().y+2))
}if(c){this.playerCollisionBoxes.addBox(new Pos(-1,this.getRealQuestSize().y),new Pos(this.getRealQuestSize().x+2,1))
}if(e){this.playerCollisionBoxes.addBox(new Pos(-1,-1),new Pos(1,this.getRealQuestSize().y+2))
}};b.prototype.addEntity=function(c){this.entities.push(c);if(this.entities[this.entities.length-1].checkCollision()&&Bugs.getQuestBugLevel()<4){this.entities.splice(this.entities.length-1,1);
return false}return true};b.prototype.addExitQuestButton=function(c,d){this.addBackToButton(this.renderArea,c,Database.getText(d),Database.getTranslatedText(d),d,0,((this.renderArea.getWidth()-100)-this.getGap())/2+(50-Database.getText(d).length/2))
};b.prototype.castPlayerAcidRain=function(d,c,f,g){if(d===void 0){d=null}if(c===void 0){c=null
}if(f===void 0){f=50}if(g===void 0){g=50}if(d==null){d=new Pos(0,0)}if(c==null){c=new Pos(this.getRealQuestSize().x,this.getRealQuestSize().y)
}if(d.x<this.getGame().getPlayer().getGlobalPosition().x-f){d.x=this.getGame().getPlayer().getGlobalPosition().x-f
}if(d.x+c.x>this.getGame().getPlayer().getGlobalPosition().x+g){c.x=this.getGame().getPlayer().getGlobalPosition().x+g-d.x
}for(var e=d.x;e<d.x+c.x;e++){if(Random.oneChanceOutOf((this.getGame().isEquipped("hat","eqItemHatSorceressHat")?3:5))){this.addEntity(this.createPlayerAcidDrop(new Pos(e,d.y-Random.upTo(5))))
}}this.getGame().getQuestLog().addMessage(new QuestLogMessage("You cast an acid rain!"))
};b.prototype.castPlayerAntiGravityPotion=function(){this.getGame().getPlayer().beginAntiGravity((this.getGame().isEquipped("hat","eqItemHatSorceressHat")?50:30));
this.getGame().getQuestLog().addMessage(new QuestLogMessage("You drink an anti gravity potion!"))
};b.prototype.castPlayerBlackDemons=function(){var d=0;var e=0;var f=this.getRealQuestSize().y;
for(var c=e;c<f;c++){if(c%5==0){this.addEntity(new PlayerSummonedDemon(this,new Pos(d,c),(this.getGame().isEquipped("hat","eqItemHatSorceressHat")?80:50)))
}}this.getGame().getQuestLog().addMessage(new QuestLogMessage("You summoned black demons!"))
};b.prototype.castPlayerBlackhole=function(){var e=[];var c;for(var d=0;d<this.getEntities().length;
d++){if(this.getEntities()[d].getDestructible()&&this.getEntities()[d].getTeam()!=this.getGame().getPlayer().getTeam()){e.push(d)
}}if(e.length>0){c=this.getEntities()[e[Random.between(0,e.length-1)]].getRenderAreaCenter()
}else{c=this.getGame().getPlayer().getRenderAreaCenter()}this.addEntity(new Blackhole(this,c,100,this.getGame().getPlayer().getAndPossiblyCreateSpellCastingDamageReason(new Naming("A blackhole","a blackhole"))));
this.getGame().getQuestLog().addMessage(new QuestLogMessage("You cast the black hole spell!"))
};b.prototype.castPlayerBerserkPotion=function(){this.getGame().getPlayer().beginBerserk((this.getGame().isEquipped("hat","eqItemHatSorceressHat")?120:80));
this.getGame().getQuestLog().addMessage(new QuestLogMessage("You drink a berserk potion!"))
};b.prototype.castPlayerCloningPotion=function(){var c=null;switch(this.getGame().getPlayer().getCharacterType()){case PlayerCharacterType.CANDYBOX:case PlayerCharacterType.CANDYBOX_SQUEEZED:c=new PlayerCloneCandyBox(this,this.getGame().getPlayer().getGlobalPosition().plus(new Pos(0,-1)));
break;case PlayerCharacterType.MEDIUM:case PlayerCharacterType.MEDIUM_SQUEEZED:c=new PlayerCloneMedium(this,this.getGame().getPlayer().getGlobalPosition().plus(new Pos(0,-4)));
break}if(this.addEntity(c)==false){this.getGame().getQuestLog().addMessage(new QuestLogMessage("You drink a cloning potion but there's not enough space for a clone to appear."));
return}this.configPlayerOrClone(c);this.getGame().getQuestLog().addMessage(new QuestLogMessage("You drink a cloning potion!"))
};b.prototype.castPlayerEraseMagic=function(){var d=false;for(var c=0;c<this.getEntities().length;
c++){if(this.getEntities()[c].getIsASpell()){this.getEntities()[c].setDead(true);
d=true}}if(d){this.getGame().getQuestLog().addMessage(new QuestLogMessage("You cast an erase magic spell!"))
}else{this.getGame().getQuestLog().addMessage(new QuestLogMessage("You failed to cast an erase magic spell : there's no magic to erase."))
}};b.prototype.castPlayerFireball=function(d){if(d===void 0){d=new Pos(2,0)}var c=new Fireball(this,this.getGame().getPlayer().getSpellCastingPosition(),new Naming("A fireball","a fireball"),new Color(ColorType.PLAYER_FIREBALL),new Pos((this.getGame().isEquipped("hat","eqItemHatSorceressHat")?6:4),(this.getGame().isEquipped("hat","eqItemHatSorceressHat")?3:2)),45*(Saving.loadBool("gridItemPossessedRedSharkFin")?3:1),this.getGame().getPlayer().getAndPossiblyCreateSpellCastingDamageReason(new Naming("A fireball","a fireball")));
c.setTargetTypeNoTarget(d);this.addEntity(c);this.getGame().getQuestLog().addMessage(new QuestLogMessage("You cast a fireball!"))
};b.prototype.castPlayerHealthPotion=function(){this.getGame().getPlayer().heal((this.getGame().isEquipped("hat","eqItemHatSorceressHat")?200:100));
this.getGame().getQuestLog().addMessage(new QuestLogMessage("You drink a health potion!"))
};b.prototype.castPlayerJump=function(){if(Saving.loadBool("gridItemPossessedFeather")==false){this.getGame().getPlayer().jump(3)
}else{this.getGame().getPlayer().jump(6)}};b.prototype.castPlayerObsidianWall=function(){var d=this.getGame().getPlayer().getSpellCastingPosition().x;
var e=0;var f=this.getRealQuestSize().y;for(var c=e;c<f;c++){this.addEntity(new ObsidianBrick(this,new Pos(d,c),(this.getGame().isEquipped("hat","eqItemHatSorceressHat")?300:200)))
}this.getGame().getQuestLog().addMessage(new QuestLogMessage("You cast an obsidian wall!"))
};b.prototype.castPlayerPPotion=function(){var d;var c=null;if(this.getGame().getPlayer().getTurtle()){this.getGame().getPlayer().stopTurtle();
d=Math.ceil(this.getGame().getPlayer().getHp()/2);this.getGame().getPlayer().heal(-d);
c="You lose "+d+" health points."}else{if(this.getGame().getPlayer().getHp()<(this.getGame().getPlayer().getMaxHp()*8/100)){switch(Random.between(0,8)){case 0:this.getGame().getPlayer().heal(200);
c="You gain 200 health points.";break;case 1:this.getGame().getPlayer().heal(400);
c="You gain 400 health points.";break;case 2:this.getGame().getPlayer().heal(600);
c="You gain 600 health points.";break;case 3:d=this.getGame().getPlayer().getMaxHp()*50/100;
this.getGame().getPlayer().heal(d);c="You gain "+d+" health points.";break;case 4:d=this.getGame().getPlayer().getMaxHp()*65/100;
this.getGame().getPlayer().heal(d);c="You gain "+d+" health points.";break;case 5:d=this.getGame().getPlayer().getMaxHp()*80/100;
this.getGame().getPlayer().heal(d);c="You gain "+d+" health points.";break;case 6:this.getGame().getPlayer().heal(10);
c="You gain 10 health points.";break;case 7:this.getGame().getPlayer().heal(10);c="You gain 7 health points.";
break;case 8:this.getGame().getPlayer().heal(10);c="You gain 3 health points.";break
}}else{if(Random.oneChanceOutOf(Math.ceil((this.howManyPPotions+1)/2))){d=this.getGame().getPlayer().getMaxHp()*(Random.flipACoin()?20:30)/100;
if(Random.oneChanceOutOf(3)){this.getGame().getPlayer().heal(-d);c="You lose "+d+" health points."
}else{this.getGame().getPlayer().heal(d);c="You gain "+d+" health points."}}else{if(Random.oneChanceOutOf(Math.ceil((this.howManyPPotions+1)/6))){switch(Random.between(0,3)){case 0:this.getGame().getPlayer().stop(Random.between(30,100));
c="You can't move anymore.";break;case 1:this.getGame().getPlayer().beginTurtle(Random.between(30,100));
c="Now you're a turtle!";break;case 2:this.getGame().getPlayer().setHp(this.getGame().getPlayer().getMaxHp());
c="You recover all your health.";break;case 3:this.getGame().getPlayer().setHp(10);
c="You only have 10 health points now. Great.";break}}else{this.getGame().getQuestLog().addMessage(new QuestLogMessage("You drink a P potion! Something strange is happening."));
switch(Random.between(0,2)){case 0:this.castPlayerAcidRain();this.castPlayerFireball();
this.castPlayerTeleport();break;case 1:this.castPlayerAcidRain();this.castPlayerAcidRain();
this.castPlayerAcidRain();this.castPlayerTeleport();break;case 2:this.castPlayerFireball();
this.castPlayerTeleport();this.castPlayerFireball();this.castPlayerTeleport();this.castPlayerFireball();
this.castPlayerTeleport();this.castPlayerFireball();break}this.getGame().getQuestLog().addMessage(new QuestLogMessage("Wait. What did you just do?"))
}}}}this.howManyPPotions+=1;if(c!=null){this.getGame().getQuestLog().addMessage(new QuestLogMessage("You drink a P potion! "+c))
}};b.prototype.castPlayerThornsShield=function(){var c=this.getGame().getPlayer().getThornsPositionsArray();
for(var e=0;e<c.length;e++){var d=new Fireball(this,this.getGame().getPlayer().getGlobalPosition().plus(c[e]),new Naming("A magical thorn","a magical thorn"),new Color(ColorType.PLAYER_THORN),new Pos(2,1),(this.getGame().isEquipped("hat","eqItemHatSorceressHat")?40:20),this.getGame().getPlayer().getAndPossiblyCreateSpellCastingDamageReason(new Naming("A magical thorn","a magical thorn")));
this.addEntity(d)}this.getGame().getQuestLog().addMessage(new QuestLogMessage("You cast a thorns shield!"))
};b.prototype.castPlayerTurtlePotion=function(){this.getGame().getPlayer().beginTurtle((this.getGame().isEquipped("hat","eqItemHatSorceressHat")?120:80));
this.getGame().getQuestLog().addMessage(new QuestLogMessage("You drink a turtle potion!"))
};b.prototype.castPlayerSqueeze=function(){if(this.getGame().getPlayer().getQuestEntityMovement()!=null){this.getGame().getPlayer().squeeze()
}};b.prototype.castPlayerTeleport=function(c,g){if(c===void 0){c=null}if(g===void 0){g=null
}var e=false;var f;if(c!=null&&g==null){if(this.getGame().getPlayer().teleport(c)){e=true
}}else{if(c==null){c=new Pos(0,0)}if(g==null){g=new Pos(this.getRealQuestSize().x-1,this.getRealQuestSize().y-1)
}for(var d=0;d<10;d++){f=c.plus(Random.fromPosition(g));if(f!=this.getGame().getPlayer().getGlobalPosition()&&this.getGame().getPlayer().teleport(f)){e=true;
break}}}if(e){this.getGame().getQuestLog().addMessage(new QuestLogMessage("You cast a teleport spell!"))
}else{this.getGame().getQuestLog().addMessage(new QuestLogMessage("You failed to cast the teleport spell. Magic works in mysterious ways..."))
}};b.prototype.castPlayerTimeSlowing=function(){this.getGame().setQuestSlowedDown(!this.getGame().getQuestSlowedDown())
};b.prototype.castPlayerXPotion=function(){this.getGame().goToYourself()};b.prototype.configPlayerOrClone=function(c){};
b.prototype.drawAroundQuest=function(){this.drawPlayerSpells();this.drawSpecialInstruction();
this.drawQuestLog()};b.prototype.drawEntities=function(){for(var c=0;c<this.entities.length;
c++){this.entities[c].draw(this.renderArea);if(this.entities[c].getHealthBar()!=null){this.entities[c].getHealthBar().draw(this.renderArea)
}}};b.prototype.endQuest=function(d){if(d){this.getGame().getQuestLog().addMessage(new QuestLogMessage(this.getCandiesDropMessage()));
this.candiesFound.transferTo(this.getGame().getCandies());if(this.chocolateBarsFound.getCurrent()>0){this.getGame().getQuestLog().addMessage(new QuestLogMessage(this.getChocolateBarsDropMessage(),null,true));
this.chocolateBarsFound.transferTo(this.getGame().getChocolateBars())}for(var c=0;
c<this.itemsFound.length;c++){this.itemsFound[c].get();this.getGame().gainItem(this.itemsFound[c].getSavingName())
}this.questEndedAndWeWon=true}this.questEnded=true};b.prototype.foundCandies=function(c){for(var d in this.getGame().getSelectedEqItems()){c=this.getGame().getSelectedEqItems()[d].foundCandies(this.getGame().getPlayer(),this,c)
}this.candiesFound.add(c);return c};b.prototype.foundChocolateBars=function(c){this.chocolateBarsFound.add(c);
return c};b.prototype.foundGridOrEqItem=function(d){if(Saving.loadBool(d.getSavingName())==true){return false
}for(var c=0;c<this.itemsFound.length;c++){if(d.getSavingName()==this.itemsFound[c].getSavingName()){return false
}}this.itemsFound.push(d);this.itemsFound[this.itemsFound.length-1].found();return true
};b.prototype.forceMovingAllEntities=function(c){for(var d=0;d<this.entities.length;
d++){this.entities[d].forceMoving(c)}};b.prototype.getCandiesDropMessage=function(){return"You gain "+Algo.pluralFormat(this.candiesFound.getCurrent()," candy"," candies")+"."
};b.prototype.getCandiesFoundMessage=function(){return"("+this.candiesFound.getCurrentAsString()+" found so far)"
};b.prototype.getChocolateBarsDropMessage=function(){return"You gain "+Algo.pluralFormat(this.chocolateBarsFound.getCurrent()," chocolate bar"," chocolate bars")+"."
};b.prototype.increasePlayerPotionsCountdown=function(c){this.playerPotionsCountdown+=c
};b.prototype.increasePlayerSpellsCountdown=function(c){this.playerSpellsCountdown+=c
};b.prototype.lowerCountdowns=function(){if(this.playerSpellsCountdown>0){this.playerSpellsCountdown-=1
}if(this.playerPotionsCountdown>0){this.playerPotionsCountdown-=1}};b.prototype.postDraw=function(){this.getGame().updatePlace()
};b.prototype.preDraw=function(){this.renderArea.resetAllButSize()};b.prototype.resizeQuest=function(e,c,d){if(d===void 0){d=null
}this.realQuestDrawingSize=new Pos(e,c);if(d==null){this.realQuestSize=new Pos(e,c)
}else{this.realQuestSize=d}this.renderArea.resize(this.realQuestPosition.x+e+this.sizeToAddToTheRealQuestSize.x,this.realQuestPosition.y+c+this.sizeToAddToTheRealQuestSize.y)
};b.prototype.update=function(){};b.prototype.updateEntities=function(){var d=this.entities.length;
for(var c=0;c<d;c++){this.entities[c].update()}for(var c=0;c<this.entities.length;
c++){if(this.entities[c].shouldDie()){this.entities[c].willDie();this.entities[c].setDead(true);
this.entities.splice(c,1);c--}else{if(this.entities[c].isOutOfArea()){this.entities[c].setOutOfArea(true);
this.entities.splice(c,1);c--}}}this.lowerCountdowns()};b.prototype.willBeDisplayed=function(){this.getGame().setWeAreQuesting(true);
this.getGame().getQuestCallbackCollection().addCallback(this.update.bind(this));for(var c=0;
c<this.playerSpellsHotkeys.length;c++){this.getGame().addHotkey(this.playerSpellsHotkeys[c])
}};b.prototype.willBeClosed=function(){this.getGame().setWeAreQuesting(false)};b.prototype.getBottomLimit=function(){return 20
};b.prototype.getCandiesFound=function(){return this.candiesFound};b.prototype.getChocolateBarsFound=function(){return this.chocolateBarsFound
};b.prototype.getEntities=function(){return this.entities};b.prototype.getGap=function(){var c=(this.renderArea.getWidth()-100)-(this.getGame().getPlayer().getGlobalPosition().x-50)*2;
if(c>(this.renderArea.getWidth()-100)){c=(this.renderArea.getWidth()-100)}if(c<-(this.renderArea.getWidth()-100)){c=-(this.renderArea.getWidth()-100)
}return c};b.prototype.getGlobalDrawingOffset=function(){return this.globalDrawingOffset
};b.prototype.getGravityDisabled=function(){return this.gravityDisabled};b.prototype.getLastEntity=function(){return this.entities[this.entities.length-1]
};b.prototype.getLeftLimit=function(){return 20};b.prototype.getPlayerCollisionBoxes=function(){return this.playerCollisionBoxes
};b.prototype.getPlayerPotionsCountdown=function(){return this.playerPotionsCountdown
};b.prototype.getPlayerSpellsCountdown=function(){return this.playerSpellsCountdown
};b.prototype.getQuestEnded=function(){return this.questEnded};b.prototype.getQuestEndedAndWeWon=function(){return this.questEndedAndWeWon
};b.prototype.getRealQuestDrawingSize=function(){return this.realQuestDrawingSize
};b.prototype.getRealQuestPosition=function(){return this.realQuestPosition};b.prototype.getRealQuestSize=function(){return this.realQuestSize
};b.prototype.getRenderArea=function(){return this.renderArea};b.prototype.getRightLimit=function(){return 20
};b.prototype.getTopLimit=function(){return 20};b.prototype.getWormsLikeDisabled=function(){return this.wormsLikeDisabled
};b.prototype.setGlobalDrawingOffset=function(c){this.globalDrawingOffset=c};b.prototype.setGravityDisabled=function(c){this.gravityDisabled=c
};b.prototype.setWormsLikeDisabled=function(c){this.wormsLikeDisabled=c};b.prototype.addPlayerSpell=function(c){this.playerSpells.push(c);
this.playerSpellsHotkeys.push(c.getHotkey())};b.prototype.createPlayerAcidDrop=function(c){var d=new Fireball(this,c,new Naming("An acid drop","an acid drop"),new Color(ColorType.PLAYER_ACID_DROP),new Pos(1,1),8,this.getGame().getPlayer().getAndPossiblyCreateSpellCastingDamageReason(new Naming("An acid drop","an acid drop")));
d.setTargetTypeNoTarget(new Pos(0,1));return d};b.prototype.createPlayerSpells=function(){if(Saving.loadBool("gridItemPossessedBeginnersGrimoire")){this.addPlayerSpell(new QuestPlayerSpell(this,"questPlayerSpellAcidRainButton",new Pos(0,0),"Acid rain",new Color(ColorType.QUEST_BUTTON_ACID_RAIN),new CallbackCollection(this.castPlayerAcidRain.bind(this)),QuestPlayerSpellCountdownType.SPELLS,this.getMagicCountdownTime(),0,"a"));
this.addPlayerSpell(new QuestPlayerSpell(this,"questPlayerSpellFireballButton",new Pos(11,0),"Fireball",new Color(ColorType.QUEST_BUTTON_FIREBALL),new CallbackCollection(this.castPlayerFireball.bind(this)),QuestPlayerSpellCountdownType.SPELLS,this.getMagicCountdownTime(),0,"f"));
this.addPlayerSpell(new QuestPlayerSpell(this,"questPlayerSpellTeleportButton",new Pos(21,0),"Teleport",new Color(ColorType.QUEST_BUTTON_TELEPORT),new CallbackCollection(this.castPlayerTeleport.bind(this)),QuestPlayerSpellCountdownType.SPELLS,this.getMagicCountdownTime(),0,"t"))
}if(Saving.loadBool("gridItemPossessedAdvancedGrimoire")){this.addPlayerSpell(new QuestPlayerSpell(this,"questPlayerSpellEraseMagicButton",new Pos(33,0),"Erase magic",new Color(ColorType.QUEST_BUTTON_ERASE_MAGIC),new CallbackCollection(this.castPlayerEraseMagic.bind(this)),QuestPlayerSpellCountdownType.SPELLS,this.getMagicCountdownTime(),0,"e"));
this.addPlayerSpell(new QuestPlayerSpell(this,"questPlayerSpellThornsShieldButton",new Pos(46,0),"Thorns shield",new Color(ColorType.QUEST_BUTTON_THORNS_SHIELD),new CallbackCollection(this.castPlayerThornsShield.bind(this)),QuestPlayerSpellCountdownType.SPELLS,this.getMagicCountdownTime(),6," "))
}if(Saving.loadBool("gridItemPossessedBlackMagicGrimoire")){this.addPlayerSpell(new QuestPlayerSpell(this,"questPlayerSpellObsidianWallButton",new Pos(63,0),"Obsidian wall",new Color(ColorType.QUEST_BUTTON_OBSIDIAN_WALL),new CallbackCollection(this.castPlayerObsidianWall.bind(this)),QuestPlayerSpellCountdownType.SPELLS,this.getMagicCountdownTime(),0,"o"));
this.addPlayerSpell(new QuestPlayerSpell(this,"questPlayerSpellBlackDemonsButton",new Pos(78,0),"Black demons",new Color(ColorType.QUEST_BUTTON_BLACK_DEMONS),new CallbackCollection(this.castPlayerBlackDemons.bind(this)),QuestPlayerSpellCountdownType.SPELLS,this.getMagicCountdownTime(),6,"d"))
}if(Saving.loadBool("questPlayerSpellHealthPotionHasSpell")){this.addPlayerSpell(new QuestPlayerSpell(this,"questPlayerSpellHealthPotionButton",new Pos(0,2),"Health",new Color(ColorType.QUEST_BUTTON_HEALTH_POTION),new CallbackCollection(this.castPlayerHealthPotion.bind(this)),QuestPlayerSpellCountdownType.POTIONS,this.getMagicCountdownTime(),0,"h","questPlayerSpellHealthPotionQuantity"))
}if(Saving.loadBool("questPlayerSpellTurtlePotionHasSpell")){this.addPlayerSpell(new QuestPlayerSpell(this,"questPlayerSpellTurtlePotionButton",new Pos(13,2),"Turtle",new Color(ColorType.QUEST_BUTTON_TURTLE_POTION),new CallbackCollection(this.castPlayerTurtlePotion.bind(this)),QuestPlayerSpellCountdownType.POTIONS,this.getMagicCountdownTime(),2,"r","questPlayerSpellTurtlePotionQuantity"))
}if(Saving.loadBool("questPlayerSpellAntiGravityPotionHasSpell")){this.addPlayerSpell(new QuestPlayerSpell(this,"questPlayerSpellAntiGravityPotionButton",new Pos(26,2),"Anti gravity",new Color(ColorType.QUEST_BUTTON_ANTI_GRAVITY_POTION),new CallbackCollection(this.castPlayerAntiGravityPotion.bind(this)),QuestPlayerSpellCountdownType.POTIONS,this.getMagicCountdownTime(),5,"g","questPlayerSpellAntiGravityPotionQuantity"))
}if(Saving.loadBool("questPlayerSpellBerserkPotionHasSpell")){this.addPlayerSpell(new QuestPlayerSpell(this,"questPlayerSpellBerserkPotionButton",new Pos(45,2),"Berserk",new Color(ColorType.QUEST_BUTTON_BERSERK_POTION),new CallbackCollection(this.castPlayerBerserkPotion.bind(this)),QuestPlayerSpellCountdownType.POTIONS,this.getMagicCountdownTime(),0,"b","questPlayerSpellBerserkPotionQuantity"))
}if(Saving.loadBool("questPlayerSpellCloningPotionHasSpell")){this.addPlayerSpell(new QuestPlayerSpell(this,"questPlayerSpellCloningPotionButton",new Pos(59,2),"Cloning",new Color(ColorType.QUEST_BUTTON_CLONING_POTION),new CallbackCollection(this.castPlayerCloningPotion.bind(this)),QuestPlayerSpellCountdownType.POTIONS,this.getMagicCountdownTime(),0,"c","questPlayerSpellCloningPotionQuantity"))
}if(Saving.loadBool("questPlayerSpellPPotionHasSpell")){this.addPlayerSpell(new QuestPlayerSpell(this,"questPlayerSpellPPotionButton",new Pos(73,2),"P",new Color(ColorType.QUEST_BUTTON_P_POTION),new CallbackCollection(this.castPlayerPPotion.bind(this)),QuestPlayerSpellCountdownType.POTIONS,this.getMagicCountdownTime(),0,"p","questPlayerSpellPPotionQuantity"))
}if(Saving.loadBool("questPlayerSpellXPotionHasSpell")){this.addPlayerSpell(new QuestPlayerSpell(this,"questPlayerSpellXPotionButton",new Pos(81,2),"X",new Color(ColorType.QUEST_BUTTON_X_POTION),new CallbackCollection(this.castPlayerXPotion.bind(this)),QuestPlayerSpellCountdownType.POTIONS,this.getMagicCountdownTime(),0,"x","questPlayerSpellXPotionQuantity"))
}if(Saving.loadBool("gridItemPossessedTimeRing")){this.addPlayerSpell(new QuestPlayerSpell(this,"questPlayerSpellTimeSlowingButton",new Pos(0,4),"Time slowing",new Color(ColorType.QUEST_BUTTON_SOME_OBJECT),new CallbackCollection(this.castPlayerTimeSlowing.bind(this)),QuestPlayerSpellCountdownType.ITEM_CAPACITIES,0,8,"w"))
}if(Saving.loadBool("gridItemPossessedPogoStick")){this.addPlayerSpell(new QuestPlayerSpell(this,"questPlayerSpellJumpButton",new Pos(14,4),"Jump",new Color(ColorType.QUEST_BUTTON_SOME_OBJECT),new CallbackCollection(this.castPlayerJump.bind(this)),QuestPlayerSpellCountdownType.ITEM_CAPACITIES,0,0,"j"))
}if(Saving.loadBool("gridItemPossessedSponge")){this.addPlayerSpell(new QuestPlayerSpell(this,"questPlayerSpellSqueezeButton",new Pos(20,4),"Squeeze",new Color(ColorType.QUEST_BUTTON_SOME_OBJECT),new CallbackCollection(this.castPlayerSqueeze.bind(this)),QuestPlayerSpellCountdownType.ITEM_CAPACITIES,0,0,"s"))
}if(Saving.loadBool("gridItemPossessedPurpleSharkFin")){this.addPlayerSpell(new QuestPlayerSpell(this,"questPlayerSpell",new Pos(38,4),"Black hole spell (purple shark fin) (once per quest)",new Color(ColorType.QUEST_BLACKHOLE_SPELL),new CallbackCollection(this.castPlayerBlackhole.bind(this)),QuestPlayerSpellCountdownType.BLACKHOLE,1,4,"k"))
}this.playerSpellsHeight=0;for(var c=0;c<this.playerSpells.length;c++){if(this.playerSpells[c].getButtonPosition().y>this.playerSpellsHeight){this.playerSpellsHeight=this.playerSpells[c].getButtonPosition().y
}}this.playerSpellsHeight+=1;this.playerSpellsHeight+=1};b.prototype.drawPlayerSpells=function(){if(this.playerSpells.length>0){var c=((this.renderArea.getWidth()-100)-this.getGap())/2;
for(var d=0;d<this.playerSpells.length;d++){this.playerSpells[d].draw(this.renderArea,new Pos(c,2))
}if(this.playerSpellsCountdown>0){this.renderArea.drawString("("+Math.ceil(this.playerSpellsCountdown/10).toString()+" sec)",c+92,2);
this.renderArea.addColor(c+92,c+100,2,new Color(ColorType.QUEST_COUNTDOWN))}if(this.playerPotionsCountdown>0){this.renderArea.drawString("("+Math.ceil(this.playerPotionsCountdown/10).toString()+" sec)",c+92,4);
this.renderArea.addColor(c+92,c+100,4,new Color(ColorType.QUEST_COUNTDOWN))}}};b.prototype.drawQuestLog=function(){this.getGame().getQuestLog().draw(this.renderArea,new Pos(((this.renderArea.getWidth()-100)-this.getGap())/2,this.renderArea.getHeight()-12))
};b.prototype.drawSpecialInstruction=function(){if(this.specialInstruction!=null){this.renderArea.drawString(this.specialInstruction,this.realQuestPosition.x,this.realQuestPosition.y-1);
this.renderArea.addBold(this.realQuestPosition.x,this.realQuestPosition.x+this.specialInstruction.length,this.realQuestPosition.y-1)
}};b.prototype.getMagicCountdownTime=function(){var c=0;if(this.getGame().isEquipped("hat","eqItemHatSorceressHat")){c=50
}else{c=80}c-=c*(Saving.loadNumber("gameGiftMagic")*15/100);if(c<0){c=0}return c};
return b})(Place);var Bridge=(function(a){__extends(b,a);function b(c){a.call(this,c);
this.resizeQuest(138,32);this.addPlayerCollisionBoxes(true,false,false,true);this.getGame().getPlayer().loadCandyBoxCharacter(this);
this.getGame().getPlayer().setGlobalPosition(new Pos(0,17));this.configPlayerOrClone(this.getGame().getPlayer());
this.addEntity(this.getGame().getPlayer());this.addBridgeFloor();this.addTroll();
this.getGame().getQuestLog().addMessage(new QuestLogMessage("You're trying to cross the bridge. A huge troll is blocking your way!"))
}b.prototype.configPlayerOrClone=function(c){c.setQuestEntityMovement(new QuestEntityMovement(new Pos(1,0)));
c.getQuestEntityMovement().setGravity(true);c.getQuestEntityMovement().setWormsLike(true)
};b.prototype.endQuest=function(c){if(c){this.getGame().getQuestLog().addMessage(new QuestLogMessage("You managed to cross the bridge!"));
Saving.saveBool("mainMapDoneBridge",true)}else{this.getGame().getQuestLog().addMessage(new QuestLogMessage("You didn't manage to cross the bridge."))
}a.prototype.endQuest.call(this,c)};b.prototype.update=function(){if(this.getQuestEnded()==false){if(this.thePlayerWon()){this.endQuest(true);
return}if(this.getGame().getPlayer().shouldDie()){this.endQuest(false);return}this.updateEntities()
}this.preDraw();this.getRenderArea().drawArray(Database.getAscii("places/quests/bridge/bridge"),this.getRealQuestPosition().x,this.getRealQuestPosition().y+17);
this.drawEntities();this.drawAroundQuest();if(this.getQuestEnded()==false){this.addExitQuestButton(new CallbackCollection(this.getGame().goToMainMap.bind(this.getGame())),"buttonExitQuestNoKeeping")
}else{if(this.getQuestEndedAndWeWon()==false){this.addExitQuestButton(new CallbackCollection(this.getGame().goToMainMap.bind(this.getGame())),"buttonExitQuestNoKeepingBecauseLose")
}else{this.addExitQuestButton(new CallbackCollection(this.getGame().goToMainMap.bind(this.getGame())),"buttonExitQuestKeeping")
}}this.postDraw()};b.prototype.addBridgeFloor=function(){var c=new Wall(this,new Pos(0,18));
c.addBox(new Pos(0,0),new Pos(138,2));c.addBox(new Pos(3,2),new Pos(10,1));c.addBox(new Pos(6,3),new Pos(4,11));
c.addBox(new Pos(64,2),new Pos(10,1));c.addBox(new Pos(67,3),new Pos(4,11));c.addBox(new Pos(126,2),new Pos(10,1));
c.addBox(new Pos(129,3),new Pos(4,11));this.addEntity(c)};b.prototype.addTroll=function(){var c=new Troll(this,new Pos(100,8));
c.setQuestEntityMovement(new QuestEntityMovement(new Pos(-1,0),12));c.setHealthBar(new QuestEntityHealthBar(c,new Pos(100,1),new Pos(0,0),QuestEntityHealthBarPositionType.FIXED_ON_PAGE,true,true,BarType.HEALTH));
this.addEntity(c)};b.prototype.thePlayerWon=function(){if(this.getGame().getPlayer().getGlobalPosition().x>=138){return true
}return false};return b})(Quest);var Bugs;(function(e){var f=0;var h=0;var c=0;function g(n){var m=Random.between(0,n.length-1);
return n.substr(0,m)+a()+n.substr(m+1)}e.changeRandomCharacter=g;function a(){return Random.fromArray(["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","#","_","/","-","+","*","^",";",",",".",":","!","§","$","£","ù","è","à","@",")","(","|","]","}","{","(","~","é","<",">","0","1","2","3","4","5","6","7","8","9","%","`","'","ç"])
}e.getRandomCharacter=a;function i(){return f}e.getGraphicalBugLevel=i;function b(){return h
}e.getQuestBugLevel=b;function d(){return c}e.getUltimateBugLevel=d;function j(m){f=m
}e.setGraphicalBugLevel=j;function l(m){h=m}e.setQuestBugLevel=l;function k(m){c=m
}e.setUltimateBugLevel=k})(Bugs||(Bugs={}));var Camazotz=(function(b){__extends(a,b);
function a(c,d){b.call(this,c,d,new Naming("Camazotz, the bat god","Camazotz, the bat god"),new RenderArea(22,8),new Pos(0,0),new CollisionBoxCollection(new CollisionBox(this,new Pos(8,1),new Pos(6,2)),new CollisionBox(this,new Pos(2,3),new Pos(18,1)),new CollisionBox(this,new Pos(1,4),new Pos(20,1)),new CollisionBox(this,new Pos(0,5),new Pos(22,1)),new CollisionBox(this,new Pos(9,6),new Pos(4,1)),new CollisionBox(this,new Pos(10,7),new Pos(2,1))),new QuestEntityMovement());
this.resetDropADemonTimer();this.distanceFromPlayer=5;this.tryToMoveAgainTimer=0;
this.getQuestEntityMovement().setGravity(false);this.setDestructible(true);this.setMaxHp(5000);
this.setHp(5000);this.getRenderArea().drawArray(Database.getAscii("places/quests/hell/camazotz"));
this.setTransparency(new RenderTransparency(" ","%"));this.addQuestEntityWeapon(new QuestEntityWeapon(this.getQuest(),this,new Naming("Its claws","its claws"),new CollisionBoxCollection(new CollisionBox(this,new Pos(-1,0),new Pos(24,9))),300));
this.getLastQuestEntityWeapon().getCloseCombatDelay().setBetweenDelay(20,100)}a.prototype.update=function(){this.handleMovementTowardsPlayer();
this.handleDropADemon();b.prototype.update.call(this)};a.prototype.willDie=function(){this.getQuest().getGame().getQuestLog().addMessage(new QuestLogMessage(this.getDeathMessage()+" (and found "+Algo.pluralFormat(this.getQuest().foundCandies(1000000)," candy"," candies")+")",this.getQuest().getCandiesFoundMessage()))
};a.prototype.dropADemon=function(){var c=new Demon(this.getQuest(),this.getGlobalPosition().plus(new Pos(8,8)));
c.setHealthBar(new QuestEntityHealthBar(c,new Pos(6,1)));this.getQuest().addEntity(c)
};a.prototype.handleDropADemon=function(){if(this.dropADemonTimer<0){this.dropADemon();
this.resetDropADemonTimer()}else{this.dropADemonTimer-=1}};a.prototype.handleMovementTowardsPlayer=function(){if(this.tryToMoveAgainTimer<=0){this.goTowards(this.getGlobalPosition(),this.getQuest().getGame().getPlayer().getGlobalPosition().plus(new Pos(this.distanceFromPlayer,0)),2,new Pos(2,0),true);
this.tryToMoveAgainTimer=3}else{this.tryToMoveAgainTimer-=1}};a.prototype.resetDropADemonTimer=function(){this.dropADemonTimer=Random.between(8,12)
};return a})(QuestEntity);var Camel=(function(a){__extends(b,a);function b(c,d){a.call(this,c,d,new Naming("A camel","a camel"),new RenderArea(7,2),new Pos(0,0),new CollisionBoxCollection(new CollisionBox(this,new Pos(0,0),new Pos(6,1)),new CollisionBox(this,new Pos(2,1),new Pos(5,1))),new QuestEntityMovement());
this.getQuestEntityMovement().setGravity(true);this.setDestructible(true);this.setMaxHp(7);
this.setHp(7);this.getRenderArea().drawArray(Database.getAscii("places/quests/desert/camel"));
this.setTransparency(new RenderTransparency(" "));this.addQuestEntityWeapon(new QuestEntityWeapon(this.getQuest(),this,new Naming("Its long neck","its long neck"),new CollisionBoxCollection(new CollisionBox(this,new Pos(-1,0),new Pos(3,3))),5));
this.getLastQuestEntityWeapon().getCloseCombatDelay().setBetweenDelay(5,7)}b.prototype.willDie=function(){this.getQuest().getGame().getQuestLog().addMessage(new QuestLogMessage(this.getDeathMessage()+" (and found "+Algo.pluralFormat(this.getQuest().foundCandies(5+Random.upTo(5))," candy"," candies")+")",this.getQuest().getCandiesFoundMessage()))
};return b})(QuestEntity);var StatusBarResource=(function(b){__extends(a,b);function a(c,d){b.call(this,d);
this.game=c}a.prototype.setCurrent=function(d,c){if(c===void 0){c=false}b.prototype.setCurrent.call(this,d);
if(c){this.game.getPlayer().reCalcMaxHp()}else{this.game.updateStatusBar()}};return a
})(Resource);var CandiesEaten=(function(a){__extends(b,a);function b(c,d){a.call(this,c,d)
}b.prototype.getCurrentAsString=function(){var c=this.getCurrent();if(c<0){return"You have eaten negative candies ?!"
}else{if(c==1){return"You have eaten 1 candy"}else{return"You have eaten "+Algo.numberToStringButNicely(c)+" candies"
}}};b.prototype.setCurrent=function(c){a.prototype.setCurrent.call(this,c,true)};
return b})(StatusBarResource);var CandiesThrownSmileyCaveObject=(function(){function a(c,b){this.str=c;
this.position=b}a.prototype.getPosition=function(){return this.position};a.prototype.getStr=function(){return this.str
};return a})();var CandiesThrownSmileyCaveStep;(function(a){a[a.FIRST_ROOM=0]="FIRST_ROOM";
a[a.SECOND_ROOM=1]="SECOND_ROOM";a[a.THIRD_ROOM=2]="THIRD_ROOM"})(CandiesThrownSmileyCaveStep||(CandiesThrownSmileyCaveStep={}));
var CandiesThrownSmiley=(function(){function a(){}a.prototype.draw=function(c,b,e,d){return 0
};return a})();var CandiesThrownSmileyCave=(function(b){__extends(a,b);function a(d,e,c){if(c===void 0){c=CandiesThrownSmileyCaveStep.FIRST_ROOM
}b.call(this);this.objects=[];this.chestOpened=false;this.smiley=d;this.smileyPosition=e;
this.step=c}a.prototype.draw=function(e,c,g,f){e.drawString(f,c,g);e.drawVerticalLine("|",0,g+2,g+8);
e.drawVerticalLine("|",62,g,g+8);e.drawHorizontalLine("_",0,57,g+1);e.drawString("|",56,g+1);
switch(this.step){case CandiesThrownSmileyCaveStep.THIRD_ROOM:e.drawHorizontalLine("-",12,62,g+16);
e.drawVerticalLine("|",62,g+9,g+16);e.drawArray(Database.getAscii("general/candyRoom"),12,g+9);
case CandiesThrownSmileyCaveStep.SECOND_ROOM:e.drawHorizontalLine("-",1,4,g+8);e.drawHorizontalLine("-",9,62,g+8);
e.drawVerticalLine("|",0,g+9,g+16);e.drawVerticalLine("|",11,g+9,g+14);e.drawHorizontalLine("-",1,12,g+16);
break;case CandiesThrownSmileyCaveStep.FIRST_ROOM:e.drawHorizontalLine("-",1,62,g+8);
break}e.drawString("|_|",1,g+7);if(this.chestOpened==false){e.drawString("_",2,g+6)
}else{e.drawString("(",1,g+6)}e.drawString(this.smiley,c+this.smileyPosition.x,g+this.smileyPosition.y);
for(var d=0;d<this.objects.length;d++){e.drawString(this.objects[d].getStr(),c+this.objects[d].getPosition().x,g+this.objects[d].getPosition().y)
}switch(this.step){case CandiesThrownSmileyCaveStep.FIRST_ROOM:return 8;break;case CandiesThrownSmileyCaveStep.SECOND_ROOM:case CandiesThrownSmileyCaveStep.THIRD_ROOM:return 16;
break}};a.prototype.addObject=function(c){this.objects.push(c);return this};a.prototype.openChest=function(){this.chestOpened=true;
return this};return a})(CandiesThrownSmiley);var CandiesThrownSmileyFirstLine=(function(b){__extends(a,b);
function a(c){b.call(this);this.line=c}a.prototype.draw=function(d,c,f,e){d.drawString(e+this.line,c,f);
return 0};return a})(CandiesThrownSmiley);Saving.registerBool("candiesThrownGotChocolateBar",false);
var CandiesThrown=(function(a){__extends(b,a);function b(c,d){a.call(this,d);this.smileys=[new CandiesThrownSmileyFirstLine("."),new CandiesThrownSmileyFirstLine("..."),new CandiesThrownSmileyFirstLine("...?"),new CandiesThrownSmileyFirstLine("...? :|"),new CandiesThrownSmileyFirstLine("...? :/"),new CandiesThrownSmileyFirstLine("...? :("),new CandiesThrownSmileyFirstLine("...? :["),new CandiesThrownSmileyFirstLine("...? :{"),new CandiesThrownSmileyFirstLine("...? :'("),new CandiesThrownSmileyFirstLine("...? (;_;)"),new CandiesThrownSmileyFirstLine("...?  (;_;)"),new CandiesThrownSmileyFirstLine("...?   (;_;)"),new CandiesThrownSmileyFirstLine("...?    (;_;)"),new CandiesThrownSmileyFirstLine("...?   (;_;)"),new CandiesThrownSmileyFirstLine("...?  (;_;)"),new CandiesThrownSmileyFirstLine("...? (;_;)"),new CandiesThrownSmileyFirstLine("...? (;__;)"),new CandiesThrownSmileyFirstLine("...? (;___;)"),new CandiesThrownSmileyFirstLine("...? (;__;)"),new CandiesThrownSmileyFirstLine("...? (;_;)"),new CandiesThrownSmileyFirstLine("...? (;.;)"),new CandiesThrownSmileyFirstLine("...? (:.:)"),new CandiesThrownSmileyFirstLine("...? (:_:)"),new CandiesThrownSmileyFirstLine("...? (;_;)"),new CandiesThrownSmileyFirstLine("...?(;_;)"),new CandiesThrownSmileyFirstLine("...? (;_;)"),new CandiesThrownSmileyFirstLine("...?(;_;)"),new CandiesThrownSmileyFirstLine("...? (;_;)"),new CandiesThrownSmileyFirstLine("...?(;_;)"),new CandiesThrownSmileyFirstLine("...? (;_;)"),new CandiesThrownSmileyFirstLine("...? (;_;) come"),new CandiesThrownSmileyFirstLine("...? (;_;) come on"),new CandiesThrownSmileyFirstLine("...? (-_-) come on"),new CandiesThrownSmileyFirstLine("...? (-_-)"),new CandiesThrownSmileyFirstLine("...? (-_-) why are you throwing candies like that?"),new CandiesThrownSmileyFirstLine("...? (o_o)"),new CandiesThrownSmileyFirstLine("...? (o_o) I'm gonna destroy something if you don't stop!!"),new CandiesThrownSmileyFirstLine("...? (o_o)"),new CandiesThrownSmileyFirstLine("...?  (o_o)"),new CandiesThrownSmileyFirstLine("...?   (o_o)"),new CandiesThrownSmileyFirstLine("...?    (o_o)"),new CandiesThrownSmileyFirstLine("...?     (o_o)"),new CandiesThrownSmileyFirstLine("...?      (o_o)"),new CandiesThrownSmileyFirstLine("...?       (o_o)"),new CandiesThrownSmileyFirstLine("...?       (O_O)"),new CandiesThrownSmileyFirstLine("...?      (O_O)"),new CandiesThrownSmileyFirstLine("...?     (O_O)"),new CandiesThrownSmileyFirstLine("...?    (O_O)"),new CandiesThrownSmileyFirstLine("...?   (O_O)"),new CandiesThrownSmileyFirstLine("...?  (O_O)"),new CandiesThrownSmileyFirstLine("...? (O_O)"),new CandiesThrownSmileyFirstLine("...?(O_O)"),new CandiesThrownSmileyFirstLine("...(O_O)"),new CandiesThrownSmileyFirstLine("..(O_O)"),new CandiesThrownSmileyFirstLine(".(O_O)"),new CandiesThrownSmileyFirstLine("(O_O)"),new CandiesThrownSmileyFirstLine(" (O_O)"),new CandiesThrownSmileyFirstLine(" (o_o)"),new CandiesThrownSmileyFirstLine(" (o_o)"),new CandiesThrownSmileyFirstLine(" (o_o)"),new CandiesThrownSmileyFirstLine(" (o_o)"),new CandiesThrownSmileyFirstLine(" (o_o) stop!!"),new CandiesThrownSmileyFirstLine(" (o_o)"),new CandiesThrownSmileyFirstLine(" (o_o)"),new CandiesThrownSmileyFirstLine(" (;_;)"),new CandiesThrownSmileyFirstLine(" (;_;) well."),new CandiesThrownSmileyFirstLine(" (;_;) I guess I'll just leave, then."),new CandiesThrownSmileyFirstLine("  (;_;)"),new CandiesThrownSmileyFirstLine("   (;_;)"),new CandiesThrownSmileyFirstLine("    (;_;)"),new CandiesThrownSmileyFirstLine("     (;_;)"),new CandiesThrownSmileyFirstLine("      (;_;)"),new CandiesThrownSmileyFirstLine("       (;_;)"),new CandiesThrownSmileyFirstLine("        (;_;)"),new CandiesThrownSmileyFirstLine("         (;_;)"),new CandiesThrownSmileyFirstLine("          (;_;)"),new CandiesThrownSmileyFirstLine("           (;_;)"),new CandiesThrownSmileyFirstLine("            (;_;)"),new CandiesThrownSmileyFirstLine("             (;_;)"),new CandiesThrownSmileyFirstLine("              (;_;)"),new CandiesThrownSmileyFirstLine("               (;_;)"),new CandiesThrownSmileyFirstLine("                (;_;)"),new CandiesThrownSmileyFirstLine("                 (;_;)"),new CandiesThrownSmileyFirstLine("                  (;_;)"),new CandiesThrownSmileyFirstLine("                   (;_;)"),new CandiesThrownSmileyFirstLine("                    (;_;)"),new CandiesThrownSmileyFirstLine("                     (;_;)"),new CandiesThrownSmileyFirstLine("                      (;_;)"),new CandiesThrownSmileyFirstLine("                      (;_;)|"),new CandiesThrownSmileyFirstLine("                      (o_o)|"),new CandiesThrownSmileyFirstLine("                 crap (o_o)|"),new CandiesThrownSmileyFirstLine("               a wall (o_o)|"),new CandiesThrownSmileyFirstLine("                      (._.)|"),new CandiesThrownSmileyFirstLine("     I'm trapped here (._.)|"),new CandiesThrownSmileyFirstLine("    maybe...          (._.)|"),new CandiesThrownSmileyFirstLine("    maybe I could dig (._.)|"),new CandiesThrownSmileyFirstLine("    dig in the ground (._.)|"),new CandiesThrownSmileyFirstLine("                      (._.)|"),new CandiesThrownSmileyFirstLine("                *dig* (._.)|"),new CandiesThrownSmileyFirstLine("                    (._.)|"),new CandiesThrownSmileyFirstLine("              *dig* (._.)|"),new CandiesThrownSmileyFirstLine("                    (._.)|"),new CandiesThrownSmileyFirstLine("              *dig* (._.)|"),new CandiesThrownSmileyFirstLine("                    (._.)|"),new CandiesThrownSmileyFirstLine("              *dig* (._.)|"),new CandiesThrownSmileyFirstLine("                    (._.)|"),new CandiesThrownSmileyFirstLine("              *dig* (._.)|"),new CandiesThrownSmileyCave("(O_O)",new Pos(57,1)),new CandiesThrownSmileyCave("(O_O)",new Pos(57,2)),new CandiesThrownSmileyCave("(O_O)",new Pos(57,3)),new CandiesThrownSmileyCave("(O_O)",new Pos(57,4)),new CandiesThrownSmileyCave("(O_O)",new Pos(57,5)),new CandiesThrownSmileyCave("(O_O)",new Pos(57,6)),new CandiesThrownSmileyCave("(O_O)",new Pos(57,7)),new CandiesThrownSmileyCave("(._.)",new Pos(57,7)),new CandiesThrownSmileyCave("(._.)",new Pos(57,7)).addObject(new CandiesThrownSmileyCaveObject("wow.",new Pos(52,5))),new CandiesThrownSmileyCave("(._.)",new Pos(57,7)).addObject(new CandiesThrownSmileyCaveObject("I didn't expect that.",new Pos(35,5))),new CandiesThrownSmileyCave("(._.)",new Pos(57,7)),new CandiesThrownSmileyCave("(._.)",new Pos(55,7)),new CandiesThrownSmileyCave("(._.)",new Pos(53,7)),new CandiesThrownSmileyCave("(._.)",new Pos(51,7)),new CandiesThrownSmileyCave("(._.)",new Pos(49,7)),new CandiesThrownSmileyCave("(._.)",new Pos(47,7)),new CandiesThrownSmileyCave("(._.)",new Pos(45,7)),new CandiesThrownSmileyCave("(._.)",new Pos(45,7)).addObject(new CandiesThrownSmileyCaveObject("what's this place?",new Pos(39,5))),new CandiesThrownSmileyCave("(._.)",new Pos(45,7)),new CandiesThrownSmileyCave("(._.)",new Pos(43,7)),new CandiesThrownSmileyCave("(._.)",new Pos(41,7)),new CandiesThrownSmileyCave("(._.)",new Pos(39,7)),new CandiesThrownSmileyCave("(._.)",new Pos(37,7)),new CandiesThrownSmileyCave("(._.)",new Pos(35,7)),new CandiesThrownSmileyCave("(._.)",new Pos(33,7)),new CandiesThrownSmileyCave("(._.)",new Pos(33,7)).addObject(new CandiesThrownSmileyCaveObject("it looks like a cave",new Pos(26,5))),new CandiesThrownSmileyCave("(._.)",new Pos(33,7)),new CandiesThrownSmileyCave("(._.)",new Pos(31,7)),new CandiesThrownSmileyCave("(._.)",new Pos(29,7)),new CandiesThrownSmileyCave("(._.)",new Pos(27,7)),new CandiesThrownSmileyCave("(._.)",new Pos(25,7)),new CandiesThrownSmileyCave("(._.)",new Pos(23,7)),new CandiesThrownSmileyCave("(._.)",new Pos(21,7)),new CandiesThrownSmileyCave("(._.)",new Pos(19,7)),new CandiesThrownSmileyCave("(._.)",new Pos(19,7)).addObject(new CandiesThrownSmileyCaveObject("oh! there's a chest over there!",new Pos(8,5))),new CandiesThrownSmileyCave("(._.)",new Pos(19,7)),new CandiesThrownSmileyCave("(._.)",new Pos(17,7)),new CandiesThrownSmileyCave("(._.)",new Pos(15,7)),new CandiesThrownSmileyCave("(._.)",new Pos(13,7)),new CandiesThrownSmileyCave("(._.)",new Pos(11,7)),new CandiesThrownSmileyCave("(._.)",new Pos(9,7)),new CandiesThrownSmileyCave("(._.)",new Pos(7,7)),new CandiesThrownSmileyCave("(._.)",new Pos(5,7)),new CandiesThrownSmileyCave("(._.)",new Pos(4,7)),new CandiesThrownSmileyCave("(._.)",new Pos(4,7)).addObject(new CandiesThrownSmileyCaveObject("I guess I should open it",new Pos(3,5))),new CandiesThrownSmileyCave("(._.)",new Pos(4,7)),new CandiesThrownSmileyCave("(._.)",new Pos(4,7)).openChest(),new CandiesThrownSmileyCave("(._.)",new Pos(4,7)).addObject(new CandiesThrownSmileyCaveObject("!!!",new Pos(5,5))).openChest(),new CandiesThrownSmileyCave("(._.)",new Pos(4,7)).addObject(new CandiesThrownSmileyCaveObject("I found a chocolate bar!",new Pos(3,5))),new CandiesThrownSmileyCave("(._.)",new Pos(4,7)).addObject(new CandiesThrownSmileyCaveObject("...",new Pos(3,5))),new CandiesThrownSmileyCave("(._.)",new Pos(4,7)).addObject(new CandiesThrownSmileyCaveObject("hey, listen",new Pos(3,5))),new CandiesThrownSmileyCave("(._.)",new Pos(4,7)).addObject(new CandiesThrownSmileyCaveObject("I'll give you the chocolate bar",new Pos(3,5))),new CandiesThrownSmileyCave("(._.)",new Pos(4,7)).addObject(new CandiesThrownSmileyCaveObject("if you swear to stop throwing candies",new Pos(3,5))),new CandiesThrownSmileyCave("(._.)",new Pos(4,7)).addObject(new CandiesThrownSmileyCaveObject("okay?",new Pos(3,5))),new CandiesThrownSmileyCave("(._.)",new Pos(4,7)).addObject(new CandiesThrownSmileyCaveObject("throw 10 last candies to let me know if you agree",new Pos(3,5))),new CandiesThrownSmileyCave("(._.)",new Pos(4,7)).addObject(new CandiesThrownSmileyCaveObject("good. here's the bar. no more throwing!!",new Pos(3,5))),new CandiesThrownSmileyCave("(._.)",new Pos(4,7)),new CandiesThrownSmileyCave("(._.)",new Pos(4,7)).addObject(new CandiesThrownSmileyCaveObject("Hey?!",new Pos(3,5))),new CandiesThrownSmileyCave("(;_;)",new Pos(4,7)).addObject(new CandiesThrownSmileyCaveObject("You're still throwing candies!",new Pos(3,5))),new CandiesThrownSmileyCave("(;_;)",new Pos(4,7)).addObject(new CandiesThrownSmileyCaveObject("Candies are precious, you know.",new Pos(3,5))),new CandiesThrownSmileyCave("(;_;)",new Pos(4,7)).addObject(new CandiesThrownSmileyCaveObject("...",new Pos(5,5))),new CandiesThrownSmileyCave("(;_;)",new Pos(4,7)).addObject(new CandiesThrownSmileyCaveObject("I'm out of here.",new Pos(3,5))),new CandiesThrownSmileyCave("(;_;)",new Pos(4,7)).addObject(new CandiesThrownSmileyCaveObject("*dig*",new Pos(10,7))),new CandiesThrownSmileyCave("(;_;)",new Pos(4,7)),new CandiesThrownSmileyCave("(;_;)",new Pos(4,7)).addObject(new CandiesThrownSmileyCaveObject("*dig*",new Pos(10,7))),new CandiesThrownSmileyCave("(;_;)",new Pos(4,7)),new CandiesThrownSmileyCave("(;_;)",new Pos(4,7)).addObject(new CandiesThrownSmileyCaveObject("*dig*",new Pos(10,7))),new CandiesThrownSmileyCave("(;_;)",new Pos(4,7)),new CandiesThrownSmileyCave("(;_;)",new Pos(4,7)).addObject(new CandiesThrownSmileyCaveObject("*dig*",new Pos(10,7))),new CandiesThrownSmileyCave("(;_;)",new Pos(4,8),CandiesThrownSmileyCaveStep.SECOND_ROOM),new CandiesThrownSmileyCave("(;_;)",new Pos(4,9),CandiesThrownSmileyCaveStep.SECOND_ROOM),new CandiesThrownSmileyCave("(;_;)",new Pos(4,10),CandiesThrownSmileyCaveStep.SECOND_ROOM),new CandiesThrownSmileyCave("(;_;)",new Pos(4,11),CandiesThrownSmileyCaveStep.SECOND_ROOM),new CandiesThrownSmileyCave("(;_;)",new Pos(4,12),CandiesThrownSmileyCaveStep.SECOND_ROOM),new CandiesThrownSmileyCave("(;_;)",new Pos(4,13),CandiesThrownSmileyCaveStep.SECOND_ROOM),new CandiesThrownSmileyCave("(;_;)",new Pos(4,14),CandiesThrownSmileyCaveStep.SECOND_ROOM),new CandiesThrownSmileyCave("(;_;)",new Pos(4,15),CandiesThrownSmileyCaveStep.SECOND_ROOM),new CandiesThrownSmileyCave("(;_;)",new Pos(6,15),CandiesThrownSmileyCaveStep.SECOND_ROOM),new CandiesThrownSmileyCave("(;_;)",new Pos(8,15),CandiesThrownSmileyCaveStep.SECOND_ROOM),new CandiesThrownSmileyCave("(;_;)",new Pos(10,15),CandiesThrownSmileyCaveStep.THIRD_ROOM),new CandiesThrownSmileyCave("(;_;)",new Pos(12,15),CandiesThrownSmileyCaveStep.THIRD_ROOM),new CandiesThrownSmileyCave("(o_o)",new Pos(12,15),CandiesThrownSmileyCaveStep.THIRD_ROOM),new CandiesThrownSmileyCave("(o_o)",new Pos(12,14),CandiesThrownSmileyCaveStep.THIRD_ROOM),new CandiesThrownSmileyCave("(o_o)",new Pos(12,13),CandiesThrownSmileyCaveStep.THIRD_ROOM),new CandiesThrownSmileyCave("(o_o)",new Pos(12,12),CandiesThrownSmileyCaveStep.THIRD_ROOM),new CandiesThrownSmileyCave("(o_o)",new Pos(13,11),CandiesThrownSmileyCaveStep.THIRD_ROOM),new CandiesThrownSmileyCave("(o_o)",new Pos(15,11),CandiesThrownSmileyCaveStep.THIRD_ROOM),new CandiesThrownSmileyCave("(o_o)",new Pos(17,11),CandiesThrownSmileyCaveStep.THIRD_ROOM),new CandiesThrownSmileyCave("(o_o)",new Pos(18,11),CandiesThrownSmileyCaveStep.THIRD_ROOM),new CandiesThrownSmileyCave("(O_O)",new Pos(18,11),CandiesThrownSmileyCaveStep.THIRD_ROOM),new CandiesThrownSmileyCave("(O_O)",new Pos(18,11),CandiesThrownSmileyCaveStep.THIRD_ROOM).addObject(new CandiesThrownSmileyCaveObject("this is...",new Pos(13,9))),new CandiesThrownSmileyCave("(O_O)",new Pos(18,11),CandiesThrownSmileyCaveStep.THIRD_ROOM).addObject(new CandiesThrownSmileyCaveObject("a room...",new Pos(13,9))),new CandiesThrownSmileyCave("(O_O)",new Pos(18,11),CandiesThrownSmileyCaveStep.THIRD_ROOM).addObject(new CandiesThrownSmileyCaveObject("FULL OF GIANT CANDIES!",new Pos(33,9))),new CandiesThrownSmileyCave("(O_O)",new Pos(18,11),CandiesThrownSmileyCaveStep.THIRD_ROOM),new CandiesThrownSmileyCave("(^_^)",new Pos(18,11),CandiesThrownSmileyCaveStep.THIRD_ROOM),new CandiesThrownSmileyCave("(^_^)",new Pos(18,11),CandiesThrownSmileyCaveStep.THIRD_ROOM).addObject(new CandiesThrownSmileyCaveObject("well",new Pos(16,9))),new CandiesThrownSmileyCave("(^_^)",new Pos(18,11),CandiesThrownSmileyCaveStep.THIRD_ROOM).addObject(new CandiesThrownSmileyCaveObject("don't worry about the candies you threw",new Pos(6,7))),new CandiesThrownSmileyCave("(^_^)",new Pos(18,11),CandiesThrownSmileyCaveStep.THIRD_ROOM).addObject(new CandiesThrownSmileyCaveObject("just let me eat those candies and you're forgiven",new Pos(6,7))),new CandiesThrownSmileyCave("(^_^)",new Pos(18,11),CandiesThrownSmileyCaveStep.THIRD_ROOM).addObject(new CandiesThrownSmileyCaveObject("<3",new Pos(17,9))),new CandiesThrownSmileyCave("(^_^)",new Pos(20,11),CandiesThrownSmileyCaveStep.THIRD_ROOM),new CandiesThrownSmileyCave("(^_^)",new Pos(22,11),CandiesThrownSmileyCaveStep.THIRD_ROOM),new CandiesThrownSmileyCave("(^_^)",new Pos(22,10),CandiesThrownSmileyCaveStep.THIRD_ROOM),new CandiesThrownSmileyCave("(^_^)",new Pos(23,9),CandiesThrownSmileyCaveStep.THIRD_ROOM),new CandiesThrownSmileyCave("(^_^)",new Pos(25,9),CandiesThrownSmileyCaveStep.THIRD_ROOM),new CandiesThrownSmileyCave("(^_^)",new Pos(27,9),CandiesThrownSmileyCaveStep.THIRD_ROOM),new CandiesThrownSmileyCave("(^_^)",new Pos(29,9),CandiesThrownSmileyCaveStep.THIRD_ROOM),new CandiesThrownSmileyCave("(^_^)",new Pos(31,9),CandiesThrownSmileyCaveStep.THIRD_ROOM),new CandiesThrownSmileyCave("(^_^)",new Pos(33,9),CandiesThrownSmileyCaveStep.THIRD_ROOM),new CandiesThrownSmileyCave("(^_^)",new Pos(34,10),CandiesThrownSmileyCaveStep.THIRD_ROOM),new CandiesThrownSmileyCave("(^_^)",new Pos(34,11),CandiesThrownSmileyCaveStep.THIRD_ROOM),new CandiesThrownSmileyCave("(^_^)",new Pos(36,11),CandiesThrownSmileyCaveStep.THIRD_ROOM),new CandiesThrownSmileyCave("(^_^)",new Pos(38,11),CandiesThrownSmileyCaveStep.THIRD_ROOM),new CandiesThrownSmileyCave("(^_^)",new Pos(40,11),CandiesThrownSmileyCaveStep.THIRD_ROOM),new CandiesThrownSmileyCave("(^_^)",new Pos(42,11),CandiesThrownSmileyCaveStep.THIRD_ROOM),new CandiesThrownSmileyCave("(^_^)",new Pos(43,11),CandiesThrownSmileyCaveStep.THIRD_ROOM)];
this.nomNomSmileys=[new CandiesThrownSmileyCave("(^_^)",new Pos(43,11),CandiesThrownSmileyCaveStep.THIRD_ROOM),new CandiesThrownSmileyCave("(^_^)",new Pos(43,11),CandiesThrownSmileyCaveStep.THIRD_ROOM).addObject(new CandiesThrownSmileyCaveObject("*nom*",new Pos(40,9))),new CandiesThrownSmileyCave("(^_^)",new Pos(43,11),CandiesThrownSmileyCaveStep.THIRD_ROOM).addObject(new CandiesThrownSmileyCaveObject("*nom*",new Pos(41,9))),new CandiesThrownSmileyCave("(^_^)",new Pos(43,11),CandiesThrownSmileyCaveStep.THIRD_ROOM).addObject(new CandiesThrownSmileyCaveObject("*nom*",new Pos(42,9))),new CandiesThrownSmileyCave("(^_^)",new Pos(43,11),CandiesThrownSmileyCaveStep.THIRD_ROOM).addObject(new CandiesThrownSmileyCaveObject("*nom*",new Pos(43,9))),new CandiesThrownSmileyCave("(^_^)",new Pos(43,11),CandiesThrownSmileyCaveStep.THIRD_ROOM).addObject(new CandiesThrownSmileyCaveObject("*nom*",new Pos(44,9))),new CandiesThrownSmileyCave("(^_^)",new Pos(43,11),CandiesThrownSmileyCaveStep.THIRD_ROOM).addObject(new CandiesThrownSmileyCaveObject("*nom*",new Pos(45,9))),new CandiesThrownSmileyCave("(^_^)",new Pos(43,11),CandiesThrownSmileyCaveStep.THIRD_ROOM).addObject(new CandiesThrownSmileyCaveObject("*nom*",new Pos(46,9))),new CandiesThrownSmileyCave("(^_^)",new Pos(43,11),CandiesThrownSmileyCaveStep.THIRD_ROOM).addObject(new CandiesThrownSmileyCaveObject("*nom* *nom*",new Pos(40,9)))];
this.nomNomSmileyIndex=0;this.game=c}b.prototype.add=function(d){var c=a.prototype.add.call(this,d);
if(Saving.loadBool("candiesThrownGotChocolateBar")==false&&Math.floor(this.getCurrent()/10)-1==162){this.game.getChocolateBars().add(1);
Saving.saveBool("candiesThrownGotChocolateBar",true)}this.nomNomSmileyIndex=Random.between(0,this.nomNomSmileys.length-1);
return c};b.prototype.draw=function(d,c,h){var g=this.getCurrent();var f;var e;if(g<0){e="You threw negative candies ?!"
}else{if(g==1){e="You threw 1 candy on the ground"}else{e="You threw "+Algo.numberToStringButNicely(g)+" candies on the ground"
}}f=Math.floor(g/10)-1;if(f>=0&&f<this.smileys.length){return this.smileys[f].draw(d,c,h,e)
}else{if(f<0){d.drawString(e,c,h);return 0}else{return this.nomNomSmileys[this.nomNomSmileyIndex].draw(d,c,h,e)
}}};return b})(Resource);var Candies=(function(b){__extends(a,b);function a(c,d){b.call(this,c,d)
}a.prototype.getCurrentAsString=function(c){if(c===void 0){c=10}var i=this.getCurrent();
var d=c;var f="";var e="";var g="";var h="";if(i<0){return"What, negative candies?!"
}else{if(i==1){return"You have 1 candy"}else{if(i==1337){f="leet"}else{f=Algo.numberToStringButNicely(i)
}}}d=c-f.length;if(d>=8){g=" candies";d=c-f.length-g.length;if(d>=9){e="You have "
}else{if(d>=3){e="-> "}}}else{if(d>=4){g=" cnd"}else{if(d>=2){g=" c"}}}d=c-f.length-e.length-g.length;
if(i==42&&d>=4){h=" \\o/"}else{if((i==65535||i==314159)&&d>=1){h="!"}}return e+f+g+h
};return a})(StatusBarResource);Saving.registerBool("candyBoxBoxOpened",false);var CandyBox=(function(b){__extends(a,b);
function a(c){b.call(this,c);this.renderArea=new RenderArea();this.eatButtonShown=false;
this.throwButtonShown=false;this.requestFeatureButtonShown=false;this.renderArea.resize(100,40);
this.update()}a.prototype.willBeDisplayed=function(){this.checkCandies();this.getGame().getCandies().getCallbackCollection().addCallback(this.checkCandies.bind(this));
this.getGame().addHotkey(new Hotkey("e",new CallbackCollection(this.clickedEatCandiesButton.bind(this))));
this.getGame().addHotkey(new Hotkey("t",new CallbackCollection(this.clickedThrowCandiesButton.bind(this))))
};a.prototype.update=function(){var c=0;this.renderArea.resetAllButSize();if(Saving.loadBool("lonelyHouseTakeTheBoxDone")){if(Saving.loadBool("candyBoxBoxOpened")==true){this.renderArea.drawArray(Database.getAscii("general/openBox"),68,4)
}else{this.renderArea.drawArray(Database.getAscii("general/box"),68,4)}}if(Saving.loadBool("gridItemPossessedTalkingCandy")==true){this.renderArea.drawArray(Database.getAscii("gridItems/talkingCandy"),68,37);
if(Saving.loadBool("lonelyHouseTakeTheBoxDone")==false){this.renderArea.drawSpeech(Database.getText("talkingCandySpeechNoBox"),30,72,98,"candyBoxTalkingCandySpeech",Database.getTranslatedText("talkingCandySpeechNoBox"))
}else{if(Saving.loadBool("candyBoxBoxOpened")){this.renderArea.drawSpeech(Database.getText("talkingCandySpeech2"),34,72,98,"candyBoxTalkingCandySpeech",Database.getTranslatedText("talkingCandySpeech2"))
}else{this.renderArea.drawSpeech(Database.getText("talkingCandySpeech1"),30,72,98,"candyBoxTalkingCandySpeech",Database.getTranslatedText("talkingCandySpeech1"));
this.renderArea.addAsciiRealButton(Database.getText("talkingCandyButton"),80,37,"candyBoxTalkingCandyButton",Database.getTranslatedText("talkingCandyButton"));
this.renderArea.addLinkCall(".candyBoxTalkingCandyButton",new CallbackCollection(this.openBox.bind(this)))
}}}if(this.eatButtonShown){this.renderArea.addAsciiRealButton(Database.getText("candyBoxEatCandiesButton"),0,1,"candyBoxEatCandiesButton",Database.getTranslatedText("candyBoxEatCandiesButton"),false,0);
this.renderArea.addLinkCall(".candyBoxEatCandiesButton",new CallbackCollection(this.clickedEatCandiesButton.bind(this)));
if(this.getGame().getCandiesEaten().getCurrent()!=0){this.renderArea.drawString(this.getGame().getCandiesEaten().getCurrentAsString(),0,3)
}}if(this.throwButtonShown){this.renderArea.addAsciiRealButton(Database.getText("candyBoxThrowCandiesButton"),0,6,"candyBoxThrowCandiesButton",Database.getTranslatedText("candyBoxThrowCandiesButton"),false,0);
this.renderArea.addLinkCall(".candyBoxThrowCandiesButton",new CallbackCollection(this.clickedThrowCandiesButton.bind(this)));
if(this.getGame().getCandiesThrown().getCurrent()!=0){c=this.getGame().getCandiesThrown().draw(this.renderArea,0,8)
}}if(this.requestFeatureButtonShown){if(Saving.loadBool("statusBarUnlocked")==false){this.renderArea.addAsciiRealButton(Database.getText("candyBoxRequestStatusBarUnlocked"),0,11+c,"candyBoxRequestStatusBarUnlockedButton",Database.getTranslatedText("candyBoxRequestStatusBarUnlocked"),true);
this.renderArea.addLinkCall(".candyBoxRequestStatusBarUnlockedButton",new CallbackCollection(this.requestStatusBarUnlocked.bind(this)))
}else{if(Saving.loadBool("statusBarUnlockedCfg")==false){this.renderArea.addAsciiRealButton(Database.getText("candyBoxRequestStatusBarUnlockedCfg"),0,11+c,"candyBoxRequestStatusBarUnlockedCfgButton",Database.getTranslatedText("candyBoxRequestStatusBarUnlockedCfg"),true);
this.renderArea.addLinkCall(".candyBoxRequestStatusBarUnlockedCfgButton",new CallbackCollection(this.requestStatusBarUnlockedCfg.bind(this)));
this.renderArea.drawString(Database.getText("candyBoxRequestStatusBarUnlockedComment"),0,14+c);
this.renderArea.drawString(Database.getTranslatedText("candyBoxRequestStatusBarUnlockedComment"),0,15+c,true)
}else{if(Saving.loadBool("statusBarUnlockedSave")==false){this.renderArea.addAsciiRealButton(Database.getText("candyBoxRequestStatusBarUnlockedSave"),0,11+c,"candyBoxRequestStatusBarUnlockedSaveButton",Database.getTranslatedText("candyBoxRequestStatusBarUnlockedSave"),true);
this.renderArea.addLinkCall(".candyBoxRequestStatusBarUnlockedSaveButton",new CallbackCollection(this.requestStatusBarUnlockedSave.bind(this)));
this.renderArea.drawString(Database.getText("candyBoxRequestStatusBarUnlockedCfgComment1"),0,14+c);
this.renderArea.drawString(Database.getText("candyBoxRequestStatusBarUnlockedCfgComment2"),0,15+c);
this.renderArea.drawString(Database.getTranslatedText("candyBoxRequestStatusBarUnlockedCfgComment1"),0,16+c,true);
this.renderArea.drawString(Database.getTranslatedText("candyBoxRequestStatusBarUnlockedCfgComment2"),0,17+c,true)
}else{if(Saving.loadBool("statusBarUnlockedHealthBar")==false){this.renderArea.addAsciiRealButton(Database.getText("candyBoxRequestStatusBarUnlockedHealthBar"),0,11+c,"candyBoxRequestStatusBarUnlockedHealthBarButton",Database.getTranslatedText("candyBoxRequestStatusBarUnlockedHealthBar"),true);
this.renderArea.addLinkCall(".candyBoxRequestStatusBarUnlockedHealthBarButton",new CallbackCollection(this.requestStatusBarUnlockedHealthBar.bind(this)));
this.renderArea.drawString(Database.getText("candyBoxRequestStatusBarUnlockedSaveComment"),0,14+c);
this.renderArea.drawString(Database.getTranslatedText("candyBoxRequestStatusBarUnlockedSaveComment"),0,15+c,true)
}else{if(Saving.loadBool("statusBarUnlockedMap")==false){this.renderArea.addAsciiRealButton(Database.getText("candyBoxRequestStatusBarUnlockedMap"),0,11+c,"candyBoxRequestStatusBarUnlockedMapButton",Database.getTranslatedText("candyBoxRequestStatusBarUnlockedMap"),true);
this.renderArea.addLinkCall(".candyBoxRequestStatusBarUnlockedMapButton",new CallbackCollection(this.requestStatusBarUnlockedMap.bind(this)));
this.renderArea.drawString(Database.getText("candyBoxRequestStatusBarUnlockedHealthBarComment"),0,14+c);
this.renderArea.drawString(Database.getTranslatedText("candyBoxRequestStatusBarUnlockedHealthBarComment"),0,15+c,true)
}}}}}}};a.prototype.getRenderArea=function(){return this.renderArea};a.prototype.checkCandies=function(){if(this.eatButtonShown==false){if(this.getGame().getCandies().getMax()>0){this.eatButtonShown=true;
this.update();this.getGame().updatePlace()}}if(this.throwButtonShown==false){if(this.getGame().getCandies().getMax()>=10){this.throwButtonShown=true;
this.update();this.getGame().updatePlace()}}if(this.requestFeatureButtonShown==false){if(this.getGame().getCandies().getMax()>=30&&Saving.loadBool("statusBarUnlockedMap")==false){this.requestFeatureButtonShown=true;
this.update();this.getGame().updatePlace()}}};a.prototype.clickedEatCandiesButton=function(){if(this.getGame().getCandies().getCurrent()>=1){this.getGame().getCandies().transferTo(this.getGame().getCandiesEaten());
this.update();this.getGame().updatePlace()}};a.prototype.clickedThrowCandiesButton=function(){if(this.getGame().getCandies().getCurrent()>=10){this.getGame().getCandies().transferTo(this.getGame().getCandiesThrown(),10);
this.update();this.getGame().updatePlace()}};a.prototype.openBox=function(){Saving.saveBool("candyBoxBoxOpened",true);
Saving.saveBool("statusBarUnlockedInsideYourBox",true);Saving.saveBool("statusBarUnlockedTheComputer",true);
Saving.saveBool("statusBarUnlockedTheArena",true);this.getGame().updateStatusBar(true);
this.update();this.getGame().updatePlace()};a.prototype.requestStatusBarUnlocked=function(){if(this.getGame().getCandies().getCurrent()>=30){this.getGame().getCandies().transferTo(this.getGame().getCandiesUsedToRequestFeatures(),30);
Saving.saveBool("statusBarUnlocked",true);this.getGame().updateStatusBar(true);this.update();
this.getGame().updatePlace()}};a.prototype.requestStatusBarUnlockedCfg=function(){if(this.getGame().getCandies().getCurrent()>=5){this.getGame().getCandies().transferTo(this.getGame().getCandiesUsedToRequestFeatures(),5);
Saving.saveBool("statusBarUnlockedCfg",true);this.getGame().updateStatusBar(true);
this.update();this.getGame().updatePlace()}};a.prototype.requestStatusBarUnlockedHealthBar=function(){if(this.getGame().getCandies().getCurrent()>=5){this.getGame().getCandies().transferTo(this.getGame().getCandiesUsedToRequestFeatures(),5);
Saving.saveBool("statusBarUnlockedHealthBar",true);this.getGame().updateStatusBar(true);
this.update();this.getGame().updatePlace()}};a.prototype.requestStatusBarUnlockedMap=function(){if(this.getGame().getCandies().getCurrent()>=10){this.getGame().getCandies().transferTo(this.getGame().getCandiesUsedToRequestFeatures(),10);
Saving.saveBool("statusBarUnlockedMap",true);this.getGame().updateStatusBar(true);
this.update();this.getGame().updatePlace()}};a.prototype.requestStatusBarUnlockedSave=function(){if(this.getGame().getCandies().getCurrent()>=5){this.getGame().getCandies().transferTo(this.getGame().getCandiesUsedToRequestFeatures(),5);
Saving.saveBool("statusBarUnlockedSave",true);this.getGame().updateStatusBar(true);
this.update();this.getGame().updatePlace()}};return a})(Place);var CandyMerchantItem=(function(){function a(c,i,e,h,d,g,f,b){this.game=c;
this.savingBool=i;this.asciiName=e;this.asciiPosition=h;this.merchantSpeech=d;this.price=g;
this.buttonText=f;this.buttonName=b}a.prototype.buy=function(){Saving.saveBool(this.savingBool,true)
};a.prototype.canBeBought=function(){if(this.isBought()){return false}return true
};a.prototype.canBeClicked=function(){if(this.isBought()){return false}return true
};a.prototype.canBeShown=function(){if(this.isBought()){return false}return true};
a.prototype.isBought=function(){return Saving.loadBool(this.savingBool)};a.prototype.getAsciiName=function(){return this.asciiName
};a.prototype.getAsciiPosition=function(){return this.asciiPosition};a.prototype.getButtonName=function(){return this.buttonName
};a.prototype.getButtonText=function(){return this.buttonText};a.prototype.getGame=function(){return this.game
};a.prototype.getMerchantSpeech=function(){return this.merchantSpeech};a.prototype.getPrice=function(){return this.price
};return a})();var CandyMerchantItem_ChocolateBar=(function(a){__extends(b,a);function b(){a.apply(this,arguments)
}b.prototype.buy=function(){a.prototype.buy.call(this);this.getGame().getChocolateBars().add(1)
};return b})(CandyMerchantItem);var CandyMerchantItem_LeatherBoots=(function(b){__extends(a,b);
function a(){b.apply(this,arguments)}a.prototype.canBeShown=function(){if(b.prototype.canBeShown.call(this)==false){return false
}if(Saving.loadBool("statusBarUnlockedInventory")==false){return false}return true
};return a})(CandyMerchantItem);var CandyMerchantItem_LeatherGloves=(function(b){__extends(a,b);
function a(){b.apply(this,arguments)}a.prototype.canBeShown=function(){if(b.prototype.canBeShown.call(this)==false){return false
}if(Saving.loadBool("statusBarUnlockedInventory")==false){return false}return true
};return a})(CandyMerchantItem);var CandyMerchantItem_Lollipop=(function(b){__extends(a,b);
function a(){b.apply(this,arguments)}a.prototype.buy=function(){b.prototype.buy.call(this);
this.getGame().getLollipops().add(1)};return a})(CandyMerchantItem);var CandyMerchantItem_MerchantHat=(function(a){__extends(b,a);
function b(){a.apply(this,arguments)}b.prototype.buy=function(){a.prototype.buy.call(this);
this.getGame().gainItem("eqItemHatMerchantHat")};b.prototype.canBeClicked=function(){if(a.prototype.canBeClicked.call(this)==false){return false
}if(Saving.loadBool("statusBarUnlockedInventory")==false){return false}return true
};return b})(CandyMerchantItem);var CandyMerchantItem_TimeRing=(function(b){__extends(a,b);
function a(){b.apply(this,arguments)}a.prototype.buy=function(){b.prototype.buy.call(this);
this.getGame().gainItem("gridItemPossessedTimeRing")};a.prototype.canBeShown=function(){if(b.prototype.canBeShown.call(this)==false){return false
}if(Saving.loadBool("statusBarUnlockedInventory")==false){return false}return true
};return a})(CandyMerchantItem);var CastleRoom=(function(a){__extends(b,a);function b(c){a.call(this,c)
}b.prototype.addBackToTheCastleButton=function(d,c){this.addBackToButton(d,new CallbackCollection(this.getGame().goToCastle.bind(this.getGame())),Database.getText("buttonBackToTheCastle"),Database.getTranslatedText("buttonBackToTheCastle"),c)
};return b})(Place);Saving.registerBool("castleBigRoomHovenHappy",false);var CastleBigRoom=(function(a){__extends(b,a);
function b(c){a.call(this,c);this.renderArea=new RenderArea();this.hovenWaiting=true;
if(Saving.loadBool("castleBigRoomHovenHappy")==false){this.currentSpeech="castleBigRoomHovenSpeechSad"
}else{this.currentSpeech="castleBigRoomHovenSpeechHappy"}this.renderArea.resize(160,30);
this.update()}b.prototype.getRenderArea=function(){return this.renderArea};b.prototype.update=function(){this.renderArea.resetAllButSize();
this.addBackToTheCastleButton(this.renderArea,"castleBigRoomBackToTheCastleButton");
this.drawBackground(0,3);this.drawSpeech(83,10);if(this.hovenWaiting){this.renderArea.addAsciiRealButton(Database.getText("castleBigRoomHovenLetHovenTakeButton"),83,19,"castleBigRoomLetHovenTakeButton",Database.getTranslatedText("castleBigRoomHovenLetHovenTakeButton"),true);
this.renderArea.addLinkCall(".castleBigRoomLetHovenTakeButton",new CallbackCollection(this.letHovenTake.bind(this)))
}else{this.renderArea.addAsciiRealButton(Database.getText("castleBigRoomHovenThanks"),83,19,"castleBigRoomThanksButton",Database.getTranslatedText("castleBigRoomHovenThanks"),true);
this.renderArea.addLinkCall(".castleBigRoomThanksButton",new CallbackCollection(this.thanksHoven.bind(this)))
}};b.prototype.drawBackground=function(c,d){this.renderArea.drawArray(Database.getAscii("places/castle/bigRoom/background"),c,d);
if(Saving.loadBool("castleBigRoomHovenHappy")){this.renderArea.drawString("^       ^",c+61,d+9);
this.renderArea.drawString("         ",c+61,d+10);this.renderArea.drawString("  '-.-'  ",c+61,d+11)
}};b.prototype.drawSpeech=function(c,d){this.renderArea.drawSpeech(Database.getText(this.currentSpeech),d,c,c+30,"CastleBigRoomHovenSpeech",Database.getTranslatedText(this.currentSpeech))
};b.prototype.letHovenTake=function(){if(this.getGame().getCandies().getCurrent()>=100&&this.getGame().getChocolateBars().getCurrent()>=1){this.getGame().getCandies().add(-100);
this.getGame().getChocolateBars().add(-1);Saving.saveBool("castleBigRoomHovenHappy",true);
this.hovenWaiting=false;this.currentSpeech="castleBigRoomHovenSpeechMadePainAuChocolat";
this.getGame().getPainsAuChocolat().add(1)}else{if(Saving.loadBool("castleBigRoomHovenHappy")==false){this.currentSpeech="castleBigRoomHovenNotEnough"
}else{this.currentSpeech="castleBigRoomHovenSpeechHappyNotEnough"}}this.update();
this.getGame().updatePlace()};b.prototype.thanksHoven=function(){this.hovenWaiting=true;
this.currentSpeech="castleBigRoomHovenSpeechHappy";this.update();this.getGame().updatePlace()
};return b})(CastleRoom);var CastleEntrance=(function(b){__extends(a,b);function a(c){b.call(this,c);
this.lastKnightAdded=null;this.resizeQuest(149,30);this.addPlayerCollisionBoxes(true,false,true,true);
this.getGame().getPlayer().loadCandyBoxCharacter(this);this.getGame().getPlayer().setGlobalPosition(new Pos(0,25));
this.configPlayerOrClone(this.getGame().getPlayer());this.addEntity(this.getGame().getPlayer());
this.addWalls();this.addKnight(Random.between(80,120));this.getGame().getQuestLog().addMessage(new QuestLogMessage("You're trying to cross the castle's entrance."))
}a.prototype.castPlayerTeleport=function(){b.prototype.castPlayerTeleport.call(this,new Pos(0,0),new Pos(60,20))
};a.prototype.configPlayerOrClone=function(c){c.setQuestEntityMovement(new QuestEntityMovement(new Pos(1,0)));
c.getQuestEntityMovement().setGravity(true);c.getQuestEntityMovement().setWormsLike(true)
};a.prototype.endQuest=function(c){if(c){this.getGame().getQuestLog().addMessage(new QuestLogMessage("You crossed the castle's entrance! You can now enter the castle."));
Saving.saveBool("mainMapDoneCastleEntrance",true)}else{this.getGame().getQuestLog().addMessage(new QuestLogMessage("You died trying to cross the castle's entrance."))
}b.prototype.endQuest.call(this,c)};a.prototype.update=function(){if(this.getQuestEnded()==false){if(this.thePlayerWon()){this.endQuest(true);
return}if(this.getGame().getPlayer().shouldDie()){this.endQuest(false);return}this.handleKnights();
this.updateEntities()}this.preDraw();this.getRenderArea().drawArray(Database.getAscii("places/quests/castleEntrance/background"),this.getRealQuestPosition().x,this.getRealQuestPosition().y);
this.drawEntities();this.getRenderArea().drawArray(Database.getAscii("places/quests/castleEntrance/front"),this.getRealQuestPosition().x+104,this.getRealQuestPosition().y);
this.drawAroundQuest();if(this.getQuestEnded()==false){this.addExitQuestButton(new CallbackCollection(this.getGame().goToMainMap.bind(this.getGame())),"buttonExitQuestNoKeeping")
}else{if(this.getQuestEndedAndWeWon()==false){this.addExitQuestButton(new CallbackCollection(this.getGame().goToMainMap.bind(this.getGame())),"buttonExitQuestNoKeepingBecauseLose")
}else{this.addExitQuestButton(new CallbackCollection(this.getGame().goToMainMap.bind(this.getGame())),"buttonExitQuestKeeping")
}}this.postDraw()};a.prototype.addKnight=function(c){if(c===void 0){c=149}var d=new Knight(this,new Pos(c,20));
d.setHealthBar(new QuestEntityHealthBar(d,new Pos(15,1)));if(this.addEntity(d)){this.lastKnightAdded=d
}};a.prototype.addWalls=function(){var c=new Wall(this,new Pos(0,0));c.addBox(new Pos(0,26),new Pos(200,4));
c.addBox(new Pos(104,6),new Pos(15,15));c.addBox(new Pos(104,5),new Pos(16,1));c.addBox(new Pos(104,4),new Pos(17,1));
c.addBox(new Pos(106,3),new Pos(16,1));c.addBox(new Pos(107,2),new Pos(6,1));c.addBox(new Pos(116,2),new Pos(7,1));
this.addEntity(c)};a.prototype.handleKnights=function(){if(this.lastKnightAdded==null||(this.lastKnightAdded!=null&&this.lastKnightAdded.getHp()/this.lastKnightAdded.getMaxHp()<0.4)||(this.lastKnightAdded!=null&&this.lastKnightAdded.getGlobalPosition().x+1<this.getGame().getPlayer().getGlobalPosition().x)){this.addKnight()
}};a.prototype.thePlayerWon=function(){if(this.getGame().getPlayer().getGlobalPosition().x>=149){return true
}return false};return a})(Quest);var CastleRoom1=(function(b){__extends(a,b);function a(c){b.call(this,c);
this.resizeQuest(100,30);this.addPlayerCollisionBoxes(true,true,true,true);this.getGame().getPlayer().loadCandyBoxCharacter(this);
this.getGame().getPlayer().setGlobalPosition(new Pos(97,10));this.configPlayerOrClone(this.getGame().getPlayer());
this.addEntity(this.getGame().getPlayer());this.addWalls();this.addEntity(new Spikes(this,new Pos(7,23),88));
this.getGame().getQuestLog().addMessage(new QuestLogMessage("You enter one of the castle's room. Damn, it seems to be full of spikes!"))
}a.prototype.castPlayerTeleport=function(){b.prototype.castPlayerTeleport.call(this,new Pos(96,6),new Pos(2,3))
};a.prototype.configPlayerOrClone=function(c){c.setQuestEntityMovement(new QuestEntityMovement(new Pos(-1,0)));
c.getQuestEntityMovement().setGravity(true);c.getQuestEntityMovement().setWormsLike(true)
};a.prototype.endQuest=function(c){if(c){this.getGame().getQuestLog().addMessage(new QuestLogMessage("You exit the room."))
}b.prototype.endQuest.call(this,c)};a.prototype.update=function(){if(this.getQuestEnded()==false){if(this.getGame().getPlayer().shouldDie()){this.endQuest(true);
return}this.updateEntities()}this.preDraw();this.getRenderArea().drawArray(Database.getAscii("places/quests/castle/room1/background"),this.getRealQuestPosition().x,this.getRealQuestPosition().y);
this.drawEntities();this.drawAroundQuest();this.addExitQuestButton(new CallbackCollection(this.endQuest.bind(this,true),this.getGame().goToCastle.bind(this.getGame())),"buttonExitQuestKeeping");
this.postDraw()};a.prototype.addWalls=function(){var c=new Wall(this,new Pos(0,0));
c.addBox(new Pos(0,0),new Pos(100,3));c.addBox(new Pos(0,3),new Pos(7,25));c.addBox(new Pos(7,24),new Pos(93,4));
c.addBox(new Pos(95,3),new Pos(5,5));c.addBox(new Pos(95,11),new Pos(5,16));this.addEntity(c)
};return a})(Quest);Saving.registerBool("castleRoom2LitFire",false);Saving.registerBool("castleRoom2TookObject",false);
var CastleRoom2=(function(b){__extends(a,b);function a(c){b.call(this,c);this.renderArea=new RenderArea();
this.smokes=[];if(Saving.loadBool("castleRoom2LitFire")==true){this.addSmokes()}this.renderArea.resize(100,30);
this.update()}a.prototype.getRenderArea=function(){return this.renderArea};a.prototype.willBeDisplayed=function(){this.getGame().getOneSecondCallbackCollection().addCallback(this.actionSmokes.bind(this))
};a.prototype.update=function(){this.renderArea.resetAllButSize();this.addBackToTheCastleButton(this.renderArea,"castleRoom2BackToTheCastleButton");
if(Saving.loadBool("castleRoom2LitFire")==false){this.drawDark(0,3,100,27);this.drawFireButton(42,20)
}else{this.drawFire(42,20);if(Saving.loadBool("castleRoom2TookObject")==false){this.drawObject(21,12)
}}};a.prototype.actionSmokes=function(){if(this.smokes.length>0){for(var c=0;c<this.smokes.length;
c++){this.smokes[c].move()}this.update();this.getGame().updatePlace()}};a.prototype.addSmokes=function(){this.smokes.push(new Smoke(45,Random.between(20,21),11,Random.between(3,7),0,5));
this.smokes.push(new Smoke(45,Random.between(20,21),11,Random.between(2,6),0,5));
this.smokes.push(new Smoke(45,Random.between(20,21),11,Random.between(2,6),0,5));
this.smokes.push(new Smoke(45,Random.between(20,21),11,Random.between(2,6),0,5));
this.smokes.push(new Smoke(45,Random.between(20,21),11,Random.between(2,6),0,5))};
a.prototype.drawDark=function(d,g,f,c){for(var e=g;e<g+c;e++){this.renderArea.addBackgroundColor(d,d+f,e,new Color(ColorType.CASTLE_DARK_ROOM,true))
}};a.prototype.drawFire=function(c,e){this.renderArea.drawArray(Database.getAscii("places/castle/room2/fire"),c,e);
for(var d=0;d<this.smokes.length;d++){this.smokes[d].draw(this.renderArea)}};a.prototype.drawFireButton=function(c,d){this.renderArea.addMultipleAsciiButtons("castleRoom2LightFireButton",c,c+16,d,c,c+16,d+1,c,c+16,d+2,c,c+16,d+3,c,c+16,d+4,c,c+16,d+5);
this.renderArea.addLinkCall(".castleRoom2LightFireButton",new CallbackCollection(this.lightFire.bind(this)))
};a.prototype.drawObject=function(c,d){this.renderArea.drawArray(Database.getAscii("places/castle/room2/pitchfork"),c,d);
this.renderArea.addMultipleAsciiButtons("castleRoom2TakeObjectButton",c+6,c+12,d,c+5,c+11,d+1,c+4,c+10,d+2,c+3,c+9,d+3,c+2,c+8,d+4,c+1,c+7,d+5,c+1,c+5,d+6,c,c+4,d+7);
this.renderArea.addLinkCall(".castleRoom2TakeObjectButton",new CallbackCollection(this.takeObject.bind(this)))
};a.prototype.lightFire=function(){Saving.saveBool("castleRoom2LitFire",true);this.addSmokes();
this.update();this.getGame().updatePlace()};a.prototype.takeObject=function(){Saving.saveBool("castleRoom2TookObject",true);
this.getGame().gainItem("gridItemPossessedPitchfork");this.getGame().calcLollipopFarmProduction();
this.update();this.getGame().updatePlace()};return a})(CastleRoom);var CastleRoom3=(function(b){__extends(a,b);
function a(c){b.call(this,c);this.resizeQuest(100,30);this.addPlayerCollisionBoxes(true,true,true,true);
this.getGame().getPlayer().loadCandyBoxCharacter(this);this.getGame().getPlayer().setGlobalPosition(new Pos(97,23));
this.configPlayerOrClone(this.getGame().getPlayer());this.addEntity(this.getGame().getPlayer());
this.addWalls();this.addEggs();this.addMonster();this.addChest();this.getGame().getQuestLog().addMessage(new QuestLogMessage("You enter one of the castle's room."))
}a.prototype.castPlayerTeleport=function(){b.prototype.castPlayerTeleport.call(this,new Pos(96,19),new Pos(2,3))
};a.prototype.configPlayerOrClone=function(c){c.setQuestEntityMovement(new QuestEntityMovement(new Pos(-1,0)));
c.getQuestEntityMovement().setGravity(true);c.getQuestEntityMovement().setWormsLike(true)
};a.prototype.endQuest=function(c){if(c){this.getGame().getQuestLog().addMessage(new QuestLogMessage("You exit the room."))
}b.prototype.endQuest.call(this,c)};a.prototype.update=function(){if(this.getQuestEnded()==false){if(this.getGame().getPlayer().shouldDie()){this.endQuest(true);
return}this.updateEntities()}this.preDraw();this.getRenderArea().drawArray(Database.getAscii("places/quests/castle/room3/background"),this.getRealQuestPosition().x,this.getRealQuestPosition().y);
this.drawEntities();this.drawAroundQuest();this.addExitQuestButton(new CallbackCollection(this.endQuest.bind(this,true),this.getGame().goToCastle.bind(this.getGame())),"buttonExitQuestKeeping");
this.postDraw()};a.prototype.addChest=function(){this.addEntity(new Chest(this,new Pos(7,23),true,new CallbackCollection(this.openChest.bind(this)),Saving.loadBool("gridItemPossessedL")))
};a.prototype.addEggs=function(){this.addEntity(new Egg(this,new Pos(16,23),new CallbackCollection(this.anEggDiedCallback.bind(this))));
this.addEntity(new Egg(this,new Pos(18,23),new CallbackCollection(this.anEggDiedCallback.bind(this))));
this.addEntity(new Egg(this,new Pos(23,23),new CallbackCollection(this.anEggDiedCallback.bind(this))));
this.addEntity(new Egg(this,new Pos(25,23),new CallbackCollection(this.anEggDiedCallback.bind(this))));
this.addEntity(new Egg(this,new Pos(28,23),new CallbackCollection(this.anEggDiedCallback.bind(this))));
this.addEntity(new Egg(this,new Pos(30,23),new CallbackCollection(this.anEggDiedCallback.bind(this))));
this.addEntity(new Egg(this,new Pos(38,23),new CallbackCollection(this.anEggDiedCallback.bind(this))));
this.addEntity(new Egg(this,new Pos(41,23),new CallbackCollection(this.anEggDiedCallback.bind(this))));
this.addEntity(new Egg(this,new Pos(48,23),new CallbackCollection(this.anEggDiedCallback.bind(this))));
this.addEntity(new Egg(this,new Pos(52,23),new CallbackCollection(this.anEggDiedCallback.bind(this))));
this.addEntity(new Egg(this,new Pos(54,23),new CallbackCollection(this.anEggDiedCallback.bind(this))));
this.addEntity(new Egg(this,new Pos(57,23),new CallbackCollection(this.anEggDiedCallback.bind(this))));
this.addEntity(new Egg(this,new Pos(63,23),new CallbackCollection(this.anEggDiedCallback.bind(this))));
this.addEntity(new Egg(this,new Pos(68,23),new CallbackCollection(this.anEggDiedCallback.bind(this))));
this.addEntity(new Egg(this,new Pos(72,23),new CallbackCollection(this.anEggDiedCallback.bind(this))));
this.addEntity(new Egg(this,new Pos(78,23),new CallbackCollection(this.anEggDiedCallback.bind(this))))
};a.prototype.addMonster=function(){this.monster=new Monster(this,new Pos(67,3));
this.addEntity(this.monster)};a.prototype.addWalls=function(){var c=new Wall(this,new Pos(0,0));
c.addBox(new Pos(0,0),new Pos(100,3));c.addBox(new Pos(0,3),new Pos(7,25));c.addBox(new Pos(7,24),new Pos(93,4));
c.addBox(new Pos(95,3),new Pos(5,18));this.addEntity(c)};a.prototype.anEggDiedCallback=function(){this.monster.eggDestroyed()
};a.prototype.openChest=function(){this.foundGridOrEqItem(new QuestItemFound(this,"gridItemPossessedL","You opened a chest and found a strange stone.","You gain a strange stone."))
};return a})(Quest);Saving.registerBool("castleTowerFirstVisitDone",false);Saving.registerBool("castleTowerPStoneDone",false);
Saving.registerBool("castleTowerLStoneDone",false);Saving.registerBool("castleTowerAStoneDone",false);
Saving.registerBool("castleTowerYStoneDone",false);Saving.registerBool("castleTowerTookTalkingCandy",false);
var CastleTower=(function(b){__extends(a,b);function a(c){b.call(this,c);this.renderArea=new RenderArea();
this.intervalID=null;this.cutSceneMaxTimer=72;if(Saving.loadBool("castleTowerFirstVisitDone")==false){Saving.saveBool("castleTowerFirstVisitDone",true);
this.cutSceneTimer=0;this.intervalID=setInterval(this.actionInterval.bind(this),100)
}else{this.cutSceneTimer=this.cutSceneMaxTimer}this.renderArea.resize(100,38);this.update()
}a.prototype.getRenderArea=function(){return this.renderArea};a.prototype.willStopBeingDisplayed=function(){if(this.intervalID!=null){clearInterval(this.intervalID)
}};a.prototype.actionInterval=function(){if(this.cutSceneTimer<this.cutSceneMaxTimer){this.cutSceneTimer+=1;
this.update();this.getGame().updatePlace()}};a.prototype.clickedOnStone=function(c){Saving.saveBool(c,true);
this.update();this.getGame().updatePlace()};a.prototype.drawBackground=function(){var c=(this.cutSceneMaxTimer-this.cutSceneTimer);
if(c>60){c=60}this.renderArea.drawArray(Database.getAscii("places/castle/tower/castleTower"),5,3-c)
};a.prototype.drawTalkingCandy=function(){if(Saving.loadBool("castleTowerPStoneDone")&&Saving.loadBool("castleTowerLStoneDone")&&Saving.loadBool("castleTowerAStoneDone")&&Saving.loadBool("castleTowerYStoneDone")&&Saving.loadBool("castleTowerTookTalkingCandy")==false){this.renderArea.drawArray(Database.getAscii("places/castle/tower/talkingCandy"),47,22);
this.renderArea.addMultipleAsciiButtons("castleTowerTalkingCandyButton",47,50,22,47,50,23);
this.renderArea.addLinkCall(".castleTowerTalkingCandyButton",new CallbackCollection(this.takeTalkingCandy.bind(this)))
}};a.prototype.drawStone=function(e,d,c,f){if(Saving.loadBool(e)==true&&Saving.loadBool(d)==false){this.renderArea.addMultipleAsciiButtons("castleTower"+e+"Button",f.x+3,f.x+8,f.y,f.x+2,f.x+9,f.y+1,f.x+1,f.x+10,f.y+2,f.x+2,f.x+9,f.y+3,f.x+3,f.x+8,f.y+4);
this.renderArea.addLinkCall(".castleTower"+e+"Button",new CallbackCollection(this.clickedOnStone.bind(this,d)))
}else{if(Saving.loadBool(e)==true&&Saving.loadBool(d)==true){this.renderArea.drawArray(Database.getAscii(c),f.x,f.y-1)
}}};a.prototype.drawStones=function(){var c=(this.cutSceneMaxTimer-this.cutSceneTimer);
if(c>60){c=60}this.drawStone("gridItemPossessedP","castleTowerPStoneDone","gridItems/p",new Pos(25,26-c));
this.drawStone("gridItemPossessedL","castleTowerLStoneDone","gridItems/l",new Pos(38,26-c));
this.drawStone("gridItemPossessedA","castleTowerAStoneDone","gridItems/a",new Pos(51,26-c));
this.drawStone("gridItemPossessedY","castleTowerYStoneDone","gridItems/y",new Pos(64,26-c))
};a.prototype.takeTalkingCandy=function(){Saving.saveBool("castleTowerTookTalkingCandy",true);
this.getGame().gainItem("gridItemPossessedTalkingCandy");this.update();this.getGame().updatePlace()
};a.prototype.update=function(){this.renderArea.resetAllButSize();this.addBackToTheCastleButton(this.renderArea,"castleTowerBackToTheCastleButton");
this.drawBackground();this.drawStones();this.drawTalkingCandy()};return a})(CastleRoom);
Saving.registerBool("castleKilledNougatMonster",false);var Castle=(function(a){__extends(b,a);
function b(c){a.call(this,c);this.renderArea=new RenderArea();this.renderArea.resizeFromArray(Database.getAscii("places/castle/map"),0,5);
this.update()}b.prototype.getRenderArea=function(){return this.renderArea};b.prototype.drawBigRoom=function(c,d){this.renderArea.addMultipleAsciiButtons("castleBigRoomButton",c,c+1,d,c,c+1,d+1);
this.renderArea.addFullComment(c-9,d,Database.getText("castleBigRoomComment"),Database.getTranslatedText("castleBigRoomComment"),"castleBigRoomComment");
this.renderArea.addLinkOver(".castleBigRoomButton, .castleBigRoomComment",".castleBigRoomComment");
this.renderArea.addLinkCall(".castleBigRoomButton",new CallbackCollection(this.goToBigRoom.bind(this)))
};b.prototype.drawCastleEntrance=function(c,d){this.renderArea.addMultipleAsciiNinjaButtons("castleCastleEntranceButton",c,c+2,d);
this.renderArea.addFullComment(c+1,d+1,Database.getText("castleCastleEntranceComment"),Database.getTranslatedText("castleCastleEntranceComment"),"castleCastleEntranceComment");
this.renderArea.addLinkOver(".castleCastleEntranceButton, .castleCastleEntranceComment",".castleCastleEntranceComment")
};b.prototype.drawNougatMonster=function(c,d){this.renderArea.addMultipleAsciiButtons("castleNougatMonsterButton",c+1,c+8,d,c,c+10,d+1,c,c+10,d+2,c+1,c+8,d+3);
this.renderArea.addFullComment(c+5,d-2,Database.getText("castleNougatMonsterComment"),Database.getTranslatedText("castleNougatMonsterComment"),"castleNougatMonsterComment");
this.renderArea.addLinkOver(".castleNougatMonsterButton, .castleNougatMonsterComment",".castleNougatMonsterComment");
this.renderArea.addLinkCall(".castleNougatMonsterButton",new CallbackCollection(this.goToNougatMonster.bind(this)))
};b.prototype.drawRoom1=function(c,d){this.renderArea.addMultipleAsciiButtons("castleRoom1Button",c,c+1,d,c,c+1,d+1);
this.renderArea.addFullComment(c-6,d,Database.getText("castleARoomComment"),Database.getTranslatedText("castleARoomComment"),"castleRoom1Comment");
this.renderArea.addLinkOver(".castleRoom1Button, .castleRoom1Comment",".castleRoom1Comment");
this.renderArea.addLinkCall(".castleRoom1Button, .castleRoom1Comment",new CallbackCollection(this.goToRoom1.bind(this)))
};b.prototype.drawRoom2=function(c,d){this.renderArea.addMultipleAsciiButtons("castleRoom2Button",c,c+1,d,c,c+1,d+1);
this.renderArea.addFullComment(c-6,d,Database.getText("castleADarkRoomComment"),Database.getTranslatedText("castleADarkRoomComment"),"castleRoom2Comment");
this.renderArea.addLinkOver(".castleRoom2Button, .castleRoom2Comment",".castleRoom2Comment");
this.renderArea.addLinkCall(".castleRoom2Button, .castleRoom2Comment",new CallbackCollection(this.goToRoom2.bind(this)))
};b.prototype.drawRoom3=function(c,d){this.renderArea.addMultipleAsciiButtons("castleRoom3Button",c,c+1,d,c,c+1,d+1);
this.renderArea.addFullComment(c-6,d,Database.getText("castleARoomComment"),Database.getTranslatedText("castleARoomComment"),"castleRoom3Comment");
this.renderArea.addLinkOver(".castleRoom3Button, .castleRoom3Comment",".castleRoom3Comment");
this.renderArea.addLinkCall(".castleRoom3Button, .castleRoom3Comment",new CallbackCollection(this.goToRoom3.bind(this)))
};b.prototype.drawStairs=function(c,d){this.renderArea.addMultipleAsciiButtons("castleStairsButton",c,c+4,d,c,c+4,d+1,c,c+4,d+2,c,c+4,d+3,c,c+4,d+4);
this.renderArea.addFullComment(c+10,d+2,Database.getText("castleStairsComment"),Database.getTranslatedText("castleStairsComment"),"castleStairsComment");
this.renderArea.addLinkOver(".castleStairsButton, .castleStairsComment",".castleStairsComment");
this.renderArea.addLinkCall(".castleStairsButton",new CallbackCollection(this.goToStairs.bind(this)))
};b.prototype.drawTowerEntrance=function(c,d){this.renderArea.addMultipleAsciiButtons("castleTowerEntranceButton",c,c+1,d,c,c+1,d+1);
this.renderArea.addFullComment(c+12,d,Database.getText("castleTowerEntranceComment"),Database.getTranslatedText("castleTowerEntranceComment"),"castleTowerEntranceComment");
this.renderArea.addLinkOver(".castleTowerEntranceButton, .castleTowerEntranceComment",".castleTowerEntranceComment");
this.renderArea.addLinkCall(".castleTowerEntranceButton",new CallbackCollection(this.goToTowerEntrance.bind(this)))
};b.prototype.goToBigRoom=function(){this.getGame().setPlace(new CastleBigRoom(this.getGame()))
};b.prototype.goToNougatMonster=function(){this.getGame().setPlace(new GiantNougatMonsterQuest(this.getGame()))
};b.prototype.goToRoom1=function(){this.getGame().setPlace(new CastleRoom1(this.getGame()))
};b.prototype.goToRoom2=function(){this.getGame().setPlace(new CastleRoom2(this.getGame()))
};b.prototype.goToRoom3=function(){this.getGame().setPlace(new CastleRoom3(this.getGame()))
};b.prototype.goToStairs=function(){this.getGame().setPlace(new Dragon(this.getGame()))
};b.prototype.goToTowerEntrance=function(){this.getGame().setPlace(new CastleTower(this.getGame()))
};b.prototype.update=function(){this.renderArea.resetAllButSize();this.addBackToMainMapButton(this.renderArea,"castleBackToTheMapButton");
this.renderArea.drawArray(Database.getAscii("places/castle/map"),0,3);this.drawCastleEntrance(43,36);
this.drawBigRoom(57,19);this.drawRoom1(15,27);this.drawRoom2(15,21);this.drawRoom3(15,15);
this.drawNougatMonster(68,15);this.drawStairs(32,3);if(Saving.loadBool("castleKilledNougatMonster")){this.drawTowerEntrance(84,16)
}};return b})(Place);var CauldronActionLogEntry=(function(){function a(c,d,b,e){this.action=c;
this.time=d;this.candies=b;this.lollipops=e}a.prototype.getAction=function(){return this.action
};a.prototype.getCandies=function(){return this.candies};a.prototype.getLollipops=function(){return this.lollipops
};a.prototype.getTime=function(){return this.time};return a})();var CauldronAction;
(function(a){a[a.NOTHING=0]="NOTHING";a[a.MIXING=1]="MIXING";a[a.BOILING=2]="BOILING"
})(CauldronAction||(CauldronAction={}));var CauldronFlame=(function(){function a(c,b){this.pos=c;
this.character=b}a.prototype.draw=function(c,b,d){c.drawString(this.character,b+this.pos.x,d+this.pos.y)
};return a})();Saving.registerNumber("cauldronBookCurrentPage",0);var Cauldron=(function(b){__extends(a,b);
function a(c){b.call(this,c);this.renderArea=new RenderArea();this.maxPage=10;this.candiesInput="";
this.lollipopsInput="";this.candiesInputComment=null;this.lollipopsInputComment=null;
this.currentAction=CauldronAction.NOTHING;this.timerTime=0;this.actionLog=[null,null,null,null,null];
this.potionsComment=null;this.flames=[];this.timerIntervalID=setInterval(this.actionInterval.bind(this),1000);
this.renderArea.resize(100,57);this.update(true)}a.prototype.getRenderArea=function(){return this.renderArea
};a.prototype.willBeDisplayed=function(){this.getGame().addHotkey(new Hotkey("a",new CallbackCollection(this.putInCauldron.bind(this))));
this.getGame().addHotkey(new Hotkey("m",new CallbackCollection(this.changeAction.bind(this,CauldronAction.MIXING))));
this.getGame().addHotkey(new Hotkey("b",new CallbackCollection(this.changeAction.bind(this,CauldronAction.BOILING))));
this.getGame().addHotkey(new Hotkey("s",new CallbackCollection(this.changeAction.bind(this,CauldronAction.NOTHING))));
this.getGame().addHotkey(new Hotkey("p",new CallbackCollection(this.putIntoBottles.bind(this))));
this.getGame().addHotkey(new Hotkey("left",new CallbackCollection(this.previousPage.bind(this))));
this.getGame().addHotkey(new Hotkey("right",new CallbackCollection(this.nextPage.bind(this))))
};a.prototype.willStopBeingDisplayed=function(){clearInterval(this.timerIntervalID)
};a.prototype.actionInterval=function(){this.timerTime+=1;if(this.currentAction==CauldronAction.BOILING){this.updateFlamesArray()
}if(this.currentAction!=CauldronAction.NOTHING){this.update();this.getGame().updatePlace()
}};a.prototype.changeAction=function(d){if(this.currentAction!=d){if(this.currentAction!=CauldronAction.NOTHING){for(var c=this.actionLog.length-1;
c>0;c--){this.actionLog[c]=this.actionLog[c-1]}this.actionLog[0]=new CauldronActionLogEntry(this.currentAction,this.timerTime,this.getGame().getCandiesInCauldron().getCurrent(),this.getGame().getLollipopsInCauldron().getCurrent())
}this.currentAction=d;this.timerTime=0;clearInterval(this.timerIntervalID);this.timerIntervalID=setInterval(this.actionInterval.bind(this),1000);
this.resetFlamesArray();this.update();this.getGame().updatePlace()}};a.prototype.changeCandiesInput=function(){if($(".cauldronCandiesInput").length){this.candiesInput=$(".cauldronCandiesInput").val()
}};a.prototype.changeLollipopsInput=function(){if($(".cauldronLollipopsInput").length){this.lollipopsInput=$(".cauldronLollipopsInput").val()
}};a.prototype.drawActions=function(c,h,f,g){var e=false;var d=false;if(f==false){e=$(".cauldronCandiesInput").is(":focus");
d=$(".cauldronLollipopsInput").is(":focus");this.candiesInput="";this.lollipopsInput=""
}this.renderArea.drawString(Database.getText("cauldronWhatYouWantToPut"),c,h);this.renderArea.addBold(c,c+Database.getText("cauldronWhatYouWantToPut").length,h);
this.renderArea.drawString(Database.getTranslatedText("cauldronWhatYouWantToPut"),c,h+1,true);
this.renderArea.addSimpleInput(c,c+20,h+2,new CallbackCollection(this.changeCandiesInput.bind(this)),"cauldronCandiesInput",(g?this.candiesInput:""),e);
this.renderArea.drawString("candies",c+21,h+2);if(this.candiesInputComment!=null){this.renderArea.drawString(this.candiesInputComment,c+29,h+2);
this.renderArea.addBold(c+29,c+29+this.candiesInputComment.length,h+2)}this.renderArea.addSimpleInput(c,c+20,h+4,new CallbackCollection(this.changeLollipopsInput.bind(this)),"cauldronLollipopsInput",(g?this.lollipopsInput:""),d);
this.renderArea.drawString("lollipops",c+21,h+4);if(this.lollipopsInputComment!=null){this.renderArea.drawString(this.lollipopsInputComment,c+31,h+4);
this.renderArea.addBold(c+31,c+31+this.lollipopsInputComment.length,h+4)}this.renderArea.addAsciiRealButton("Put all that in the cauldron",c,h+6,"cauldronPutAllThatInTheCauldronButton","",false,4);
this.renderArea.addLinkCall(".cauldronPutAllThatInTheCauldronButton",new CallbackCollection(this.putInCauldron.bind(this)));
this.renderArea.drawString(Database.getText("cauldronWhatIsIn"),c,h+9);this.renderArea.addBold(c,c+Database.getText("cauldronWhatIsIn").length,h+9);
this.renderArea.drawString(Database.getTranslatedText("cauldronWhatIsIn"),c,h+10,true);
this.renderArea.drawString("Candies :",c+2,h+11);this.renderArea.drawString(Algo.numberToStringButNicely(this.getGame().getCandiesInCauldron().getCurrent()),c+14,h+11);
this.renderArea.drawString("Lollipops :",c+2,h+12);this.renderArea.drawString(Algo.numberToStringButNicely(this.getGame().getLollipopsInCauldron().getCurrent()),c+14,h+12);
this.renderArea.drawString(Database.getText("cauldronWhatYouCanDo"),c,h+14);this.renderArea.addBold(c,c+Database.getText("cauldronWhatYouCanDo").length,h+14);
this.renderArea.drawString(Database.getTranslatedText("cauldronWhatYouCanDo"),c,h+15,true);
this.renderArea.addAsciiRealButton("Mix",c,h+16,"cauldronMixButton","",false,0);this.renderArea.addLinkCall(".cauldronMixButton",new CallbackCollection(this.changeAction.bind(this,CauldronAction.MIXING)));
this.renderArea.addAsciiRealButton("Boil",c+5,h+16,"cauldronBoilButton","",false,0);
this.renderArea.addLinkCall(".cauldronBoilButton",new CallbackCollection(this.changeAction.bind(this,CauldronAction.BOILING)));
this.renderArea.addAsciiRealButton("Stop",c+11,h+16,"cauldronStopButton","",false,0);
this.renderArea.addLinkCall(".cauldronStopButton",new CallbackCollection(this.changeAction.bind(this,CauldronAction.NOTHING)));
switch(this.currentAction){case CauldronAction.MIXING:this.renderArea.drawString("Mixing"+this.getSpecialMixingText(),c,h+18);
break;case CauldronAction.BOILING:this.renderArea.drawString("Boiling"+this.getSpecialBoilingText(),c,h+18);
break}if(this.getGame().getWeAreQuesting()==false){this.renderArea.addAsciiRealButton("Put into bottles",c,h+20,"cauldronPutIntoBottlesButton","",false,0);
this.renderArea.addLinkCall(".cauldronPutIntoBottlesButton",new CallbackCollection(this.putIntoBottles.bind(this)))
}else{this.renderArea.drawString("You can't put into bottles while you're in a quest",c,h+20)
}if(this.potionsComment!=null){this.renderArea.drawString(this.potionsComment,c,h+22)
}};a.prototype.drawBook=function(c,e){this.renderArea.drawArray(Database.getAscii("places/cauldron/book"),c,e);
this.renderArea.drawArray(Database.getAscii("places/cauldron/bookPage"+Saving.loadNumber("cauldronBookCurrentPage")),c+8,e+1);
this.renderArea.drawArray(Database.getAscii("places/cauldron/bookPage"+(Saving.loadNumber("cauldronBookCurrentPage")+1)),c+50,e+1);
if(Saving.loadNumber("cauldronBookCurrentPage")>0){this.renderArea.addAsciiRealButton(Database.getText("cauldronPreviousPageButton"),c,e+31,"cauldronPreviousPageButton",Database.getTranslatedText("cauldronPreviousPageButton"),true,-1,null,false);
this.renderArea.addLinkCall(".cauldronPreviousPageButton",new CallbackCollection(this.previousPage.bind(this)))
}if(Saving.loadNumber("cauldronBookCurrentPage")<this.maxPage){this.renderArea.addAsciiRealButton(Database.getText("cauldronNextPageButton"),c+87,e+31,"cauldronNextPageButton",Database.getTranslatedText("cauldronNextPageButton"),true,-1,null,false,true);
this.renderArea.addLinkCall(".cauldronNextPageButton",new CallbackCollection(this.nextPage.bind(this)))
}if(Database.isTranslated()){for(var d=1;d<28;d++){this.renderArea.addAsciiNinjaButton(c+7,c+48,d,"cauldronLeftPageTranslationButton")
}for(var d=1;d<28;d++){this.renderArea.addAsciiNinjaButton(c+49,c+90,d,"cauldronRightPageTranslationButton")
}this.renderArea.addTooltip("cauldronLeftPageTranslationButtonTooltip",Database.getTranslatedText("cauldron.page"+Saving.loadNumber("cauldronBookCurrentPage")));
this.renderArea.addTooltip("cauldronRightPageTranslationButtonTooltip",Database.getTranslatedText("cauldron.page"+(Saving.loadNumber("cauldronBookCurrentPage")+1)));
this.renderArea.addLinkOnHoverShowTooltip(".cauldronLeftPageTranslationButton",".cauldronLeftPageTranslationButtonTooltip");
this.renderArea.addLinkOnHoverShowTooltip(".cauldronRightPageTranslationButton",".cauldronRightPageTranslationButtonTooltip")
}};a.prototype.drawCauldron=function(c,e){this.renderArea.drawArray(Database.getAscii("places/cauldron/cauldron"),c,e);
for(var d=0;d<this.flames.length;d++){this.flames[d].draw(this.renderArea,c,e)}};
a.prototype.getSpecialBoilingText=function(){if(this.timerTime<3){return"... cold."
}else{if(this.timerTime<6){return"... lukewarm."}else{if(this.timerTime==6){return"... hot."
}else{if(this.timerTime==7){return"... hot.."}else{if(this.timerTime==8){return"... hot..."
}else{if(this.timerTime==9){return"... very hot."}else{if(this.timerTime==10){return"... very hot.."
}else{if(this.timerTime==11){return"... very hot..."}else{if(this.timerTime<14){return"... bubbles begin to appear."
}else{if(this.timerTime==14){return"... bubbles begin to appear.."}else{if(this.timerTime==15){return"... bubbles begin to appear..."
}else{if(this.timerTime==16){return"... bubbles begin to appear... and.."}else{if(this.timerTime==17){return"... bubbles begin to appear... and..."
}else{if(this.timerTime<50){return"... BOILING!"}else{return"... the water is burnt. How is that possible?!"
}}}}}}}}}}}}}}};a.prototype.getSpecialMixingText=function(){if(this.timerTime<60){return"... ("+this.timerTime+")"
}else{return"... your arms are hurting :("}};a.prototype.makePotions=function(f,c,e,d,g){Saving.saveBool(f,true);
Saving.saveNumber(c,Saving.loadNumber(c)+e);this.potionsComment="You made "+Algo.pluralFormat(e," "+d," "+g)+"."
};a.prototype.nextPage=function(){if(Saving.loadNumber("cauldronBookCurrentPage")<this.maxPage){Saving.saveNumber("cauldronBookCurrentPage",Saving.loadNumber("cauldronBookCurrentPage")+2);
this.update();this.getGame().updatePlace()}};a.prototype.previousPage=function(){if(Saving.loadNumber("cauldronBookCurrentPage")>0){Saving.saveNumber("cauldronBookCurrentPage",Saving.loadNumber("cauldronBookCurrentPage")-2);
this.update();this.getGame().updatePlace()}};a.prototype.putInCauldron=function(){var c=false;
var d=(this.candiesInput==""?0:parseInt(this.candiesInput));var e=(this.lollipopsInput==""?0:parseInt(this.lollipopsInput));
this.candiesInputComment=null;this.lollipopsInputComment=null;if(isNaN(d)){this.candiesInputComment="(this isn't a number!)";
c=true}else{if(d<0){this.candiesInputComment="(must be positive)";c=true}else{if(d>this.getGame().getCandies().getCurrent()){this.candiesInputComment="(not enough candies)";
c=true}}}if(isNaN(e)){this.lollipopsInputComment="(this isn't a number!)";c=true}else{if(e<0){this.lollipopsInputComment="(must be positive)";
c=true}else{if(e>this.getGame().getLollipops().getCurrent()){this.lollipopsInputComment="(not enough lollipops)";
c=true}}}if(c){this.update();this.getGame().updatePlace();return}else{this.getGame().getCandies().add(-d);
this.getGame().getLollipops().add(-e);this.getGame().getCandiesInCauldron().add(d);
this.getGame().getLollipopsInCauldron().add(e);this.update(false,false);this.getGame().updatePlace()
}};a.prototype.putIntoBottles=function(){this.potionsComment=null;this.changeAction(CauldronAction.NOTHING);
this.getGame().getCandiesInCauldron().add(-this.getGame().getCandiesInCauldron().getCurrent());
this.getGame().getLollipopsInCauldron().add(-this.getGame().getLollipopsInCauldron().getCurrent());
if(this.actionLog[0]!=null&&this.actionLog[0].getAction()==CauldronAction.MIXING&&this.actionLog[0].getLollipops()==0&&this.actionLog[0].getCandies()>0&&this.actionLog[0].getCandies()%100==0&&this.actionLog[0].getTime()<30){this.makePotions("questPlayerSpellHealthPotionHasSpell","questPlayerSpellHealthPotionQuantity",this.actionLog[0].getCandies()/100,"health potion","health potions")
}else{if(this.actionLog[1]!=null&&this.actionLog[1].getAction()==CauldronAction.MIXING&&this.actionLog[1].getCandies()>0&&this.actionLog[1].getLollipops()>0&&this.actionLog[1].getCandies()%50==0&&this.actionLog[1].getLollipops()%500==0&&this.actionLog[1].getLollipops()==10*this.actionLog[1].getCandies()&&this.actionLog[1].getTime()>6&&this.actionLog[1].getTime()<14&&this.actionLog[0]!=null&&this.actionLog[0].getAction()==CauldronAction.MIXING&&this.actionLog[0].getCandies()==2*this.actionLog[1].getCandies()&&this.actionLog[0].getLollipops()==this.actionLog[1].getLollipops()){this.makePotions("questPlayerSpellTurtlePotionHasSpell","questPlayerSpellTurtlePotionQuantity",this.actionLog[0].getLollipops()/500,"turtle potion","turtle potions")
}else{if(this.actionLog[1]!=null&&this.actionLog[1].getAction()==CauldronAction.BOILING&&this.actionLog[1].getLollipops()==0&&this.actionLog[1].getCandies()>0&&this.actionLog[1].getCandies()%1000==0&&this.actionLog[1].getTime()>=3&&this.actionLog[1].getTime()<6&&this.actionLog[0]!=null&&this.actionLog[0].getAction()==CauldronAction.BOILING&&this.actionLog[0].getLollipops()==0&&this.actionLog[0].getCandies()==2*this.actionLog[1].getCandies()&&this.actionLog[0].getTime()>17){this.makePotions("questPlayerSpellAntiGravityPotionHasSpell","questPlayerSpellAntiGravityPotionQuantity",this.actionLog[1].getCandies()/200,"anti-gravity potion","anti-gravity potions")
}else{if(this.actionLog[0]!=null&&this.actionLog[0].getAction()==CauldronAction.MIXING&&this.actionLog[0].getLollipops()>0&&this.actionLog[0].getLollipops()%20000==0&&this.actionLog[0].getTime()>=60){if(this.actionLog[0].getCandies()==0){this.makePotions("questPlayerSpellBerserkPotionHasSpell","questPlayerSpellBerserkPotionQuantity",this.actionLog[0].getLollipops()/20000,"berserk potion","berserk potions")
}else{this.makePotions("questPlayerSpellCloningPotionHasSpell","questPlayerSpellCloningPotionQuantity",this.actionLog[0].getLollipops()/20000,"cloning potion","cloning potions")
}}else{if(this.actionLog[2]!=null&&this.actionLog[2].getAction()==CauldronAction.MIXING&&this.actionLog[2].getLollipops()==0&&this.actionLog[2].getCandies()>0&&this.actionLog[2].getCandies()%500==0&&this.actionLog[2].getTime()<30&&this.actionLog[1]!=null&&this.actionLog[1].getLollipops()==0&&this.actionLog[1].getCandies()==this.actionLog[2].getCandies()+100*this.actionLog[2].getTime()&&this.actionLog[1].getAction()==CauldronAction.BOILING&&this.actionLog[1].getTime()>=3&&this.actionLog[1].getTime()<6&&this.actionLog[0]!=null&&this.actionLog[0].getAction()==CauldronAction.MIXING&&this.actionLog[0].getCandies()==this.actionLog[1].getCandies()&&this.actionLog[0].getLollipops()>0){this.makePotions("questPlayerSpellPPotionHasSpell","questPlayerSpellPPotionQuantity",Math.ceil(this.actionLog[1].getCandies()/500+this.actionLog[0].getLollipops()/1000),"P potion","P potions")
}else{if(this.actionLog[4]!=null&&this.actionLog[3]!=null&&this.actionLog[2]!=null&&this.actionLog[1]!=null&&this.actionLog[0]!=null&&this.actionLog[4].getAction()==CauldronAction.BOILING&&this.actionLog[3].getAction()==CauldronAction.BOILING&&this.actionLog[2].getAction()==CauldronAction.BOILING&&this.actionLog[1].getAction()==CauldronAction.BOILING&&this.actionLog[0].getAction()==CauldronAction.BOILING&&this.actionLog[4].getTime()<3&&this.actionLog[3].getTime()<3&&this.actionLog[2].getTime()<3&&this.actionLog[1].getTime()<3&&this.actionLog[0].getTime()>=6&&this.actionLog[4].getLollipops()==0&&this.actionLog[4].getCandies()==1&&this.actionLog[3].getLollipops()==0&&this.actionLog[3].getCandies()==2&&this.actionLog[2].getLollipops()==0&&this.actionLog[2].getCandies()==3&&this.actionLog[1].getLollipops()==0&&this.actionLog[1].getCandies()==4&&this.actionLog[0].getLollipops()==1&&this.actionLog[0].getCandies()==4){this.makePotions("questPlayerSpellXPotionHasSpell","questPlayerSpellXPotionQuantity",1,"X potion","X potions")
}}}}}}if(this.potionsComment==null){this.potionsComment="You didn't manage to make anything."
}for(var c=0;c<this.actionLog.length;c++){this.actionLog[c]=null}this.update();this.getGame().updatePlace()
};a.prototype.resetFlamesArray=function(){this.flames=[]};a.prototype.update=function(c,d){if(c===void 0){c=false
}if(d===void 0){d=true}this.renderArea.resetAllButSize();this.drawBook(2,0);this.drawCauldron(2,39);
this.drawActions(47,34,c,d)};a.prototype.updateFlamesArray=function(){var f=0;var d=41;
var e;var c=14;var m;var l;var k;e=14-this.timerTime;if(e<5){e=5}m=this.timerTime*25;
if(m>200){m=200}this.resetFlamesArray();if(this.currentAction=CauldronAction.BOILING){for(var h=0;
h<m;h++){k=null;for(var g=c;g>e;g--){if(Random.oneChanceOutOf(3)){k=g;break}}if(k==null){k=c
}l=Random.between(f+(14-k),d-(14-k));this.flames.push(new CauldronFlame(new Pos(l,k),Random.fromArray([")","(","`","'","."])))
}}};return a})(Place);Saving.registerBool("cellarDone",false);var Cellar=(function(b){__extends(a,b);
function a(c){b.call(this,c);this.resizeQuest(100,3);this.addPlayerCollisionBoxes(true,false,true,true);
this.getGame().getPlayer().loadCandyBoxCharacter(this);this.getGame().getPlayer().setGlobalPosition(new Pos(0,2));
this.getGame().getPlayer().setQuestEntityMovement(new QuestEntityMovement(new Pos(1,0)));
this.getGame().getPlayer().getQuestEntityMovement().setGravity(true);this.getGame().getPlayer().getQuestEntityMovement().setWormsLike(false);
this.addEntity(this.getGame().getPlayer());this.addGround();this.addRats();this.getGame().getQuestLog().addMessage(new QuestLogMessage("You enter the cellar. It's dark and you hear rats squeaking all around you."))
}a.prototype.endQuest=function(c){if(c){this.getGame().getQuestLog().addMessage(new QuestLogMessage("You managed to kill all the rats!"));
Saving.saveBool("cellarDone",true);this.getGame().gainItem("gridItemPossessedMainMap")
}else{this.getGame().getQuestLog().addMessage(new QuestLogMessage("You died in the cellar. Rats are probably going to eat your body."))
}b.prototype.endQuest.call(this,c)};a.prototype.update=function(){if(this.getQuestEnded()==false){if(this.thePlayerWon()){this.endQuest(true);
return}if(this.getGame().getPlayer().shouldDie()){this.endQuest(false);return}this.updateEntities()
}this.preDraw();this.drawEntities();this.drawAroundQuest();if(this.getQuestEnded()){this.addExitQuestButton(new CallbackCollection(this.goToFifthHouse.bind(this)),"buttonExitQuestKeeping")
}this.postDraw()};a.prototype.addGround=function(){var c=new Wall(this,new Pos(0,this.getRealQuestSize().y));
c.addBox(new Pos(0,0),new Pos(this.getRealQuestSize().x,1));this.addEntity(c)};a.prototype.addRat=function(d){var c=new Rat(this,d);
c.setHealthBar(new QuestEntityHealthBar(c,new Pos(3,1)));this.addEntity(c)};a.prototype.addRats=function(){for(var c=5;
c<=95;c++){if(Random.oneChanceOutOf(3)){this.addRat(new Pos(c,2));c+=2}}};a.prototype.goToFifthHouse=function(){this.getGame().setPlace(new FifthHouse(this.getGame()))
};a.prototype.thePlayerWon=function(){if(this.getGame().getPlayer().getGlobalPosition().x>=100){return true
}return false};return a})(Quest);var Cfg=(function(a){__extends(b,a);function b(c){a.call(this,c);
this.renderArea=new RenderArea();this.languageSelectionMap={cfgLanguageEn:"en",cfgLanguageBr:"br",cfgLanguageCz:"cz",cfgLanguageEs:"es",cfgLanguageFr:"fr",cfgLanguageNl:"nl",cfgLanguageZh:"zh",cfgLanguageDe:"de",cfgLanguageSe:"se",cfgLanguageHu:"hu",cfgLanguageId:"id",cfgLanguagePl:"pl",cfgLanguageUk:"uk",cfgLanguageRu:"ru",cfgLanguageTr:"tr",cfgLanguageEl:"el"};
this.renderArea.resize(100,48);this.update()}b.prototype.getRenderArea=function(){return this.renderArea
};b.prototype.drawAbout=function(c,d){this.renderArea.drawArray(Database.getAscii("text/About"),c+34,d);
this.renderArea.drawString("Who?",c+2,d+7);this.renderArea.addBold(c+2,c+6,d+7);this.renderArea.drawString("Ideas, game design & code by aniwey.",c+4,d+9);
this.renderArea.drawString('Ascii art by Tobias Nordqvist, GodsTurf, dixsept, Dani "Deinol" Gómez and aniwey.',c+4,d+10);
this.renderArea.drawString("License?",c+2,d+13);this.renderArea.addBold(c+2,c+10,d+13);
this.renderArea.drawString("The game source code is published under the GPLv3 license. This means you are free to modify and",c+4,d+15);
this.renderArea.drawString("redistribute the game, even for commercial purposes, under some conditions.",c,d+16);
this.renderArea.addHtmlLink(c+76,d+16,"source_code.html","Learn more.");this.renderArea.drawString("The ascii art is published under the CC-BY-SA license, which means that you can reuse it if you",c+4,d+18);
this.renderArea.drawString("credit the artist who made the art and share your modifications under the same license.",c,d+19);
this.renderArea.addHtmlLink(c+88,d+19,"ascii_art.html","Learn more.");this.renderArea.drawString("Anything else?",c+2,d+22);
this.renderArea.addBold(c+2,c+16,d+22);this.renderArea.drawString("Feel free to contact me at aniwey@gmail.com if you have any comments or questions :)",c+4,d+24)
};b.prototype.drawCfgInvertColors=function(c,d){this.renderArea.drawString(Database.getText("cfgInvertColors"),c,d);
this.renderArea.drawString(Database.getTranslatedText("cfgInvertColors"),c,d+1,true);
this.renderArea.addCheckbox(c+Algo.takeBiggest(Database.getText("cfgInvertColors").length,Database.getTranslatedText("cfgInvertColors").length)+2,d,new CallbackCollection(this.invertColorsChecked.bind(this)),new CallbackCollection(this.invertColorsUnchecked.bind(this)),"cfgInvertColorsCheckbox",Saving.loadBool("gameInvertedColors"))
};b.prototype.drawCfgLanguage=function(c,d){this.renderArea.drawString(Database.getText("cfgChooseLanguage"),c,d);
this.renderArea.drawString(Database.getTranslatedText("cfgChooseLanguage"),c,d+1,true);
this.renderArea.addList(c+Algo.takeBiggest(Database.getText("cfgChooseLanguage").length,Database.getTranslatedText("cfgChooseLanguage").length)+2,c+Algo.takeBiggest(Database.getText("cfgChooseLanguage").length,Database.getTranslatedText("cfgChooseLanguage").length)+20,d,"cfgLanguageList",new CallbackCollection(this.languageSelected.bind(this)),["cfgLanguageEn","English","cfgLanguageBr","Brazilian Portuguese (by TranslaCAT)","cfgLanguageZh","Chinese (by Fan Zhang)","cfgLanguageCz","Czech (by Keranis)","cfgLanguageNl","Dutch (by Noël Wierema and Vincent van Gennep, corrections by Wessel van den Putte)","cfgLanguageFr","French (by aniwey)","cfgLanguageDe","German (by Kai Kubasta)","cfgLanguageEl","Greek (by VagosLabrou)","cfgLanguageHu","Hungarian (by The_Reaper_CooL)","cfgLanguageId","Indonesian (by Richard Sudaryono)","cfgLanguagePl","Polish (by Patryk Połomski)","cfgLanguageRu","Russian (by Julia Richter (Zen Chelios Jr.))","cfgLanguageEs","Spanish (by Saúl Ruiz Calleja and Tania López Camino)","cfgLanguageSe","Swedish (by Jessica Tsiamis)","cfgLanguageTr","Turkish (by B. Güler)","cfgLanguageUk","Ukrainian (by Volodymyr Lataniuk)"]);
this.renderArea.addLinkCallbackCollection(new CallbackCollection(this.selectRightLanguage.bind(this)));
if(Saving.loadString("gameLanguage")=="zh"){this.renderArea.drawString("中文版翻译会导致少量图像显示错误，我会尽量修复它们的！",c+9,d+2,true)
}else{if(Saving.loadString("gameLanguage")=="br"){this.renderArea.drawArray(Database.getAscii("general/translaCAT"),c+70,d-1);
this.renderArea.addHtmlLink(c+76,d+7,"http://www.translacat.com/","TranslaCAT")}}};
b.prototype.drawConfigurationText=function(c,d){this.renderArea.drawArray(Database.getAscii("text/Configuration"),c+17,d)
};b.prototype.invertColorsChecked=function(){this.setInvertedColors(true)};b.prototype.invertColorsUnchecked=function(){this.setInvertedColors(false)
};b.prototype.languageSelected=function(){var c=$("#cfgLanguageList").find(":selected").attr("id");
if(this.languageSelectionMap[c]!=null){Saving.saveString("gameLanguage",this.languageSelectionMap[c])
}this.update();this.getGame().updatePlace()};b.prototype.selectRightLanguage=function(){for(var c in this.languageSelectionMap){if(Saving.loadString("gameLanguage")==this.languageSelectionMap[c]){$("#"+c).prop("selected",true)
}}};b.prototype.setInvertedColors=function(c){Saving.saveBool("gameInvertedColors",c);
this.getGame().applyInvertedColorsToCss();this.update();this.getGame().updateStatusBar();
this.getGame().updatePlace()};b.prototype.update=function(){this.renderArea.resetAllButSize();
this.drawConfigurationText(0,0);this.drawCfgLanguage(0,8);this.drawCfgInvertColors(0,12);
this.drawAbout(0,18)};return b})(Place);var Chest=(function(a){__extends(b,a);function b(c,e,g,d,f){if(g===void 0){g=true
}if(d===void 0){d=new CallbackCollection()}if(f===void 0){f=false}a.call(this,c,e,new Naming("A chest","a chest"),new RenderArea(),new Pos(0,-1),new CollisionBoxCollection(new CollisionBox(this,new Pos(0,-1),new Pos(3,2))));
this.isFacingRight=g;this.callbackCollection=d;this.isOpened=f;this.openingCollisionBoxCollection=new CollisionBoxCollection(new CollisionBox(this,new Pos(-1,-1),new Pos(5,3)));
this.setTeam(QuestEntityTeam.NATURE);this.getRenderArea().resizeFromArray(Database.getAscii("places/quests/common/chestClosed"));
this.setTransparency(new RenderTransparency(" "));this.drawChestAscii()}b.prototype.update=function(){a.prototype.update.call(this);
if(this.isOpened==false){if(this.getQuest().getGame().getPlayer().getCbc()!=null){if(this.getQuest().getGame().getPlayer().getCbc().collidesWith(this.openingCollisionBoxCollection)){this.isOpened=true;
this.callbackCollection.fire();this.drawChestAscii()}}}};b.prototype.drawChestAscii=function(){this.getRenderArea().resetAllButSize();
if(this.isOpened==false){this.getRenderArea().drawArray(Database.getAscii("places/quests/common/chestClosed"))
}else{if(this.isFacingRight){this.getRenderArea().drawArray(Database.getAscii("places/quests/common/chestOpenedRight"))
}else{this.getRenderArea().drawArray(Database.getAscii("places/quests/common/chestOpenedLeft"))
}}};return b})(QuestEntity);var ChocolateBars=(function(a){__extends(b,a);function b(c,d){a.call(this,c,d)
}b.prototype.getCurrentAsString=function(c){if(c===void 0){c=10}var h=this.getCurrent();
var d=c;var f="";var e="";var g="";if(h<0){return"What, negative chocolate bars?!"
}else{if(h==1){return"You have 1 chocolate bar"}else{f=Algo.numberToStringButNicely(h)
}}d=c-f.length;if(d>=15){g=" chocolate bars";d=c-f.length-g.length;if(d>=9){e="You have "
}else{if(d>=3){e="-> "}}}else{if(d>=3){g=" cb"}}d=c-f.length-e.length-g.length;return e+f+g
};return b})(StatusBarResource);var CollisionBoxCollection=(function(){function a(){var b=[];
for(var c=0;c<arguments.length;c++){b[c-0]=arguments[c]}this.boxes=b}a.prototype.addCollisionBox=function(b){this.boxes.push(b)
};a.prototype.collidesWith=function(c,e){if(e===void 0){e=new Pos(0,0)}for(var d=0;
d<this.boxes.length;d++){for(var b=0;b<c.getBoxes().length;b++){if(this.boxes[d].collidesWith(c.getBoxes()[b],e)){return true
}}}return false};a.prototype.move=function(c){for(var b=0;b<this.boxes.length;b++){this.boxes[b].move(c)
}};a.prototype.removeBoxes=function(){this.boxes=[]};a.prototype.getBoxes=function(){return this.boxes
};return a})();var CollisionBox=(function(){function a(d,b,c){this.questEntity=d;
this.position=b;this.size=c}a.prototype.collidesWith=function(b,c){if(c===void 0){c=new Pos(0,0)
}if(b.questEntity.getGlobalPosition().x+b.position.x+b.size.x<=this.questEntity.getGlobalPosition().x+this.position.plus(c).x){return false
}if(b.questEntity.getGlobalPosition().x+b.position.x>=this.questEntity.getGlobalPosition().x+this.position.plus(c).x+this.size.x){return false
}if(b.questEntity.getGlobalPosition().y+b.position.y+b.size.y<=this.questEntity.getGlobalPosition().y+this.position.plus(c).y){return false
}if(b.questEntity.getGlobalPosition().y+b.position.y>=this.questEntity.getGlobalPosition().y+this.position.plus(c).y+this.size.y){return false
}return true};a.prototype.move=function(b){this.position.add(b)};a.prototype.getPosition=function(){return this.position
};a.prototype.getSize=function(){return this.size};return a})();var Color=(function(){function a(c,b){if(b===void 0){b=false
}this.setColorType(c);this.shouldInvert=b}a.prototype.getColorString=function(){if(Saving.loadBool("gameInvertedColors")==false||this.shouldInvert==false){return this.colorString
}else{return this.invertedColorString}};a.prototype.setColorType=function(b){this.colorType=b;
switch(this.colorType){case ColorType.HEALTH_GREEN:this.setRGB(20,212,0);break;case ColorType.HEALTH_ORANGE:this.setRGB(255,128,0);
break;case ColorType.HEALTH_RED:this.setRGB(230,15,0);break;case ColorType.HEALTH_UNICOLOR:this.setRGB(20,212,0);
break;case ColorType.PLAYER_FIREBALL:this.setRGB(255,120,0);break;case ColorType.PLAYER_ACID_DROP:this.setRGB(138,172,60);
break;case ColorType.PLAYER_THORN:this.setRGB(85,150,40);break;case ColorType.PLAYER_OBSIDIAN_BRICK:this.setRGB(52,0,61);
break;case ColorType.PLAYER_SUMMONED_DEMON:this.setRGB(0,0,0);break;case ColorType.RED_ENCHANTED_GLOVES_FIREBALL:this.setRGB(255,80,0);
break;case ColorType.QUEST_BUTTON_ACID_RAIN:this.setRGB(138,172,60);break;case ColorType.QUEST_BUTTON_FIREBALL:this.setRGB(255,120,0);
break;case ColorType.QUEST_BUTTON_TELEPORT:this.setRGB(185,213,213);break;case ColorType.QUEST_BUTTON_ERASE_MAGIC:this.setRGB(230,255,108);
break;case ColorType.QUEST_BUTTON_THORNS_SHIELD:this.setRGB(85,150,40);break;case ColorType.QUEST_BUTTON_OBSIDIAN_WALL:this.setRGB(180,90,130);
break;case ColorType.QUEST_BUTTON_BLACK_DEMONS:this.setRGB(128,128,128);break;case ColorType.QUEST_BUTTON_HEALTH_POTION:this.setRGB(255,31,31);
break;case ColorType.QUEST_BUTTON_TURTLE_POTION:this.setRGB(123,137,13);break;case ColorType.QUEST_BUTTON_ANTI_GRAVITY_POTION:this.setRGB(187,64,188);
break;case ColorType.QUEST_BUTTON_BERSERK_POTION:this.setRGB(110,30,47);break;case ColorType.QUEST_BUTTON_CLONING_POTION:this.setRGB(200,200,200);
break;case ColorType.QUEST_BUTTON_P_POTION:this.setRGB(42,135,141);break;case ColorType.QUEST_BUTTON_X_POTION:this.setRGB(252,82,255);
break;case ColorType.QUEST_BUTTON_SOME_OBJECT:this.setRGB(209,131,67);break;case ColorType.QUEST_BLACKHOLE_SPELL:this.setRGB(80,80,80);
break;case ColorType.QUEST_COUNTDOWN:this.setRGB(255,0,0);break;case ColorType.SAVE_GREEN:this.setRGB(42,184,39);
break;case ColorType.SAVE_RED:this.setRGB(255,28,28);break;case ColorType.STATUS_BAR_SELECTED_TAB:this.setRGB(191,191,191);
break;case ColorType.SEAHORSE_WATER_BALL:this.setRGB(0,58,118);break;case ColorType.THECAVE_BACKGROUND_COLOR:this.setRGB(20,20,20);
break;case ColorType.MONKEY_WIZARD_BALL:this.setRGB(114,0,101);break;case ColorType.MONKEY_WIZARD_BALL_STORED:this.setRGB(114,0,56);
break;case ColorType.TREE_SPIRIT_MAGIC_SPINE:this.setRGB(16,95,16);break;case ColorType.CASTLE_DARK_ROOM:this.setRGB(0,0,0);
break;case ColorType.BIGSHARK_FIN_RED:this.setRGB(217,31,31);break;case ColorType.BIGSHARK_FIN_GREEN:this.setRGB(31,217,64);
break;case ColorType.BIGSHARK_FIN_PURPLE:this.setRGB(151,31,217);break;case ColorType.BLACKHOLE_GREY20:this.setRGB(20,20,20);
break;case ColorType.BLACKHOLE_GREY40:this.setRGB(40,40,40);break;case ColorType.BLACKHOLE_GREY60:this.setRGB(60,60,60);
break;case ColorType.BLACKHOLE_GREY80:this.setRGB(80,80,80);break;case ColorType.BLACKHOLE_GREY100:this.setRGB(100,100,100);
break;case ColorType.BLACKHOLE_GREY120:this.setRGB(120,120,120);break;case ColorType.BLACKHOLE_GREY140:this.setRGB(140,140,140);
break;case ColorType.BLACKHOLE_GREY160:this.setRGB(160,160,160);break;case ColorType.BLACKHOLE_GREY180:this.setRGB(180,180,180);
break;case ColorType.BLACKHOLE_GREY200:this.setRGB(200,200,200);break;case ColorType.BLACKHOLE_GREY220:this.setRGB(220,220,220);
break;case ColorType.BLACKHOLE_GREY240:this.setRGB(240,240,240);break;case ColorType.HELL_RED_LAVA:this.setRGB(200,8,3);
break;case ColorType.DEVIL_FIREBALL:this.setRGB(191,0,0);break;case ColorType.DEVELOPER_BLUE:this.setRGB(20,20,213);
break;case ColorType.DEVELOPER_YELLOW:this.setRGB(227,194,11);break;case ColorType.DEVELOPER_ORANGE:this.setRGB(201,77,9);
break}};a.prototype.setColorString=function(b){this.colorString=b};a.prototype.setInvertedColorString=function(b){this.invertedColorString=b
};a.prototype.setRGB=function(e,d,c){this.r=e;this.g=d;this.b=c;this.setColorString("rgb("+e.toString()+", "+d.toString()+", "+c.toString()+")");
this.setInvertedColorString("rgb("+(255-e).toString()+", "+(255-d).toString()+", "+(255-c).toString()+")")
};return a})();var ColorType;(function(a){a[a.HEALTH_GREEN=0]="HEALTH_GREEN";a[a.HEALTH_ORANGE=1]="HEALTH_ORANGE";
a[a.HEALTH_RED=2]="HEALTH_RED";a[a.HEALTH_UNICOLOR=3]="HEALTH_UNICOLOR";a[a.PLAYER_FIREBALL=4]="PLAYER_FIREBALL";
a[a.PLAYER_ACID_DROP=5]="PLAYER_ACID_DROP";a[a.PLAYER_THORN=6]="PLAYER_THORN";a[a.PLAYER_OBSIDIAN_BRICK=7]="PLAYER_OBSIDIAN_BRICK";
a[a.PLAYER_SUMMONED_DEMON=8]="PLAYER_SUMMONED_DEMON";a[a.RED_ENCHANTED_GLOVES_FIREBALL=9]="RED_ENCHANTED_GLOVES_FIREBALL";
a[a.QUEST_BUTTON_ACID_RAIN=10]="QUEST_BUTTON_ACID_RAIN";a[a.QUEST_BUTTON_FIREBALL=11]="QUEST_BUTTON_FIREBALL";
a[a.QUEST_BUTTON_TELEPORT=12]="QUEST_BUTTON_TELEPORT";a[a.QUEST_BUTTON_ERASE_MAGIC=13]="QUEST_BUTTON_ERASE_MAGIC";
a[a.QUEST_BUTTON_THORNS_SHIELD=14]="QUEST_BUTTON_THORNS_SHIELD";a[a.QUEST_BUTTON_OBSIDIAN_WALL=15]="QUEST_BUTTON_OBSIDIAN_WALL";
a[a.QUEST_BUTTON_BLACK_DEMONS=16]="QUEST_BUTTON_BLACK_DEMONS";a[a.QUEST_BUTTON_HEALTH_POTION=17]="QUEST_BUTTON_HEALTH_POTION";
a[a.QUEST_BUTTON_TURTLE_POTION=18]="QUEST_BUTTON_TURTLE_POTION";a[a.QUEST_BUTTON_ANTI_GRAVITY_POTION=19]="QUEST_BUTTON_ANTI_GRAVITY_POTION";
a[a.QUEST_BUTTON_BERSERK_POTION=20]="QUEST_BUTTON_BERSERK_POTION";a[a.QUEST_BUTTON_CLONING_POTION=21]="QUEST_BUTTON_CLONING_POTION";
a[a.QUEST_BUTTON_P_POTION=22]="QUEST_BUTTON_P_POTION";a[a.QUEST_BUTTON_X_POTION=23]="QUEST_BUTTON_X_POTION";
a[a.QUEST_BUTTON_SOME_OBJECT=24]="QUEST_BUTTON_SOME_OBJECT";a[a.QUEST_BLACKHOLE_SPELL=25]="QUEST_BLACKHOLE_SPELL";
a[a.QUEST_COUNTDOWN=26]="QUEST_COUNTDOWN";a[a.SAVE_GREEN=27]="SAVE_GREEN";a[a.SAVE_RED=28]="SAVE_RED";
a[a.STATUS_BAR_SELECTED_TAB=29]="STATUS_BAR_SELECTED_TAB";a[a.SEAHORSE_WATER_BALL=30]="SEAHORSE_WATER_BALL";
a[a.THECAVE_BACKGROUND_COLOR=31]="THECAVE_BACKGROUND_COLOR";a[a.MONKEY_WIZARD_BALL=32]="MONKEY_WIZARD_BALL";
a[a.MONKEY_WIZARD_BALL_STORED=33]="MONKEY_WIZARD_BALL_STORED";a[a.TREE_SPIRIT_MAGIC_SPINE=34]="TREE_SPIRIT_MAGIC_SPINE";
a[a.CASTLE_DARK_ROOM=35]="CASTLE_DARK_ROOM";a[a.BIGSHARK_FIN_RED=36]="BIGSHARK_FIN_RED";
a[a.BIGSHARK_FIN_GREEN=37]="BIGSHARK_FIN_GREEN";a[a.BIGSHARK_FIN_PURPLE=38]="BIGSHARK_FIN_PURPLE";
a[a.BLACKHOLE_GREY20=39]="BLACKHOLE_GREY20";a[a.BLACKHOLE_GREY40=40]="BLACKHOLE_GREY40";
a[a.BLACKHOLE_GREY60=41]="BLACKHOLE_GREY60";a[a.BLACKHOLE_GREY80=42]="BLACKHOLE_GREY80";
a[a.BLACKHOLE_GREY100=43]="BLACKHOLE_GREY100";a[a.BLACKHOLE_GREY120=44]="BLACKHOLE_GREY120";
a[a.BLACKHOLE_GREY140=45]="BLACKHOLE_GREY140";a[a.BLACKHOLE_GREY160=46]="BLACKHOLE_GREY160";
a[a.BLACKHOLE_GREY180=47]="BLACKHOLE_GREY180";a[a.BLACKHOLE_GREY200=48]="BLACKHOLE_GREY200";
a[a.BLACKHOLE_GREY220=49]="BLACKHOLE_GREY220";a[a.BLACKHOLE_GREY240=50]="BLACKHOLE_GREY240";
a[a.HELL_RED_LAVA=51]="HELL_RED_LAVA";a[a.DEVIL_FIREBALL=52]="DEVIL_FIREBALL";a[a.DEVELOPER_BLUE=53]="DEVELOPER_BLUE";
a[a.DEVELOPER_YELLOW=54]="DEVELOPER_YELLOW";a[a.DEVELOPER_ORANGE=55]="DEVELOPER_ORANGE"
})(ColorType||(ColorType={}));var Database;(function(h){var k={};var f={};var d={};
function b(p,o,n,q){k[p]=q;f[p]=new Pos(o,n)}h.addAscii=b;function i(n,o){d[n]=o}h.addText=i;
function c(){if(Saving.loadString("gameLanguage")!="en"){return true}return false
}h.isTranslated=c;function g(n){if(k[n]==null){console.log('Error : trying to access the unknown ascii art "'+n+'"')
}return k[n]}h.getAscii=g;function m(n){return f[n].y}h.getAsciiHeight=m;function e(n){return f[n].x
}h.getAsciiWidth=e;function a(o,p,n){return g(o).slice(p,n)}h.getPartOfAscii=a;function j(n){if(d["en."+n]==null){console.log('Error : trying to access the unknown text "'+n+'"')
}return d["en."+n]}h.getText=j;function l(n){if(Saving.loadString("gameLanguage")!="en"){if(d[Saving.loadString("gameLanguage")+"."+n]==null){console.log('Error : trying to access the unknown translated text "'+n+'" for language '+Saving.loadString("gameLanguage")+".")
}if(Saving.loadString("gameLanguage")!="zh"){return d[Saving.loadString("gameLanguage")+"."+n]
}else{return d[Saving.loadString("gameLanguage")+"."+n].addChineseSpaces()}}return""
}h.getTranslatedText=l})(Database||(Database={}));var Demon=(function(b){__extends(a,b);
function a(c,d){b.call(this,c,d,new Naming("A demon","a demon"),new RenderArea(0,0),new Pos(0,0),new CollisionBoxCollection(),new QuestEntityMovement());
this.getQuestEntityMovement().setGravity(true);this.setDestructible(true);switch(Random.between(0,2)){case 0:this.type=DemonType.CUBE;
break;case 1:this.type=DemonType.EYES;break;case 2:this.type=DemonType.BUBBLES;break
}switch(this.type){case DemonType.CUBE:this.getRenderArea().resize(5,3);this.getCbc().addCollisionBox(new CollisionBox(this,new Pos(0,0),new Pos(5,3)));
this.getRenderArea().drawArray(Database.getAscii("places/quests/hell/demonCube"));
this.setTransparency(new RenderTransparency(" ","%"));this.addQuestEntityWeapon(new QuestEntityWeapon(this.getQuest(),this,new Naming("Its huge body","its huge body"),new CollisionBoxCollection(new CollisionBox(this,new Pos(-1,2),new Pos(7,2))),50));
this.getLastQuestEntityWeapon().getCloseCombatDelay().setFixedDelay(10);break;case DemonType.EYES:this.getRenderArea().resize(5,4);
this.getCbc().addCollisionBox(new CollisionBox(this,new Pos(0,1),new Pos(5,3)));this.getRenderArea().drawArray(Database.getAscii("places/quests/hell/demonEyes"));
this.setTransparency(new RenderTransparency(" ","%"));this.addQuestEntityWeapon(new QuestEntityWeapon(this.getQuest(),this,new Naming("Demonish eyes","demonish eyes"),new CollisionBoxCollection(new CollisionBox(this,new Pos(-1,-1),new Pos(7,6))),10));
this.getLastQuestEntityWeapon().getCloseCombatDelay().setFixedDelay(0);break;case DemonType.BUBBLES:this.getRenderArea().resize(5,3);
this.getCbc().addCollisionBox(new CollisionBox(this,new Pos(0,0),new Pos(5,3)));this.getRenderArea().drawArray(Database.getAscii("places/quests/hell/demonBubbles"+Random.between(0,6).toString()));
this.setTransparency(new RenderTransparency(" "));this.addQuestEntityWeapon(new QuestEntityWeapon(this.getQuest(),this,new Naming("Fire bubbles","fire bubbles"),new CollisionBoxCollection(new CollisionBox(this,new Pos(-1,-1),new Pos(7,5))),15));
this.getLastQuestEntityWeapon().getCloseCombatDelay().setFixedDelay(1);break}switch(this.type){case DemonType.CUBE:this.setMaxHp(120);
this.setHp(120);break;default:this.setMaxHp(30+Random.between(0,7)*10);this.setHp(this.getMaxHp());
break}}a.prototype.update=function(){this.goTowards(this.getRenderAreaCenter(),this.getQuest().getGame().getPlayer().getRenderAreaCenter(),0,new Pos(1,0));
if(Math.abs(this.getRenderAreaCenter().x-this.getQuest().getGame().getPlayer().getRenderAreaCenter().x)>5){this.jump(3)
}b.prototype.update.call(this)};a.prototype.willDie=function(){this.getQuest().getGame().getQuestLog().addMessage(new QuestLogMessage(this.getDeathMessage()+" (and found "+Algo.pluralFormat(this.getQuest().foundCandies(5+Random.upTo(5))," candy"," candies")+")",this.getQuest().getCandiesFoundMessage()))
};return a})(QuestEntity);var DemonType;(function(a){a[a.CUBE=0]="CUBE";a[a.EYES=1]="EYES";
a[a.BUBBLES=2]="BUBBLES"})(DemonType||(DemonType={}));var DesertBird=(function(b){__extends(a,b);
function a(d,e,c){b.call(this,d,e,new Naming("A desert bird","a desert bird"),new RenderArea(9,4),new Pos(0,0),new CollisionBoxCollection(new CollisionBox(this,new Pos(0,0),new Pos(9,4))));
if(c){this.setQuestEntityMovement(new QuestEntityMovement(new Pos(1,0)));this.setQuestEntityAnimation(new QuestEntityAnimation(3,Random.upTo(2),Random.upTo(1),"places/quests/desert/birdRightUp","places/quests/desert/birdRightDown"))
}else{this.setQuestEntityMovement(new QuestEntityMovement(new Pos(-1,0)));this.setQuestEntityAnimation(new QuestEntityAnimation(3,Random.upTo(2),Random.upTo(1),"places/quests/desert/birdLeftUp","places/quests/desert/birdLeftDown"))
}this.setDestructible(true);this.setMaxHp(6);this.setHp(6)}a.prototype.willDie=function(){b.prototype.willDie.call(this);
this.getQuest().foundGridOrEqItem(new QuestItemFound(this.getQuest(),"gridItemPossessedFeather","You found a desert bird feather!","You gain a desert bird feather"))
};return a})(QuestEntity);var Desert=(function(a){__extends(b,a);function b(c){a.call(this,c);
this.resizeQuest(149,30);this.addPlayerCollisionBoxes(true,false,true,true);this.getGame().getPlayer().loadCandyBoxCharacter(this);
this.getGame().getPlayer().setGlobalPosition(new Pos(0,26));this.configPlayerOrClone(this.getGame().getPlayer());
this.addEntity(this.getGame().getPlayer());this.addGround(0,3,1,4,12,0,13,18,1,19,24,2,25,30,3,31,36,2,37,42,1,43,51,0,52,57,1,58,62,2,63,68,3,69,75,2,76,82,1,83,92,0,93,97,1,98,101,2,102,107,3,108,113,2,114,119,1,120,128,0,129,134,1,135,139,2,140,145,3,146,148,2);
this.currentBirdTime=0;this.setNextBirdAt();this.addCamel(new Pos(44,24));this.addCamel(new Pos(65,26));
this.addCamel(new Pos(84,24));this.addCamel(new Pos(106,26));this.addCamel(new Pos(118,24));
this.addCamel(new Pos(144,26));this.getGame().getQuestLog().addMessage(new QuestLogMessage("You enter the desert, camels and palm trees as far as the eye can see."))
}b.prototype.configPlayerOrClone=function(c){c.setQuestEntityMovement(new QuestEntityMovement(new Pos(1,0)));
c.getQuestEntityMovement().setGravity(true);c.getQuestEntityMovement().setWormsLike(true)
};b.prototype.endQuest=function(c){if(c){this.getGame().getQuestLog().addMessage(new QuestLogMessage("You made your way through the desert!"));
Saving.saveBool("mainMapDoneDesert",true)}else{this.getGame().getQuestLog().addMessage(new QuestLogMessage("You died in the desert. Alone."))
}a.prototype.endQuest.call(this,c)};b.prototype.update=function(){if(this.getQuestEnded()==false){if(this.currentBirdTime>=this.nextBirdAt){this.currentBirdTime=0;
this.setNextBirdAt();this.addBird()}else{this.currentBirdTime+=1}if(this.thePlayerWon()){this.endQuest(true);
return}if(this.getGame().getPlayer().shouldDie()){this.endQuest(false);return}this.updateEntities()
}this.preDraw();this.getRenderArea().drawArray(Database.getAscii("places/quests/desert/background"),this.getRealQuestPosition().x,this.getRealQuestPosition().y+21);
this.drawEntities();this.drawAroundQuest();if(this.getQuestEnded()==false){this.addExitQuestButton(new CallbackCollection(this.getGame().goToMainMap.bind(this.getGame())),"buttonExitQuestNoKeeping")
}else{if(this.getQuestEndedAndWeWon()==false){this.addExitQuestButton(new CallbackCollection(this.getGame().goToMainMap.bind(this.getGame())),"buttonExitQuestNoKeepingBecauseLose")
}else{this.addExitQuestButton(new CallbackCollection(this.getGame().goToMainMap.bind(this.getGame())),"buttonExitQuestKeeping")
}}this.postDraw()};b.prototype.addBird=function(){var e;var d=Random.upTo(14);for(var c=0;
c<this.getEntities().length;c++){if(this.getEntities()[c].getCbc()!=null&&this.getEntities()[c].getCbc().collidesWith(new CollisionBoxCollection(new CollisionBox(new QuestEntity(this,new Pos(0,0)),new Pos(0,d),new Pos(149,4))))){return
}}if(Random.flipACoin()){e=new DesertBird(this,new Pos(-9,d),true)}else{e=new DesertBird(this,new Pos(149,d),false)
}e.setHealthBar(new QuestEntityHealthBar(e,new Pos(9,1)));this.addEntity(e)};b.prototype.addCamel=function(d){var c;
if(Random.oneChanceOutOf(20)){c=new TripodCamel(this,d)}else{c=new Camel(this,d)}c.setHealthBar(new QuestEntityHealthBar(c,new Pos(7,1)));
this.addEntity(c)};b.prototype.addGround=function(){var d=[];for(var f=0;f<arguments.length;
f++){d[f-0]=arguments[f]}this.addEntity(new Wall(this,new Pos(0,26)));var c=(this.getLastEntity());
for(var e=0;e<d.length/3;e++){c.addBox(new Pos(d[e*3],d[e*3+2]),new Pos(d[e*3+1]-d[e*3]+1,4-d[e*3+2]))
}};b.prototype.setNextBirdAt=function(){this.nextBirdAt=20+Random.upTo(30)};b.prototype.thePlayerWon=function(){if(this.getGame().getPlayer().getGlobalPosition().x>=149){return true
}return false};return b})(Quest);var DeveloperEntityText=(function(){function a(c,b,d,e){this.damage=c;
this.text=e;this.textPos=b;this.timeToLive=d;this.xPos=0}a.prototype.update=function(b){for(var c=0;
c<this.text.length;c++){if(this.xPos<this.text[c].length&&this.text[c][this.xPos]!=" "){switch(this.text[c][this.xPos]){case"B":b.addMagicBall(this.textPos.plus(new Pos(this.xPos,c)),this.damage,this.timeToLive-this.xPos,ColorType.DEVELOPER_BLUE);
break;case"Y":b.addMagicBall(this.textPos.plus(new Pos(this.xPos,c)),this.damage,this.timeToLive-this.xPos,ColorType.DEVELOPER_YELLOW);
break;case"O":b.addMagicBall(this.textPos.plus(new Pos(this.xPos,c)),this.damage,this.timeToLive-this.xPos,ColorType.DEVELOPER_ORANGE);
break}}}this.xPos+=1};return a})();var DeveloperEntity=(function(b){__extends(a,b);
function a(c,d){b.call(this,c,d,new Naming("The developer","the developer"),new RenderArea(43,34),new Pos(0,0),new CollisionBoxCollection(new CollisionBox(this,new Pos(20,0),new Pos(6,1)),new CollisionBox(this,new Pos(16,1),new Pos(12,1)),new CollisionBox(this,new Pos(15,2),new Pos(14,1)),new CollisionBox(this,new Pos(12,3),new Pos(18,1)),new CollisionBox(this,new Pos(11,4),new Pos(20,1)),new CollisionBox(this,new Pos(10,5),new Pos(22,1)),new CollisionBox(this,new Pos(9,6),new Pos(24,2)),new CollisionBox(this,new Pos(9,8),new Pos(25,1)),new CollisionBox(this,new Pos(9,9),new Pos(26,2)),new CollisionBox(this,new Pos(9,11),new Pos(27,3)),new CollisionBox(this,new Pos(9,14),new Pos(28,1)),new CollisionBox(this,new Pos(8,15),new Pos(29,3)),new CollisionBox(this,new Pos(7,18),new Pos(30,4)),new CollisionBox(this,new Pos(7,22),new Pos(31,2)),new CollisionBox(this,new Pos(6,24),new Pos(32,4)),new CollisionBox(this,new Pos(5,28),new Pos(33,1)),new CollisionBox(this,new Pos(5,29),new Pos(34,1)),new CollisionBox(this,new Pos(4,30),new Pos(35,1)),new CollisionBox(this,new Pos(2,31),new Pos(38,1)),new CollisionBox(this,new Pos(1,32),new Pos(40,1)),new CollisionBox(this,new Pos(0,33),new Pos(43,1))),new QuestEntityMovement());
this.timeSpent=0;this.createTexts();this.getQuestEntityMovement().setGravity(false);
this.setDestructible(true);this.setMaxHp(1000000000);this.setHp(1000000000);this.getRenderArea().drawArray(Database.getAscii("places/quests/developer/me"));
this.setTransparency(new RenderTransparency(" "))}a.prototype.inflictDamage=function(c,d){b.prototype.inflictDamage.call(this,c*Random.between(60000,70000),d)
};a.prototype.update=function(){this.timeSpent+=1;if(this.timeSpent==95||this.timeSpent==245){this.indexOfCurrentText+=1
}this.texts[this.indexOfCurrentText].update(this);b.prototype.update.call(this)};
a.prototype.willDie=function(){this.getQuest().getGame().getQuestLog().addMessage(new QuestLogMessage(this.getDeathMessage()+" (and found "+Algo.pluralFormat(this.getQuest().foundCandies(6000000)," candy"," candies")+")",this.getQuest().getCandiesFoundMessage()));
this.getQuest().foundGridOrEqItem(new QuestItemFound(this.getQuest(),"gridItemPossessedY","You found a strange stone.","You gain a strange stone."))
};a.prototype.addMagicBall=function(f,e,h,c){var g;switch(Random.upTo(2)){case 0:g=new Pos(15,15);
break;case 1:g=new Pos(25,15);break;case 2:g=new Pos(20,26);break}var d=new DeveloperMagicBall(this.getQuest(),this.getGlobalPosition().plus(g),new Naming("A magic ball","a magic ball"),new Color(c),new Pos(2,1),e,this.getAndPossiblyCreateSpellCastingDamageReason(new Naming("A magic ball","a magic ball")),h);
d.setTargetTypeTargetPosition(f,new Pos(1,1));this.getQuest().addEntity(d)};a.prototype.createTexts=function(){this.texts=[];
this.indexOfCurrentText=0;this.texts.push(new DeveloperEntityText(20,new Pos(3,3),110,Database.getAscii("places/quests/developer/hello")));
this.texts.push(new DeveloperEntityText(32,new Pos(3,3),150,Database.getAscii("places/quests/developer/imgladyoumadeitsofar")));
this.texts.push(new DeveloperEntityText(9999999999999,new Pos(8,10),100,Database.getAscii("places/quests/developer/love")))
};a.prototype.playerUsedBlackMagic=function(){this.getQuest().addEntity(new Blackhole(this.getQuest(),this.getQuest().getGame().getPlayer().getRenderAreaCenter(),5000,new QuestEntityDamageReason(QuestEntityDamageReasonWhoType.ENTITY,QuestEntityDamageReasonWhatType.SPELL).setQuestEntity(this).setSpellNaming(new Naming("A blackhole","a blackhole"))))
};return a})(QuestEntity);var Fireball=(function(b){__extends(a,b);function a(d,i,h,c,e,f,g){b.call(this,d,i,h);
this.targetType=FireballTargetType.NO_TARGET;this.size=e;this.damage=f;this.questEntityDamageReason=g;
this.damageCollisionBoxCollection=new CollisionBoxCollection(new CollisionBox(this,new Pos(0,0),this.size));
this.addColor(new QuestEntitySpellColor(this.getQuest(),new Pos(0,0),this.size,c));
this.setQuestEntityMovement(new QuestEntityMovement(new Pos(0,0)));this.setTargetTypeNoTarget(new Pos(0,0))
}a.prototype.setTargetTypeNoTarget=function(c){this.targetType=FireballTargetType.NO_TARGET;
this.getQuestEntityMovement().setOffset(c)};a.prototype.setTargetTypeTargetEntity=function(c,e,d){if(e===void 0){e=null
}if(d===void 0){d=new Pos(1,1)}this.targetType=FireballTargetType.TARGET_ENTITY;this.fireballTargetEntity=c;
this.specialTargetDamage=e;this.speed=d};a.prototype.setTargetTypeTargetPosition=function(d,c){if(c===void 0){c=new Pos(1,1)
}this.targetType=FireballTargetType.TARGET_POSITION;this.targetPosition=d;this.speed=c
};a.prototype.setTargetTypeTargetStickOnEntity=function(c,d){if(d===void 0){d=new Pos(0,0)
}this.targetType=FireballTargetType.TARGET_STICK_ON_ENTITY;this.fireballTargetEntity=c;
this.specialTargetPosition=d};a.prototype.update=function(){if(this.targetType==FireballTargetType.TARGET_ENTITY){if(this.fireballTargetEntity!=null&&this.fireballTargetEntity.getDead()==false){this.goTowards(this.getGlobalPosition().plus(new Pos(Math.floor(this.size.x/2),Math.floor(this.size.y/2))),this.fireballTargetEntity.getRenderAreaCenter(),0,this.speed)
}else{this.setDead(true)}}else{if(this.targetType==FireballTargetType.TARGET_STICK_ON_ENTITY){if(this.fireballTargetEntity!=null&&this.fireballTargetEntity.getDead()==false){this.teleport(this.fireballTargetEntity.getGlobalPosition().plus(this.specialTargetPosition))
}else{this.setDead(true)}}else{if(this.targetType==FireballTargetType.TARGET_POSITION){this.goTowards(this.getGlobalPosition().plus(new Pos(Math.floor(this.size.x/2),Math.floor(this.size.y/2))),this.targetPosition,0,this.speed)
}}}this.handleDamage();b.prototype.update.call(this)};a.prototype.willDie=function(){};
a.prototype.handleDamage=function(){for(var c=0;c<this.getQuest().getEntities().length;
c++){if(this.questEntityDamageReason.getQuestEntityTeam()!=this.getQuest().getEntities()[c].getTeam()){if(this.getQuest().getEntities()[c].getDestructible()){if(this.getQuest().getEntities()[c].getCbc()!=null){if(this.getQuest().getEntities()[c].getCbc().collidesWith(this.damageCollisionBoxCollection)){if(this.getQuest().getEntities()[c]==this.fireballTargetEntity&&this.targetType==FireballTargetType.TARGET_ENTITY&&this.fireballTargetEntity!=null&&this.fireballTargetEntity.getDead()==false&&this.specialTargetDamage!=null){this.getQuest().getEntities()[c].inflictDamage(this.specialTargetDamage,this.questEntityDamageReason)
}else{this.getQuest().getEntities()[c].inflictDamage(this.damage,this.questEntityDamageReason)
}this.setDead(true)}}}}}};return a})(QuestEntitySpell);var DeveloperMagicBall=(function(b){__extends(a,b);
function a(d,j,i,c,e,f,h,g){b.call(this,d,j,i,c,e,f,h);this.playerTargeted=false;
this.timeToLive=g}a.prototype.update=function(){if(this.playerTargeted==false){if(this.timeToLive<=0){this.setTargetTypeTargetEntity(this.getQuest().getGame().getPlayer(),null,new Pos(2,1))
}else{this.timeToLive-=1}}b.prototype.update.call(this)};a.prototype.willDie=function(){};
return a})(Fireball);var Developer=(function(b){__extends(a,b);function a(c){b.call(this,c);
this.resizeQuest(100,34);this.addPlayerCollisionBoxes(true,true,true,true);this.getGame().getPlayer().loadCandyBoxCharacter(this);
this.getGame().getPlayer().setGlobalPosition(new Pos(0,33));this.configPlayerOrClone(this.getGame().getPlayer());
this.addEntity(this.getGame().getPlayer());this.addDeveloperEntity(new Pos(57,0));
this.getGame().getQuestLog().addMessage(new QuestLogMessage("You're attacking the developer."))
}a.prototype.castPlayerBlackDemons=function(){b.prototype.castPlayerBlackDemons.call(this);
this.developerEntity.playerUsedBlackMagic()};a.prototype.castPlayerBlackhole=function(){b.prototype.castPlayerBlackhole.call(this);
this.developerEntity.playerUsedBlackMagic()};a.prototype.castPlayerEraseMagic=function(){b.prototype.castPlayerEraseMagic.call(this);
this.developerEntity.playerUsedBlackMagic()};a.prototype.castPlayerObsidianWall=function(){b.prototype.castPlayerObsidianWall.call(this);
this.developerEntity.playerUsedBlackMagic()};a.prototype.configPlayerOrClone=function(c){c.setQuestEntityMovement(new QuestEntityMovement(new Pos(1,0)));
c.getQuestEntityMovement().setGravity(true);c.getQuestEntityMovement().setWormsLike(true)
};a.prototype.endQuest=function(c){if(c){this.getGame().getQuestLog().addMessage(new QuestLogMessage("You managed to beat me. Congratulations :)"))
}else{this.getGame().getQuestLog().addMessage(new QuestLogMessage("You died fighting the developer. Eh, he made this game after all!"))
}b.prototype.endQuest.call(this,c)};a.prototype.update=function(){if(this.getQuestEnded()==false){if(this.thePlayerWon()){this.endQuest(true);
return}if(this.getGame().getPlayer().shouldDie()){this.endQuest(false);return}this.updateEntities()
}this.preDraw();this.drawEntities();this.drawAroundQuest();if(this.getQuestEnded()==false){this.addExitQuestButton(new CallbackCollection(this.getGame().goToMainMap.bind(this.getGame())),"buttonExitQuestNoKeeping")
}else{if(this.getQuestEndedAndWeWon()==false){this.addExitQuestButton(new CallbackCollection(this.getGame().goToMainMap.bind(this.getGame())),"buttonExitQuestNoKeepingBecauseLose")
}else{this.addExitQuestButton(new CallbackCollection(this.getGame().goToMainMap.bind(this.getGame())),"buttonExitQuestKeeping")
}}this.postDraw()};a.prototype.addDeveloperEntity=function(c){this.developerEntity=new DeveloperEntity(this,c);
this.developerEntity.setHealthBar(new QuestEntityHealthBar(this.developerEntity,new Pos(100,1),new Pos(0,0),QuestEntityHealthBarPositionType.FIXED_ON_PAGE,true,true,BarType.HEALTH));
this.addEntity(this.developerEntity)};a.prototype.thePlayerWon=function(){if(this.developerEntity.shouldDie()){return true
}return false};return a})(Quest);var Devil=(function(a){__extends(b,a);function b(c,f,e,d){a.call(this,c,f,new Naming("The devil","the devil"),new RenderArea(16,16),new Pos(0,0),new CollisionBoxCollection(new CollisionBox(this,new Pos(4,0),new Pos(8,5))),new QuestEntityMovement());
this.minY=e;this.maxY=d;this.setGoingDown(true);this.flames=[];this.getQuestEntityMovement().setGravity(false);
this.setDestructible(true);this.setMaxHp(666);this.setHp(666);this.setTransparency(new RenderTransparency(" ","%"));
this.reDraw();this.addQuestEntityWeapon(new QuestEntityWeapon(this.getQuest(),this,new Naming("Evilness","evilness"),new CollisionBoxCollection(new CollisionBox(this,new Pos(-1,-1),new Pos(18,18))),500));
this.getLastQuestEntityWeapon().getCloseCombatDelay().setBetweenDelay(0,5)}b.prototype.inflictDamage=function(c,d){a.prototype.inflictDamage.call(this,Math.ceil(c/4),d)
};b.prototype.update=function(){this.handleUpDownMovement();this.handleFireballs();
this.handleFlames();this.reDraw();a.prototype.update.call(this)};b.prototype.willDie=function(){this.getQuest().getGame().getQuestLog().addMessage(new QuestLogMessage(this.getDeathMessage()+" (and found "+Algo.pluralFormat(this.getQuest().foundCandies(1000000)," candy"," candies")+")",this.getQuest().getCandiesFoundMessage()));
this.getQuest().foundGridOrEqItem(new QuestItemFound(this.getQuest(),"gridItemPossessedA","You found a strange stone.","You gain a strange stone."))
};b.prototype.castFireball=function(){var c=new Fireball(this.getQuest(),this.getGlobalPosition().plus(new Pos(3,4)),new Naming("The devil's fireball","the devil's fireball"),new Color(ColorType.DEVIL_FIREBALL),new Pos(2,1),800,this.getAndPossiblyCreateSpellCastingDamageReason(new Naming("The devil's fireball","the devil's fireball")));
if(this.getQuest().getGame().getPlayer().getGlobalPosition().x<this.getGlobalPosition().x){c.setTargetTypeNoTarget(new Pos(-Random.between(3,7),0))
}else{c.setTargetTypeTargetEntity(this.getQuest().getGame().getPlayer(),null,new Pos(1,1))
}this.getQuest().addEntity(c)};b.prototype.handleFireballs=function(){if(Random.oneChanceOutOf(2)){this.castFireball()
}};b.prototype.handleFlames=function(){var f=0;var d=15;var e=6;var c=15;var n=150;
var m;var l;for(var h=0;h<n;h++){if(h>=this.flames.length||Random.oneChanceOutOf(7)){l=null;
for(var g=e;g<c;g++){if(Random.oneChanceOutOf(3)){l=g;break}}if(l==null){l=c}m=Random.between(f+Math.floor((15-l)/3),d-Math.floor((15-l)/3));
var k=new CauldronFlame(new Pos(m,l),Random.fromArray([")","(","`","'",".",";",":",",","-","/","\\","|",'"',"d","e","v","i","l"]));
if(h>=this.flames.length){this.flames.push(k)}else{this.flames[h]=k}}}};b.prototype.handleUpDownMovement=function(){if(this.goingDown&&(this.getGlobalPosition().y>=this.maxY||this.checkCollision(new Pos(0,1)))){this.setGoingDown(false)
}else{if(this.goingDown==false&&(this.getGlobalPosition().y<=this.minY||this.checkCollision(new Pos(0,-1)))){this.setGoingDown(true)
}}};b.prototype.reDraw=function(){this.getRenderArea().resetAllButSize();this.getRenderArea().drawArray(Database.getAscii("places/quests/hell/devil"),4,0);
for(var c=0;c<this.flames.length;c++){this.flames[c].draw(this.getRenderArea(),0,0)
}};b.prototype.setGoingDown=function(c){this.goingDown=c;if(this.goingDown){this.getQuestEntityMovement().setOffset(new Pos(0,1))
}else{this.getQuestEntityMovement().setOffset(new Pos(0,-1))}};return b})(QuestEntity);
var DragonStep;(function(a){a[a.PLAYER_MOVING=0]="PLAYER_MOVING";a[a.PLAYER_ATTACKING=1]="PLAYER_ATTACKING";
a[a.STOP_TICKLING=2]="STOP_TICKLING";a[a.TALKING=3]="TALKING";a[a.TALKING_CHALLENGE=4]="TALKING_CHALLENGE";
a[a.TALKING_FAME=5]="TALKING_FAME";a[a.TALKING_CANDIES=6]="TALKING_CANDIES"})(DragonStep||(DragonStep={}));
Saving.registerBool("dragonDone",false);Saving.registerBool("dragonUnlockedCyclops",false);
var Dragon=(function(b){__extends(a,b);function a(c){b.call(this,c);this.renderArea=new RenderArea();
if(Saving.loadBool("dragonDone")==false){this.step=DragonStep.PLAYER_MOVING;this.playerPos=0
}else{this.step=DragonStep.TALKING;this.playerPos=60}this.timerIntervalID=setInterval(this.actionInterval.bind(this),100);
this.renderArea.resizeFromArray(Database.getAscii("places/dragonFoot"),0,3);this.update()
}a.prototype.getRenderArea=function(){return this.renderArea};a.prototype.willStopBeingDisplayed=function(){clearInterval(this.timerIntervalID)
};a.prototype.actionInterval=function(){switch(this.step){case DragonStep.PLAYER_MOVING:this.playerPos+=1;
if(this.playerPos>=60){this.step=DragonStep.PLAYER_ATTACKING;this.playerAttackingCountdown=40
}this.update();this.getGame().updatePlace();break;case DragonStep.PLAYER_ATTACKING:this.playerAttackingCountdown-=1;
if(this.playerAttackingCountdown<0){this.step=DragonStep.STOP_TICKLING}this.update();
this.getGame().updatePlace();break}};a.prototype.chooseCandies=function(){this.step=DragonStep.TALKING_CANDIES;
Saving.saveBool("dragonUnlockedCyclops",true);this.update();this.getGame().updatePlace()
};a.prototype.chooseChallenge=function(){this.step=DragonStep.TALKING_CHALLENGE;this.update();
this.getGame().updatePlace()};a.prototype.chooseFame=function(){this.step=DragonStep.TALKING_FAME;
this.update();this.getGame().updatePlace()};a.prototype.drawPlayer=function(c,d){if(d===void 0){d=26
}this.renderArea.drawString("\\o/",c,d)};a.prototype.goToDeveloper=function(){this.getGame().setPlace(new Developer(this.getGame()))
};a.prototype.goToHell=function(){this.getGame().setPlace(new Hell(this.getGame()))
};a.prototype.okayStopTickling=function(){if(this.step==DragonStep.STOP_TICKLING){this.step=DragonStep.TALKING;
Saving.saveBool("dragonDone",true);this.update();this.getGame().updatePlace()}};a.prototype.update=function(){this.renderArea.resetAllButSize();
this.addBackToTheCastleButton(this.renderArea,"dragonBackToTheCastleButton");this.renderArea.drawArray(Database.getAscii("places/dragonFoot"),0,3);
switch(this.step){case DragonStep.PLAYER_MOVING:this.drawPlayer(this.playerPos,20+(this.playerPos<21?(Math.floor(this.playerPos/3)):6));
break;case DragonStep.PLAYER_ATTACKING:this.drawPlayer(this.playerPos);this.renderArea.drawString("|             A dragon foot : so much hp/so much hp             |",45,11);
this.renderArea.addBackgroundColor(46,109,11,new Color(ColorType.HEALTH_GREEN));break;
case DragonStep.STOP_TICKLING:this.drawPlayer(this.playerPos);this.renderArea.drawSpeech(Database.getText("dragonStopTickling"),5,50,78,"dragonStopTicklingSpeech",Database.getTranslatedText("dragonStopTickling"));
this.renderArea.addAsciiRealButton(Database.getText("dragonStopTicklingButton"),50,9,"dragonStopTicklingButton",Database.getTranslatedText("dragonStopTicklingButton"),true);
this.renderArea.addLinkCall(".dragonStopTicklingButton",new CallbackCollection(this.okayStopTickling.bind(this)));
break;case DragonStep.TALKING:this.drawPlayer(this.playerPos);this.renderArea.drawSpeech(Database.getText("dragonTalking"),5,50,78,"dragonTalkingSpeech",Database.getTranslatedText("dragonTalking"));
this.renderArea.addAsciiRealButton(Database.getText("dragonTalkingChallengeButton"),82,5,"dragonTalkingChallengeButton",Database.getTranslatedText("dragonTalkingChallengeButton"));
this.renderArea.addLinkCall(".dragonTalkingChallengeButton",new CallbackCollection(this.chooseChallenge.bind(this)));
this.renderArea.addAsciiRealButton(Database.getText("dragonTalkingFameButton"),82,7,"dragonTalkingFameButton",Database.getTranslatedText("dragonTalkingFameButton"));
this.renderArea.addLinkCall(".dragonTalkingFameButton",new CallbackCollection(this.chooseFame.bind(this)));
this.renderArea.addAsciiRealButton(Database.getText("dragonTalkingCandiesButton"),82,9,"dragonTalkingCandiesButton",Database.getTranslatedText("dragonTalkingCandiesButton"));
this.renderArea.addLinkCall(".dragonTalkingCandiesButton",new CallbackCollection(this.chooseCandies.bind(this)));
break;case DragonStep.TALKING_CHALLENGE:this.drawPlayer(this.playerPos);this.renderArea.drawSpeech(Database.getText("dragonTalkingChallengeSpeech"),5,50,78,"dragonTalkingChallengeSpeech",Database.getTranslatedText("dragonTalkingChallengeSpeech"));
this.renderArea.addAsciiRealButton(Database.getText("dragonTalkingChallengeAnswer"),82,5,"dragonTalkingChallengeAnswer",Database.getTranslatedText("dragonTalkingChallengeAnswer"));
this.renderArea.addLinkCall(".dragonTalkingChallengeAnswer",new CallbackCollection(this.goToHell.bind(this)));
break;case DragonStep.TALKING_FAME:this.drawPlayer(this.playerPos);this.renderArea.drawSpeech(Database.getText("dragonTalkingFameSpeech"),5,50,78,"dragonTalkingFameSpeech",Database.getTranslatedText("dragonTalkingFameSpeech"));
this.renderArea.addAsciiRealButton(Database.getText("dragonTalkingFameAnswer"),82,7,"dragonTalkingFameAnswer",Database.getTranslatedText("dragonTalkingFameAnswer"));
this.renderArea.addLinkCall(".dragonTalkingFameAnswer",new CallbackCollection(this.goToDeveloper.bind(this)));
break;case DragonStep.TALKING_CANDIES:this.drawPlayer(this.playerPos);this.renderArea.drawSpeech(Database.getText("dragonTalkingCandiesSpeech"),5,50,78,"dragonTalkingCandiesSpeech",Database.getTranslatedText("dragonTalkingCandiesSpeech"));
this.renderArea.addAsciiRealButton(Database.getText("dragonTalkingCandiesAnswer"),82,9,"dragonTalkingCandiesAnswer",Database.getTranslatedText("dragonTalkingCandiesAnswer"));
this.renderArea.addLinkCall(".dragonTalkingCandiesAnswer",new CallbackCollection(this.getGame().goToCastle.bind(this.getGame())));
break}};return a})(CastleRoom);var Egg=(function(b){__extends(a,b);function a(d,e,c){b.call(this,d,e,new Naming("An egg","an egg"),new RenderArea(2,1),new Pos(0,0),new CollisionBoxCollection(new CollisionBox(this,new Pos(0,0),new Pos(2,1))),new QuestEntityMovement());
this.callbackWhenDying=c;this.getQuestEntityMovement().setGravity(true);this.setDestructible(true);
this.setMaxHp(4);this.setHp(4);this.getRenderArea().drawArray(Database.getAscii("places/quests/castle/room3/egg"))
}a.prototype.willDie=function(){this.getQuest().getGame().getQuestLog().addMessage(new QuestLogMessage("An egg was destroyed."));
this.callbackWhenDying.fire()};return a})(QuestEntity);var EnchantedKnightBodyArmour=(function(b){__extends(a,b);
function a(){b.call(this,"eqItemBodyArmoursEnchantedKnightBodyArmour","eqItemBodyArmoursEnchantedKnightBodyArmourName","eqItemBodyArmoursEnchantedKnightBodyArmourDescription","eqItems/bodyArmours/enchantedKnightBodyArmour")
}a.prototype.getSpecialAbility=function(){return"Dam. taken reduced by 80%, dam. inflicted divided by 2 (enchanted knight body armour)"
};a.prototype.hit=function(e,c,d,f,g){return Math.ceil(f/2)};a.prototype.inflictDamage=function(d,c,e,f){return Math.ceil(e-e*80/100)
};return a})(EqItem);var MonkeyWizardStaffMotherClass=(function(a){__extends(b,a);
function b(){a.apply(this,arguments)}b.prototype.castPurpleBall=function(d,c,g,e){if(e===void 0){e=new Pos(2,1)
}var f=new Fireball(c,d.getSpellCastingPosition(),new Naming("An magical purple ball","a magical purple ball"),new Color(ColorType.MONKEY_WIZARD_BALL),new Pos(2,1),15,d.getAndPossiblyCreateSpellCastingDamageReason(new Naming("An magical purple ball","a magical purple ball")));
f.setTargetTypeTargetEntity(g,null,e);c.addEntity(f)};b.prototype.getRandomEnemy=function(e,c){var f=[];
for(var d=0;d<c.getEntities().length;d++){if(c.getEntities()[d].getDestructible()&&c.getEntities()[d].getTeam()!=e.getTeam()){f.push(d)
}}if(f.length>0){return c.getEntities()[f[Random.between(0,f.length-1)]]}else{return null
}};return b})(EqItem);var EnchantedMonkeyWizardStaff=(function(b){__extends(a,b);
function a(){b.call(this,"eqItemWeaponEnchantedMonkeyWizardStaff","eqItemWeaponEnchantedMonkeyWizardStaffName","eqItemWeaponEnchantedMonkeyWizardStaffDescription","eqItems/weapons/enchantedMonkeyWizardStaff");
this.timer=0}a.prototype.getQuestEntityWeapon=function(c,e){var d=new QuestEntityWeapon(c,e,new Naming("The monkey wizard staff (enchanted)","the monkey wizard staff (enchanted)"),e.getClassicCollisionBoxCollection(),2);
d.getCloseCombatDelay().setFixedDelay(0);return d};a.prototype.update=function(d,c){if(this.timer<4){this.timer+=1
}else{this.timer=0;var e=this.getRandomEnemy(d,c);if(e!=null){this.castPurpleBall(d,c,e)
}}};return a})(MonkeyWizardStaffMotherClass);var EnchantmentItem=(function(){function a(b,d,c){this.game=b;
this.savingName=d;this.type=c}a.prototype.getText=function(){var b=Database.getText(this.game.getEqItemFromEqItemType(this.savingName,this.type).getDatabaseName());
if(Database.isTranslated()){b+=" ("+Database.getTranslatedText(this.game.getEqItemFromEqItemType(this.savingName,this.type).getDatabaseName())+")"
}return b};a.prototype.isPossessed=function(){return Saving.loadBool(this.savingName)
};a.prototype.unequipIfEquipped=function(){this.game.unequipIfEquipped(this.savingName,this.type)
};a.prototype.getSavingName=function(){return this.savingName};return a})();var Enchantment=(function(){function a(b,c){this.beforeItem=b;
this.afterItem=c}a.prototype.enchant=function(){this.beforeItem.unequipIfEquipped();
Saving.saveBool(this.beforeItem.getSavingName(),false);Saving.saveBool(this.afterItem.getSavingName(),true)
};a.prototype.isPossible=function(){if(this.beforeItem.isPossessed()==true&&this.afterItem.isPossessed()==false){return true
}return false};a.prototype.getAfterItem=function(){return this.afterItem};a.prototype.getBeforeItem=function(){return this.beforeItem
};return a})();var EnigmaAnswer=(function(){function a(){}a.prototype.isRight=function(b){return false
};return a})();var EnigmaAnswerCandies=(function(b){__extends(a,b);function a(c){b.call(this);
this.game=c}a.prototype.isRight=function(c){if(Algo.simplifyString(c)==this.game.getCandies().getCurrent().toString()||Algo.simplifyString(c)==(this.game.getCandies().getCurrent()+1).toString()||Algo.simplifyString(c)==(this.game.getCandies().getCurrent()+2).toString()||Algo.simplifyString(c)==(this.game.getCandies().getCurrent()+3).toString()||Algo.simplifyString(c)==(this.game.getCandies().getCurrent()-1).toString()||Algo.simplifyString(c)==(this.game.getCandies().getCurrent()-2).toString()||Algo.simplifyString(c)==(this.game.getCandies().getCurrent()-3).toString()){return true
}return false};return a})(EnigmaAnswer);var EnigmaAnswerStrings=(function(b){__extends(a,b);
function a(c){b.call(this);this.validStrings=c}a.prototype.isRight=function(d){for(var c=0;
c<this.validStrings.length;c++){if(Algo.simplifyString(d)==this.validStrings[c]){return true
}}return false};return a})(EnigmaAnswer);var EqItemType;(function(a){a[a.WEAPON=0]="WEAPON";
a[a.HAT=1]="HAT";a[a.BODYARMOUR=2]="BODYARMOUR";a[a.GLOVES=3]="GLOVES";a[a.BOOTS=4]="BOOTS"
})(EqItemType||(EqItemType={}));var GridItem=(function(b){__extends(a,b);function a(g,f,e,d,c){b.call(this,g,f,e,d);
this.position=c}a.prototype.update=function(d,c){};a.prototype.getPosition=function(){return this.position
};return a})(Item);var Feather=(function(b){__extends(a,b);function a(){b.apply(this,arguments)
}a.prototype.getDatabaseDescriptionName=function(){if(Saving.loadBool("gridItemPossessedPogoStick")==false){return"gridItemFeatherDescriptionNoPogoStick"
}return b.prototype.getDatabaseDescriptionName.call(this)};return a})(GridItem);var House=(function(b){__extends(a,b);
function a(c){b.call(this,c)}a.prototype.addBackToTheVillageButton=function(d,c){this.addBackToButton(d,new CallbackCollection(this.getGame().goToVillage.bind(this.getGame())),Database.getText("buttonBackToTheVillage"),Database.getTranslatedText("buttonBackToTheVillage"),c)
};return a})(Place);var FifthHouse=(function(a){__extends(b,a);function b(c){a.call(this,c);
this.renderArea=new RenderArea();this.renderArea.resizeFromArray(Database.getAscii("places/village/fifthHouse"),0,3);
this.update()}b.prototype.getRenderArea=function(){return this.renderArea};b.prototype.willBeDisplayed=function(){this.update()
};b.prototype.beginQuest=function(){this.getGame().setPlace(new Cellar(this.getGame()))
};b.prototype.update=function(){this.renderArea.resetAllButSize();this.addBackToTheVillageButton(this.renderArea,"fifthHouseBackToTheVillageButton");
this.renderArea.drawArray(Database.getAscii("places/village/fifthHouse"),0,3);if(Saving.loadBool("cellarDone")==false){if(this.getGame().getSelectedEqItems()["weapon"]!=null){this.renderArea.drawSpeech(Database.getText("mapVillageFifthHouseWeaponSpeech"),6,44,67,"fifthHouseSpeech",Database.getTranslatedText("mapVillageFifthHouseWeaponSpeech"));
this.renderArea.addAsciiRealButton(Database.getText("mapVillageFifthHouseAgree"),69,8,"mapVillageFifthHouseAgreeButton",Database.getTranslatedText("mapVillageFifthHouseAgree"),true);
this.renderArea.addLinkCall(".mapVillageFifthHouseAgreeButton",new CallbackCollection(this.beginQuest.bind(this)))
}else{this.renderArea.drawSpeech(Database.getText("mapVillageFifthHouseNoWeaponSpeech"),6,44,67,"fifthHouseSpeech",Database.getTranslatedText("mapVillageFifthHouseNoWeaponSpeech"))
}}else{this.renderArea.drawSpeech(Database.getText("mapVillageFifthHouseCellarDone"),6,44,82,"fifthHouseSpeech",Database.getTranslatedText("mapVillageFifthHouseCellarDone"));
this.renderArea.drawString("U",52,17)}};return b})(House);var FireballTargetType;
(function(a){a[a.NO_TARGET=0]="NO_TARGET";a[a.TARGET_ENTITY=1]="TARGET_ENTITY";a[a.TARGET_STICK_ON_ENTITY=2]="TARGET_STICK_ON_ENTITY";
a[a.TARGET_POSITION=3]="TARGET_POSITION"})(FireballTargetType||(FireballTargetType={}));
var Forest=(function(a){__extends(b,a);function b(c){a.call(this,c);this.timeSinceLastWolfAdding=0;
this.timeSinceLastTreeSpiritAdding=40;this.groundYPosition=20;this.mosquitoTimer=250;
this.resizeQuest(294,this.groundYPosition+2);this.addPlayerCollisionBoxes(true,false,true,true);
this.getGame().getPlayer().loadCandyBoxCharacter(this);this.getGame().getPlayer().setGlobalPosition(new Pos(0,this.groundYPosition));
this.configPlayerOrClone(this.getGame().getPlayer());this.addEntity(this.getGame().getPlayer());
this.addGround();for(var d=0;d<10;d++){this.addWolf(Random.between(80,280))}this.getGame().getQuestLog().addMessage(new QuestLogMessage("You enter the forest."))
}b.prototype.castPlayerTeleport=function(){a.prototype.castPlayerTeleport.call(this,new Pos(0,this.groundYPosition),new Pos(10,1))
};b.prototype.configPlayerOrClone=function(c){c.setQuestEntityMovement(new QuestEntityMovement(new Pos(1,0)));
c.getQuestEntityMovement().setGravity(true);c.getQuestEntityMovement().setWormsLike(false)
};b.prototype.endQuest=function(c){if(c){this.getGame().getQuestLog().addMessage(new QuestLogMessage("You made your way through the forest!"));
Saving.saveBool("mainMapDoneForest",true)}else{this.getGame().getQuestLog().addMessage(new QuestLogMessage("You died in the forest. The tree's leaves should soon be covering your body."))
}a.prototype.endQuest.call(this,c)};b.prototype.update=function(){if(this.getQuestEnded()==false){if(this.thePlayerWon()){this.endQuest(true);
return}if(this.getGame().getPlayer().shouldDie()){this.endQuest(false);return}this.monstersHandling();
this.updateEntities()}this.preDraw();this.getRenderArea().drawArray(Database.getAscii("places/quests/forest/background"),this.getRealQuestPosition().x,this.getRealQuestPosition().y);
this.getRenderArea().drawArray(Database.getAscii("places/quests/forest/background"),this.getRealQuestPosition().x+98,this.getRealQuestPosition().y);
this.getRenderArea().drawArray(Database.getAscii("places/quests/forest/background"),this.getRealQuestPosition().x+98*2,this.getRealQuestPosition().y);
this.drawEntities();this.drawAroundQuest();if(this.getQuestEnded()==false){this.addExitQuestButton(new CallbackCollection(this.getGame().goToMainMap.bind(this.getGame())),"buttonExitQuestNoKeeping")
}else{if(this.getQuestEndedAndWeWon()==false){this.addExitQuestButton(new CallbackCollection(this.getGame().goToMainMap.bind(this.getGame())),"buttonExitQuestNoKeepingBecauseLose")
}else{this.addExitQuestButton(new CallbackCollection(this.getGame().goToMainMap.bind(this.getGame())),"buttonExitQuestKeeping")
}}this.postDraw()};b.prototype.addGround=function(){var c=new Wall(this,new Pos(0,0));
c.addBox(new Pos(0,this.groundYPosition+1),new Pos(350,1));this.addEntity(c)};b.prototype.addMosquito=function(){return this.addEntity(new Mosquito(this,new Pos(0,this.groundYPosition-Random.between(3,7)),this.groundYPosition))
};b.prototype.addTreeSpirit=function(d){if(d===void 0){d=294}var c=new TreeSpirit(this,new Pos(d,this.groundYPosition-4),this.groundYPosition);
c.setHealthBar(new QuestEntityHealthBar(c,new Pos(5,1)));return this.addEntity(c)
};b.prototype.addWolf=function(d){if(d===void 0){d=294}var c=new Wolf(this,new Pos(d,this.groundYPosition-2));
c.setHealthBar(new QuestEntityHealthBar(c,new Pos(7,1)));return this.addEntity(c)
};b.prototype.monstersHandling=function(){if(this.timeSinceLastTreeSpiritAdding>70&&Random.flipACoin()){this.addTreeSpirit();
this.timeSinceLastTreeSpiritAdding=0}else{this.timeSinceLastTreeSpiritAdding+=1}if(this.timeSinceLastWolfAdding>30&&Random.oneChanceOutOf(5)){this.addWolf();
this.timeSinceLastWolfAdding=0}else{this.timeSinceLastWolfAdding+=1}if(this.mosquitoTimer<=0){this.addMosquito();
this.mosquitoTimer=Random.between(5,10)}else{this.mosquitoTimer-=1}};b.prototype.thePlayerWon=function(){if(this.getGame().getPlayer().getGlobalPosition().x>=294){return true
}return false};return b})(Quest);Saving.registerBool("forgeFoundLollipop",false);
Saving.registerBool("forgeBoughtWoodenSword",false);Saving.registerBool("forgeBoughtIronAxe",false);
Saving.registerBool("forgeBoughtPolishedSilverSword",false);Saving.registerBool("forgeBoughtLightweightBodyArmour",false);
Saving.registerBool("forgeBoughtScythe",false);var Forge=(function(a){__extends(b,a);
function b(c){a.call(this,c);this.renderArea=new RenderArea();if((Saving.loadBool("forgeBoughtWoodenSword")==false||Saving.loadBool("forgeBoughtIronAxe")==false||Saving.loadBool("forgeBoughtPolishedSilverSword")==false)||(Saving.loadBool("forgeBoughtLightweightBodyArmour")==false&&Saving.loadBool("mainMapDoneCaveEntrance")==true)||(Saving.loadBool("forgeBoughtScythe")==false&&Saving.loadBool("dragonDone")==true)){this.currentSpeech="mapVillageForgeIntroductionSpeech"
}else{this.currentSpeech="mapVillageForgeIntroductionSpeechNoMoreToSell"}this.renderArea.resizeFromArray(Database.getAscii("places/village/forge"),0,3);
this.update()}b.prototype.getRenderArea=function(){return this.renderArea};b.prototype.clickedBuyIronAxeButton=function(){if(this.getGame().getCandies().getCurrent()>=400){this.getGame().getCandies().add(-400);
Saving.saveBool("forgeBoughtIronAxe",true);this.getGame().gainItem("eqItemWeaponIronAxe");
this.currentSpeech="mapVillageForgeBuyIronAxeSpeech";this.update();this.getGame().updatePlace()
}};b.prototype.clickedBuyLightweightBodyArmourButton=function(){if(this.getGame().getCandies().getCurrent()>=15000){this.getGame().getCandies().add(-15000);
Saving.saveBool("forgeBoughtLightweightBodyArmour",true);this.getGame().gainItem("eqItemBodyArmoursLightweightBodyArmour");
this.currentSpeech="mapVillageForgeBuyLightweightBodyArmourSpeech";this.update();
this.getGame().updatePlace()}};b.prototype.clickedBuyPolishedSilverSwordButton=function(){if(this.getGame().getCandies().getCurrent()>=2000){this.getGame().getCandies().add(-2000);
Saving.saveBool("forgeBoughtPolishedSilverSword",true);this.getGame().gainItem("eqItemWeaponPolishedSilverSword");
this.currentSpeech="mapVillageForgeBuyPolishedSilverSwordSpeech";this.update();this.getGame().updatePlace()
}};b.prototype.clickedBuyScytheButton=function(){if(this.getGame().getCandies().getCurrent()>=5000000){this.getGame().getCandies().add(-5000000);
Saving.saveBool("forgeBoughtScythe",true);this.getGame().gainItem("eqItemWeaponScythe");
this.currentSpeech="mapVillageForgeBuyScytheSpeech";this.update();this.getGame().updatePlace()
}};b.prototype.clickedBuyWoodenSwordButton=function(){if(this.getGame().getCandies().getCurrent()>=150){this.getGame().getCandies().add(-150);
Saving.saveBool("forgeBoughtWoodenSword",true);this.getGame().gainItem("eqItemWeaponWoodenSword");
this.currentSpeech="mapVillageForgeBuyWoodenSwordSpeech";Saving.saveBool("statusBarUnlockedInventory",true);
this.getGame().updateStatusBar(true);this.getGame().getStatusBar().selectTabByType(StatusBarTabType.MAP);
this.update();this.getGame().updatePlace()}};b.prototype.drawLollipopStuff=function(c,d){if(Saving.loadBool("forgeFoundLollipop")==false){this.renderArea.addAsciiButton(c,c+5,d,"forgeLollipopButton");
this.renderArea.addLinkCall(".forgeLollipopButton",new CallbackCollection(this.takeLollipop.bind(this)))
}else{this.renderArea.drawString("      ",c,d)}};b.prototype.takeLollipop=function(){if(Saving.loadBool("forgeFoundLollipop")==false){this.getGame().getLollipops().add(1);
Saving.saveBool("forgeFoundLollipop",true);this.update();this.getGame().updatePlace()
}};b.prototype.update=function(){this.renderArea.resetAllButSize();this.addBackToTheVillageButton(this.renderArea,"forgeBackToTheVillageButton");
this.renderArea.drawArray(Database.getAscii("places/village/forge"),0,3);this.drawLollipopStuff(18,15);
this.renderArea.drawSpeech(Database.getText(this.currentSpeech),13,44,67,"forgeSpeech",Database.getTranslatedText(this.currentSpeech));
if(Saving.loadBool("forgeBoughtWoodenSword")==false&&Saving.loadBool("eqItemWeaponWoodenSword")==false){this.renderArea.addAsciiRealButton(Database.getText("mapVillageForgeBuyWoodenSwordButton"),8,35,"mapVillageForgeBuyWoodenSwordButton",Database.getTranslatedText("mapVillageForgeBuyWoodenSwordButton"),true,-1,null,false);
this.renderArea.addLinkCall(".mapVillageForgeBuyWoodenSwordButton",new CallbackCollection(this.clickedBuyWoodenSwordButton.bind(this)))
}else{if(Saving.loadBool("forgeBoughtWoodenSword")==true&&Saving.loadBool("forgeBoughtIronAxe")==false&&Saving.loadBool("eqItemWeaponIronAxe")==false){this.renderArea.addAsciiRealButton(Database.getText("mapVillageForgeBuyIronAxeButton"),8,35,"mapVillageForgeBuyIronAxeButton",Database.getTranslatedText("mapVillageForgeBuyIronAxeButton"),true,-1,null,false);
this.renderArea.addLinkCall(".mapVillageForgeBuyIronAxeButton",new CallbackCollection(this.clickedBuyIronAxeButton.bind(this)))
}else{if(Saving.loadBool("forgeBoughtIronAxe")==true&&Saving.loadBool("forgeBoughtPolishedSilverSword")==false&&Saving.loadBool("eqItemWeaponPolishedSilverSword")==false){this.renderArea.addAsciiRealButton(Database.getText("mapVillageForgeBuyPolishedSilverSwordButton"),8,35,"mapVillageForgeBuyPolishedSilverSwordButton",Database.getTranslatedText("mapVillageForgeBuyPolishedSilverSwordButton"),true,-1,null,false);
this.renderArea.addLinkCall(".mapVillageForgeBuyPolishedSilverSwordButton",new CallbackCollection(this.clickedBuyPolishedSilverSwordButton.bind(this)))
}else{if(Saving.loadBool("forgeBoughtPolishedSilverSword")==true&&Saving.loadBool("forgeBoughtLightweightBodyArmour")==false&&Saving.loadBool("eqItemBodyArmoursLightweightBodyArmour")==false&&Saving.loadBool("mainMapDoneCaveEntrance")){this.renderArea.addAsciiRealButton(Database.getText("mapVillageForgeBuyLightweightBodyArmourButton"),8,35,"mapVillageForgeBuyLightweightBodyArmourButton",Database.getTranslatedText("mapVillageForgeBuyLightweightBodyArmourButton"),true,-1,null,false);
this.renderArea.addLinkCall(".mapVillageForgeBuyLightweightBodyArmourButton",new CallbackCollection(this.clickedBuyLightweightBodyArmourButton.bind(this)))
}else{if(Saving.loadBool("forgeBoughtLightweightBodyArmour")==true&&Saving.loadBool("forgeBoughtScythe")==false&&Saving.loadBool("eqItemWeaponScythe")==false&&Saving.loadBool("dragonDone")){this.renderArea.addAsciiRealButton(Database.getText("mapVillageForgeBuyScytheButton"),8,35,"mapVillageForgeBuyScytheButton",Database.getTranslatedText("mapVillageForgeBuyScytheButton"),true,-1,null,false);
this.renderArea.addLinkCall(".mapVillageForgeBuyScytheButton",new CallbackCollection(this.clickedBuyScytheButton.bind(this)))
}}}}}};return b})(House);Saving.registerBool("fortressRoom1ChestFound",false);var FortressRoom1=(function(a){__extends(b,a);
function b(c){a.call(this,c);this.chestOpened=false;this.resizeQuest(208,31);this.addPlayerCollisionBoxes(true,true,true,true);
this.getGame().getPlayer().loadCandyBoxCharacter(this);this.getGame().getPlayer().setGlobalPosition(new Pos(0,7));
this.configPlayerOrClone(this.getGame().getPlayer());this.addEntity(this.getGame().getPlayer());
this.addWalls();this.addSpikes(new Spikes(this,new Pos(16,30),18));this.addSpikes(new Spikes(this,new Pos(43,30),4));
this.addSpikes(new Spikes(this,new Pos(53,30),4));this.addSpikes(new Spikes(this,new Pos(85,30),4));
this.addSpikes(new Spikes(this,new Pos(161,30),12));this.addSpikes(new Spikes(this,new Pos(180,30),4));
this.addSpikes(new Spikes(this,new Pos(117,9),4));this.addSpikes(new Spikes(this,new Pos(121,14),4));
this.addSpikes(new Spikes(this,new Pos(125,19),4));this.addSpikes(new Spikes(this,new Pos(129,24),4));
this.addXinopherydon(new Pos(181,2));this.addEntity(new Chest(this,new Pos(203,24),false,new CallbackCollection(this.openChest.bind(this)),Saving.loadBool("fortressRoom1ChestFound")));
this.getGame().getQuestLog().addMessage(new QuestLogMessage("You enter the first room. It seems tricky."))
}b.prototype.castPlayerTeleport=function(){a.prototype.castPlayerTeleport.call(this,new Pos(2,3),new Pos(1,1))
};b.prototype.configPlayerOrClone=function(c){c.setQuestEntityMovement(new QuestEntityMovement(new Pos(1,0)));
c.getQuestEntityMovement().setGravity(true);c.getQuestEntityMovement().setWormsLike(true)
};b.prototype.endQuest=function(c){if(c){this.getGame().getQuestLog().addMessage(new QuestLogMessage("You exit the room."))
}a.prototype.endQuest.call(this,c);if(c&&this.chestOpened){Saving.saveBool("fortressRoom1ChestFound",true)
}};b.prototype.update=function(){if(this.getQuestEnded()==false){if(this.getGame().getPlayer().shouldDie()){this.endQuest(true);
return}this.updateEntities()}this.preDraw();this.getRenderArea().drawArray(Database.getAscii("places/quests/fortress/room1"),this.getRealQuestPosition().x,this.getRealQuestPosition().y);
this.drawEntities();this.drawAroundQuest();this.addExitQuestButton(new CallbackCollection(this.endQuest.bind(this,true),this.getGame().goToInsideFortress.bind(this.getGame())),"buttonExitQuestKeeping");
this.postDraw()};b.prototype.addSpikes=function(c){this.addEntity(c)};b.prototype.addWalls=function(){var c=new Wall(this,new Pos(0,0));
c.addBox(new Pos(0,0),new Pos(208,2));c.addBox(new Pos(0,8),new Pos(15,1));c.addBox(new Pos(0,9),new Pos(16,22));
c.addBox(new Pos(34,2),new Pos(5,11));c.addBox(new Pos(34,15),new Pos(9,16));c.addBox(new Pos(47,13),new Pos(6,18));
c.addBox(new Pos(57,11),new Pos(6,20));c.addBox(new Pos(63,19),new Pos(22,12));c.addBox(new Pos(66,11),new Pos(4,7));
c.addBox(new Pos(74,11),new Pos(3,7));c.addBox(new Pos(80,11),new Pos(5,7));c.addBox(new Pos(89,10),new Pos(14,5));
c.addBox(new Pos(89,15),new Pos(20,5));c.addBox(new Pos(89,20),new Pos(26,5));c.addBox(new Pos(89,25),new Pos(72,6));
c.addBox(new Pos(106,10),new Pos(37,2));c.addBox(new Pos(112,15),new Pos(31,2));c.addBox(new Pos(118,20),new Pos(25,2));
c.addBox(new Pos(200,2),new Pos(8,1));c.addBox(new Pos(201,3),new Pos(7,4));c.addBox(new Pos(200,7),new Pos(8,1));
c.addBox(new Pos(157,8),new Pos(51,10));c.addBox(new Pos(157,18),new Pos(25,1));c.addBox(new Pos(157,19),new Pos(24,1));
c.addBox(new Pos(157,20),new Pos(23,1));c.addBox(new Pos(157,21),new Pos(22,1));c.addBox(new Pos(173,25),new Pos(7,6));
c.addBox(new Pos(184,23),new Pos(3,2));c.addBox(new Pos(207,18),new Pos(1,6));c.addBox(new Pos(206,24),new Pos(2,1));
c.addBox(new Pos(184,25),new Pos(24,6));this.addEntity(c)};b.prototype.addXinopherydon=function(d){var c=new Xinopherydon(this,d);
c.setHealthBar(new QuestEntityHealthBar(c,new Pos(41,1),new Pos(158,2),QuestEntityHealthBarPositionType.FIXED,false,true,BarType.HEALTH));
this.addEntity(c)};b.prototype.openChest=function(){this.chestOpened=true;this.foundGridOrEqItem(new QuestItemFound(this,"gridItemPossessedUnicornHorn","You opened a chest and found a unicorn horn!","You gain a unicorn horn."))
};return b})(Quest);var FortressRoom2=(function(b){__extends(a,b);function a(c){b.call(this,c);
this.resizeQuest(100,17);this.addPlayerCollisionBoxes(true,true,true,true);this.getGame().getPlayer().loadCandyBoxCharacter(this);
this.getGame().getPlayer().setGlobalPosition(new Pos(0,13));this.configPlayerOrClone(this.getGame().getPlayer());
this.addEntity(this.getGame().getPlayer());this.addWalls();this.addTeapot();this.getGame().getQuestLog().addMessage(new QuestLogMessage("You enter the second room. There's a giant teapot in the center."))
}a.prototype.configPlayerOrClone=function(c){c.setQuestEntityMovement(new QuestEntityMovement(new Pos(1,0)));
c.getQuestEntityMovement().setGravity(true);c.getQuestEntityMovement().setWormsLike(true)
};a.prototype.endQuest=function(c){if(c){this.getGame().getQuestLog().addMessage(new QuestLogMessage("You exit the room."))
}b.prototype.endQuest.call(this,c)};a.prototype.update=function(){if(this.getQuestEnded()==false){if(this.getGame().getPlayer().shouldDie()){this.endQuest(true);
return}this.updateEntities()}this.preDraw();this.getRenderArea().drawArray(Database.getAscii("places/quests/fortress/room2"),this.getRealQuestPosition().x,this.getRealQuestPosition().y);
this.drawEntities();this.drawAroundQuest();this.addExitQuestButton(new CallbackCollection(this.endQuest.bind(this,true),this.getGame().goToInsideFortress.bind(this.getGame())),"buttonExitQuestKeeping");
this.postDraw()};a.prototype.addWalls=function(){var c=new Wall(this,new Pos(0,0));
c.addBox(new Pos(0,0),new Pos(100,4));c.addBox(new Pos(96,4),new Pos(4,1));c.addBox(new Pos(97,5),new Pos(3,8));
c.addBox(new Pos(96,13),new Pos(4,1));c.addBox(new Pos(0,14),new Pos(20,1));c.addBox(new Pos(79,14),new Pos(21,1));
c.addBox(new Pos(0,15),new Pos(37,1));c.addBox(new Pos(59,15),new Pos(41,1));c.addBox(new Pos(0,16),new Pos(100,1));
this.addEntity(c)};a.prototype.addTeapot=function(){var c=new Teapot(this,new Pos(39,9));
c.setHealthBar(new QuestEntityHealthBar(c,new Pos(96,1),new Pos(0,5),QuestEntityHealthBarPositionType.FIXED_ON_PAGE,false,true,BarType.HEALTH));
this.addEntity(c)};return a})(Quest);Saving.registerBool("fortressRoom3ChestFound",false);
var FortressRoom3=(function(b){__extends(a,b);function a(c){b.call(this,c);this.chestOpened=false;
this.resizeQuest(100,31);this.addPlayerCollisionBoxes(true,true,true,true);this.getGame().getPlayer().loadCandyBoxCharacter(this);
this.getGame().getPlayer().setGlobalPosition(new Pos(0,30));this.configPlayerOrClone(this.getGame().getPlayer());
this.addEntity(this.getGame().getPlayer());this.addWalls();this.addEntity(new Chest(this,new Pos(87,6),false,new CallbackCollection(this.openChest.bind(this)),Saving.loadBool("fortressRoom3ChestFound")));
this.getGame().getQuestLog().addMessage(new QuestLogMessage("You enter the third room. There's a chest up there. How to reach it?!"))
}a.prototype.castPlayerTeleport=function(){b.prototype.castPlayerTeleport.call(this,new Pos(2,26),new Pos(1,1))
};a.prototype.configPlayerOrClone=function(c){c.setQuestEntityMovement(new QuestEntityMovement(new Pos(1,0)));
c.getQuestEntityMovement().setGravity(true);c.getQuestEntityMovement().setWormsLike(true)
};a.prototype.endQuest=function(c){if(c){this.getGame().getQuestLog().addMessage(new QuestLogMessage("You exit the room."))
}b.prototype.endQuest.call(this,c);if(c&&this.chestOpened){Saving.saveBool("fortressRoom3ChestFound",true)
}};a.prototype.update=function(){if(this.getQuestEnded()==false){if(this.getGame().getPlayer().shouldDie()){this.endQuest(true);
return}this.updateEntities()}this.preDraw();this.getRenderArea().drawArray(Database.getAscii("places/quests/fortress/room3"),this.getRealQuestPosition().x,this.getRealQuestPosition().y);
this.drawEntities();this.drawAroundQuest();this.addExitQuestButton(new CallbackCollection(this.endQuest.bind(this,true),this.getGame().goToInsideFortress.bind(this.getGame())),"buttonExitQuestKeeping");
this.postDraw()};a.prototype.addWalls=function(){var c=new Wall(this,new Pos(0,0));
c.addBox(new Pos(0,0),new Pos(100,2));c.addBox(new Pos(0,2),new Pos(16,23));c.addBox(new Pos(90,2),new Pos(10,1));
c.addBox(new Pos(91,3),new Pos(9,3));c.addBox(new Pos(90,6),new Pos(10,1));c.addBox(new Pos(82,7),new Pos(18,24));
c.addBox(new Pos(0,31),new Pos(100,1));this.addEntity(c)};a.prototype.openChest=function(){this.chestOpened=true;
this.foundGridOrEqItem(new QuestItemFound(this,"eqItemBootsRocketBoots","You opened a chest and found rocket boots!","You gain rocket boots."))
};return a})(Quest);Saving.registerBool("fourthHouseFoundLollipopOnCupboard",false);
Saving.registerNumber("fourthHouseCupboardStep",0);Saving.registerNumber("fourthHouseCarpetStep",0);
var FourthHouse=(function(a){__extends(b,a);function b(c){a.call(this,c);this.renderArea=new RenderArea();
this.renderArea.resizeFromArray(Database.getAscii("places/village/fourthHouse"),0,3);
this.update()}b.prototype.getRenderArea=function(){return this.renderArea};b.prototype.clickOnCarpet=function(){if(Saving.loadNumber("fourthHouseCarpetStep")==0){Saving.saveNumber("fourthHouseCarpetStep",1);
this.update();this.getGame().updatePlace()}};b.prototype.drawCarpetStuff=function(c,d){switch(Saving.loadNumber("fourthHouseCarpetStep")){case 0:this.renderArea.addMultipleAsciiButtons("fourthHouseCarpetButton",c-2,c+2,d-1,c-6,c+1,d,c-4,c,d+1);
this.renderArea.addLinkCall(".fourthHouseCarpetButton",new CallbackCollection(this.clickOnCarpet.bind(this)));
break;case 1:this.renderArea.drawArray(Database.getAscii("places/village/fourthHouseLollipopUnderCarpet"),c,d);
this.renderArea.addAsciiButton(c,c+4,d,"fourthHouseLollipopUnderCarpetButton");this.renderArea.addLinkCall(".fourthHouseLollipopUnderCarpetButton",new CallbackCollection(this.pickCarpetLollipop.bind(this)));
break;case 2:break}};b.prototype.drawLollipopOnCupboardStuff=function(c,d){if(Saving.loadBool("fourthHouseFoundLollipopOnCupboard")==false){this.renderArea.addAsciiButton(c+8,c+13,d+1,"fourthHouseLollipopOnCupboardButton");
this.renderArea.addLinkCall(".fourthHouseLollipopOnCupboardButton",new CallbackCollection(this.takeLollipopOnCupboard.bind(this)))
}else{this.renderArea.drawArray(Database.getAscii("places/village/fourthHouseNoLollipopOnCupboard"),c,d)
}};b.prototype.drawOpenCupboardStuff=function(c,d){switch(Saving.loadNumber("fourthHouseCupboardStep")){case 0:this.renderArea.addMultipleAsciiButtons("fourthHouseCupboardDoorButton",c,c+7,d,c,c+7,d+1,c,c+7,d+2,c,c+7,d+3,c,c+7,d+4,c,c+7,d+5,c,c+7,d+6,c,c+7,d+7,c,c+7,d+8,c,c+7,d+9,c,c+7,d+10,c,c+7,d+11,c,c+7,d+12);
this.renderArea.addLinkCall(".fourthHouseCupboardDoorButton",new CallbackCollection(this.openCupboard.bind(this)));
break;case 1:this.renderArea.drawArray(Database.getAscii("places/village/fourthHouseCupboardOpenedWithLollipop"),c-2,d);
this.renderArea.addAsciiButton(c+4,c+6,d+7,"fourthHouseLollipopInsideCupboardButton");
this.renderArea.addLinkCall(".fourthHouseLollipopInsideCupboardButton",new CallbackCollection(this.takeLollipopInsideCupboard.bind(this)));
break;case 2:this.renderArea.drawArray(Database.getAscii("places/village/fourthHouseCupboardOpenedWithoutLollipop"),c-2,d);
break}};b.prototype.openCupboard=function(){if(Saving.loadNumber("fourthHouseCupboardStep")==0){Saving.saveNumber("fourthHouseCupboardStep",1);
this.update();this.getGame().updatePlace()}};b.prototype.pickCarpetLollipop=function(){if(Saving.loadNumber("fourthHouseCarpetStep")==1){Saving.saveNumber("fourthHouseCarpetStep",2);
this.getGame().getLollipops().add(1);this.update();this.getGame().updatePlace()}};
b.prototype.takeLollipopInsideCupboard=function(){if(Saving.loadNumber("fourthHouseCupboardStep")==1){Saving.saveNumber("fourthHouseCupboardStep",2);
this.getGame().getLollipops().add(1);this.update();this.getGame().updatePlace()}};
b.prototype.takeLollipopOnCupboard=function(){if(Saving.loadBool("fourthHouseFoundLollipopOnCupboard")==false){this.getGame().getLollipops().add(1);
Saving.saveBool("fourthHouseFoundLollipopOnCupboard",true);this.update();this.getGame().updatePlace()
}};b.prototype.update=function(){this.renderArea.resetAllButSize();this.addBackToTheVillageButton(this.renderArea,"fourthHouseBackToTheVillageButton");
this.renderArea.drawArray(Database.getAscii("places/village/fourthHouse"),0,3);this.drawLollipopOnCupboardStuff(35,11);
this.drawOpenCupboardStuff(35,14);this.drawCarpetStuff(41,32)};return b})(House);
var GalacticWarsStep;(function(a){a[a.SPLASH_SCREEN=0]="SPLASH_SCREEN";a[a.GAME=1]="GAME";
a[a.LOSE=2]="LOSE"})(GalacticWarsStep||(GalacticWarsStep={}));var ThirdHouseGame=(function(){function a(b){this.thirdHouse=b;
this.renderArea=new RenderArea(53,12);this.thirdHouse.getGame().setQuestSlowedDown(false);
this.thirdHouse.getGame().setQuestSpeedUp(0)}a.prototype.pressedDownButton=function(){};
a.prototype.pressedSpaceButton=function(){};a.prototype.pressedUpButton=function(){};
a.prototype.run=function(){return true};a.prototype.getRenderArea=function(){return this.renderArea
};a.prototype.getThirdHouse=function(){return this.thirdHouse};return a})();Saving.registerNumber("galacticWarsBestScore",0);
var GalacticWars=(function(b){__extends(a,b);function a(){b.apply(this,arguments);
this.step=GalacticWarsStep.SPLASH_SCREEN;this.splashScreenTimer=47;this.asteroids=[];
this.exitGame=false}a.prototype.run=function(){var c=false;if(this.exitGame){return true
}this.getRenderArea().resetAllButSize();switch(this.step){case GalacticWarsStep.SPLASH_SCREEN:this.drawSplashScreen();
c=this.runSplashScreen();break;case GalacticWarsStep.GAME:this.drawGame();c=this.runGame();
break;case GalacticWarsStep.LOSE:this.drawLose();c=false;break}return c};a.prototype.addAsteroids=function(){var j=Math.floor(this.score/100)%4;
var e=Math.floor(Math.floor(this.score/100)/4);var d=this.score%44;var c=Math.floor(d/2);
var h=Math.floor(c/2);switch(j){case 0:switch(e){case 0:if(d<11&&c<6){this.addAsteroid(h)
}else{if(d>29&&c>14){this.addAsteroid(h)}}break;case 1:if(d<13&&c<7){this.addAsteroid(h)
}else{if(d>27&&c>13){this.addAsteroid(h)}}break;default:if(d<15&&c<8){this.addAsteroid(h)
}else{if(d>25&&c>12){this.addAsteroid(h)}}break}break;case 1:switch(e){case 0:if(d%3==0&&(this.score*7)%25>15){for(var f=h-1;
f<=h+1;f++){if(f>=0&&f<=10){this.addAsteroid(f)}}}break;case 1:if(d%3==0&&(this.score*7)%25>12){for(var f=h-1;
f<=h+1;f++){if(f>=0&&f<=10){this.addAsteroid(f)}}}break;default:if(d%3==0&&(this.score*7)%25>10){for(var f=h-1;
f<=h+1;f++){if(f>=0&&f<=10){this.addAsteroid(f)}}}break}break;case 2:switch(e){case 0:if(this.score%25==0){var g=Random.between(0,9);
for(var f=0;f<=10;f++){if(f!=g&&f!=g+1){this.addAsteroid(f)}}}break;case 1:if(this.score%20==0){var g=Random.between(0,9);
for(var f=0;f<=10;f++){if(f!=g&&f!=g+1){this.addAsteroid(f)}}}break;default:if(this.score%15==0){var g=Random.between(0,9);
for(var f=0;f<=10;f++){if(f!=g&&f!=g+1){this.addAsteroid(f)}}}break}break;case 3:switch(e){case 0:if(Random.oneChanceOutOf(15)){this.addAsteroid(Random.between(0,10))
}break;case 1:if(Random.oneChanceOutOf(10)){this.addAsteroid(Random.between(0,10))
}break;case 2:if(Random.oneChanceOutOf(7)){this.addAsteroid(Random.between(0,10))
}break;default:if(Random.oneChanceOutOf(5)){this.addAsteroid(Random.between(0,10))
}break}break}};a.prototype.addAsteroid=function(c){this.asteroids.push(new Pos(53,c))
};a.prototype.checkCollision=function(){if(this.shipYPosition<0){return true}if(this.shipYPosition>9){return true
}return false};a.prototype.checkCollisionWithAsteroids=function(){var c=false;for(var d=0;
d<this.asteroids.length;d++){if(this.shipCollidesWithThisPos(this.asteroids[d])){if(c==false){this.hp-=1;
c=true}this.asteroids.splice(d,1);d--}}if(this.hp<1){return true}return false};a.prototype.drawGame=function(){this.getRenderArea().drawString("Score : "+this.score.toString(),0,0);
this.getRenderArea().drawString("| HP : "+this.hp.toString(),43,0);this.getRenderArea().drawString("| Power : [",14,0);
this.getRenderArea().drawHorizontalLine("x",25,25+Math.floor(this.power/150*16),0);
this.getRenderArea().drawString("]",41,0);this.getRenderArea().drawArray(Database.getAscii("places/village/thirdHouseGames/GalacticWars/ship"),0,1+this.shipYPosition);
for(var c=0;c<this.asteroids.length;c++){this.getRenderArea().drawString("O",this.asteroids[c].x,1+this.asteroids[c].y)
}};a.prototype.drawLose=function(){this.getRenderArea().drawArray(Database.getAscii("places/village/thirdHouseGames/GalacticWars/youLose"),8,1);
this.getRenderArea().drawString("Score : "+this.score+".",8,7);this.getRenderArea().drawString("You gain "+(this.score+Algo.correctIfUnderZero(this.score-1000)*30)+" candies.",8,8);
this.getRenderArea().drawString("Best score : "+Saving.loadNumber("galacticWarsBestScore")+".",8,10)
};a.prototype.drawSplashScreen=function(){this.getRenderArea().drawArray(Database.getAscii("places/village/thirdHouseGames/GalacticWars/splashScreen"),-87+this.splashScreenTimer*3,2)
};a.prototype.goToLose=function(){this.step=GalacticWarsStep.LOSE;this.getThirdHouse().getGame().getCandies().add(this.score+Algo.correctIfUnderZero(this.score-1000)*30);
if(this.score>Saving.loadNumber("galacticWarsBestScore")){Saving.saveNumber("galacticWarsBestScore",this.score)
}};a.prototype.goToGame=function(){this.step=GalacticWarsStep.GAME;this.score=2;this.shipYPosition=4;
this.hp=10;this.power=150;this.maxPower=150;this.getThirdHouse().getGame().setQuestSpeedUp(-50)
};a.prototype.pressedDownButton=function(){};a.prototype.pressedSpaceButton=function(){var d;
if(this.step==GalacticWarsStep.LOSE){this.exitGame=true}else{if(this.step==GalacticWarsStep.GAME){if(this.power==this.maxPower){d=0;
for(var c=0;c<this.asteroids.length;c++){if((d%5)!=0){this.asteroids.splice(c,1);
c--}d++}this.power=0}}}};a.prototype.pressedUpButton=function(){};a.prototype.runGame=function(){var d=0;
if(Keyboard.isKeyPressed("down")){this.shipYPosition+=1;if(this.checkCollision()){this.shipYPosition-=1
}}else{if(Keyboard.isKeyPressed("up")){this.shipYPosition-=1;if(this.checkCollision()){this.shipYPosition+=1
}}}for(var c=0;c<this.asteroids.length;c++){if(this.asteroids[c].x>0){this.asteroids[c].x-=1
}else{this.asteroids.splice(c,1);c--}}this.addAsteroids();this.score=Math.ceil(Math.pow(this.score,1.00015));
if(this.power<this.maxPower){this.power+=1}if(this.checkCollisionWithAsteroids()){this.goToLose()
}return false};a.prototype.runSplashScreen=function(){if(this.splashScreenTimer>=0){this.splashScreenTimer-=1
}else{this.goToGame()}return false};a.prototype.shipCollidesWithThisPos=function(c){if(c.x<0){return false
}if(c.x>10){return false}if(c.y<this.shipYPosition){return false}if(c.y>this.shipYPosition+1){return false
}return true};return a})(ThirdHouseGame);var RenderLocation=(function(){function a(b,c){if(c===void 0){c=false
}this.scrolling=null;this.setLocationString(b);this.setScrolling(c)}a.prototype.render=function(b){$(this.locationString).html(b.getForRendering());
b.runLinks()};a.prototype.setContentGap=function(e){var c,d,b=0;d=$(this.locationString).outerWidth();
c=this.getRealExValueFromTheStatusBar();if(d>$(window).width()){b=-(d-$(window).width())/2
}$(this.locationString).css({left:((e/2)*c+b).toString()+"px"})};a.prototype.setLocationString=function(b){this.locationString=b
};a.prototype.setScrolling=function(c,b){if(b===void 0){b=0}if(this.scrolling!=c){this.scrolling=c;
if(this.scrolling){this.initScrolling(b)}else{this.stopScrolling()}}};a.prototype.getScroll=function(){return $("html").scrollTop()
};a.prototype.getScrolling=function(){return this.scrolling};a.prototype.getRealExValueFromTheStatusBar=function(){return $("#statusBar").outerWidth()/100
};a.prototype.initScrolling=function(b){$("html").scrollTop(b);$(this.locationString).css({position:"absolute",left:"0",top:"0","overflow-x":"scroll"});
$("#aroundStatusBar").css({position:"fixed",top:"0",left:"0",right:"0",height:"0"})
};a.prototype.stopScrolling=function(){$("html").scrollTop(0);$(this.locationString).css({position:"relative","overflow-x":"hidden"});
$("#aroundStatusBar").css({position:"relative",top:"auto",left:"auto",right:"auto",height:"auto"})
};return a})();Saving.registerBool("gameDebug",false);Saving.registerString("gameLanguage","en");
Saving.registerBool("gameInvertedColors",false);Saving.registerString("gameWeaponSelected","inventorySpecialNothingWeapon");
Saving.registerString("gameHatSelected","inventorySpecialNothingHat");Saving.registerString("gameBodyArmourSelected","inventorySpecialNothingBodyArmour");
Saving.registerString("gameGlovesSelected","inventorySpecialNothingGloves");Saving.registerString("gameBootsSelected","inventorySpecialNothingBoots");
Saving.registerNumber("gameSecondsElapsedSinceLastLollipopsProduction",0);Saving.registerNumber("gameCandiesAccumulated",0);
Saving.registerNumber("gameCandiesCurrent",0);Saving.registerNumber("gameCandiesMax",0);
Saving.registerNumber("gameLollipopsAccumulated",0);Saving.registerNumber("gameLollipopsCurrent",0);
Saving.registerNumber("gameLollipopsMax",0);Saving.registerNumber("gameChocolateBarsAccumulated",0);
Saving.registerNumber("gameChocolateBarsCurrent",0);Saving.registerNumber("gameChocolateBarsMax",0);
Saving.registerNumber("gamePainsAuChocolatAccumulated",0);Saving.registerNumber("gamePainsAuChocolatCurrent",0);
Saving.registerNumber("gamePainsAuChocolatMax",0);Saving.registerNumber("gameCandiesEatenAccumulated",0);
Saving.registerNumber("gameCandiesEatenCurrent",0);Saving.registerNumber("gameCandiesEatenMax",0);
Saving.registerNumber("gameCandiesThrownAccumulated",0);Saving.registerNumber("gameCandiesThrownCurrent",0);
Saving.registerNumber("gameCandiesThrownMax",0);Saving.registerNumber("gameCandiesUsedToRequestFeaturesAccumulated",0);
Saving.registerNumber("gameCandiesUsedToRequestFeaturesCurrent",0);Saving.registerNumber("gameCandiesUsedToRequestFeaturesMax",0);
Saving.registerNumber("gameCandiesInCauldronAccumulated",0);Saving.registerNumber("gameCandiesInCauldronCurrent",0);
Saving.registerNumber("gameCandiesInCauldronMax",0);Saving.registerNumber("gameLollipopsInCauldronAccumulated",0);
Saving.registerNumber("gameLollipopsInCauldronCurrent",0);Saving.registerNumber("gameLollipopsInCauldronMax",0);
Saving.registerNumber("gameGiftPower",0);Saving.registerNumber("gameGiftHealth",0);
Saving.registerNumber("gameGiftMagic",0);Saving.registerString("gameGameMode","normal");
var Game=(function(){function a(b){this.statusBarLocation=new RenderLocation("#statusBar");
this.mainContentLocation=new RenderLocation("#mainContent");this.candiesUsedToRequestFeatures=new Resource("gameCandiesUsedToRequestFeatures");
this.candiesInCauldron=new Resource("gameCandiesInCauldron");this.lollipopsInCauldron=new Resource("gameLollipopsInCauldron");
this.gridItems={};this.weapons={};this.hats={};this.bodyArmours={};this.gloves={};
this.boots={};this.selectedEqItems={};this.questLog=new QuestLog();this.place=null;
this.savedPlace=null;this.hotkeys={};this.specialHotkeys=[];this.weAreQuesting=false;
this.oneSecondCallbackCollection=new CallbackCollection();this.questCallbackCollection=new CallbackCollection();
this.questSlowedDown=false;this.localAutosaveEnabled=false;this.localAutosaveSlot=null;
this.localAutosaveTime=null;this.isStatusBarAllowedToUseTheNKey=true;if(b!=null){Saving.saveString("gameGameMode",b)
}this.createGridItems();this.createEqItems();this.statusBar=new StatusBar(this,0);
this.player=new Player(this);this.candies=new Candies(this,"gameCandies");this.lollipops=new Lollipops(this,"gameLollipops");
this.chocolateBars=new ChocolateBars(this,"gameChocolateBars");this.painsAuChocolat=new PainsAuChocolat(this,"gamePainsAuChocolat");
this.candiesEaten=new CandiesEaten(this,"gameCandiesEaten");this.candiesThrown=new CandiesThrown(this,"gameCandiesThrown");
this.updateStatusBar();this.oneSecondIntervalId=window.setInterval(this.oneSecondMethod.bind(this),1000);
window.setTimeout(this.questMethod.bind(this),100)}a.prototype.addHotkey=function(b){this.hotkeys[b.getKeyString()]=b
};a.prototype.addSpecialHotkey=function(b){this.specialHotkeys.push(b)};a.prototype.applyInvertedColorsToCss=function(){if(Saving.loadBool("gameInvertedColors")==false){$("#invertColorsStylesheet").remove()
}else{$("head").append('<link href="css/invertColors.css" rel="stylesheet" id="invertColorsStylesheet"/>')
}};a.prototype.calcLollipopFarmProduction=function(){Saving.saveBool("lollipopFarmIsProductionEachSecond",this.isLollipopFarmProductionEachSecond());
if(Saving.loadBool("lollipopFarmIsProductionEachSecond")){Saving.saveNumber("lollipopFarmProduction",(Saving.loadBool("gridItemPossessedShellPowder")?3:1)*(Saving.loadBool("gridItemPossessedPitchfork")?3:1)*(Saving.loadBool("gridItemPossessedGreenSharkFin")?5:1)*Math.ceil(100*(1-Math.exp(-(Saving.loadNumber("lollipopFarmLollipopsPlanted")-20)/5000))))
}else{switch(Saving.loadNumber("lollipopFarmLollipopsPlanted")){case 1:Saving.saveNumber("lollipopFarmProduction",3600*8);
break;case 2:Saving.saveNumber("lollipopFarmProduction",3600*5);break;case 3:Saving.saveNumber("lollipopFarmProduction",3600*2);
break;case 4:Saving.saveNumber("lollipopFarmProduction",3600);break;case 5:Saving.saveNumber("lollipopFarmProduction",60*40);
break;case 6:Saving.saveNumber("lollipopFarmProduction",60*25);break;case 7:Saving.saveNumber("lollipopFarmProduction",60*12);
break;case 8:Saving.saveNumber("lollipopFarmProduction",60*8);break;case 9:Saving.saveNumber("lollipopFarmProduction",60*5);
break;case 10:Saving.saveNumber("lollipopFarmProduction",60*2);break;case 11:Saving.saveNumber("lollipopFarmProduction",60);
break;case 12:Saving.saveNumber("lollipopFarmProduction",52);break;case 13:Saving.saveNumber("lollipopFarmProduction",42);
break;case 14:Saving.saveNumber("lollipopFarmProduction",30);break;case 15:Saving.saveNumber("lollipopFarmProduction",16);
break;case 16:Saving.saveNumber("lollipopFarmProduction",8);break;case 17:Saving.saveNumber("lollipopFarmProduction",5);
break;case 18:Saving.saveNumber("lollipopFarmProduction",4);break;case 19:Saving.saveNumber("lollipopFarmProduction",3);
break;case 20:Saving.saveNumber("lollipopFarmProduction",2);break}}};a.prototype.canStartQuest=function(){if(this.player.getHp()==0){return false
}return true};a.prototype.clearAllIntervals=function(){clearInterval(this.oneSecondIntervalId)
};a.prototype.disableLocalAutosave=function(){this.localAutosaveEnabled=false;this.localAutosaveSlot=null
};a.prototype.emptyAndFillSelectedEqItemsArray=function(){this.selectedEqItems={};
if(Saving.loadString("gameWeaponSelected")!="inventorySpecialNothingWeapon"){this.selectedEqItems.weapon=this.weapons[Saving.loadString("gameWeaponSelected")]
}if(Saving.loadString("gameHatSelected")!="inventorySpecialNothingHat"){this.selectedEqItems.hat=this.hats[Saving.loadString("gameHatSelected")]
}if(Saving.loadString("gameBodyArmourSelected")!="inventorySpecialNothingBodyArmour"){this.selectedEqItems.bodyArmour=this.bodyArmours[Saving.loadString("gameBodyArmourSelected")]
}if(Saving.loadString("gameGlovesSelected")!="inventorySpecialNothingGloves"){this.selectedEqItems.gloves=this.gloves[Saving.loadString("gameGlovesSelected")]
}if(Saving.loadString("gameBootsSelected")!="inventorySpecialNothingBoots"){this.selectedEqItems.boots=this.boots[Saving.loadString("gameBootsSelected")]
}};a.prototype.enableLocalAutosave=function(b){this.localAutosaveEnabled=true;this.localAutosaveSlot=b;
this.setDefaultLocalAutosaveTime()};a.prototype.gainItem=function(b){Saving.saveBool(b,true);
this.player.reCalcMaxHp();this.calcLollipopFarmProduction()};a.prototype.getEqItemFromEqItemType=function(c,b){switch(b){case EqItemType.WEAPON:return this.weapons[c];
break;case EqItemType.HAT:return this.hats[c];break;case EqItemType.BODYARMOUR:return this.bodyArmours[c];
break;case EqItemType.GLOVES:return this.gloves[c];break;case EqItemType.BOOTS:return this.boots[c];
break}};a.prototype.isEquipped=function(b,c){if(this.selectedEqItems[b]==undefined||this.selectedEqItems[b]==null){return false
}else{return(this.selectedEqItems[b].getSavingName()==c)}};a.prototype.isLollipopFarmProductionEachSecond=function(){if(Saving.loadNumber("lollipopFarmLollipopsPlanted")>20){return true
}return false};a.prototype.load=function(){this.candies.load();this.lollipops.load();
this.chocolateBars.load();this.painsAuChocolat.load();this.candiesEaten.load();this.candiesThrown.load();
this.candiesUsedToRequestFeatures.load();this.candiesInCauldron.load();this.lollipopsInCauldron.load();
this.applyInvertedColorsToCss()};a.prototype.postLoad=function(){this.player.reCalcMaxHp();
this.updateStatusBar(true);this.emptyAndFillSelectedEqItemsArray();this.goToCandyBox();
this.savedPlace=new Village(this)};a.prototype.resetPlayer=function(){var c=this.player.getHp();
var b=this.player.getMaxHp();this.player=new Player(this);this.player.setHp(c);this.player.setMaxHp(b)
};a.prototype.resetSpecialHotkeys=function(){this.specialHotkeys=[]};a.prototype.save=function(){this.candies.save();
this.lollipops.save();this.chocolateBars.save();this.painsAuChocolat.save();this.candiesEaten.save();
this.candiesThrown.save();this.candiesUsedToRequestFeatures.save();this.candiesInCauldron.save();
this.lollipopsInCauldron.save()};a.prototype.setPlace=function(b){if(this.place!=null){this.place.willStopBeingDisplayed();
this.resetHotkeys();if(this.savedPlace==null){this.place.willBeClosed()}}this.place=b;
this.resetResourcesCallbacks();this.place.willBeDisplayed();this.displayPlace()};
a.prototype.unequipIfEquipped=function(c,b){switch(b){case EqItemType.WEAPON:if(this.selectedEqItems.weapon!=null&&this.selectedEqItems.weapon.getSavingName()==c){Saving.saveString("gameWeaponSelected","inventorySpecialNothingWeapon")
}break;case EqItemType.HAT:if(this.selectedEqItems.hat!=null&&this.selectedEqItems.hat.getSavingName()==c){Saving.saveString("gameHatSelected","inventorySpecialNothingHat")
}break;case EqItemType.BODYARMOUR:if(this.selectedEqItems.bodyArmour!=null&&this.selectedEqItems.bodyArmour.getSavingName()==c){Saving.saveString("gameBodyArmourSelected","inventorySpecialNothingBodyArmour")
}break;case EqItemType.GLOVES:if(this.selectedEqItems.gloves!=null&&this.selectedEqItems.gloves.getSavingName()==c){Saving.saveString("gameGlovesSelected","inventorySpecialNothingGloves")
}break;case EqItemType.BOOTS:if(this.selectedEqItems.boots!=null&&this.selectedEqItems.boots.getSavingName()==c){Saving.saveString("gameBootsSelected","inventorySpecialNothingBoots")
}break}this.emptyAndFillSelectedEqItemsArray()};a.prototype.updatePlace=function(){this.displayPlace()
};a.prototype.updateStatusBar=function(b){if(b===void 0){b=false}if(b){this.statusBar.deleteAndReAddEverything()
}this.statusBar.updateAll();this.statusBarLocation.render(this.statusBar.getRenderArea())
};a.prototype.goToCandyBox=function(){this.saveCurrentMapPlace();this.setPlace(new CandyBox(this))
};a.prototype.goToCastle=function(){this.setPlace(new Castle(this))};a.prototype.goToCastleEntrance=function(){this.setPlace(new CastleEntrance(this))
};a.prototype.goToCauldron=function(){this.saveCurrentMapPlace();this.setPlace(new Cauldron(this))
};a.prototype.goToCfg=function(){this.saveCurrentMapPlace();this.setPlace(new Cfg(this))
};a.prototype.goToInsideFortress=function(){this.setPlace(new InsideFortress(this))
};a.prototype.goToInsideYourBox=function(){this.saveCurrentMapPlace();this.setPlace(new InsideYourBox(this))
};a.prototype.goToInventory=function(){this.saveCurrentMapPlace();this.setPlace(new Inventory(this))
};a.prototype.goToLighthouse=function(){this.setPlace(new Lighthouse(this))};a.prototype.goToLollipopFarm=function(){this.saveCurrentMapPlace();
this.setPlace(new LollipopFarm(this))};a.prototype.goToMainMap=function(){this.setPlace(new MainMap(this))
};a.prototype.goToMap=function(){this.setPlaceFromSavedMapPlace()};a.prototype.goToSave=function(){this.saveCurrentMapPlace();
this.setPlace(new Save(this))};a.prototype.goToSorceressHut=function(){this.setPlace(new SorceressHut(this))
};a.prototype.goToTheArena=function(){this.saveCurrentMapPlace();this.setPlace(new TheArena(this))
};a.prototype.goToTheCave=function(){this.setPlace(new TheCave(this))};a.prototype.goToTheComputer=function(){this.saveCurrentMapPlace();
this.setPlace(new TheComputer(this))};a.prototype.goToVillage=function(){this.setPlace(new Village(this))
};a.prototype.goToYourself=function(){this.setPlace(new Yourself(this))};a.prototype.getBodyArmours=function(){return this.bodyArmours
};a.prototype.getBoots=function(){return this.boots};a.prototype.getCandies=function(){return this.candies
};a.prototype.getCandiesEaten=function(){return this.candiesEaten};a.prototype.getCandiesInCauldron=function(){return this.candiesInCauldron
};a.prototype.getCandiesThrown=function(){return this.candiesThrown};a.prototype.getCandiesUsedToRequestFeatures=function(){return this.candiesUsedToRequestFeatures
};a.prototype.getChocolateBars=function(){return this.chocolateBars};a.prototype.getGloves=function(){return this.gloves
};a.prototype.getHats=function(){return this.hats};a.prototype.getHotkeys=function(){return this.hotkeys
};a.prototype.getGridItems=function(){return this.gridItems};a.prototype.getIsStatusBarAllowedToUseTheNKey=function(){return this.isStatusBarAllowedToUseTheNKey
};a.prototype.getLocalAutosaveEnabled=function(){return this.localAutosaveEnabled
};a.prototype.getLocalAutosaveSlot=function(){return this.localAutosaveSlot};a.prototype.getLocalAutosaveTime=function(){return this.localAutosaveTime
};a.prototype.getLollipops=function(){return this.lollipops};a.prototype.getLollipopsInCauldron=function(){return this.lollipopsInCauldron
};a.prototype.getPainsAuChocolat=function(){return this.painsAuChocolat};a.prototype.getQuestCallbackCollection=function(){return this.questCallbackCollection
};a.prototype.getQuestLog=function(){return this.questLog};a.prototype.getQuestSlowedDown=function(){return this.questSlowedDown
};a.prototype.getQuestSpeedUp=function(){return this.questSpeedUp};a.prototype.getOneSecondCallbackCollection=function(){return this.oneSecondCallbackCollection
};a.prototype.getPlayer=function(){return this.player};a.prototype.getMainContentLocation=function(){return this.mainContentLocation
};a.prototype.getSelectedEqItems=function(){return this.selectedEqItems};a.prototype.getSpecialHotkeys=function(){return this.specialHotkeys
};a.prototype.getStatusBar=function(){return this.statusBar};a.prototype.getWeapons=function(){return this.weapons
};a.prototype.getWeAreQuesting=function(){return this.weAreQuesting};a.prototype.setIsStatusBarAllowedToUseTheNKey=function(b){this.isStatusBarAllowedToUseTheNKey=b
};a.prototype.setQuestSlowedDown=function(b){this.questSlowedDown=b};a.prototype.setQuestSpeedUp=function(b){this.questSpeedUp=b
};a.prototype.setWeAreQuesting=function(b){this.weAreQuesting=b};a.prototype.addEqItem=function(c,b){b[c.getSavingName()]=c
};a.prototype.addGridItem=function(b){this.gridItems[b.getSavingName()]=b};a.prototype.createEqItems=function(){this.addEqItem(new WoodenSword(),this.weapons);
this.addEqItem(new IronAxe(),this.weapons);this.addEqItem(new PolishedSilverSword(),this.weapons);
this.addEqItem(new TrollBludgeon(),this.weapons);this.addEqItem(new MonkeyWizardStaff(),this.weapons);
this.addEqItem(new EnchantedMonkeyWizardStaff(),this.weapons);this.addEqItem(new TribalSpear(),this.weapons);
this.addEqItem(new SummoningTribalSpear(),this.weapons);this.addEqItem(new GiantSpoon(),this.weapons);
this.addEqItem(new Scythe(),this.weapons);this.addEqItem(new GiantSpoonOfDoom(),this.weapons);
this.addEqItem(new OctopusKingCrown(),this.hats);this.addEqItem(new OctopusKingCrownWithJaspers(),this.hats);
this.addEqItem(new OctopusKingCrownWithObsidian(),this.hats);this.addEqItem(new MerchantHat(),this.hats);
this.addEqItem(new SorceressHat(),this.hats);this.addEqItem(new LightweightBodyArmour(),this.bodyArmours);
this.addEqItem(new KnightBodyArmour(),this.bodyArmours);this.addEqItem(new EnchantedKnightBodyArmour(),this.bodyArmours);
this.addEqItem(new LeatherGloves(),this.gloves);this.addEqItem(new RedEnchantedGloves(),this.gloves);
this.addEqItem(new PinkEnchantedGloves(),this.gloves);this.addEqItem(new LeatherBoots(),this.boots);
this.addEqItem(new RocketBoots(),this.boots);this.addEqItem(new BootsOfIntrospection(),this.boots)
};a.prototype.createGridItems=function(){this.addGridItem(new GridItem("gridItemPossessedMainMap","gridItemMainMapName","gridItemMainMapDescription","gridItems/mainMap",new Pos(0,0)));
this.addGridItem(new GridItem("gridItemPossessedTimeRing","gridItemTimeRingName","gridItemTimeRingDescription","gridItems/timeRing",new Pos(1,0)));
this.addGridItem(new GridItem("gridItemPossessedThirdHouseKey","gridItemThirdHouseKeyName","gridItemThirdHouseKeyDescription","gridItems/thirdHouseKey",new Pos(2,0)));
this.addGridItem(new GridItem("gridItemPossessedBeginnersGrimoire","gridItemBeginnersGrimoireName","gridItemBeginnersGrimoireDescription","gridItems/beginnersGrimoire",new Pos(3,0)));
this.addGridItem(new Feather("gridItemPossessedFeather","gridItemFeatherName","gridItemFeatherDescription","gridItems/feather",new Pos(0,1)));
this.addGridItem(new GridItem("gridItemPossessedPogoStick","gridItemPogoStickName","gridItemPogoStickDescription","gridItems/pogoStick",new Pos(1,1)));
this.addGridItem(new GridItem("gridItemPossessedHeartPlug","gridItemHeartPlugName","gridItemHeartPlugDescription","gridItems/heartPlug",new Pos(2,1)));
this.addGridItem(new GridItem("gridItemPossessedAdvancedGrimoire","gridItemAdvancedGrimoireName","gridItemAdvancedGrimoireDescription","gridItems/advancedGrimoire",new Pos(3,1)));
this.addGridItem(new GridItem("gridItemPossessedSponge","gridItemSpongeName","gridItemSpongeDescription","gridItems/sponge",new Pos(0,2)));
this.addGridItem(new GridItem("gridItemPossessedShellPowder","gridItemShellPowderName","gridItemShellPowderDescription","gridItems/shellPowder",new Pos(1,2)));
this.addGridItem(new GridItem("gridItemPossessedRedSharkFin","gridItemRedSharkFinName","gridItemRedSharkFinDescription","gridItems/redSharkFin",new Pos(2,2)));
this.addGridItem(new GridItem("gridItemPossessedBlackMagicGrimoire","gridItemBlackMagicGrimoireName","gridItemBlackMagicGrimoireDescription","gridItems/blackMagicGrimoire",new Pos(3,2)));
this.addGridItem(new GridItem("gridItemPossessedGreenSharkFin","gridItemGreenSharkFinName","gridItemGreenSharkFinDescription","gridItems/greenSharkFin",new Pos(0,3)));
this.addGridItem(new GridItem("gridItemPossessedPurpleSharkFin","gridItemPurpleSharkFinName","gridItemPurpleSharkFinDescription","gridItems/purpleSharkFin",new Pos(1,3)));
this.addGridItem(new GridItem("gridItemPossessedHeartPendant","gridItemHeartPendantName","gridItemHeartPendantDescription","gridItems/heartPendant",new Pos(2,3)));
this.addGridItem(new GridItem("gridItemPossessedFortressKey","gridItemFortressKeyName","gridItemFortressKeyDescription","gridItems/fortressKey",new Pos(3,3)));
this.addGridItem(new UnicornHorn("gridItemPossessedUnicornHorn","gridItemUnicornHornName","gridItemUnicornHornDescription","gridItems/unicornHorn",new Pos(0,4)));
this.addGridItem(new XinopherydonClaw("gridItemPossessedXinopherydonClaw","gridItemXinopherydonClawName","gridItemXinopherydonClawDescription","gridItems/xinopherydonClaw",new Pos(1,4)));
this.addGridItem(new GridItem("gridItemPossessedPitchfork","gridItemPitchforkName","gridItemPitchforkDescription","gridItems/pitchfork",new Pos(2,4)));
this.addGridItem(new GridItem("gridItemPossessedTalkingCandy","gridItemTalkingCandyName","gridItemTalkingCandyDescription","gridItems/talkingCandy",new Pos(3,4)));
this.addGridItem(new GridItem("gridItemPossessedP","gridItemPName","gridItemPDescription","gridItems/p",new Pos(0,5)));
this.addGridItem(new GridItem("gridItemPossessedL","gridItemLName","gridItemLDescription","gridItems/l",new Pos(1,5)));
this.addGridItem(new GridItem("gridItemPossessedA","gridItemAName","gridItemADescription","gridItems/a",new Pos(2,5)));
this.addGridItem(new GridItem("gridItemPossessedY","gridItemYName","gridItemYDescription","gridItems/y",new Pos(3,5)))
};a.prototype.displayArea=function(b,d,e,c){if(d===void 0){d=false}if(e===void 0){e=0
}if(c===void 0){c=0}this.mainContentLocation.render(b);this.mainContentLocation.setScrolling(d,c);
if(d==false){this.mainContentLocation.setContentGap(e)}else{this.mainContentLocation.setContentGap(0)
}};a.prototype.displayPlace=function(){this.displayArea(this.place.getRenderArea(),this.place.getScrolling(),this.place.getGap(),this.place.getDefaultScroll())
};a.prototype.handleCandiesProduction=function(){this.candies.add(Saving.loadNumber("lollipopFarmCurrentCandiesProduction"))
};a.prototype.handleLollipopProduction=function(){if(Saving.loadNumber("lollipopFarmLollipopsPlanted")>0){if(Saving.loadBool("lollipopFarmIsProductionEachSecond")){this.lollipops.add(Saving.loadNumber("lollipopFarmProduction"))
}else{if(Saving.loadNumber("lollipopFarmTimeSinceLastProduction")>=Saving.loadNumber("lollipopFarmProduction")-1){Saving.saveNumber("lollipopFarmTimeSinceLastProduction",0);
this.lollipops.add(1)}else{Saving.saveNumber("lollipopFarmTimeSinceLastProduction",Saving.loadNumber("lollipopFarmTimeSinceLastProduction")+1)
}}}};a.prototype.handlePondConversion=function(){var b;if(Saving.loadBool("lollipopFarmPondFeedingLolligators")){b=Saving.loadNumber("lollipopFarmPondConversionRate");
if(this.candies.getCurrent()<b){b=this.candies.getCurrent()}if(b>0){this.candies.add(-b);
this.lollipops.add(b)}}};a.prototype.localAutosave=function(){if(this.localAutosaveEnabled==true&&this.localAutosaveSlot!=null&&this.localAutosaveTime!=null){if(this.localAutosaveTime<=0){Saving.save(this,MainLoadingType.LOCAL,this.localAutosaveSlot);
this.setDefaultLocalAutosaveTime()}else{this.localAutosaveTime-=1}}};a.prototype.questMethod=function(){window.setTimeout(this.questMethod.bind(this),((this.questSlowedDown&&this.weAreQuesting)?200:100+this.getQuestSpeedUp()));
this.questCallbackCollection.fire()};a.prototype.oneSecondMethod=function(){this.player.magicHealthRegain();
this.handleCandiesProduction();this.handleLollipopProduction();this.handlePondConversion();
this.localAutosave();this.oneSecondCallbackCollection.fire()};a.prototype.resetHotkeys=function(){this.hotkeys={}
};a.prototype.resetResourcesCallbacks=function(){this.candies.getCallbackCollection().reset();
this.lollipops.getCallbackCollection().reset();this.candiesEaten.getCallbackCollection().reset();
this.candiesThrown.getCallbackCollection().reset();this.oneSecondCallbackCollection.reset();
this.questCallbackCollection.reset()};a.prototype.saveCurrentMapPlace=function(){if(this.savedPlace==null){this.savedPlace=this.place
}};a.prototype.setDefaultLocalAutosaveTime=function(){this.localAutosaveTime=600};
a.prototype.setPlaceFromSavedMapPlace=function(){if(this.savedPlace!=null){this.setPlace(this.savedPlace);
this.savedPlace=null}};return a})();var GiantNougatMonsterQuest=(function(a){__extends(b,a);
function b(c){a.call(this,c);this.resizeQuest(100,20);this.addPlayerCollisionBoxes(true,true,true,true);
this.getGame().getPlayer().loadCandyBoxCharacter(this);this.getGame().getPlayer().setGlobalPosition(new Pos(0,19));
this.configPlayerOrClone(this.getGame().getPlayer());this.addEntity(this.getGame().getPlayer());
this.addWalls();this.addMonster();this.getGame().getQuestLog().addMessage(new QuestLogMessage("You attack the giant nougat monster. It seems to be asleep."))
}b.prototype.configPlayerOrClone=function(c){c.setQuestEntityMovement(new QuestEntityMovement(new Pos(1,0)));
c.getQuestEntityMovement().setGravity(true);c.getQuestEntityMovement().setWormsLike(true)
};b.prototype.endQuest=function(c){if(c){this.getGame().getQuestLog().addMessage(new QuestLogMessage("You killed the giant nougat monster and gained access to the tower!"));
Saving.saveBool("castleKilledNougatMonster",true)}else{this.getGame().getQuestLog().addMessage(new QuestLogMessage("You failed."))
}a.prototype.endQuest.call(this,c)};b.prototype.update=function(){if(this.getQuestEnded()==false){if(this.thePlayerWon()){this.endQuest(true);
return}if(this.getGame().getPlayer().shouldDie()){this.endQuest(false);return}this.updateEntities()
}this.preDraw();this.drawEntities();this.drawAroundQuest();if(this.getQuestEnded()==false){this.addExitQuestButton(new CallbackCollection(this.getGame().goToMainMap.bind(this.getGame())),"buttonExitQuestNoKeeping")
}else{if(this.getQuestEndedAndWeWon()==false){this.addExitQuestButton(new CallbackCollection(this.getGame().goToMainMap.bind(this.getGame())),"buttonExitQuestNoKeepingBecauseLose")
}else{this.addExitQuestButton(new CallbackCollection(this.getGame().goToMainMap.bind(this.getGame())),"buttonExitQuestKeeping")
}}this.postDraw()};b.prototype.addMonster=function(){this.giantNougatMonster=new GiantNougatMonster(this,new Pos(78,16));
this.giantNougatMonster.setHealthBar(new QuestEntityHealthBar(this.giantNougatMonster,new Pos(100,1),new Pos(0,0),QuestEntityHealthBarPositionType.FIXED_ON_PAGE,true,true,BarType.HEALTH));
this.addEntity(this.giantNougatMonster)};b.prototype.addWalls=function(){var c=new Wall(this,new Pos(-20,20));
c.addBox(new Pos(0,0),new Pos(140,1));this.addEntity(c)};b.prototype.thePlayerWon=function(){if(this.giantNougatMonster.shouldDie()){return true
}return false};return b})(Quest);var GiantNougatMonsterStep;(function(a){a[a.ASLEEP=0]="ASLEEP";
a[a.AWAKE=1]="AWAKE";a[a.ANGRY=2]="ANGRY"})(GiantNougatMonsterStep||(GiantNougatMonsterStep={}));
var GiantNougatMonster=(function(a){__extends(b,a);function b(c,d){a.call(this,c,d,new Naming("The giant nougat monster","the giant nougat monster"),new RenderArea(15,4),new Pos(0,0),new CollisionBoxCollection(new CollisionBox(this,new Pos(1,0),new Pos(12,1)),new CollisionBox(this,new Pos(0,1),new Pos(15,2)),new CollisionBox(this,new Pos(1,3),new Pos(12,1))),new QuestEntityMovement());
this.step=GiantNougatMonsterStep.ASLEEP;this.getQuestEntityMovement().setGravity(true);
this.setDestructible(true);this.setMaxHp(2000);this.setHp(2000);this.reDrawAscii();
this.setTransparency(new RenderTransparency(" ","%"))}b.prototype.update=function(){switch(this.step){case GiantNougatMonsterStep.ASLEEP:if(this.getHp()<1577){this.step=GiantNougatMonsterStep.AWAKE;
this.reDrawAscii();this.addWeapon()}break;case GiantNougatMonsterStep.AWAKE:if(this.getHp()<500){this.step=GiantNougatMonsterStep.ANGRY;
this.reDrawAscii()}this.goTowards(this.getGlobalPosition().plus(new Pos(6,2)),this.getQuest().getGame().getPlayer().getGlobalPosition().plus(new Pos(1,0)),0,new Pos(1,0));
break;case GiantNougatMonsterStep.ANGRY:this.goTowards(this.getGlobalPosition().plus(new Pos(6,2)),this.getQuest().getGame().getPlayer().getGlobalPosition().plus(new Pos(1,0)),0,new Pos(3,0));
break}a.prototype.update.call(this)};b.prototype.willDie=function(){this.getQuest().getGame().getQuestLog().addMessage(new QuestLogMessage(this.getDeathMessage()+" (and found "+Algo.pluralFormat(this.getQuest().foundCandies(Random.upTo(123456))," candy"," candies")+")",this.getQuest().getCandiesFoundMessage()))
};b.prototype.addWeapon=function(){this.addQuestEntityWeapon(new QuestEntityWeapon(this.getQuest(),this,new Naming("Nougat","nougat"),new CollisionBoxCollection(new CollisionBox(this,new Pos(-1,-1),new Pos(17,6))),3000));
this.getLastQuestEntityWeapon().getCloseCombatDelay().setBetweenDelay(20,40)};b.prototype.reDrawAscii=function(){switch(this.step){case GiantNougatMonsterStep.ASLEEP:this.getRenderArea().drawArray(Database.getAscii("places/quests/giantNougatMonster/monster"));
break;case GiantNougatMonsterStep.AWAKE:this.getRenderArea().drawArray(Database.getAscii("places/quests/giantNougatMonster/monsterAwake"));
break;case GiantNougatMonsterStep.ANGRY:this.getRenderArea().drawArray(Database.getAscii("places/quests/giantNougatMonster/monsterAngry"));
break}};return b})(QuestEntity);var GiantSpoonOfDoom=(function(b){__extends(a,b);
function a(){b.call(this,"eqItemWeaponGiantSpoonOfDoom","eqItemWeaponGiantSpoonOfDoomName","eqItemWeaponGiantSpoonOfDoomDescription","eqItems/weapons/giantSpoonOfDoom")
}a.prototype.getQuestEntityWeapon=function(c,e){var d=new QuestEntityWeapon(c,e,new Naming("The giant Spoon of Doom","the giant Spoon of Doom"),e.getClassicCollisionBoxCollection(),315);
d.getCloseCombatDelay().setFixedDelay(14,0);return d};return a})(EqItem);var GiantSpoon=(function(a){__extends(b,a);
function b(){a.call(this,"eqItemWeaponGiantSpoon","eqItemWeaponGiantSpoonName","eqItemWeaponGiantSpoonDescription","eqItems/weapons/giantSpoon")
}b.prototype.getQuestEntityWeapon=function(c,e){var d=new QuestEntityWeapon(c,e,new Naming("A giant spoon","a giant spoon"),e.getClassicCollisionBoxCollection(),70);
d.getCloseCombatDelay().setFixedDelay(7,0);return d};return b})(EqItem);var Hell=(function(b){__extends(a,b);
function a(c){b.call(this,c);this.resizeQuest(150,30);this.addPlayerCollisionBoxes(true,true,true,true);
this.getGame().getPlayer().loadCandyBoxCharacter(this);this.getGame().getPlayer().setGlobalPosition(new Pos(0,23));
this.configPlayerOrClone(this.getGame().getPlayer());this.addEntity(this.getGame().getPlayer());
this.addFloor(0,20);this.addLava(new Pos(53,27),new Pos(20,2));this.addLava(new Pos(92,27),new Pos(16,2));
this.addDevil(new Pos(130,2));this.addCamazotz(new Pos(Random.between(70,100),2));
this.getGame().getQuestLog().addMessage(new QuestLogMessage("You enter Hell."))}a.prototype.castPlayerTeleport=function(){b.prototype.castPlayerTeleport.call(this,new Pos(0,0),new Pos(20,21))
};a.prototype.configPlayerOrClone=function(c){c.setQuestEntityMovement(new QuestEntityMovement(new Pos(1,0)));
c.getQuestEntityMovement().setGravity(true);c.getQuestEntityMovement().setWormsLike(true)
};a.prototype.endQuest=function(c){if(c){this.getGame().getQuestLog().addMessage(new QuestLogMessage("You managed to beat the devil itself!"))
}else{this.getGame().getQuestLog().addMessage(new QuestLogMessage("You died in Hell. Your soul will wander here for all eternity."))
}b.prototype.endQuest.call(this,c)};a.prototype.update=function(){if(this.getQuestEnded()==false){if(this.thePlayerWon()){this.endQuest(true);
return}if(this.getGame().getPlayer().shouldDie()){this.endQuest(false);return}this.updateEntities()
}this.preDraw();this.drawBackground(0,20);this.drawEntities();this.drawAroundQuest();
if(this.getQuestEnded()==false){this.addExitQuestButton(new CallbackCollection(this.getGame().goToMainMap.bind(this.getGame())),"buttonExitQuestNoKeeping")
}else{if(this.getQuestEndedAndWeWon()==false){this.addExitQuestButton(new CallbackCollection(this.getGame().goToMainMap.bind(this.getGame())),"buttonExitQuestNoKeepingBecauseLose")
}else{this.addExitQuestButton(new CallbackCollection(this.getGame().goToMainMap.bind(this.getGame())),"buttonExitQuestKeeping")
}}this.postDraw()};a.prototype.addCamazotz=function(d){var c;c=new Camazotz(this,d);
c.setHealthBar(new QuestEntityHealthBar(c,new Pos(22,1),new Pos(0,0)));this.addEntity(c)
};a.prototype.addDevil=function(c){this.devil=new Devil(this,c,2,19);this.devil.setHealthBar(new QuestEntityHealthBar(this.devil,new Pos(100,1),new Pos(0,0),QuestEntityHealthBarPositionType.FIXED_ON_PAGE,true,true,BarType.HEALTH));
this.addEntity(this.devil)};a.prototype.addFloor=function(d,e){var c=new Wall(this,new Pos(d,e));
c.addBox(new Pos(0,4),new Pos(53,6));c.addBox(new Pos(73,4),new Pos(19,6));c.addBox(new Pos(108,4),new Pos(42,6));
c.addBox(new Pos(0,9),new Pos(150,1));this.addEntity(c)};a.prototype.addLava=function(d,c){this.addEntity(new Lava(this,d,c))
};a.prototype.drawBackground=function(c,d){this.getRenderArea().drawArray(Database.getAscii("places/quests/hell/background"),this.getRealQuestPosition().x+c,this.getRealQuestPosition().y+d);
this.drawLava(c+55,c+71,d+4);this.drawLava(c+54,c+72,d+5);this.drawLava(c+53,c+73,d+6);
this.drawLava(c+52,c+74,d+7);this.drawLava(c+51,c+75,d+8);this.drawLava(c+51,c+75,d+9);
this.drawLava(c+94,c+106,d+4);this.drawLava(c+93,c+107,d+5);this.drawLava(c+92,c+108,d+6);
this.drawLava(c+91,c+109,d+7);this.drawLava(c+90,c+110,d+8);this.drawLava(c+90,c+110,d+9)
};a.prototype.drawLava=function(d,c,e){this.getRenderArea().addBackgroundColor(this.getRealQuestPosition().x+d,this.getRealQuestPosition().x+c,this.getRealQuestPosition().y+e,new Color(ColorType.HELL_RED_LAVA))
};a.prototype.thePlayerWon=function(){if(this.devil.shouldDie()==true){return true
}return false};return a})(Quest);var Hotkey=(function(){function a(b,c){this.pressed=false;
this.keyString=b;switch(this.keyString){case"up":this.key=38;break;case"down":this.key=40;
break;case"left":this.key=37;break;case"right":this.key=39;break;case"space":this.key=32;
break;case"enter":this.key=13;break;case"delete":this.key=8;break;case"numpad0":this.key=96;
break;case"numpad1":this.key=97;break;case"numpad2":this.key=98;break;case"numpad3":this.key=99;
break;case"numpad4":this.key=100;break;case"numpad5":this.key=101;break;case"numpad6":this.key=102;
break;case"numpad7":this.key=103;break;case"numpad8":this.key=104;break;case"numpad9":this.key=105;
break;default:this.key=this.keyString.toUpperCase().charCodeAt(0);break}this.callbackCollection=c
}a.prototype.getCallbackCollection=function(){return this.callbackCollection};a.prototype.getKey=function(){return this.key
};a.prototype.getKeyString=function(){return this.keyString};a.prototype.getPressed=function(){return this.pressed
};a.prototype.setPressed=function(b){this.pressed=b};return a})();var InsideFortress=(function(a){__extends(b,a);
function b(c){a.call(this,c);this.renderArea=new RenderArea();this.renderArea.resizeFromArray(Database.getAscii("places/fortress/inside"),0,4);
this.update()}b.prototype.getRenderArea=function(){return this.renderArea};b.prototype.addFirstDoorButton=function(c,d){this.renderArea.addMultipleAsciiButtons("fortressInsideFirstDoorButton",c+11,c+14,d,c+7,c+14,d+1,c+3,c+14,d+2,c,c+14,d+3,c,c+14,d+4,c,c+14,d+5,c,c+14,d+6,c,c+14,d+7,c,c+14,d+8,c,c+14,d+9,c,c+14,d+10,c,c+14,d+11,c,c+14,d+12,c,c+14,d+13,c,c+14,d+14,c,c+14,d+15,c,c+14,d+16,c,c+14,d+17,c,c+10,d+18,c,c+6,d+19,c,c+2,d+20,c,c+1,d+21);
this.renderArea.addLinkCall(".fortressInsideFirstDoorButton",new CallbackCollection(this.goToFirstRoom.bind(this)))
};b.prototype.addSecondDoorButton=function(c,d){this.renderArea.addMultipleAsciiButtons("fortressInsideSecondDoorButton",c,c+15,d,c,c+15,d+1,c,c+15,d+2,c,c+15,d+3,c,c+15,d+4,c,c+15,d+5,c,c+15,d+6,c,c+15,d+7,c,c+15,d+8,c,c+15,d+9,c,c+15,d+10,c,c+15,d+11,c,c+15,d+12,c,c+15,d+13,c,c+15,d+14,c,c+15,d+15,c,c+15,d+16,c,c+15,d+17);
this.renderArea.addLinkCall(".fortressInsideSecondDoorButton",new CallbackCollection(this.goToSecondRoom.bind(this)))
};b.prototype.addThirdDoorButton=function(c,d){this.renderArea.addMultipleAsciiButtons("fortressInsideThirdDoorButton",c,c+3,d,c,c+7,d+1,c,c+11,d+2,c,c+14,d+3,c,c+14,d+4,c,c+14,d+5,c,c+14,d+6,c,c+14,d+7,c,c+14,d+8,c,c+14,d+9,c,c+14,d+10,c,c+14,d+11,c,c+14,d+12,c,c+14,d+13,c,c+14,d+14,c,c+14,d+15,c,c+14,d+16,c,c+14,d+17,c+4,c+14,d+18,c+8,c+14,d+19,c+12,c+14,d+20,c+13,c+14,d+21);
this.renderArea.addLinkCall(".fortressInsideThirdDoorButton",new CallbackCollection(this.goToThirdRoom.bind(this)))
};b.prototype.goToFirstRoom=function(){if(this.getGame().canStartQuest()){this.getGame().setPlace(new FortressRoom1(this.getGame()))
}};b.prototype.goToSecondRoom=function(){if(this.getGame().canStartQuest()){this.getGame().setPlace(new FortressRoom2(this.getGame()))
}};b.prototype.goToThirdRoom=function(){if(this.getGame().canStartQuest()){this.getGame().setPlace(new FortressRoom3(this.getGame()))
}};b.prototype.update=function(){this.renderArea.resetAllButSize();this.addBackToMainMapButton(this.renderArea,"insideFortressBackToTheMapButton");
this.renderArea.drawArray(Database.getAscii("places/fortress/inside"),0,3);this.renderArea.drawString(Database.getText("fortressInsideText0"),22,29);
this.renderArea.drawString(Database.getText("fortressInsideText1"),22,30);this.renderArea.drawString(Database.getText("fortressInsideText2"),22,31);
this.renderArea.drawString(Database.getTranslatedText("fortressInsideText0"),22,33,true);
this.renderArea.drawString(Database.getTranslatedText("fortressInsideText1"),22,34,true);
this.renderArea.drawString(Database.getTranslatedText("fortressInsideText2"),22,35,true);
this.addFirstDoorButton(8,10);this.addSecondDoorButton(42,8);this.addThirdDoorButton(78,10)
};return b})(Place);var InsideYourBoxSweet=(function(){function a(){this.asciiArt="general/insideYourBox/"+Random.between(0,10);
this.pos=new Pos(-Database.getAsciiWidth(this.asciiArt)+Random.between(0,99+Database.getAsciiWidth(this.asciiArt)),-Database.getAsciiHeight(this.asciiArt));
this.speed=Random.between(1,3)}a.prototype.draw=function(b){b.drawArray(Database.getAscii(this.asciiArt),this.pos.x,this.pos.y)
};a.prototype.update=function(){if(this.pos.y>=40){return true}this.speed+=0.3;this.pos.y+=Math.floor(this.speed)
};return a})();var InsideYourBox=(function(b){__extends(a,b);function a(c){b.call(this,c);
this.renderArea=new RenderArea();this.sweets=[];this.intervalID=setInterval(this.actionInterval.bind(this),100);
this.renderArea.resize(100,40);this.update()}a.prototype.getRenderArea=function(){return this.renderArea
};a.prototype.willStopBeingDisplayed=function(){clearInterval(this.intervalID)};a.prototype.actionInterval=function(){this.update();
this.getGame().updatePlace()};a.prototype.update=function(){this.renderArea.resetAllButSize();
this.sweets.push(new InsideYourBoxSweet());for(var c=0;c<this.sweets.length;c++){if(this.sweets[c].update()){this.sweets.splice(c,1);
c--}}for(var c=0;c<this.sweets.length;c++){this.sweets[c].draw(this.renderArea)}this.renderArea.drawArray(Database.getAscii("general/insideYourBox/text"),0,5,new RenderTransparency(" ","%"))
};return a})(Place);var Inventory=(function(b){__extends(a,b);function a(c){b.call(this,c);
this.renderArea=new RenderArea();this.renderArea.resize(99,136);this.update()}a.prototype.update=function(){var c=0;
this.renderArea.resetAllButSize();this.renderArea.drawArray(Database.getAscii("general/inventoryTop"));
this.drawEquipment();c+=this.drawStats(0,52);this.renderArea.drawArray(Database.getAscii("general/inventoryBottom"),0,55+c);
this.drawGridItems(4,57+c)};a.prototype.getRenderArea=function(){return this.renderArea
};a.prototype.createArrayFromEqItemsArrayForRenderAreaList=function(f,d){var c=[];
c.push(d);c.push(Database.getText("inventorySpecialNothingEqItem")+(Database.getTranslatedText("inventorySpecialNothingEqItem")==""?"":" ("+Database.getTranslatedText("inventorySpecialNothingEqItem")+")"));
for(var e in f){if(f[e].isPossessed()){c.push(e);c.push(Database.getText(f[e].getDatabaseName())+(Database.getTranslatedText(f[e].getDatabaseName())==""?"":" ("+Database.getTranslatedText(f[e].getDatabaseName())+")"))
}}return c};a.prototype.disableAllLists=function(){$("#inventoryWeaponsList").prop("disabled",true);
$("#inventoryHatsList").prop("disabled",true);$("#inventoryBodyArmoursList").prop("disabled",true);
$("#inventoryGlovesList").prop("disabled",true);$("#inventoryBootsList").prop("disabled",true)
};a.prototype.drawEqItem=function(e,d,c){if(e!=null){this.renderArea.drawArray(Database.getAscii(e.getAscii()),Math.floor(d.x+c.x/2-Database.getAsciiWidth(e.getAscii())/2),Math.floor(d.y+c.y/2-Database.getAsciiHeight(e.getAscii())/2),null,e.getSavingName()+"OnHover");
this.renderArea.addTooltip(e.getSavingName()+"Tooltip",Database.getText(e.getDatabaseDescriptionName())+(Database.getTranslatedText(e.getDatabaseDescriptionName())!=""?"<br/><br/><i>"+Database.getTranslatedText(e.getDatabaseDescriptionName())+"</i>":""));
this.renderArea.addLinkOnHoverShowTooltip("."+e.getSavingName()+"OnHover","."+e.getSavingName()+"Tooltip")
}};a.prototype.drawEquipment=function(){var c;c=this.createArrayFromEqItemsArrayForRenderAreaList(this.getGame().getWeapons(),"inventorySpecialNothingWeapon");
if(c.length>2){this.renderArea.addList(8,38,15,"inventoryWeaponsList",new CallbackCollection(this.selectedEqItem.bind(this)),c)
}c=this.createArrayFromEqItemsArrayForRenderAreaList(this.getGame().getHats(),"inventorySpecialNothingHat");
if(c.length>2){this.renderArea.drawArray(Database.getAscii("general/inventoryHat"),59,12);
this.renderArea.addList(61,93,14,"inventoryHatsList",new CallbackCollection(this.selectedEqItem.bind(this)),c)
}c=this.createArrayFromEqItemsArrayForRenderAreaList(this.getGame().getBodyArmours(),"inventorySpecialNothingBodyArmour");
if(c.length>2){this.renderArea.drawArray(Database.getAscii("general/inventoryBodyArmour"),59,25);
this.renderArea.addList(61,78,27,"inventoryBodyArmoursList",new CallbackCollection(this.selectedEqItem.bind(this)),c)
}c=this.createArrayFromEqItemsArrayForRenderAreaList(this.getGame().getGloves(),"inventorySpecialNothingGloves");
if(c.length>2){this.renderArea.drawArray(Database.getAscii("general/inventoryGloves"),82,25);
this.renderArea.addList(84,93,27,"inventoryGlovesList",new CallbackCollection(this.selectedEqItem.bind(this)),c)
}c=this.createArrayFromEqItemsArrayForRenderAreaList(this.getGame().getBoots(),"inventorySpecialNothingBoots");
if(c.length>2){this.renderArea.drawArray(Database.getAscii("general/inventoryBoots"),59,38);
this.renderArea.addList(61,93,40,"inventoryBootsList",new CallbackCollection(this.selectedEqItem.bind(this)),c)
}this.renderArea.addLinkCallbackCollection(new CallbackCollection(this.selectRightEqItems.bind(this)));
if(this.getGame().getWeAreQuesting()==true){this.renderArea.addLinkCallbackCollection(new CallbackCollection(this.disableAllLists.bind(this)))
}this.drawEqItem(this.getGame().getSelectedEqItems()["weapon"],new Pos(7,16),new Pos(32,33));
this.drawEqItem(this.getGame().getSelectedEqItems()["hat"],new Pos(60,16),new Pos(34,8));
this.drawEqItem(this.getGame().getSelectedEqItems()["bodyArmour"],new Pos(60,28),new Pos(19,8));
this.drawEqItem(this.getGame().getSelectedEqItems()["gloves"],new Pos(83,28),new Pos(11,8));
this.drawEqItem(this.getGame().getSelectedEqItems()["boots"],new Pos(60,41),new Pos(34,8))
};a.prototype.drawGridItem=function(d,c,e){this.renderArea.drawArray(Database.getAscii(d.getAscii()),c+d.getPosition().x*23+Math.floor(23/2-Database.getAsciiWidth(d.getAscii())/2),e+d.getPosition().y*12+Math.floor(11/2-Database.getAsciiHeight(d.getAscii())/2),null,d.getSavingName()+"OnHover");
this.renderArea.addTooltip(d.getSavingName()+"Tooltip","<b>"+Database.getText(d.getDatabaseName())+"</b><br/>"+Database.getText(d.getDatabaseDescriptionName())+(Database.getTranslatedText(d.getDatabaseDescriptionName())!=""?"<br/><br/><i><b>"+Database.getTranslatedText(d.getDatabaseName())+"</b><br/>"+Database.getTranslatedText(d.getDatabaseDescriptionName())+"</i>":""));
this.renderArea.addLinkOnHoverShowTooltip("."+d.getSavingName()+"OnHover","."+d.getSavingName()+"Tooltip")
};a.prototype.drawGridItems=function(c,e){for(var d in this.getGame().getGridItems()){if(this.getGame().getGridItems()[d].isPossessed()){this.drawGridItem(this.getGame().getGridItems()[d],c,e)
}}};a.prototype.drawStats=function(d,h){var f;if(Saving.loadBool("gridItemPossessedXinopherydonClaw")&&(this.getGame().getSelectedEqItems()["bodyArmour"]!=null&&this.getGame().getSelectedEqItems()["bodyArmour"].getSavingName()=="eqItemBodyArmoursEnchantedKnightBodyArmour")){f=""
}else{if(Saving.loadBool("gridItemPossessedXinopherydonClaw")){f=" x 2"}else{if((this.getGame().getSelectedEqItems()["bodyArmour"]!=null&&this.getGame().getSelectedEqItems()["bodyArmour"].getSavingName()=="eqItemBodyArmoursEnchantedKnightBodyArmour")){f=" / 2"
}else{f=""}}}var c=[];this.renderArea.drawString(this.getGame().getPlayer().getMaxHp().toString(),d+16,h);
this.renderArea.drawString(this.getGame().getPlayer().getQuestEntityWeapon().getRealDamageText()+f,d+43,h);
this.renderArea.drawString(this.getGame().getPlayer().getQuestEntityWeapon().getSpeedText(),d+71,h);
for(var g in this.getGame().getGridItems()){if(this.getGame().getGridItems()[g].isPossessed()){if(this.getGame().getGridItems()[g].getSpecialAbility()!=null){c.push(this.getGame().getGridItems()[g].getSpecialAbility())
}}}if(this.getGame().getSelectedEqItems()["weapon"]!=null&&this.getGame().getSelectedEqItems()["weapon"].getSpecialAbility()!=null){c.push(this.getGame().getSelectedEqItems()["weapon"].getSpecialAbility())
}if(this.getGame().getSelectedEqItems()["hat"]!=null&&this.getGame().getSelectedEqItems()["hat"].getSpecialAbility()!=null){c.push(this.getGame().getSelectedEqItems()["hat"].getSpecialAbility())
}if(this.getGame().getSelectedEqItems()["bodyArmour"]!=null&&this.getGame().getSelectedEqItems()["bodyArmour"].getSpecialAbility()!=null){c.push(this.getGame().getSelectedEqItems()["bodyArmour"].getSpecialAbility())
}if(this.getGame().getSelectedEqItems()["gloves"]!=null&&this.getGame().getSelectedEqItems()["gloves"].getSpecialAbility()!=null){c.push(this.getGame().getSelectedEqItems()["gloves"].getSpecialAbility())
}if(this.getGame().getSelectedEqItems()["boots"]!=null&&this.getGame().getSelectedEqItems()["boots"].getSpecialAbility()!=null){c.push(this.getGame().getSelectedEqItems()["boots"].getSpecialAbility())
}if(Saving.loadNumber("gameGiftPower")>0){c.push("GIFT : your attacks are "+(Saving.loadNumber("gameGiftPower")*20).toString()+"% more powerful.")
}if(Saving.loadNumber("gameGiftHealth")>0){c.push("GIFT : you have "+(Saving.loadNumber("gameGiftHealth")*20).toString()+"% more health points.")
}if(Saving.loadNumber("gameGiftMagic")>0){c.push("GIFT : the spell and potion countdowns are reduced by "+(Saving.loadNumber("gameGiftMagic")*15)+"%.")
}if(c.length==0){c.push("You have no special ability.")}for(var e=0;e<c.length;e++){if(e!=0){this.renderArea.drawArray(Database.getAscii("general/specialAbilityBackground"),d,h+2+e)
}this.renderArea.drawString(c[e],d+7,h+2+e)}return c.length-1};a.prototype.selectedEqItem=function(){if($("#inventoryWeaponsList").length){Saving.saveString("gameWeaponSelected",$("#inventoryWeaponsList").find(":selected").attr("id"))
}else{Saving.saveString("gameWeaponSelected","inventorySpecialNothingWeapon")}if($("#inventoryHatsList").length){Saving.saveString("gameHatSelected",$("#inventoryHatsList").find(":selected").attr("id"))
}else{Saving.saveString("gameHatSelected","inventorySpecialNothingHat")}if($("#inventoryBodyArmoursList").length){Saving.saveString("gameBodyArmourSelected",$("#inventoryBodyArmoursList").find(":selected").attr("id"))
}else{Saving.saveString("gameBodyArmourSelected","inventorySpecialNothingBodyArmour")
}if($("#inventoryGlovesList").length){Saving.saveString("gameGlovesSelected",$("#inventoryGlovesList").find(":selected").attr("id"))
}else{Saving.saveString("gameGlovesSelected","inventorySpecialNothingGloves")}if($("#inventoryBootsList").length){Saving.saveString("gameBootsSelected",$("#inventoryBootsList").find(":selected").attr("id"))
}else{Saving.saveString("gameBootsSelected","inventorySpecialNothingBoots")}this.getGame().emptyAndFillSelectedEqItemsArray();
this.getGame().getPlayer().reCalcMaxHp();this.update();this.getGame().updatePlace()
};a.prototype.selectRightEqItems=function(){$("#"+Saving.loadString("gameWeaponSelected")).prop("selected",true);
$("#"+Saving.loadString("gameHatSelected")).prop("selected",true);$("#"+Saving.loadString("gameBodyArmourSelected")).prop("selected",true);
$("#"+Saving.loadString("gameGlovesSelected")).prop("selected",true);$("#"+Saving.loadString("gameBootsSelected")).prop("selected",true)
};return a})(Place);var IronAxe=(function(b){__extends(a,b);function a(){b.call(this,"eqItemWeaponIronAxe","eqItemWeaponIronAxeName","eqItemWeaponIronAxeDescription","eqItems/weapons/ironAxe")
}a.prototype.getQuestEntityWeapon=function(c,e){var d=new QuestEntityWeapon(c,e,new Naming("An iron axe","an iron axe"),e.getClassicCollisionBoxCollection(),3);
d.getCloseCombatDelay().setFixedDelay(3,0);return d};return a})(EqItem);var JellyFish=(function(b){__extends(a,b);
function a(c,d){b.call(this,c,d,new Naming("A jellyfish","a jellyfish"),new RenderArea(6,5),new Pos(0,0),new CollisionBoxCollection(new CollisionBox(this,new Pos(0,1),new Pos(6,1)),new CollisionBox(this,new Pos(1,2),new Pos(4,1)),new CollisionBox(this,new Pos(0,3),new Pos(4,1)),new CollisionBox(this,new Pos(1,4),new Pos(4,1))),new QuestEntityMovement(new Pos(-1,0)));
this.setDestructible(true);this.setMaxHp(42);this.setHp(42);this.getRenderArea().drawArray(Database.getAscii("places/quests/theSea/jellyFish"));
this.setTransparency(new RenderTransparency(" ","%"));this.addQuestEntityWeapon(new QuestEntityWeapon(this.getQuest(),this,new Naming("Poisoned tentacles","poisoned tentacles"),new CollisionBoxCollection(new CollisionBox(this,new Pos(-1,-1),new Pos(8,7))),2));
this.getLastQuestEntityWeapon().getCloseCombatDelay().setFixedDelay(0)}a.prototype.update=function(){this.goTowards(this.getRenderAreaCenter(),this.getQuest().getGame().getPlayer().getRenderAreaCenter(),3);
b.prototype.update.call(this)};a.prototype.willDie=function(){this.getQuest().getGame().getQuestLog().addMessage(new QuestLogMessage(this.getDeathMessage()+" (and found "+Algo.pluralFormat(this.getQuest().foundCandies(120)," candy"," candies")+")",this.getQuest().getCandiesFoundMessage()))
};return a})(QuestEntity);var Keyboard;(function(a){var b;function d(g){b=g}a.setGame=d;
function c(){$(document).keydown(function(k){var h=f();for(var g in b.getHotkeys()){if(k.which==b.getHotkeys()[g].getKey()){b.getHotkeys()[g].setPressed(true);
if(h){if(b.getHotkeys()[g].getCallbackCollection()!=null){b.getHotkeys()[g].getCallbackCollection().fire()
}k.preventDefault();return false}}}if(h){for(var j=0;j<b.getSpecialHotkeys().length;
j++){if(k.which==b.getSpecialHotkeys()[j].getKey()){if(b.getSpecialHotkeys()[j].getCallbackCollection()!=null){b.getSpecialHotkeys()[j].getCallbackCollection().fire()
}k.preventDefault();return false}}}});$(document).keyup(function(h){for(var g in b.getHotkeys()){if(h.which==b.getHotkeys()[g].getKey()){b.getHotkeys()[g].setPressed(false)
}}})}a.execute=c;function f(){if($(":focus").hasClass("noHotkeys")){return false}return true
}function e(g){return b.getHotkeys()[g].getPressed()}a.isKeyPressed=e})(Keyboard||(Keyboard={}));
var KnightBodyArmour=(function(b){__extends(a,b);function a(){b.call(this,"eqItemBodyArmoursKnightBodyArmour","eqItemBodyArmoursKnightBodyArmourName","eqItemBodyArmoursKnightBodyArmourDescription","eqItems/bodyArmours/knightBodyArmour")
}a.prototype.getSpecialAbility=function(){return"Damage taken reduced by 30% (knight body armour)"
};a.prototype.inflictDamage=function(d,c,e,f){return Math.ceil(e-e*30/100)};return a
})(EqItem);var Knight=(function(b){__extends(a,b);function a(c,d){b.call(this,c,d,new Naming("A knight","a knight"),new RenderArea(15,6),new Pos(0,0),new CollisionBoxCollection(new CollisionBox(this,new Pos(3,1),new Pos(1,1)),new CollisionBox(this,new Pos(6,1),new Pos(3,1)),new CollisionBox(this,new Pos(0,2),new Pos(9,1)),new CollisionBox(this,new Pos(2,3),new Pos(13,1)),new CollisionBox(this,new Pos(3,4),new Pos(9,1)),new CollisionBox(this,new Pos(4,5),new Pos(2,1)),new CollisionBox(this,new Pos(9,5),new Pos(2,1))),new QuestEntityMovement(new Pos(0,0)));
this.moving=false;this.currentAsciiNumber=1;this.getQuestEntityMovement().setGravity(true);
this.setDestructible(true);this.setMaxHp(150);this.setHp(150);this.reDrawAscii();
this.setTransparency(new RenderTransparency(" ","%"));this.addQuestEntityWeapon(new QuestEntityWeapon(this.getQuest(),this,new Naming("A sword","a sword"),new CollisionBoxCollection(new CollisionBox(this,new Pos(-1,0),new Pos(17,7))),70));
this.getLastQuestEntityWeapon().getCloseCombatDelay().setFixedDelay(8)}a.prototype.update=function(){if(this.moving==false){if(this.testNewGlobalPosition(this.getGlobalPosition().plus(new Pos(-3,0)))){this.moving=true;
this.getQuestEntityMovement().setOffset(new Pos(-3,0))}}else{if(this.testNewGlobalPosition(this.getGlobalPosition().plus(new Pos(-3,0)))==false){this.moving=false;
this.getQuestEntityMovement().setOffset(new Pos(0,0));this.currentAsciiNumber=1;this.reDrawAscii()
}else{this.currentAsciiNumber+=1;if(this.currentAsciiNumber>5){this.currentAsciiNumber=1
}this.reDrawAscii()}}b.prototype.update.call(this)};a.prototype.willDie=function(){this.getQuest().getGame().getQuestLog().addMessage(new QuestLogMessage(this.getDeathMessage()+" (and found "+Algo.pluralFormat(this.getQuest().foundCandies(800+Random.upTo(15)*100)," candy"," candies")+")",this.getQuest().getCandiesFoundMessage()));
if(Random.oneChanceOutOf(5)){this.getQuest().foundGridOrEqItem(new QuestItemFound(this.getQuest(),"eqItemBodyArmoursKnightBodyArmour","You found a body armour on a knight","You gain a knight body armour"))
}};a.prototype.reDrawAscii=function(){this.getRenderArea().drawArray(Database.getAscii("places/quests/castleEntrance/knight"+this.currentAsciiNumber.toString()))
};return a})(QuestEntity);var Lava=(function(b){__extends(a,b);function a(c,e,d){b.call(this,c,e,new Naming("Lava","lava"));
this.setTeam(QuestEntityTeam.NATURE);this.addQuestEntityWeapon(new QuestEntityWeapon(this.getQuest(),this,new Naming("Fire","fire"),new CollisionBoxCollection(new CollisionBox(this,new Pos(0,0),d)),1000));
this.getLastQuestEntityWeapon().getCloseCombatDelay().setFixedDelay(0)}return a})(QuestEntity);
var LeatherBoots=(function(b){__extends(a,b);function a(){b.call(this,"eqItemBootsLeatherBoots","eqItemBootsLeatherBootsName","eqItemBootsLeatherBootsDescription","eqItems/boots/leatherBoots")
}return a})(EqItem);var LeatherGloves=(function(a){__extends(b,a);function b(){a.call(this,"eqItemGlovesLeatherGloves","eqItemGlovesLeatherGlovesName","eqItemGlovesLeatherGlovesDescription","eqItems/gloves/leatherGloves")
}return b})(EqItem);var LighthousePuzzlePart=(function(){function a(f,d,b,c,e){if(e===void 0){e=false
}this.lighthouse=f;this.type=d;this.lives=b;this.arrayPos=c;this.shown=e}a.prototype.addLives=function(b){this.lives+=b;
if(this.lives>5){this.lives=5}};a.prototype.draw=function(c,d){if(this.shown){switch(this.type){case LighthousePuzzlePartType.BLANK:c.drawArray(Database.getAscii("places/lighthouse/puzzle/blankPart"),d.x,d.y);
break;case LighthousePuzzlePartType.SHOW_AROUND:c.drawArray(Database.getAscii("places/lighthouse/puzzle/showAroundPart"),d.x,d.y);
break;case LighthousePuzzlePartType.SHOW_LEFT:c.drawArray(Database.getAscii("places/lighthouse/puzzle/showLeft"),d.x,d.y);
break;case LighthousePuzzlePartType.SHOW_BELOW:c.drawArray(Database.getAscii("places/lighthouse/puzzle/showBelow"),d.x,d.y);
break;case LighthousePuzzlePartType.SHOW_ABOVE:c.drawArray(Database.getAscii("places/lighthouse/puzzle/showAbove"),d.x,d.y);
break;case LighthousePuzzlePartType.SHOW_RIGHT:c.drawArray(Database.getAscii("places/lighthouse/puzzle/showRight"),d.x,d.y);
break;case LighthousePuzzlePartType.SHOW_LEFT_RIGHT:c.drawArray(Database.getAscii("places/lighthouse/puzzle/showLeftRight"),d.x,d.y);
break;case LighthousePuzzlePartType.MOVE_BELOW_LINE_TO_THE_RIGHT:c.drawArray(Database.getAscii("places/lighthouse/puzzle/moveBelowLineToTheRight"),d.x,d.y);
break;case LighthousePuzzlePartType.MOVE_LEFT_LINE_ABOVE:c.drawArray(Database.getAscii("places/lighthouse/puzzle/moveLeftLineAbove"),d.x,d.y);
break;case LighthousePuzzlePartType.LIVES:c.drawArray(Database.getAscii("places/lighthouse/puzzle/livesPart"),d.x,d.y);
break;case LighthousePuzzlePartType.WHAT:c.drawArray(Database.getAscii("places/lighthouse/puzzle/whatPart"),d.x,d.y);
break;case LighthousePuzzlePartType.NOTHING_HERE:c.drawArray(Database.getAscii("places/lighthouse/puzzle/nothingHerePart"),d.x,d.y);
break;case LighthousePuzzlePartType.STONE:c.drawArray(Database.getAscii("places/lighthouse/puzzle/stonePart"),d.x,d.y);
break}switch(this.type){default:c.drawHorizontalLine("#",d.x+1,d.x+1+this.lives,d.y+1);
break}if(this.lives>0){for(var b=0;b<4;b++){c.addAsciiButton(d.x+1,d.x+6,d.y+1+b,"lighthousePuzzlePart"+d.x.toString()+"_"+d.y.toString())
}c.addLinkCall(".lighthousePuzzlePart"+d.x.toString()+"_"+d.y.toString(),new CallbackCollection(this.clicked.bind(this)))
}}};a.prototype.getLives=function(){return this.lives};a.prototype.getShown=function(){return this.shown
};a.prototype.setArrayPos=function(b){this.arrayPos=b};a.prototype.setShown=function(b){this.shown=b
};a.prototype.clicked=function(){var c;switch(this.type){case LighthousePuzzlePartType.SHOW_AROUND:if(this.arrayPos.y>0&&this.lighthouse.getPuzzle().getParts()[this.arrayPos.x][this.arrayPos.y-1]!=null&&this.lighthouse.getPuzzle().getParts()[this.arrayPos.x][this.arrayPos.y-1].getShown()==false){this.lighthouse.getPuzzle().getParts()[this.arrayPos.x][this.arrayPos.y-1].setShown(true)
}else{if(this.arrayPos.x<6&&this.lighthouse.getPuzzle().getParts()[this.arrayPos.x+1][this.arrayPos.y]!=null&&this.lighthouse.getPuzzle().getParts()[this.arrayPos.x+1][this.arrayPos.y].getShown()==false){this.lighthouse.getPuzzle().getParts()[this.arrayPos.x+1][this.arrayPos.y].setShown(true)
}else{if(this.arrayPos.y<4&&this.lighthouse.getPuzzle().getParts()[this.arrayPos.x][this.arrayPos.y+1]!=null&&this.lighthouse.getPuzzle().getParts()[this.arrayPos.x][this.arrayPos.y+1].getShown()==false){this.lighthouse.getPuzzle().getParts()[this.arrayPos.x][this.arrayPos.y+1].setShown(true)
}else{if(this.arrayPos.x>0&&this.lighthouse.getPuzzle().getParts()[this.arrayPos.x-1][this.arrayPos.y]!=null&&this.lighthouse.getPuzzle().getParts()[this.arrayPos.x-1][this.arrayPos.y].getShown()==false){this.lighthouse.getPuzzle().getParts()[this.arrayPos.x-1][this.arrayPos.y].setShown(true)
}}}}break;case LighthousePuzzlePartType.SHOW_LEFT:if(this.arrayPos.x>0&&this.lighthouse.getPuzzle().getParts()[this.arrayPos.x-1][this.arrayPos.y]!=null&&this.lighthouse.getPuzzle().getParts()[this.arrayPos.x-1][this.arrayPos.y].getShown()==false){this.lighthouse.getPuzzle().getParts()[this.arrayPos.x-1][this.arrayPos.y].setShown(true)
}break;case LighthousePuzzlePartType.SHOW_BELOW:if(this.arrayPos.y<4&&this.lighthouse.getPuzzle().getParts()[this.arrayPos.x][this.arrayPos.y+1]!=null&&this.lighthouse.getPuzzle().getParts()[this.arrayPos.x][this.arrayPos.y+1].getShown()==false){this.lighthouse.getPuzzle().getParts()[this.arrayPos.x][this.arrayPos.y+1].setShown(true)
}break;case LighthousePuzzlePartType.SHOW_ABOVE:if(this.arrayPos.y>0&&this.lighthouse.getPuzzle().getParts()[this.arrayPos.x][this.arrayPos.y-1]!=null&&this.lighthouse.getPuzzle().getParts()[this.arrayPos.x][this.arrayPos.y-1].getShown()==false){this.lighthouse.getPuzzle().getParts()[this.arrayPos.x][this.arrayPos.y-1].setShown(true)
}break;case LighthousePuzzlePartType.SHOW_RIGHT:if(this.arrayPos.x<6&&this.lighthouse.getPuzzle().getParts()[this.arrayPos.x+1][this.arrayPos.y]!=null&&this.lighthouse.getPuzzle().getParts()[this.arrayPos.x+1][this.arrayPos.y].getShown()==false){this.lighthouse.getPuzzle().getParts()[this.arrayPos.x+1][this.arrayPos.y].setShown(true)
}break;case LighthousePuzzlePartType.MOVE_BELOW_LINE_TO_THE_RIGHT:if(this.arrayPos.y<4){c=this.lighthouse.getPuzzle().getParts()[6][this.arrayPos.y+1];
for(var b=6;b>0;b--){this.lighthouse.getPuzzle().getParts()[b][this.arrayPos.y+1]=this.lighthouse.getPuzzle().getParts()[b-1][this.arrayPos.y+1];
if(this.lighthouse.getPuzzle().getParts()[b][this.arrayPos.y+1]!=null){this.lighthouse.getPuzzle().getParts()[b][this.arrayPos.y+1].setArrayPos(new Pos(b,this.arrayPos.y+1))
}}this.lighthouse.getPuzzle().getParts()[0][this.arrayPos.y+1]=c;if(this.lighthouse.getPuzzle().getParts()[0][this.arrayPos.y+1]!=null){this.lighthouse.getPuzzle().getParts()[0][this.arrayPos.y+1].setArrayPos(new Pos(0,this.arrayPos.y+1))
}}break;case LighthousePuzzlePartType.MOVE_LEFT_LINE_ABOVE:if(this.arrayPos.x>0){c=this.lighthouse.getPuzzle().getParts()[this.arrayPos.x-1][0];
for(var b=0;b<=3;b++){this.lighthouse.getPuzzle().getParts()[this.arrayPos.x-1][b]=this.lighthouse.getPuzzle().getParts()[this.arrayPos.x-1][b+1];
if(this.lighthouse.getPuzzle().getParts()[this.arrayPos.x-1][b]!=null){this.lighthouse.getPuzzle().getParts()[this.arrayPos.x-1][b].setArrayPos(new Pos(this.arrayPos.x-1,b))
}}this.lighthouse.getPuzzle().getParts()[this.arrayPos.x-1][4]=c;if(this.lighthouse.getPuzzle().getParts()[this.arrayPos.x-1][4]!=null){this.lighthouse.getPuzzle().getParts()[this.arrayPos.x-1][4].setArrayPos(new Pos(this.arrayPos.x-1,4))
}}break;case LighthousePuzzlePartType.LIVES:if(this.arrayPos.y>0&&this.lighthouse.getPuzzle().getParts()[this.arrayPos.x][this.arrayPos.y-1]!=null&&this.lighthouse.getPuzzle().getParts()[this.arrayPos.x][this.arrayPos.y-1].getShown()==true){this.lighthouse.getPuzzle().getParts()[this.arrayPos.x][this.arrayPos.y-1].addLives(1)
}if(this.arrayPos.x<6&&this.lighthouse.getPuzzle().getParts()[this.arrayPos.x+1][this.arrayPos.y]!=null&&this.lighthouse.getPuzzle().getParts()[this.arrayPos.x+1][this.arrayPos.y].getShown()==true){this.lighthouse.getPuzzle().getParts()[this.arrayPos.x+1][this.arrayPos.y].addLives(1)
}if(this.arrayPos.y<4&&this.lighthouse.getPuzzle().getParts()[this.arrayPos.x][this.arrayPos.y+1]!=null&&this.lighthouse.getPuzzle().getParts()[this.arrayPos.x][this.arrayPos.y+1].getShown()==true){this.lighthouse.getPuzzle().getParts()[this.arrayPos.x][this.arrayPos.y+1].addLives(1)
}if(this.arrayPos.x>0&&this.lighthouse.getPuzzle().getParts()[this.arrayPos.x-1][this.arrayPos.y]!=null&&this.lighthouse.getPuzzle().getParts()[this.arrayPos.x-1][this.arrayPos.y].getShown()==true){this.lighthouse.getPuzzle().getParts()[this.arrayPos.x-1][this.arrayPos.y].addLives(1)
}break;case LighthousePuzzlePartType.SHOW_LEFT_RIGHT:if(this.arrayPos.x<6&&this.lighthouse.getPuzzle().getParts()[this.arrayPos.x+1][this.arrayPos.y]!=null&&this.lighthouse.getPuzzle().getParts()[this.arrayPos.x+1][this.arrayPos.y].getShown()==false){this.lighthouse.getPuzzle().getParts()[this.arrayPos.x+1][this.arrayPos.y].setShown(true)
}else{if(this.arrayPos.x>0&&this.lighthouse.getPuzzle().getParts()[this.arrayPos.x-1][this.arrayPos.y]!=null&&this.lighthouse.getPuzzle().getParts()[this.arrayPos.x-1][this.arrayPos.y].getShown()==false){this.lighthouse.getPuzzle().getParts()[this.arrayPos.x-1][this.arrayPos.y].setShown(true)
}}break;case LighthousePuzzlePartType.WHAT:this.type=LighthousePuzzlePartType.STONE;
if(Saving.loadBool("gridItemPossessedP")==false){this.lighthouse.getGame().gainItem("gridItemPossessedP");
this.lighthouse.setSpeechId("lighthouseFoundStone")}else{this.lighthouse.setSpeechId("lighthouseFoundStoneAgain")
}break}this.lives-=1;this.lighthouse.update();this.lighthouse.getGame().updatePlace()
};return a})();var LighthousePuzzlePartType;(function(a){a[a.BLANK=0]="BLANK";a[a.SHOW_AROUND=1]="SHOW_AROUND";
a[a.SHOW_LEFT=2]="SHOW_LEFT";a[a.SHOW_BELOW=3]="SHOW_BELOW";a[a.SHOW_ABOVE=4]="SHOW_ABOVE";
a[a.SHOW_RIGHT=5]="SHOW_RIGHT";a[a.MOVE_BELOW_LINE_TO_THE_RIGHT=6]="MOVE_BELOW_LINE_TO_THE_RIGHT";
a[a.MOVE_LEFT_LINE_ABOVE=7]="MOVE_LEFT_LINE_ABOVE";a[a.LIVES=8]="LIVES";a[a.NOTHING_HERE=9]="NOTHING_HERE";
a[a.WHAT=10]="WHAT";a[a.SHOW_LEFT_RIGHT=11]="SHOW_LEFT_RIGHT";a[a.STONE=12]="STONE"
})(LighthousePuzzlePartType||(LighthousePuzzlePartType={}));var LighthousePuzzle=(function(){function a(b){this.createParts(b)
}a.prototype.draw=function(d,e){for(var c=0;c<7;c++){for(var b=4;b>=0;b--){if(this.parts[c][b]!=null){this.parts[c][b].draw(d,e.plus(new Pos(c*7,b*4)))
}}}};a.prototype.getParts=function(){return this.parts};a.prototype.createParts=function(d){this.parts=[];
for(var c=0;c<7;c++){this.parts[c]=[];for(var b=0;b<5;b++){this.parts[c][b]=null}}this.parts[3][2]=new LighthousePuzzlePart(d,LighthousePuzzlePartType.SHOW_AROUND,3,new Pos(3,2),true);
this.parts[3][1]=new LighthousePuzzlePart(d,LighthousePuzzlePartType.SHOW_RIGHT,1,new Pos(3,1),false);
this.parts[4][1]=new LighthousePuzzlePart(d,LighthousePuzzlePartType.SHOW_BELOW,1,new Pos(4,1),false);
this.parts[4][2]=new LighthousePuzzlePart(d,LighthousePuzzlePartType.MOVE_BELOW_LINE_TO_THE_RIGHT,5,new Pos(4,2),false);
this.parts[3][3]=new LighthousePuzzlePart(d,LighthousePuzzlePartType.SHOW_ABOVE,1,new Pos(3,3),false);
this.parts[5][2]=new LighthousePuzzlePart(d,LighthousePuzzlePartType.LIVES,1,new Pos(5,2),false);
this.parts[4][3]=new LighthousePuzzlePart(d,LighthousePuzzlePartType.SHOW_BELOW,1,new Pos(4,3),false);
this.parts[3][4]=new LighthousePuzzlePart(d,LighthousePuzzlePartType.SHOW_LEFT_RIGHT,2,new Pos(3,4),false);
this.parts[4][4]=new LighthousePuzzlePart(d,LighthousePuzzlePartType.SHOW_RIGHT,1,new Pos(4,4),false);
this.parts[5][4]=new LighthousePuzzlePart(d,LighthousePuzzlePartType.SHOW_RIGHT,1,new Pos(5,4),false);
this.parts[6][4]=new LighthousePuzzlePart(d,LighthousePuzzlePartType.SHOW_ABOVE,1,new Pos(6,4),false);
this.parts[0][3]=new LighthousePuzzlePart(d,LighthousePuzzlePartType.SHOW_ABOVE,1,new Pos(0,3),false);
this.parts[6][2]=new LighthousePuzzlePart(d,LighthousePuzzlePartType.SHOW_ABOVE,1,new Pos(6,2),false);
this.parts[6][1]=new LighthousePuzzlePart(d,LighthousePuzzlePartType.SHOW_LEFT,1,new Pos(6,1),false);
this.parts[5][1]=new LighthousePuzzlePart(d,LighthousePuzzlePartType.LIVES,1,new Pos(5,1),false);
this.parts[2][4]=new LighthousePuzzlePart(d,LighthousePuzzlePartType.SHOW_LEFT,1,new Pos(2,4),false);
this.parts[1][4]=new LighthousePuzzlePart(d,LighthousePuzzlePartType.SHOW_LEFT,1,new Pos(1,4),false);
this.parts[0][4]=new LighthousePuzzlePart(d,LighthousePuzzlePartType.MOVE_BELOW_LINE_TO_THE_RIGHT,0,new Pos(0,4),false);
this.parts[0][0]=new LighthousePuzzlePart(d,LighthousePuzzlePartType.SHOW_RIGHT,1,new Pos(0,0),false);
this.parts[0][1]=new LighthousePuzzlePart(d,LighthousePuzzlePartType.SHOW_ABOVE,1,new Pos(0,1),false);
this.parts[0][2]=new LighthousePuzzlePart(d,LighthousePuzzlePartType.SHOW_ABOVE,1,new Pos(0,2),false);
this.parts[1][0]=new LighthousePuzzlePart(d,LighthousePuzzlePartType.LIVES,0,new Pos(1,0),false);
this.parts[1][1]=new LighthousePuzzlePart(d,LighthousePuzzlePartType.MOVE_LEFT_LINE_ABOVE,0,new Pos(1,1),false);
this.parts[1][2]=new LighthousePuzzlePart(d,LighthousePuzzlePartType.SHOW_ABOVE,1,new Pos(1,2),false);
this.parts[2][0]=new LighthousePuzzlePart(d,LighthousePuzzlePartType.LIVES,1,new Pos(2,0),false);
this.parts[2][1]=new LighthousePuzzlePart(d,LighthousePuzzlePartType.SHOW_ABOVE,1,new Pos(2,1),false);
this.parts[2][2]=new LighthousePuzzlePart(d,LighthousePuzzlePartType.SHOW_ABOVE,1,new Pos(2,2),false);
this.parts[3][0]=new LighthousePuzzlePart(d,LighthousePuzzlePartType.SHOW_LEFT,1,new Pos(3,0),false);
this.parts[4][0]=new LighthousePuzzlePart(d,LighthousePuzzlePartType.BLANK,0,new Pos(4,0),false);
this.parts[5][0]=new LighthousePuzzlePart(d,LighthousePuzzlePartType.SHOW_BELOW,1,new Pos(5,0),false);
this.parts[6][0]=new LighthousePuzzlePart(d,LighthousePuzzlePartType.WHAT,0,new Pos(6,0),true);
this.parts[1][3]=new LighthousePuzzlePart(d,LighthousePuzzlePartType.BLANK,0,new Pos(1,3),false);
this.parts[2][3]=new LighthousePuzzlePart(d,LighthousePuzzlePartType.NOTHING_HERE,0,new Pos(2,3),false);
this.parts[5][3]=new LighthousePuzzlePart(d,LighthousePuzzlePartType.SHOW_LEFT,1,new Pos(5,3),false);
this.parts[6][3]=new LighthousePuzzlePart(d,LighthousePuzzlePartType.BLANK,0,new Pos(6,3),false)
};return a})();Saving.registerBool("lighthousePuzzleDone",false);var Lighthouse=(function(b){__extends(a,b);
function a(c){b.call(this,c);this.renderArea=new RenderArea();this.selectedQuestionId="lighthouseQuestionWho";
this.speechId=null;this.showPuzzle=false;this.puzzle=null;this.createQuestionsArray();
this.renderArea.resizeFromArray(Database.getAscii("places/lighthouse/lighthouse"),0,4);
this.update()}a.prototype.getRenderArea=function(){return this.renderArea};a.prototype.update=function(){this.renderArea.resetAllButSize();
this.addBackToMainMapButton(this.renderArea,"lighthouseBackToTheMapButton");this.renderArea.drawArray(Database.getAscii("places/lighthouse/lighthouse"),0,3);
this.renderArea.addList(1,55,7,"lighthouseQuestionsList",new CallbackCollection(this.questionSelected.bind(this)),this.questionsArray);
this.renderArea.addAsciiRealButton(Database.getText("lighthouseAskButton"),5,10,"lighthouseAskButton",Database.getTranslatedText("lighthouseAskButton"));
this.renderArea.addLinkCall(".lighthouseAskButton",new CallbackCollection(this.ask.bind(this)));
if(this.speechId!=null){this.renderArea.drawSpeech(Database.getText(this.speechId),17,75,99,"lighthouseSpeech",Database.getTranslatedText(this.speechId))
}if(this.showPuzzle){if(this.puzzle==null){this.puzzle=new LighthousePuzzle(this)
}this.puzzle.draw(this.renderArea,new Pos(2,12));this.renderArea.addAsciiRealButton(Database.getText("lighthousePuzzleResetButton"),2,34,"lighthousePuzzleResetButton",Database.getTranslatedText("lighthousePuzzleResetButton"));
this.renderArea.addLinkCall(".lighthousePuzzleResetButton",new CallbackCollection(this.resetPuzzle.bind(this)))
}this.renderArea.addLinkCallbackCollection(new CallbackCollection(this.selectRightQuestion.bind(this)))
};a.prototype.getPuzzle=function(){return this.puzzle};a.prototype.setSpeechId=function(c){this.speechId=c
};a.prototype.addQuestion=function(e,d,c){if(c===void 0){c=null}this.questionsArray.push(e);
if(c==null){this.questionsArray.push(d)}else{this.questionsArray.push(d+(c!=""?" ("+c+")":""))
}};a.prototype.ask=function(){this.speechId=this.selectedQuestionId+"Speech";if(this.selectedQuestionId=="lighthouseQuestionDragon"){this.showPuzzle=true
}else{this.showPuzzle=false}this.update();this.getGame().updatePlace()};a.prototype.createQuestionsArray=function(){this.questionsArray=[];
this.addQuestion("lighthouseQuestionWho",Database.getText("lighthouseQuestionWho"),Database.getTranslatedText("lighthouseQuestionWho"));
this.addQuestion("lighthouseQuestionWhat",Database.getText("lighthouseQuestionWhat"),Database.getTranslatedText("lighthouseQuestionWhat"));
this.addQuestion("lighthouseQuestionWhyEatCandies",Database.getText("lighthouseQuestionWhyEatCandies"),Database.getTranslatedText("lighthouseQuestionWhyEatCandies"));
this.addQuestion("lighthouseQuestionCandyBox",Database.getText("lighthouseQuestionCandyBox"),Database.getTranslatedText("lighthouseQuestionCandyBox"));
if(Saving.loadBool("dragonUnlockedCyclops")){this.addQuestion("lighthouseQuestionDragon",Database.getText("lighthouseQuestionDragon"),Database.getTranslatedText("lighthouseQuestionDragon"))
}};a.prototype.questionSelected=function(){this.selectedQuestionId=$("#lighthouseQuestionsList").find(":selected").attr("id");
this.update();this.getGame().updatePlace()};a.prototype.resetPuzzle=function(){this.puzzle=new LighthousePuzzle(this);
this.update();this.getGame().updatePlace()};a.prototype.selectRightQuestion=function(){$("#"+this.selectedQuestionId).prop("selected",true)
};return a})(Place);var LightweightBodyArmour=(function(b){__extends(a,b);function a(){b.call(this,"eqItemBodyArmoursLightweightBodyArmour","eqItemBodyArmoursLightweightBodyArmourName","eqItemBodyArmoursLightweightBodyArmourDescription","eqItems/bodyArmours/lightweightBodyArmour")
}a.prototype.getSpecialAbility=function(){return"Damage taken reduced by 15% (lightweight body armour)"
};a.prototype.inflictDamage=function(d,c,e,f){return Math.ceil(e-e*15/100)};return a
})(EqItem);var LocalSaving;(function(a){function c(j){if(g(j)==null){return"empty"
}else{return g(j)+", candies : "+g(j+".gameCandiesCurrent")}}a.getSlotSummaryAsString=c;
function i(j){if(g(j)==null){return false}for(var k in Saving.getAllBools()){Saving.saveBool(k,this.loadBool(j+"."+k))
}for(var k in Saving.getAllNumbers()){Saving.saveNumber(k,this.loadNumber(j+"."+k))
}for(var k in Saving.getAllStrings()){Saving.saveString(k,this.loadString(j+"."+k))
}return true}a.load=i;function f(j){try{localStorage.setItem(j,d());for(var l in Saving.getAllBools()){localStorage.setItem(j+"."+l,Saving.boolToString(Saving.getAllBools()[l]))
}for(var l in Saving.getAllNumbers()){localStorage.setItem(j+"."+l,Saving.numberToString(Saving.getAllNumbers()[l]))
}for(var l in Saving.getAllStrings()){localStorage.setItem(j+"."+l,Saving.getAllStrings()[l])
}}catch(k){if(k==DOMException.QUOTA_EXCEEDED_ERR){console.log("Quota exceeded error : we're trying to save some data through HTML5's web storage, but we don't have enough space to save what we want.")
}return false}return true}a.save=f;function h(){if("localStorage" in window&&window.localStorage!==null&&"applicationCache" in window&&window.applicationCache!==null){return true
}return false}a.supportsLocalSaving=h;function d(){var j=new Date();return(j.getDate()<10?"0":"")+j.getDate()+"/"+(j.getMonth()+1<10?"0":"")+(j.getMonth()+1)+"/"+j.getFullYear()+" @ "+(j.getHours()<10?"0":"")+j.getHours()+":"+(j.getMinutes()<10?"0":"")+j.getMinutes()+":"+(j.getSeconds()<10?"0":"")+j.getSeconds()
}function b(j){return Saving.stringToBool(localStorage.getItem(j))}a.loadBool=b;function e(j){return Saving.stringToNumber(localStorage.getItem(j))
}a.loadNumber=e;function g(j){return localStorage.getItem(j)}a.loadString=g})(LocalSaving||(LocalSaving={}));
Saving.registerBool("lollipopFarmPlant1LollipopButtonUnlocked",false);Saving.registerBool("lollipopFarmPlant10LollipopsButtonUnlocked",false);
Saving.registerBool("lollipopFarmPlant100LollipopsButtonUnlocked",false);Saving.registerBool("lollipopFarmPlant1000LollipopsButtonUnlocked",false);
Saving.registerNumber("lollipopFarmLollipopsPlanted",0);Saving.registerNumber("lollipopFarmTimeSinceLastProduction",0);
Saving.registerBool("lollipopFarmIsProductionEachSecond",false);Saving.registerNumber("lollipopFarmProduction",0);
Saving.registerBool("lollipopFarmConstructMillButtonUnlocked",false);Saving.registerBool("lollipopFarmMillConstructed",false);
Saving.registerBool("lollipopFarmDigPondButtonUnlocked",false);Saving.registerBool("lollipopFarmPondDug",false);
Saving.registerNumber("lollipopFarmPondHowManyLolligators",0);Saving.registerBool("lollipopFarmPondFeedingLolligators",false);
Saving.registerNumber("lollipopFarmPondConversionRate",0);Saving.registerNumber("lollipopFarmPreviousCandiesProduction",1);
Saving.registerNumber("lollipopFarmCurrentCandiesProduction",1);var LollipopFarm=(function(b){__extends(a,b);
function a(c){b.call(this,c);this.renderArea=new RenderArea();this.pondLines=[];this.pondLolligators=[];
this.renderArea.resizeFromArray(Database.getAscii("places/lollipopFarm/lollipopFarm"),0,12);
this.update();this.addPondLine(new PondLine(8,37));this.addPondLine(new PondLine(9,38));
this.addPondLine(new PondLine(9,40));this.addPondLine(new PondLine(8,43));this.addPondLine(new PondLine(8,46));
this.addPondLine(new PondLine(3,47));this.addPondLine(new PondLine(4,48));this.addPondLine(new PondLine(9,45));
this.addPondLine(new PondLine(12,44))}a.prototype.willBeDisplayed=function(){this.checkLollipops();
this.getGame().getLollipops().getCallbackCollection().addCallback(this.checkLollipops.bind(this));
this.getGame().getOneSecondCallbackCollection().addCallback(this.handlePond.bind(this))
};a.prototype.getRenderArea=function(){return this.renderArea};a.prototype.addPondLine=function(c){this.pondLines.push(c)
};a.prototype.addPondLolligator=function(c){this.pondLolligators.push(c)};a.prototype.beginFeedingLolligators=function(){Saving.saveBool("lollipopFarmPondFeedingLolligators",true);
this.update();this.getGame().updatePlace()};a.prototype.buyLolligator=function(){if(this.getGame().getCandies().getCurrent()>=1200){this.getGame().getCandies().add(-1200);
Saving.saveNumber("lollipopFarmPondHowManyLolligators",Saving.loadNumber("lollipopFarmPondHowManyLolligators")+1);
this.updatePondConversionRate();this.update();this.getGame().updatePlace()}};a.prototype.checkLollipops=function(){if(Saving.loadBool("lollipopFarmPlant1LollipopButtonUnlocked")==false&&this.getGame().getLollipops().getMax()>=1){Saving.saveBool("lollipopFarmPlant1LollipopButtonUnlocked",true);
this.update();this.getGame().updatePlace()}if(Saving.loadBool("lollipopFarmPlant10LollipopsButtonUnlocked")==false&&this.getGame().getLollipops().getMax()>=10){Saving.saveBool("lollipopFarmPlant10LollipopsButtonUnlocked",true);
this.update();this.getGame().updatePlace()}if(Saving.loadBool("lollipopFarmPlant100LollipopsButtonUnlocked")==false&&this.getGame().getLollipops().getMax()>=100){Saving.saveBool("lollipopFarmPlant100LollipopsButtonUnlocked",true);
this.update();this.getGame().updatePlace()}if(Saving.loadBool("lollipopFarmPlant1000LollipopsButtonUnlocked")==false&&this.getGame().getLollipops().getMax()>=1000){Saving.saveBool("lollipopFarmPlant1000LollipopsButtonUnlocked",true);
this.update();this.getGame().updatePlace()}if(Saving.loadBool("lollipopFarmConstructMillButtonUnlocked")==false&&this.getGame().getLollipops().getMax()>=10000){Saving.saveBool("lollipopFarmConstructMillButtonUnlocked",true);
this.update();this.getGame().updatePlace()}if(Saving.loadBool("lollipopFarmDigPondButtonUnlocked")==false&&this.getGame().getLollipops().getMax()>=100000){Saving.saveBool("lollipopFarmDigPondButtonUnlocked",true);
this.update();this.getGame().updatePlace()}};a.prototype.constructMill=function(){if(this.getGame().getLollipops().getCurrent()>=10000){this.getGame().getLollipops().add(-10000);
Saving.saveBool("lollipopFarmMillConstructed",true);this.update();this.getGame().updatePlace()
}};a.prototype.digPond=function(){if(this.getGame().getLollipops().getCurrent()>=100000){this.getGame().getLollipops().add(-100000);
Saving.saveBool("lollipopFarmPondDug",true);this.update();this.getGame().updatePlace()
}};a.prototype.drawFieldStuff=function(c,e){var d;this.renderArea.drawString("Lollipops planted : "+Algo.numberToStringButNicely(Saving.loadNumber("lollipopFarmLollipopsPlanted")),c,e);
if(Saving.loadBool("lollipopFarmPlant1LollipopButtonUnlocked")==true&&Saving.loadBool("lollipopFarmPlant10LollipopsButtonUnlocked")==false){this.renderArea.addAsciiRealButton("Plant 1 lollipop",c,e+2,"lollipopFarmPlant1LollipopButton");
this.renderArea.addLinkCall(".lollipopFarmPlant1LollipopButton",new CallbackCollection(this.plantLollipops.bind(this,1)))
}else{if(Saving.loadBool("lollipopFarmPlant10LollipopsButtonUnlocked")==true){d=0;
this.renderArea.drawString("Plant",c,e+2);d+=6;this.renderArea.addAsciiRealButton("1",c+d,e+2,"lollipopFarmPlant1LollipopButton");
this.renderArea.addLinkCall(".lollipopFarmPlant1LollipopButton",new CallbackCollection(this.plantLollipops.bind(this,1)));
d+=2;this.renderArea.addAsciiRealButton("10",c+d,e+2,"lollipopFarmPlant10LollipopsButton");
this.renderArea.addLinkCall(".lollipopFarmPlant10LollipopsButton",new CallbackCollection(this.plantLollipops.bind(this,10)));
d+=3;if(Saving.loadBool("lollipopFarmPlant100LollipopsButtonUnlocked")==true){this.renderArea.addAsciiRealButton("100",c+d,e+2,"lollipopFarmPlant100LollipopsButton");
this.renderArea.addLinkCall(".lollipopFarmPlant100LollipopsButton",new CallbackCollection(this.plantLollipops.bind(this,100)));
d+=4}if(Saving.loadBool("lollipopFarmPlant1000LollipopsButtonUnlocked")==true){this.renderArea.addAsciiRealButton("1000",c+d,e+2,"lollipopFarmPlant1000LollipopsButton");
this.renderArea.addLinkCall(".lollipopFarmPlant1000LollipopsButton",new CallbackCollection(this.plantLollipops.bind(this,1000)));
d+=5}this.renderArea.drawString("lollipops",c+d,e+2)}}if(Saving.loadNumber("lollipopFarmLollipopsPlanted")>0){this.renderArea.drawString("Production : "+this.getProductionAsString(),c,e+4)
}};a.prototype.drawMillStuff=function(c,d){if(Saving.loadBool("lollipopFarmConstructMillButtonUnlocked")==true&&Saving.loadBool("lollipopFarmMillConstructed")==false){this.renderArea.addAsciiRealButton(Database.getText("lollipopFarmConstructMill"),c+30,d+2,"lollipopFarmConstructMillButton",Database.getTranslatedText("lollipopFarmConstructMill"),true,-1,null,false);
this.renderArea.addLinkCall(".lollipopFarmConstructMillButton",new CallbackCollection(this.constructMill.bind(this)))
}if(Saving.loadBool("lollipopFarmMillConstructed")==true){this.renderArea.drawArray(Database.getAscii("places/lollipopFarm/mill"),c,d);
this.renderArea.addAsciiRealButton(Database.getText("lollipopFarmFeedMill")+" ("+Algo.numberToStringButNicely(this.getNumberOfLollipopsToFeedTheMill())+" lollipops)",c+30,d,"lollipopFarmFeedMillButton",Database.getTranslatedText("lollipopFarmFeedMill"),true,-1,null,false);
this.renderArea.addLinkCall(".lollipopFarmFeedMillButton",new CallbackCollection(this.feedMill.bind(this)));
if(Saving.loadNumber("lollipopFarmCurrentCandiesProduction")!=1){this.renderArea.drawString(Database.getText("lollipopFarmCurrentCandiesProduction")+" : "+Saving.loadNumber("lollipopFarmCurrentCandiesProduction").toString()+" each second",c+30,d+3);
this.renderArea.drawString(Database.getTranslatedText("lollipopFarmCurrentCandiesProduction"),c+30,d+4,true)
}}};a.prototype.drawPondStuff=function(c,f){var e;if(Saving.loadBool("lollipopFarmDigPondButtonUnlocked")==true&&Saving.loadBool("lollipopFarmPondDug")==false){this.renderArea.addAsciiRealButton(Database.getText("lollipopFarmDigPond"),c+10,f+2,"lollipopFarmDigPondButton",Database.getTranslatedText("lollipopFarmDigPond"),true,-1,null,false);
this.renderArea.addLinkCall(".lollipopFarmDigPondButton",new CallbackCollection(this.digPond.bind(this)))
}if(Saving.loadBool("lollipopFarmPondDug")==true){e=f;this.renderArea.drawArray(Database.getAscii("places/lollipopFarm/pond"),c,e,new RenderTransparency(" "));
e+=3;for(var d=0;d<this.pondLolligators.length;d++){this.pondLolligators[d].draw(this.renderArea,c,e)
}e+=13;this.renderArea.addAsciiRealButton(Database.getText("lollipopFarmBuyLolligator"),c,e,"lollipopFarmBuyLolligatorButton",Database.getTranslatedText("lollipopFarmBuyLolligator"),true,-1,null,false);
this.renderArea.addLinkCall(".lollipopFarmBuyLolligatorButton",new CallbackCollection(this.buyLolligator.bind(this)));
if(Database.isTranslated()){e+=1}if(Saving.loadNumber("lollipopFarmPondHowManyLolligators")>0){e+=2;
this.renderArea.drawString("There "+(Saving.loadNumber("lollipopFarmPondHowManyLolligators")>1?"are":"is")+" "+Algo.pluralFormat(Saving.loadNumber("lollipopFarmPondHowManyLolligators")," lolligator"," lolligators")+" in the pond.",c,e);
e+=2;this.renderArea.addCheckbox(c,e,new CallbackCollection(this.beginFeedingLolligators.bind(this)),new CallbackCollection(this.stopFeedingLolligators.bind(this)),"lollipopFarmPondCheckbox",Saving.loadBool("lollipopFarmPondFeedingLolligators"));
if(Saving.loadNumber("lollipopFarmPondHowManyLolligators")==1){this.renderArea.drawString("Feed it with candies",c+3,e)
}else{this.renderArea.drawString("Feed them with candies",c+4,e)}if(Saving.loadBool("lollipopFarmPondFeedingLolligators")){e+=2;
this.renderArea.drawString(Database.getText("lollipopFarmLolligatorsConversionText"),c,e);
if(Database.isTranslated()){e+=1;this.renderArea.drawString(Database.getTranslatedText("lollipopFarmLolligatorsConversionText"),c,e,true)
}e+=1;this.renderArea.drawString("Conversion rate : "+Saving.loadNumber("lollipopFarmPondConversionRate")+"/sec",c,e)
}}}};a.prototype.feedMill=function(){if(this.getGame().getLollipops().getCurrent()>=this.getNumberOfLollipopsToFeedTheMill()){this.getGame().getLollipops().add(-this.getNumberOfLollipopsToFeedTheMill());
var c=Saving.loadNumber("lollipopFarmCurrentCandiesProduction");Saving.saveNumber("lollipopFarmCurrentCandiesProduction",Saving.loadNumber("lollipopFarmCurrentCandiesProduction")+Saving.loadNumber("lollipopFarmPreviousCandiesProduction"));
Saving.saveNumber("lollipopFarmPreviousCandiesProduction",c);this.update();this.getGame().updatePlace()
}};a.prototype.getNumberOfLollipopsToFeedTheMill=function(){return Math.pow(Saving.loadNumber("lollipopFarmCurrentCandiesProduction")*120,2)
};a.prototype.getProductionAsString=function(){var c;if(Saving.loadBool("lollipopFarmIsProductionEachSecond")){c=Algo.pluralFormat(Saving.loadNumber("lollipopFarmProduction")," lollipop"," lollipops")+" each second"
}else{c="1 lollipop every ";if(Saving.loadNumber("lollipopFarmProduction")>=3600){if(Math.floor(Saving.loadNumber("lollipopFarmProduction")/3600)==1){c+="hour"
}else{c+=Math.floor(Saving.loadNumber("lollipopFarmProduction")/3600).toString()+" hours"
}}else{if(Saving.loadNumber("lollipopFarmProduction")>=60){if(Math.floor(Saving.loadNumber("lollipopFarmProduction")/60)==1){c+="minute"
}else{c+=Math.floor(Saving.loadNumber("lollipopFarmProduction")/60).toString()+" minutes"
}}else{if(Saving.loadNumber("lollipopFarmProduction")==1){c+="second"}else{c+=Saving.loadNumber("lollipopFarmProduction").toString()+" seconds"
}}}}return c};a.prototype.handlePond=function(){var d;if(Saving.loadBool("lollipopFarmPondDug")==true){for(var c=0;
c<this.pondLolligators.length;c++){this.pondLolligators[c].move()}for(var c=0;c<this.pondLolligators.length;
c++){if(this.pondLolligators[c].shouldBeDeleted()){this.pondLolligators[c].willBeDeleted();
this.pondLolligators.splice(c,1);c--}}if(Random.oneChanceOutOf(Math.ceil(20*(1/Saving.loadNumber("lollipopFarmPondHowManyLolligators"))))&&this.pondLolligators.length<Saving.loadNumber("lollipopFarmPondHowManyLolligators")){d=Random.between(0,this.pondLines.length-1);
if(this.pondLines[d].getIsUsed()==false&&(d==0||this.pondLines[d-1].getIsUsed()==false)){this.addPondLolligator(new PondLolligator(this.pondLines,d))
}}this.update();this.getGame().updatePlace()}};a.prototype.plantLollipops=function(c){if(this.getGame().getLollipops().getCurrent()>=c){this.getGame().getLollipops().add(-c);
Saving.saveNumber("lollipopFarmLollipopsPlanted",Saving.loadNumber("lollipopFarmLollipopsPlanted")+c);
this.getGame().calcLollipopFarmProduction();this.update();this.getGame().updatePlace()
}};a.prototype.stopFeedingLolligators=function(){Saving.saveBool("lollipopFarmPondFeedingLolligators",false);
this.update();this.getGame().updatePlace()};a.prototype.update=function(){this.renderArea.resetAllButSize();
this.renderArea.drawArray(Database.getAscii("places/lollipopFarm/lollipopFarm"),0,5);
this.drawFieldStuff(1,34);this.drawMillStuff(7,0);this.drawPondStuff(50,14)};a.prototype.updatePondConversionRate=function(){Saving.saveNumber("lollipopFarmPondConversionRate",Math.ceil(Saving.loadNumber("lollipopFarmPondHowManyLolligators")*3+Math.pow(1.3,Saving.loadNumber("lollipopFarmPondHowManyLolligators"))))
};return a})(Place);var Lollipops=(function(a){__extends(b,a);function b(c,d){a.call(this,c,d)
}b.prototype.getCurrentAsString=function(c){if(c===void 0){c=10}var h=this.getCurrent();
var d=c;var f="";var e="";var g="";if(h<0){return"What, negative lollipops?!"}else{if(h==1){return"You have 1 lollipop"
}else{f=Algo.numberToStringButNicely(h)}}d=c-f.length;if(d>=10){g=" lollipops";d=c-f.length-g.length;
if(d>=9){e="You have "}else{if(d>=3){e="-> "}}}else{if(d>=3){g=" lp"}}d=c-f.length-e.length-g.length;
return e+f+g};return b})(StatusBarResource);Saving.registerBool("lonelyHouseOpenBoxDone",false);
Saving.registerBool("lonelyHouseShakeBoxDone",false);Saving.registerBool("lonelyHouseBreakLockDone",false);
Saving.registerBool("lonelyHouseKickBoxDone",false);Saving.registerBool("lonelyHouseAskTheBoxToOpenItselfDone",false);
Saving.registerBool("lonelyHouseLureTheBoxWithACandyDone",false);Saving.registerBool("lonelyHouseTakeTheBoxDone",false);
var LonelyHouse=(function(a){__extends(b,a);function b(c){a.call(this,c);this.renderArea=new RenderArea();
this.renderArea.resizeFromArray(Database.getAscii("places/village/fifthHouse"),0,3);
this.update()}b.prototype.getRenderArea=function(){return this.renderArea};b.prototype.askTheBoxToOpenItself=function(){Saving.saveBool("lonelyHouseAskTheBoxToOpenItselfDone",true);
this.update();this.getGame().updatePlace()};b.prototype.breakLock=function(){Saving.saveBool("lonelyHouseBreakLockDone",true);
this.update();this.getGame().updatePlace()};b.prototype.kickBox=function(){Saving.saveBool("lonelyHouseKickBoxDone",true);
this.update();this.getGame().updatePlace()};b.prototype.lureTheBoxWithACandy=function(){Saving.saveBool("lonelyHouseLureTheBoxWithACandyDone",true);
this.update();this.getGame().updatePlace()};b.prototype.openBox=function(){Saving.saveBool("lonelyHouseOpenBoxDone",true);
this.update();this.getGame().updatePlace()};b.prototype.shakeBox=function(){Saving.saveBool("lonelyHouseShakeBoxDone",true);
this.update();this.getGame().updatePlace()};b.prototype.takeTheBox=function(){Saving.saveBool("lonelyHouseTakeTheBoxDone",true);
this.update();this.getGame().getStatusBar().selectTabByType(StatusBarTabType.CANDY_BOX);
this.getGame().goToCandyBox()};b.prototype.update=function(){this.renderArea.resetAllButSize();
this.addBackToMainMapButton(this.renderArea,"lonelyHouseBackToTheMapButton");this.renderArea.drawArray(Database.getAscii("places/lonelyHouse"),0,3);
if(Saving.loadBool("lonelyHouseTakeTheBoxDone")==false){this.renderArea.drawArray(Database.getAscii("general/box"),54,9)
}if(Saving.loadBool("lonelyHouseOpenBoxDone")==false){this.getRenderArea().addAsciiRealButton(Database.getText("lonelyHouseOpenBox"),4,4,"lonelyHouseOpenBoxButton",Database.getTranslatedText("lonelyHouseOpenBox"),true,-1,null,false);
this.getRenderArea().addLinkCall(".lonelyHouseOpenBoxButton",new CallbackCollection(this.openBox.bind(this)))
}else{this.getRenderArea().drawString(Database.getText("lonelyHouseOpenBoxResult"),4,4);
this.getRenderArea().drawString(Database.getTranslatedText("lonelyHouseOpenBoxResult"),4,5,true)
}if(Saving.loadBool("lonelyHouseShakeBoxDone")==false){this.getRenderArea().addAsciiRealButton(Database.getText("lonelyHouseShakeBox"),4,8,"lonelyHouseShakeBoxButton",Database.getTranslatedText("lonelyHouseShakeBox"),true,-1,null,false);
this.getRenderArea().addLinkCall(".lonelyHouseShakeBoxButton",new CallbackCollection(this.shakeBox.bind(this)))
}else{this.getRenderArea().drawString(Database.getText("lonelyHouseShakeBoxResult"),4,8);
this.getRenderArea().drawString(Database.getTranslatedText("lonelyHouseShakeBoxResult"),4,9,true)
}if(Saving.loadBool("lonelyHouseBreakLockDone")==false){this.getRenderArea().addAsciiRealButton(Database.getText("lonelyHouseBreakLock"),4,12,"lonelyHouseBreakLockButton",Database.getTranslatedText("lonelyHouseBreakLock"),true,-1,null,false);
this.getRenderArea().addLinkCall(".lonelyHouseBreakLockButton",new CallbackCollection(this.breakLock.bind(this)))
}else{this.getRenderArea().drawString(Database.getText("lonelyHouseBreakLockResult"),4,12);
this.getRenderArea().drawString(Database.getTranslatedText("lonelyHouseBreakLockResult"),4,13,true)
}if(Saving.loadBool("lonelyHouseKickBoxDone")==false){this.getRenderArea().addAsciiRealButton(Database.getText("lonelyHouseKickBox"),4,16,"lonelyHouseKickBoxButton",Database.getTranslatedText("lonelyHouseKickBox"),true,-1,null,false);
this.getRenderArea().addLinkCall(".lonelyHouseKickBoxButton",new CallbackCollection(this.kickBox.bind(this)))
}else{this.getRenderArea().drawString(Database.getText("lonelyHouseKickBoxResult"),4,16);
this.getRenderArea().drawString(Database.getTranslatedText("lonelyHouseKickBoxResult"),4,17,true)
}if(Saving.loadBool("lonelyHouseAskTheBoxToOpenItselfDone")==false){this.getRenderArea().addAsciiRealButton(Database.getText("lonelyHouseAskTheBoxToOpenItself"),4,20,"lonelyHouseAskTheBoxToOpenItselfButton",Database.getTranslatedText("lonelyHouseAskTheBoxToOpenItself"),true,-1,null,false);
this.getRenderArea().addLinkCall(".lonelyHouseAskTheBoxToOpenItselfButton",new CallbackCollection(this.askTheBoxToOpenItself.bind(this)))
}else{this.getRenderArea().drawString(Database.getText("lonelyHouseAskTheBoxToOpenItselfResult"),4,20);
this.getRenderArea().drawString(Database.getTranslatedText("lonelyHouseAskTheBoxToOpenItselfResult"),4,21,true)
}if(Saving.loadBool("lonelyHouseLureTheBoxWithACandyDone")==false){this.getRenderArea().addAsciiRealButton(Database.getText("lonelyHouseLureTheBoxWithACandy"),4,24,"lonelyHouseLureTheBoxWithACandyButton",Database.getTranslatedText("lonelyHouseLureTheBoxWithACandy"),true,-1,null,false);
this.getRenderArea().addLinkCall(".lonelyHouseLureTheBoxWithACandyButton",new CallbackCollection(this.lureTheBoxWithACandy.bind(this)))
}else{this.getRenderArea().drawString(Database.getText("lonelyHouseLureTheBoxWithACandyResult"),4,24);
this.getRenderArea().drawString(Database.getTranslatedText("lonelyHouseLureTheBoxWithACandyResult"),4,25,true)
}if(Saving.loadBool("lonelyHouseOpenBoxDone")&&Saving.loadBool("lonelyHouseShakeBoxDone")&&Saving.loadBool("lonelyHouseBreakLockDone")&&Saving.loadBool("lonelyHouseKickBoxDone")&&Saving.loadBool("lonelyHouseAskTheBoxToOpenItselfDone")&&Saving.loadBool("lonelyHouseLureTheBoxWithACandyDone")){if(Saving.loadBool("lonelyHouseTakeTheBoxDone")==false){this.getRenderArea().addAsciiRealButton(Database.getText("lonelyHouseTakeTheBox"),6,35,"lonelyHouseTakeTheBoxButton",Database.getTranslatedText("lonelyHouseTakeTheBox"),true,-1,null,false);
this.getRenderArea().addLinkCall(".lonelyHouseTakeTheBoxButton",new CallbackCollection(this.takeTheBox.bind(this)))
}else{this.getRenderArea().drawString(Database.getText("lonelyHouseTakeTheBoxResult"),6,35);
this.getRenderArea().drawString(Database.getTranslatedText("lonelyHouseTakeTheBoxResult"),6,36,true)
}}};return b})(Place);var LostTribeWarrior=(function(b){__extends(a,b);function a(d,f,e,c){b.call(this,d,f,new Naming("A lost tribe warrior","a lost tribe warrior"),new RenderArea(4,4),new Pos(0,0),new CollisionBoxCollection(new CollisionBox(this,new Pos(0,0),new Pos(1,1)),new CollisionBox(this,new Pos(0,1),new Pos(4,3))),new QuestEntityMovement());
this.watchedAreaPosition=e;this.watchedAreaPosition2=c;this.getQuestEntityMovement().setGravity(true);
this.getQuestEntityMovement().setWormsLike(true);this.setDestructible(true);this.setMaxHp(200);
this.setHp(200);this.getRenderArea().drawArray(Database.getAscii("places/quests/theHole/lostTribeWarrior"));
this.setTransparency(new RenderTransparency(" "));this.addQuestEntityWeapon(new QuestEntityWeapon(this.getQuest(),this,new Naming("A tribal spear","a tribal spear"),new CollisionBoxCollection(new CollisionBox(this,new Pos(-1,-1),new Pos(6,6))),80));
this.getLastQuestEntityWeapon().getCloseCombatDelay().setBetweenDelay(1,2)}a.prototype.update=function(){b.prototype.update.call(this);
if(this.playerInsideWatchedArea()){this.goTowards(this.getRenderAreaCenter(),this.getQuest().getGame().getPlayer().getRenderAreaCenter())
}else{this.heal(1)}};a.prototype.willDie=function(){this.getQuest().getGame().getQuestLog().addMessage(new QuestLogMessage(this.getDeathMessage()+" (and found "+Algo.pluralFormat(this.getQuest().foundCandies(3000)," candy"," candies")+")",this.getQuest().getCandiesFoundMessage()));
this.getQuest().foundGridOrEqItem(new QuestItemFound(this.getQuest(),"eqItemWeaponTribalSpear","You found a tribal spear.","You gain a tribal spear."))
};a.prototype.playerInsideWatchedArea=function(){if(this.getQuest().getGame().getPlayer().getGlobalPosition().x<this.watchedAreaPosition.x){return false
}if(this.getQuest().getGame().getPlayer().getGlobalPosition().x>this.watchedAreaPosition2.x){return false
}if(this.getQuest().getGame().getPlayer().getGlobalPosition().y<this.watchedAreaPosition.y){return false
}if(this.getQuest().getGame().getPlayer().getGlobalPosition().y>this.watchedAreaPosition2.y){return false
}return true};return a})(QuestEntity);var MainLoadingType;(function(a){a[a.NONE=0]="NONE";
a[a.LOCAL=1]="LOCAL";a[a.FILE=2]="FILE"})(MainLoadingType||(MainLoadingType={}));
Saving.registerNumber("mainMapDefaultScroll",400);Saving.registerBool("mainMapDoneDesert",false);
Saving.registerBool("mainMapDoneBridge",false);Saving.registerBool("mainMapDoneCaveEntrance",false);
Saving.registerBool("mainMapDonePier",false);Saving.registerBool("mainMapDoneForest",false);
Saving.registerBool("mainMapDoneCastleEntrance",false);var MainMap=(function(a){__extends(b,a);
function b(c){a.call(this,c);this.renderArea=new RenderArea();this.load()}b.prototype.willStopBeingDisplayed=function(){Saving.saveNumber("mainMapDefaultScroll",this.getGame().getMainContentLocation().getScroll())
};b.prototype.getDefaultScroll=function(){return Saving.loadNumber("mainMapDefaultScroll")
};b.prototype.getScrolling=function(){return true};b.prototype.getRenderArea=function(){return this.renderArea
};b.prototype.load=function(){this.renderArea.resetAllButSize();this.renderArea.resizeFromArray(Database.getAscii("maps/map"));
this.renderArea.drawArray(Database.getAscii("maps/map"));this.loadATree(143,26);if(Saving.loadBool("gridItemPossessedFortressKey")){this.loadFortress(117,39)
}this.loadTheDesert(114,42);this.loadVillage(150,36);this.loadLonelyHouse(159,23);
if(Saving.loadBool("TheCavePattern_TreasureMapSawMap")==true&&Saving.loadBool("TheCavePattern_TreasureMapFoundTreasure")==false){this.loadTreasure(163,29)
}if(Saving.loadBool("mainMapDoneDesert")){this.loadFarm(115,57);this.loadBridge(99,61);
this.loadCaveEntrance(52,57);this.loadWishingWell(55,66);if(Saving.loadBool("gridItemPossessedPogoStick")==false){this.loadMoutains(71,52)
}}if(Saving.loadBool("mainMapDoneBridge")){this.loadSorceressHut(95,68)}if(Saving.loadBool("mainMapDoneCaveEntrance")){this.loadPier(44,33);
this.loadForest(58,30)}if(Saving.loadBool("mainMapDonePier")){this.loadLighthouse(38,16)
}if(Saving.loadBool("mainMapDoneForest")){this.loadCastleEntrance(88,25);this.loadTheHole(126,25)
}if(Saving.loadBool("mainMapDoneCastleEntrance")){this.loadCastle(87,17)}if(Saving.loadBool("dragonDone")){this.loadDragon(92,11)
}};b.prototype.goToATree=function(){this.getGame().setPlace(new ATree(this.getGame()))
};b.prototype.goToBridge=function(){if(this.getGame().canStartQuest()){this.getGame().setPlace(new Bridge(this.getGame()))
}};b.prototype.goToCastle=function(){this.getGame().goToCastle()};b.prototype.goToDragon=function(){this.getGame().setPlace(new Dragon(this.getGame()))
};b.prototype.goToFarm=function(){Saving.saveBool("statusBarUnlockedLollipopFarm",true);
this.getGame().updateStatusBar(true);this.getGame().getStatusBar().selectTabByType(StatusBarTabType.FARM);
this.getGame().goToLollipopFarm()};b.prototype.goToForest=function(){this.getGame().setPlace(new Forest(this.getGame()))
};b.prototype.goToFortress=function(){this.getGame().goToInsideFortress()};b.prototype.goToLighthouse=function(){this.getGame().goToLighthouse()
};b.prototype.goToLonelyHouse=function(){this.getGame().setPlace(new LonelyHouse(this.getGame()))
};b.prototype.goToMoutains=function(){this.getGame().setPlace(new Moutains(this.getGame()))
};b.prototype.goToPier=function(){this.getGame().setPlace(new Pier(this.getGame()))
};b.prototype.goToSorceressHut=function(){this.getGame().goToSorceressHut()};b.prototype.goToTheCave=function(){this.getGame().goToTheCave()
};b.prototype.goToTheDesert=function(){if(this.getGame().canStartQuest()){this.getGame().setPlace(new Desert(this.getGame()))
}};b.prototype.goToTheHole=function(){if(this.getGame().canStartQuest()){this.getGame().setPlace(new OutsideTheHole(this.getGame()))
}};b.prototype.goToTreasure=function(){this.getGame().setPlace(new Treasure(this.getGame()))
};b.prototype.goToWishingWell=function(){this.getGame().setPlace(new WishingWell(this.getGame()))
};b.prototype.loadATree=function(c,d){this.renderArea.addMultipleAsciiButtons("mapATreeButton",c+2,c+5,d,c+1,c+6,d+1,c,c+7,d+2,c+2,c+5,d+3,c+2,c+5,d+4);
this.renderArea.addFullComment(c-2,d+3,Database.getText("mapATreeComment"),Database.getTranslatedText("mapATreeComment"),"mapATreeComment");
this.renderArea.addLinkOver(".mapATreeButton, .mapATreeComment",".mapATreeComment");
this.renderArea.addLinkCall(".mapATreeButton, .mapATreeComment",new CallbackCollection(this.goToATree.bind(this)))
};b.prototype.loadBridge=function(c,d){this.renderArea.addMultipleAsciiButtons("mapBridgeButton",c,c+3,d,c,c+3,d+1,c,c+3,d+2,c,c+3,d+3,c,c+3,d+4,c,c+3,d+5);
this.renderArea.addFullComment(c+2,d+2,Database.getText("mapBridgeComment"),Database.getTranslatedText("mapBridgeComment"),"mapBridgeComment");
this.renderArea.addLinkOver(".mapBridgeButton, .mapBridgeComment",".mapBridgeComment");
this.renderArea.addLinkCall(".mapBridgeButton, .mapBridgeComment",new CallbackCollection(this.goToBridge.bind(this)))
};b.prototype.loadCastle=function(c,d){this.renderArea.addMultipleAsciiButtons("mapCastleButton",c+2,c+4,d,c+17,c+19,d,c+1,c+3,d+1,c+16,c+18,d+1,c,c+4,d+2,c+15,c+19,d+2,c,c+4,d+3,c+15,c+19,d+3,c,c+19,d+4,c,c+19,d+5,c,c+19,d+6);
this.renderArea.addFullComment(c+25,d+4,Database.getText("mapCastleComment"),Database.getTranslatedText("mapCastleComment"),"mapCastleComment");
this.renderArea.addLinkOver(".mapCastleButton, .mapCastleComment",".mapCastleComment");
this.renderArea.addLinkCall(".mapCastleButton, .mapCastleComment",new CallbackCollection(this.goToCastle.bind(this)))
};b.prototype.loadCastleEntrance=function(c,d){this.renderArea.addMultipleAsciiButtons("mapCastleEntranceButton",c+6,c+11,d,c+6,c+11,d+1,c,c+17,d+2,c,c+17,d+3);
this.renderArea.addFullComment(c+9,d+4,Database.getText("mapCastleEntranceComment"),Database.getTranslatedText("mapCastleEntranceComment"),"mapCastleEntranceComment");
this.renderArea.addLinkOver(".mapCastleEntranceButton, .mapCastleEntranceComment",".mapCastleEntranceComment");
this.renderArea.addLinkCall(".mapCastleEntranceButton, .mapCastleEntranceComment",new CallbackCollection(this.getGame().goToCastleEntrance.bind(this.getGame())))
};b.prototype.loadCaveEntrance=function(c,d){this.renderArea.addMultipleAsciiButtons("mapCaveEntranceButton",c,c+5,d);
this.renderArea.addFullComment(c+3,d+1,Database.getText("mapCaveEntranceComment"),Database.getTranslatedText("mapCaveEntranceComment"),"mapCaveEntranceComment");
this.renderArea.addLinkOver(".mapCaveEntranceButton, .mapCaveEntranceComment",".mapCaveEntranceComment");
this.renderArea.addLinkCall(".mapCaveEntranceButton, .mapCaveEntranceComment",new CallbackCollection(this.goToTheCave.bind(this)))
};b.prototype.loadDragon=function(c,d){this.renderArea.addMultipleAsciiButtons("mapDragonButton",c+5,c+10,d,c+4,c+10,d+1,c+3,c+7,d+2,c+2,c+7,d+3,c+2,c+7,d+4,c+1,c+8,d+5,c+1,c+8,d+6,c+1,c+8,d+7,c,c+9,d+8,c,c+9,d+9);
this.renderArea.addFullComment(c+5,d-2,Database.getText("mapDragonComment"),Database.getTranslatedText("mapDragonComment"),"mapDragonComment");
this.renderArea.addLinkOver(".mapDragonButton, .mapDragonComment",".mapDragonComment");
this.renderArea.addLinkCall(".mapDragonButton, .mapDragonComment",new CallbackCollection(this.goToDragon.bind(this)))
};b.prototype.loadFarm=function(c,d){this.renderArea.addMultipleAsciiButtons("mapFarmButton",c+5,c+15,d,c+5,c+15,d+1,c+6,c+16,d+2,c+6,c+16,d+3,c,c+16,d+3,c,c+16,d+4,c,c+16,d+5,c,c+16,d+6,c,c+16,d+7,c,c+16,d+8,c,c+16,d+9,c+6,c+16,d+10);
this.renderArea.addFullComment(c+16,d+5,Database.getText("mapFarmComment"),Database.getTranslatedText("mapFarmComment"),"mapFarmComment");
this.renderArea.addLinkOver(".mapFarmButton, .mapFarmComment",".mapFarmComment");
this.renderArea.addLinkCall(".mapFarmButton, .mapFarmComment",new CallbackCollection(this.goToFarm.bind(this)))
};b.prototype.loadForest=function(c,d){this.renderArea.addMultipleAsciiButtons("mapForestButton",c+9,c+11,d,c+3,c+12,d+1,c+2,c+25,d+2,c+3,c+43,d+3,c+1,c+44,d+4,c+54,c+56,d+4,c,c+47,d+5,c+53,c+57,d+5,c+1,c+56,d+6,c+2,c+53,d+7,c+3,c+52,d+8,c+7,c+49,d+9,c+8,c+48,d+10,c+17,c+46,d+11,c+16,c+45,d+12,c+17,c+34,d+13,c+21,c+35,d+14,c+23,c+34,d+15,c+24,c+25,d+16);
this.renderArea.addFullComment(c+25,d+7,Database.getText("mapForestComment"),Database.getTranslatedText("mapForestComment"),"mapForestComment");
this.renderArea.addLinkOver(".mapForestButton, .mapForestComment",".mapForestComment");
this.renderArea.addLinkCall(".mapForestButton, .mapForestComment",new CallbackCollection(this.goToForest.bind(this)))
};b.prototype.loadFortress=function(c,d){this.renderArea.addMultipleAsciiButtons("mapFortressButton",c+1,c+3,d,c+10,c+12,d,c,c+4,d+1,c+9,c+13,d+1,c,c+13,d+2,c,c+13,d+3,c,c+13,d+4);
this.renderArea.addFullComment(c+7,d+2,Database.getText("mapFortressComment"),Database.getTranslatedText("mapFortressComment"),"mapFortressComment");
this.renderArea.addLinkOver(".mapFortressButton, .mapFortressComment",".mapFortressComment");
this.renderArea.addLinkCall(".mapFortressButton, .mapFortressComment",new CallbackCollection(this.goToFortress.bind(this)))
};b.prototype.loadLighthouse=function(c,d){this.renderArea.addMultipleAsciiButtons("mapLighthouseButton",c+1,c+4,d,c,c+5,d+1,c,c+5,d+2,c,c+5,d+3,c,c+5,d+4,c,c+5,d+5,c,c+5,d+6,c,c+5,d+7,c,c+5,d+8,c,c+5,d+9);
this.renderArea.addFullComment(c+2,d+3,Database.getText("mapLighthouseComment"),Database.getTranslatedText("mapLighthouseComment"),"mapLighthouseComment");
this.renderArea.addLinkOver(".mapLighthouseButton, .mapLighthouseComment",".mapLighthouseComment");
this.renderArea.addLinkCall(".mapLighthouseButton, .mapLighthouseComment",new CallbackCollection(this.goToLighthouse.bind(this)))
};b.prototype.loadLonelyHouse=function(c,d){this.renderArea.addMultipleAsciiButtons("mapLonelyHouseButton",c,c+3,d,c,c+3,d+1);
this.renderArea.addFullComment(c+1,d-3,Database.getText("mapLonelyHouseComment"),Database.getTranslatedText("mapLonelyHouseComment"),"mapLonelyHouseComment");
this.renderArea.addLinkOver(".mapLonelyHouseButton, .mapLonelyHouseComment",".mapLonelyHouseComment");
this.renderArea.addLinkCall(".mapLonelyHouseButton, .mapLonelyHouseComment",new CallbackCollection(this.goToLonelyHouse.bind(this)))
};b.prototype.loadMoutains=function(c,d){this.renderArea.drawString("*",71,52);this.renderArea.addMultipleAsciiButtons("mapMoutainsButton",c,c+1,d);
this.renderArea.addLinkOver(".mapMoutainsButton, .mapMoutainsComment",".mapMoutainsComment");
this.renderArea.addLinkCall(".mapMoutainsButton, .mapMoutainsComment",new CallbackCollection(this.goToMoutains.bind(this)))
};b.prototype.loadPier=function(c,d){this.renderArea.addMultipleAsciiButtons("mapPierButton",c+1,c+3,d,c+2,c+3,d+1,c,c+7,d+2,c+4,c+7,d+3);
this.renderArea.addFullComment(c+4,d+4,Database.getText("mapPierComment"),Database.getTranslatedText("mapPierComment"),"mapPierComment");
this.renderArea.addLinkOver(".mapPierButton, .mapPierComment",".mapPierComment");
this.renderArea.addLinkCall(".mapPierButton, .mapPierComment",new CallbackCollection(this.goToPier.bind(this)))
};b.prototype.loadSorceressHut=function(c,d){this.renderArea.addMultipleAsciiButtons("mapSorceressHutButton",c,c+3,d,c,c+3,d+1);
this.renderArea.addFullComment(c+2,d+3,Database.getText("mapSorceressHutComment"),Database.getTranslatedText("mapSorceressHutComment"),"mapSorceressHutComment");
this.renderArea.addLinkOver(".mapSorceressHutButton, .mapSorceressHutComment",".mapSorceressHutComment");
this.renderArea.addLinkCall(".mapSorceressHutButton, .mapSorceressHutComment",new CallbackCollection(this.goToSorceressHut.bind(this)))
};b.prototype.loadTheDesert=function(c,d){this.renderArea.addMultipleAsciiButtons("mapTheDesertButton",c,c+29,d+2,c,c+29,d+3,c,c+29,d+4,c,c+29,d+5,c,c+29,d+6,c,c+29,d+7,c,c+28,d+8,c,c+27,d+9,c+1,c+26,d+10,c+2,c+25,d+11);
this.renderArea.addFullComment(c+14,d+6,Database.getText("mapTheDesertComment"),Database.getTranslatedText("mapTheDesertComment"),"mapTheDesertComment");
this.renderArea.addLinkOver(".mapTheDesertButton, .mapTheDesertComment",".mapTheDesertComment");
this.renderArea.addLinkCall(".mapTheDesertButton, .mapTheDesertComment",new CallbackCollection(this.goToTheDesert.bind(this)))
};b.prototype.loadTheHole=function(c,d){this.renderArea.addMultipleAsciiButtons("mapTheHoleButton",c+1,c+4,d,c+1,c+3,d+1);
this.renderArea.addFullComment(c+2,d+3,Database.getText("mapTheHoleComment"),Database.getTranslatedText("mapTheHoleComment"),"mapTheHoleComment");
this.renderArea.addLinkOver(".mapTheHoleButton, .mapTheHoleComment",".mapTheHoleComment");
this.renderArea.addLinkCall(".mapTheHoleButton, .mapTheHoleComment",new CallbackCollection(this.goToTheHole.bind(this)))
};b.prototype.loadTreasure=function(c,d){this.renderArea.addAsciiNinjaButton(c,c+3,d,"mapTreasureButton");
this.renderArea.addLinkCall(".mapTreasureButton",new CallbackCollection(this.goToTreasure.bind(this)))
};b.prototype.loadVillage=function(c,d){this.renderArea.addMultipleAsciiButtons("mapVillageButton",c+11,c+19,d,c+7,c+19,d+1,c+4,c+21,d+2,c,c+21,d+3,c,c+18,d+4,c+4,c+18,d+5,c+8,c+11,d+6);
this.renderArea.addFullComment(c+11,d+3,Database.getText("mapVillageComment"),Database.getTranslatedText("mapVillageComment"),"mapVillageComment");
this.renderArea.addLinkOver(".mapVillageButton, .mapVillageComment",".mapVillageComment");
this.renderArea.addLinkCall(".mapVillageButton, .mapVillageComment",new CallbackCollection(this.getGame().goToVillage.bind(this.getGame())))
};b.prototype.loadWishingWell=function(c,d){this.renderArea.addMultipleAsciiButtons("mapWishingWellButton",c,c+3,d);
this.renderArea.addFullComment(c+1,d+1,Database.getText("mapWishingWellComment"),Database.getTranslatedText("mapWishingWellComment"),"mapWishingWellComment");
this.renderArea.addLinkOver(".mapWishingWellButton, .mapWishingWellComment",".mapWishingWellComment");
this.renderArea.addLinkCall(".mapWishingWellButton, .mapWishingWellComment",new CallbackCollection(this.goToWishingWell.bind(this)))
};return b})(Place);var Main;(function(g){var i=null;var a=MainLoadingType.NONE;var b=null;
var h=null;function e(){Keyboard.execute();c()}g.documentIsReady=e;function d(j){i.clearAllIntervals();
a=MainLoadingType.FILE;b=j;h=null;Saving.canRegister=false;c()}g.reloadEverythingFromFile=d;
function f(j){var k;var l;if(j!=""&&j.indexOf("=")!=-1&&j.indexOf("=")<j.length-1){j=j.substr(1);
k=j.substr(0,j.indexOf("="));l=j.substr(j.indexOf("=")+1);switch(k){case"slot":a=MainLoadingType.LOCAL;
b="slot"+l;break;case"gamemode":h=l;break}}}g.setUrlData=f;function c(){i=new Game(h);
Keyboard.setGame(i);Saving.load(i,a,b);i.postLoad()}})(Main||(Main={}));$(document).ready(function(){Main.setUrlData(window.location.search);
Main.documentIsReady()});var MediumFish=(function(b){__extends(a,b);function a(c,d){b.call(this,c,d,new Naming("A fish","a fish"),new RenderArea(8,4),new Pos(0,0),new CollisionBoxCollection(new CollisionBox(this,new Pos(1,1),new Pos(7,1)),new CollisionBox(this,new Pos(0,2),new Pos(8,1)),new CollisionBox(this,new Pos(1,3),new Pos(7,1))),new QuestEntityMovement(new Pos(-1,0)));
this.setDestructible(true);this.setMaxHp(30);this.setHp(30);this.getRenderArea().drawArray(Database.getAscii("places/quests/theSea/mediumFish"));
this.setTransparency(new RenderTransparency(" ","%"));this.addQuestEntityWeapon(new QuestEntityWeapon(this.getQuest(),this,new Naming("Its fins","its fins"),new CollisionBoxCollection(new CollisionBox(this,new Pos(-1,-1),new Pos(10,6))),3));
this.getLastQuestEntityWeapon().getCloseCombatDelay().setFixedDelay(4)}a.prototype.willDie=function(){this.getQuest().getGame().getQuestLog().addMessage(new QuestLogMessage(this.getDeathMessage()+" (and found "+Algo.pluralFormat(this.getQuest().foundCandies(15)," candy"," candies")+")",this.getQuest().getCandiesFoundMessage()))
};return a})(QuestEntity);var MerchantHat=(function(a){__extends(b,a);function b(){a.call(this,"eqItemHatMerchantHat","eqItemHatMerchantHatName","eqItemHatMerchantHatDescription","eqItems/hats/merchantHat")
}b.prototype.getSpecialAbility=function(){return"Multiplies the number of candies found in quests by 7 (merchant hat)."
};b.prototype.foundCandies=function(e,c,d){return d*7};return b})(EqItem);var MiniShark=(function(b){__extends(a,b);
function a(c,d){b.call(this,c,d,new Naming("A dangerous fish","a dangerous fish"),new RenderArea(19,5),new Pos(0,0),new CollisionBoxCollection(new CollisionBox(this,new Pos(8,1),new Pos(2,1)),new CollisionBox(this,new Pos(17,1),new Pos(2,1)),new CollisionBox(this,new Pos(5,2),new Pos(14,1)),new CollisionBox(this,new Pos(2,3),new Pos(17,1)),new CollisionBox(this,new Pos(0,4),new Pos(12,1)),new CollisionBox(this,new Pos(18,4),new Pos(1,1))),new QuestEntityMovement(new Pos(-1,0)));
this.setDestructible(true);this.setMaxHp(70);this.setHp(70);this.getRenderArea().drawArray(Database.getAscii("places/quests/theSea/miniShark"));
this.setTransparency(new RenderTransparency(" ","%"));this.addQuestEntityWeapon(new QuestEntityWeapon(this.getQuest(),this,new Naming("Its teeth","its teeth"),new CollisionBoxCollection(new CollisionBox(this,new Pos(-1,-1),new Pos(21,7))),8));
this.getLastQuestEntityWeapon().getCloseCombatDelay().setFixedDelay(2)}a.prototype.willDie=function(){this.getQuest().getGame().getQuestLog().addMessage(new QuestLogMessage(this.getDeathMessage()+" (and found "+Algo.pluralFormat(this.getQuest().foundCandies(50+10*Random.upTo(5))," candy"," candies")+")",this.getQuest().getCandiesFoundMessage()))
};return a})(QuestEntity);var MonkeyWizardMagicalPurpleBall=(function(a){__extends(b,a);
function b(d,j,h,c,e,f,g,i){a.call(this,d,j,h,c,e,f,g);this.timer=i}b.prototype.update=function(){if(this.timer!=null){if(this.timer>0){this.timer-=1
}else{this.timer=null;this.setTargetTypeTargetEntity(this.getQuest().getGame().getPlayer())
}}a.prototype.update.call(this)};return b})(Fireball);var MonkeyWizardQuest=(function(a){__extends(b,a);
function b(c){a.call(this,c);this.resizeQuest(100,20);this.addPlayerCollisionBoxes(true,true,true,true);
this.getGame().getPlayer().loadCandyBoxCharacter(this);this.getGame().getPlayer().setGlobalPosition(new Pos(0,17));
this.configPlayerOrClone(this.getGame().getPlayer());this.addEntity(this.getGame().getPlayer());
this.addRoofAndFloor();this.addMonkeyWizard(new Pos(88,16));this.getGame().getQuestLog().addMessage(new QuestLogMessage("You challenged the monkey wizard. Let the fight begin!"))
}b.prototype.configPlayerOrClone=function(c){c.setQuestEntityMovement(new QuestEntityMovement(new Pos(1,0)));
c.getQuestEntityMovement().setGravity(true);c.getQuestEntityMovement().setWormsLike(true)
};b.prototype.endQuest=function(c){if(c){this.getGame().getQuestLog().addMessage(new QuestLogMessage("You continue to explore the cave."))
}a.prototype.endQuest.call(this,c)};b.prototype.update=function(){if(this.getQuestEnded()==false){if(this.getGame().getPlayer().shouldDie()){this.endQuest(true);
return}this.updateEntities()}this.preDraw();this.getRenderArea().drawArray(Database.getAscii("places/quests/monkeyWizard/roof"),this.getRealQuestPosition().x,this.getRealQuestPosition().y);
this.drawEntities();this.drawAroundQuest();this.addExitQuestButton(new CallbackCollection(this.endQuest.bind(this,true),this.getGame().goToTheCave.bind(this.getGame())),"buttonExitQuestKeeping");
this.postDraw()};b.prototype.addMonkeyWizard=function(d){var c=new MonkeyWizard(this,d);
c.setHealthBar(new QuestEntityHealthBar(c,new Pos(100,1),new Pos(0,5),QuestEntityHealthBarPositionType.FIXED,false,true,BarType.HEALTH));
this.addEntity(c)};b.prototype.addRoofAndFloor=function(){var c=new Wall(this,new Pos(0,0));
c.addBox(new Pos(0,0),new Pos(100,2));c.addBox(new Pos(0,2),new Pos(7,1));c.addBox(new Pos(18,2),new Pos(50,1));
c.addBox(new Pos(71,2),new Pos(29,1));c.addBox(new Pos(0,3),new Pos(2,1));c.addBox(new Pos(24,3),new Pos(21,1));
c.addBox(new Pos(83,3),new Pos(17,1));c.addBox(new Pos(0,4),new Pos(1,1));c.addBox(new Pos(99,4),new Pos(1,1));
c.addBox(new Pos(-20,20),new Pos(120,1));this.addEntity(c)};return b})(Quest);var MonkeyWizardStaff=(function(b){__extends(a,b);
function a(){b.call(this,"eqItemWeaponMonkeyWizardStaff","eqItemWeaponMonkeyWizardStaffName","eqItemWeaponMonkeyWizardStaffDescription","eqItems/weapons/monkeyWizardStaff");
this.timer=0}a.prototype.getQuestEntityWeapon=function(c,e){var d=new QuestEntityWeapon(c,e,new Naming("The monkey wizard staff","the monkey wizard staff"),e.getClassicCollisionBoxCollection(),2);
d.getCloseCombatDelay().setFixedDelay(1);return d};a.prototype.update=function(d,c){if(this.timer<10){this.timer+=1
}else{this.timer=0;var e=this.getRandomEnemy(d,c);if(e!=null){this.castPurpleBall(d,c,e)
}}};return a})(MonkeyWizardStaffMotherClass);var MonkeyWizard=(function(b){__extends(a,b);
function a(c,d){b.call(this,c,d,new Naming("A monkey wizard","a monkey wizard"),new RenderArea(4,4),new Pos(0,0),new CollisionBoxCollection(new CollisionBox(this,new Pos(3,0),new Pos(1,1)),new CollisionBox(this,new Pos(1,1),new Pos(3,1)),new CollisionBox(this,new Pos(0,2),new Pos(4,1)),new CollisionBox(this,new Pos(0,3),new Pos(4,1))),new QuestEntityMovement());
this.timer=0;this.bigTimer=0;this.goingLeft=true;this.getQuestEntityMovement().setGravity(true);
this.getQuestEntityMovement().setWormsLike(false);this.setDestructible(true);this.setMaxHp(300);
this.setHp(300);this.getRenderArea().drawArray(Database.getAscii("places/quests/monkeyWizard/monkeyWizard"));
this.setTransparency(new RenderTransparency(" "));this.addQuestEntityWeapon(new QuestEntityWeapon(this.getQuest(),this,new Naming("Its staff","its staff"),new CollisionBoxCollection(new CollisionBox(this,new Pos(-1,-1),new Pos(6,6))),3));
this.getLastQuestEntityWeapon().getCloseCombatDelay().setFixedDelay(1)}a.prototype.update=function(){b.prototype.update.call(this);
var d=(this.getHp()<70?true:false);var c=this.getQuest().getGame().getPlayer().getGlobalPosition();
if(this.timer<80){this.timer+=1}else{this.timer=0}if(this.bigTimer<350){this.bigTimer+=1
}else{this.bigTimer=0}if(this.timer==80||this.timer==12||this.timer==24||this.timer==36||this.timer==48||(d&&this.timer==6)||(d&&this.timer==18)||(d&&this.timer==30)||(d&&this.timer==42)||(d&&this.timer==54)){this.castSpell(false)
}else{if(this.timer==60||this.timer==64||this.timer==68||this.timer==72||this.timer==76&&this.bigTimer<300){this.castSpell(true)
}}if(Math.abs(c.x-this.getGlobalPosition().x)<9){this.jump3()}if(Math.abs(c.x-this.getGlobalPosition().x)<15){if(this.goingLeft){if(this.getGlobalPosition().x>25){this.goLeft()
}else{this.goRight();this.goingLeft=false}}else{if(c.x<this.getGlobalPosition().x){if(this.getGlobalPosition().x<75){this.goRight()
}else{this.goLeft();this.goingLeft=true}}else{if(this.getGlobalPosition().x>25){this.goLeft()
}else{this.dontMove()}}}}else{this.dontMove()}};a.prototype.willDie=function(){this.getQuest().getGame().getQuestLog().addMessage(new QuestLogMessage(this.getDeathMessage()+" (and found "+Algo.pluralFormat(this.getQuest().foundCandies(1000)," candy"," candies")+")",this.getQuest().getCandiesFoundMessage()));
this.getQuest().foundGridOrEqItem(new QuestItemFound(this.getQuest(),"eqItemWeaponMonkeyWizardStaff","You found a staff.","You gain the monkey wizard staff."))
};a.prototype.castSpell=function(c){var d=new MonkeyWizardMagicalPurpleBall(this.getQuest(),this.getGlobalPosition().plus(new Pos(3,0)),new Naming("An magical purple ball","a magical purple ball"),(c?new Color(ColorType.MONKEY_WIZARD_BALL_STORED):new Color(ColorType.MONKEY_WIZARD_BALL)),new Pos(2,1),15,this.getAndPossiblyCreateSpellCastingDamageReason(new Naming("An magical purple ball","a magical purple ball")),(c?350-this.bigTimer:null));
if(c==false){d.setTargetTypeTargetEntity(this.getQuest().getGame().getPlayer())}else{d.setTargetTypeTargetPosition(new Pos(Random.between(1,99),Random.between(4,9)))
}this.getQuest().addEntity(d)};a.prototype.dontMove=function(){this.getQuestEntityMovement().setOffset(new Pos(0,0))
};a.prototype.goLeft=function(){this.getQuestEntityMovement().setOffset(new Pos(-1,0))
};a.prototype.goRight=function(){this.getQuestEntityMovement().setOffset(new Pos(1,0))
};a.prototype.jump3=function(){this.jump(3)};return a})(QuestEntity);var Monster=(function(b){__extends(a,b);
function a(c,d){b.call(this,c,d,new Naming("The monster","the monster"),new RenderArea(13,4),new Pos(0,0),new CollisionBoxCollection(new CollisionBox(this,new Pos(0,0),new Pos(13,1)),new CollisionBox(this,new Pos(1,0),new Pos(11,1)),new CollisionBox(this,new Pos(2,0),new Pos(9,1)),new CollisionBox(this,new Pos(3,0),new Pos(7,1))),new QuestEntityMovement());
this.anEggWasDestroyed=false;this.getRenderArea().drawArray(Database.getAscii("places/quests/castle/room3/monster"));
this.setTransparency(new RenderTransparency(" ","%"));this.addQuestEntityWeapon(new QuestEntityWeapon(this.getQuest(),this,new Naming("??","??"),new CollisionBoxCollection(new CollisionBox(this,new Pos(-1,-1),new Pos(15,6))),10000));
this.getLastQuestEntityWeapon().getCloseCombatDelay().setFixedDelay(0)}a.prototype.update=function(){if(this.anEggWasDestroyed==false){this.goTowards(this.getGlobalPosition().plus(new Pos(6,4)),this.getQuest().getGame().getPlayer().getGlobalPosition().plus(new Pos(1,0)),0,new Pos(2,0),true)
}else{this.goTowards(this.getGlobalPosition().plus(new Pos(6,4)),this.getQuest().getGame().getPlayer().getGlobalPosition().plus(new Pos(1,0)),0,new Pos(4,4))
}b.prototype.update.call(this)};a.prototype.eggDestroyed=function(){this.anEggWasDestroyed=true
};return a})(QuestEntity);var Mosquito=(function(b){__extends(a,b);function a(c,e,d){b.call(this,c,e,new Naming("A forest mosquito","a forest mosquito"),new RenderArea(1,1),new Pos(0,0),new CollisionBoxCollection(new CollisionBox(this,new Pos(0,0),new Pos(1,1))),new QuestEntityMovement());
this.groundYPosition=d;this.perfectYPositionAboveGround=Random.between(8,13);this.getQuestEntityMovement().setGravity(false);
this.setDestructible(true);this.setMaxHp(1);this.setHp(1);this.getRenderArea().drawString(".");
this.addQuestEntityWeapon(new QuestEntityWeapon(this.getQuest(),this,new Naming("A proboscis","a proboscis"),new CollisionBoxCollection(new CollisionBox(this,new Pos(-1,-1),new Pos(3,3))),12));
this.getLastQuestEntityWeapon().getCloseCombatDelay().setOnceThenWaitDelay(20)}a.prototype.update=function(){var c=this.getGlobalPosition().getDistance(this.getQuest().getGame().getPlayer().getGlobalPosition().plus(new Pos(1,0)));
this.goTowards(this.getGlobalPosition(),this.getQuest().getGame().getPlayer().getGlobalPosition().plus(new Pos(1,0)));
b.prototype.update.call(this)};return a})(QuestEntity);var Moutains=(function(b){__extends(a,b);
function a(c){b.call(this,c);this.renderArea=new RenderArea();this.renderArea.resizeFromArray(Database.getAscii("places/mountains"),0,10);
this.update()}a.prototype.getRenderArea=function(){return this.renderArea};a.prototype.getPogoStick=function(){this.getGame().gainItem("gridItemPossessedPogoStick");
this.update();this.getGame().updatePlace()};a.prototype.update=function(){this.renderArea.resetAllButSize();
this.addBackToMainMapButton(this.renderArea,"mountainsBackToTheMapButton");this.renderArea.drawArray(Database.getAscii("places/mountains"),0,3);
if(Saving.loadBool("gridItemPossessedPogoStick")==false){this.renderArea.drawString("*",52,11);
this.renderArea.drawString(Database.getText("mountainsText0"),19,22);this.renderArea.drawString(Database.getText("mountainsText1"),19,23);
this.renderArea.addAsciiRealButton(Database.getText("mountainsTextButton"),19,25,"mountainsClimbButton",Database.getTranslatedText("mountainsTextButton"));
this.renderArea.addLinkCall(".mountainsClimbButton",new CallbackCollection(this.getPogoStick.bind(this)));
this.renderArea.drawString(Database.getTranslatedText("mountainsText0"),19,27,true);
this.renderArea.drawString(Database.getTranslatedText("mountainsText1"),19,28,true)
}else{this.renderArea.drawString(Database.getText("mountainsTextAfter"),19,22);this.renderArea.drawString(Database.getTranslatedText("mountainsTextAfter"),19,24,true)
}};return a})(Place);var Naming=(function(){function a(c,b){if(b===void 0){b=null
}this.beginning=c;if(b!=null){this.anywhere=b}else{this.anywhere=this.beginning}}a.prototype.getAnywhere=function(){return this.anywhere
};a.prototype.getBeginning=function(){return this.beginning};return a})();var ObsidianBrick=(function(a){__extends(b,a);
function b(c,e,d){a.call(this,c,e,new Naming("An obsidian brick","an obsidian brick"),null,new Pos(0,0),new CollisionBoxCollection(new CollisionBox(this,new Pos(0,0),new Pos(2,1))),new QuestEntityMovement());
this.getQuestEntityMovement().setGravity(true);this.setDestructible(true);this.setMaxHp(d);
this.setHp(d);this.addColor(new QuestEntitySpellColor(this.getQuest(),new Pos(0,0),new Pos(2,1),new Color(ColorType.PLAYER_OBSIDIAN_BRICK)))
}return b})(QuestEntitySpell);var OctopusKingCrown=(function(b){__extends(a,b);function a(){b.call(this,"eqItemHatOctopusKingCrown","eqItemHatOctopusKingCrownName","eqItemHatOctopusKingCrownDescription","eqItems/hats/octopusKingCrown")
}a.prototype.getSpecialAbility=function(){return"You are a lot more confident."};
return a})(EqItem);var OctopusKingCrownWithJaspers=(function(a){__extends(b,a);function b(){a.call(this,"eqItemHatOctopusKingCrownWithJaspers","eqItemHatOctopusKingCrownWithJaspersName","eqItemHatOctopusKingCrownWithJaspersDescription","eqItems/hats/octopusKingCrownWithJaspers");
this.currentTimer=0;this.maxTimer=3}b.prototype.getSpecialAbility=function(){return"Randomly cast powerful fireballs around you (Octopus King crown with jaspers)."
};b.prototype.update=function(d,c){this.currentTimer+=1;if(this.currentTimer>=this.maxTimer){this.castFireball(d,c);
this.currentTimer=0}};b.prototype.castFireball=function(e,d){var c=new Fireball(d,e.getSpellCastingPosition(),new Naming("A small fireball","a small fireball"),new Color(ColorType.RED_ENCHANTED_GLOVES_FIREBALL),new Pos(4,2),18,e.getAndPossiblyCreateSpellCastingDamageReason(new Naming("A fireball","a fireball")));
c.setTargetTypeNoTarget(Algo.getRandomNotImmobileDirectionUpToThisSpeed(1).multiply(new Pos(2,2)));
d.addEntity(c)};return b})(EqItem);var OctopusKingCrownWithObsidian=(function(b){__extends(a,b);
function a(){b.call(this,"eqItemHatOctopusKingCrownWithObsidian","eqItemHatOctopusKingCrownWithObsidianName","eqItemHatOctopusKingCrownWithObsidianDescription","eqItems/hats/octopusKingCrownWithObsidian");
this.resetTimer()}a.prototype.getSpecialAbility=function(){return"Summon the Octopus King once in a while to help you."
};a.prototype.update=function(d,c){this.currentTimer-=1;if(this.currentTimer<=0){if(this.summonOctopusKing(d,c)){this.resetTimer()
}}};a.prototype.summonOctopusKing=function(e,d){var c=new PlayerSummonedOctopusKing(d,Random.fromPosition(new Pos(d.getRealQuestSize().x-1,d.getRealQuestSize().y-1)));
if(d.addEntity(c)){return true}return false};a.prototype.resetTimer=function(){this.currentTimer=Random.between(60,120)
};return a})(EqItem);var OctopusKingQuest=(function(b){__extends(a,b);function a(c){b.call(this,c);
this.resizeQuest(100,20);this.addPlayerCollisionBoxes(true,true,true,true);this.getGame().getPlayer().loadCandyBoxCharacter(this);
this.getGame().getPlayer().setGlobalPosition(new Pos(0,17));this.configPlayerOrClone(this.getGame().getPlayer());
this.addEntity(this.getGame().getPlayer());this.addRoofAndFloor();this.addOctopusKing(new Pos(88,16));
this.getGame().getQuestLog().addMessage(new QuestLogMessage("You challenged the Octopus King. Let the fight begin!"))
}a.prototype.configPlayerOrClone=function(c){c.setQuestEntityMovement(new QuestEntityMovement(new Pos(1,0)));
c.getQuestEntityMovement().setGravity(true);c.getQuestEntityMovement().setWormsLike(true)
};a.prototype.endQuest=function(c){if(c){this.getGame().getQuestLog().addMessage(new QuestLogMessage("You continue to explore the cave."))
}b.prototype.endQuest.call(this,c)};a.prototype.update=function(){if(this.getQuestEnded()==false){if(this.getGame().getPlayer().shouldDie()){this.endQuest(true);
return}this.updateEntities()}this.preDraw();this.getRenderArea().drawArray(Database.getAscii("places/quests/octopusKing/roof"),this.getRealQuestPosition().x,this.getRealQuestPosition().y);
this.drawEntities();this.drawAroundQuest();this.addExitQuestButton(new CallbackCollection(this.endQuest.bind(this,true),this.getGame().goToTheCave.bind(this.getGame())),"buttonExitQuestKeeping");
this.postDraw()};a.prototype.addOctopusKing=function(d){var c=new OctopusKing(this,d);
c.setHealthBar(new QuestEntityHealthBar(c,new Pos(100,1),new Pos(0,5),QuestEntityHealthBarPositionType.FIXED,false,true,BarType.HEALTH));
this.addEntity(c)};a.prototype.addRoofAndFloor=function(){var c=new Wall(this,new Pos(0,0));
c.addBox(new Pos(0,0),new Pos(100,2));c.addBox(new Pos(0,2),new Pos(7,1));c.addBox(new Pos(18,2),new Pos(50,1));
c.addBox(new Pos(71,2),new Pos(29,1));c.addBox(new Pos(0,3),new Pos(2,1));c.addBox(new Pos(24,3),new Pos(21,1));
c.addBox(new Pos(83,3),new Pos(17,1));c.addBox(new Pos(0,4),new Pos(1,1));c.addBox(new Pos(99,4),new Pos(1,1));
c.addBox(new Pos(-20,20),new Pos(120,1));this.addEntity(c)};return a})(Quest);var OctopusKing=(function(b){__extends(a,b);
function a(c,d){b.call(this,c,d,new Naming("The Octopus King","the Octopus King"),new RenderArea(6,4),new Pos(0,0),new CollisionBoxCollection(new CollisionBox(this,new Pos(2,0),new Pos(2,1)),new CollisionBox(this,new Pos(1,1),new Pos(4,1)),new CollisionBox(this,new Pos(1,2),new Pos(4,1)),new CollisionBox(this,new Pos(0,3),new Pos(6,1))),new QuestEntityMovement());
this.getQuestEntityMovement().setGravity(true);this.getQuestEntityMovement().setWormsLike(false);
this.setDestructible(true);this.setMaxHp(380);this.setHp(380);this.getRenderArea().drawArray(Database.getAscii("places/quests/octopusKing/octopusKing"));
this.setTransparency(new RenderTransparency(" "));this.addQuestEntityWeapon(new QuestEntityWeapon(this.getQuest(),this,new Naming("Its tentacles","its tentacles"),new CollisionBoxCollection(new CollisionBox(this,new Pos(-1,-1),new Pos(8,6))),16));
this.getLastQuestEntityWeapon().getCloseCombatDelay().setFixedDelay(3)}a.prototype.update=function(){this.goTowards(this.getGlobalPosition(),this.getQuest().getGame().getPlayer().getGlobalPosition(),0,new Pos(1,0));
b.prototype.update.call(this)};a.prototype.willDie=function(){this.getQuest().getGame().getQuestLog().addMessage(new QuestLogMessage(this.getDeathMessage()+" (and found "+Algo.pluralFormat(this.getQuest().foundCandies(4000)," candy"," candies")+")",this.getQuest().getCandiesFoundMessage()));
this.getQuest().foundGridOrEqItem(new QuestItemFound(this.getQuest(),"eqItemHatOctopusKingCrown","You found the Octopus King crown.","You gain the Octopus King crown."))
};return a})(QuestEntity);var OutsideTheHole=(function(b){__extends(a,b);function a(c){b.call(this,c);
this.renderArea=new RenderArea();this.renderArea.resizeFromArray(Database.getAscii("places/outsideTheHole"),0,4);
this.update()}a.prototype.getRenderArea=function(){return this.renderArea};a.prototype.jump=function(){this.getGame().setPlace(new TheHole(this.getGame()))
};a.prototype.update=function(){this.renderArea.resetAllButSize();this.addBackToMainMapButton(this.renderArea,"theHoleBackToTheMapButton");
this.renderArea.drawArray(Database.getAscii("places/outsideTheHole"),0,3);this.renderArea.addAsciiRealButton(Database.getText("outsideTheHoleButton"),34,23,"outsideTheHoleButton",Database.getTranslatedText("outsideTheHoleButton"),true);
this.renderArea.addLinkCall(".outsideTheHoleButton",new CallbackCollection(this.jump.bind(this)))
};return a})(Place);var PainsAuChocolat=(function(b){__extends(a,b);function a(c,d){b.call(this,c,d)
}a.prototype.getCurrentAsString=function(c){if(c===void 0){c=10}var h=this.getCurrent();
var d=c;var f="";var e="";var g="";if(h<0){return"What, negative pains au chocolat?!"
}else{if(h==1){return"-> 1 pain au chocolat"}else{f=Algo.numberToStringButNicely(h)
}}d=c-f.length;if(d>=18){g=" pains au chocolat";d=c-f.length-g.length;if(d>=9){e="You have "
}else{if(d>=3){e="-> "}}}else{if(d>=3){g=" pc"}}d=c-f.length-e.length-g.length;return e+f+g
};return a})(StatusBarResource);var Pier=(function(a){__extends(b,a);function b(c){a.call(this,c);
this.renderArea=new RenderArea();this.renderArea.resizeFromArray(Database.getAscii("places/pier"),0,6);
this.update()}b.prototype.getRenderArea=function(){return this.renderArea};b.prototype.addLighthouseButton=function(c,d){this.renderArea.addAsciiRealButton(Database.getText("pierLighthouseButton"),c,d,"pierLighthouseButton",Database.getTranslatedText("pierLighthouseButton"),true);
this.renderArea.addLinkCall(".pierLighthouseButton",new CallbackCollection(this.clickedOnLighthouseButton.bind(this),this.getGame().goToLighthouse.bind(this.getGame())))
};b.prototype.addTheSeaButton=function(c,d){this.renderArea.addAsciiRealButton(Database.getText("pierTheSeaButton"),c,d,"pierTheSeaButton",Database.getTranslatedText("pierTheSeaButton"),true);
this.renderArea.addLinkCall(".pierTheSeaButton",new CallbackCollection(this.goToTheSea.bind(this)))
};b.prototype.clickedOnLighthouseButton=function(){Saving.saveBool("mainMapDonePier",true)
};b.prototype.goToTheSea=function(){if(this.getGame().canStartQuest()){this.getGame().setPlace(new TheSea(this.getGame()))
}};b.prototype.update=function(){this.renderArea.resetAllButSize();this.addBackToMainMapButton(this.renderArea,"thePierBackToTheMapButton");
this.renderArea.drawArray(Database.getAscii("places/pier"),0,3);this.addLighthouseButton(3,27);
this.addTheSeaButton(52,9)};return b})(Place);var PinkEnchantedGloves=(function(b){__extends(a,b);
function a(){b.call(this,"eqItemGlovesPinkEnchantedGloves","eqItemGlovesPinkEnchantedGlovesName","eqItemGlovesPinkEnchantedGlovesDescription","eqItems/gloves/pinkEnchantedGloves")
}a.prototype.getSpecialAbility=function(){return"Slowly regain your health points in quests (pink enchanted gloves)."
};a.prototype.update=function(d,c){d.heal(1)};return a})(EqItem);var Plant=(function(b){__extends(a,b);
function a(e,h,f,d){var c="places/quests/theSea/plant"+Random.between(f,d).toString();
var g=h;g.add(new Pos(0,-Database.getAsciiHeight(c)+1));b.call(this,e,g,new Naming("A plant","a plant"),new RenderArea());
this.getRenderArea().resizeFromArray(Database.getAscii(c));this.getRenderArea().drawArray(Database.getAscii(c));
if(c=="places/quests/theSea/plant0"||c=="places/quests/theSea/plant8"||c=="places/quests/theSea/plant9"||c=="places/quests/theSea/plant10"){this.setTransparency(new RenderTransparency(" ","%"))
}else{this.setTransparency(new RenderTransparency(" "))}}return a})(QuestEntity);
var PlayerBludgeon=(function(a){__extends(b,a);function b(){a.apply(this,arguments)
}b.prototype.getRealDamage=function(){return Random.between(12,16)};b.prototype.getRealDamageText=function(){return"12-16"
};return b})(QuestEntityWeapon);var PlayerCharacterType;(function(a){a[a.CANDYBOX=0]="CANDYBOX";
a[a.MEDIUM=1]="MEDIUM";a[a.CANDYBOX_SQUEEZED=2]="CANDYBOX_SQUEEZED";a[a.MEDIUM_SQUEEZED=3]="MEDIUM_SQUEEZED"
})(PlayerCharacterType||(PlayerCharacterType={}));var PlayerCloneCandyBox=(function(b){__extends(a,b);
function a(c,d){b.call(this,c,d,new Naming("A clone","a clone"),new RenderArea(3,1),new Pos(0,0),new CollisionBoxCollection(new CollisionBox(this,new Pos(0,0),new Pos(3,1))),new QuestEntityMovement());
this.setTeam(QuestEntityTeam.PLAYER);this.setDestructible(true);this.setMaxHp(c.getGame().getPlayer().getHp());
this.setHp(c.getGame().getPlayer().getHp());this.getRenderArea().drawString("\\o/");
this.addQuestEntityWeapon(new QuestEntityWeapon(this.getQuest(),this,new Naming("Its fists","its fists"),new CollisionBoxCollection(new CollisionBox(this,new Pos(-1,-1),new Pos(5,3))),3));
this.getLastQuestEntityWeapon().getCloseCombatDelay().setFixedDelay(3)}return a})(QuestEntity);
var PlayerCloneMedium=(function(b){__extends(a,b);function a(c,d){b.call(this,c,d,new Naming("A clone","a clone"),new RenderArea(11,4),new Pos(0,0),new CollisionBoxCollection(new CollisionBox(this,new Pos(0,0),new Pos(11,1)),new CollisionBox(this,new Pos(1,1),new Pos(9,1)),new CollisionBox(this,new Pos(2,2),new Pos(7,1)),new CollisionBox(this,new Pos(4,3),new Pos(3,1))),new QuestEntityMovement());
this.setTeam(QuestEntityTeam.PLAYER);this.setDestructible(true);this.setMaxHp(c.getGame().getPlayer().getHp());
this.setHp(c.getGame().getPlayer().getHp());this.getRenderArea().drawArray(Database.getAscii("players/medium"));
this.setTransparency(new RenderTransparency(" ","%"));this.addQuestEntityWeapon(new QuestEntityWeapon(this.getQuest(),this,new Naming("Its fists","its fists"),new CollisionBoxCollection(new CollisionBox(this,new Pos(-1,-1),new Pos(13,6))),3));
this.getLastQuestEntityWeapon().getCloseCombatDelay().setFixedDelay(3)}return a})(QuestEntity);
var PlayerSummonedDemon=(function(a){__extends(b,a);function b(c,e,d){a.call(this,c,e,new Naming("A demon","a demon"));
this.damage=d;this.damageReason=new QuestEntityDamageReason(QuestEntityDamageReasonWhoType.ENTITY,QuestEntityDamageReasonWhatType.SPELL);
this.damageReason.setQuestEntity(this.getQuest().getGame().getPlayer(),QuestEntityTeam.NATURE);
this.damageReason.setSpellNaming(this.getRandomNaming());this.damageCollisionBoxCollection=new CollisionBoxCollection(new CollisionBox(this,new Pos(0,0),new Pos(8,4)));
this.addRandomQuestEntitySpellColors();this.setQuestEntityMovement(new QuestEntityMovement(new Pos(3,0)))
}b.prototype.update=function(){this.handleDamage();a.prototype.update.call(this)};
b.prototype.addRandomQuestEntitySpellColors=function(){var c=[];for(var e=0;e<4;e++){c.push([]);
for(var d=0;d<4;d++){c[e].push(false)}}switch(Random.upTo(1)){case 0:for(var e=0;
e<2;e++){for(var d=0;d<4;d++){if(Random.flipACoin()){c[e][d]=true;c[3-e][d]=true}}}break;
case 1:for(var e=0;e<4;e++){for(var d=0;d<2;d++){if(Random.flipACoin()){c[e][d]=true;
c[e][3-d]=true}}}break}for(var e=0;e<4;e++){for(var d=0;d<4;d++){if(c[e][d]){this.addColor(new QuestEntitySpellColor(this.getQuest(),new Pos(e*2,d),new Pos(2,1),new Color(ColorType.PLAYER_SUMMONED_DEMON,true)))
}}}};b.prototype.getRandomNaming=function(){var d="";var f;if(Random.flipACoin()){f=3
}else{if(Random.oneChanceOutOf(10)){f=4}else{if(Random.oneChanceOutOf(10)){f=1}else{f=2
}}}var e=[];for(var c=0;c<f;c++){e.push(Random.fromArray(["lael","ezek","bal","sen","zen","aps","hir","ta","ozn","eres","non","enon","cesti","mal","aser","oex","nax","arir","nikon","taor","rael","mael","sael","epit","uer","pod","ehon","edeo","xa"]))
}e[0]=e[0].charAt(0).toUpperCase()+e[0].slice(1);for(var c=0;c<e.length;c++){d+=e[c]
}return new Naming("the demon "+d)};b.prototype.handleDamage=function(){for(var c=0;
c<this.getQuest().getEntities().length;c++){if(this.getQuest().getEntities()[c].getDestructible()){if(this.getQuest().getEntities()[c].getCbc()!=null){if(this.getQuest().getEntities()[c].getCbc().collidesWith(this.damageCollisionBoxCollection)){this.getQuest().getEntities()[c].inflictDamage(this.damage,this.damageReason)
}}}}};return b})(QuestEntitySpell);var PlayerSummonedOctopusKing=(function(a){__extends(b,a);
function b(c,d){a.call(this,c,d,new Naming("An Octopus King","an Octopus King"),new RenderArea(6,4),new Pos(0,0),new CollisionBoxCollection(new CollisionBox(this,new Pos(2,0),new Pos(2,1)),new CollisionBox(this,new Pos(1,1),new Pos(4,1)),new CollisionBox(this,new Pos(1,2),new Pos(4,1)),new CollisionBox(this,new Pos(0,3),new Pos(6,1))),new QuestEntityMovement());
this.getQuestEntityMovement().setGravity(true);this.getQuestEntityMovement().setWormsLike(true);
this.setDestructible(true);this.setMaxHp(380);this.setHp(380);this.setTeam(QuestEntityTeam.PLAYER);
this.getRenderArea().drawArray(Database.getAscii("places/quests/octopusKing/octopusKing"));
this.setTransparency(new RenderTransparency(" "));this.addQuestEntityWeapon(new QuestEntityWeapon(this.getQuest(),this,new Naming("Its tentacles","its tentacles"),new CollisionBoxCollection(new CollisionBox(this,new Pos(-1,-1),new Pos(8,6))),16));
this.getLastQuestEntityWeapon().getCloseCombatDelay().setFixedDelay(3)}b.prototype.update=function(){this.goTowards(this.getGlobalPosition(),this.getQuest().getGame().getPlayer().getGlobalPosition(),0,new Pos(1,0));
a.prototype.update.call(this)};return b})(QuestEntity);var PlayerSummonedTribeWarrior=(function(b){__extends(a,b);
function a(c,d){b.call(this,c,d,new Naming("A tribe warrior","a tribe warrior"),new RenderArea(4,4),new Pos(0,0),new CollisionBoxCollection(new CollisionBox(this,new Pos(0,0),new Pos(1,1)),new CollisionBox(this,new Pos(0,1),new Pos(4,3))),new QuestEntityMovement());
this.setQuestEntityMovement(new QuestEntityMovement(new Pos(1,0)));this.getQuestEntityMovement().setGravity(true);
this.getQuestEntityMovement().setWormsLike(true);this.setDestructible(true);this.setMaxHp(25);
this.setHp(25);this.setTeam(QuestEntityTeam.PLAYER);this.getRenderArea().drawArray(Database.getAscii("places/quests/theHole/lostTribeWarrior"));
this.setTransparency(new RenderTransparency(" "));this.addQuestEntityWeapon(new QuestEntityWeapon(this.getQuest(),this,new Naming("A tribal spear","a tribal spear"),new CollisionBoxCollection(new CollisionBox(this,new Pos(-1,-1),new Pos(6,6))),8));
this.getLastQuestEntityWeapon().getCloseCombatDelay().setFixedDelay(2)}a.prototype.update=function(){b.prototype.update.call(this)
};return a})(QuestEntity);Saving.registerNumber("playerHp",100);var Player=(function(b){__extends(a,b);
function a(c){b.call(this,null,new Pos(0,0),new Naming("You","you"));this.game=c;
this.setDestructible(true)}a.prototype.beginBerserk=function(c){if(b.prototype.beginBerserk.call(this,c)){this.drawOnRenderArea();
return true}return false};a.prototype.beginTurtle=function(c){if(b.prototype.beginTurtle.call(this,c)){this.drawOnRenderArea();
return true}return false};a.prototype.canJumpInMidAir=function(){if(this.game.isEquipped("boots","eqItemBootsRocketBoots")){return true
}return false};a.prototype.checkCollision=function(c){if(c===void 0){c=new Pos(0,0)
}if(b.prototype.checkCollision.call(this,c)==true){return true}if(this.collidesWith(this.getQuest().getPlayerCollisionBoxes(),c)){return true
}return false};a.prototype.getCharacterType=function(){return this.characterType};
a.prototype.getClassicCollisionBoxCollection=function(){switch(this.characterType){case PlayerCharacterType.CANDYBOX:return new CollisionBoxCollection(new CollisionBox(this,new Pos(-1,-1),new Pos(5,3)));
break;case PlayerCharacterType.MEDIUM:return new CollisionBoxCollection(new CollisionBox(this,new Pos(-1,-1),new Pos(13,6)));
break;case PlayerCharacterType.CANDYBOX_SQUEEZED:return new CollisionBoxCollection(new CollisionBox(this,new Pos(-1,-1),new Pos(3,3)));
break;case PlayerCharacterType.MEDIUM_SQUEEZED:return new CollisionBoxCollection(new CollisionBox(this,new Pos(-1,-1),new Pos(8,5)));
break}};a.prototype.getQuestEntityWeapon=function(c){if(c===void 0){c=null}var d;
if(this.game.getSelectedEqItems()["weapon"]!=null){d=this.game.getSelectedEqItems()["weapon"].getQuestEntityWeapon(c,this)
}else{d=new QuestEntityWeapon(this.getQuest(),this,new Naming("Your fists","your fists"),this.getClassicCollisionBoxCollection(),1);
d.getCloseCombatDelay().setFixedDelay(6,0)}return d};a.prototype.getSpellCastingPosition=function(c){if(c===void 0){c=true
}switch(this.characterType){case PlayerCharacterType.CANDYBOX:if(c){return this.getGlobalPosition().plus(new Pos(3,-1))
}else{return this.getGlobalPosition().plus(new Pos(-1,-1))}break;case PlayerCharacterType.MEDIUM:if(c){return this.getGlobalPosition().plus(new Pos(11,0))
}else{return this.getGlobalPosition().plus(new Pos(-1,0))}break;case PlayerCharacterType.CANDYBOX_SQUEEZED:if(c){return this.getGlobalPosition().plus(new Pos(0,-1))
}else{return this.getGlobalPosition().plus(new Pos(0,-1))}break;case PlayerCharacterType.MEDIUM_SQUEEZED:if(c){return this.getGlobalPosition().plus(new Pos(6,0))
}else{return this.getGlobalPosition().plus(new Pos(-1,0))}break}};a.prototype.getThornsPositionsArray=function(){var c;
switch(this.characterType){case PlayerCharacterType.CANDYBOX:case PlayerCharacterType.CANDYBOX_SQUEEZED:c=[new Pos(-6,0),new Pos(-4,-1),new Pos(-2,-2),new Pos(1,-2),new Pos(3,-1),new Pos(5,0),new Pos(3,1),new Pos(1,2),new Pos(-2,2),new Pos(-4,1)];
break;case PlayerCharacterType.MEDIUM:case PlayerCharacterType.MEDIUM_SQUEEZED:c=[new Pos(11,-2),new Pos(12,-1),new Pos(13,0),new Pos(13,1),new Pos(13,2),new Pos(12,3),new Pos(11,4)];
break}return c};a.prototype.hit=function(c,d,e){for(var f in this.game.getSelectedEqItems()){d=this.game.getSelectedEqItems()[f].hit(this,this.getQuest(),c,d,e)
}for(var f in this.game.getGridItems()){if(Saving.loadBool(f)){d=this.game.getGridItems()[f].hit(this,this.getQuest(),c,d,e)
}}if(Saving.loadNumber("gameGiftPower")>0){d=Math.ceil(d+d*(Saving.loadNumber("gameGiftPower")/5))
}b.prototype.hit.call(this,c,d,e)};a.prototype.inflictDamage=function(c,d){for(var e in this.game.getSelectedEqItems()){c=this.game.getSelectedEqItems()[e].inflictDamage(this,this.getQuest(),c,d)
}b.prototype.inflictDamage.call(this,c,d)};a.prototype.load=function(){this.setHp(Saving.loadNumber("playerHp"))
};a.prototype.loadCandyBoxCharacter=function(c,d){if(d===void 0){d=true}this.characterType=PlayerCharacterType.CANDYBOX;
if(d){this.loadCharacter(c)}this.setRenderArea(new RenderArea(3,1));this.drawOnRenderArea();
this.setCbc(new CollisionBoxCollection(new CollisionBox(this,new Pos(0,0),new Pos(3,1))));
this.setTransparency(null)};a.prototype.loadCandyBoxSqueezedCharacter=function(c,d){if(d===void 0){d=true
}this.characterType=PlayerCharacterType.CANDYBOX_SQUEEZED;if(d){this.loadCharacter(c)
}this.setRenderArea(new RenderArea(1,1));this.drawOnRenderArea();this.setCbc(new CollisionBoxCollection(new CollisionBox(this,new Pos(0,0),new Pos(1,1))));
this.setTransparency(null)};a.prototype.loadCharacter=function(c){this.setQuest(c);
this.addQuestEntityWeapon(this.getQuestEntityWeapon(this.getQuest()));this.setTeam(QuestEntityTeam.PLAYER)
};a.prototype.loadMediumCharacter=function(c,d){if(d===void 0){d=true}this.characterType=PlayerCharacterType.MEDIUM;
if(d){this.loadCharacter(c)}this.setRenderArea(new RenderArea(11,4));this.drawOnRenderArea();
this.setCbc(new CollisionBoxCollection(new CollisionBox(this,new Pos(0,0),new Pos(11,1)),new CollisionBox(this,new Pos(1,1),new Pos(9,1)),new CollisionBox(this,new Pos(2,2),new Pos(7,1)),new CollisionBox(this,new Pos(4,3),new Pos(3,1))));
this.setTransparency(new RenderTransparency(" ","%"))};a.prototype.loadMediumSqueezedCharacter=function(c,d){if(d===void 0){d=true
}this.characterType=PlayerCharacterType.MEDIUM_SQUEEZED;if(d){this.loadCharacter(c)
}this.setRenderArea(new RenderArea(6,3));this.drawOnRenderArea();this.setCbc(new CollisionBoxCollection(new CollisionBox(this,new Pos(2,0),new Pos(2,1)),new CollisionBox(this,new Pos(0,1),new Pos(6,1)),new CollisionBox(this,new Pos(2,2),new Pos(2,1))));
this.setTransparency(new RenderTransparency(" ","%"))};a.prototype.magicHealthRegain=function(){if(this.game.getWeAreQuesting()==false){var c=Math.ceil((1-Math.exp(-this.game.getCandiesEaten().getCurrent()/400000000))*500);
if(c<1){c=1}this.setHp(this.getHp()+c)}};a.prototype.move=function(e,c){if(c===void 0){c=false
}var d=e.copy();if(d.x!=0&&this.game.isEquipped("boots","eqItemBootsBootsOfIntrospection")&&this.checkCollision(new Pos(0,1))==true&&c==false){d.x=0
}return b.prototype.move.call(this,d,c)};a.prototype.moveWormsLike=function(d){var c=d.copy();
if(c.x!=0&&this.game.isEquipped("boots","eqItemBootsBootsOfIntrospection")&&this.checkCollision(new Pos(0,1))==true){c.x=0
}return b.prototype.moveWormsLike.call(this,c)};a.prototype.reCalcMaxHp=function(){var c=100;
if(Saving.loadString("gameGameMode")!="hard"){c+=Math.ceil((1-Math.exp(-this.game.getCandiesEaten().getCurrent()/3000))*100)+Math.ceil((1-Math.exp(-this.game.getCandiesEaten().getCurrent()/400000))*800)
}if(Saving.loadBool("gridItemPossessedHeartPendant")){c+=300}if(Saving.loadBool("gridItemPossessedHeartPlug")){c=Math.ceil(c*1.2)
}if(Saving.loadNumber("gameGiftHealth")>0){c=c+c*(Saving.loadNumber("gameGiftHealth")/5)
}this.setMaxHp(c);this.game.updateStatusBar()};a.prototype.save=function(){Saving.saveNumber("playerHp",this.getHp())
};a.prototype.shouldDie=function(){if(b.prototype.shouldDie.call(this)||this.getOutOfArea()){return true
}return false};a.prototype.squeeze=function(){switch(this.characterType){case PlayerCharacterType.CANDYBOX:this.loadCandyBoxSqueezedCharacter(this.getQuest(),false);
this.move(new Pos(1,0),true);this.game.getQuestLog().addMessage(new QuestLogMessage("You squeezed!"));
break;case PlayerCharacterType.MEDIUM:this.loadMediumSqueezedCharacter(this.getQuest(),false);
this.move(new Pos(2,1),true);this.game.getQuestLog().addMessage(new QuestLogMessage("You squeezed!"));
break;case PlayerCharacterType.CANDYBOX_SQUEEZED:this.loadCandyBoxCharacter(this.getQuest(),false);
this.move(new Pos(-1,0),true);if(this.checkCollision()){this.loadCandyBoxSqueezedCharacter(this.getQuest(),false);
this.move(new Pos(1,0),true);this.game.getQuestLog().addMessage(new QuestLogMessage("You can't unsqueeze because there isn't enough space."))
}else{this.game.getQuestLog().addMessage(new QuestLogMessage("You unsqueezed!"))}break;
case PlayerCharacterType.MEDIUM_SQUEEZED:this.loadMediumCharacter(this.getQuest(),false);
this.move(new Pos(-2,-1),true);if(this.checkCollision()){this.loadMediumSqueezedCharacter(this.getQuest(),false);
this.move(new Pos(2,1),true);this.game.getQuestLog().addMessage(new QuestLogMessage("You can't unsqueeze because there isn't enough space."))
}else{this.game.getQuestLog().addMessage(new QuestLogMessage("You unsqueezed!"))}break
}};a.prototype.stopBerserk=function(){b.prototype.stopBerserk.call(this);this.drawOnRenderArea()
};a.prototype.stopTurtle=function(){b.prototype.stopTurtle.call(this);this.drawOnRenderArea()
};a.prototype.update=function(){for(var c in this.game.getSelectedEqItems()){this.game.getSelectedEqItems()[c].update(this,this.getQuest())
}for(var c in this.game.getGridItems()){if(Saving.loadBool(c)){this.game.getGridItems()[c].update(this,this.getQuest())
}}b.prototype.update.call(this)};a.prototype.setHp=function(c){b.prototype.setHp.call(this,c);
this.game.updateStatusBar()};a.prototype.setMaxHp=function(c){b.prototype.setMaxHp.call(this,c);
this.game.updateStatusBar()};a.prototype.drawOnRenderArea=function(){this.getRenderArea().resetAllButSize();
switch(this.characterType){case PlayerCharacterType.CANDYBOX:if(this.getTurtle()&&this.getBerserk()){this.getRenderArea().drawString("TUR")
}else{if(this.getTurtle()){this.getRenderArea().drawString("tur")}else{if(this.getBerserk()){this.getRenderArea().drawString("O_O")
}else{this.getRenderArea().drawString("\\o/")}}}break;case PlayerCharacterType.CANDYBOX_SQUEEZED:if(this.getTurtle()&&this.getBerserk()){this.getRenderArea().drawString("T")
}else{if(this.getTurtle()){this.getRenderArea().drawString("t")}else{if(this.getBerserk()){this.getRenderArea().drawString("B")
}else{this.getRenderArea().drawString("o")}}}break;case PlayerCharacterType.MEDIUM:if(this.getTurtle()&&this.getBerserk()){this.getRenderArea().drawArray(Database.getAscii("players/mediumTurtleBerserk"))
}else{if(this.getTurtle()){this.getRenderArea().drawArray(Database.getAscii("players/mediumTurtle"))
}else{if(this.getBerserk()){this.getRenderArea().drawArray(Database.getAscii("players/mediumBerserk"))
}else{this.getRenderArea().drawArray(Database.getAscii("players/medium"))}}}break;
case PlayerCharacterType.MEDIUM_SQUEEZED:if(this.getTurtle()&&this.getBerserk()){this.getRenderArea().drawArray(Database.getAscii("players/mediumSqueezedTurtleBerserk"))
}else{if(this.getTurtle()){this.getRenderArea().drawArray(Database.getAscii("players/mediumSqueezedTurtle"))
}else{if(this.getBerserk()){this.getRenderArea().drawArray(Database.getAscii("players/mediumSqueezedBerserk"))
}else{this.getRenderArea().drawArray(Database.getAscii("players/mediumSqueezed"))
}}}break}};return a})(QuestEntity);var PolishedSilverSword=(function(b){__extends(a,b);
function a(){b.call(this,"eqItemWeaponPolishedSilverSword","eqItemWeaponPolishedSilverSwordName","eqItemWeaponPolishedSilverSwordDescription","eqItems/weapons/polishedSilverSword")
}a.prototype.getQuestEntityWeapon=function(c,e){var d=new QuestEntityWeapon(c,e,new Naming("A polished silver sword","a polished silver sword"),e.getClassicCollisionBoxCollection(),7);
d.getCloseCombatDelay().setFixedDelay(4,0);return d};return a})(EqItem);var PondLine=(function(){function a(c,b){this.isUsed=false;
this.x1=c;this.x2=b}a.prototype.getIsUsed=function(){return this.isUsed};a.prototype.getX1=function(){return this.x1
};a.prototype.getX2=function(){return this.x2};a.prototype.setIsUsed=function(b){this.isUsed=b
};return a})();var PondLolligator=(function(){function a(b,c){this.width=13;this.pondLines=b;
this.pondLineIndex=c;this.isLeft=Random.flipACoin();if(this.isLeft==false){this.x=this.pondLines[this.pondLineIndex].getX1()
}else{this.x=this.pondLines[this.pondLineIndex].getX2()-this.width}this.visibleType=PondLolligatorVisibleType.NOT_FULLY_VISIBLE_YET;
this.setIsUsedForPondLines(true)}a.prototype.draw=function(c,b,d){c.drawArray(Database.getAscii("places/lollipopFarm/lolligator"+(this.isLeft?"Left":"Right")+(this.visibleType==PondLolligatorVisibleType.FULLY_VISIBLE?"Full":"Top")),b+this.x,d+this.pondLineIndex)
};a.prototype.move=function(){if(this.isLeft){this.x-=1;if(this.visibleType==PondLolligatorVisibleType.NOT_FULLY_VISIBLE_YET&&this.x+this.width<this.pondLines[this.pondLineIndex].getX2()-2&&Random.oneChanceOutOf(5)){this.visibleType=PondLolligatorVisibleType.FULLY_VISIBLE
}else{if(this.visibleType==PondLolligatorVisibleType.FULLY_VISIBLE&&(this.x<this.pondLines[this.pondLineIndex].getX1()+2||Random.oneChanceOutOf(2))){this.visibleType=PondLolligatorVisibleType.NOT_FULLY_VISIBLE_ANYMORE
}}}else{this.x+=1;if(this.visibleType==PondLolligatorVisibleType.NOT_FULLY_VISIBLE_YET&&this.x>this.pondLines[this.pondLineIndex].getX1()+2&&Random.oneChanceOutOf(5)){this.visibleType=PondLolligatorVisibleType.FULLY_VISIBLE
}else{if(this.visibleType==PondLolligatorVisibleType.FULLY_VISIBLE&&(this.x+this.width>this.pondLines[this.pondLineIndex].getX2()-2||Random.oneChanceOutOf(2))){this.visibleType=PondLolligatorVisibleType.NOT_FULLY_VISIBLE_ANYMORE
}}}};a.prototype.shouldBeDeleted=function(){if(this.isLeft==false){if(this.x+this.width>this.pondLines[this.pondLineIndex].getX2()){return true
}return false}else{if(this.x<this.pondLines[this.pondLineIndex].getX1()){return true
}return false}};a.prototype.willBeDeleted=function(){this.setIsUsedForPondLines(false)
};a.prototype.setIsUsedForPondLines=function(b){this.pondLines[this.pondLineIndex].setIsUsed(b);
if(this.pondLineIndex>0){this.pondLines[this.pondLineIndex-1].setIsUsed(b)}};return a
})();var PondLolligatorVisibleType;(function(a){a[a.NOT_FULLY_VISIBLE_YET=0]="NOT_FULLY_VISIBLE_YET";
a[a.FULLY_VISIBLE=1]="FULLY_VISIBLE";a[a.NOT_FULLY_VISIBLE_ANYMORE=2]="NOT_FULLY_VISIBLE_ANYMORE"
})(PondLolligatorVisibleType||(PondLolligatorVisibleType={}));var Pos=(function(){function a(b,c){if(b===void 0){b=0
}if(c===void 0){c=0}this.x=b;this.y=c}a.prototype.add=function(b){this.x+=b.x;this.y+=b.y
};a.prototype.copy=function(){return new a(this.x,this.y)};a.prototype.getDistance=function(b){return new a(this.x-b.x,this.y-b.y)
};a.prototype.invert=function(){var b=this.x;this.x=this.y;this.y=b};a.prototype.multiply=function(b){this.x=this.x*b.x;
this.y=this.y*b.y;return this};a.prototype.plus=function(b){return new a(this.x+b.x,this.y+b.y)
};return a})();var QuestEntityAnimation=(function(){function a(b,e,c){var d=[];for(var f=3;
f<arguments.length;f++){d[f-3]=arguments[f]}this.intervalTime=b;this.currentTime=e;
this.currentAsciiIndex=c;this.asciiNames=d}a.prototype.draw=function(b){b.drawArray(Database.getAscii(this.asciiNames[this.currentAsciiIndex]))
};a.prototype.shouldUpdateRenderAreaAtThisFrame=function(){return(this.currentTime==this.intervalTime)
};a.prototype.update=function(){this.currentTime+=1;if(this.currentTime>this.intervalTime){this.currentTime=0;
this.currentAsciiIndex+=1;if(this.currentAsciiIndex>=this.asciiNames.length){this.currentAsciiIndex=0
}}};a.prototype.getCurrentAsciiIndex=function(){return this.currentAsciiIndex};return a
})();var QuestEntityDamageReason=(function(){function a(b,c){this.questEntity=null;
this.questEntityTeam=null;this.questEntityWeapon=null;this.spellNaming=null;this.whoType=b;
this.whatType=c}a.prototype.getQuestEntityTeam=function(){return this.questEntityTeam
};a.prototype.getWhatNaming=function(){switch(this.whatType){case QuestEntityDamageReasonWhatType.WEAPON:return this.questEntityWeapon.getNaming();
break;case QuestEntityDamageReasonWhatType.SPELL:return this.spellNaming;break}};
a.prototype.getWhoNaming=function(){switch(this.whoType){case QuestEntityDamageReasonWhoType.NATURE:return new Naming("Nature","nature");
break;case QuestEntityDamageReasonWhoType.ENTITY:return this.questEntity.getNaming();
break}};a.prototype.setQuestEntity=function(c,b){if(b===void 0){b=null}this.questEntity=c;
if(b==null){this.questEntityTeam=c.getTeam()}else{this.questEntityTeam=b}return this
};a.prototype.setQuestEntityWeapon=function(b){this.questEntityWeapon=b;return this
};a.prototype.setSpellNaming=function(b){this.spellNaming=b;return this};return a
})();var QuestEntityDamageReasonWhatType;(function(a){a[a.WEAPON=0]="WEAPON";a[a.SPELL=1]="SPELL"
})(QuestEntityDamageReasonWhatType||(QuestEntityDamageReasonWhatType={}));var QuestEntityDamageReasonWhoType;
(function(a){a[a.NATURE=0]="NATURE";a[a.ENTITY=1]="ENTITY"})(QuestEntityDamageReasonWhoType||(QuestEntityDamageReasonWhoType={}));
var QuestEntityHealthBarPositionType;(function(a){a[a.RELATIVE=0]="RELATIVE";a[a.FIXED=1]="FIXED";
a[a.FIXED_ON_PAGE=2]="FIXED_ON_PAGE"})(QuestEntityHealthBarPositionType||(QuestEntityHealthBarPositionType={}));
var QuestEntityHealthBar=(function(){function a(d,f,b,h,e,c,g){if(b===void 0){b=new Pos(0,-1)
}if(h===void 0){h=QuestEntityHealthBarPositionType.RELATIVE}if(e===void 0){e=false
}if(c===void 0){c=false}if(g===void 0){g=BarType.UNICOLOR_HEALTH}this.bar=new Bar(g);
this.setBarSize(f);this.questEntity=d;this.position=b;this.positionType=h;this.drawEvenIfFull=e;
this.showText=c;this.update()}a.prototype.draw=function(b){if(this.shouldBeDrawn){switch(this.positionType){case QuestEntityHealthBarPositionType.FIXED_ON_PAGE:b.drawArea(this.bar,((this.questEntity.getQuest().getRenderArea().getWidth()-100)-this.questEntity.getQuest().getGap())/2+this.questEntity.getQuest().getRealQuestPosition().x+this.position.x+this.questEntity.getQuest().getGlobalDrawingOffset().x,this.questEntity.getQuest().getRealQuestPosition().y+this.position.y+this.questEntity.getQuest().getGlobalDrawingOffset().y,new RenderTransparency(" "));
break;case QuestEntityHealthBarPositionType.FIXED:b.drawArea(this.bar,this.questEntity.getQuest().getRealQuestPosition().x+this.position.x+this.questEntity.getQuest().getGlobalDrawingOffset().x,this.questEntity.getQuest().getRealQuestPosition().y+this.position.y+this.questEntity.getQuest().getGlobalDrawingOffset().y,new RenderTransparency(" "));
break;case QuestEntityHealthBarPositionType.RELATIVE:if(this.questEntity.getQuest().getRealQuestPosition().x+this.questEntity.getGlobalPosition().x+this.position.x>0&&this.questEntity.getQuest().getRealQuestPosition().x+this.questEntity.getGlobalPosition().x+this.position.x+this.bar.getWidth()<=b.getWidth()&&this.questEntity.getGlobalPosition().y+this.position.y>0&&this.questEntity.getGlobalPosition().y+this.position.y<=this.questEntity.getQuest().getRealQuestSize().y){b.drawArea(this.bar,this.questEntity.getQuest().getRealQuestPosition().x+this.questEntity.getGlobalPosition().x+this.position.x+this.questEntity.getQuest().getGlobalDrawingOffset().x,this.questEntity.getQuest().getRealQuestPosition().y+this.questEntity.getGlobalPosition().y+this.position.y+this.questEntity.getQuest().getGlobalDrawingOffset().y,new RenderTransparency(" "))
}break}}};a.prototype.update=function(){if(this.drawEvenIfFull||this.questEntity.getHp()/this.questEntity.getMaxHp()!=1){this.shouldBeDrawn=true
}else{this.shouldBeDrawn=false}if(this.shouldBeDrawn){if(this.showText==false){this.bar.update(this.questEntity.getHp()/this.questEntity.getMaxHp(),this.questEntity.getHp().toString())
}else{this.bar.update(this.questEntity.getHp()/this.questEntity.getMaxHp(),this.questEntity.getNaming().getBeginning()+" : "+this.questEntity.getHp().toString()+"/"+this.questEntity.getMaxHp().toString())
}}};a.prototype.setBarSize=function(b){this.barSize=b;this.bar.resize(this.barSize.x,this.barSize.y)
};a.prototype.setDrawEvenIfFull=function(b){this.drawEvenIfFull=b};return a})();var QuestEntityMovement=(function(){function a(d,b,c){if(d===void 0){d=new Pos(0,0)
}if(b===void 0){b=0}if(c===void 0){c=0}this.gravity=false;this.wormsLike=false;this.offset=d;
this.intervalTime=b;this.currentTime=c}a.prototype.shouldMoveAtThisFrame=function(){return(this.currentTime==this.intervalTime)
};a.prototype.update=function(){this.currentTime+=1;if(this.currentTime>this.intervalTime){this.currentTime=0
}};a.prototype.getCurrentFrameMovement=function(){if(this.shouldMoveAtThisFrame()){return this.offset
}else{return new Pos(0,0)}};a.prototype.getGravity=function(){return this.gravity
};a.prototype.getOffset=function(){return this.offset};a.prototype.getWormsLike=function(){return this.wormsLike
};a.prototype.setGravity=function(b){this.gravity=b};a.prototype.setOffset=function(b){this.offset=b
};a.prototype.setWormsLike=function(b){this.wormsLike=b};return a})();var QuestEntitySpellCaster=(function(){function a(b){this.delay=new QuestEntityWeaponDelay();
this.callbackCollection=b}a.prototype.tryToCast=function(){if(this.delay.tryToAttack()){this.callbackCollection.fire()
}};a.prototype.getDelay=function(){return this.delay};return a})();var QuestEntitySpellColor=(function(){function a(d,b,e,c){this.quest=d;
this.position=b;this.size=e;this.color=c}a.prototype.draw=function(f,d){var c;var b;
var g;for(var e=0;e<this.size.y;e++){c=this.position.x+d.x;if(c<this.quest.getRealQuestPosition().x){c=this.quest.getRealQuestPosition().x
}b=this.position.x+d.x+this.size.x;if(b>this.quest.getRealQuestPosition().x+this.quest.getRealQuestSize().x){b=this.quest.getRealQuestPosition().x+this.quest.getRealQuestSize().x
}g=this.position.y+d.y+e;if(c<b&&g>=this.quest.getRealQuestPosition().y&&g<this.quest.getRealQuestPosition().y+this.quest.getRealQuestSize().y){f.addBackgroundColor(c,b,g,this.color)
}}};return a})();var QuestEntityTeam;(function(a){a[a.PLAYER=0]="PLAYER";a[a.MOBS=1]="MOBS";
a[a.NATURE=2]="NATURE"})(QuestEntityTeam||(QuestEntityTeam={}));var QuestEntityWeaponDelay=(function(){function a(){this.type=QuestEntityWeaponDelayType.FIXED;
this.currentDelay=0;this.maxDelay=0}a.prototype.getText=function(){var b;if(this.type==QuestEntityWeaponDelayType.BETWEEN){b=Math.floor(this.minBetweenDelay+(this.maxBetweenDelay-this.minBetweenDelay)/2)
}else{b=this.maxDelay}switch(b){case 0:return"incredibly fast";break;case 1:return"very fast";
break;case 2:return"fast";break;case 3:return"rather fast";break;case 4:return"medium speed";
case 5:return"rather slow";break;case 6:case 7:return"slow";break;case 8:case 9:return"very slow";
break;case 10:case 11:case 12:case 13:case 14:return"incredibly slow";break;default:"couldn't be slower";
break}};a.prototype.tryToAttack=function(){this.currentDelay++;switch(this.type){case QuestEntityWeaponDelayType.FIXED:if(this.currentDelay>this.maxDelay){this.currentDelay=0;
return true}break;case QuestEntityWeaponDelayType.BETWEEN:if(this.currentDelay>this.maxDelay){this.currentDelay=0;
this.chooseBetweenDelay();return true}break;case QuestEntityWeaponDelayType.ONCE_THEN_WAIT:if(this.currentDelay>this.maxDelay){return true
}break}return false};a.prototype.setBetweenDelay=function(c,d,b){if(b===void 0){b=0
}this.type=QuestEntityWeaponDelayType.BETWEEN;this.minBetweenDelay=c;this.maxBetweenDelay=d;
this.chooseBetweenDelay()};a.prototype.setFixedDelay=function(c,b){if(c===void 0){c=0
}if(b===void 0){b=0}this.type=QuestEntityWeaponDelayType.FIXED;this.maxDelay=c;this.currentDelay=b
};a.prototype.setOnceThenWaitDelay=function(c,b){if(c===void 0){c=0}if(b===void 0){b=0
}this.type=QuestEntityWeaponDelayType.ONCE_THEN_WAIT;this.maxDelay=c;this.currentDelay=b
};a.prototype.theWeaponAttacked=function(){if(this.type==QuestEntityWeaponDelayType.ONCE_THEN_WAIT){this.currentDelay=0
}};a.prototype.chooseBetweenDelay=function(){this.maxDelay=Random.between(this.minBetweenDelay,this.maxBetweenDelay)
};return a})();var QuestEntityWeaponDelayType;(function(a){a[a.FIXED=0]="FIXED";a[a.BETWEEN=1]="BETWEEN";
a[a.ONCE_THEN_WAIT=2]="ONCE_THEN_WAIT"})(QuestEntityWeaponDelayType||(QuestEntityWeaponDelayType={}));
var QuestItemFound=(function(){function a(d,e,c,b){this.quest=d;this.savingName=e;
this.foundText=c;this.getText=b}a.prototype.found=function(){this.quest.getGame().getQuestLog().addMessage(new QuestLogMessage(this.foundText,null,true))
};a.prototype.get=function(){this.quest.getGame().getQuestLog().addMessage(new QuestLogMessage(this.getText,null,true))
};a.prototype.getSavingName=function(){return this.savingName};return a})();var QuestLogMessage=(function(){function a(d,c,b){if(c===void 0){c=null
}if(b===void 0){b=false}this.left=null;this.right=null;this.left=d;this.right=c;this.bold=b;
if(this.left.length>100-(this.right!=null?this.right.length:0)){this.left=this.left.substr(0,100-(this.right!=null?this.right.length:0)-7)+" (...)"
}}a.prototype.draw=function(c,d,b){if(this.left!=null){c.drawString(this.left,d.x,d.y);
if(this.bold){c.addBold(d.x,d.x+this.left.length,d.y)}}if(this.right!=null){c.drawString(this.right,d.x+b-this.right.length,d.y);
if(this.bold){c.addBold(d.x+b-this.right.length,b,d.y)}}};return a})();var QuestLog=(function(){function a(){this.messages=[]
}a.prototype.addDelimiter=function(){this.messages.push(new QuestLogMessage("----------------------------------------------------------------------------------------------------"));
this.messages.push(new QuestLogMessage(""))};a.prototype.addMessage=function(b){this.messages.push(b);
this.checkLogSize()};a.prototype.draw=function(c,d){c.drawHorizontalLine("-",d.x,d.x+100,d.y);
c.drawHorizontalLine("-",d.x,d.x+100,d.y+11);for(var b=0;b<this.messages.length;b++){this.messages[b].draw(c,new Pos(d.x,1+d.y+this.messages.length-1-b),100)
}};a.prototype.checkLogSize=function(){if(this.messages.length>10){this.messages.splice(0,this.messages.length-10)
}};return a})();var QuestPlayerSpellCountdownType;(function(a){a[a.SPELLS=0]="SPELLS";
a[a.POTIONS=1]="POTIONS";a[a.ITEM_CAPACITIES=2]="ITEM_CAPACITIES";a[a.BLACKHOLE=3]="BLACKHOLE"
})(QuestPlayerSpellCountdownType||(QuestPlayerSpellCountdownType={}));Saving.registerBool("questPlayerSpellHealthPotionHasSpell",false);
Saving.registerBool("questPlayerSpellTurtlePotionHasSpell",false);Saving.registerBool("questPlayerSpellAntiGravityPotionHasSpell",false);
Saving.registerBool("questPlayerSpellBerserkPotionHasSpell",false);Saving.registerBool("questPlayerSpellCloningPotionHasSpell",false);
Saving.registerBool("questPlayerSpellPPotionHasSpell",false);Saving.registerBool("questPlayerSpellXPotionHasSpell",false);
Saving.registerNumber("questPlayerSpellHealthPotionQuantity",0);Saving.registerNumber("questPlayerSpellAntiGravityPotionQuantity",0);
Saving.registerNumber("questPlayerSpellTurtlePotionQuantity",0);Saving.registerNumber("questPlayerSpellBerserkPotionQuantity",0);
Saving.registerNumber("questPlayerSpellCloningPotionQuantity",0);Saving.registerNumber("questPlayerSpellPPotionQuantity",0);
Saving.registerNumber("questPlayerSpellXPotionQuantity",0);var QuestPlayerSpell=(function(){function a(g,f,b,j,l,e,c,h,k,i,d){if(k===void 0){k=null
}if(i===void 0){i=null}if(d===void 0){d=null}this.quest=g;this.buttonClassName=f;
this.buttonPosition=b;this.buttonText=j;this.buttonColor=l;this.callbackCollection=e;
this.countdownType=c;this.countdownTime=h;this.underlinedLetter=k;this.hotkeyLetter=i;
this.numberIdWichLimitsQuantity=d}a.prototype.draw=function(c,b){var d=this.buttonText;
if(this.numberIdWichLimitsQuantity!=null){if(Saving.loadNumber(this.numberIdWichLimitsQuantity)<=999){d+=" "+Saving.loadNumber(this.numberIdWichLimitsQuantity)
}else{d+=" 999+"}}c.addAsciiRealButton(d,b.x+this.buttonPosition.x,b.y+this.buttonPosition.y,this.buttonClassName+" keepBlackTextWhenInverted","",false,this.underlinedLetter,this.buttonColor);
c.addLinkCall("."+this.buttonClassName,new CallbackCollection(this.cast.bind(this)))
};a.prototype.getHotkey=function(){return new Hotkey(this.hotkeyLetter,new CallbackCollection(this.cast.bind(this)))
};a.prototype.getButtonPosition=function(){return this.buttonPosition};a.prototype.cast=function(){var b=true;
if(this.quest.getQuestEnded()){b=false}if(b==true){switch(this.countdownType){case QuestPlayerSpellCountdownType.SPELLS:if(this.quest.getPlayerSpellsCountdown()>0){b=false
}break;case QuestPlayerSpellCountdownType.POTIONS:if(this.quest.getPlayerPotionsCountdown()>0){b=false
}break;case QuestPlayerSpellCountdownType.BLACKHOLE:if(this.countdownTime<=0){b=false
}break;default:break}}if(this.numberIdWichLimitsQuantity!=null){if(Saving.loadNumber(this.numberIdWichLimitsQuantity)<=0){b=false
}}if(b==true){switch(this.countdownType){case QuestPlayerSpellCountdownType.SPELLS:this.quest.increasePlayerSpellsCountdown(this.countdownTime);
break;case QuestPlayerSpellCountdownType.POTIONS:this.quest.increasePlayerPotionsCountdown(this.countdownTime);
break;case QuestPlayerSpellCountdownType.BLACKHOLE:this.countdownTime-=1;break;default:break
}if(this.numberIdWichLimitsQuantity!=null){Saving.saveNumber(this.numberIdWichLimitsQuantity,Saving.loadNumber(this.numberIdWichLimitsQuantity)-1)
}this.callbackCollection.fire()}};return a})();var Random;(function(f){function e(i,h){if(Bugs.getUltimateBugLevel()>=2){return h
}return Math.floor(Math.random()*(h-i+1))+i}f.between=e;function g(){if(Bugs.getUltimateBugLevel()>=2){return true
}if(Math.random()<0.5){return false}return true}f.flipACoin=g;function b(h){if(Bugs.getUltimateBugLevel()>=4){return b(["a","b","c","d",-852,null,"aniwey","ilovebugs","42",42])
}return h[d(h.length-1)]}f.fromArray=b;function c(h){if(Bugs.getUltimateBugLevel()>=3){return new Pos(-h.x,-h.y)
}return new Pos(f.upTo(h.x),f.upTo(h.y))}f.fromPosition=c;function a(h){if(Bugs.getUltimateBugLevel()>=1){return g()
}if(this.upTo(h-1)==0){return true}return false}f.oneChanceOutOf=a;function d(h){if(Bugs.getUltimateBugLevel()>=3){return -h
}return Math.floor(Math.random()*(h+1))}f.upTo=d})(Random||(Random={}));var Rat=(function(b){__extends(a,b);
function a(c,d){b.call(this,c,d,new Naming("A rat","a rat"),new RenderArea(3,1),new Pos(0,0),new CollisionBoxCollection(new CollisionBox(this,new Pos(0,0),new Pos(3,1))),new QuestEntityMovement());
this.getQuestEntityMovement().setGravity(true);this.setDestructible(true);this.setMaxHp(3);
this.setHp(3);this.getRenderArea().drawArray(Database.getAscii("places/quests/cellar/rat"));
this.addQuestEntityWeapon(new QuestEntityWeapon(this.getQuest(),this,new Naming("Its teeth","its teeth"),new CollisionBoxCollection(new CollisionBox(this,new Pos(-1,-1),new Pos(5,2))),1));
this.getLastQuestEntityWeapon().getCloseCombatDelay().setFixedDelay(3)}a.prototype.willDie=function(){if(Random.oneChanceOutOf(3)){this.getQuest().getGame().getQuestLog().addMessage(new QuestLogMessage(this.getDeathMessage()+" (and found "+Algo.pluralFormat(this.getQuest().foundCandies(1)," candy"," candies")+")",this.getQuest().getCandiesFoundMessage()))
}else{this.getQuest().getGame().getQuestLog().addMessage(new QuestLogMessage(this.getDeathMessage()))
}};return a})(QuestEntity);var RedEnchantedGloves=(function(b){__extends(a,b);function a(){b.call(this,"eqItemGlovesRedEnchantedGloves","eqItemGlovesRedEnchantedGlovesName","eqItemGlovesRedEnchantedGlovesDescription","eqItems/gloves/redEnchantedGloves");
this.currentTimer=0;this.maxTimer=5}a.prototype.getSpecialAbility=function(){return"Randomly cast small fireballs around you (red enchanted gloves)."
};a.prototype.update=function(d,c){this.currentTimer+=1;if(this.currentTimer>=this.maxTimer){this.castFireball(d,c);
this.currentTimer=0}};a.prototype.castFireball=function(e,d){var c=new Fireball(d,e.getSpellCastingPosition(),new Naming("A small fireball","a small fireball"),new Color(ColorType.RED_ENCHANTED_GLOVES_FIREBALL),new Pos(2,1),15,e.getAndPossiblyCreateSpellCastingDamageReason(new Naming("A small fireball","a small fireball")));
c.setTargetTypeNoTarget(Algo.getRandomNotImmobileDirectionUpToThisSpeed(1).multiply(new Pos(2,2)));
d.addEntity(c)};return a})(EqItem);var RenderLinkCallbackCollection=(function(b){__extends(a,b);
function a(c){b.call(this);this.callbackCollection=c}a.prototype.run=function(){this.callbackCollection.fire()
};return a})(RenderLink);var RenderLinkChange=(function(b){__extends(a,b);function a(c,d){b.call(this);
this.element=c;this.callbackCollection=d}a.prototype.run=function(){var c=this;$(this.element).change(function(d){c.callbackCollection.fire();
return false})};return a})(RenderLink);var RenderLinkCheckbox=(function(b){__extends(a,b);
function a(d,c,e){b.call(this);this.element=d;this.callbackCollectionWhenChecked=c;
this.callbackCollectionWhenUnchecked=e}a.prototype.run=function(){var c=this;$(this.element).change(function(d){if($(this).is(":checked")){c.callbackCollectionWhenChecked.fire()
}else{c.callbackCollectionWhenUnchecked.fire()}return false})};return a})(RenderLink);
var RenderLinkClick=(function(b){__extends(a,b);function a(c,d){b.call(this);this.element=c;
this.callbackCollection=d}a.prototype.run=function(){var c=this;$(this.element).mouseup(function(d){c.callbackCollection.fire();
return false})};return a})(RenderLink);var RenderLinkInput=(function(a){__extends(b,a);
function b(d,c,e,f){a.call(this);this.element=d;this.enigmaAnswer=c;this.callbackCollection=e;
this.callbackCollectionWrong=f}b.prototype.run=function(){var c=this;$(this.element).change(function(d){if(c.enigmaAnswer.isRight($(this).val())){c.callbackCollection.fire()
}else{if(c.callbackCollectionWrong!=null){c.callbackCollectionWrong.fire()}}$(this).val("");
return false});$(this.element).focus()};return b})(RenderLink);var RenderLinkOnHoverShowTooltip=(function(b){__extends(a,b);
function a(d,c){b.call(this);this.classHover=d;this.classTooltip=c}a.prototype.run=function(){var c=this;
$(this.classHover).hover(function(d){$(c.classTooltip).css({display:"block"});return false
});$(this.classHover).mouseout(function(d){$(c.classTooltip).css({display:"none"});
return false});$(this.classHover).on("mousemove",function(d){$(c.classTooltip).css({left:d.pageX-$(document).scrollLeft(),top:d.pageY-$(document).scrollTop()})
})};return a})(RenderLink);var RenderLinkOver=(function(b){__extends(a,b);function a(d,c){b.call(this);
this.firstElement=d;this.secondElement=c}a.prototype.run=function(){var c=this;$(this.firstElement).mouseenter(function(d){$(c.secondElement).show();
return false}).mouseleave(function(d){$(c.secondElement).hide();return false})};return a
})(RenderLink);var RenderLinkSimpleInput=(function(a){__extends(b,a);function b(d,e,c,f){a.call(this);
this.element=d;this.callbackCollection=e;this.defaultValue=c;this.hasFocus=f}b.prototype.run=function(){var c=this;
if(this.defaultValue!=null){$(this.element).val(this.defaultValue)}$(this.element).change(function(d){c.callbackCollection.fire();
return false});if(this.hasFocus){$(this.element).focus()}};return b})(RenderLink);
var RenderTagLt=(function(b){__extends(a,b);function a(c){b.call(this,c,"")}a.prototype.clone=function(){return b.prototype.clone.call(this)
};a.prototype.draw=function(c){c=c.replaceAt(this.getX(),"&");return c.addAt(this.getX()+1,"lt;")
};return a})(RenderTag);var RenderTransparency=(function(){function a(b,c){if(c===void 0){c=null
}this.alphaCharacter=b;this.metaAlphaCharacter=c}a.prototype.getAlphaCharacter=function(){return this.alphaCharacter
};a.prototype.getMetaAlphaCharacter=function(){return this.metaAlphaCharacter};return a
})();var RocketBoots=(function(a){__extends(b,a);function b(){a.call(this,"eqItemBootsRocketBoots","eqItemBootsRocketBootsName","eqItemBootsRocketBootsDescription","eqItems/boots/rocketBoots")
}b.prototype.getSpecialAbility=function(){return"Jump in mid-air without limit (rocket boots)."
};return b})(EqItem);var Save=(function(b){__extends(a,b);function a(c){b.call(this,c);
this.renderArea=new RenderArea();this.selectedSlot="slot1";this.lastLocalAutosaveMinute=null;
this.showFileSaveWarning=false;this.fileSaveTextareaContent=null;this.resize();this.createSlotsArray();
this.update()}a.prototype.getRenderArea=function(){return this.renderArea};a.prototype.willBeDisplayed=function(){this.resize();
this.getGame().getOneSecondCallbackCollection().addCallback(this.oneSecondCallback.bind(this))
};a.prototype.clickedAutosave=function(){Saving.save(this.getGame(),MainLoadingType.LOCAL,this.selectedSlot);
this.getGame().enableLocalAutosave(this.selectedSlot);this.createSlotsArray();this.update();
this.getGame().updatePlace()};a.prototype.clickedDisableAutosave=function(){this.getGame().disableLocalAutosave();
this.update();this.getGame().updatePlace()};a.prototype.clickedFileLoad=function(){Main.reloadEverythingFromFile($(".saveFileLoadTextarea").val())
};a.prototype.clickedFileSave=function(){this.getGame().save();this.getGame().getPlayer().save();
this.showFileSaveWarning=true;this.fileSaveTextareaContent="";for(var c in Saving.getAllBools()){if(this.fileSaveTextareaContent!=""){this.fileSaveTextareaContent+=", "
}this.fileSaveTextareaContent+="bool "+c+"="+Saving.boolToString(Saving.getAllBools()[c])
}for(var c in Saving.getAllNumbers()){if(this.fileSaveTextareaContent!=""){this.fileSaveTextareaContent+=", "
}this.fileSaveTextareaContent+="number "+c+"="+Saving.numberToString(Saving.getAllNumbers()[c])
}for(var c in Saving.getAllStrings()){if(this.fileSaveTextareaContent!=""){this.fileSaveTextareaContent+=", "
}this.fileSaveTextareaContent+="string "+c+"="+Saving.getAllStrings()[c]}this.update();
this.getGame().updatePlace()};a.prototype.clickedSave=function(){Saving.save(this.getGame(),MainLoadingType.LOCAL,this.selectedSlot);
this.createSlotsArray();this.update();this.getGame().updatePlace()};a.prototype.createSlotsArray=function(){this.slotsArray=[];
for(var c=1;c<=5;c++){this.slotsArray.push("slot"+c.toString());this.slotsArray.push("Slot "+c.toString()+" ("+LocalSaving.getSlotSummaryAsString("slot"+c.toString())+")")
}};a.prototype.drawGreen=function(e,c,f,d){if(d===void 0){d=false}this.renderArea.drawString(e,c,f,d);
this.renderArea.addColor(c,c+e.length,f,new Color(ColorType.SAVE_GREEN))};a.prototype.drawLocalLoad=function(c,g){var e=0;
var f;this.drawTitle("saveLocalLoadTitle",g+e);if(LocalSaving.supportsLocalSaving()){this.drawPoint("saveLocalLoadYouCan",c,g+e+2);
if(Database.isTranslated()){e+=1}for(var d=1;d<=5;d++){f="http://candybox2.github.io/?slot="+d.toString();
this.renderArea.addHtmlLink(c+2,g+e+3+d,f,f);this.renderArea.drawString("(slot "+d.toString()+")",c+f.length+4,g+e+3+d)
}this.drawPoint("saveLocalLoadThanksTo",c,g+e+10);if(Database.isTranslated()){e+=1
}}else{this.drawWarning(Database.getText("saveLocalSaveWarning0")+" (local storage and application cache)",c,g+e+2);
this.drawWarning(Database.getText("saveLocalSaveWarning1"),c,g+e+3);this.drawWarning(Database.getTranslatedText("saveLocalSaveWarning0"),c,g+e+5,true);
this.drawWarning(Database.getTranslatedText("saveLocalSaveWarning1"),c,g+e+6,true)
}return e};a.prototype.drawLocalSave=function(c,e){var d=0;this.drawTitle("saveLocalSaveTitle",e+d);
this.drawPoint("saveLocalSaveWhy",c,e+d+2);if(Database.isTranslated()){d+=1}if(LocalSaving.supportsLocalSaving()){this.drawPoint("saveLocalSaveChooseSlot",c,e+d+4);
this.renderArea.addList(c+5,c+45,e+d+7,"saveLocalSaveSlotsList",new CallbackCollection(this.slotSelected.bind(this)),this.slotsArray);
if(this.getGame().getLocalAutosaveEnabled()){this.drawGreen(Database.getText("saveLocalSaveAutosaveEnabled"),c,e+d+9);
if(Database.getTranslatedText("saveLocalSaveAutosaveEnabled")!=""){this.drawGreen("("+Database.getTranslatedText("saveLocalSaveAutosaveEnabled")+")",c,e+d+10,true)
}this.drawGreen("Next save in "+Algo.pluralFormat(Math.ceil(this.getGame().getLocalAutosaveTime()/60)," minute"," minutes")+" on slot "+this.getGame().getLocalAutosaveSlot().substr(4,1)+".",c,e+d+11)
}this.renderArea.drawVerticalLine("|",c+50,e+d+5,e+d+11);this.renderArea.drawHorizontalLine("-",c,c+100,e+d+3);
this.renderArea.drawHorizontalLine("-",c,c+100,e+d+12);this.drawPoint("saveLocalSaveChooseWhatToDo",c+51,e+d+4);
this.renderArea.addAsciiRealButton(Database.getText("saveLocalSaveSaveButton")+" on slot "+this.selectedSlot.substr(4,1),c+51,e+d+7,"saveLocalSaveSaveButton",Database.getTranslatedText("saveLocalSaveSaveButton"),true,-1,null,false);
this.renderArea.addLinkCall(".saveLocalSaveSaveButton",new CallbackCollection(this.clickedSave.bind(this)));
if(this.getGame().getLocalAutosaveEnabled()==false){this.renderArea.addAsciiRealButton(Database.getText("saveLocalSaveAutosaveButton")+" on slot "+this.selectedSlot.substr(4,1),c+51,e+d+10,"saveLocalSaveAutosaveButton",Database.getTranslatedText("saveLocalSaveAutosaveButton"),true,-1,null,false);
this.renderArea.addLinkCall(".saveLocalSaveAutosaveButton",new CallbackCollection(this.clickedAutosave.bind(this)))
}else{this.renderArea.addAsciiRealButton(Database.getText("saveLocalSaveDisableAutosaveButton"),c+51,e+d+10,"saveLocalSaveDisableAutosaveButton",Database.getTranslatedText("saveLocalSaveDisableAutosaveButton"),true,-1,null,false);
this.renderArea.addLinkCall(".saveLocalSaveDisableAutosaveButton",new CallbackCollection(this.clickedDisableAutosave.bind(this)))
}}else{this.drawWarning(Database.getText("saveLocalSaveWarning0")+" (local storage and application cache)",c,e+d+4);
this.drawWarning(Database.getText("saveLocalSaveWarning1"),c,e+d+5);this.drawWarning(Database.getTranslatedText("saveLocalSaveWarning0"),c,e+d+7,true);
this.drawWarning(Database.getTranslatedText("saveLocalSaveWarning1"),c,e+d+8,true)
}return d};a.prototype.drawFileLoad=function(c,e){var d=0;this.drawTitle("saveFileLoadTitle",e+d);
this.renderArea.drawString(Database.getText("saveFileLoadPaste"),c,e+d+2);this.renderArea.drawString(Database.getTranslatedText("saveFileLoadPaste"),c,e+d+3,true);
this.renderArea.addTextarea(c+2,e+d+5,96,6,"saveFileLoadTextarea");this.renderArea.addAsciiRealButton(Database.getText("saveFileLoadButton"),48,e+d+13,"saveFileLoadButton",Database.getTranslatedText("saveFileLoadButton"),true);
this.renderArea.addLinkCall(".saveFileLoadButton",new CallbackCollection(this.clickedFileLoad.bind(this)));
return d};a.prototype.drawFileSave=function(c,e){var d=0;this.drawTitle("saveFileSaveTitle",e+d);
this.renderArea.drawString(Database.getText("saveFileSaveWhy0"),c,e+d+2);this.renderArea.drawString(" - "+Database.getText("saveFileSaveWhy1"),c,e+d+3);
this.renderArea.drawString(" - "+Database.getText("saveFileSaveWhy2"),c,e+d+4);this.renderArea.drawString(" - "+Database.getText("saveFileSaveWhy3"),c,e+d+5);
this.renderArea.drawString("   "+Database.getText("saveFileSaveWhy4"),c,e+d+6);if(Database.isTranslated()){this.renderArea.drawString(Database.getTranslatedText("saveFileSaveWhy0"),c,e+d+8,true);
this.renderArea.drawString(" - "+Database.getTranslatedText("saveFileSaveWhy1"),c,e+d+9,true);
this.renderArea.drawString(" - "+Database.getTranslatedText("saveFileSaveWhy2"),c,e+d+10,true);
this.renderArea.drawString(" - "+Database.getTranslatedText("saveFileSaveWhy3"),c,e+d+11,true);
this.renderArea.drawString("   "+Database.getTranslatedText("saveFileSaveWhy4"),c,e+d+12,true);
d+=6}this.renderArea.addAsciiRealButton(Database.getText("saveFileSaveButton"),35,e+d+8,"saveFileSaveButton",Database.getTranslatedText("saveFileSaveButton"),true);
this.renderArea.addLinkCall(".saveFileSaveButton",new CallbackCollection(this.clickedFileSave.bind(this)));
this.renderArea.addTextarea(c+2,e+d+11,96,6,"saveFileSaveTextarea",(this.fileSaveTextareaContent!=null?this.fileSaveTextareaContent:""));
if(this.showFileSaveWarning){this.drawWarning(Database.getText("saveFileSaveWarning"),c+2,e+d+12);
this.drawWarning(Database.getTranslatedText("saveFileSaveWarning"),c+2,e+d+13,true)
}return d};a.prototype.drawPoint=function(d,c,e){this.renderArea.drawString(Database.getText(d),c,e);
this.renderArea.drawString(Database.getTranslatedText(d),c,e+1,true)};a.prototype.drawTitle=function(d,e){var c=50-Math.floor((Database.getText(d).length/2+1+Database.getTranslatedText(d).length/2));
this.renderArea.drawString(Database.getText(d),c,e);this.renderArea.addBold(c,c+Database.getText(d).length,e);
this.renderArea.drawString(Database.getTranslatedText(d),c+Database.getText(d).length+1,e,true)
};a.prototype.drawWarning=function(e,c,f,d){if(d===void 0){d=false}if(e!=""){this.renderArea.drawString(e,c,f,d);
this.renderArea.addColor(c,c+e.length,f,new Color(ColorType.SAVE_RED))}};a.prototype.oneSecondCallback=function(){if(this.lastLocalAutosaveMinute==null||this.lastLocalAutosaveMinute!=Math.ceil(this.getGame().getLocalAutosaveTime()/60)){this.lastLocalAutosaveMinute=Math.ceil(this.getGame().getLocalAutosaveTime()/60);
this.createSlotsArray();this.update();this.getGame().updatePlace()}};a.prototype.resize=function(){if(Database.isTranslated()){this.renderArea.resize(100,84)
}else{this.renderArea.resize(100,74)}};a.prototype.selectRightSlot=function(){$("#"+this.selectedSlot).prop("selected",true)
};a.prototype.slotSelected=function(){this.selectedSlot=$("#saveLocalSaveSlotsList").find(":selected").attr("id");
this.update();this.getGame().updatePlace()};a.prototype.update=function(){var c=0;
this.renderArea.resetAllButSize();this.renderArea.drawArray(Database.getAscii("text/Saving"),50-Math.floor((Database.getAsciiWidth("text/Saving")/2)),c);
c+=this.drawLocalSave(0,c+7);c+=this.drawFileSave(0,c+21);this.renderArea.drawArray(Database.getAscii("text/Loading"),50-Math.floor((Database.getAsciiWidth("text/Loading")/2)),c+40);
c+=this.drawLocalLoad(0,c+47);c+=this.drawFileLoad(0,c+59);this.renderArea.addLinkCallbackCollection(new CallbackCollection(this.selectRightSlot.bind(this)))
};return a})(Place);var Scythe=(function(b){__extends(a,b);function a(){b.call(this,"eqItemWeaponScythe","eqItemWeaponScytheName","eqItemWeaponScytheDescription","eqItems/weapons/scythe")
}a.prototype.getQuestEntityWeapon=function(c,e){var d=new QuestEntityWeapon(c,e,new Naming("A scythe","a scythe"),e.getClassicCollisionBoxCollection(),21);
d.getCloseCombatDelay().setFixedDelay(0);return d};return a})(EqItem);var Seahorse=(function(b){__extends(a,b);
function a(c,e,d){b.call(this,c,e,new Naming("A magical seahorse","a magical seahorse"),new RenderArea(4,4),new Pos(0,0),new CollisionBoxCollection(new CollisionBox(this,new Pos(0,0),new Pos(3,1)),new CollisionBox(this,new Pos(1,1),new Pos(3,1)),new CollisionBox(this,new Pos(2,2),new Pos(1,1)),new CollisionBox(this,new Pos(2,3),new Pos(1,1))),new QuestEntityMovement(new Pos(-1,0)));
this.intendedXPosition=d;this.setDestructible(true);this.setMaxHp(20);this.setHp(20);
this.getRenderArea().drawArray(Database.getAscii("places/quests/theSea/seahorse"));
this.setTransparency(new RenderTransparency(" "));this.addQuestEntitySpellCaster(new QuestEntitySpellCaster(new CallbackCollection(this.castWaterBall.bind(this))));
this.getLastQuestEntitySpellCaster().getDelay().setFixedDelay(30,Random.upTo(30))
}a.prototype.tryToGoToIntendedXPosition=function(c){this.goTowards(this.getGlobalPosition(),new Pos(c+this.intendedXPosition,this.getGlobalPosition().y),0,new Pos(1,0))
};a.prototype.castWaterBall=function(){var c=new Fireball(this.getQuest(),this.getGlobalPosition().plus(new Pos(-2,0)),new Naming("A magical water ball","a magical water ball"),new Color(ColorType.SEAHORSE_WATER_BALL),new Pos(2,1),70,this.getAndPossiblyCreateSpellCastingDamageReason(new Naming("A magical water ball","a magical water ball")));
c.setTargetTypeNoTarget(new Pos(-2,0));this.getQuest().addEntity(c)};a.prototype.willDie=function(){this.getQuest().getGame().getQuestLog().addMessage(new QuestLogMessage(this.getDeathMessage()+" (and found "+Algo.pluralFormat(this.getQuest().foundCandies(150)," candy"," candies")+")",this.getQuest().getCandiesFoundMessage()))
};return a})(QuestEntity);var SeaSnake=(function(a){__extends(b,a);function b(c,d){a.call(this,c,d,new Naming("A sea snake","a sea snake"),new RenderArea(78,11),new Pos(0,0));
this.setQuestEntityMovement(new QuestEntityMovement(new Pos(-Random.between(3,5),0)));
this.setQuestEntityAnimation(new QuestEntityAnimation(0,0,Random.upTo(11),"places/quests/theSea/seaSnake/1","places/quests/theSea/seaSnake/2","places/quests/theSea/seaSnake/3","places/quests/theSea/seaSnake/4","places/quests/theSea/seaSnake/5","places/quests/theSea/seaSnake/6","places/quests/theSea/seaSnake/7","places/quests/theSea/seaSnake/8","places/quests/theSea/seaSnake/9","places/quests/theSea/seaSnake/10","places/quests/theSea/seaSnake/11","places/quests/theSea/seaSnake/12"));
this.setTransparency(new RenderTransparency(" ","%"));this.setDestructible(false)
}b.prototype.update=function(){if(Random.oneChanceOutOf(3)==false){this.castWaterBall()
}a.prototype.update.call(this)};b.prototype.castWaterBall=function(){var c=new Fireball(this.getQuest(),this.getGlobalPosition().plus(new Pos(-2,this.getYCastingOffset())),new Naming("A magical water ball","a magical water ball"),new Color(ColorType.SEAHORSE_WATER_BALL),new Pos(2,1),300,this.getAndPossiblyCreateSpellCastingDamageReason(new Naming("A magical water ball","a magical water ball")));
c.setTargetTypeNoTarget(new Pos(-Random.between(2,4),Random.fromArray([-1,0,1])));
this.getQuest().addEntity(c)};b.prototype.getYCastingOffset=function(){switch(this.getQuestEntityAnimation().getCurrentAsciiIndex()){case 0:return 4;
break;case 1:return 5;break;case 2:return 6;break;case 3:return 7;break;case 4:return 8;
break;case 5:return 9;break;case 6:return 10;break;case 7:return 9;break;case 8:return 8;
break;case 9:return 7;break;case 10:return 6;break;case 11:return 5;break}};return b
})(QuestEntity);Saving.registerBool("secondHouseLollipop1Bought",false);Saving.registerBool("secondHouseLollipop2Bought",false);
Saving.registerBool("secondHouseLollipop3Bought",false);Saving.registerBool("secondHouseLeatherBootsBought",false);
Saving.registerBool("secondHouseChocolateBarBought",false);Saving.registerBool("secondHouseMerchantHatBought",false);
Saving.registerBool("secondHouseTimeRingBought",false);var SecondHouse=(function(b){__extends(a,b);
function a(c){b.call(this,c);this.renderArea=new RenderArea();this.items=[];this.selectedItemIndex=null;
this.shouldDrawIntroSpeech=true;this.addItem(new CandyMerchantItem_Lollipop(this.getGame(),"secondHouseLollipop1Bought","places/village/candyMerchantItems/lollipopRight",new Pos(14,22),"secondHouseLollipop1Speech",60,"secondHouseLollipopButtonText","secondHouseLollipop1Button"));
this.addItem(new CandyMerchantItem_Lollipop(this.getGame(),"secondHouseLollipop2Bought","places/village/candyMerchantItems/lollipopLeft",new Pos(12,23),"secondHouseLollipop2Speech",60,"secondHouseLollipopButtonText","secondHouseLollipop2Button"));
this.addItem(new CandyMerchantItem_Lollipop(this.getGame(),"secondHouseLollipop3Bought","places/village/candyMerchantItems/lollipopRight",new Pos(18,24),"secondHouseLollipop3Speech",60,"secondHouseLollipopButtonText","secondHouseLollipop3Button"));
this.addItem(new CandyMerchantItem_LeatherBoots(this.getGame(),"eqItemBootsLeatherBoots","places/village/candyMerchantItems/boots",new Pos(5,25),"secondHouseLeatherBootsSpeech",300,"secondHouseLeatherBootsButtonText","secondHouseLeatherBootsButton"));
this.addItem(new CandyMerchantItem_ChocolateBar(this.getGame(),"secondHouseChocolateBarBought","places/village/candyMerchantItems/chocolateBar",new Pos(62,27),"secondHouseChocolateBarSpeech",800,"secondHouseChocolateBarButtonText","secondHouseChocolateBarButton"));
this.addItem(new CandyMerchantItem_MerchantHat(this.getGame(),"secondHouseMerchantHatBought","places/village/candyMerchantItems/hat",new Pos(53,13),"secondHouseMerchantHatSpeech",1000000,"secondHouseMerchantHatButtonText","secondHouseMerchantHatButton"));
this.addItem(new CandyMerchantItem_TimeRing(this.getGame(),"secondHouseTimeRingBought","places/village/candyMerchantItems/timeRing",new Pos(43,28),"secondHouseTimeRingSpeech",500,"secondHouseTimeRingButtonText","secondHouseTimeRingButton"));
this.addItem(new CandyMerchantItem_LeatherGloves(this.getGame(),"eqItemGlovesLeatherGloves","places/village/candyMerchantItems/leatherGloves",new Pos(82,27),"secondHouseLeatherGlovesSpeech",300,"secondHouseLeatherGlovesButtonText","secondHouseLeatherGlovesButton"));
this.renderArea.resizeFromArray(Database.getAscii("places/village/secondHouse"),0,3);
this.update()}a.prototype.willBeDisplayed=function(){this.update()};a.prototype.getRenderArea=function(){return this.renderArea
};a.prototype.addItem=function(c){this.items.push(c)};a.prototype.buySelectedItem=function(){if(this.getGame().getCandies().getCurrent()>=this.items[this.selectedItemIndex].getPrice()){this.getGame().getCandies().add(-this.items[this.selectedItemIndex].getPrice());
this.items[this.selectedItemIndex].buy();this.selectedItemIndex=null;this.update();
this.getGame().updatePlace()}};a.prototype.clickedOnItem=function(c){this.selectedItemIndex=c;
this.shouldDrawIntroSpeech=false;this.update();this.getGame().updatePlace()};a.prototype.drawIntroSpeech=function(){this.drawSpeech("secondHouseIntroSpeech")
};a.prototype.drawItems=function(){for(var d=0;d<this.items.length;d++){if(this.items[d].canBeShown()){this.renderArea.drawArray(Database.getAscii(this.items[d].getAsciiName()),this.items[d].getAsciiPosition().x,this.items[d].getAsciiPosition().y,new RenderTransparency(" ","%"));
if(this.items[d].canBeClicked()){for(var c=0;c<Database.getAsciiHeight(this.items[d].getAsciiName());
c++){this.renderArea.addAsciiButton(this.items[d].getAsciiPosition().x,this.items[d].getAsciiPosition().x+Database.getAsciiWidth(this.items[d].getAsciiName()),this.items[d].getAsciiPosition().y+c,this.items[d].getButtonName()+"RealItem");
this.renderArea.addLinkCall("."+this.items[d].getButtonName()+"RealItem",new CallbackCollection(this.clickedOnItem.bind(this,d)))
}}}}};a.prototype.drawSelectedItemStuff=function(){var c;c=this.drawSpeech(this.items[this.selectedItemIndex].getMerchantSpeech());
if(this.items[this.selectedItemIndex].canBeBought()){this.renderArea.addAsciiRealButton(Database.getText(this.items[this.selectedItemIndex].getButtonText()),45-Math.floor(Database.getText(this.items[this.selectedItemIndex].getButtonText()).length/2),c+2,this.items[this.selectedItemIndex].getButtonName()+"BuyingButton",Database.getTranslatedText(this.items[this.selectedItemIndex].getButtonText()),true);
this.renderArea.addLinkCall("."+this.items[this.selectedItemIndex].getButtonName()+"BuyingButton",new CallbackCollection(this.buySelectedItem.bind(this)))
}};a.prototype.drawSpeech=function(c){return this.renderArea.drawSpeech(Database.getText(c),3,30,60,"secondHouseMerchantSpeech",Database.getTranslatedText(c))
};a.prototype.update=function(){this.renderArea.resetAllButSize();this.addBackToTheVillageButton(this.renderArea,"secondHouseBackToTheVillageButton");
this.renderArea.drawArray(Database.getAscii("places/village/secondHouse"),0,3);this.drawItems();
if(this.shouldDrawIntroSpeech){this.drawIntroSpeech()}if(this.selectedItemIndex!=null){this.drawSelectedItemStuff()
}};return a})(House);var ShellPowder=(function(b){__extends(a,b);function a(c,e){var d=e;
d.add(new Pos(0,-Database.getAsciiHeight("places/quests/theSea/shellPowder")+1));
b.call(this,c,d,new Naming("Shell powder","shell powder"),new RenderArea(),new Pos(0,0),new CollisionBoxCollection(new CollisionBox(this,new Pos(0,0),new Pos(6,3))));
this.setDestructible(true);this.setMaxHp(10);this.setHp(10);this.setTeam(QuestEntityTeam.NATURE);
this.getRenderArea().resizeFromArray(Database.getAscii("places/quests/theSea/shellPowder"));
this.getRenderArea().drawArray(Database.getAscii("places/quests/theSea/shellPowder"))
}a.prototype.willDie=function(){b.prototype.willDie.call(this);this.getQuest().foundGridOrEqItem(new QuestItemFound(this.getQuest(),"gridItemPossessedShellPowder","You found shell powder.","You gain shell powder."))
};return a})(QuestEntity);var SmallestFish=(function(a){__extends(b,a);function b(c,d){a.call(this,c,d,new Naming("A very small fish","a very small fish"),new RenderArea(3,1),new Pos(0,0),new CollisionBoxCollection(new CollisionBox(this,new Pos(0,0),new Pos(3,1))),new QuestEntityMovement(new Pos(-1,0)));
this.setDestructible(true);this.setMaxHp(10);this.setHp(10);this.getRenderArea().drawArray(Database.getAscii("places/quests/theSea/smallestFish"));
this.addQuestEntityWeapon(new QuestEntityWeapon(this.getQuest(),this,new Naming("Its fins","its fins"),new CollisionBoxCollection(new CollisionBox(this,new Pos(-1,-1),new Pos(5,2))),1));
this.getLastQuestEntityWeapon().getCloseCombatDelay().setFixedDelay(6)}return b})(QuestEntity);
var Smoke=(function(){function a(c,g,e,b,f,d){if(f===void 0){f=0}if(d===void 0){d=0
}this.x=c;this.y=g;this.width=e;this.height=b;this.minWaitingTime=f;this.maxWaitingTime=d;
this.init(false)}a.prototype.draw=function(b){if(this.weAreWaiting==false){if(this.inverted==false){b.drawString("(",this.x+this.xGap,this.y+this.yGap);
b.drawString(")",this.x+this.xGap+1,this.y+this.yGap-1)}else{b.drawString("(",this.x+this.xGap,this.y+this.yGap-1);
b.drawString(")",this.x+this.xGap+1,this.y+this.yGap)}}};a.prototype.move=function(){if(this.weAreWaiting==false){this.yGap--;
if(-this.yGap>=this.height){this.init()}else{this.inverted=!this.inverted}}else{this.currentWaitingTime++;
if(this.currentWaitingTime>this.chosenWaitingTime){this.weAreWaiting=false}}};a.prototype.init=function(b){if(b===void 0){b=true
}this.inverted=Random.flipACoin();this.xGap=Random.upTo(this.width-1);if(Random.flipACoin()&&b==false){this.yGap=-Random.upTo(this.height-1);
this.weAreWaiting=false}else{this.yGap=0;this.weAreWaiting=true;this.chosenWaitingTime=Random.between(this.minWaitingTime,this.maxWaitingTime);
this.currentWaitingTime=0}};return a})();var SorceressHat=(function(a){__extends(b,a);
function b(){a.call(this,"eqItemHatSorceressHat","eqItemHatSorceressHatName","eqItemHatSorceressHatDescription","eqItems/hats/sorceressHat")
}b.prototype.getSpecialAbility=function(){return"Enhances your spells & potions effects (sorceress hat)."
};return b})(EqItem);Saving.registerBool("sorceressHutTookLollipop",false);Saving.registerBool("sorceressHutBoughtGrimoire",false);
Saving.registerBool("sorceressHutBoughtGrimoire2",false);Saving.registerBool("sorceressHutBoughtCauldron",false);
Saving.registerBool("sorceressHutBoughtHat",false);var SorceressHut=(function(b){__extends(a,b);
function a(c){b.call(this,c);this.renderArea=new RenderArea();this.currentSpeech="sorceressHutHello";
this.renderArea.resize(144,48);this.update()}a.prototype.getRenderArea=function(){return this.renderArea
};a.prototype.buyCauldron=function(){if(this.getGame().getLollipops().getCurrent()>=100000){this.getGame().getLollipops().add(-100000);
Saving.saveBool("statusBarUnlockedCauldron",true);Saving.saveBool("sorceressHutBoughtCauldron",true);
this.getGame().updateStatusBar(true);this.currentSpeech="sorceressHutBuyCauldronSpeech";
this.update();this.getGame().updatePlace()}};a.prototype.buyGrimoire=function(){if(this.getGame().getLollipops().getCurrent()>=5000){this.getGame().getLollipops().add(-5000);
this.getGame().gainItem("gridItemPossessedBeginnersGrimoire");Saving.saveBool("sorceressHutBoughtGrimoire",true);
this.currentSpeech="sorceressHutBuyGrimoireSpeech";this.update();this.getGame().updatePlace()
}};a.prototype.buyGrimoire2=function(){if(this.getGame().getLollipops().getCurrent()>=20000){this.getGame().getLollipops().add(-20000);
this.getGame().gainItem("gridItemPossessedAdvancedGrimoire");Saving.saveBool("sorceressHutBoughtGrimoire2",true);
this.currentSpeech="sorceressHutBuyGrimoire2Speech";this.update();this.getGame().updatePlace()
}};a.prototype.buyHat=function(){if(this.getGame().getLollipops().getCurrent()>=1000000000){this.getGame().getLollipops().add(-1000000000);
Saving.saveBool("sorceressHutBoughtHat",true);this.getGame().gainItem("eqItemHatSorceressHat");
this.currentSpeech="sorceressHutBuyHatSpeech";this.update();this.getGame().updatePlace()
}};a.prototype.clickedCauldron=function(){this.currentSpeech="sorceressHutClickedCauldron";
this.update();this.drawBuyingButton("sorceressHutBuyCauldronButton",new CallbackCollection(this.buyCauldron.bind(this)));
this.getGame().updatePlace()};a.prototype.clickedGrimoire=function(){this.currentSpeech="sorceressHutClickedGrimoire";
this.update();this.drawBuyingButton("sorceressHutBuyGrimoireButton",new CallbackCollection(this.buyGrimoire.bind(this)));
this.getGame().updatePlace()};a.prototype.clickedGrimoire2=function(){this.currentSpeech="sorceressHutClickedGrimoire2";
this.update();this.drawBuyingButton("sorceressHutBuyGrimoire2Button",new CallbackCollection(this.buyGrimoire2.bind(this)));
this.getGame().updatePlace()};a.prototype.clickedHat=function(){this.currentSpeech="sorceressHutClickedHat";
this.update();this.drawBuyingButton("sorceressHutBuyHatButton",new CallbackCollection(this.buyHat.bind(this)));
this.getGame().updatePlace()};a.prototype.drawBackground=function(c,d){this.renderArea.drawArray(Database.getAscii("places/sorceressHut/background"),c,d)
};a.prototype.drawBroom=function(c,d){this.renderArea.drawArray(Database.getAscii("places/sorceressHut/broom"),c,d)
};a.prototype.drawBuyingButton=function(d,c){this.renderArea.addAsciiRealButton(Database.getText(d),73,22,"sorceressHutBuyingButton",Database.getTranslatedText(d),true,-1,null,false);
this.renderArea.addLinkCall(".sorceressHutBuyingButton",c)};a.prototype.drawCauldron=function(c,d){if(Saving.loadBool("sorceressHutBoughtCauldron")==false){this.renderArea.drawArray(Database.getAscii("places/sorceressHut/cauldron"),c,d,new RenderTransparency(" ","%"));
this.renderArea.addMultipleAsciiButtons("sorceressHutBuyCauldronButton",c+11,c+30,d+1,c+10,c+31,d+2,c+8,c+33,d+3,c+7,c+34,d+4,c+6,c+35,d+5,c+5,c+36,d+6,c+4,c+37,d+7,c+4,c+37,d+8,c+4,c+37,d+9,c+5,c+36,d+10,c+6,c+35,d+11,c+8,c+33,d+12);
this.renderArea.addLinkCall(".sorceressHutBuyCauldronButton",new CallbackCollection(this.clickedCauldron.bind(this)))
}};a.prototype.drawCurrentSpeech=function(c,d){this.renderArea.drawSpeech(Database.getText(this.currentSpeech),d,c,c+27,"sorceressHutSpeech",Database.getTranslatedText(this.currentSpeech))
};a.prototype.drawHat=function(c,d){if(Saving.loadBool("sorceressHutBoughtHat")==false){this.renderArea.drawArray(Database.getAscii("places/sorceressHut/hat"),c,d,new RenderTransparency(" ","%"));
this.renderArea.addMultipleAsciiButtons("sorceressHutBuyHatButton",c+20,c+23,d,c+16,c+25,d+1,c+14,c+26,d+2,c+11,c+19,d+3,c+10,c+19,d+4,c+9,c+20,d+5,c+1,c+27,d+6);
this.renderArea.addLinkCall(".sorceressHutBuyHatButton",new CallbackCollection(this.clickedHat.bind(this)))
}};a.prototype.drawShelves=function(c,d){this.renderArea.drawArray(Database.getAscii("places/sorceressHut/shelves"),c,d);
if(Saving.loadBool("sorceressHutTookLollipop")==false){this.renderArea.drawArray(Database.getAscii("places/sorceressHut/lollipop"),c+32,d+16);
this.renderArea.addAsciiButton(c+32,c+37,d+16,"sorceressHutTakeLollipopButton");this.renderArea.addLinkCall(".sorceressHutTakeLollipopButton",new CallbackCollection(this.takeLollipop.bind(this)))
}if(Saving.loadBool("sorceressHutBoughtGrimoire")==false){this.renderArea.drawArray(Database.getAscii("places/sorceressHut/grimoire"),c+18,d+8);
this.renderArea.addAsciiButton(c+18,c+20,d+9,"sorceressHutBuyGrimoireButton");this.renderArea.addAsciiButton(c+18,c+20,d+10,"sorceressHutBuyGrimoireButton");
this.renderArea.addAsciiButton(c+18,c+20,d+11,"sorceressHutBuyGrimoireButton");this.renderArea.addLinkCall(".sorceressHutBuyGrimoireButton",new CallbackCollection(this.clickedGrimoire.bind(this)))
}if(Saving.loadBool("sorceressHutBoughtGrimoire2")==false){this.renderArea.drawArray(Database.getAscii("places/sorceressHut/grimoire2"),c+30,d+1);
this.renderArea.addAsciiButton(c+31,c+34,d+2,"sorceressHutBuyGrimoire2Button");this.renderArea.addAsciiButton(c+31,c+34,d+3,"sorceressHutBuyGrimoire2Button");
this.renderArea.addAsciiButton(c+31,c+34,d+4,"sorceressHutBuyGrimoire2Button");this.renderArea.addAsciiButton(c+31,c+34,d+5,"sorceressHutBuyGrimoire2Button");
this.renderArea.addAsciiButton(c+31,c+34,d+6,"sorceressHutBuyGrimoire2Button");this.renderArea.addLinkCall(".sorceressHutBuyGrimoire2Button",new CallbackCollection(this.clickedGrimoire2.bind(this)))
}};a.prototype.takeLollipop=function(){Saving.saveBool("sorceressHutTookLollipop",true);
this.getGame().getLollipops().add(1);this.update();this.getGame().updatePlace()};
a.prototype.update=function(){this.renderArea.resetAllButSize();this.addBackToMainMapButton(this.renderArea,"theHoleBackToTheMapButton");
this.drawBackground(0,3);this.drawHat(14,3);this.drawShelves(73,3);this.drawCauldron(80,27);
this.drawBroom(49,18);this.drawCurrentSpeech(43,4)};return a})(Place);var Spikes=(function(b){__extends(a,b);
function a(d,h,g,f,c){if(f===void 0){f=200}if(c===void 0){c=false}b.call(this,d,h,new Naming("Some spikes","some spikes"),new RenderArea(),new Pos(0,0),new CollisionBoxCollection(new CollisionBox(this,new Pos(0,0),new Pos(g,1))));
this.setTeam(QuestEntityTeam.NATURE);this.addQuestEntityWeapon(new QuestEntityWeapon(this.getQuest(),this,new Naming("Its spikes","its spikes"),new CollisionBoxCollection(new CollisionBox(this,new Pos(0,(c?1:-1)),new Pos(g,1))),f));
this.getLastQuestEntityWeapon().getCloseCombatDelay().setFixedDelay(0);this.getRenderArea().resize(g,1);
for(var e=0;e<Math.floor(g/2);e++){if(c==false){this.getRenderArea().drawString("/\\",e*2,0)
}else{this.getRenderArea().drawString("\\/",e*2,0)}}}return a})(QuestEntity);var Sponge=(function(a){__extends(b,a);
function b(c,e){var d=e;d.add(new Pos(0,-Database.getAsciiHeight("places/quests/theSea/sponge")+1));
a.call(this,c,d,new Naming("A sponge","a sponge"),new RenderArea(),new Pos(0,0),new CollisionBoxCollection(new CollisionBox(this,new Pos(0,0),new Pos(6,3))));
this.setDestructible(true);this.setMaxHp(40);this.setHp(40);this.setTeam(QuestEntityTeam.NATURE);
this.getRenderArea().resizeFromArray(Database.getAscii("places/quests/theSea/sponge"));
this.getRenderArea().drawArray(Database.getAscii("places/quests/theSea/sponge"))}b.prototype.willDie=function(){a.prototype.willDie.call(this);
this.getQuest().foundGridOrEqItem(new QuestItemFound(this.getQuest(),"gridItemPossessedSponge","You found a sponge.","You gain a sponge."))
};return b})(QuestEntity);var StatusBarTab=(function(){function a(b,e,i,h,f,d,g,c){if(g===void 0){g=-1
}if(c===void 0){c=new CallbackCollection()}this.statusBar=b;this.type=e;this.xPos=i;
this.setText(h,f,d);this.tabIndexWhenSelected=g;this.callbackCollectionWhenSelected=c
}a.prototype.clicked=function(){this.callbackCollectionWhenSelected.fire();this.statusBar.selectTab(this.tabIndexWhenSelected)
};a.prototype.render=function(e,b,f,d){e.drawVerticalLine("|",b+this.xPos-1,f,3);
e.drawVerticalLine("|",b+this.xPos+this.width,f,3);for(var c=0;c<3;c++){e.drawString(this.text[c],b+this.xPos+1,f+c);
if(d){e.addBackgroundColor(b+this.xPos,b+this.xPos+this.width,f+c,new Color(ColorType.STATUS_BAR_SELECTED_TAB,true))
}}if(d==false){e.addMultipleAsciiButtons("statusBarTabButton"+this.tabIndexWhenSelected,b+this.xPos,b+this.xPos+this.width,f,b+this.xPos,b+this.xPos+this.width,f+1,b+this.xPos,b+this.xPos+this.width,f+2);
e.addLinkCall(".statusBarTabButton"+this.tabIndexWhenSelected,new CallbackCollection(this.clicked.bind(this)))
}};a.prototype.getType=function(){return this.type};a.prototype.getWidth=function(){return this.width
};a.prototype.calculateWidth=function(){this.width=0;for(var b=0;b<3;b++){if(this.text[b].length>this.width){this.width=this.text[b].length
}}this.width+=2};a.prototype.setText=function(d,c,b){this.text=[];this.text.push(d);
this.text.push(c);this.text.push(b);this.calculateWidth()};return a})();var StatusBarTabType;
(function(a){a[a.CANDY_BOX=0]="CANDY_BOX";a[a.INVENTORY=1]="INVENTORY";a[a.MAP=2]="MAP";
a[a.FARM=3]="FARM";a[a.CAULDRON=4]="CAULDRON";a[a.INSIDE_YOUR_BOX=5]="INSIDE_YOUR_BOX";
a[a.THE_COMPUTER=6]="THE_COMPUTER";a[a.THE_ARENA=7]="THE_ARENA";a[a.SAVE=8]="SAVE";
a[a.CFG=9]="CFG"})(StatusBarTabType||(StatusBarTabType={}));Saving.registerBool("statusBarUnlocked",false);
Saving.registerBool("statusBarUnlockedCfg",false);Saving.registerBool("statusBarUnlockedSave",false);
Saving.registerBool("statusBarUnlockedMap",false);Saving.registerBool("statusBarUnlockedInventory",false);
Saving.registerBool("statusBarUnlockedLollipopFarm",false);Saving.registerBool("statusBarUnlockedCauldron",false);
Saving.registerBool("statusBarUnlockedInsideYourBox",false);Saving.registerBool("statusBarUnlockedTheComputer",false);
Saving.registerBool("statusBarUnlockedTheArena",false);Saving.registerBool("statusBarUnlockedHealthBar",false);
Saving.registerNumber("statusBarCornerStep",0);var StatusBar=(function(){function a(b,c){this.playerHealthBar=null;
this.renderArea=new RenderArea(100,6," ");this.tabs=[];this.game=b;this.selectedTabIndex=c;
this.deleteAndReAddEverything()}a.prototype.deleteAndReAddEverything=function(){this.tabs=[];
this.game.resetSpecialHotkeys();this.playerHealthBar=null;if(Saving.loadBool("statusBarUnlockedHealthBar")){this.playerHealthBar=new Bar(BarType.HEALTH);
this.playerHealthBar.resize(72,1)}if(Saving.loadBool("statusBarUnlocked")){this.addTab(StatusBarTabType.CANDY_BOX,0," THE","CANDY"," BOX",new CallbackCollection(this.game.goToCandyBox.bind(this.game)))
}if(Saving.loadBool("statusBarUnlockedInventory")){this.addTab(StatusBarTabType.INVENTORY,8,"INV"," ENT","ORY",new CallbackCollection(this.game.goToInventory.bind(this.game)))
}if(Saving.loadBool("statusBarUnlockedMap")){this.addTab(StatusBarTabType.MAP,15,"","MAP","",new CallbackCollection(this.game.goToMap.bind(this.game)))
}if(Saving.loadBool("statusBarUnlockedLollipopFarm")){this.addTab(StatusBarTabType.FARM,21,"LOLL","IPOP","FARM",new CallbackCollection(this.game.goToLollipopFarm.bind(this.game)))
}if(Saving.loadBool("statusBarUnlockedCauldron")){this.addTab(StatusBarTabType.CAULDRON,28,"","CLDR","",new CallbackCollection(this.game.goToCauldron.bind(this.game)))
}if(Saving.loadBool("statusBarUnlockedInsideYourBox")){this.addTab(StatusBarTabType.INSIDE_YOUR_BOX,35,"INSIDE"," YOUR"," BOX!",new CallbackCollection(this.game.goToInsideYourBox.bind(this.game)))
}if(Saving.loadBool("statusBarUnlockedTheComputer")){this.addTab(StatusBarTabType.THE_COMPUTER,44," THE"," COM","PUTER",new CallbackCollection(this.game.goToTheComputer.bind(this.game)))
}if(Saving.loadBool("statusBarUnlockedTheArena")){this.addTab(StatusBarTabType.THE_ARENA,52," THE","ARENA"," /!\\",new CallbackCollection(this.game.goToTheArena.bind(this.game)))
}if(Saving.loadBool("statusBarUnlockedSave")){this.addTab(StatusBarTabType.SAVE,60,"","SAVE","",new CallbackCollection(this.game.goToSave.bind(this.game)))
}if(Saving.loadBool("statusBarUnlockedCfg")){this.addTab(StatusBarTabType.CFG,67,"C","F","G",new CallbackCollection(this.game.goToCfg.bind(this.game)))
}if(Saving.loadBool("statusBarUnlocked")){this.game.addSpecialHotkey(new Hotkey("n",new CallbackCollection(this.nextTab.bind(this))))
}};a.prototype.selectTab=function(b){this.selectedTabIndex=b;this.game.updateStatusBar()
};a.prototype.selectTabByType=function(c){for(var b=0;b<this.tabs.length;b++){if(this.tabs[b].getType()==c){this.selectedTabIndex=b;
this.game.updateStatusBar()}}};a.prototype.updateAll=function(){this.renderArea.resetAllButSize();
if(Saving.loadBool("statusBarUnlocked")){this.renderArea.drawString("+",0,0);this.renderArea.drawString("+",this.renderArea.getWidth()-1,0);
this.renderArea.drawString("+",0,5);this.renderArea.drawString("+",this.renderArea.getWidth()-1,5);
this.renderArea.drawVerticalLine("|",0,1,4);this.renderArea.drawVerticalLine("|",this.renderArea.getWidth()-1,1,4);
this.renderArea.drawHorizontalLine("-",1,this.renderArea.getWidth()-1,0);this.renderArea.drawHorizontalLine("-",1,this.renderArea.getWidth()-1,5)
}this.renderArea.drawString(this.game.getCandies().getCurrentAsString(26),2,1);if(this.game.getLollipops().getMax()>0){this.renderArea.drawString(this.game.getLollipops().getCurrentAsString(26),2,2)
}if(this.game.getChocolateBars().getMax()>0){this.renderArea.drawString(this.game.getChocolateBars().getCurrentAsString(26),2,3)
}if(this.game.getPainsAuChocolat().getMax()>0){this.renderArea.drawString(this.game.getPainsAuChocolat().getCurrentAsString(26),2,4)
}this.drawTabs();this.updateHealthBar();this.drawStatusBarCornersStuff()};a.prototype.updateHealthBar=function(){if(this.playerHealthBar!=null){this.playerHealthBar.update(this.game.getPlayer().getHp()/this.game.getPlayer().getMaxHp(),"Your health : "+this.game.getPlayer().getHp()+"/"+this.game.getPlayer().getMaxHp());
this.renderArea.drawArea(this.playerHealthBar,28,4)}};a.prototype.getRenderArea=function(){return this.renderArea
};a.prototype.addTab=function(d,g,f,e,c,b){this.tabs.push(new StatusBarTab(this,d,g,f,e,c,this.tabs.length,b))
};a.prototype.clickedOnCorner=function(){this.setNextCornerStep();this.game.updateStatusBar()
};a.prototype.drawAllCorners=function(b){this.drawUpLeftCorner(b);this.drawUpRightCorner(b);
this.drawDownLeftCorner(b);this.drawDownRightCorner(b)};a.prototype.drawDownLeftCorner=function(b){this.renderArea.drawString(b,0,5)
};a.prototype.drawDownRightCorner=function(b){this.renderArea.drawString(b,99,5)};
a.prototype.drawStatusBarCornersStuff=function(){this.renderArea.addAsciiNinjaButton(0,1,0,"statusBarCornerButton");
this.renderArea.addAsciiNinjaButton(99,100,0,"statusBarCornerButton");this.renderArea.addAsciiNinjaButton(0,1,5,"statusBarCornerButton");
this.renderArea.addAsciiNinjaButton(99,100,5,"statusBarCornerButton");this.renderArea.addLinkCall(".statusBarCornerButton",new CallbackCollection(this.clickedOnCorner.bind(this)));
switch(Saving.loadNumber("statusBarCornerStep")){case 0:break;case 1:this.drawAllCorners("*");
break;case 2:this.drawAllCorners("#");break;case 3:this.drawAllCorners("-");break;
case 4:this.drawUpLeftCorner("A");this.drawUpRightCorner("B");this.drawDownRightCorner("C");
this.drawDownLeftCorner("D");break;case 5:this.drawUpLeftCorner("0");this.drawUpRightCorner("1");
this.drawDownRightCorner("2");this.drawDownLeftCorner("3");break;case 6:this.drawAllCorners("@");
break}};a.prototype.drawTabs=function(){if(Saving.loadBool("statusBarUnlocked")){this.renderArea.drawVerticalLine("|",28,1,4);
for(var b=0;b<this.tabs.length;b++){this.tabs[b].render(this.renderArea,29,1,(this.selectedTabIndex==b?true:false))
}}};a.prototype.drawUpLeftCorner=function(b){this.renderArea.drawString(b,0,0)};a.prototype.drawUpRightCorner=function(b){this.renderArea.drawString(b,99,0)
};a.prototype.previousTab=function(){if(this.selectedTabIndex-1>=0){this.tabs[this.selectedTabIndex-1].clicked()
}};a.prototype.nextTab=function(){if(this.game.getIsStatusBarAllowedToUseTheNKey()){if(this.selectedTabIndex+1<this.tabs.length){this.tabs[this.selectedTabIndex+1].clicked()
}else{this.tabs[0].clicked()}}};a.prototype.setNextCornerStep=function(){var b=Saving.loadNumber("statusBarCornerStep");
b+=1;if(b>6){b=0}Saving.saveNumber("statusBarCornerStep",b)};return a})();var SummoningTribalSpear=(function(b){__extends(a,b);
function a(){b.call(this,"eqItemWeaponSummoningTribalSpear","eqItemWeaponSummoningTribalSpearName","eqItemWeaponSummoningTribalSpearDescription","eqItems/weapons/summoningTribalSpear");
this.timeSinceSummon=0}a.prototype.getQuestEntityWeapon=function(c,e){var d=new QuestEntityWeapon(c,e,new Naming("A summoning tribal spear","a summoning tribal spear"),e.getClassicCollisionBoxCollection(),10);
d.getCloseCombatDelay().setFixedDelay(2);return d};a.prototype.getSpecialAbility=function(){return"Frequently summons tribe warriors fighting on your side (summoning tribal spear)."
};a.prototype.update=function(d,c){this.timeSinceSummon+=1;if(this.timeSinceSummon>35){this.summon(d,c)
}};a.prototype.summon=function(d,c){var e=new PlayerSummonedTribeWarrior(c,d.getSpellCastingPosition().plus(new Pos(1,-3)));
e.setHealthBar(new QuestEntityHealthBar(e,new Pos(4,1)));c.addEntity(e);this.timeSinceSummon=0
};return a})(EqItem);var SuperRPGFloorStep;(function(a){a[a.SHOP=0]="SHOP";a[a.MONSTER1=1]="MONSTER1";
a[a.MONSTER2=2]="MONSTER2";a[a.MONSTER3=3]="MONSTER3"})(SuperRPGFloorStep||(SuperRPGFloorStep={}));
var SuperRPGMenuEntry=(function(){function a(c,b){this.text=c;this.callbackCollection=b
}a.prototype.draw=function(e,b,g,d,c){var f;if(d){f="> "+this.text+" <"}else{f=this.text
}e.drawString(f,b+Math.floor((c-f.length)/2),g)};a.prototype.getCallbackCollection=function(){return this.callbackCollection
};return a})();var SuperRPGMenu=(function(){function a(b,c,d){this.entries=[];this.superRPG=b;
this.asciiName=c;this.currentlySelectedEntryIndex=d}a.prototype.addEntry=function(b){this.entries.push(b)
};a.prototype.draw=function(c){c.drawVerticalLine("|",26,3,11);c.drawArray(Database.getAscii(this.asciiName),0+Math.floor((26-Database.getAsciiWidth(this.asciiName))/2),2+Math.floor((10-Database.getAsciiHeight(this.asciiName))/2));
for(var b=0;b<this.entries.length;b++){this.entries[b].draw(c,27,3+Math.floor((10-(this.entries.length*2))/2)+b*2,(this.currentlySelectedEntryIndex==b),26)
}};a.prototype.pressedDownButton=function(){this.currentlySelectedEntryIndex+=1;if(this.currentlySelectedEntryIndex>=this.entries.length){this.currentlySelectedEntryIndex=this.entries.length-1
}};a.prototype.pressedSpaceButton=function(){this.entries[this.currentlySelectedEntryIndex].getCallbackCollection().fire()
};a.prototype.pressedUpButton=function(){this.currentlySelectedEntryIndex-=1;if(this.currentlySelectedEntryIndex<0){this.currentlySelectedEntryIndex=0
}};a.prototype.getSuperRPG=function(){return this.superRPG};a.prototype.setAsciiName=function(b){this.asciiName=b
};a.prototype.setEntries=function(){var b=[];for(var c=0;c<arguments.length;c++){b[c-0]=arguments[c]
}this.entries=b};return a})();var SuperRPGMenu_Ingame=(function(b){__extends(a,b);
function a(){b.apply(this,arguments)}a.prototype.draw=function(c){c.drawString("Floor "+this.getSuperRPG().getFloor(),0,0);
c.drawString("|",10,0);switch(this.getSuperRPG().getFloorStep()){case SuperRPGFloorStep.SHOP:c.drawString("shop",15,0);
break;case SuperRPGFloorStep.MONSTER1:c.drawString("1st monster",12,0);break;case SuperRPGFloorStep.MONSTER2:c.drawString("2nd monster",12,0);
break;case SuperRPGFloorStep.MONSTER3:c.drawString("3rd monster",12,0);break}c.drawString("|",24,0);
c.drawString("HP "+this.getSuperRPG().getHp().toString()+"/"+this.getSuperRPG().getMaxHp().toString(),26,0);
c.drawString("|",39,0);c.drawString("Coins "+this.getSuperRPG().getCoins(),41,0);
c.drawString("ATK "+this.getSuperRPG().getWeapon()+" ("+this.getSuperRPG().getDamage()+")",0,1);
c.drawString("|",24,1);c.drawString("DEF "+this.getSuperRPG().getDefenseItem()+" ("+this.getSuperRPG().getDefense()+")",26,1);
b.prototype.draw.call(this,c)};return a})(SuperRPGMenu);var SuperRPGMenu_Main=(function(b){__extends(a,b);
function a(c){b.call(this,c,"places/village/thirdHouseGames/SuperRPG/mainMenu",0);
this.addEntry(new SuperRPGMenuEntry("Start",new CallbackCollection(this.getSuperRPG().startGame.bind(this.getSuperRPG(),false))));
if(Saving.loadBool("SuperRPGUnlockedHardmode")){this.addEntry(new SuperRPGMenuEntry("Start (hardmode)",new CallbackCollection(this.getSuperRPG().startGame.bind(this.getSuperRPG(),true))))
}this.addEntry(new SuperRPGMenuEntry("Exit",new CallbackCollection(this.getSuperRPG().exitGame.bind(this.getSuperRPG()))))
}a.prototype.draw=function(c){c.drawString("Main menu",22,0);b.prototype.draw.call(this,c)
};return a})(SuperRPGMenu);var SuperRPGMenu_Monster=(function(b){__extends(a,b);function a(c){b.call(this,c,"",0)
}a.prototype.addUsualEntries=function(){this.addEntry(new SuperRPGMenuEntry("Attack",new CallbackCollection(this.playerAttacks.bind(this))))
};a.prototype.draw=function(c){c.drawString("ATK "+this.damage,0,11);c.drawString("DEF "+this.defense,7,11);
c.drawString("HP "+this.hp+"/"+this.maxHp,14,11);b.prototype.draw.call(this,c)};a.prototype.setAbstract=function(d,f,c,e){this.setMonster("places/village/thirdHouseGames/SuperRPG/"+Random.fromArray(["cross","mobius","triforce","randomShape","circle","dna","hive","star"]),d,f,c,e)
};a.prototype.setBabyVampire=function(){this.setMonster("places/village/thirdHouseGames/SuperRPG/babyVampire",10,2,8,30)
};a.prototype.setBlob=function(){this.setMonster("places/village/thirdHouseGames/SuperRPG/blob",Random.between(1,3),0,Random.between(5,8),3)
};a.prototype.setBomb=function(){this.setMonster("places/village/thirdHouseGames/SuperRPG/bomb",99,0,0,12)
};a.prototype.setChest=function(c){this.setMonster("places/village/thirdHouseGames/SuperRPG/chest",0,0,c,10)
};a.prototype.setCorpse1=function(){this.setMonster("places/village/thirdHouseGames/SuperRPG/corpse1",0,0,(Random.flipACoin()?0:Random.between(1,300)),0)
};a.prototype.setCorpse2=function(){this.setMonster("places/village/thirdHouseGames/SuperRPG/corpse2",0,0,(Random.flipACoin()?0:Random.between(1,300)),0)
};a.prototype.setDragon=function(){this.setMonster("places/village/thirdHouseGames/SuperRPG/dragon",Random.between(28,32),Random.between(7,9),1000,Random.fromArray([45,50,55]))
};a.prototype.setFerociousBlob=function(){this.setMonster("places/village/thirdHouseGames/SuperRPG/ferociousBlob",Random.between(2,4),0,Random.between(7,10),2)
};a.prototype.setFerociousGoblin=function(){this.setMonster("places/village/thirdHouseGames/SuperRPG/ferociousGoblin",5,3,20,5)
};a.prototype.setFerociousSkeleton=function(){this.setMonster("places/village/thirdHouseGames/SuperRPG/ferociousSkeleton",8,1,40,10)
};a.prototype.setGoblin=function(){this.setMonster("places/village/thirdHouseGames/SuperRPG/goblin",4,1,15,5)
};a.prototype.setSkeletonOrBillGatesSkeleton=function(){if(Random.oneChanceOutOf(10)){this.setMonster("places/village/thirdHouseGames/SuperRPG/billGatesSkeleton",6,1,50,7)
}else{this.setMonster("places/village/thirdHouseGames/SuperRPG/skeleton",6,1,25,7)
}};a.prototype.setSpider=function(){this.setMonster("places/village/thirdHouseGames/SuperRPG/spider",10,5,Random.between(100,200),25)
};a.prototype.setSpiders=function(){this.setMonster("places/village/thirdHouseGames/SuperRPG/spiders",9,2,9,15)
};a.prototype.setThing=function(){switch(Random.between(0,2)){case 0:this.setMonster("places/village/thirdHouseGames/SuperRPG/thing",20,3,120,10);
break;case 1:this.setMonster("places/village/thirdHouseGames/SuperRPG/thing",12,6,120,30);
break;case 2:this.setMonster("places/village/thirdHouseGames/SuperRPG/thing",14,4,120,20);
break}};a.prototype.playerAttacks=function(){var c;c=this.getSuperRPG().getDamage()-this.defense;
if(c>0){this.hp-=c;if(this.hp<=0){this.getSuperRPG().setCoins(this.getSuperRPG().getCoins()+this.coins);
this.getSuperRPG().nextFloorStep();return}}c=this.damage-this.getSuperRPG().getDefense();
if(c>0){this.getSuperRPG().setHp(this.getSuperRPG().getHp()-c)}};a.prototype.setMonster=function(g,f,e,c,h,d){if(d===void 0){d=null
}this.setAsciiName(g);this.damage=(this.getSuperRPG().getHardmode()?Math.floor(f*1.2):f);
this.defense=(this.getSuperRPG().getHardmode()?Math.floor(e*1.2):e);this.coins=(this.getSuperRPG().getHardmode()?Math.ceil(c*0.8):c);
this.hp=(this.getSuperRPG().getHardmode()?Math.floor(h*1.2):h);if(d==null){this.maxHp=this.hp
}else{this.maxHp=(this.getSuperRPG().getHardmode()?Math.floor(d*1.2):d)}};return a
})(SuperRPGMenu_Ingame);var SuperRPGMenu_Shop=(function(b){__extends(a,b);function a(c){b.call(this,c,"places/village/thirdHouseGames/SuperRPG/shop",0)
}a.prototype.addBuyingDefenseItem=function(d,c,e){this.addEntry(new SuperRPGMenuEntry(d+" ("+e+")",new CallbackCollection(this.buyDefenseItem.bind(this,d,c,e))))
};a.prototype.addBuyingHealthCrystal=function(){this.addEntry(new SuperRPGMenuEntry("Health crystal (100)",new CallbackCollection(this.buyHealthCrystal.bind(this))))
};a.prototype.addBuyingHealthPendant=function(){this.addEntry(new SuperRPGMenuEntry("Health pendant (30)",new CallbackCollection(this.buyHealthPendant.bind(this))))
};a.prototype.addBuyingHealthPotion=function(){this.addEntry(new SuperRPGMenuEntry("Health potion (5)",new CallbackCollection(this.buyHealthPotion.bind(this))))
};a.prototype.addBuyingSuperHealthPotion=function(){this.addEntry(new SuperRPGMenuEntry("Health potion ++ (25)",new CallbackCollection(this.buySuperHealthPotion.bind(this))))
};a.prototype.addBuyingWeapon=function(c,d,e){this.addEntry(new SuperRPGMenuEntry(c+" ("+e+")",new CallbackCollection(this.buyWeapon.bind(this,c,d,e))))
};a.prototype.addQuitTheShop=function(){this.addEntry(new SuperRPGMenuEntry("Quit the shop",new CallbackCollection(this.getSuperRPG().nextFloorStep.bind(this.getSuperRPG()))))
};a.prototype.buyDefenseItem=function(d,c,e){if(this.getSuperRPG().getCoins()>=e&&this.getSuperRPG().getDefense()<c){this.getSuperRPG().setCoins(this.getSuperRPG().getCoins()-e);
this.getSuperRPG().setDefenseItem(d);this.getSuperRPG().setDefense(c)}};a.prototype.buyHealthCrystal=function(){if(this.getSuperRPG().getCoins()>=100){this.getSuperRPG().setCoins(this.getSuperRPG().getCoins()-100);
this.getSuperRPG().setMaxHp(this.getSuperRPG().getMaxHp()+20);this.getSuperRPG().setHp(this.getSuperRPG().getHp()+20)
}};a.prototype.buyHealthPendant=function(){if(this.getSuperRPG().getCoins()>=30){this.getSuperRPG().setCoins(this.getSuperRPG().getCoins()-30);
this.getSuperRPG().setMaxHp(this.getSuperRPG().getMaxHp()+5);this.getSuperRPG().setHp(this.getSuperRPG().getHp()+5)
}};a.prototype.buyHealthPotion=function(){if(this.getSuperRPG().getCoins()>=5&&this.getSuperRPG().getHp()<this.getSuperRPG().getMaxHp()){this.getSuperRPG().setCoins(this.getSuperRPG().getCoins()-5);
this.getSuperRPG().setHp(this.getSuperRPG().getHp()+8)}};a.prototype.buySuperHealthPotion=function(){if(this.getSuperRPG().getCoins()>=25&&this.getSuperRPG().getHp()<this.getSuperRPG().getMaxHp()){this.getSuperRPG().setCoins(this.getSuperRPG().getCoins()-25);
this.getSuperRPG().setHp(this.getSuperRPG().getHp()+50)}};a.prototype.buyWeapon=function(c,d,e){if(this.getSuperRPG().getCoins()>=e&&this.getSuperRPG().getDamage()<d){this.getSuperRPG().setCoins(this.getSuperRPG().getCoins()-e);
this.getSuperRPG().setWeapon(c);this.getSuperRPG().setDamage(d)}};return a})(SuperRPGMenu_Ingame);
var SuperRPGStep;(function(a){a[a.SPLASH_SCREEN=0]="SPLASH_SCREEN";a[a.GAME=1]="GAME";
a[a.LOSE=2]="LOSE"})(SuperRPGStep||(SuperRPGStep={}));Saving.registerBool("SuperRPGReward1",false);
Saving.registerBool("SuperRPGReward2",false);Saving.registerBool("SuperRPGReward3",false);
Saving.registerBool("SuperRPGReward4",false);Saving.registerBool("SuperRPGUnlockedHardmode",false);
var SuperRPG=(function(b){__extends(a,b);function a(){b.apply(this,arguments);this.step=SuperRPGStep.SPLASH_SCREEN;
this.splashScreenTimer=39;this.menu=null;this.shouldExitGame=false}a.prototype.exitGame=function(){this.shouldExitGame=true
};a.prototype.nextFloorStep=function(){switch(this.floorStep){case SuperRPGFloorStep.SHOP:this.floorStep=SuperRPGFloorStep.MONSTER1;
this.goToMonster();break;case SuperRPGFloorStep.MONSTER1:this.floorStep=SuperRPGFloorStep.MONSTER2;
this.goToMonster();break;case SuperRPGFloorStep.MONSTER2:this.floorStep=SuperRPGFloorStep.MONSTER3;
this.goToMonster();break;case SuperRPGFloorStep.MONSTER3:this.floorStep=SuperRPGFloorStep.SHOP;
this.floor+=1;this.goToShop();break}};a.prototype.startGame=function(c){this.hardmode=c;
this.floor=0;this.floorStep=SuperRPGFloorStep.SHOP;this.coins=15;this.hp=10;this.maxHp=10;
this.weapon="Your fists";this.damage=1;this.defenseItem="Nothing";this.defense=0;
this.goToShop()};a.prototype.run=function(){var c=false;if(this.shouldExitGame){return true
}this.getRenderArea().resetAllButSize();switch(this.step){case SuperRPGStep.SPLASH_SCREEN:this.drawSplashScreen();
c=this.runSplashScreen();break;case SuperRPGStep.GAME:this.drawGame();c=this.runGame();
break;case SuperRPGStep.LOSE:this.drawLose();c=false;break}return c};a.prototype.getCoins=function(){return this.coins
};a.prototype.getDamage=function(){return this.damage};a.prototype.getDefense=function(){return this.defense
};a.prototype.getDefenseItem=function(){return this.defenseItem};a.prototype.getFloor=function(){return this.floor
};a.prototype.getFloorStep=function(){return this.floorStep};a.prototype.getHardmode=function(){return this.hardmode
};a.prototype.getHp=function(){return this.hp};a.prototype.getMaxHp=function(){return this.maxHp
};a.prototype.getWeapon=function(){return this.weapon};a.prototype.setCoins=function(c){this.coins=c
};a.prototype.setDamage=function(c){this.damage=c};a.prototype.setDefense=function(c){this.defense=c
};a.prototype.setDefenseItem=function(c){this.defenseItem=c};a.prototype.setHp=function(c){this.hp=c;
if(this.hp>this.maxHp){this.hp=this.maxHp}if(this.hp<=0){this.goToLose()}};a.prototype.setMaxHp=function(c){this.maxHp=c
};a.prototype.setWeapon=function(c){this.weapon=c};a.prototype.drawGame=function(){this.menu.draw(this.getRenderArea())
};a.prototype.drawLose=function(){this.getRenderArea().drawArray(Database.getAscii("places/village/thirdHouseGames/SuperRPG/youLose"),8,1);
if(this.reward==0){this.getRenderArea().drawString("At floor "+this.floor+". And got no candies.",8,7)
}else{this.getRenderArea().drawString("At floor "+this.floor+". And got "+this.reward+" candies.",8,7)
}};a.prototype.drawSplashScreen=function(){this.getRenderArea().drawArray(Database.getAscii("places/village/thirdHouseGames/SuperRPG/splashScreen"),-67+this.splashScreenTimer*3,2)
};a.prototype.getCandiesWeWillGain=function(){var c=0;if(Saving.loadBool("SuperRPGReward1")==false&&this.floor>5){c+=100;
Saving.saveBool("SuperRPGReward1",true)}if(Saving.loadBool("SuperRPGReward2")==false&&this.floor>10){c+=1000;
Saving.saveBool("SuperRPGReward2",true)}if(Saving.loadBool("SuperRPGReward3")==false&&this.floor>13){c+=10000;
Saving.saveBool("SuperRPGReward3",true)}if(Saving.loadBool("SuperRPGReward4")==false&&this.floor>20){c+=30000;
Saving.saveBool("SuperRPGReward4",true);Saving.saveBool("SuperRPGUnlockedHardmode",true)
}return c};a.prototype.goToLose=function(){this.menu=null;this.step=SuperRPGStep.LOSE;
this.reward=this.getCandiesWeWillGain();this.getThirdHouse().getGame().getCandies().add(this.reward)
};a.prototype.goToMainMenu=function(){this.step=SuperRPGStep.GAME;this.menu=new SuperRPGMenu_Main(this)
};a.prototype.goToMonster=function(){var c=new SuperRPGMenu_Monster(this);c.addUsualEntries();
switch(this.floor){case 0:if(Random.oneChanceOutOf(100)){c.setChest(20)}else{c.setBlob()
}break;case 1:if(Random.oneChanceOutOf(100)){c.setChest(30)}else{if(Random.flipACoin()){c.setBlob()
}else{c.setFerociousBlob()}}break;case 2:if(Random.oneChanceOutOf(100)){c.setChest(40)
}else{if(Random.flipACoin()){if(Random.oneChanceOutOf(5)){c.setBlob()}else{c.setFerociousBlob()
}}else{c.setGoblin()}}break;case 3:if(Random.oneChanceOutOf(100)){c.setChest(50)}else{if(this.floorStep==SuperRPGFloorStep.MONSTER3){c.setGoblin()
}else{c.setFerociousGoblin()}}break;case 4:if(Random.oneChanceOutOf(100)){c.setChest(60)
}else{if(Random.oneChanceOutOf(3)){c.setFerociousGoblin()}else{c.setSkeletonOrBillGatesSkeleton()
}}break;case 5:if(Random.oneChanceOutOf(100)){c.setChest(70)}else{if(Random.oneChanceOutOf(3)){c.setSkeletonOrBillGatesSkeleton()
}else{c.setFerociousSkeleton()}}break;case 6:if(Random.oneChanceOutOf(100)){c.setChest(80)
}else{c.setFerociousSkeleton()}break;case 7:if(this.floorStep==SuperRPGFloorStep.MONSTER3){c.setSpider()
}else{c.setSpiders()}break;case 8:if(Random.oneChanceOutOf(100)){c.setChest(100)}else{c.setBabyVampire()
}break;case 9:if(Random.oneChanceOutOf(100)){c.setChest(110)}else{if(this.floorStep==SuperRPGFloorStep.MONSTER2){c.setSpiders()
}else{c.setSpider()}}break;case 10:if(Random.oneChanceOutOf(100)){c.setChest(120)
}else{c.setThing()}break;case 11:if(Random.oneChanceOutOf(100)){c.setChest(130)}else{c.setSpider()
}break;case 12:if(Random.flipACoin()){c.setChest(140)}else{c.setBomb()}break;case 13:switch(this.floorStep){case SuperRPGFloorStep.MONSTER1:c.setCorpse1();
break;case SuperRPGFloorStep.MONSTER2:c.setCorpse2();break;case SuperRPGFloorStep.MONSTER3:c.setDragon();
break}break;default:c.setAbstract(10+(this.floor-14)*12,0,Math.ceil(500*(1/(this.floor-13))),30+(this.floor-13)*3);
break}this.menu=c};a.prototype.goToShop=function(){var c=new SuperRPGMenu_Shop(this);
switch(this.floor){case 0:c.addBuyingWeapon("Wooden sword",2,10);c.addBuyingDefenseItem("Wooden shield",1,10);
break;case 1:c.addBuyingWeapon("Copper sword",3,15);c.addBuyingDefenseItem("Copper shield",2,15);
c.addBuyingHealthPotion();break;case 2:c.addBuyingWeapon("Iron sword",4,20);c.addBuyingDefenseItem("Iron shield",3,20);
c.addBuyingHealthPotion();break;case 3:c.addBuyingWeapon("Silver sword",5,30);c.addBuyingDefenseItem("Silver shield",4,30);
c.addBuyingHealthPotion();c.addBuyingHealthPendant();break;case 4:c.addBuyingWeapon("Gold sword",6,40);
c.addBuyingDefenseItem("Gold shield",5,40);c.addBuyingHealthPotion();c.addBuyingHealthPendant();
break;case 5:c.addBuyingWeapon("Diamond sword",7,50);c.addBuyingDefenseItem("Diamond shield",6,50);
c.addBuyingHealthPotion();c.addBuyingHealthPendant();break;case 6:c.addBuyingWeapon("Falchion",8,100);
c.addBuyingDefenseItem("Diamond shield",6,50);c.addBuyingHealthPotion();c.addBuyingHealthPendant();
break;case 7:c.addBuyingWeapon("Falchion",8,100);c.addBuyingDefenseItem("Shield of El Cid",8,100);
c.addBuyingHealthPotion();c.addBuyingHealthPendant();break;case 8:c.addBuyingWeapon("Dagger of Time",10,180);
c.addBuyingDefenseItem("Shield of El Cid",8,100);c.addBuyingHealthPotion();c.addBuyingHealthPendant();
break;case 9:c.addBuyingWeapon("Dagger of Time",10,180);c.addBuyingDefenseItem("Shield of Achilles",10,180);
c.addBuyingHealthPotion();c.addBuyingHealthPendant();break;case 10:c.addBuyingWeapon("Vorpal sword",12,250);
c.addBuyingDefenseItem("Shield of Achilles",10,180);c.addBuyingHealthPotion();c.addBuyingHealthPendant();
break;case 11:c.addBuyingWeapon("Vorpal sword",12,250);c.addBuyingDefenseItem("Wynebgwrthucher",12,250);
c.addBuyingHealthPotion();c.addBuyingHealthPendant();break;case 12:c.addBuyingWeapon("Morgul-blade",14,400);
c.addBuyingDefenseItem("Wynebgwrthucher",12,250);c.addBuyingHealthPotion();c.addBuyingHealthPendant();
break;case 13:c.addBuyingWeapon("Morgul-blade",14,400);c.addBuyingDefenseItem("Ancile",14,400);
c.addBuyingHealthPotion();c.addBuyingHealthPendant();break;case 14:c.addBuyingWeapon("Excalibur",16,600);
c.addBuyingDefenseItem("Ancile",14,400);c.addBuyingSuperHealthPotion();c.addBuyingHealthCrystal();
break;case 15:c.addBuyingWeapon("Excalibur",16,600);c.addBuyingDefenseItem("Aegis",16,600);
c.addBuyingSuperHealthPotion();c.addBuyingHealthCrystal();break;case 16:c.addBuyingWeapon("Tonbogiri",18,1000);
c.addBuyingDefenseItem("Aegis",16,600);c.addBuyingSuperHealthPotion();c.addBuyingHealthCrystal();
break;case 17:case 18:case 19:c.addBuyingWeapon("Gungnir",20,1500);c.addBuyingDefenseItem("Aegis",16,600);
c.addBuyingSuperHealthPotion();c.addBuyingHealthCrystal();break;default:c.addBuyingWeapon("Mjolnir",30,2000);
c.addBuyingDefenseItem("Aegis",16,600);c.addBuyingSuperHealthPotion();c.addBuyingHealthCrystal();
break}c.addQuitTheShop();this.menu=c};a.prototype.pressedDownButton=function(){if(this.menu!=null){this.menu.pressedDownButton()
}};a.prototype.pressedSpaceButton=function(){if(this.step==SuperRPGStep.LOSE){this.shouldExitGame=true
}if(this.menu!=null){this.menu.pressedSpaceButton()}};a.prototype.pressedUpButton=function(){if(this.menu!=null){this.menu.pressedUpButton()
}};a.prototype.runGame=function(){return false};a.prototype.runSplashScreen=function(){if(this.splashScreenTimer>=0){this.splashScreenTimer-=1
}else{this.goToMainMenu()}return false};return a})(ThirdHouseGame);var Teapot=(function(b){__extends(a,b);
function a(c,d){b.call(this,c,d,new Naming("A teapot","a teapot"),new RenderArea(19,6),new Pos(0,0),new CollisionBoxCollection(new CollisionBox(this,new Pos(0,1),new Pos(3,1)),new CollisionBox(this,new Pos(6,1),new Pos(8,1)),new CollisionBox(this,new Pos(1,2),new Pos(18,1)),new CollisionBox(this,new Pos(2,3),new Pos(17,1)),new CollisionBox(this,new Pos(3,4),new Pos(16,1)),new CollisionBox(this,new Pos(5,5),new Pos(12,1))),new QuestEntityMovement());
this.getQuestEntityMovement().setGravity(true);this.getQuestEntityMovement().setWormsLike(true);
this.setDestructible(true);this.setMaxHp(1000000);this.setHp(1000000);this.getRenderArea().drawArray(Database.getAscii("places/quests/fortress/teapot"));
this.setTransparency(new RenderTransparency(" ","%"))}a.prototype.update=function(){b.prototype.update.call(this);
console.log(this.getHp());if(this.getQuest().getGame().getPlayer().getGlobalPosition().x<this.getGlobalPosition().x-50){this.heal(50)
}};a.prototype.willDie=function(){this.getQuest().getGame().getQuestLog().addMessage(new QuestLogMessage(this.getDeathMessage()));
this.getQuest().foundGridOrEqItem(new QuestItemFound(this.getQuest(),"eqItemWeaponGiantSpoon","You found a giant spoon inside the teapot.","You gain a giant spoon."))
};return a})(QuestEntity);var TheArenaModuleQuest=(function(){function a(b,c){this.questFolderName=b;
this.specialCallback=c}a.prototype.drawLogo=function(d,b,e,c){d.drawArray(Database.getAscii("arena/"+this.questFolderName+"/logo"),b+1,e+1);
d.addMultipleAsciiButtons("theArenaQuest"+this.questFolderName,b+1,b+19,e+1,b+1,b+19,e+2,b+1,b+19,e+3,b+1,b+19,e+4);
d.addLinkCall(".theArenaQuest"+this.questFolderName,new CallbackCollection(this.launchQuest.bind(this,c)))
};a.prototype.getQuestFolderName=function(){return this.questFolderName};a.prototype.launchQuest=function(b){if(b.canStartQuest()){b.getStatusBar().selectTabByType(StatusBarTabType.MAP);
b.goToMap();b.setPlace(this.specialCallback(b))}};return a})();var TheArenaModule;
(function(a){var d={};function b(e){d[e.getQuestFolderName()]=e}a.addQuest=b;function c(e){return d[e]
}a.getQuest=c})(TheArenaModule||(TheArenaModule={}));var TheArena=(function(b){__extends(a,b);
function a(c){b.call(this,c);this.renderArea=new RenderArea();this.renderArea.resize(100,20);
this.update()}a.prototype.getRenderArea=function(){return this.renderArea};a.prototype.drawQuestLogo=function(d,c,e){if(d!=null){if(TheArenaModule.getQuest(d)==null){console.log("Trying to draw the arena quest "+d+" which wasn't added to the arena module.")
}else{TheArenaModule.getQuest(d).drawLogo(this.renderArea,c,e,this.getGame())}}this.renderArea.drawHorizontalLine("-",c,c+19,e);
this.renderArea.drawHorizontalLine("-",c,c+19,e+5);this.renderArea.drawVerticalLine("|",c,e,e+5);
this.renderArea.drawVerticalLine("|",c+19,e,e+5)};a.prototype.update=function(){this.renderArea.resetAllButSize();
this.renderArea.drawString("The Arena is a special area featuring additional quests written by players.",12,1);
this.drawQuestLogo("peacefulForest",2,3);this.drawQuestLogo("hardcorePlatformer",21,3);
this.drawQuestLogo(null,40,3);this.drawQuestLogo(null,59,3);this.drawQuestLogo(null,78,3);
this.drawQuestLogo(null,2,8);this.drawQuestLogo(null,21,8);this.drawQuestLogo(null,40,8);
this.drawQuestLogo(null,59,8);this.drawQuestLogo(null,78,8);this.renderArea.drawString("If you want more challenge, you can also play hardmode here : ",1,17);
this.renderArea.addHtmlLink(63,17,"http://candybox2.github.io/?gamemode=hard","http://candybox2.github.io/?gamemode=hard");
this.renderArea.drawString("If you're a programmer and you want to create a quest,                     and                 !",1,15);
this.renderArea.addHtmlLink(56,15,"source_code.html","get the source code");this.renderArea.addHtmlLink(80,15,"create_quest.html","follow the guide")
};return a})(Place);var TheCaveAdditionalCharacter=(function(){function a(b,c,d){if(c===void 0){c=null
}if(d===void 0){d=null}this.theCave=b;if(c!=null){this.characterString=c}else{this.characterString=this.theCave.getAdditionalCharactersPossible()[Random.upTo(this.theCave.getAdditionalCharactersPossible().length-1)]
}if(d!=null){this.characterPosition=d}else{this.characterPosition=this.theCave.getAdditionalCharactersPositionsPossible()[Random.upTo(this.theCave.getAdditionalCharactersPositionsPossible().length-1)]
}}a.prototype.getPosition=function(){return this.characterPosition};a.prototype.getString=function(){return this.characterString
};return a})();var TheCaveExit=(function(b){__extends(a,b);function a(c){b.call(this,c);
this.renderArea=new RenderArea();this.renderArea.resizeFromArray(Database.getAscii("places/theCave/exit"),42,3);
this.update()}a.prototype.getRenderArea=function(){return this.renderArea};a.prototype.update=function(){this.renderArea.resetAllButSize();
this.renderArea.drawArray(Database.getAscii("places/theCave/exit"),21,3);this.renderArea.drawString(Database.getText("theCaveExitText0"),30,3);
this.renderArea.drawString(Database.getText("theCaveExitText1"),30,4);this.renderArea.drawString(Database.getTranslatedText("theCaveExitText0"),30,6,true);
this.renderArea.drawString(Database.getTranslatedText("theCaveExitText1"),30,7,true);
this.renderArea.addAsciiRealButton(Database.getText("theCaveExitButtonText"),41,20,"theCaveExitReturnToMapButton",Database.getTranslatedText("theCaveExitButtonText"),true);
this.renderArea.addLinkCall(".theCaveExitReturnToMapButton",new CallbackCollection(this.getGame().goToMainMap.bind(this.getGame())))
};return a})(Place);var TheCaveMoveType;(function(a){a[a.LEFT=0]="LEFT";a[a.RIGHT=1]="RIGHT";
a[a.STRAIGHT=2]="STRAIGHT"})(TheCaveMoveType||(TheCaveMoveType={}));var TheCavePattern=(function(){function a(b){this.theCave=b
}a.prototype.draw=function(c,b,d){};a.prototype.ended=function(){return false};a.prototype.getSentence=function(){return null
};a.prototype.move=function(b){};a.prototype.getTheCave=function(){return this.theCave
};return a})();var TheCavePattern_ArrowsToHeartPlug=(function(b){__extends(a,b);function a(c){b.call(this,c);
this.stopped=false;this.arrow=true;this.followedNumber=0;this.foundPlug=false;this.gotPlug=false;
this.arrowAtRight=Random.flipACoin()}a.prototype.draw=function(d,c,e){if(this.arrow){if(this.arrowAtRight==true){d.drawString("->",c+71,e+17)
}else{d.drawString("<-",c+26,e+17)}}if(this.foundPlug==true&&this.gotPlug==false){d.drawArray(Database.getAscii("places/theCave/heartPlug"),c+46,e+14);
d.addMultipleAsciiButtons("theCavePattern_ArrowsToHeartPlugButton",c+46,c+53,e+14,c+46,c+53,e+15);
d.addLinkCall(".theCavePattern_ArrowsToHeartPlugButton",new CallbackCollection(this.getPlug.bind(this)))
}};a.prototype.ended=function(){return this.stopped};a.prototype.getSentence=function(){if(this.foundPlug==true&&this.gotPlug==false){return"theCavePattern_ArrowsToHeartPlugSeeStrangePlug"
}return null};a.prototype.move=function(c){if((this.arrowAtRight==true&&c==TheCaveMoveType.RIGHT)||(this.arrowAtRight==false&&c==TheCaveMoveType.LEFT)){if(this.foundPlug==false){if(this.followedNumber>6){this.foundPlug=true;
this.arrow=false}else{this.arrowAtRight=Random.flipACoin();this.followedNumber+=1
}}else{this.stopped=true}}else{this.stopped=true}};a.prototype.getPlug=function(){this.getTheCave().getGame().gainItem("gridItemPossessedHeartPlug");
this.gotPlug=true;this.getTheCave().aPatternNeedsUpdating()};return a})(TheCavePattern);
Saving.registerBool("TheCavePattern_ChocolateBarNowGotTheBar",false);var TheCavePattern_ChocolateBarNow=(function(b){__extends(a,b);
function a(c){b.call(this,c);this.gotTheBar=false}a.prototype.draw=function(d,c,e){if(this.gotTheBar==false){d.drawArray(Database.getAscii("places/theCave/chocolateBar"),c+40,e+25);
d.addMultipleAsciiButtons("theCavePattern_ChocolateBarNowButton",c+40,c+57,e+26,c+40,c+57,e+27);
d.addLinkCall(".theCavePattern_ChocolateBarNowButton",new CallbackCollection(this.getTheBar.bind(this)))
}};a.prototype.ended=function(){return true};a.prototype.getSentence=function(){if(this.gotTheBar==false){return"theCavePattern_ChocolateBarNowSeeChocolateBar"
}return null};a.prototype.getTheBar=function(){this.getTheCave().getGame().getChocolateBars().add(1);
this.gotTheBar=true;Saving.saveBool("TheCavePattern_ChocolateBarNowGotTheBar",true);
this.getTheCave().aPatternNeedsUpdating()};return a})(TheCavePattern);var TheCavePattern_MonkeyWizard=(function(b){__extends(a,b);
function a(c){b.call(this,c)}a.prototype.draw=function(d,c,e){d.drawArray(Database.getAscii("places/theCave/monkeyWizard"),c+32,e+6,new RenderTransparency(" ","%"));
d.addAsciiRealButton(Database.getText("theCavePattern_MonkeyWizardButton"),c+39,e+26,"theCavePattern_MonkeyWizardButton",Database.getTranslatedText("theCavePattern_MonkeyWizardButton"));
d.addLinkCall(".theCavePattern_MonkeyWizardButton",new CallbackCollection(this.challenge.bind(this)))
};a.prototype.ended=function(){return true};a.prototype.getSentence=function(){return"theCavePattern_MonkeyWizardSentence"
};a.prototype.challenge=function(){if(this.getTheCave().getGame().canStartQuest()){this.getTheCave().getGame().setPlace(new MonkeyWizardQuest(this.getTheCave().getGame()))
}};return a})(TheCavePattern);var TheCavePattern_OctopusKing=(function(b){__extends(a,b);
function a(c){b.call(this,c)}a.prototype.draw=function(d,c,e){d.drawArray(Database.getAscii("places/theCave/octopusKing"),c+32,e+6,new RenderTransparency(" ","%"));
d.addAsciiRealButton(Database.getText("theCavePattern_OctopusKingButton"),c+39,e+26,"theCavePattern_OctopusKingButton",Database.getTranslatedText("theCavePattern_OctopusKingButton"));
d.addLinkCall(".theCavePattern_OctopusKingButton",new CallbackCollection(this.challenge.bind(this)))
};a.prototype.ended=function(){return true};a.prototype.getSentence=function(){return"theCavePattern_OctopusKingSentence"
};a.prototype.challenge=function(){if(this.getTheCave().getGame().canStartQuest()){this.getTheCave().getGame().setPlace(new OctopusKingQuest(this.getTheCave().getGame()))
}};return a})(TheCavePattern);Saving.registerBool("TheCavePattern_TreasureMapSawMap",false);
Saving.registerBool("TheCavePattern_TreasureMapFoundTreasure",false);var TheCavePattern_TreasureMap=(function(a){__extends(b,a);
function b(c){a.call(this,c);Saving.saveBool("TheCavePattern_TreasureMapSawMap",true)
}b.prototype.draw=function(d,c,e){d.drawArray(Database.getAscii("places/theCave/treasureMap"),c+38,e+22)
};b.prototype.ended=function(){return true};b.prototype.getSentence=function(){return"theCavePattern_TreasureMapSentence"
};return b})(TheCavePattern);var TheCave=(function(b){__extends(a,b);function a(c){b.call(this,c);
this.renderArea=new RenderArea();this.lastMoves=[];this.firstSentence=null;this.pattern=null;
this.createAdditionalCharactersPossible();this.createAdditionalCharactersPositionsPossible();
this.createWay();this.renderArea.resizeFromArray(Database.getAscii("places/theCave/ways"),42,7);
this.update()}a.prototype.getRenderArea=function(){return this.renderArea};a.prototype.aPatternNeedsUpdating=function(){this.update();
this.getGame().updatePlace()};a.prototype.getAdditionalCharactersPositionsPossible=function(){return this.additionalCharactersPositionsPossible
};a.prototype.getAdditionalCharactersPossible=function(){return this.additionalCharactersPossible
};a.prototype.createAdditionalCharactersPositionsPossible=function(){this.additionalCharactersPositionsPossible=[];
this.additionalCharactersPositionsPossible.push(new Pos(20,6));this.additionalCharactersPositionsPossible.push(new Pos(19,9));
this.additionalCharactersPositionsPossible.push(new Pos(17,13));this.additionalCharactersPositionsPossible.push(new Pos(20,18));
this.additionalCharactersPositionsPossible.push(new Pos(17,24));this.additionalCharactersPositionsPossible.push(new Pos(41,19));
this.additionalCharactersPositionsPossible.push(new Pos(56,16));this.additionalCharactersPositionsPossible.push(new Pos(52,22));
this.additionalCharactersPositionsPossible.push(new Pos(31,23));this.additionalCharactersPositionsPossible.push(new Pos(64,28));
this.additionalCharactersPositionsPossible.push(new Pos(64,12));this.additionalCharactersPositionsPossible.push(new Pos(75,5));
this.additionalCharactersPositionsPossible.push(new Pos(80,12));this.additionalCharactersPositionsPossible.push(new Pos(77,17));
this.additionalCharactersPositionsPossible.push(new Pos(80,20));this.additionalCharactersPositionsPossible.push(new Pos(78,26))
};a.prototype.createAdditionalCharactersPossible=function(){this.additionalCharactersPossible=[];
this.additionalCharactersPossible.push("V");this.additionalCharactersPossible.push("\\");
this.additionalCharactersPossible.push("/");this.additionalCharactersPossible.push("'");
this.additionalCharactersPossible.push("`");this.additionalCharactersPossible.push("~");
this.additionalCharactersPossible.push(")");this.additionalCharactersPossible.push("(");
this.additionalCharactersPossible.push("}");this.additionalCharactersPossible.push("{");
this.additionalCharactersPossible.push("@");this.additionalCharactersPossible.push(">");
this.additionalCharactersPossible.push("^")};a.prototype.createWay=function(e){if(e===void 0){e=null
}var c;this.additionalCharacters=[];switch(e){case TheCaveMoveType.STRAIGHT:this.firstSentence="theCaveFirstSentenceWentStraight";
break;case TheCaveMoveType.LEFT:this.firstSentence="theCaveFirstSentenceWentLeft";
break;case TheCaveMoveType.RIGHT:this.firstSentence="theCaveFirstSentenceWentRight";
break;case null:this.firstSentence="theCaveFirstSentenceYouAre";break}if(this.pattern!=null){if(this.pattern.ended()){this.pattern=null
}}if(this.pattern==null&&this.lastMoves.length>0){if(Random.flipACoin()){c=10;while(c>0&&this.pattern==null){c-=1;
switch(Random.upTo(4)){case 0:if(Saving.loadBool("gridItemPossessedHeartPlug")==false){this.pattern=new TheCavePattern_ArrowsToHeartPlug(this)
}break;case 1:if(Saving.loadBool("TheCavePattern_ChocolateBarNowGotTheBar")==false){this.pattern=new TheCavePattern_ChocolateBarNow(this)
}break;case 2:if(Saving.loadBool("TheCavePattern_TreasureMapFoundTreasure")==false){this.pattern=new TheCavePattern_TreasureMap(this)
}break;case 3:this.pattern=new TheCavePattern_MonkeyWizard(this);break;case 4:this.pattern=new TheCavePattern_OctopusKing(this);
break}}}}for(var d=0;d<10;d++){this.additionalCharacters.push(new TheCaveAdditionalCharacter(this))
}};a.prototype.drawWays=function(c,e){if(c===void 0){c=0}if(e===void 0){e=3}this.renderArea.drawArray(Database.getAscii("places/theCave/ways"),c+21,e);
for(var d=0;d<this.additionalCharacters.length;d++){this.renderArea.drawString(this.additionalCharacters[d].getString(),c+this.additionalCharacters[d].getPosition().x,e+this.additionalCharacters[d].getPosition().y)
}if(this.firstSentence!=null){this.renderArea.drawString(Database.getText(this.firstSentence),c+23,e+32);
this.renderArea.drawString(Database.getTranslatedText(this.firstSentence),c+23,e+33,true)
}if(this.pattern!=null&&this.pattern.getSentence()!=null){this.renderArea.drawString(Database.getText(this.pattern.getSentence()),c+23,e+34);
this.renderArea.drawString(Database.getTranslatedText(this.pattern.getSentence()),c+23,e+35,true)
}if(this.pattern!=null){this.pattern.draw(this.renderArea,c,e)}for(var d=0;d<=4;d++){this.renderArea.addBackgroundColor(c+46,c+54,e+1+d,new Color(ColorType.THECAVE_BACKGROUND_COLOR))
}this.renderArea.addMultipleAsciiButtons("theCaveGoLeftButton",c+30,c+32,e+5,c+29,c+33,e+6,c+27,c+33,e+7,c+26,c+32,e+8,c+26,c+32,e+9,c+26,c+32,e+10,c+25,c+32,e+11,c+24,c+32,e+12,c+25,c+31,e+13,c+25,c+31,e+14,c+25,c+32,e+15,c+25,c+32,e+16,c+25,c+32,e+17,c+25,c+32,e+18,c+24,c+32,e+19,c+24,c+31,e+20,c+25,c+30,e+21,c+26,c+29,e+22,c+26,c+28,e+23,c+25,c+27,e+24,c+25,c+26,e+25);
this.renderArea.addLinkCall(".theCaveGoLeftButton",new CallbackCollection(this.move.bind(this,TheCaveMoveType.LEFT)));
this.renderArea.addMultipleAsciiButtons("theCaveGoRightButton",c+68,c+70,e+6,c+68,c+72,e+7,c+68,c+73,e+8,c+68,c+73,e+9,c+69,c+74,e+10,c+69,c+74,e+11,c+69,c+74,e+12,c+69,c+75,e+13,c+69,c+75,e+14,c+68,c+74,e+15,c+68,c+74,e+16,c+68,c+74,e+17,c+68,c+74,e+18,c+68,c+74,e+19,c+69,c+74,e+20,c+70,c+74,e+21,c+71,c+74,e+22,c+72,c+73,e+23);
this.renderArea.addLinkCall(".theCaveGoRightButton",new CallbackCollection(this.move.bind(this,TheCaveMoveType.RIGHT)));
this.renderArea.addMultipleAsciiButtons("theCaveGoStraightButton",c+46,c+54,e+1,c+46,c+54,e+2,c+46,c+54,e+3,c+46,c+54,e+4,c+46,c+54,e+5);
this.renderArea.addLinkCall(".theCaveGoStraightButton",new CallbackCollection(this.move.bind(this,TheCaveMoveType.STRAIGHT)))
};a.prototype.goToTheCaveExit=function(){Saving.saveBool("mainMapDoneCaveEntrance",true);
this.getGame().setPlace(new TheCaveExit(this.getGame()))};a.prototype.move=function(c){if(this.lastMoves.length>12&&this.pattern==null){this.goToTheCaveExit()
}if(this.pattern!=null){this.pattern.move(c)}this.lastMoves.push(c);this.createWay(c);
this.update();this.getGame().updatePlace()};a.prototype.update=function(){this.renderArea.resetAllButSize();
this.addBackToMainMapButton(this.renderArea,"theCaveBackToTheMapButton");this.drawWays()
};return a})(Place);var TheComputerLine=(function(){function a(b,c){this.type=b;this.setLinesFromText(c)
}a.prototype.draw=function(c,e,d){for(var b=this.linesOfText.length-1;b>=0;b--){if(e.y-(this.linesOfText.length-1-b)>=d){if(this.type!=TheComputerLineType.CENTER){c.drawString(this.linesOfText[b],e.x,e.y-(this.linesOfText.length-1-b))
}else{c.drawString(this.linesOfText[b],e.x+16-Math.floor(this.linesOfText[b].length/2),e.y-(this.linesOfText.length-1-b))
}}}return this.linesOfText.length-1};a.prototype.setLinesFromText=function(d){this.linesOfText=[""];
switch(this.type){case TheComputerLineType.COMMAND:d=" > "+d;break}var c=d.split(" ");
for(var b=0;b<c.length;b++){if(c[b].length+this.linesOfText[this.linesOfText.length-1].length<32||c[b].length>30){this.linesOfText[this.linesOfText.length-1]=this.linesOfText[this.linesOfText.length-1]+c[b]+" "
}else{this.linesOfText.push(c[b]+" ")}}};a.prototype.getType=function(){return this.type
};return a})();var TheComputerLineType;(function(a){a[a.TEXT=0]="TEXT";a[a.COMMAND=1]="COMMAND";
a[a.CENTER=2]="CENTER"})(TheComputerLineType||(TheComputerLineType={}));var TheComputerState;
(function(a){a[a.WAITING_FOR_RETURN=0]="WAITING_FOR_RETURN";a[a.WAITING_FOR_COMMAND=1]="WAITING_FOR_COMMAND"
})(TheComputerState||(TheComputerState={}));var TheComputer=(function(b){__extends(a,b);
function a(c){b.call(this,c);this.renderArea=new RenderArea();this.lines=[];this.currentCommandText="";
this.hotkeysAdded=false;this.renderArea.resize(100,40);this.update()}a.prototype.getRenderArea=function(){return this.renderArea
};a.prototype.willStopBeingDisplayed=function(){this.getGame().setIsStatusBarAllowedToUseTheNKey(true)
};a.prototype.addHotkeys=function(){this.hotkeysAdded=true;this.getGame().addHotkey(new Hotkey("enter",new CallbackCollection(this.pressedEnter.bind(this))));
for(var c=97;c<=122;c++){this.getGame().addHotkey(new Hotkey(String.fromCharCode(c),new CallbackCollection(this.pressedKey.bind(this,String.fromCharCode(c)))))
}for(var c=48;c<=57;c++){this.getGame().addHotkey(new Hotkey(String.fromCharCode(c),new CallbackCollection(this.pressedKey.bind(this,String.fromCharCode(c)))));
this.getGame().addHotkey(new Hotkey("numpad"+String.fromCharCode(c),new CallbackCollection(this.pressedKey.bind(this,String.fromCharCode(c)))))
}this.getGame().addHotkey(new Hotkey("space",new CallbackCollection(this.pressedKey.bind(this," "))));
this.getGame().addHotkey(new Hotkey("delete",new CallbackCollection(this.pressedDelete.bind(this))))
};a.prototype.addLine=function(c){this.lines.push(c)};a.prototype.addMisunderstood=function(){this.addLine(new TheComputerLine(TheComputerLineType.TEXT,'This command was misunderstood. Try "help" for a list of available commands.'))
};a.prototype.draw=function(){this.renderArea.resetAllButSize();this.renderArea.drawArray(Database.getAscii("general/theComputer/computer"),19,0);
this.drawOnButton(69,14);this.drawLines(22,16,6)};a.prototype.drawOnButton=function(c,d){this.renderArea.addMultipleAsciiButtons("theComputerOnButton",c+1,c+4,d,c,c+5,d+1,c+1,c+4,d+2);
this.renderArea.addLinkCall(".theComputerOnButton",new CallbackCollection(this.switchOnOff.bind(this)))
};a.prototype.drawLines=function(c,f,e){for(var d=this.lines.length-1;d>=0;d--){f-=this.lines[d].draw(this.renderArea,new Pos(c,f-(this.lines.length-1-d)),e)
}};a.prototype.executeCommand=function(d){var c=d.split(" ");if(d.length>0&&c.length>0){switch(c[0]){case"no":this.addLine(new TheComputerLine(TheComputerLineType.TEXT,"Yes!"));
break;case"yes":this.addLine(new TheComputerLine(TheComputerLineType.TEXT,"No!"));
break;case"aniwey":this.addLine(new TheComputerLine(TheComputerLineType.TEXT,"He made this game :)"));
break;case"cedric":this.addLine(new TheComputerLine(TheComputerLineType.TEXT,"A nice guy who made the online saving system of the first Candy Box."));
break;case"17":case"dixsept":this.addLine(new TheComputerLine(TheComputerLineType.TEXT,"A beta tester and ascii artist. Some people say that he has a big nose. Don't listen to them."));
break;case"soinou":this.addLine(new TheComputerLine(TheComputerLineType.TEXT,"A beta tester. He also made the tab system of the first Candy Box."));
break;case"42":this.addLine(new TheComputerLine(TheComputerLineType.TEXT,"The answer to the ultimate question of life, the universe, and everything."));
break;case"cp":this.addLine(new TheComputerLine(TheComputerLineType.TEXT,"No, you can't copy anything, sorry."));
break;case"rm":this.addLine(new TheComputerLine(TheComputerLineType.TEXT,"No, you can't remove anything, sorry."));
break;case"cd":this.addLine(new TheComputerLine(TheComputerLineType.TEXT,"Where would you like to go anyway?"));
break;case"ls":this.addLine(new TheComputerLine(TheComputerLineType.TEXT,". .."));
break;case"emacs":this.addLine(new TheComputerLine(TheComputerLineType.TEXT,"The best text editor ever after vim."));
break;case"vim":case"vi":this.addLine(new TheComputerLine(TheComputerLineType.TEXT,"The best text editor ever after emacs."));
break;case"nano":this.addLine(new TheComputerLine(TheComputerLineType.TEXT,"Come on, do you seriously want to use this?"));
break;case"startx":this.addLine(new TheComputerLine(TheComputerLineType.TEXT,"Fatal server error: Cannot establish any listening sockets - Make sure an X server isn't already running"));
break;case"mkdir":this.addLine(new TheComputerLine(TheComputerLineType.TEXT,"Cannot create directory. No, you won't be given any precision."));
break;case"sudo":case"su":this.addLine(new TheComputerLine(TheComputerLineType.TEXT,'To gain root access, please use "su -". (hint : you can\'t type the "-")'));
break;case"lol":this.addLine(new TheComputerLine(TheComputerLineType.TEXT,"Haha. That's funny."));
break;case"pwd":this.addLine(new TheComputerLine(TheComputerLineType.TEXT,"/home/player"));
break;case"mv":this.addLine(new TheComputerLine(TheComputerLineType.TEXT,"What would you like to move anyway?"));
break;case"man":this.addLine(new TheComputerLine(TheComputerLineType.TEXT,"Nah. Use help instead."));
break;case"pacman":this.addLine(new TheComputerLine(TheComputerLineType.TEXT,"The best package manager ever."));
break;case"whoami":this.addLine(new TheComputerLine(TheComputerLineType.TEXT,"player"));
break;case"tobias":this.addLine(new TheComputerLine(TheComputerLineType.TEXT,"Tobias Nordqvist, an ascii artist. From sweden. Thanks to him!"));
break;case"deinol":case"dani":this.addLine(new TheComputerLine(TheComputerLineType.TEXT,'Dani "Deinol" Gómez, an ascii artist. Thanks to him!'));
break;case"godsturf":this.addLine(new TheComputerLine(TheComputerLineType.TEXT,"GodsTurf, an ascii artist. Thanks to him!"));
break;case"mlp":this.addLine(new TheComputerLine(TheComputerLineType.TEXT,"PONIES PONIES PONIES PONIES PONIES PONIES PONIES PONIES PONIES PONIES"));
break;case"help":if(c.length>1){if(c.length>2){this.addMisunderstood()}else{switch(c[1]){case"help":this.addLine(new TheComputerLine(TheComputerLineType.TEXT,"The help command displays informations about other system commands."));
break;case"add":this.addLine(new TheComputerLine(TheComputerLineType.TEXT,'The add command allows you to add a given quantity of a given resource. Usage : "add quantity resource".'));
break;case"quantity":this.addLine(new TheComputerLine(TheComputerLineType.TEXT,"A quantity is expressed by a number, which is composed of multiple figures."));
break;case"resource":this.addLine(new TheComputerLine(TheComputerLineType.TEXT,"List of available resources : candies, lollipops, chocolatebars, painsauchocolat."));
break;case"bug":this.addLine(new TheComputerLine(TheComputerLineType.TEXT,'The bug command allows you to configure the bugs generated by the computer. Usage : "bug type level".'));
break;case"type":this.addLine(new TheComputerLine(TheComputerLineType.TEXT,'The bug type is the kind of bug you want to configure. Allowed types are "graphical", "quest" and "ultimate". Use "help graphical", "help quest" or "help ultimate" for more information.'));
break;case"graphical":this.addLine(new TheComputerLine(TheComputerLineType.TEXT,"Graphical bugs only affect how the game display informations. They won't be kept after reloading your game."));
break;case"quest":this.addLine(new TheComputerLine(TheComputerLineType.TEXT,"Quest bugs affect the quests gameplay. Results are unexpected. They probably won't be kept after reloading your game."));
break;case"ultimate":this.addLine(new TheComputerLine(TheComputerLineType.TEXT,"Ultimate bugs can affect a lot of things. They will probably be kept after reloading your game, and they basically could destroy your save. Your browser may even crash. Be careful with them."));
break;case"level":this.addLine(new TheComputerLine(TheComputerLineType.TEXT,"The bug level describes how much the bugs will impact the game. Allowed values are 0, 1, 2, 3 and 4. 0 means no bug and 4 is the most powerful bug."));
break;case"command":this.addLine(new TheComputerLine(TheComputerLineType.TEXT,'No, you\'re not supposed to type "help command", you should type "help bug" or "help add" for example.'));
break;default:this.addMisunderstood();break}}}else{this.addLine(new TheComputerLine(TheComputerLineType.TEXT,'List of available commands : add, bug, help. Use "help command" to get more informations about a specific command. There are probably no hidden commands. I guess.'))
}break;case"add":if(c.length>1){if(c.length>2){if(c.length>3){this.addMisunderstood()
}else{if(isNaN(parseFloat(c[1]))){this.addLine(new TheComputerLine(TheComputerLineType.TEXT,'The quantity must be a number. See "help quantity" for more informations.'))
}else{if(c[2]!="candies"&&c[2]!="lollipops"&&c[2]!="chocolatebars"&&c[2]!="painsauchocolat"){this.addLine(new TheComputerLine(TheComputerLineType.TEXT,'The resource is invalid. See "help resource" for more informations.'))
}else{switch(c[2]){case"candies":this.getGame().getCandies().add(parseFloat(c[1]));
break;case"lollipops":this.getGame().getLollipops().add(parseFloat(c[1]));break;case"chocolatebars":this.getGame().getChocolateBars().add(parseFloat(c[1]));
break;case"painsauchocolat":this.getGame().getPainsAuChocolat().add(parseFloat(c[1]));
break}this.addLine(new TheComputerLine(TheComputerLineType.TEXT,c[1]+" "+c[2]+" added successfully."))
}}}}else{this.addLine(new TheComputerLine(TheComputerLineType.TEXT,'You must give a resource. See "help add" for more informations.'))
}}else{this.addLine(new TheComputerLine(TheComputerLineType.TEXT,'You must give a quantity. See "help add" for more informations.'))
}break;case"bug":if(c.length>1){if(c.length>2){if(c.length>3){this.addMisunderstood()
}else{if(c[1]!="graphical"&&c[1]!="quest"&&c[1]!="ultimate"){this.addLine(new TheComputerLine(TheComputerLineType.TEXT,'The bug type is incorrect. See "help type" for more informations.'))
}else{if(c[2]!="0"&&c[2]!="1"&&c[2]!="2"&&c[2]!="3"&&c[2]!="4"){this.addLine(new TheComputerLine(TheComputerLineType.TEXT,'The bug level is invalid. See "help level" for more informations.'))
}else{switch(c[1]){case"graphical":Bugs.setGraphicalBugLevel(parseInt(c[2]));break;
case"quest":Bugs.setQuestBugLevel(parseInt(c[2]));break;case"ultimate":Bugs.setUltimateBugLevel(parseInt(c[2]));
break}this.addLine(new TheComputerLine(TheComputerLineType.TEXT,"Bug type "+c[1]+" set successfully at level "+c[2]+"."))
}}}}else{this.addLine(new TheComputerLine(TheComputerLineType.TEXT,'You must give a bug level. See "help level" for more informations.'))
}}else{this.addLine(new TheComputerLine(TheComputerLineType.TEXT,'You must give a bug type. See "help type" for more informations.'))
}break;default:this.addMisunderstood();break}}};a.prototype.pressedDelete=function(){if(this.state==TheComputerState.WAITING_FOR_COMMAND){if(this.currentCommandText.length>0){this.currentCommandText=this.currentCommandText.slice(0,this.currentCommandText.length-1);
this.update();this.getGame().updatePlace()}}};a.prototype.pressedEnter=function(){switch(this.state){case TheComputerState.WAITING_FOR_RETURN:this.state=TheComputerState.WAITING_FOR_COMMAND;
this.addLine(new TheComputerLine(TheComputerLineType.TEXT,""));this.addLine(new TheComputerLine(TheComputerLineType.COMMAND,""));
this.update();this.getGame().updatePlace();break;case TheComputerState.WAITING_FOR_COMMAND:this.executeCommand(this.currentCommandText);
this.currentCommandText="";this.addLine(new TheComputerLine(TheComputerLineType.TEXT,""));
this.addLine(new TheComputerLine(TheComputerLineType.COMMAND,""));this.update();this.getGame().updatePlace();
break}};a.prototype.pressedKey=function(c){if(this.state==TheComputerState.WAITING_FOR_COMMAND){var d=this.currentCommandText.split(" ");
if((d.length==0||d[d.length-1].length<25||c==" ")&&this.currentCommandText.length<100){this.currentCommandText=this.currentCommandText+c;
this.update();this.getGame().updatePlace()}}};a.prototype.switchOnOff=function(){if(this.on){this.on=false;
this.lines=[];this.getGame().setIsStatusBarAllowedToUseTheNKey(true)}else{this.on=true;
this.addLine(new TheComputerLine(TheComputerLineType.COMMAND,"Booting GNU/Candies system version 4.2... OK"));
this.addLine(new TheComputerLine(TheComputerLineType.COMMAND,"Initializing the memory stack... OK"));
this.addLine(new TheComputerLine(TheComputerLineType.COMMAND,"Checking every piece of the system is free software... OK"));
this.addLine(new TheComputerLine(TheComputerLineType.TEXT,""));this.addLine(new TheComputerLine(TheComputerLineType.CENTER,"Press return to continue"));
this.state=TheComputerState.WAITING_FOR_RETURN;this.getGame().setIsStatusBarAllowedToUseTheNKey(false);
if(this.hotkeysAdded==false){this.addHotkeys()}}this.update();this.getGame().updatePlace()
};a.prototype.update=function(){if(this.lines.length>12){this.lines.splice(0,this.lines.length-12)
}if(this.lines.length>0&&this.lines[this.lines.length-1].getType()==TheComputerLineType.COMMAND){this.lines[this.lines.length-1].setLinesFromText(this.currentCommandText)
}this.draw()};return a})(Place);Saving.registerBool("theHoleFirstChestFound",false);
Saving.registerBool("theHoleSecondChestFound",false);Saving.registerBool("theHoleThirdChestFound",false);
Saving.registerBool("theHoleFourthChestFound",false);var TheHole=(function(a){__extends(b,a);
function b(c){a.call(this,c,"You can move with the left and right arrow keys!");this.firstChestOpened=false;
this.secondChestOpened=false;this.thirdChestOpened=false;this.fourthChestOpened=false;
this.isGoingRight=true;this.resizeQuest(100,35,new Pos(100,136));this.addPlayerCollisionBoxes(true,true,true,true);
this.getGame().getPlayer().loadCandyBoxCharacter(this);this.getGame().getPlayer().setGlobalPosition(new Pos(48,0));
this.configPlayerOrClone(this.getGame().getPlayer());this.addEntity(this.getGame().getPlayer());
this.createWalls();this.addSpikes(new Spikes(this,new Pos(44,42),20));this.addSpikes(new Spikes(this,new Pos(23,59),22));
this.addSpikes(new Spikes(this,new Pos(90,62),8));this.addSpikes(new Spikes(this,new Pos(87,69),4));
this.addSpikes(new Spikes(this,new Pos(94,69),4));this.addSpikes(new Spikes(this,new Pos(93,74),2));
this.addSpikes(new Spikes(this,new Pos(66,74),14));this.addSpikes(new Spikes(this,new Pos(66,82),4));
this.addSpikes(new Spikes(this,new Pos(76,83),6));this.addSpikes(new Spikes(this,new Pos(3,95),8));
this.addSpikes(new Spikes(this,new Pos(13,97),10));this.addSpikes(new Spikes(this,new Pos(24,96),2));
this.addSpikes(new Spikes(this,new Pos(29,96),2));this.addSpikes(new Spikes(this,new Pos(33,95),12));
this.addSpikes(new Spikes(this,new Pos(64,64),4));this.addChest(new Chest(this,new Pos(27,67),true,new CallbackCollection(this.openFirstChest.bind(this)),Saving.loadBool("theHoleFirstChestFound")));
this.addChest(new Chest(this,new Pos(59,74),true,new CallbackCollection(this.openSecondChest.bind(this)),Saving.loadBool("theHoleSecondChestFound")));
this.addChest(new Chest(this,new Pos(37,107),false,new CallbackCollection(this.openThirdChest.bind(this)),Saving.loadBool("theHoleThirdChestFound")));
this.addChest(new Chest(this,new Pos(4,129),true,new CallbackCollection(this.openFourthChest.bind(this)),Saving.loadBool("theHoleFourthChestFound")));
this.addLostTribeWarrior(new LostTribeWarrior(this,new Pos(68,89),new Pos(63,85),new Pos(93,95)));
this.addLostTribeWarrior(new LostTribeWarrior(this,new Pos(14,126),new Pos(2,112),new Pos(79,129)));
this.addLostTribeWarrior(new LostTribeWarrior(this,new Pos(21,126),new Pos(2,112),new Pos(79,129)));
this.addLostTribeWarrior(new LostTribeWarrior(this,new Pos(31,125),new Pos(2,112),new Pos(79,129)));
this.addLostTribeWarrior(new LostTribeWarrior(this,new Pos(51,123),new Pos(2,112),new Pos(79,129)));
this.getGame().getQuestLog().addMessage(new QuestLogMessage("You jumped into the big hole! You're falling quickly, try to stay alive!"))
}b.prototype.willBeDisplayed=function(){a.prototype.willBeDisplayed.call(this);this.getGame().addHotkey(new Hotkey("left",null));
this.getGame().addHotkey(new Hotkey("right",null))};b.prototype.castPlayerFireball=function(){if(this.isGoingRight){a.prototype.castPlayerFireball.call(this,new Pos(2,0))
}else{a.prototype.castPlayerFireball.call(this,new Pos(-2,0))}};b.prototype.castPlayerTeleport=function(){a.prototype.castPlayerTeleport.call(this,new Pos(48,0),new Pos(1,1))
};b.prototype.configPlayerOrClone=function(c){c.setQuestEntityMovement(new QuestEntityMovement());
c.getQuestEntityMovement().setGravity(true);c.getQuestEntityMovement().setWormsLike(true)
};b.prototype.endQuest=function(c){if(c){this.getGame().getQuestLog().addMessage(new QuestLogMessage("You managed to reach the bottom of the hole!"))
}else{this.getGame().getQuestLog().addMessage(new QuestLogMessage("You died while falling in the hole. No one will probably ever find your body down there."))
}a.prototype.endQuest.call(this,c);if(c){if(this.firstChestOpened){Saving.saveBool("theHoleFirstChestFound",true)
}if(this.secondChestOpened){Saving.saveBool("theHoleSecondChestFound",true)}if(this.thirdChestOpened){Saving.saveBool("theHoleThirdChestFound",true)
}if(this.fourthChestOpened){Saving.saveBool("theHoleFourthChestFound",true)}}};b.prototype.update=function(){if(this.getQuestEnded()==false){if(this.thePlayerWon()){this.endQuest(true);
return}if(this.getGame().getPlayer().shouldDie()){this.endQuest(false);return}this.moveHorizontally();
this.updateEntities();this.calcNewGlobalDrawingOffset()}this.preDraw();this.getRenderArea().drawArray(Database.getPartOfAscii("places/quests/theHole/background",-this.getGlobalDrawingOffset().y,-this.getGlobalDrawingOffset().y+35),this.getRealQuestPosition().x,this.getRealQuestPosition().y);
this.drawEntities();this.drawAroundQuest();if(this.getQuestEnded()==false){this.addExitQuestButton(new CallbackCollection(this.getGame().goToMainMap.bind(this.getGame())),"buttonExitQuestNoKeeping")
}else{if(this.getQuestEndedAndWeWon()==false){this.addExitQuestButton(new CallbackCollection(this.getGame().goToMainMap.bind(this.getGame())),"buttonExitQuestNoKeepingBecauseLose")
}else{this.addExitQuestButton(new CallbackCollection(this.getGame().goToMainMap.bind(this.getGame())),"buttonExitQuestKeeping")
}}this.postDraw()};b.prototype.addChest=function(c){this.addEntity(c)};b.prototype.addLostTribeWarrior=function(c){c.setHealthBar(new QuestEntityHealthBar(c,new Pos(4,1)));
this.addEntity(c)};b.prototype.addSpikes=function(c){this.addEntity(c)};b.prototype.addWalls=function(){var d=[];
for(var f=0;f<arguments.length;f++){d[f-0]=arguments[f]}this.addEntity(new Wall(this,new Pos(0,0)));
var c=(this.getLastEntity());for(var e=0;e<d.length/4;e++){c.addBox(new Pos(d[e*4],d[e*4+1]),new Pos(d[e*4+2]-d[e*4]+1,d[e*4+3]-d[e*4+1]+1))
}};b.prototype.calcNewGlobalDrawingOffset=function(){if(this.getGame().getPlayer().getGlobalPosition().y+this.getGlobalDrawingOffset().y>10){this.setGlobalDrawingOffset(new Pos(0,-this.getGame().getPlayer().getGlobalPosition().y+10))
}else{if(this.getGame().getPlayer().getGlobalPosition().y+this.getGlobalDrawingOffset().y<5){if(this.getGame().getPlayer().getGlobalPosition().y>5){this.setGlobalDrawingOffset(new Pos(0,-this.getGame().getPlayer().getGlobalPosition().y+5))
}else{this.setGlobalDrawingOffset(new Pos(0,0))}}}};b.prototype.createWalls=function(){this.addWalls(0,0,40,22,0,23,39,23,0,24,38,24,0,25,37,25,0,26,36,26,0,27,33,27,0,28,32,28,0,29,31,29,0,30,30,30,0,31,29,31,0,32,28,32,0,33,27,33,0,34,26,34,0,35,25,35,0,36,24,36,0,37,23,37,0,38,22,59,0,60,44,60,0,61,43,61,0,62,27,62,34,62,38,62,0,63,26,63,0,64,25,66,0,67,26,67,0,68,33,68,0,69,32,69,0,70,31,70,0,71,27,71,0,72,26,72,0,73,25,73,0,74,24,74,0,75,16,75,0,76,15,76,0,77,4,77,0,78,3,80,0,81,2,81,0,82,1,95,36,73,39,73,35,74,40,74,34,75,41,75,33,76,49,76,32,77,49,77,32,78,49,78,33,79,49,79,34,80,49,80,35,81,49,81,36,82,49,82,37,83,49,85,37,86,49,86,38,87,50,87,39,88,51,88,45,89,52,89,46,90,54,90,47,91,54,94,46,95,54,95,0,96,11,96,32,96,54,96,0,97,12,97,23,97,26,97,28,97,54,97,0,98,26,101,28,98,54,101,0,102,26,102,28,102,57,102,0,103,23,103,35,103,65,103,0,104,20,104,36,104,69,104,0,105,19,105,41,105,74,105,0,106,18,106,41,106,87,106,0,107,17,109,40,107,87,107,29,108,87,108,28,109,87,109,0,110,18,110,27,110,68,110,0,111,57,111,0,112,39,112,0,113,30,113,0,114,8,114,0,115,7,115,0,116,6,116,0,117,5,119,0,120,4,120,0,121,3,121,0,122,2,128,0,129,3,129,79,112,87,112,78,113,87,113,77,114,87,114,76,115,87,115,75,116,87,116,74,117,87,117,73,118,87,118,71,119,87,119,70,120,87,120,69,121,87,121,68,122,87,122,66,123,87,123,64,124,87,124,61,125,87,125,56,126,87,126,50,127,86,127,41,128,85,128,27,129,84,129,0,130,79,130,0,131,72,131,0,132,71,132,0,133,70,134,0,135,100,135,59,0,100,24,60,25,100,25,61,26,100,26,62,27,100,27,63,28,100,28,64,29,100,42,44,43,100,43,45,44,100,44,46,45,100,45,50,46,100,46,57,47,100,47,69,48,100,48,70,49,100,49,75,50,100,50,84,51,100,51,85,52,100,52,92,53,100,53,93,54,100,54,83,55,89,55,94,55,100,55,82,56,88,56,94,56,100,56,81,57,87,57,94,57,100,57,77,58,86,58,95,58,100,58,76,59,86,59,96,59,100,59,75,60,86,60,97,60,100,60,71,61,86,61,98,61,100,69,90,63,98,63,70,62,86,62,69,63,86,63,59,64,63,64,68,64,86,64,58,65,86,65,53,66,86,66,52,67,86,67,51,68,86,68,46,69,86,69,45,70,90,70,94,70,100,70,45,71,60,71,82,71,89,71,95,71,100,74,51,72,58,72,52,73,57,73,53,74,58,74,54,75,100,75,55,76,100,77,55,78,62,78,75,78,100,78,55,79,59,79,87,79,100,79,88,80,100,80,89,81,100,81,90,82,100,82,53,83,75,83,91,83,100,83,54,84,87,84,92,84,100,84,55,85,87,85,93,85,100,95,59,86,86,86,60,87,78,87,60,88,66,88,59,89,64,89,58,90,63,91,58,92,64,92,58,93,73,93,58,94,78,94,58,95,83,95,58,96,100,97,59,98,100,98,60,99,100,99,71,100,100,100,82,101,100,101,92,102,100,103,91,104,100,129,90,130,100,130,89,131,100,131,88,132,100,132,85,133,100,133,78,134,100,134)
};b.prototype.openFirstChest=function(){this.firstChestOpened=true;this.foundGridOrEqItem(new QuestItemFound(this,"gridItemPossessedHeartPendant","You opened a chest and found a heart pendant!","You gain a heart pendant."))
};b.prototype.openFourthChest=function(){this.fourthChestOpened=true;this.foundChocolateBars(4);
this.getGame().getQuestLog().addMessage(new QuestLogMessage("You opened a chest and found four chocolate bars!",null,true))
};b.prototype.openSecondChest=function(){this.secondChestOpened=true;this.foundGridOrEqItem(new QuestItemFound(this,"gridItemPossessedFortressKey","You opened a chest and found the desert fortress key!","You gain the desert fortress key."))
};b.prototype.openThirdChest=function(){this.thirdChestOpened=true;this.foundGridOrEqItem(new QuestItemFound(this,"gridItemPossessedBlackMagicGrimoire","You opened a chest and found a grimoire!","You gain a black magic grimoire."))
};b.prototype.moveHorizontally=function(){var d=Keyboard.isKeyPressed("left");var c=Keyboard.isKeyPressed("right");
if(d&&!c){this.getGame().getPlayer().move(new Pos(-1,0));this.isGoingRight=false}else{if(c&&!d){this.getGame().getPlayer().move(new Pos(1,0));
this.isGoingRight=true}}};b.prototype.thePlayerWon=function(){if(this.getGame().getPlayer().getGlobalPosition().y>=134){return true
}return false};return b})(Quest);var TheSeaFloor=(function(){function a(d,c,b){if(b===void 0){b=null
}this.hasAPlant=false;this.type=d;this.height=c;if(b==null||b.getType()!=this.type){this.howManyFloorsOfTheSameTypeBefore=0
}else{this.howManyFloorsOfTheSameTypeBefore=b.howManyFloorsOfTheSameTypeBefore+1}if(Random.oneChanceOutOf(3)&&(b==null||b.getHasSpecialCharacter()==false)){this.hasSpecialCharacter=true;
this.specialCharacterHeight=Random.between(0,this.height-1);if(Random.oneChanceOutOf(4)){this.specialCharacter="^"
}else{this.specialCharacter="-"}}else{this.hasSpecialCharacter=false}}a.prototype.draw=function(c,b,d){switch(this.type){case TheSeaFloorType.NORMAL:c.drawString("_",d,b-this.height);
break;case TheSeaFloorType.GOING_DOWN:c.drawString("\\",d,b-this.height);break;case TheSeaFloorType.GOING_UP:c.drawString("/",d,b-this.height);
break}if(this.hasSpecialCharacter){c.drawString(this.specialCharacter,d,b-this.specialCharacterHeight)
}};a.prototype.getHasAPlant=function(){return this.hasAPlant};a.prototype.getHasSpecialCharacter=function(){return this.hasSpecialCharacter
};a.prototype.getHeight=function(){return this.height};a.prototype.getHowManyFloorsOfTheSameTypeBefore=function(){return this.howManyFloorsOfTheSameTypeBefore
};a.prototype.getType=function(){return this.type};a.prototype.setHasAPlant=function(b){this.hasAPlant=b
};return a})();var TheSeaFloorType;(function(a){a[a.NORMAL=0]="NORMAL";a[a.GOING_DOWN=1]="GOING_DOWN";
a[a.GOING_UP=2]="GOING_UP"})(TheSeaFloorType||(TheSeaFloorType={}));var TheSeaPattern=(function(){function a(b,c){this.theSea=b;
this.initialDistance=c}a.prototype.isPatternDone=function(){return false};a.prototype.run=function(c,b){};
a.prototype.getInitialDistance=function(){return this.initialDistance};a.prototype.getTheSea=function(){return this.theSea
};return a})();var TheSeaPattern_BigSharks=(function(b){__extends(a,b);function a(c,d){b.call(this,c,d)
}a.prototype.isPatternDone=function(){if(this.getTheSea().getDistance()>this.getInitialDistance()+125){return true
}return false};a.prototype.run=function(d,c){if(this.getTheSea().getDistance()%60==0){this.getTheSea().addBigShark(new Pos(c,Random.fromArray([2,6])))
}};return a})(TheSeaPattern);var TheSeaPattern_Boss0_Shapes=(function(a){__extends(b,a);
function b(c,d){a.call(this,c,d);this.fishes=[];this.fishesAdded=false;this.fishesAreMoving=true;
this.shapeType=Random.upTo(2)}b.prototype.isPatternDone=function(){if(this.getTheSea().getDistance()>this.getInitialDistance()+50){return true
}return false};b.prototype.run=function(d,c){if(this.fishesAdded==false&&this.getTheSea().getDistance()>this.getInitialDistance()+30){this.fishesAdded=true;
this.addShape(d,1);this.addShape(d,8);this.addShape(d,15);this.addShape(d+15,0);this.addShape(d+15,7);
this.addShape(d+15,14);this.addShape(d+30,1);this.addShape(d+30,8);this.addShape(d+30,15)
}this.handleFishesMovement()};b.prototype.addFish=function(c){if(c!=null){this.fishes.push(c)
}};b.prototype.addCross=function(c,d){this.addFish(this.getTheSea().addSmallestFish(new Pos(c,d+1)));
this.addFish(this.getTheSea().addSmallestFish(new Pos(c+3,d+2)));this.addFish(this.getTheSea().addSmallestFish(new Pos(c+6,d+3)));
this.addFish(this.getTheSea().addSmallestFish(new Pos(c+9,d+4)));this.addFish(this.getTheSea().addSmallestFish(new Pos(c,d+4)));
this.addFish(this.getTheSea().addSmallestFish(new Pos(c+3,d+3)));this.addFish(this.getTheSea().addSmallestFish(new Pos(c+6,d+2)));
this.addFish(this.getTheSea().addSmallestFish(new Pos(c+9,d+1)))};b.prototype.addLines=function(c,f){for(var e=c;
e<=c+9;e+=3){for(var d=f;d<=f+4;d+=2){this.addFish(this.getTheSea().addSmallestFish(new Pos(e,d)))
}}};b.prototype.addShape=function(c,d){switch(this.shapeType){case 0:this.addSquare(c,d);
break;case 1:this.addLines(c,d);break;case 2:this.addCross(c,d);break}};b.prototype.addSquare=function(c,f){for(var e=c;
e<=c+9;e+=3){this.addFish(this.getTheSea().addSmallestFish(new Pos(e,f)));this.addFish(this.getTheSea().addSmallestFish(new Pos(e,f+5)))
}for(var d=f;d<=f+4;d++){this.addFish(this.getTheSea().addSmallestFish(new Pos(c,d)));
this.addFish(this.getTheSea().addSmallestFish(new Pos(c+9,d)))}};b.prototype.handleFishesMovement=function(){if(this.fishesAreMoving==true&&this.getTheSea().getLastPlayerMovement().x==0&&this.getTheSea().getGame().getPlayer().getGlobalPosition().y>=20){this.fishesAreMoving=false;
for(var c=0;c<this.fishes.length;c++){this.fishes[c].setQuestEntityMovement(new QuestEntityMovement(new Pos(0,0)))
}}else{if(this.fishesAreMoving==false&&(this.getTheSea().getLastPlayerMovement().x>0||this.getTheSea().getGame().getPlayer().getGlobalPosition().y<20)){this.fishesAreMoving=true;
for(var c=0;c<this.fishes.length;c++){this.fishes[c].setQuestEntityMovement(new QuestEntityMovement(new Pos(-1,0)))
}}}};return b})(TheSeaPattern);var TheSeaPattern_Boss1_Seahorses=(function(b){__extends(a,b);
function a(c,d){b.call(this,c,d);this.seahorses=[];this.seahorsesAdded=false;this.seaHorsesStopped=false;
this.seahorseWandering=null;this.seahorseWanderingIsGoingUp=false;this.seahorseFollowingPlayer=null
}a.prototype.addSeahorse=function(c){if(c!=null){this.seahorses.push(c);return c}return null
};a.prototype.isPatternDone=function(){if(this.seahorsesAdded==false){return false
}for(var c=0;c<this.seahorses.length;c++){if(this.seahorses[c].getDead()==false){return false
}}return true};a.prototype.run=function(d,c){if(this.seahorsesAdded==false&&this.getTheSea().getDistance()>this.getInitialDistance()+30){this.seahorsesAdded=true;
this.addSeahorse(this.getTheSea().addSeahorse(new Pos(d,2),75));this.addSeahorse(this.getTheSea().addSeahorse(new Pos(d,12),75));
this.seahorseWandering=this.addSeahorse(this.getTheSea().addSeahorse(new Pos(d+7,10),81));
this.seahorseFollowingPlayer=this.addSeahorse(this.getTheSea().addSeahorse(new Pos(d+14,10),87));
this.addSeahorse(this.getTheSea().addSeahorse(new Pos(d+21,7),93));this.addSeahorse(this.getTheSea().addSeahorse(new Pos(d+21,17),93))
}if(this.seahorsesAdded==true&&this.seaHorsesStopped==false){var f=500;for(var e=0;
e<this.seahorses.length;e++){if(this.seahorses[e].getGlobalPosition().x<f){f=this.seahorses[e].getGlobalPosition().x
}}if(f-this.getTheSea().getGame().getPlayer().getGlobalPosition().x<=75){this.seaHorsesStopped=true;
for(var e=0;e<this.seahorses.length;e++){this.seahorses[e].getQuestEntityMovement().setOffset(new Pos(0,0))
}}}if(this.seaHorsesStopped){for(var e=0;e<this.seahorses.length;e++){this.seahorses[e].tryToGoToIntendedXPosition(this.getTheSea().getGame().getPlayer().getGlobalPosition().x)
}}if(this.seahorseWandering!=null){if(this.seahorseWanderingIsGoingUp){this.seahorseWandering.getQuestEntityMovement().getOffset().y=-1;
if(this.seahorseWandering.getGlobalPosition().y<=0){this.seahorseWanderingIsGoingUp=false
}}else{this.seahorseWandering.getQuestEntityMovement().getOffset().y=1;if(this.seahorseWandering.getGlobalPosition().y>=16){this.seahorseWanderingIsGoingUp=true
}}}if(this.seahorseFollowingPlayer!=null){this.seahorseFollowingPlayer.getQuestEntityMovement().getOffset().y=0;
if(this.getTheSea().getGame().getPlayer().getGlobalPosition().y<this.seahorseFollowingPlayer.getGlobalPosition().y-1){if(this.seahorseFollowingPlayer.getGlobalPosition().y>0){this.seahorseFollowingPlayer.getQuestEntityMovement().getOffset().y=-1
}}else{if(this.getTheSea().getGame().getPlayer().getGlobalPosition().y>this.seahorseFollowingPlayer.getGlobalPosition().y-1){if(this.seahorseFollowingPlayer.getGlobalPosition().y<17){this.seahorseFollowingPlayer.getQuestEntityMovement().getOffset().y=+1
}}}}};return a})(TheSeaPattern);var TheSeaPattern_JellyFishStorm=(function(b){__extends(a,b);
function a(c,d){b.call(this,c,d)}a.prototype.isPatternDone=function(){if(this.getTheSea().getDistance()>this.getInitialDistance()+100){return true
}return false};a.prototype.run=function(d,c){if(Random.oneChanceOutOf(10)){this.getTheSea().addJellyFish(new Pos(Random.between(d,c),Random.between(0,this.getTheSea().getRealQuestSize().y-this.getTheSea().getFloorMaxHeight()-6)))
}};return a})(TheSeaPattern);var TheSeaPatternLevel=(function(){function a(b){this.howManyPatterns=0;
this.theSea=b}a.prototype.getNextLevel=function(){return new a(this.theSea)};a.prototype.getPattern=function(b){return new TheSeaPattern(this.theSea,b)
};a.prototype.increaseHowManyPatterns=function(){this.howManyPatterns+=1};a.prototype.isLevelDone=function(){return false
};a.prototype.getHowManyPatterns=function(){return this.howManyPatterns};a.prototype.getTheSea=function(){return this.theSea
};return a})();var TheSeaPatternLevel_Boss0=(function(b){__extends(a,b);function a(c){b.call(this,c)
}a.prototype.getNextLevel=function(){return new TheSeaPatternLevel_Level1(this.getTheSea())
};a.prototype.getPattern=function(c){this.increaseHowManyPatterns();return new TheSeaPattern_Boss0_Shapes(this.getTheSea(),c)
};a.prototype.isLevelDone=function(){if(this.getHowManyPatterns()>=1){return true
}return false};return a})(TheSeaPatternLevel);var TheSeaPatternLevel_Boss1=(function(a){__extends(b,a);
function b(c){a.call(this,c)}b.prototype.getNextLevel=function(){return new TheSeaPatternLevel_Level2(this.getTheSea())
};b.prototype.getPattern=function(c){this.increaseHowManyPatterns();return new TheSeaPattern_Boss1_Seahorses(this.getTheSea(),c)
};b.prototype.isLevelDone=function(){if(this.getHowManyPatterns()>=1){return true
}return false};return b})(TheSeaPatternLevel);var TheSeaPatternLevel_Level0=(function(a){__extends(b,a);
function b(c){a.call(this,c)}b.prototype.getNextLevel=function(){return new TheSeaPatternLevel_Boss0(this.getTheSea())
};b.prototype.getPattern=function(c){this.increaseHowManyPatterns();switch(Random.upTo(2)){case 0:return new TheSeaPattern_MaybeOneSmallestFish(this.getTheSea(),c);
break;case 1:return new TheSeaPattern_OneSmallestFish(this.getTheSea(),c);break;case 2:return new TheSeaPattern_MaybeOneMediumFish(this.getTheSea(),c);
break}};b.prototype.isLevelDone=function(){if(this.getHowManyPatterns()>=2){return true
}return false};return b})(TheSeaPatternLevel);var TheSeaPatternLevel_Level1=(function(a){__extends(b,a);
function b(c){a.call(this,c)}b.prototype.getNextLevel=function(){return new TheSeaPatternLevel_Boss1(this.getTheSea())
};b.prototype.getPattern=function(c){this.increaseHowManyPatterns();switch(Random.upTo(1)){case 0:return new TheSeaPattern_LotOfMiniSharks(this.getTheSea(),c);
break;case 1:return new TheSeaPattern_JellyFishStorm(this.getTheSea(),c);break}};
b.prototype.isLevelDone=function(){if(this.getHowManyPatterns()>=2){return true}return false
};return b})(TheSeaPatternLevel);var TheSeaPatternLevel_Level2=(function(b){__extends(a,b);
function a(c){b.call(this,c)}a.prototype.getNextLevel=function(){return new a(this.getTheSea())
};a.prototype.getPattern=function(c){this.increaseHowManyPatterns();if(this.getHowManyPatterns()==1){return new TheSeaPattern_BigSharks(this.getTheSea(),c)
}else{return new TheSeaPattern_SeaSnakesForever(this.getTheSea(),c)}};a.prototype.isLevelDone=function(){return false
};return a})(TheSeaPatternLevel);var TheSeaPattern_LotOfMiniSharks=(function(b){__extends(a,b);
function a(c,d){b.call(this,c,d);this.sharksAdded=false}a.prototype.isPatternDone=function(){if(this.getTheSea().getDistance()>this.getInitialDistance()+60){return true
}return false};a.prototype.run=function(d,c){if(this.getTheSea().getDistance()>this.getInitialDistance()+30&&this.sharksAdded==false){this.sharksAdded=true;
this.getTheSea().addMiniShark(new Pos(d+Random.upTo(6),2));this.getTheSea().addMiniShark(new Pos(d+Random.upTo(6),8));
this.getTheSea().addMiniShark(new Pos(d+Random.upTo(6),14))}};return a})(TheSeaPattern);
var TheSeaPattern_MaybeOneMediumFish=(function(b){__extends(a,b);function a(c,d){b.call(this,c,d)
}a.prototype.isPatternDone=function(){if(this.getTheSea().getDistance()>this.getInitialDistance()+100){return true
}return false};a.prototype.run=function(d,c){if(Random.oneChanceOutOf(5)){this.getTheSea().addMediumFish(new Pos(Random.between(d,c),Random.between(0,this.getTheSea().getRealQuestSize().y-this.getTheSea().getFloorMaxHeight()-4)))
}};return a})(TheSeaPattern);var TheSeaPattern_MaybeOneSmallestFish=(function(b){__extends(a,b);
function a(c,d){b.call(this,c,d)}a.prototype.isPatternDone=function(){if(this.getTheSea().getDistance()>this.getInitialDistance()+100){return true
}return false};a.prototype.run=function(d,c){if(Random.flipACoin()){this.getTheSea().addSmallestFish(new Pos(Random.between(d,c),Random.between(0,this.getTheSea().getRealQuestSize().y-this.getTheSea().getFloorMaxHeight()-2)))
}};return a})(TheSeaPattern);var TheSeaPattern_OneSmallestFish=(function(a){__extends(b,a);
function b(c,d){a.call(this,c,d)}b.prototype.isPatternDone=function(){if(this.getTheSea().getDistance()>this.getInitialDistance()+100){return true
}return false};b.prototype.run=function(d,c){this.getTheSea().addSmallestFish(new Pos(Random.between(d,c),Random.between(0,this.getTheSea().getRealQuestSize().y-this.getTheSea().getFloorMaxHeight()-2)))
};return b})(TheSeaPattern);var TheSeaPattern_SeaSnakesForever=(function(a){__extends(b,a);
function b(c,d){a.call(this,c,d);this.addedRedSharkFin=false;this.addedGreenSharkFin=false;
this.addedPurpleSharkFin=false;this.nextSnakeIn=0;this.nextSharkIn=Random.between(0,50)
}b.prototype.isPatternDone=function(){return false};b.prototype.run=function(e,d){this.nextSnakeIn-=1;
if(this.nextSnakeIn<=0){this.getTheSea().addSeaSnake(new Pos(d,Random.between(0,this.getTheSea().getRealQuestSize().y-this.getTheSea().getFloorMaxHeight()-12)));
this.nextSnakeIn=85-Math.ceil((1-Math.exp(-(this.getTheSea().getDistance()-this.getInitialDistance())/1500))*83)
}this.nextSharkIn-=1;if(this.nextSharkIn<=0){var c=this.getTheSea().addBigShark(new Pos(d,Random.between(0,this.getTheSea().getRealQuestSize().y-this.getTheSea().getFloorMaxHeight()-10)));
if(c!=null){if(Saving.loadBool("gridItemPossessedRedSharkFin")==false&&this.addedRedSharkFin==false&&this.getTheSea().getDistance()-this.getInitialDistance()>150){c.hasFin(BigSharkFinType.RED);
this.addedRedSharkFin=true}else{if(Saving.loadBool("gridItemPossessedGreenSharkFin")==false&&this.addedGreenSharkFin==false&&this.getTheSea().getDistance()-this.getInitialDistance()>700){c.hasFin(BigSharkFinType.GREEN);
this.addedGreenSharkFin=true}else{if(Saving.loadBool("gridItemPossessedPurpleSharkFin")==false&&this.addedPurpleSharkFin==false&&this.getTheSea().getDistance()-this.getInitialDistance()>2500){c.hasFin(BigSharkFinType.PURPLE);
this.addedPurpleSharkFin=true}}}}this.nextSharkIn=60-Math.ceil((1-Math.exp(-(this.getTheSea().getDistance()-this.getInitialDistance())/1500))*55)
}};return b})(TheSeaPattern);var TheSea=(function(b){__extends(a,b);function a(c){b.call(this,c,"You can move with the down and up arrow keys!");
this.floors=[];this.generationProjection=10;this.distance=0;this.floorMinHeight=3;
this.floorMaxHeight=8;this.currentPattern=null;this.currentPatternLevel=null;this.lastPlayerMovement=new Pos(0,0);
this.spongeGenerated=false;this.shellPowderGenerated=false;this.resizeQuest(100,30);
this.addPlayerCollisionBoxes(true,false,true,true);this.setGravityDisabled(true);
this.setWormsLikeDisabled(true);this.getGame().getPlayer().loadMediumCharacter(this);
this.getGame().getPlayer().setGlobalPosition(new Pos(0,5));this.configPlayerOrClone(this.getGame().getPlayer());
this.addEntity(this.getGame().getPlayer());for(var d=0;d<=99+this.generationProjection;
d++){this.floors.push(null)}this.generate(0,99+this.generationProjection);this.getGame().getQuestLog().addMessage(new QuestLogMessage("You jump into the sea! You know you could find precious hidden treasures in the depths..."))
}a.prototype.willBeDisplayed=function(){b.prototype.willBeDisplayed.call(this);this.getGame().addHotkey(new Hotkey("up",null));
this.getGame().addHotkey(new Hotkey("down",null))};a.prototype.addBigShark=function(d){var c=new BigShark(this,d);
c.setHealthBar(new QuestEntityHealthBar(c,new Pos(47,1)));if(this.addEntity(c)){return c
}return null};a.prototype.addJellyFish=function(d){var c=new JellyFish(this,d);c.setHealthBar(new QuestEntityHealthBar(c,new Pos(6,1),new Pos(0,0)));
if(this.addEntity(c)){return c}return null};a.prototype.addMediumFish=function(d){var c=new MediumFish(this,d);
c.setHealthBar(new QuestEntityHealthBar(c,new Pos(8,1),new Pos(0,0)));if(this.addEntity(c)){return c
}return null};a.prototype.addMiniShark=function(d){var c=new MiniShark(this,d);c.setHealthBar(new QuestEntityHealthBar(c,new Pos(19,1)));
if(this.addEntity(c)){return c}return null};a.prototype.addSeahorse=function(e,d){var c=new Seahorse(this,e,d);
c.setHealthBar(new QuestEntityHealthBar(c,new Pos(4,1)));if(this.addEntity(c)){return c
}return null};a.prototype.addSeaSnake=function(d){var c=new SeaSnake(this,d);if(this.addEntity(c)){return c
}return null};a.prototype.addSmallestFish=function(d){var c=new SmallestFish(this,d);
c.setHealthBar(new QuestEntityHealthBar(c,new Pos(3,1)));if(this.addEntity(c)){return c
}return null};a.prototype.castJump=function(){};a.prototype.castPlayerAcidRain=function(){b.prototype.castPlayerAcidRain.call(this,null,null,0,100)
};a.prototype.castPlayerTeleport=function(){b.prototype.castPlayerTeleport.call(this,new Pos(0,0),new Pos(0,this.getRealQuestSize().y-1))
};a.prototype.configPlayerOrClone=function(c){c.setQuestEntityMovement(new QuestEntityMovement(new Pos(1,0)));
c.getQuestEntityMovement().setGravity(false);c.getQuestEntityMovement().setWormsLike(false)
};a.prototype.endQuest=function(c){var d;if(c){switch(Random.between(0,8)){case 0:d="by jumping on a jellyfish";
break;case 1:d="by hanging onto a sea turtle";break;case 2:d="by following a dolphin";
break;case 3:d="(you don't know how)";break;case 4:d="by hanging onto a shark's fin";
break;case 5:d="by following a whale";break;case 6:d="by following a squid";break;
case 7:d="by asking your way to a shrimp";break;case 8:d="thanks to some updrafts";
break}this.getGame().getQuestLog().addMessage(new QuestLogMessage("You almost died in the sea but managed to get to the surface in time "+d+"."))
}else{this.getGame().getQuestLog().addMessage(new QuestLogMessage("You died in the sea."))
}b.prototype.endQuest.call(this,c)};a.prototype.getLeftLimit=function(){return 100
};a.prototype.update=function(){if(this.getQuestEnded()==false){if(this.getGame().getPlayer().shouldDie()){this.endQuest(true);
return}this.handlePatterns(100,115);this.moveVertically();this.updateEntities();this.globalScrolling()
}this.preDraw();this.drawSea();this.drawEntities();this.drawAroundQuest();this.addExitQuestButton(new CallbackCollection(this.endQuest.bind(this,true),this.getGame().goToMainMap.bind(this.getGame())),"buttonExitQuestKeeping");
this.postDraw()};a.prototype.getDistance=function(){return this.distance};a.prototype.getFloorMaxHeight=function(){return this.floorMaxHeight
};a.prototype.getFloorMinHeight=function(){return this.floorMinHeight};a.prototype.getLastPlayerMovement=function(){return this.lastPlayerMovement
};a.prototype.getRightLimit=function(){return 70};a.prototype.addFloor=function(e,f,d,c){if(c===void 0){c=null
}this.floors[e]=new TheSeaFloor(f,d,c);if(f==TheSeaFloorType.NORMAL){this.addFloorCollisionBox(new Pos(e,this.getRealQuestSize().y-(d-1)),new Pos(1,d-1))
}else{this.addFloorCollisionBox(new Pos(e,this.getRealQuestSize().y-d),new Pos(1,d))
}};a.prototype.addFloorCollisionBox=function(e,d){var c=new Wall(this,e);c.addBox(new Pos(0,0),d);
this.addEntity(c)};a.prototype.drawFloors=function(){for(var c=0;c<=99;c++){if(this.floors[c]!=null){this.floors[c].draw(this.getRenderArea(),this.getRealQuestPosition().y+this.getRealQuestSize().y,c)
}}};a.prototype.drawSea=function(){this.drawFloors()};a.prototype.generate=function(d,c){this.generateFloors(d,c);
this.generateShellPowder(d,c);this.generateSponge(d,c);this.generatePlants(d,c)};
a.prototype.generateFloors=function(d,c){var f;for(var e=d;e<=c;e++){if(e==0){this.addFloor(e,TheSeaFloorType.NORMAL,Random.between(this.floorMinHeight,this.floorMaxHeight))
}else{f=null;if(Random.oneChanceOutOf(15-this.floors[e-1].getHowManyFloorsOfTheSameTypeBefore())==false&&((this.floors[e-1].getType()==TheSeaFloorType.NORMAL)||(this.floors[e-1].getType()==TheSeaFloorType.GOING_DOWN&&this.floors[e-1].getHeight()>this.floorMinHeight)||(this.floors[e-1].getType()==TheSeaFloorType.GOING_UP&&this.floors[e-1].getHeight()<this.floorMaxHeight))){f=this.floors[e-1].getType()
}else{if(this.floors[e-1].getType()==TheSeaFloorType.NORMAL){if(this.floors[e-1].getHeight()==this.floorMinHeight){f=TheSeaFloorType.GOING_UP
}else{if(this.floors[e-1].getHeight()>=this.floorMaxHeight-1){f=TheSeaFloorType.GOING_DOWN
}else{if(Random.flipACoin()){f=TheSeaFloorType.GOING_UP}else{f=TheSeaFloorType.GOING_DOWN
}}}}else{f=TheSeaFloorType.NORMAL}}switch(f){case TheSeaFloorType.NORMAL:if(this.floors[e-1].getType()==TheSeaFloorType.GOING_UP){this.addFloor(e,TheSeaFloorType.NORMAL,this.floors[e-1].getHeight()+1,this.floors[e-1])
}else{this.addFloor(e,TheSeaFloorType.NORMAL,this.floors[e-1].getHeight(),this.floors[e-1])
}break;case TheSeaFloorType.GOING_DOWN:this.addFloor(e,TheSeaFloorType.GOING_DOWN,this.floors[e-1].getHeight()-1,this.floors[e-1]);
break;case TheSeaFloorType.GOING_UP:if(this.floors[e-1].getType()==TheSeaFloorType.NORMAL){this.addFloor(e,TheSeaFloorType.GOING_UP,this.floors[e-1].getHeight(),this.floors[e-1])
}else{this.addFloor(e,TheSeaFloorType.GOING_UP,this.floors[e-1].getHeight()+1,this.floors[e-1])
}break}}}};a.prototype.generatePlants=function(f,c){var h=0;var e=10;var k;for(var g=f;
g<=c;g++){if(Random.oneChanceOutOf(3)&&g>=4&&this.floors[g].getType()==TheSeaFloorType.NORMAL&&this.floors[g].getHowManyFloorsOfTheSameTypeBefore()>=4){k=false;
for(var d=g-4;d<=g;d++){if(this.floors[d].getHasAPlant()==true){k=true;break}}if(k==false){this.addEntity(new Plant(this,new Pos(g-4,this.getRealQuestSize().y-this.floors[g].getHeight()),h,e));
for(var d=g-4;d<=g;d++){this.floors[d].setHasAPlant(true)}}}}};a.prototype.generateShellPowder=function(e,c){if(Saving.loadBool("gridItemPossessedShellPowder")==false&&this.shellPowderGenerated==false&&this.distance>=500){for(var f=e;
f<=c;f++){if(f>=6&&this.floors[f].getType()==TheSeaFloorType.NORMAL&&this.floors[f].getHowManyFloorsOfTheSameTypeBefore()>=6){for(var d=f-6;
d<=f;d++){if(this.floors[d].getHasAPlant()==true){return}}this.shellPowderGenerated=true;
this.addEntity(new ShellPowder(this,new Pos(f-6,this.getRealQuestSize().y-this.floors[f].getHeight())));
this.getLastEntity().setHealthBar(new QuestEntityHealthBar(this.getLastEntity(),new Pos(6,1)));
for(var d=f-6;d<=f;d++){this.floors[d].setHasAPlant(true)}}}}};a.prototype.generateSponge=function(e,c){if(Saving.loadBool("gridItemPossessedSponge")==false&&this.spongeGenerated==false&&this.distance>=793){for(var f=e;
f<=c;f++){if(f>=6&&this.floors[f].getType()==TheSeaFloorType.NORMAL&&this.floors[f].getHowManyFloorsOfTheSameTypeBefore()>=6){for(var d=f-6;
d<=f;d++){if(this.floors[d].getHasAPlant()==true){return}}this.spongeGenerated=true;
this.addEntity(new Sponge(this,new Pos(f-6,this.getRealQuestSize().y-this.floors[f].getHeight())));
this.getLastEntity().setHealthBar(new QuestEntityHealthBar(this.getLastEntity(),new Pos(6,1)));
for(var d=f-6;d<=f;d++){this.floors[d].setHasAPlant(true)}}}}};a.prototype.globalScrolling=function(){var c=-(this.getGame().getPlayer().getCharacterType()==PlayerCharacterType.MEDIUM?this.getGame().getPlayer().getGlobalPosition().x:this.getGame().getPlayer().getGlobalPosition().x-2);
if(c<0){this.lastPlayerMovement.x=-c;this.distance+=-c;this.forceMovingAllEntities(new Pos(c,0));
this.scrollFloor(-c);this.generate(100+c+this.generationProjection,99+this.generationProjection)
}else{this.lastPlayerMovement.x=0}};a.prototype.handlePatterns=function(d,c){if(this.currentPattern==null||this.currentPattern.isPatternDone()){if(this.currentPatternLevel==null){this.currentPatternLevel=new TheSeaPatternLevel_Level0(this)
}else{if(this.currentPatternLevel.isLevelDone()){this.currentPatternLevel=this.currentPatternLevel.getNextLevel()
}}this.currentPattern=this.currentPatternLevel.getPattern(this.distance)}this.currentPattern.run(d,c)
};a.prototype.moveVertically=function(){var c=Keyboard.isKeyPressed("up");var d=Keyboard.isKeyPressed("down");
if(c&&!d){this.getGame().getPlayer().move(new Pos(0,-1));this.lastPlayerMovement.y=-1
}else{if(d&&!c){this.getGame().getPlayer().move(new Pos(0,1));this.lastPlayerMovement.y=1
}}};a.prototype.scrollFloor=function(d){for(var c=d;c<=99+this.generationProjection;
c++){this.floors[c-d]=this.floors[c]}};return a})(Quest);var ThirdHouse=(function(a){__extends(b,a);
function b(c){a.call(this,c);this.renderArea=new RenderArea();this.gameRunning=null;
this.renderArea.resizeFromArray(Database.getAscii("places/village/thirdHouse"),0,3);
this.update()}b.prototype.getRenderArea=function(){return this.renderArea};b.prototype.willBeDisplayed=function(){this.getGame().getQuestCallbackCollection().addCallback(this.runGame.bind(this));
this.getGame().addHotkey(new Hotkey("up",new CallbackCollection(this.pressedUpButton.bind(this))));
this.getGame().addHotkey(new Hotkey("down",new CallbackCollection(this.pressedDownButton.bind(this))));
this.getGame().addHotkey(new Hotkey("space",new CallbackCollection(this.pressedSpaceButton.bind(this))))
};b.prototype.addControls=function(c,d){if(this.gameRunning!=null){this.renderArea.addAsciiButton(c,c+4,d,"thirdHouseUpButton");
this.renderArea.addLinkCall(".thirdHouseUpButton",new CallbackCollection(this.pressedUpButton.bind(this)));
this.renderArea.addAsciiButton(c+7,c+25,d+1,"thirdHouseSpaceButton");this.renderArea.addLinkCall(".thirdHouseSpaceButton",new CallbackCollection(this.pressedSpaceButton.bind(this)));
this.renderArea.addAsciiButton(c+28,c+34,d,"thirdHouseDownButton");this.renderArea.addLinkCall(".thirdHouseDownButton",new CallbackCollection(this.pressedDownButton.bind(this)))
}};b.prototype.addInsertCandiesButtons=function(c,d){this.renderArea.addAsciiButton(c,c+4,d,"thirdHouseInsert10CandiesButton");
this.renderArea.addLinkCall(".thirdHouseInsert10CandiesButton",new CallbackCollection(this.insert10Candies.bind(this)));
this.renderArea.addAsciiButton(c,c+4,d+2,"thirdHouseInsert1000CandiesButton");this.renderArea.addLinkCall(".thirdHouseInsert1000CandiesButton",new CallbackCollection(this.insert1000Candies.bind(this)))
};b.prototype.insert10Candies=function(){if(this.getGame().getCandies().getCurrent()>=10){this.getGame().getCandies().add(-10);
this.gameRunning=new SuperRPG(this)}};b.prototype.insert1000Candies=function(){if(this.getGame().getCandies().getCurrent()>=1000){this.getGame().getCandies().add(-1000);
this.gameRunning=new GalacticWars(this)}};b.prototype.pressedDownButton=function(){if(this.gameRunning!=null){this.gameRunning.pressedDownButton()
}};b.prototype.pressedSpaceButton=function(){if(this.gameRunning!=null){this.gameRunning.pressedSpaceButton()
}};b.prototype.pressedUpButton=function(){if(this.gameRunning!=null){this.gameRunning.pressedUpButton()
}};b.prototype.runGame=function(){if(this.gameRunning!=null){if(this.gameRunning.run()==true){this.gameRunning=null;
this.update();this.getGame().updatePlace()}else{this.update();this.renderArea.drawArea(this.gameRunning.getRenderArea(),19,10);
this.getGame().updatePlace()}}};b.prototype.update=function(){this.renderArea.resetAllButSize();
this.addBackToTheVillageButton(this.renderArea,"thirdHouseBackToTheVillageButton");
this.renderArea.drawArray(Database.getAscii("places/village/thirdHouse"),0,3);this.addInsertCandiesButtons(25,28);
this.addControls(29,24)};return b})(House);var Treasure=(function(a){__extends(b,a);
function b(c){a.call(this,c);this.renderArea=new RenderArea();this.renderArea.resizeFromArray(Database.getAscii("places/treasure"),57,3);
this.update()}b.prototype.getRenderArea=function(){return this.renderArea};b.prototype.dig=function(){Saving.saveBool("TheCavePattern_TreasureMapFoundTreasure",true);
this.getGame().getChocolateBars().add(3);this.update();this.getGame().updatePlace()
};b.prototype.update=function(){this.renderArea.resetAllButSize();this.addBackToMainMapButton(this.renderArea,"treasureBackToTheMapButton");
this.renderArea.drawArray(Database.getAscii("places/treasure"),28,3);if(Saving.loadBool("TheCavePattern_TreasureMapFoundTreasure")==false){this.renderArea.addAsciiRealButton(Database.getText("treasureButtonDig"),49,14,"treasureButton",Database.getTranslatedText("treasureButtonDig"),true,-1,null,false);
this.renderArea.addLinkCall(".treasureButton",new CallbackCollection(this.dig.bind(this)))
}else{this.renderArea.drawString(Database.getText("treasureButtonYouFound"),49,14);
this.renderArea.drawString(Database.getTranslatedText("treasureButtonYouFound"),49,15,true)
}};return b})(Place);var TreeSpirit=(function(a){__extends(b,a);function b(c,e,d){a.call(this,c,e,new Naming("A tree spirit","a tree spirit"),new RenderArea(5,5),new Pos(0,0),new CollisionBoxCollection(new CollisionBox(this,new Pos(0,1),new Pos(5,2)),new CollisionBox(this,new Pos(1,3),new Pos(3,2))),new QuestEntityMovement());
this.groundYPosition=d;this.maxAmmunition=5;this.ammunition=5;this.ammunitionTimer=0;
this.magicSpineTimer=0;this.getRenderArea().drawArray(Database.getAscii("places/quests/forest/treeSpirit"));
this.setTransparency(new RenderTransparency(" "));this.getQuestEntityMovement().setGravity(true);
this.setDestructible(true);this.setMaxHp(100);this.setHp(100);this.addQuestEntityWeapon(new QuestEntityWeapon(this.getQuest(),this,new Naming("Spines","spines"),new CollisionBoxCollection(new CollisionBox(this,new Pos(-1,0),new Pos(7,6))),2));
this.getLastQuestEntityWeapon().getCloseCombatDelay().setFixedDelay(1)}b.prototype.update=function(){var c=this.getGlobalPosition().plus(new Pos(2,0)).getDistance(this.getQuest().getGame().getPlayer().getGlobalPosition());
if(this.ammunitionTimer<=0){if(this.ammunition<this.maxAmmunition){this.ammunition+=1
}this.ammunitionTimer=20}else{this.ammunitionTimer-=1}if(this.magicSpineTimer>0){this.magicSpineTimer-=1
}this.getQuestEntityMovement().setOffset(new Pos((c.x>0?-1:1),0));if(this.getQuest().getGame().getPlayer().getGlobalPosition().y<this.groundYPosition){if(this.magicSpineTimer<=0){if(this.shootMagicSpine((c.x>0?true:false))){this.ammunition-=1;
this.magicSpineTimer=12}}}a.prototype.update.call(this)};b.prototype.willDie=function(){this.getQuest().getGame().getQuestLog().addMessage(new QuestLogMessage(this.getDeathMessage()+" (and found "+Algo.pluralFormat(this.getQuest().foundCandies(100+50*Random.upTo(10))," candy"," candies")+")",this.getQuest().getCandiesFoundMessage()))
};b.prototype.shootMagicSpine=function(c){var d=new Fireball(this.getQuest(),this.getGlobalPosition().plus(new Pos((c?-3:5),2)),new Naming("A magical spine","a magical spine"),new Color(ColorType.TREE_SPIRIT_MAGIC_SPINE),new Pos(3,1),150,this.getAndPossiblyCreateSpellCastingDamageReason(new Naming("A magical spine","a magical spine")));
d.setTargetTypeNoTarget(new Pos((c?-2:2),0));return this.getQuest().addEntity(d)};
return b})(QuestEntity);var TribalSpear=(function(b){__extends(a,b);function a(){b.call(this,"eqItemWeaponTribalSpear","eqItemWeaponTribalSpearName","eqItemWeaponTribalSpearDescription","eqItems/weapons/tribalSpear")
}a.prototype.getQuestEntityWeapon=function(c,e){var d=new QuestEntityWeapon(c,e,new Naming("A tribal spear","a tribal spear"),e.getClassicCollisionBoxCollection(),8);
d.getCloseCombatDelay().setFixedDelay(2);return d};return a})(EqItem);var TripodCamel=(function(b){__extends(a,b);
function a(c,d){b.call(this,c,d,new Naming("A tripod camel","a tripod camel"),new RenderArea(7,2),new Pos(0,0),new CollisionBoxCollection(new CollisionBox(this,new Pos(0,0),new Pos(6,1)),new CollisionBox(this,new Pos(2,1),new Pos(5,1))),new QuestEntityMovement());
this.getQuestEntityMovement().setGravity(true);this.setDestructible(true);this.setMaxHp(7);
this.setHp(7);if(Random.flipACoin()){this.getRenderArea().drawArray(Database.getAscii("places/quests/desert/tripodCamel1"))
}else{this.getRenderArea().drawArray(Database.getAscii("places/quests/desert/tripodCamel2"))
}this.setTransparency(new RenderTransparency(" "));this.addQuestEntityWeapon(new QuestEntityWeapon(this.getQuest(),this,new Naming("Its long neck","its long neck"),new CollisionBoxCollection(new CollisionBox(this,new Pos(-1,0),new Pos(3,3))),5));
this.getLastQuestEntityWeapon().getCloseCombatDelay().setBetweenDelay(6,8)}a.prototype.willDie=function(){this.getQuest().getGame().getQuestLog().addMessage(new QuestLogMessage(this.getDeathMessage()+" (and found "+Algo.pluralFormat(this.getQuest().foundCandies(20+Random.upTo(12))," candy"," candies")+")",this.getQuest().getCandiesFoundMessage()))
};return a})(QuestEntity);var TrollBludgeon=(function(a){__extends(b,a);function b(){a.call(this,"eqItemWeaponTrollBludgeon","eqItemWeaponTrollBludgeonName","eqItemWeaponTrollBludgeonDescription","eqItems/weapons/trollBludgeon")
}b.prototype.getQuestEntityWeapon=function(c,e){var d=new PlayerBludgeon(c,e,new Naming("The troll's bludgeon","the troll's bludgeon"),e.getClassicCollisionBoxCollection());
d.getCloseCombatDelay().setFixedDelay(6);return d};return b})(EqItem);var Troll=(function(b){__extends(a,b);
function a(c,d){b.call(this,c,d,new Naming("A troll","a troll"),new RenderArea(15,10),new Pos(0,0),new CollisionBoxCollection(new CollisionBox(this,new Pos(11,0),new Pos(2,1)),new CollisionBox(this,new Pos(4,1),new Pos(3,3)),new CollisionBox(this,new Pos(9,1),new Pos(6,2)),new CollisionBox(this,new Pos(0,4),new Pos(8,4)),new CollisionBox(this,new Pos(2,8),new Pos(5,2)),new CollisionBox(this,new Pos(8,4),new Pos(4,2)),new CollisionBox(this,new Pos(11,3),new Pos(2,4))),new QuestEntityMovement());
this.getQuestEntityMovement().setGravity(true);this.setDestructible(true);this.setMaxHp(80);
this.setHp(80);this.getRenderArea().drawArray(Database.getAscii("places/quests/bridge/troll"));
this.setTransparency(new RenderTransparency(" "));this.addQuestEntityWeapon(new Bludgeon(this.getQuest(),this,new Naming("Its bludgeon","its bludgeon"),new CollisionBoxCollection(new CollisionBox(this,new Pos(-1,-1),new Pos(17,11))),15));
this.getLastQuestEntityWeapon().getCloseCombatDelay().setFixedDelay(6)}a.prototype.draw=function(c){b.prototype.draw.call(this,c);
c.addTag(new RenderTagLt(this.getQuest().getRealQuestPosition().x+this.getGlobalPosition().x+this.getRenderAreaPosition().x+9),this.getQuest().getRealQuestPosition().y+this.getGlobalPosition().y+this.getRenderAreaPosition().y+1)
};a.prototype.willDie=function(){this.getQuest().getGame().getQuestLog().addMessage(new QuestLogMessage(this.getDeathMessage()+" (and found "+Algo.pluralFormat(this.getQuest().foundCandies(500)," candy"," candies")+")",this.getQuest().getCandiesFoundMessage()));
this.getQuest().foundGridOrEqItem(new QuestItemFound(this.getQuest(),"eqItemWeaponTrollBludgeon","You picked up the troll's bludgeon from the floor","You gain the troll's bludgeon"))
};return a})(QuestEntity);var UnicornHorn=(function(b){__extends(a,b);function a(){b.apply(this,arguments)
}a.prototype.update=function(d,c){d.heal(3)};return a})(GridItem);var Village=(function(b){__extends(a,b);
function a(c){b.call(this,c);this.renderArea=new RenderArea();this.smokes=[new Smoke(8,26,1,3,1,3),new Smoke(64,26,2,4,0,0),new Smoke(80,26,1,3,1,3),new Smoke(59,42,1,3,1,3)];
this.renderArea.resizeFromArray(Database.getAscii("places/village/village"),0,3);
this.update()}a.prototype.willBeDisplayed=function(){this.getGame().getOneSecondCallbackCollection().addCallback(this.actionSmokes.bind(this));
this.update()};a.prototype.getRenderArea=function(){return this.renderArea};a.prototype.actionSmokes=function(){for(var c=0;
c<this.smokes.length;c++){this.smokes[c].move()}this.update();this.getGame().updatePlace()
};a.prototype.update=function(){this.renderArea.resetAllButSize();if(Saving.loadBool("gridItemPossessedMainMap")){this.addBackToMainMapButton(this.renderArea,"villageBackToTheMapButton")
}this.renderArea.drawArray(Database.getAscii("places/village/village"),0,3);for(var c=0;
c<this.smokes.length;c++){this.smokes[c].draw(this.renderArea)}this.loadFirstHouse(2,3+24);
this.loadSecondHouse(18,3+21);this.loadThirdHouse(32,3+25);this.loadForge(61,3+24);
this.loadFourthHouse(77,3+24);this.loadFifthHouse(91,3+25)};a.prototype.goToFirstHouse=function(){alert("yay")
};a.prototype.goToSecondHouse=function(){this.getGame().setPlace(new SecondHouse(this.getGame()))
};a.prototype.goToThirdHouse=function(){this.getGame().setPlace(new ThirdHouse(this.getGame()))
};a.prototype.goToForge=function(){this.getGame().setPlace(new Forge(this.getGame()))
};a.prototype.goToFourthHouse=function(){this.getGame().setPlace(new FourthHouse(this.getGame()))
};a.prototype.goToFifthHouse=function(){this.getGame().setPlace(new FifthHouse(this.getGame()))
};a.prototype.loadFirstHouse=function(c,d){this.renderArea.addMultipleAsciiNinjaButtons("mapVillageFirstHouseButton",c+6,c+8,d,c+1,c+10,d+1,c,c+11,d+2,c-1,c+12,d+3,c,c+11,d+4,c,c+11,d+5);
this.renderArea.addFullComment(c+6,d+6,Database.getText("mapVillageLockedHouseComment"),Database.getTranslatedText("mapVillageLockedHouseComment"),"mapVillageFirstHouseComment");
this.renderArea.addLinkOver(".mapVillageFirstHouseButton, .mapVillageFirstHouseComment",".mapVillageFirstHouseComment")
};a.prototype.loadSecondHouse=function(c,d){this.renderArea.addMultipleAsciiButtons("mapVillageSecondHouseButton",c+1,c+9,d,c,c+10,d+1,c-1,c+11,d+2,c,c+10,d+3,c,c+10,d+4,c,c+10,d+5,c,c+10,d+6,c,c+10,d+7,c,c+10,d+8);
this.renderArea.addFullComment(c+5,d+9,Database.getText("mapVillageTheShopComment"),Database.getTranslatedText("mapVillageTheShopComment"),"mapVillageSecondHouseComment");
this.renderArea.addLinkOver(".mapVillageSecondHouseButton, .mapVillageSecondHouseComment",".mapVillageSecondHouseComment");
this.renderArea.addLinkCall(".mapVillageSecondHouseButton, .mapVillageSecondHouseComment",new CallbackCollection(this.goToSecondHouse.bind(this)))
};a.prototype.loadThirdHouse=function(c,d){if(Saving.loadBool("gridItemPossessedThirdHouseKey")){this.renderArea.addMultipleAsciiButtons("mapVillageThirdHouseButton",c+1,c+7,d,c,c+8,d+1,c-1,c+9,d+2,c,c+8,d+3,c,c+8,d+4);
this.renderArea.addFullComment(c+4,d+5,Database.getText("mapVillageAHouseComment"),Database.getTranslatedText("mapVillageAHouseComment"),"mapVillageThirdHouseComment");
this.renderArea.addLinkOver(".mapVillageThirdHouseButton, .mapVillageThirdHouseComment",".mapVillageThirdHouseComment");
this.renderArea.addLinkCall(".mapVillageThirdHouseButton, .mapVillageThirdHouseComment",new CallbackCollection(this.goToThirdHouse.bind(this)))
}else{this.renderArea.addMultipleAsciiNinjaButtons("mapVillageThirdHouseButton",c+1,c+7,d,c,c+8,d+1,c-1,c+9,d+2,c,c+8,d+3,c,c+8,d+4);
this.renderArea.addFullComment(c+4,d+5,Database.getText("mapVillageLockedHouseComment"),Database.getTranslatedText("mapVillageLockedHouseComment"),"mapVillageThirdHouseComment");
this.renderArea.addLinkOver(".mapVillageThirdHouseButton, .mapVillageThirdHouseComment",".mapVillageThirdHouseComment")
}};a.prototype.loadForge=function(c,d){this.renderArea.addMultipleAsciiButtons("mapVillageForgeButton",c+3,c+6,d,c+1,c+10,d+1,c,c+11,d+2,c-1,c+12,d+3,c,c+11,d+4,c,c+11,d+5);
this.renderArea.addFullComment(c+6,d+6,Database.getText("mapVillageForgeComment"),Database.getTranslatedText("mapVillageForgeComment"),"mapVillageForgeComment");
this.renderArea.addLinkOver(".mapVillageForgeButton, .mapVillageForgeComment",".mapVillageForgeComment");
this.renderArea.addLinkCall(".mapVillageForgeButton, .mapVillageForgeComment",new CallbackCollection(this.goToForge.bind(this)))
};a.prototype.loadFourthHouse=function(c,d){this.renderArea.addMultipleAsciiButtons("mapVillageFourthHouseButton",c+3,c+5,d,c+1,c+10,d+1,c,c+11,d+2,c-1,c+12,d+3,c,c+11,d+4,c,c+11,d+5);
this.renderArea.addFullComment(c+6,d+6,Database.getText("mapVillageAHouseComment"),Database.getTranslatedText("mapVillageAHouseComment"),"mapVillageFourthHouseComment");
this.renderArea.addLinkOver(".mapVillageFourthHouseButton, .mapVillageFourthHouseComment",".mapVillageFourthHouseComment");
this.renderArea.addLinkCall(".mapVillageFourthHouseButton, .mapVillageFourthHouseComment",new CallbackCollection(this.goToFourthHouse.bind(this)))
};a.prototype.loadFifthHouse=function(c,d){this.renderArea.addMultipleAsciiButtons("mapVillageFifthHouseButton",c+1,c+9,d,c,c+10,d+1,c-1,c+11,d+2,c,c+10,d+3,c,c+10,d+4);
this.renderArea.addFullComment(c+5,d+5,Database.getText("mapVillageAHouseComment"),Database.getTranslatedText("mapVillageAHouseComment"),"mapVillageFifthHouseComment");
this.renderArea.addLinkOver(".mapVillageFifthHouseButton, .mapVillageFifthHouseComment",".mapVillageFifthHouseComment");
this.renderArea.addLinkCall(".mapVillageFifthHouseButton, .mapVillageFifthHouseComment",new CallbackCollection(this.goToFifthHouse.bind(this)))
};return a})(Place);var Wall=(function(a){__extends(b,a);function b(c,d){a.call(this,c,d,new Naming("A wall","a wall"),null,new Pos(0,0),new CollisionBoxCollection())
}b.prototype.addBox=function(d,c){this.getCbc().addCollisionBox(new CollisionBox(this,d,c))
};b.prototype.removeBoxes=function(){this.getCbc().removeBoxes()};return b})(QuestEntity);
Saving.registerBool("wishingWellFirstCandyThrown",false);Saving.registerNumber("wishingWellPreviousCandyWishPrice",1);
Saving.registerNumber("wishingWellCurrentCandyWishPrice",1);Saving.registerBool("wishingWellFirstLollipopThrown",false);
Saving.registerNumber("wishingWellCurrentLollipopWishPrice",1);Saving.registerBool("wishingWellWeAreEnchanting",false);
Saving.registerNumber("wishingWellHowManyChocolateBarsThrown",0);Saving.registerBool("wishingWellWeArePainAuChocolating",false);
Saving.registerNumber("wishingWellHowManyPainsAuChocolatThrown",0);Saving.registerBool;
var WishingWell=(function(b){__extends(a,b);function a(c){b.call(this,c);this.renderArea=new RenderArea();
this.currentSpeech=null;this.selectedEnchantmentId="wishingWellPossibleEnchantment0";
this.selectedGiftId="wishingWellGiftPower";this.createPossibleEnchantments();this.renderArea.resizeFromArray(Database.getAscii("places/wishingWell"),62,3);
this.update()}a.prototype.getRenderArea=function(){return this.renderArea};a.prototype.addEnchantmentIfPossible=function(c){if(c.isPossible()){this.possibleEnchantments.push(c)
}};a.prototype.chooseGift=function(){switch(this.selectedGiftId){case"wishingWellGiftPower":Saving.saveNumber("gameGiftPower",Saving.loadNumber("gameGiftPower")+1);
break;case"wishingWellGiftHealth":Saving.saveNumber("gameGiftHealth",Saving.loadNumber("gameGiftHealth")+1);
break;case"wishingWellGiftMagic":Saving.saveNumber("gameGiftMagic",Saving.loadNumber("gameGiftMagic")+1);
break}Saving.saveBool("wishingWellWeArePainAuChocolating",false);this.currentSpeech="wishingWellGiftDoneSpeech";
this.getGame().getPlayer().reCalcMaxHp();this.update();this.getGame().updatePlace()
};a.prototype.createPossibleEnchantments=function(){this.possibleEnchantments=[];
this.addEnchantmentIfPossible(new Enchantment(new EnchantmentItem(this.getGame(),"eqItemGlovesLeatherGloves",EqItemType.GLOVES),new EnchantmentItem(this.getGame(),"eqItemGlovesRedEnchantedGloves",EqItemType.GLOVES)));
this.addEnchantmentIfPossible(new Enchantment(new EnchantmentItem(this.getGame(),"eqItemGlovesLeatherGloves",EqItemType.GLOVES),new EnchantmentItem(this.getGame(),"eqItemGlovesPinkEnchantedGloves",EqItemType.GLOVES)));
this.addEnchantmentIfPossible(new Enchantment(new EnchantmentItem(this.getGame(),"eqItemWeaponTribalSpear",EqItemType.WEAPON),new EnchantmentItem(this.getGame(),"eqItemWeaponSummoningTribalSpear",EqItemType.WEAPON)));
this.addEnchantmentIfPossible(new Enchantment(new EnchantmentItem(this.getGame(),"eqItemWeaponMonkeyWizardStaff",EqItemType.WEAPON),new EnchantmentItem(this.getGame(),"eqItemWeaponEnchantedMonkeyWizardStaff",EqItemType.WEAPON)));
this.addEnchantmentIfPossible(new Enchantment(new EnchantmentItem(this.getGame(),"eqItemBodyArmoursKnightBodyArmour",EqItemType.BODYARMOUR),new EnchantmentItem(this.getGame(),"eqItemBodyArmoursEnchantedKnightBodyArmour",EqItemType.BODYARMOUR)));
this.addEnchantmentIfPossible(new Enchantment(new EnchantmentItem(this.getGame(),"eqItemHatOctopusKingCrown",EqItemType.HAT),new EnchantmentItem(this.getGame(),"eqItemHatOctopusKingCrownWithJaspers",EqItemType.HAT)));
this.addEnchantmentIfPossible(new Enchantment(new EnchantmentItem(this.getGame(),"eqItemHatOctopusKingCrown",EqItemType.HAT),new EnchantmentItem(this.getGame(),"eqItemHatOctopusKingCrownWithObsidian",EqItemType.HAT)));
this.addEnchantmentIfPossible(new Enchantment(new EnchantmentItem(this.getGame(),"eqItemWeaponGiantSpoon",EqItemType.WEAPON),new EnchantmentItem(this.getGame(),"eqItemWeaponGiantSpoonOfDoom",EqItemType.WEAPON)));
this.createPossibleEnchantmentsArrayForTheList()};a.prototype.createPossibleEnchantmentsArrayForTheList=function(){this.possibleEnchantmentsArrayForTheList=[];
for(var c=0;c<this.possibleEnchantments.length;c++){this.possibleEnchantmentsArrayForTheList.push("wishingWellPossibleEnchantment"+c,this.possibleEnchantments[c].getBeforeItem().getText()+" -> "+this.possibleEnchantments[c].getAfterItem().getText())
}};a.prototype.drawCandiesStuff=function(c,d){if(Saving.loadBool("wishingWellFirstCandyThrown")==false){this.renderArea.addAsciiRealButton(Database.getText("wishingWellThrowFirstCandyButton"),c,d,"wishingWellThrowFirstCandyButton",Database.getTranslatedText("wishingWellThrowFirstCandyButton"),true);
this.renderArea.addLinkCall(".wishingWellThrowFirstCandyButton",new CallbackCollection(this.throwFirstCandy.bind(this)))
}else{this.renderArea.addAsciiRealButton("Throw "+Algo.pluralFormatNicely(Saving.loadNumber("wishingWellCurrentCandyWishPrice")," candy"," candies")+" in the well",c,d,"wishingWellThrowCandiesButton");
this.renderArea.addLinkCall(".wishingWellThrowCandiesButton",new CallbackCollection(this.throwCandies.bind(this)))
}};a.prototype.drawChocolateBarsStuff=function(c,d){if(Saving.loadBool("wishingWellWeAreEnchanting")==false){this.renderArea.addAsciiRealButton(Database.getText("wishingWellThrowChocolateBarButton"),c,d,"wishingWellThrowChocolateBarButton",Database.getTranslatedText("wishingWellThrowChocolateBarButton"),true);
this.renderArea.addLinkCall(".wishingWellThrowChocolateBarButton",new CallbackCollection(this.throwChocolateBar.bind(this)))
}else{if(this.possibleEnchantments.length>=1){this.renderArea.drawString(Database.getText("wishingWellChooseEnchantment"),c,d);
this.renderArea.drawString(Database.getTranslatedText("wishingWellChooseEnchantment"),c,d+1,true);
this.renderArea.addList(c,c+30,d+3,"wishingWellEnchantmentList",new CallbackCollection(this.enchantmentSelected.bind(this)),this.possibleEnchantmentsArrayForTheList);
this.renderArea.addAsciiRealButton(Database.getText("wishingWellEnchantButton"),c,d+6,"wishingWellEnchantButton",Database.getTranslatedText("wishingWellEnchantButton"));
this.renderArea.addLinkCall(".wishingWellEnchantButton",new CallbackCollection(this.enchant.bind(this)));
this.renderArea.addLinkCallbackCollection(new CallbackCollection(this.selectRightEnchantment.bind(this)))
}else{this.renderArea.drawString(Database.getText("wishingWellNoPossibleEnchantment"),c,d);
this.renderArea.drawString(Database.getTranslatedText("wishingWellNoPossibleEnchantment"),c,d+1,true)
}}};a.prototype.drawLollipopsStuff=function(c,d){if(Saving.loadBool("wishingWellFirstLollipopThrown")==false){this.renderArea.addAsciiRealButton(Database.getText("wishingWellThrowFirstLollipopButton"),c,d,"wishingWellThrowFirstLollipopButton",Database.getTranslatedText("wishingWellThrowFirstLollipopButton"),true);
this.renderArea.addLinkCall(".wishingWellThrowFirstLollipopButton",new CallbackCollection(this.throwFirstLollipop.bind(this)))
}else{this.renderArea.addAsciiRealButton("Throw "+Algo.pluralFormatNicely(Saving.loadNumber("wishingWellCurrentLollipopWishPrice")," lollipop"," lollipops")+" in the well",c,d,"wishingWellThrowLollipopsButton");
this.renderArea.addLinkCall(".wishingWellThrowLollipopsButton",new CallbackCollection(this.throwLollipops.bind(this)))
}};a.prototype.drawPainsAuChocolatStuff=function(c,d){if(Saving.loadBool("wishingWellWeArePainAuChocolating")==false){this.renderArea.addAsciiRealButton(Database.getText("wishingWellThrowPainAuChocolatButton"),c,d,"wishingWellThrowPainAuChocolatButton",Database.getTranslatedText("wishingWellThrowPainAuChocolatButton"),true);
this.renderArea.addLinkCall(".wishingWellThrowPainAuChocolatButton",new CallbackCollection(this.throwPainAuChocolat.bind(this)))
}else{this.renderArea.drawString(Database.getText("wishingWellChooseGift"),c,d);this.renderArea.drawString(Database.getTranslatedText("wishingWellChooseGift"),c,d+1,true);
this.renderArea.addList(c,c+30,d+3,"wishingWellGiftList",new CallbackCollection(this.giftSelected.bind(this)),this.getGiftsArray());
this.renderArea.addAsciiRealButton(Database.getText("wishingWellChooseGiftButton"),c,d+6,"wishingWellChooseGiftButton",Database.getTranslatedText("wishingWellChooseGiftButton"));
this.renderArea.addLinkCall(".wishingWellChooseGiftButton",new CallbackCollection(this.chooseGift.bind(this)));
this.renderArea.addLinkCallbackCollection(new CallbackCollection(this.giftSelected.bind(this),this.selectRightGift.bind(this)))
}};a.prototype.enchant=function(){var c=parseInt(this.selectedEnchantmentId.substr(30));
this.possibleEnchantments[c].enchant();Saving.saveBool("wishingWellWeAreEnchanting",false);
this.createPossibleEnchantments();this.currentSpeech="wishingWellEnchantmentDoneSpeech";
this.update();this.getGame().updatePlace()};a.prototype.enchantmentSelected=function(){this.selectedEnchantmentId=$("#wishingWellEnchantmentList").find(":selected").attr("id")
};a.prototype.getGiftsArray=function(){var c=[];c.push("wishingWellGiftPower");c.push("More power");
c.push("wishingWellGiftHealth");c.push("More health");if(Saving.loadNumber("gameGiftMagic")<6){c.push("wishingWellGiftMagic");
c.push("More magic")}return c};a.prototype.giftSelected=function(){this.selectedGiftId=$("#wishingWellGiftList").find(":selected").attr("id")
};a.prototype.selectRightEnchantment=function(){$("#"+this.selectedEnchantmentId).prop("selected",true)
};a.prototype.selectRightGift=function(){$("#"+this.selectedGiftId).prop("selected",true)
};a.prototype.throwCandies=function(){var c=Saving.loadNumber("wishingWellCurrentCandyWishPrice");
if(this.getGame().getCandies().getCurrent()>=Saving.loadNumber("wishingWellCurrentCandyWishPrice")){if(this.getGame().getPlayer().getHp()<this.getGame().getPlayer().getMaxHp()){this.getGame().getCandies().add(-Saving.loadNumber("wishingWellCurrentCandyWishPrice"));
this.getGame().getPlayer().setHp(this.getGame().getPlayer().getMaxHp());this.currentSpeech="wishingWellThrewCandiesSpeech";
Saving.saveNumber("wishingWellCurrentCandyWishPrice",Saving.loadNumber("wishingWellPreviousCandyWishPrice")*2+Saving.loadNumber("wishingWellCurrentCandyWishPrice")*2);
Saving.saveNumber("wishingWellPreviousCandyWishPrice",c)}else{this.currentSpeech="wishingWellNoWoundSpeech"
}this.update();this.getGame().updatePlace()}};a.prototype.throwChocolateBar=function(){if(this.getGame().getChocolateBars().getCurrent()>=1){this.getGame().getChocolateBars().add(-1);
if(Saving.loadNumber("wishingWellHowManyChocolateBarsThrown")==0){this.currentSpeech="wishingWellChocolateBarIntroductionSpeech"
}else{this.currentSpeech="wishingWellThrewChocolateBarSpeech"}Saving.saveNumber("wishingWellHowManyChocolateBarsThrown",Saving.loadNumber("wishingWellHowManyChocolateBarsThrown")+1);
Saving.saveBool("wishingWellWeAreEnchanting",true);this.update();this.getGame().updatePlace()
}};a.prototype.throwFirstCandy=function(){if(this.getGame().getCandies().getCurrent()>=1){this.getGame().getCandies().add(-1);
this.currentSpeech="wishingWellCandyIntroductionSpeech";Saving.saveBool("wishingWellFirstCandyThrown",true);
this.update();this.getGame().updatePlace()}};a.prototype.throwFirstLollipop=function(){if(this.getGame().getLollipops().getCurrent()>=1){this.getGame().getLollipops().add(-1);
this.currentSpeech="wishingWellLollipopIntroductionSpeech";Saving.saveBool("wishingWellFirstLollipopThrown",true);
this.update();this.getGame().updatePlace()}};a.prototype.throwLollipops=function(){if(this.getGame().getLollipops().getCurrent()>=Saving.loadNumber("wishingWellCurrentLollipopWishPrice")){this.getGame().getLollipops().add(-Saving.loadNumber("wishingWellCurrentLollipopWishPrice"));
this.getGame().getCandies().add(Math.ceil(Saving.loadNumber("wishingWellCurrentLollipopWishPrice")/2));
this.currentSpeech="wishingWellThrewLollipopsSpeech";Saving.saveNumber("wishingWellCurrentLollipopWishPrice",Saving.loadNumber("wishingWellCurrentLollipopWishPrice")*10);
this.update();this.getGame().updatePlace()}};a.prototype.throwPainAuChocolat=function(){if(this.getGame().getPainsAuChocolat().getCurrent()>=1){this.getGame().getPainsAuChocolat().add(-1);
if(Saving.loadNumber("wishingWellHowManyPainsAuChocolatThrown")==0){this.currentSpeech="wishingWellPainAuChocolatIntroductionSpeech"
}else{this.currentSpeech="wishingWellThrewPainAuChocolatSpeech"}Saving.saveNumber("wishingWellHowManyPainsAuChocolatThrown",Saving.loadNumber("wishingWellHowManyPainsAuChocolatThrown")+1);
Saving.saveBool("wishingWellWeArePainAuChocolating",true);this.update();this.getGame().updatePlace()
}};a.prototype.update=function(){this.renderArea.resetAllButSize();this.addBackToMainMapButton(this.renderArea,"wishingWellBackToTheMapButton");
this.renderArea.drawArray(Database.getAscii("places/wishingWell"),38,3);if(this.currentSpeech!=null){this.renderArea.drawSpeech(Database.getText(this.currentSpeech),3,75,95,"wishingWellSpeech",Database.getTranslatedText(this.currentSpeech))
}this.drawCandiesStuff(0,4);if(this.getGame().getLollipops().getMax()>=1){this.drawLollipopsStuff(0,9)
}if(this.getGame().getChocolateBars().getMax()>=1){this.drawChocolateBarsStuff(0,14)
}if(this.getGame().getPainsAuChocolat().getMax()>=1){this.drawPainsAuChocolatStuff(0,24)
}};return a})(Place);var Wolf=(function(b){__extends(a,b);function a(c,d){b.call(this,c,d,new Naming("A wolf","a wolf"),new RenderArea(7,3),new Pos(0,0),new CollisionBoxCollection(new CollisionBox(this,new Pos(0,1),new Pos(7,2))),new QuestEntityMovement());
this.takeTheDecisionToRunTimer=null;this.setTransparency(new RenderTransparency(" "));
this.setIsLookingLeft(true);this.setIsStanding(true);this.getQuestEntityMovement().setGravity(true);
this.setDestructible(true);this.setMaxHp(45);this.setHp(45);this.addQuestEntityWeapon(new QuestEntityWeapon(this.getQuest(),this,new Naming("Its fangs","its fangs"),new CollisionBoxCollection(new CollisionBox(this,new Pos(-1,0),new Pos(9,3))),10));
this.getLastQuestEntityWeapon().getCloseCombatDelay().setFixedDelay(2)}a.prototype.update=function(){var c=this.getGlobalPosition().plus(new Pos(3,0)).getDistance(this.getQuest().getGame().getPlayer().getGlobalPosition());
if(c.x>0){this.setIsLookingLeft(true)}else{this.setIsLookingLeft(false)}if(this.isStanding){if(this.takeTheDecisionToRunTimer==null&&this.testNewGlobalPosition(this.getGlobalPosition().plus(new Pos(this.getRunningSpeed(),0)))){this.takeTheDecisionToRunTimer=Random.between(2,6)
}else{if(this.takeTheDecisionToRunTimer!=null){this.takeTheDecisionToRunTimer-=1;
if(this.takeTheDecisionToRunTimer<=0&&this.testNewGlobalPosition(this.getGlobalPosition().plus(new Pos(this.getRunningSpeed(),0)))){this.setIsStanding(false);
this.takeTheDecisionToRunTimer=null}}}}else{if(this.testNewGlobalPosition(this.getGlobalPosition().plus(new Pos(this.getRunningSpeed(),0)))==false){this.setIsStanding(true)
}}b.prototype.update.call(this)};a.prototype.willDie=function(){this.getQuest().getGame().getQuestLog().addMessage(new QuestLogMessage(this.getDeathMessage()+" (and found "+Algo.pluralFormat(this.getQuest().foundCandies(100+50*Random.upTo(10))," candy"," candies")+")",this.getQuest().getCandiesFoundMessage()))
};a.prototype.getRunningSpeed=function(){return(this.isLookingLeft?-1:1)};a.prototype.reDrawArea=function(){this.getRenderArea().drawArray(Database.getAscii("places/quests/forest/wolf/"+(this.isLookingLeft?"left":"right")+(this.isStanding?"Standing":"Running")))
};a.prototype.setIsLookingLeft=function(c){if(c!=this.isLookingLeft){this.isLookingLeft=c;
this.updateQuestEntityMovementOffset();this.reDrawArea()}};a.prototype.setIsStanding=function(c){if(c!=this.isStanding){this.isStanding=c;
this.updateQuestEntityMovementOffset();this.reDrawArea()}};a.prototype.updateQuestEntityMovementOffset=function(){if(this.isStanding){this.getQuestEntityMovement().setOffset(new Pos(0,0))
}else{this.getQuestEntityMovement().setOffset(new Pos(this.getRunningSpeed(),0))}};
return a})(QuestEntity);var WoodenSword=(function(b){__extends(a,b);function a(){b.call(this,"eqItemWeaponWoodenSword","eqItemWeaponWoodenSwordName","eqItemWeaponWoodenSwordDescription","eqItems/weapons/woodenSword")
}a.prototype.getQuestEntityWeapon=function(c,e){var d=new QuestEntityWeapon(c,e,new Naming("A wooden sword","a wooden sword"),e.getClassicCollisionBoxCollection(),1);
d.getCloseCombatDelay().setFixedDelay(4,0);return d};return a})(EqItem);var XinopherydonClaw=(function(a){__extends(b,a);
function b(){a.apply(this,arguments)}b.prototype.hit=function(e,c,d,f,g){return f*2
};return b})(GridItem);var Xinopherydon=(function(a){__extends(b,a);function b(c,d){a.call(this,c,d,new Naming("A xinopherydon","a xinopherydon"),new RenderArea(17,6),new Pos(0,0),new CollisionBoxCollection(new CollisionBox(this,new Pos(0,1),new Pos(5,1)),new CollisionBox(this,new Pos(0,2),new Pos(9,1)),new CollisionBox(this,new Pos(12,2),new Pos(5,1)),new CollisionBox(this,new Pos(3,3),new Pos(14,1)),new CollisionBox(this,new Pos(4,4),new Pos(5,1)),new CollisionBox(this,new Pos(10,4),new Pos(5,1)),new CollisionBox(this,new Pos(5,5),new Pos(3,1)),new CollisionBox(this,new Pos(11,5),new Pos(3,1))),new QuestEntityMovement());
this.getQuestEntityMovement().setGravity(true);this.getQuestEntityMovement().setWormsLike(true);
this.setDestructible(true);this.setMaxHp(5000);this.setHp(5000);this.getRenderArea().drawArray(Database.getAscii("places/quests/fortress/xinopherydon"));
this.setTransparency(new RenderTransparency(" "));this.addQuestEntityWeapon(new QuestEntityWeapon(this.getQuest(),this,new Naming("Its huge body","its huge body"),new CollisionBoxCollection(new CollisionBox(this,new Pos(-1,-1),new Pos(19,8))),800));
this.getLastQuestEntityWeapon().getCloseCombatDelay().setFixedDelay(20)}b.prototype.update=function(){a.prototype.update.call(this);
console.log(this.getHp());if(this.getQuest().getGame().getPlayer().getGlobalPosition().x<this.getGlobalPosition().x-50){this.heal(50)
}};b.prototype.willDie=function(){this.getQuest().getGame().getQuestLog().addMessage(new QuestLogMessage(this.getDeathMessage()+" (and found "+Algo.pluralFormat(this.getQuest().foundCandies(30000)," candy"," candies")+")",this.getQuest().getCandiesFoundMessage()));
this.getQuest().foundGridOrEqItem(new QuestItemFound(this.getQuest(),"gridItemPossessedXinopherydonClaw","You found a strange claw on the xinopherydon's corpse.","You gain a strange claw."))
};return b})(QuestEntity);var YourselfEntity=(function(b){__extends(a,b);function a(c,d){b.call(this,c,d,new Naming("Yourself","yourself"),new RenderArea(3,1),new Pos(0,0),new CollisionBoxCollection(new CollisionBox(this,new Pos(0,0),new Pos(3,1))),new QuestEntityMovement(new Pos(-1,0)));
this.getQuestEntityMovement().setGravity(true);this.setDestructible(true);this.setMaxHp(this.getQuest().getGame().getPlayer().getMaxHp());
this.setHp(this.getQuest().getGame().getPlayer().getHp());this.getRenderArea().drawString("\\o/");
this.addQuestEntityWeapon(new QuestEntityWeapon(this.getQuest(),this,new Naming("The same weapon as yours","the same weapon as yours"),new CollisionBoxCollection(new CollisionBox(this,new Pos(-1,-1),new Pos(5,3))),0));
this.getLastQuestEntityWeapon().getCloseCombatDelay().setFixedDelay()}a.prototype.setHp=function(c){if(this.getQuest().getGame().isEquipped("hat","eqItemHatOctopusKingCrown")==false){this.getQuest().getGame().getPlayer().setHp(c)
}else{if(c>0){this.getQuest().getGame().getPlayer().setHp(c)}else{this.getQuest().getGame().getPlayer().setHp(1)
}}b.prototype.setHp.call(this,c)};a.prototype.willDie=function(){this.getQuest().getGame().getQuestLog().addMessage(new QuestLogMessage(this.getDeathMessage()+" (and found "+Algo.pluralFormat(this.getQuest().foundCandies(Math.floor(this.getQuest().getGame().getCandies().getCurrent()/10))," candy"," candies")+")",this.getQuest().getCandiesFoundMessage()));
this.getQuest().foundGridOrEqItem(new QuestItemFound(this.getQuest(),"eqItemBootsBootsOfIntrospection","You found the boots of introspection","You gain the boots of introspection"))
};return a})(QuestEntity);var YourselfSentence=(function(){function a(b,c,e,d){this.quest=b;
this.text=c;this.isGoingRight=e;if(this.isGoingRight){this.position=new Pos(-this.text.length,d)
}else{this.position=new Pos(100,d)}}a.prototype.draw=function(b){b.drawString(this.text,this.quest.getRealQuestPosition().x+this.quest.getGlobalDrawingOffset().x+this.position.x,this.quest.getRealQuestPosition().y+this.quest.getGlobalDrawingOffset().y+this.position.y)
};a.prototype.update=function(){if(this.isGoingRight){this.position.x+=1;if(this.position.x>100){return true
}}else{this.position.x-=1;if(this.position.x<-this.text.length){return true}}return false
};return a})();var Yourself=(function(b){__extends(a,b);function a(c){b.call(this,c);
this.sentences=[];this.sentencesTimer=30;this.resizeQuest(100,20);this.addPlayerCollisionBoxes(true,true,true,true);
this.getGame().getPlayer().loadCandyBoxCharacter(this);this.getGame().getPlayer().setGlobalPosition(new Pos(0,19));
this.configPlayerOrClone(this.getGame().getPlayer());this.addEntity(this.getGame().getPlayer());
this.addYourself();this.addWalls();this.getGame().getQuestLog().addMessage(new QuestLogMessage("You are now fighting yourself."))
}a.prototype.configPlayerOrClone=function(c){c.setQuestEntityMovement(new QuestEntityMovement(new Pos(1,0)));
c.getQuestEntityMovement().setGravity(true)};a.prototype.endQuest=function(c){if(c){this.getGame().getQuestLog().addMessage(new QuestLogMessage("You managed to beat yourself!"));
Saving.saveBool("mainMapDoneDesert",true)}else{this.getGame().getQuestLog().addMessage(new QuestLogMessage("You died trying to beat yourself."))
}b.prototype.endQuest.call(this,c)};a.prototype.update=function(){if(this.getQuestEnded()==false){if(this.getGame().getPlayer().shouldDie()){this.endQuest(false);
return}if(this.thePlayerWon()){this.endQuest(true);return}this.handleSentences();
this.updateEntities()}this.preDraw();this.drawEntities();this.drawSentences();this.drawAroundQuest();
if(this.getQuestEnded()==false){this.addExitQuestButton(new CallbackCollection(this.getGame().goToMainMap.bind(this.getGame())),"buttonExitQuestNoKeeping")
}else{if(this.getQuestEndedAndWeWon()==false){this.addExitQuestButton(new CallbackCollection(this.getGame().goToMainMap.bind(this.getGame())),"buttonExitQuestNoKeepingBecauseLose")
}else{this.addExitQuestButton(new CallbackCollection(this.getGame().goToMainMap.bind(this.getGame())),"buttonExitQuestKeeping")
}}this.postDraw()};a.prototype.addYourself=function(){this.yourself=new YourselfEntity(this,new Pos(96,19));
this.yourself.setHealthBar(new QuestEntityHealthBar(this.yourself,new Pos(100,1),new Pos(0,0),QuestEntityHealthBarPositionType.FIXED_ON_PAGE,true,true,BarType.HEALTH));
this.addEntity(this.yourself)};a.prototype.addWalls=function(){this.addEntity(new Wall(this,new Pos(0,0)));
var c=(this.getLastEntity());c.addBox(new Pos(-1,-1),new Pos(102,1));c.addBox(new Pos(-1,0),new Pos(1,21));
c.addBox(new Pos(0,20),new Pos(101,1));c.addBox(new Pos(101,0),new Pos(1,20))};a.prototype.drawSentences=function(){for(var c=0;
c<this.sentences.length;c++){this.sentences[c].draw(this.getRenderArea())}};a.prototype.handleSentences=function(){if(this.sentencesTimer<=0){if(this.getGame().isEquipped("hat","eqItemHatOctopusKingCrown")==false){if(this.sentences.length==0||Random.oneChanceOutOf(10)){this.sentences.push(new YourselfSentence(this,Random.fromArray(["You need to be more self-confident","You need more confidence!","My crown is called content, a crown that seldom kings enjoy","Self-confidence is having confidence in oneself","The Octopus King helps those who help themselves","It's hard to beat yourself",'If my head looks like an "o", what does my belly look like?',"What does the squirrel do all the day?","I wonder what is inside the first house","I guess it's time for me to become a King","With a crown on your head, you just feel they will never hurt you","Look at all these flying sentences","Am I talking to myself?","There are three shark fins","Did you look under the carpet?","Look at this bar above","Maybe you could change its corners","Nonsense","Confidence confidence confidence","If there be no enemy there's no fight. If no fight, no victory and if no victory there is no crown","A crown is merely a hat that lets the rain in","I spent a lot of time with a crown on my head","Sometime I wish the aliens would abduct me and crown me as their leader","The crown of life is neither happiness nor annihilation; it is understanding","Tentacles tentacles tentacles"]),Random.flipACoin(),Random.between(1,12)))
}}else{if(this.sentences.length==0||Random.oneChanceOutOf(20)){this.sentences.push(new YourselfSentence(this,Random.fromArray(["You are very self-confident."]),Random.flipACoin(),Random.between(1,12)))
}}}else{this.sentencesTimer-=1}for(var c=0;c<this.sentences.length;c++){if(this.sentences[c].update()){this.sentences.splice(c,1);
c--}}};a.prototype.thePlayerWon=function(){if(this.yourself.shouldDie()){return true
}return false};return a})(Quest);Database.addAscii("maps/map",208,88,["                                                                                    ~                                                                                                           ~","              ~                                                                                                                                       ~","                                                                       ~","                                                  ~","                         ~                                                                                                                                            ~","                                                                                                          ~","","                                         ¨¨¨¨¨¨¨¨¨                               ~       ~                                ~                                                                   ~","                                         ¨¨¨¨¨¨¨¨     ~                                                 ~","                                        |¨¨¨¨¨¨¨/                     ~                                                                      ~                              ~","                             ~          |¨¨¨¨¨¨/                                                  ___                             ~                      ~","      ~                                 |¨¨¨¨¨/         ~                       ~     ~          /^_ \\        ~","                                        |¨¨¨¨/                 ~                                /^( \\/              ~                                ~              ~","                                        |¨¨¨/                                           ______ / ^/______                                 ~","                          ~             |¨¨/                                        ___/      | ^ |      \\_____                     ~","                                       ___/      ~                    ~        ____/    ______| ^ |______    \\_\\________    ~                                   ~","                                 ~     |8|                                    / _/  ___/     /  ^  \\     \\___  \\_       \\","              ~                       /___\\                                  / /  _/     I>  |, ^ ,|    I>   \\_  \\       \\___                    ~                                 ~","                                      |   |                          ~      / / _/      /\\   /|\\_/|\\   /\\      \\_ \\          \\                       ~","                                      |III|               ~              __/ | /       /__\\ | (Q P) | /__\\       \\ |          \\____      ~                               ~","                            ~         |   |    ~                        /    |/        |**| // \\_/ \\\\ |**|        \\|   ¨           \\",'                                      |III|                        ____/     |         |[]|"VV"""""VV"|[]|         |                \\          ~       ______________                              ~',"                                      |   |                       /          |\\        |[]|--{}-_-{}--|[]|        /|                 |                (         _    ´'\\","                                 ~    |III|                 _____/           | \\_      |__|----| |----|__|      _/ |           ¨      ´'\\ ~    _______| 888    / \\      ´'\\","                                     _|___|        ~       (                  \\  \\_    '  '    ___    '  '    _/  /            ____     |     /        88888   |-| 888    :    ~","                         ~          ( /|||\\\\               |       ¨           \\_  \\___       (:::)       ___/  _/            /   /     |    |    ¨   8888888     88888   |","                                    /       \\________      |                     \\_    \\______|:::|______/    _/      ¨       \\__/      |    |   888    | |      8888888  |","   ~                               /                 \\_    |               ¨       \\___       |   |       ___/                          |  ~ |  88888   | |  888   | |    |               ~","                                  /                    \\   |                           \\______|   |______/                   ___        :    : 8888888      88888  | | ¨  |","                                 (_       ____          |  |   ¨              ¨                                 ¨         __/   \\_______)   /    | |   ¨   8888888         ´'\\     ~","              ~               ~    \\_   __)  (__   _    |  |       88                                                   _/    ~             ) ¨  | |       _ | |      888     :                                ~","                                     \\_/        |#| \\__/   | 88   8888              ¨                ¨                _/                 ~ /              / \\| |     88888    |","                                                           |8888   ||  88   88   88                           ¨      /  ~            ~    /   888      ¨  |+|       8888888   |","                                             <|       ~    : || 88    8888 8888 8888         88    88               |        ~           /   88888        |_|         | |     |   ~","                                         ~  __|_ _        /88  8888    || 88||   || 88   88 8888  8888          88  |              ,----'   8888888      /| |\\        | |     |","                           ~                \\__/|#|      /8888  ||  88   8888  88  8888 8888 || 88 ||  88      8888 |             (           | |        ||0||    _    _      |","                                         .______|#|_____/  ||88    8888   ||  8888  ||   ||    8888   8888  88  ||  :   ~          |          | |    ¨        _  / \\  / \\  ¨  |      ~               ~","                      ~            ~    /                   8888    ||     88  ||  88   88   88 ||  88 ||  8888   ^/           ~   |   ¨                   _ / \\ |-| _|-|_    |","                                       /  ¨                  ||   88   88 8888    8888 8888 8888   8888 88  ||   /_\\               )                   _  / \\|-| / \\/ \\ / \\   |","                                      /                          8888 8888 ||   88 ||   ||   ||  88 || 8888  ^  /^  \\ ^^  ~    ^^ /        ¨     ¨    / \\ |-| / \\|-||-| |-|   :","      ~                     ~        /            ¨               ||   ||      8888     88   88 8888 88 ||  / \\^/ \\  ^^^^_____^^^^   ¨                |-| / \\ |-|/ \\ / \\     /","                                    /                     ¨                88   ||  88 8888 8888 || 8888   ^  /_\\  \\ |  |_____|  |                        |-| / \\|-| |-|    /              ~","                   ~               /        ¨                             8888 88  8888 ||   ||    ^ ||^  /_\\/   \\  \\|  |_____|  |    //^\\\\    (\\     ¨       |-|          /","                                  :                                        || 8888  ||    88     ^/ \\ ^ \\/   \\    \\  |__|_|=|_|__|      #      | \\        ¨          ¨    /","                                  |                 ¨                ¨         || 88     8888 ^ / \\ ^/ \\ \\    \\                         #      |  '----------------------'     ~","                                  |                                              8888   ^ || / \\   /_\\  \\ \\       //^\\\\                 #      |","                               ~  |      ¨                    ¨                   || ^ / \\^ / ^ \\ /   \\  \\          #                          |","                  ~               |                                      ¨          /_\\  /_\\ / \\ /     \\      ¨     #   /\\/\\_P                 |   ~","                                  |  ¨        ^     ^  ^                        ^  /   ^/   \\   \\                   #  `||||          Q_/\\/\\   |","                          ~       |          /_\\   /_\\/_\\ ^  ^  ^      ^    ^  /_\\/   /_\\    \\   \\                                      ||||`  :          ~        ~                           ~","                                  |      ¨  /   \\^/   ^  /_\\/_\\/_\\ ^  /_\\  /_\\/   \\  /   \\                 ¨                    //^\\\\         /","                                  :        / ^  / ^  /_\\/ ^/   ^  /_\\/   ^/   \\    \\/     \\         ¨               Q_/\\/\\        #          /","    ~                             \\         /_\\/ ^ \\/ ^ \\/ ^  /_\\/   \\  /_\\    \\                                      ||||`       #         /     ~","                      ~            :______ / ^ \\/ ^ \\/_\\/ ^ \\/ ^ \\    \\/   \\              ¨                                       #        /","                                ~         ) /_\\/ /_\\/ ^ \\/_\\ \\/_\\ \\   /     \\                    ¨            ¨           ,---------------'    ~                ~                   ~","                                          :/   \\/   \\/_\\/   \\/   \\               ¨                                       (_______","                                          \\    /    /   \\    \\    \\                                                      ________´'\\","                           ~               \\       /|[O]|\\                               ¨                       ¨      /________\\  :   ~","                                            \\                    ¨                                                      |__[ ]___|   \\             ~","             ~                      ~        \\                              ¨        __________        ¨                 .________.   ´'\\                     ~","                                              :                             ________/          ´'\\__ ______              :'´'´'´'´:      :   ~","                                ~             |                            /                       !-! ~  ´'\\       \\ /  :'´'´'´'´:      |                                                 ~","                          ~                   |     ¨                    _/  ~                     !-!       \\     --O-- :'´'´'´'´:      |              ~","   ~                                          |                  ¨     _/                          !-!        ´'\\   / \\  :'´'´'´'´:      |","                                              :                     __/          ~         ~       !-!           |  |_|  :'´'´'´'´:      :      ~                      ~","                                        ~     \\         _          (                               !-!      ~    |  |_|  :'´'´'´'´:   __/          ~","                              ~                \\       (O)         |                        _______!-!           |  / \\  :'´'´'´'´:  /   ~","                                                \\       ¨          |    ~                  |    _    |   ~       |       :________: /                                        ~","                                                 \\                /                ~      /    /&\\    \\           ´'\\              /","      ~                                 ~         '--------------'                       '--.  |¤|    .'             '------------'         ~","                          ~                                               ~                  \\_______/","                                                         ~                                                   ~                    ~                    ~","                                               ~                                        ~                                 ~                                        ~","                                   ~","                                                                    ~                                                                 ~","                                                                                                           ~                                                                             ~","                                                                                     ~                                                             ~        ~","        ~                   ~               ~             ~","                                                                                                                             ~","","","                                                                                    ~","                                  ~","                                                                                                                                                     ~","                ~                                          ~                                                       ~","","                                          ~",""]);
Database.addAscii("gridItems/mainMap",17,10,[" _______________","/  8            \\","| 888     .-'   |","|  |  _.-'      |","|    (          |","|     )       ^ |","|    /    ^  | ||","|   /    | |    |","| -'            |","\\_______________/"]);
Database.addAscii("gridItems/feather",5,6,[" _","| \\","\\-|\\"," \\-|\\","  \\-|","    \\"]);
Database.addAscii("gridItems/talkingCandy",5,2,["\\.-./","/'-'\\"]);Database.addAscii("gridItems/xinopherydonClaw",12,5,["    _.---.","  .'      '."," '  .-'-.  |","/ .'     '-'","|/"]);
Database.addAscii("gridItems/advancedGrimoire",8,11,["   .  .","  /////|"," ///// |","|===|  |","|   |  |","|era|  |","|tho|  |","|shi|  |","|   | /","|===|/","'---'"]);
Database.addAscii("gridItems/l",11,6,["   _____","  /     \\"," /       \\","|    L    |"," \\       /","  \\_____/"]);
Database.addAscii("gridItems/blackMagicGrimoire",9,11,["   .   .","  //////|"," ////// |","|====|  |","| BM |  |","|_/\\_|  |","|\\  /|  |","| \\/ |  |","| OD | /","|====|/","'----'"]);
Database.addAscii("gridItems/p",11,6,["   _____","  /     \\"," /       \\","|    P    |"," \\       /","  \\_____/"]);
Database.addAscii("gridItems/heartPendant",12,11,["\\          /"," \\        /","  \\      /","   \\    /","    \\  /","     \\/","     ::","   _ :: _","  ( `\\/' )","  `\\    /'","    `\\/'"]);
Database.addAscii("gridItems/unicornHorn",7,4,["\\."," \\'.","  \\ '.","   \\,-'"]);
Database.addAscii("gridItems/pogoStick",13,11,[" ___________","(_____ _____)","     | |","     | |","     | |","     | |","   __| |__","  (_______)","     | |","     | |","     |_|"]);
Database.addAscii("gridItems/heartPlug",17,7,["  /    /    /"," /____/____/","/____/____/\\  /","\\         \\ \\/"," \\   ***   \\/\\  /","  \\   ***   \\ \\/","   \\_________\\/"]);
Database.addAscii("gridItems/a",11,6,["   _____","  /     \\"," /       \\","|    A    |"," \\       /","  \\_____/"]);
Database.addAscii("gridItems/redSharkFin",12,5,["   .´","  /("," /  \\  (red)","/    `.","¯¯¯¯¯¯¯"]);
Database.addAscii("gridItems/beginnersGrimoire",7,11,["   .  .","  ////|"," //// |","|==|  |","|  |  |","|ar|  |","|fb|  |","|tp|  |","|  | /","|==|/","'--'"]);
Database.addAscii("gridItems/shellPowder",13,5,["   |z.-+);","  -+|)='`%:"," })]`]}s)'.;"," -+{!%^;_\\'\".","%;=)h;-+--(-]"]);
Database.addAscii("gridItems/timeRing",11,9,["    ___","   / | \\","  (  o- )","   \\   /","  .-'-'-."," //     \\\\","((       ))"," \\\\     //","  '-._.-'"]);
Database.addAscii("gridItems/fortressKey",8,10,["   _","  |:|_|\\","  |: _ (","  |:| |/","  |:|","  |:|","  |:|"," /\\ /\\","( -O- )"," \\/_\\/"]);
Database.addAscii("gridItems/thirdHouseKey",8,10,["   _","  | |_|\\","  |  _ (","  | | |/","  | |","  | |","  | |"," /\\ /\\","( -3- )"," \\/_\\/"]);
Database.addAscii("gridItems/y",11,6,["   _____","  /     \\"," /       \\","|    Y    |"," \\       /","  \\_____/"]);
Database.addAscii("gridItems/pitchfork",12,8,["      /    /","     /    /","    /    /","   /    /","  /    /"," /    /"," ////","////"]);
Database.addAscii("gridItems/sponge",15,7,["      ___","   .-'***'.","  /~*****~ \\"," /*****~****'.","(***~*********)"," '.*****~**__/","  '-:::::-'"]);
Database.addAscii("gridItems/greenSharkFin",14,5,["   .´","  /("," /  \\  (green)","/    `.","¯¯¯¯¯¯¯"]);
Database.addAscii("gridItems/purpleSharkFin",15,5,["   .´","  /("," /  \\  (purple)","/    `.","¯¯¯¯¯¯¯"]);
Database.addAscii("text/Saving",34,6,["  ____              _"," / ___|  __ ___   _(_)_ __   __ _"," \\___ \\ / _` \\ \\ / / | '_ \\ / _` |","  ___) | (_| |\\ V /| | | | | (_| |"," |____/ \\__,_| \\_/ |_|_| |_|\\__, |","                            |___/"]);
Database.addAscii("text/Configuration",65,6,["   ____             __ _                       _   _","  / ___|___  _ __  / _(_) __ _ _   _ _ __ __ _| |_(_) ___  _ __"," | |   / _ \\| '_ \\| |_| |/ _` | | | | '__/ _` | __| |/ _ \\| '_ \\"," | |__| (_) | | | |  _| | (_| | |_| | | | (_| | |_| | (_) | | | |","  \\____\\___/|_| |_|_| |_|\\__, |\\__,_|_|  \\__,_|\\__|_|\\___/|_| |_|","                         |___/"]);
Database.addAscii("text/About",32,5,["     _    _                 _","    / \\  | |__   ___  _   _| |_","   / _ \\ | '_ \\ / _ \\| | | | __|","  / ___ \\| |_) | (_) | |_| | |_"," /_/   \\_\\_.__/ \\___/ \\__,_|\\__|"]);
Database.addAscii("text/Loading",39,6,["  _                    _ _"," | |    ___   __ _  __| (_)_ __   __ _"," | |   / _ \\ / _` |/ _` | | '_ \\ / _` |"," | |__| (_) | (_| | (_| | | | | | (_| |"," |_____\\___/ \\__,_|\\__,_|_|_| |_|\\__, |","                                 |___/"]);
Database.addAscii("eqItems/boots/bootsOfIntrospection",29,8,["  ?                         ?","        ____    ?","    ?   \\   |   ____   ?","       __)  |  |   /","      (_____)  |  (__","               (_____)  ?","  ?","           ?        ?"]);
Database.addAscii("eqItems/boots/rocketBoots",33,8,["                  _______"," _______         (____/ <|","(____/ <|        (___/  <|","(___/  <|        (__/   <\\______","(__/   <\\______  /.-._.-.-'-._.-\\","/.-._.-.-'-._.-\\ \\___ ______ ___/",'\\___ ______ ___/    /"\\    /"\\','   /"\\    /"\\']);
Database.addAscii("eqItems/boots/leatherBoots",16,5,["  ____","  \\   |   ____"," __)  |  |   /","(_____)  |  (__","         (_____)"]);
Database.addAscii("eqItems/weapons/woodenSword",9,18,["    ^","   / \\","   | |","   |||","   |||","   |||","   |||","   |||","   |||","   |||","   |||","   |||","_  |||  _","\\\\_|_|_//"," \\_____/","   (x)","   (x)","   (x)"]);
Database.addAscii("eqItems/weapons/summoningTribalSpear",18,29,["        /\\","       //\\\\","      //▲▲\\\\","     //▲▲▲▲\\\\","    //▲▲▲▲▲▲\\\\","    \\\\▲▲▲▲▲▲//","     \\\\▲▲▲▲//","      \\____/","        ||","        ||","        ||","        ||","        ||","        ||","        ||","        ||","        ||","        ||","        ||"," ____   ||   ____","/\\\\\\\\\\__||__/////\\","\\/////_/||\\_\\\\\\\\\\/","     /-||||-\\","    /-|/||\\|-\\","   /-|/ || \\|-\\","   |_/  ||  \\_|","        ||","        ||","       ([])"]);
Database.addAscii("eqItems/weapons/tribalSpear",14,27,["    /\\","   //\\\\","  //¨¨\\\\"," //¨¨¨¨\\\\","//¨¨¨¨¨¨\\\\","\\\\¨¨¨¨¨¨//"," \\\\¨¨¨¨//","  \\____/","    ||","    ||","    ||","    ||","    ||","    ||","    ||","    ||","    ||","    ||   ____","    ||__/////\\","    ||\\_\\\\\\\\\\/","    |||-\\","    ||\\|-\\","    || \\|-\\","    ||  \\_|","    ||","    ||","   ([])"]);
Database.addAscii("eqItems/weapons/enchantedMonkeyWizardStaff",11,21,[" .   *   .","{*}\\/o\\/{*}"," '.o O o.'","  \\  o  /","   {_O_}","    | |","    | |","    | |","    | |","    | |","    | |","    | |","    | |","    | |","    | |","    | |","    | |","    | |","    (*)","    (*)","    (*)"]);
Database.addAscii("eqItems/weapons/polishedSilverSword",12,21,["     ^","    / \\","    ) (","   <   >","    ) (","    | |","    ) (","   <   >","    ) (","    | |","    ) (","   <   >"," .  ) (  ."," |\\_| |_/|","< ¤_ ¤ _¤ >"," |/ \\_/ \\|"," '  [-]  '","    [-]","    [-]","    [-]","   (___)"]);
Database.addAscii("eqItems/weapons/scythe",30,32,[" /\\"," )("," ||","| (|______","|) |      '---____","| (|              '--__","|) |______              '-.","| (|______'----.___        \\"," ||      '----.___'---._    \\"," ||               '--- ._\\_  |"," ||                      \\_\\ |"," ||                        \\\\|"," ||                         \\|"," ||"," ||"," ||"," ||"," ||"," ||"," ||"," ||"," ||"," ||"," ||"," ||"," ||"," ||"," ||"," ||"," ||"," /\\"," \\/"]);
Database.addAscii("eqItems/weapons/giantSpoonOfDoom",13,31,["     .-.","   .: # :.","  :     # :"," :  #      :",":       #   :",":  #        :",":     #     :"," : #     # :","  :.   # .:","    :___:","    |   |","    |#  |","    |  #|","    |   |","    |  #|","    |   |","    | # |","    |   |","    |   |","    | # |","    |   |","    |#  |","    |   |","    | # |","    |   |","    |  #|","    |  #|","    |   |","    |#  |","    |   |","    '-.-'"]);
Database.addAscii("eqItems/weapons/ironAxe",11,12,["   /\\  |\\"," __)(__) \\","(__{}__   >","   ||  ) /","   ||  |/","   ||","   ||","   ||","   ||","   ||","   /\\","  '--'"]);
Database.addAscii("eqItems/weapons/giantSpoon",13,31,["     .-.","   .:   :.","  :       :"," :         :",":           :",":           :",":           :"," :         :","  :.     .:","    :___:","    |   |","    |   |","    |   |","    |   |","    |   |","    |   |","    |   |","    |   |","    |   |","    |   |","    |   |","    |   |","    |   |","    |   |","    |   |","    |   |","    |   |","    |   |","    |   |","    |   |","    '-.-'"]);
Database.addAscii("eqItems/weapons/monkeyWizardStaff",9,19,[" .  .  .","/ \\/ \\/ \\","\\_     _/","  \\_ _/","   | |","   | |","   | |","   | |","   | |","   | |","   | |","   | |","   | |","   | |","   | |","   |_|","   ( )","  _/ \\_"," /_____\\"]);
Database.addAscii("eqItems/weapons/trollBludgeon",12,18,["    _/\\_","   /____\\"," <)    > (>"," /  <     \\","<)        (>"," \\ <   >  /"," <) ____ (>","   \\____/","    |  |","    |  |","    |  |","    |  |","    |  |","    |  |","    |  |","    |  |","    |  |","   (____)"]);
Database.addAscii("eqItems/gloves/pinkEnchantedGloves",11,8,["  .~.~.~.","  | | | |~.","  | | | | |","  | | | | |","~ |       |","\\`\\ (\\/)  |"," \\   \\/   |","  \\______/"]);
Database.addAscii("eqItems/gloves/redEnchantedGloves",11,8,["  .~.~.~.","  | | | |~.","  | | | | |","  | | | | |","~ |       |","\\`\\ # # # |"," \\  ##### |","  \\______/"]);
Database.addAscii("eqItems/gloves/leatherGloves",11,8,["  .~.~.~.","  | | | |~.","  | | | | |","  | | | | |","~ |       |","\\`\\       |"," \\        |","  \\______/"]);
Database.addAscii("eqItems/hats/octopusKingCrownWithObsidian",9,3,["|\\/\\_/\\/|","| w W w |","¯¯¯¯¯¯¯¯¯"]);
Database.addAscii("eqItems/hats/octopusKingCrownWithJaspers",9,3,["|\\/\\_/\\/|","| o O o |","¯¯¯¯¯¯¯¯¯"]);
Database.addAscii("eqItems/hats/merchantHat",17,3,["      .---.","     |     |","'-.__|_____|__.-'"]);
Database.addAscii("eqItems/hats/octopusKingCrown",9,3,["|\\/\\_/\\/|","| . : . |","¯¯¯¯¯¯¯¯¯"]);
Database.addAscii("eqItems/hats/sorceressHat",28,7,["                   _.-.","                .-'  ~ '.","             _.'  ¨_.'-._\\","           .'    ~|      '","          ' ¨     -",".________/_________\\_______."," ¨¨°¨°¨¨            ¨°¨¨¨°¨"]);
Database.addAscii("eqItems/bodyArmours/knightBodyArmour",13,8,[" \\\\       //"," | '-._.-' |"," |         |","/  :::::::  \\","|  ::KNI::  |","\\  :::::::  /"," '.       .'","   '-._.-'"]);
Database.addAscii("eqItems/bodyArmours/lightweightBodyArmour",11,7,[" \\       /"," |'-._.-'|"," |       |","/         \\","\\         /"," '.     .'","   '-.-'"]);
Database.addAscii("eqItems/bodyArmours/enchantedKnightBodyArmour",13,8,[" \\\\       //"," |*'-._.-' |"," |     *  *|","/   *       \\","|*     *  * |","\\           /"," '. *  *  .'","   '-._.-'"]);
Database.addAscii("general/openBox",29,25,["            _____","       ____/|   |\\____","      |\\_____________/|","      ||             ||","      ||             ||","      ||             ||","      ||             ||","      ||_____________||","      |/_____________\\|","     /I               I\\","    / I               I \\","   /  I               I  \\","  /   I               I   \\"," /    I               I    \\","|:¨¨¨¨¨¨¨¨\\_______/¨¨¨¨¨¨¨¨:|","|:                         :|","|:                         :|",'|:  ___    .-"""-.    ___  :|',"|:  \\  \\  /\\ \\ \\ \\\\  /  /  :|","|:   }  \\/\\ \\ \\ \\ \\\\/  {   :|","|:   }  /\\ \\ \\ \\ \\ /\\  {   :|","|:  /__/  \\ \\ \\ \\ /  \\__\\  :|","|:         '-...-'         :|","|:.........................:|","|___________________________|"]);
Database.addAscii("general/specialAbilityBackground",98,1,[" |   |                                                                                       |   |"]);
Database.addAscii("general/box",29,25,["","","","","","","","",""," ___________________________","|:''''''''''''''''''''''''':|","|:          _____          :|","|:         /     \\         :|","|_________(_[   ]_)_________|","|:¨¨¨¨¨¨¨¨¨\\_____/¨¨¨¨¨¨¨¨¨:|","|:                         :|","|:                         :|",'|:  ___    .-"""-.    ___  :|',"|:  \\  \\  /\\ \\ \\ \\\\  /  /  :|","|:   }  \\/\\ \\ \\ \\ \\\\/  {   :|","|:   }  /\\ \\ \\ \\ \\ /\\  {   :|","|:  /__/  \\ \\ \\ \\ /  \\__\\  :|","|:         '-...-'         :|","|:.........................:|","|___________________________|"]);
Database.addAscii("general/inventoryTop",99,55,["               ______                                 __","              /\\__  _\\                               /\\ \\__","              \\/_/\\ \\/     ___   __  __     __    ___\\ \\ ,_\\   ___   _ __   __  __","                 \\ \\ \\   /. _ `\\/\\ \\/\\ \\  /.__`\\/. _ `\\ \\ \\/  / __`\\/\\`.__\\/\\ \\/\\ \\","                  \\_\\ \\__/\\ \\/\\ \\ \\ \\_/ |/\\  __//\\ \\/\\ \\ \\ \\_/\\ \\L\\ \\ \\ \\/ \\ \\ \\_\\ \\","                  /\\_____\\ \\_\\ \\_\\ \\___/ \\ \\____\\ \\_\\ \\_\\ \\__\\ \\____/\\ \\_\\  \\/`____ \\","                  \\/_____/\\/_/\\/_/\\/__/   \\/____/\\/_/\\/_/\\/__/\\/___/  \\/_/   `/___/> \\","                                                                                /\\___/","                                                                                \\/__/",""," _________________________________________________________________________________________________","(                                                                                                ()"," |                                                                                               |"," |  {~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~}                                                       |"," |  {(              WEAPON              )}          \\                                            |"," |  { )                                ( }       / \\ \\                                           |"," |  {(                                  )}      / / ) )                                          |"," |  { )                                ( }     / / \\ /                                           |"," |  {(                                  )}    ( ( \\ \\                                            |"," |  { )                                ( }     \\ / \\ \\                                           |"," |  {(                                  )}      / / ) )                                          |"," |  { )                                ( }     / / \\ /                                           |"," |  {(                                  )}    ( ( \\ \\                                            |"," |  { )                                ( }     \\ / \\ \\                                           |"," |  {(                                  )}      / / ) )                                          |"," |  { )                                ( }     / / \\ /                                           |"," |  {(                                  )}    ( ( \\ \\                                            |"," |  { )                                ( }     \\ / \\ \\                                           |"," |  {(                                  )}      / / ) )                                          |"," |  { )                                ( }     / / \\ /                                           |"," |  {(                                  )}    ( ( \\ \\                                            |"," |  { )                                ( }     \\ / \\ \\                                           |"," |  {(                                  )}      / / ) )                                          |"," |  { )                                ( }     / / \\ /                                           |"," |  {(                                  )}    ( ( \\ \\                                            |"," |  { )                                ( }     \\ / \\ \\                                           |"," |  {(                                  )}      / / ) )                                          |"," |  { )                                ( }     / / \\ /                                           |"," |  {(                                  )}    ( ( \\ \\                                            |"," |  { )                                ( }     \\ / \\ \\                                           |"," |  {(                                  )}      / / ) )                                          |"," |  { )                                ( }     / / \\ /                                           |"," |  {(                                  )}    ( ( \\ \\                                            |"," |  { )                                ( }     \\ / \\ \\                                           |"," |  {(                                  )}      / / ) )                                          |"," |  { )                                ( }     / / \\ /                                           |"," |  {(                                  )}    ( ( \\ \\                                            |"," |  { )                                ( }     \\ \\ \\ \\                                           |"," |  {(                                  )}      \\ \\ ) )                                          |"," |  {~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~}                                                       |"," |                                                                                               |"," |   /=======================================================================================\\   |"," |   | Max HP :          - Weapon damage :            - Weapon speed :                       |   |"," |   |~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|   |"," |   |                                                                                       |   |"]);
Database.addAscii("general/inventoryBodyArmour",21,12,[".....................",".    BODY ARMOUR    .",".                   .",".                   .",".                   .",".                   .",".                   .",".                   .",".                   .",".                   .",".                   .","....................."]);
Database.addAscii("general/inventoryGloves",13,12,[".............",".  GLOVES   .",".           .",".           .",".           .",".           .",".           .",".           .",".           .",".           .",".           .","............."]);
Database.addAscii("general/inventoryHat",36,12,["....................................",".                HAT               .",".                                  .",".                                  .",".                                  .",".                                  .",".                                  .",".                                  .",".                                  .",".                                  .",".                                  .","...................................."]);
Database.addAscii("general/inventoryBoots",36,12,["....................................",".              BOOTS               .",".                                  .",".                                  .",".                                  .",".                                  .",".                                  .",".                                  .",".                                  .",".                                  .",".                                  .","...................................."]);
Database.addAscii("general/candyRoom",50,7,["                 ___                        ____","               \\/   \\/                    \\/    \\/","       _____   /\\___/\\ _   ____     _     /\\____/\\","     \\/     \\/   (_)  (_)\\/    \\/  (_)       (_)","     /\\_____/\\    |    | /\\____/\\   |   ___   |","     \\/     \\/    |    | \\/    \\/   | \\/   \\/ |","     /\\_____/\\    |    | /\\____/\\   | /\\___/\\ |"]);
Database.addAscii("general/inventoryBottom",99,75,[" |   \\=======================================================================================/   |"," |   _________________________________________________________________________________________   |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [---------------------][---------------------][---------------------][--------------------]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [---------------------][---------------------][---------------------][--------------------]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [---------------------][---------------------][---------------------][--------------------]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [---------------------][---------------------][---------------------][--------------------]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [---------------------][---------------------][---------------------][--------------------]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [                     ][                     ][                     ][                    ]  |"," |  [_____________________][_____________________][_____________________][____________________]  |"," |                                                                                               |"," (_______________________________________________________________________________________________()"]);
Database.addAscii("general/translaCAT",19,16,["   |\\___/|","  /       \\"," / <*> <*> \\","/___  V  ___\\","    |   |","    |    \\______","    /           \\","   |             |"," __/              \\","|_______        __/","        |      /","         \\  __/","        _/ /  __","       / /    \\ \\","      | |_____/ /","       \\_______/"]);
Database.addAscii("general/insideYourBox/4",1,3,["o","|","|"]);Database.addAscii("general/insideYourBox/5",8,2,["/\\.--./\\","\\/'--'\\/"]);
Database.addAscii("general/insideYourBox/9",17,3,[" _______________","/__/__/__/__/__/|","|__|__|__|__|__|/"]);
Database.addAscii("general/insideYourBox/3",5,1,["o----"]);Database.addAscii("general/insideYourBox/0",5,2,["\\.-./","/'-'\\"]);
Database.addAscii("general/insideYourBox/10",14,3,[" ____________","/__/__/__/__/|","|__|__|__|__|/"]);
Database.addAscii("general/insideYourBox/text",90,12,["                                __   __                          _","                                \\%\\ /%/__ _  _  __ __ _____ _ _ |%|","                                 \\%V%/%_%\\%||%| \\%V%%V%/%_%\\%'%\\|_|","                                  |_|\\___/\\_,_|  \\_/\\_/\\___/_||_(_)","           __   __                            _                        _ _   _   _","           \\%\\ /%/__ _  _   _ _  _____ __ __ |%|_  __ ___ _____   __ _|%|%| |%|_|%|_  ___","            \\%V%/%_%\\%||%| |%'%\\/%_%\\%V%%V%/ |%'%\\/%_`%\\%V%/%-_) /%_`%|%|%| |%%_|%'%\\/%-_)","             |_|\\___/\\_,_| |_||_\\___/\\_/\\_/  |_||_\\__,_|\\_/\\___| \\__,_|_|_|  \\__|_||_\\___|","                                _        _        _   _                         _    _ _","              ____ __ _____ ___|%|_ ___ (_)_ _   |%|_|%|_  ___  __ __ _____ _ _|%|__|%|%|","             (_-<%V%%V%/%-_)%-_)%%_(_-< |%|%'%\\  |%%_|%'%\\/%-_) \\%V%%V%/%_%\\%'_|%/%_`%|_|","             /__/\\_/\\_/\\___\\___|\\__/__/ |_|_||_|  \\__|_||_\\___|  \\_/\\_/\\___/_| |_\\__,_(_)"]);
Database.addAscii("general/insideYourBox/6",3,5,[" _","(_)"," |"," |"," |"]);Database.addAscii("general/insideYourBox/2",5,1,["----o"]);
Database.addAscii("general/insideYourBox/7",3,9,[" _","| |","|/|","|/|","| |","| |","|/|","|/|","|_|"]);
Database.addAscii("general/insideYourBox/8",3,9,[" _","| |","|\\|","|\\|","| |","| |","|\\|","|\\|","|_|"]);
Database.addAscii("general/insideYourBox/1",1,3,["o","|","|"]);Database.addAscii("general/theComputer/computer",62,24,["                                            _________________","                                           |                 |","                                           |   ___________   |","                                           |  |   .....   |  |"," ______________________________________    |  |___________|  |","|  __________________________________  |   |   ___________   |","| |                                  | |   |  |   .....   |  |","| |                                  | |   |  |___________|  |","| |                                  | |   |   __   __   _   |","| |                                  | |   |  |__| |__| |_|  |","| |                                  | |   |                 |","| |                                  | |   |                 |","| |                                  | |   |                 |","| |                                  | |   |                 |","| |                                  | |   |       .|.       |","| |                                  | |   |      (   )      |","| |                                  | |   |       '-'       |","| |__________________________________| |   |                 |","|______________________________________|   |                 |","                 |    |      '.            |                 |","                 |    |        '-.-'-.-'-.-|                 |","                 )    (                    |                 |","                /      \\                   |                 |","               /________\\                  |_________________|"]);
Database.addAscii("arena/peacefulForest/logo",16,4,[" ||| \\o/|||  |||","","   The peaceful","      forest"]);
Database.addAscii("arena/hardcorePlatformer/logo",18,4,[" HARDCORE","     PLATFORMER","","_/\\/\\__\\o/____/\\/\\"]);
Database.addAscii("arena/hardcorePlatformer/background",240,12,["","","","","","","","","________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________",""," Good luck!                                                                     That wasn't so hard, was it?                                      Wow. Good job. But now it's going to be serious.                                       Yay!!","________________________________________________________________________________________________________________________________________________________________________________________________________________________________________________"]);
Database.addAscii("players/medium",11,4,["\\         /"," \\  .-.  /","  \\(%%%)/","    '-'"]);
Database.addAscii("players/mediumSqueezedBerserk",6,3,["  ..","\\(OO)/",'  ""']);
Database.addAscii("players/mediumTurtleBerserk",11,4,["","  .---.  _"," /     \\/O)","'uu---uu'¨"]);
Database.addAscii("players/mediumSqueezedTurtle",6,3,[" ..","/  \\/)","uuuu'"]);Database.addAscii("players/mediumBerserk",11,4,["\\         /"," \\  .-.  /","  \\(O%O)/","    '-'"]);
Database.addAscii("players/mediumTurtle",11,4,["","  .---.  _"," /     \\/_)","'uu---uu'"]);
Database.addAscii("players/mediumSqueezedTurtleBerserk",6,3,[" ..","/  \\/O","uuuu'"]);
Database.addAscii("players/mediumSqueezed",6,3,["  ..","\\(%%)/",'  ""']);Database.addAscii("places/mountains",138,19,["                                    /\\                                              /\\","                                   // \\     _      /\\                              /  \\     _      /\\","                      /\\_        _//   \\   / \\/\\ _/  \\    /\\         /\\_        __/   \\\\   / \\/\\ _/  \\    /\\","                    _/   \\/\\_  _/ /   \\ \\_/   \\_/     \\__/ _\\      _/   \\/\\_  _/ /      \\_/   \\_/     \\__/ _\\","                   /        `\\/   \\_   \\ \\_    / //    /    \\\\    /        `\\/   \\_   \\  \\_    / //    /    \\\\","                  //     \\    \\_  / \\      \\  / _     /  /    \\  //     \\    \\_  / \\      \\   / _     /  /    \\","                 //       \\     |/                             \\//       \\     |/                              \\","       /\\       /                          \\             _      \\                                    /\\         \\","    __/ -\\     /                                        /¨\\      \\_             _                   // \\     _   \\  /\\","___//    \\\\   /     /         /                    ____/   \\_____/¨\\__         /¨\\     /\\_        _//  \\\\   / \\/\\\\\\/  \\    /\\","/     /    \\ /     /         /                    /¨¨¨¨     ¨¨¨¨¨   ¨¨\\       /   \\  _/   \\/\\_  _/ /     \\_/   \\_//    \\__/ _\\","            /               /               _____/                     \\_____/     \\/        `\\/   \\_  \\  \\_    / //    /    \\\\","           /                         ______/¨¨¨¨¨                       ¨¨¨¨¨       \\                                          \\","          /                         /¨¨¨¨¨¨                                          \\_____                                     \\","         /                        _/                                                  ¨¨¨¨¨\\                                     \\","        /        _____           /¨                                                         \\                            ______   \\","       /   _____/¨¨¨¨¨\\_________/                                                            \\_________              ___/¨¨¨¨¨¨\\___\\______","______/___/¨¨¨¨¨       ¨¨¨¨¨¨¨¨¨                                                              ¨¨¨¨¨¨¨¨¨\\____    ____/¨¨¨        ¨¨¨¨¨¨¨¨¨¨","¨¨¨¨¨¨¨¨¨¨                                                                                              ¨¨¨¨\\__/¨¨¨¨"]);
Database.addAscii("places/dragonFoot",161,25,["                                                                                                                         .'                          '.","                                                                                                                         '                            '","                                                                                                                        .'                            '.","                                                                                                                        '                              '","                                                                                                                       .'                              '.","                                                                                                                       '                                '","                                                                                                                      .'                                '.","                                                                                                                      /                                  \\","                                                                                                                     /                                    \\","                                                                                                                    .'                                    '.","                                                                                                                   .'                                      '.","                                                                                                                 _-'                                        '.","                                                                                                ____....----''_''              __.-'                          '.","                                                                                   ___...---''''    __..--''''          _..--''                                 '","                                                                          __..--'''       ___...---'              _..--'                                        \\","                                                                   _..--''         _..--''                    _.-'                                              |","                                                                 .'              .'                         .'                                                  |","___                                                             '               '                          '                                                    |","  |___                                                         /               /                          /                                                  __/","     |___                                                      '               '                          '                         _____.....------'''''''''","         |___                                                 /               /                          /                 __...--''","            |___                                              '               '                ___...---''          _..--''","               |___                                           |          ___..|       __..--'''          |    _..--'","__________________|___                                         \\_..---'''     \\_..--''                   \\_.-'",""]);
Database.addAscii("places/outsideTheHole",100,21,["                                           ¨                           ¨","                  ¨               ¨                            ¨                     ¨         ¨","        ¨                 ¨                          ¨                      ¨","                                           ________        _______                          ¨","  ¨                                       /|       \\______/      /                ¨","               ¨                ¨        / |       |      |    _/     ¨","                        ¨               /  |       |      |   /                                  ¨","                                       /   |       |      |   \\   ¨                       ¨","      ¨                        ¨      /    |       |      |   /          ¨","                                     /     |       |      |  /                      ¨","                           ¨         \\     |       |      | /  ¨                                   ¨","                  ¨                   \\    |       |      |/","         ¨                             \\__ |       |      /            ¨                  ¨","                             ¨            \\|       |     /         ¨","                                   ¨       \\       |    /                     ¨","    ¨             ¨                         \\______|___/    ¨                                ¨","                             ¨","           ¨                                         ¨                                ¨","                                          ¨                      ¨","                     ¨                            ¨                                            ¨","    ¨                          ¨                                            ¨"]);
Database.addAscii("places/wishingWell",37,30,["       _______________________","     /|                       |\\","    //|_______________________|\\\\","   ///                         \\\\\\","  ///                           \\\\\\"," ///                             \\\\\\","///                               \\\\\\","|/_________________________________\\|","    ||                         ||","    ||                         ||","    ||                         ||","    ||                         ||","    ||                         ||","    ||    _________________    ||","    || .-' _______________ '-. ||","    ||' .-'  |    |    |  '-. '||","    || /|    |    |    |    |\\ ||","   (||( |    |    |    |    | )||)","   |\\  \\|    |    |    |    |/  /|","   | \\  '-.  |    |    |  .-'  / |","   | |'.   '-------------'   .'| |","   |\\| |'-._______________.-'| |/|","   | \\ | | | | | | | | | | | | / |","   | |'. | | | | | | | | | | .'| |","   |\\| |'-._______________.-'| |/|","   | \\ | | | | | | | | | | | | / |","    \\|'. | | | | | | | | | | .'|/","     \\ |'-._______________.-'| /","      '. | | | | | | | | | | .'","        '-._______________.-'"]);
Database.addAscii("places/treasure",43,25,["                    888888        |","    ¨               888888        |","                  8888888888   ¨  |","                  8888888888      |","                88888888888888    |","         ¨      88888888888888    |","                    |    |        |","        888888      |    |        |","        888888      |    |    ¨   |","   ¨  8888888888    |    |        |","      8888888888    |    |        |_","    88888888888888                  '-.__","    88888888888888                       \\","        |    |            888888          |","        |    |    ¨       888888          |","     ¨  |    |          8888888888        |","        |    |          8888888888      ¨ |","        |    |        88888888888888      |","                      88888888888888      |","                          |    |          |","                  ¨       |    |          |","                          |    |          |","                          |    |          |","                          |    |          |",""]);
Database.addAscii("places/pier",75,23,["                   ___                             ~","  ~               /   \\                                                   ~","          ~       |   |   ~","                 /|   |                   ~                          ~","                / |   |                               ~","               /  |   |         ~","    ~         /   |   |                                      ~","             /    |   |","            /     |   |  ~                  ~       ________________"," ~       ~ /      |   |             ~              /---------------/|","          /       |   |      ~                    /---------------/||  ~","    ~    /        |   | ~              ~      ~  /---------------/|/","~       /_________|   |          ~              /---------------/|/|~","     ~    _.------|   |------._                /---------------/|/||","  ~   _.-'_.------|   |------._'-._     ~     /---------------/|/|||    ~","   .-'.-'         |   |         '-.'-.       /---------------/|/~|||","~  '-.__          |   |          __.-'   ~  /---------------/|/  ||/","    \\   '---.__   |   |   __.---'   /~     /---------------/|/       ~"," ~   \\         '---------'         /  ~   /---------------/|/  ~","      \\                           /      /---------------/|/            ~","    ~  '----._______________.----' ~    /---------------/|/        ~","          ~     ~      ~    ~          /---------------/|/  ~","______________________________________/---------------/_/__________________"]);
Database.addAscii("places/lonelyHouse",97,35,["  /        |                                                                         |        \\"," /         |                                                                         |         \\","|          |                                                                         |          |","|          |                                                                         |          |","|          |                                                                         |          |","|          |                                                                         |          |","|          |                                                                         |          |","|          |                                                                         |          |","|          |                                                                         |          |","|          |                                                                         |          |","|          |                                                                         |          |","|          |                                                                         |          |","|          |                                                                         |          |","|          |                                                                         |          |","|          |                                                                         |          |","|          |                                                                         |          |","|          |                                                                         |          |","|          |                                                                         |          |","|          |                                                                         |          |","|          |                                                                         |          |","|          |                                                                         |          |","|          |                                                                         |          |","|          |                                                                         |          |","|          |                                                                         |          |","|          |_________________________________________________________________________|          |","|         /                                                                           \\         |","|        /                                                                             \\        |","|       /                                                                               \\       |","|      /                                                                                 \\      |","|     /                                                                                   \\     |","|    /                                                                                     \\    |","|   /                                                                                       \\   |","|  /                                                                                         \\  |","| /                                                                                           \\ |","|/_____________________________________________________________________________________________\\|"]);
Database.addAscii("places/sorceressHut/grimoire2",4,5,[" ___","|","|era","|tho","|shi"]);
Database.addAscii("places/sorceressHut/cauldron",42,18,["            _________________","           (_________________)","          .-'%%%%%%%%%%%%%%%'-.","        .'%%%%%%%%%%%%%%%%%%%%%'.","       /%%%%%%%%%%%%%%%%%%%%%%%%%\\","      '%%%%%%%%%%%%%%%%%%%%%%%%%%%'","     '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%'","    '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%'","    '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%'","    '%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%'","     \\%%%%%%%%%%%%%%%%%%%%%%%%%%%%%/","      '.%%%%%%%%%%%%%%%%%%%%%%%%%.'","        '-.___________________.-'","            /%/           \\%\\","           /%/             \\%\\","WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW","MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM","¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨"]);
Database.addAscii("places/sorceressHut/grimoire",2,4,["__","ar","fb","tp"]);Database.addAscii("places/sorceressHut/lollipop",5,1,["o----"]);
Database.addAscii("places/sorceressHut/hat",28,7,["                   _.-.","                .-'%%~%'.","             _.'%%¨_.'-._\\","           .'%%%%~|      '","          '%¨%%%%%-",".________/_________\\_______."," ¨¨°¨°¨¨            ¨°¨¨¨°¨"]);
Database.addAscii("places/sorceressHut/background",286,45,["             |                                                                                                                    |","             |                                                                                                                    |","             |                                                                                                                    |","             |             ___                                                                                                    |","             |          .-'   '-.                                                                                                 |","             |         /         \\                                                                                                |","             |         |  ~   ~  |                                                                                                |","             |         \\ (.) (.) /                                                                                                |","             |          |   /   |                                                                                                 |","             |          \\   0.  /                                                                                                 |","             |          (   _   )                                                                                                 |","             |        __.\\     /._                                                                                                |","             |    _.-'  (|'._.'|)  '-._                                                                                           |","             |  .'       '-___-'       '.                                                                                         |","             |.'    ~              ¨     '.                                                                                       |","             .'                           '.                                                                                      |","            /                               \\                                                                                     |","           .'                ¨              '.                                                                                    |","           /                                 \\.                                                                                   |","          .'     ¨                           '.                                                                                   |","          '                       ~           '                                                                                   |","          |                                   |                                                                                   |","          |              ¨                    |                                                                                   |","          |                               ¨   |                                                                                   |","          |                                   |                                                                                   |","          |           ~                       |                                                                                   |","          |                                   |                                                                                   |","          |    ¨                              |                                                                                   |","          |                        ¨          |                                                                                   |","          |             ¨                     |                                                                                   |","          |                     ~             |                                                                                   |","          |                                   |                                                                                   |","          |        ¨                          |                                                                                   |","          |                                   |                                                                                   |","          |                            ¨      |                                                                                   |","          |                                   |                                                                                   |","          \\            ~                      /                                                                                   |","           '._~                 ~        ~_ .'____________________________________________________________________________________|","            .''-.--._.-' -. _. -'-._ _ .-'                                                                                        '.","          .'       |°-°|       |°-°|                                                                                                '.","        .'        .'~  )       (  ~'.                                                                                                 '.","      .'        .' - .'         '. - '.                                                                                                 '.","    .'         / - .'             '. - \\                                                                                                  '.","  .'          |_.-'                 '-._|                                                                                                   '.",".'                                                                                                                                            '.                                                                                                                                            '."]);
Database.addAscii("places/sorceressHut/broom",9,27,["    v","    v","   (*)","   | |","   | |","   | |","   | |","   | |","   | |","   | |","   | |","   | |","   | |","   | |","   | |","   | |","   | |","   | |","   | |","   |_|"," .'   '.","/_______\\","|||||||||","|||||||||","|||||||||"," \\|||||/","  ^^^^^"]);
Database.addAscii("places/sorceressHut/shelves",56,18,["                      _____","        __          _|=====|       ___ _","  _    |==|      __|F|     |__    |TSN|P|   __ _"," |S|___|  |_ _ _|xx| |MAGIC|  |   |   | |__|CO|T|__ __"," | |   |17| | | |__| |CAKES|->|   |   | |JV|  |A|H2|G2|"," | |W:A|  |M|L|P|  | |     |->|   |   | |  |42|O|  |  |","_|_|___|==|_|_|_|xx|_|=====|__|___|666|_|__|__|G|__|__|_","¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨_¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨_¨¨¨¨¨¨¨","   __          |P|   _  __                _____\\ \\","  |XX|_ _ _ _ _| |  |K|\\  \\     .---.    (_____|\\ \\","  |  |1|2|3|4|5| |  | | \\  \\   ( X X )   (_____| \\ \\","__|XX|_|_|_|_|_|_|__|_|__\\__\\___|_V_|____(_____|__\\_\\___","¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨","        ._.      __      |__|         {w} {v}      ..","  O     | |      )(     //00\\\\        _|___|_      ||"," .o.  .'=B='.   /  \\    ||  ||        \\     /    .'IP'.","_/_\\__'.___.'__(____)___\\\\__//_________\\___/_____'.__.'_","¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨"]);
Database.addAscii("places/cauldron/bookPage10",40,26,["10","              The X potion","              ¨¨¨¨¨¨¨¨¨¨¨¨","  The X potion is a legend. It is said","that whoever manage to brew it and drink","it would travel to a place where no one","have been before.","","  I don't know if this potion is just a","legend or not, but I will write in this","book everything I know about it.","","  The X potion is mentioned in many old","legends and alchemy books. Here's a","summary of the informations which may","help you to brew it. Good luck!",""," - It is said that 5 steps are necessary","to brew the X potion.",""," - It is said that no lollipops are","required, except for one of the steps.",""," - It is said that, unlike for other","potions, you can't brew multiple X","potions at once."]);
Database.addAscii("places/cauldron/bookPage1",38,18,["                                     1","","","","","","","","              ~ Summary ~","                ¨¨¨¨¨¨¨",""," Page 2 : Health potion"," Page 3 : Turtle potion"," Pages 4-5 : Anti-gravity potion"," Pages 6-7 : Berserk potion"," Pages 8-9 : The P potion"," Pages 10-11 : The X potion",""]);
Database.addAscii("places/cauldron/bookPage0",39,22,["0","","","______                   _","| ___ \\                 (_)","| |_/ /_ __ _____      ___ _ __   __ _","| ___ \\ '__/ _ \\ \\ /\\ / / | '_ \\ / _` |","| |_/ / | |  __/\\ V  V /| | | | | (_| |","\\____/|_|  \\___| \\_/\\_/ |_|_| |_|\\__, |","                                  __/ |","                                 |___/","                   _","      ___         (_)         __","    \\/   \\/   +    |   -->    )(","    /\\___/\\        |         /  \\","                   |        (____)","                                    _","                                   | |","  _ __ ___   __ _ _ __  _   _  __ _| |"," | '_ ` _ \\ / _` | '_ \\| | | |/ _` | |"," | | | | | | (_| | | | | |_| | (_| | |"," |_| |_| |_|\\__,_|_| |_|\\__,_|\\__,_|_|"]);
Database.addAscii("places/cauldron/bookPage7",38,20,["                                     7","","","","","","","           Important notice","           ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨","     concerning the berserk potion","     ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨","","  Do NOT add any candy when brewing","this potion.","","  I mean, not a single one.","","  Really.","","  Results would be unexpected."]);
Database.addAscii("places/cauldron/cauldron",42,18,["            _________________","           (_________________)","          .-'               '-.","        .'                     '.","       /                         \\","      '                           '","     '                             '","    '                               '","    '                               '","    '                               '","     \\                             /","      '.                         .'","        '-.___________________.-'","            / /           \\ \\","           / /             \\ \\","WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW","MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM","¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨"]);
Database.addAscii("places/cauldron/bookPage11",39,26,["                                    11",""," - Finally, the following poem is often","quoted when it comes to the X potion :","","          On the first day,","it gave birth to the very first Sweet.","       But it was cold outside.","","          On the second day,","      it gave the Sweet a father.","       But it was cold outside.","","          On the third day,","      it gave the Sweet a brother.","       But it was cold outside.","","          On the fourth day,","      it gave the Sweet a friend.","       But it was cold outside.","","          On the fifth day,","      it gave the Sweet a lover,","   and it may sound simple or silly,","     but now the Sweet was happy,","       and it was hot outside."]);
Database.addAscii("places/cauldron/bookPage4",40,25,["4","","","           Anti-gravity potion","           ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨","  This potion, which was invented by the","well-known sorcerer Isaac, allows you to","resist to the earth's gravitation force","for a few seconds.","","  It is especially useful after jumping","(if you can't jump, you should seriously","consider obtaining a pogo stick).","","  It isn't very easy to brew, you will","need to heat up your cauldron and watch","the temperature carefully.","","  Instructions :","   - Put 1000 candies in your cauldron","   - Heat up until the water is lukewarm","   - Stop heating up","   - Add 1000 candies","   - Heat up until the water is boiling","   - Put into bottles"]);
Database.addAscii("places/cauldron/book",96,30,["      _________________________________________   ________________________________________"," _.-' |                                        \\ /                                       | '-._","| | | |                                         v                                        | | | |","| | | |                                         |                                        | | | |","| | | |                                         |                                        | | | |","| | | |                                         |                                        | | | |","| | | |                                         |                                        | | | |","| | | |                                         |                                        | | | |","| | | |                                         |                                        | | | |","| | | |                                         |                                        | | | |","| | | |                                         |                                        | | | |","| | | |                                         |                                        | | | |","| | | |                                         |                                        | | | |","| | | |                                         |                                        | | | |","| | | |                                         |                                        | | | |","| | | |                                         |                                        | | | |","| | | |                                         |                                        | | | |","| | | |                                         |                                        | | | |","| | | |                                         |                                        | | | |","| | | |                                         |                                        | | | |","| | | |                                         |                                        | | | |","| | | |                                         |                                        | | | |","| | | |                                         |                                        | | | |","| | | |                                         |                                        | | | |","| | | |                                         |                                        | | | |","| | | |                                         |                                        | | | |","| | | |                                         |                                        | | | |","| | | |_________________________________________|________________________________________| | | |","| | |'__________________________________________^________________________________________'.| | |","|_|'___________________________________________/ \\_________________________________________'.|_|"]);
Database.addAscii("places/cauldron/bookPage3",39,26,["                                     3","","             Turtle potion","             ¨¨¨¨¨¨¨¨¨¨¨¨¨","  The turtle potion is a bit harder to","brew than the health potion. You will","need both candies and lollipops.","","  If you drink this potion in a quest,","it will turn you into a turtle. You","will move slower, but you will also be","more resistant to you enemies attacks.","","  Instructions :","   - Put 50 candies in your cauldron","   - Add 500 lollipops in your cauldron","   - Mix during more or less 10 seconds","   - Stop mixing","   - Add 50 candies","   - Mix again for a few seconds","   - Put into bottles","","  And now the most important thing you","should never forget : once you will be","a turtle, do NOT turn over. You","wouldn't be able to get up."]);
Database.addAscii("places/cauldron/bookPage2",39,22,["2","","","","              Health potion","              ¨¨¨¨¨¨¨¨¨¨¨¨¨","","  The health potion is one of the","easiest to brew, really. It only","requires candies. Used in quests, it","will heal you by giving you back 100","health points.","","  Instructions :","   - Put 100 candies in your cauldron","   - Mix for a few seconds","   - Put into bottles","","  Just like for any potion, you can of","course multiply the quantities. For","example, if you use 300 candies instead","of 100, you will get 3 health potions."]);
Database.addAscii("places/cauldron/bookPage5",39,23,["                                     5","","","     Anti-gravity potion : use case","     ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨",'           "Fly above a gap"',"","","_____\\o/_______            ____________","              /            \\","","","   *drinks the potion*","__________\\o/__            ____________","              /            \\","","","_______________     \\o/    ____________","              /            \\","","","_______________            __\\o/_______","              /            \\"]);
Database.addAscii("places/cauldron/bookPage6",40,23,["6","","","","             Berserk potion","             ¨¨¨¨¨¨¨¨¨¨¨¨¨¨","  The berserk potion transforms you into","a berserker.","","  The drawback is that it consumes half","of your life.","","  The benefit is that it doubles your","damage for a few seconds!","","  Brewing this potions is very simple,","but you will need a lot of lollipops.","Here are the instructions :","   - Put 20 000 lollipops in your","     cauldron","   - Mix them until your arms are","     hurting","   - Put into bottles"]);
Database.addAscii("places/cauldron/bookPage8",40,26,["8","              The P potion","              ¨¨¨¨¨¨¨¨¨¨¨¨","  The P potion is a strange one. You","cannot predict what it is going to do.","It could heal you or damage you, make","you stronger or weaker, or even turn you","into someone (something?) else.","","  And it's also hard to brew!","","  Instructions :","   - Put 500 candies in your cauldron","   - Mix for a few seconds","   - Stop mixing","   - Add 100 times more candies than the","number of seconds you mixed. For example","if you mixed during 4 seconds, you'll","need to add 400 candies. Do not multiply","this quantity, even if you want to make","more than one potion.","   - Heat up until the water is lukewarm","   - Stop heating up","   - Add some lollipops","   - Mix","   - Put into bottles!"]);
Database.addAscii("places/cauldron/bookPage9",40,21,["                                     9","","","","","    Make a good use of the P potion","    ¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨","  There are some rules which you can","follow in order to get better results","when drinking the P potion. Although","these rules were defined empirically,","they seem to work pretty well.","","  - The more you use P potions, the more","they seem to have strange effects.","","  - If your health is very low, you","should probably drink a P potion.","","  - Animals drinking P potions seem to","react in a very bad way."]);
Database.addAscii("places/fortress/inside",100,32,["                              |                                      |","                              |                                      |","                              |                                      |","                              |                                      |","                              |           _______________            |","                              |          |               |           |","                              |          |               |           |","                  _.-'|       |          |               |           |       |'-._","              _.-'    |       |          |              /|           |       |    '-._","          _.-'        |       |          |             / |           |       |        '-._","       .-'            |       |          |            /  |           |       |            '-.","       |              |       |          |           /   |           |       |              |","       |              |       |          |          /    |           |       |              |","       |              |       |          |         /     |           |       |              |","       |              |       |          |        /      |           |       |              |","       |              |       |          |       /       |           |       |              |","       |              |       |          |      /        |           |       |              |","       |              |       |          |     /         |           |       |              |","       |              |       |          |    /          |           |       |              |","       |              |       |          |   /           |           |       |              |","       |              |       |          |  /            |           |       |              |","       |-._           |       |          | /             |           |       |           _.-|","       |   '-._       |       |__________|/              |___________|       |       _.-'   |","       |       '-._   |    _.-'                                      '-._    |   _.-'       |","       |           '-.|_.-'                                              '-._|.-'           |","       |                                                                                    |","       |                                                                                    |","       |                                                                                    |","       |                                                                                    |","    _.-'                                                                                     '-._","_.-'                                                                                             '-.",""]);
Database.addAscii("places/theCave/exit",58,31,["","","","","","","       ____________________________________________","     /|                                            |\\","    / |                                            | \\","   /  |                                            |  \\","  /   |                     __/\\_                  |   \\"," /    |                 ___/     \\                 |    \\","/     |                /      ¨   \\                |     \\","      |              _/            \\               |","      |             /     ¨        /               |","      |            /            ¨ /                |","      |           /  ¨            |                |","      |          /                |                |","      |          \\                |                |","      |           \\        ¨      \\                |","      |           /   ¨            \\               |","      |       ___/                  \\__            |","      |      /                         \\___        |","      |   __/                              \\____   |","      |__/                                      \\__|","     /                                              \\","    /                                                \\","   /                                                  \\","  /                                                    \\"," /                                                      \\","/                                                        \\"]);
Database.addAscii("places/theCave/octopusKing",37,19,["                                /\\","             |\\/\\_/\\/|         :%%:"," /\\          |%.%:%.%|         |%%|","//\\\\      _.-'¯¯¯¯¯¯¯'-._      |%%|","\\\\//    /¯%%%%%%%%%%%%%%%¯\\    |%%|"," XX    /%%%%%._%%%%%_.%%%%%\\   |%%|"," ||   |%%%%%/-_'%%%'_-\\%%%%%|  |%%|"," ||   |%%%%%\\_/%%%%%\\_/%%%%%|  |%%|"," ||   |%%%%%%%%%%%%%%%%%%%%%|  |/\\|"," ||    \\%%%%%%WWWWWWW%%%%%%/   ||||"," ||     \\%%%%%%%%%%%%%%%%%/  ()=TT=()","(¯¯¯\\    |%%%%%%%_%%%%%%%|    /¯¯¯)"," TT\\%\\  /%/%/%/%/ \\%\\%\\%\\%\\  /%/TT"," || \\%\\/%/%/%/%/   \\%\\%\\%\\%\\/%/ ||"," ||  \\__/%/%/%(     )%\\%\\%\\__/ (oo)"," ||     (%(%(%(     )%)%)%)"," ||     (%(%(%(     )%)%)%)"," ||     (%(%(%(     )%)%)%)"," ||     (o(o(o(     )o)o)o)"]);
Database.addAscii("places/theCave/heartPlug",7,2,["|__|__|","|_____|"]);Database.addAscii("places/theCave/ways",58,32,["                        \\        /","","","","         _/|","        /  |                                   /\\","      _/____\\           /        \\            /__\\_","     /______/          /          \\           |    \\","    /      |          /            \\          |     |","    \\      |         /              \\         \\     \\","    /______/        /                \\         \\_____\\","   /_______\\       /                  \\        /     /","  |        /      /                    \\       |     \\","   \\______/      /                      \\      \\______\\","   /      \\     /                        \\     /      /","   \\       \\   /                          \\   /______/","   /       |  /                            \\  \\______\\","   \\       | /                              \\ /      /","   /_______|/                                \\|______|","  /                                                  |","  \\                                                  |","   \\                                                 \\","    \\                                                /","    /                                               /","   /                                                \\","   \\                                                 |","    |                                                /","   /                                                  \\","  /                                                    \\"," /                                                      \\","/                                                        \\",""]);
Database.addAscii("places/theCave/monkeyWizard",38,20,["                              .  .  .","              v              /%\\/%\\/%\\","          _ .~°~. _          \\_%%%%%_/","         \\_(%u%u%)_/           \\_%_/","        _.-%\\%v%/%-._           |%|","    .'°°%%%_(%_%)_%%%°°'.       |%|","   {_____%/._\\v/_.\\%_____}      |%|","  .'%%%%%%%%%%°%%%%%%%%%%'   _-o|%|o"," .'%%%.~%%_o%)%(%o_%%~.%%%'~'%%.|%|O",".'%%'   \\%%%%%%%%%%%/  '-%_.-' '|%|o","(%%(    |%%%%%%%%%%%|           |%|","\\%%\\    /%%%%%~%%%%%\\           |%|"," \\%'.  .%%%%%%_%%%%%%.          |%|","  \\%.°'%%%%_-' '-_%%%%'         |%|","  (_o/%%%/         \\%%%\\        |%|","     (%%(           )%%)        |_|","      \\%%\\         /%%/         (%)","      _-'%|       |%'-_        _/%\\_","     (oOo.)       (.oOo)      /_____\\",""]);
Database.addAscii("places/theCave/treasureMap",20,8,["        ooo    o","       ooooo   o","      ooooooo  o","  ooo   o o    o"," ooooo  o o    o","ooooooo  X      ooo","  o o              o","  o o"]);
Database.addAscii("places/theCave/chocolateBar",17,3,[" _______________","/__/__/__/__/__/|","|__|__|__|__|__|/"]);
Database.addAscii("places/aTree/ticTacToeBoard",22,13,[" _____________________","|      |      |      |","|      |      |      |","|      |      |      |","|______|______|______|","|      |      |      |","|      |      |      |","|      |      |      |","|______|______|______|","|      |      |      |","|      |      |      |","|      |      |      |","|______|______|______|"]);
Database.addAscii("places/aTree/ticTacToeO",4,3,[" __","|  |","|__|"]);Database.addAscii("places/aTree/background",70,52,["            |   |","            |   |","  |             |","  |             |","  |             |","                |","                |        _.-'''-,","                |      .'        `\\","                |     /           /","       |        |    /      .--^_^","       |        |    |     /  C ,,\\","                |    |    |   \\  _.)                           ___","                |     \\   |   /  \\                   ____.----'.-'","                |      '-, \\./ \\)\\)               .-' --  __.-'","    |            \\        `-/   );/           ___/  - _.-'","    |             \\_________''--'-'________.-' --    /","    |              -   --        -  -     -     __.-'","                     -    --    -     --   --  /","                   _________________________.-'","                  /","                 /","                |","          |     |","          |     |","          |     |","          |     |","                |","                |","                |","                |","      |         |","      |         |","      |         |","                |","                |","                |","                |","  |             |","  |             |","             |  |","             |  |","                |","                |","                |","                |","  |             |","  |             |","  |             |","  |             |","            |   |","            |   |","                |^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^"]);
Database.addAscii("places/aTree/ticTacToeX",2,2,["\\/","/\\"]);Database.addAscii("places/lighthouse/lighthouse",100,48,["","","                                                                ___","                                                               {=0=}","                                                               /---\\","                                                           ___/_____\\___","                                                           |[         ]|","                                                           |[         ]|","                                                        :  |+++++++++++|  :","                                                        :__|+++++++++++|__:","                                                             |#######|","                                                             |#######|","                                                             |#######|","                                                            |         |","                                                            |         |","                                                            |         |","                                                           |###########|","                                                           |###########|","                                                           |###########|","                                                          |             |","                                                          |             |","                                                          |             |","                                                         |###############|","                                                         |###############|","                                                         |###############|","                                                        |                 |","                                                        |                 |   __","                                                        |                 |  ( o)","                                                       |###################| /||","                                                       |###################|( ||","                                                  _____|###################|_\\_m\\","                                                 /                             |\\\\_","                                   _____________/                    --        | '-'","                       ___________/                                            |","                     _|                                                        |","                   _|     ----                      -----                      |","                 _|                                                             \\","               _|                                                  ---           |","             _|                                                                  |","           _|                       ---                                          |","__________|                                                                       \\","                                                                                   |"," ---                                                          --                   |","                                                                                   |","                                       ----                                        |","                   --                                                       ---    |","                                                                                   | _      _      _","                                                                                   \\)`'-.,_)`'-.,_)`"]);
Database.addAscii("places/lighthouse/puzzle/stonePart",7,5,["_______","\\ ___ /","// P \\\\","\\\\___//","/_____\\"]);
Database.addAscii("places/lighthouse/puzzle/nothingHerePart",7,5,["_______","\\ no  /","/thing\\","\\here!/","/_____\\"]);
Database.addAscii("places/lighthouse/puzzle/showLeftRight",7,5,["_______","\\     /","/  >  \\","\\  <  /","/_____\\"]);
Database.addAscii("places/lighthouse/puzzle/showAroundPart",7,5,["_______","\\     /","/ T > \\","\\ V < /","/_____\\"]);
Database.addAscii("places/lighthouse/puzzle/whatPart",7,5,["_______","\\     /","/ ? ? \\","\\     /","/_____\\"]);
Database.addAscii("places/lighthouse/puzzle/showRight",7,5,["_______","\\     /","/  >  \\","\\     /","/_____\\"]);
Database.addAscii("places/lighthouse/puzzle/livesPart",7,5,["_______","\\     /","/ <3  \\","\\  <3 /","/_____\\"]);
Database.addAscii("places/lighthouse/puzzle/showAbove",7,5,["_______","\\     /","/  T  \\","\\     /","/_____\\"]);
Database.addAscii("places/lighthouse/puzzle/showBelow",7,5,["_______","\\     /","/  V  \\","\\     /","/_____\\"]);
Database.addAscii("places/lighthouse/puzzle/moveBelowLineToTheRight",7,5,["_______","\\     /","/  V  \\","\\ --> /","/_____\\"]);
Database.addAscii("places/lighthouse/puzzle/blankPart",7,5,["_______","\\     /","/     \\","\\     /","/_____\\"]);
Database.addAscii("places/lighthouse/puzzle/moveLeftLineAbove",7,5,["_______","\\     /","/ < T \\","\\   | /","/_____\\"]);
Database.addAscii("places/lighthouse/puzzle/showLeft",7,5,["_______","\\     /","/  <  \\","\\     /","/_____\\"]);
Database.addAscii("places/quests/desert/tripodCamel2",7,2,["Q_/\\/\\","  | ||`"]);
Database.addAscii("places/quests/desert/birdRightDown",9,4,["","  _____<>",">-\\//_/","  //"]);
Database.addAscii("places/quests/desert/camel",7,2,["Q_/\\/\\","  ||||`"]);Database.addAscii("places/quests/desert/birdLeftUp",9,3,["     //","<>__//_","  \\___/-<"]);
Database.addAscii("places/quests/desert/background",149,9,["      //^\\\\                            //^\\\\                                                     //^\\\\","       '#'                              '#'                                                       '#'                                //^\\\\","       #                                 #                                                        #                                   '#'","      #                                  #                                                       #                                      #","      #                                  #                                                       #                                      #"," _.,--#---~--,._                        _#,--~---~--,._                         _.,--~---~---._   #                  _.,--~---~--,._     #","'               '*-,._            _.,-*'               '*-,._            _.,-~*'      ~        '*-#.           ._,-*'         ~     '*-,.#","   ~                  '*-,.__.,-*'      ~     ~              '-,.__.,--*'                  ~       '*-,.__.,-*'       ~                   '-,.__.,-*'","         ~       ~             ~                     ~                      ~                           ~                        ~"]);
Database.addAscii("places/quests/desert/tripodCamel1",7,2,["Q_/\\/\\","  || |`"]);
Database.addAscii("places/quests/desert/birdRightUp",9,3,["  \\\\","  _\\\\__<>",">-\\___/"]);
Database.addAscii("places/quests/desert/birdLeftDown",9,4,["","<>_____","  \\_\\\\/-<","     \\\\"]);
Database.addAscii("places/quests/theSea/bigShark",47,10,["              .´","             /(","            /%%\\                       __..--._","        ___/%%%%`._               _.-´¯%_.-´¯¯"," _..--´'¯%%%%%%%%%%%%¯`---..___.-´¯%%%%_-´","(%%%%%O%%%)))%%%%%%%%%%%%%%%%%%%%%%%%%%(_"," `vvvvv%%%%%%\\%%%%%/%%%%%%_.------._%%%%%¯`-._","   `----------\\%%%/----´¯¯          ¯`------´¯","               \\%/","                V"]);
Database.addAscii("places/quests/theSea/plant7",4,4,["  )-","-(","  )"," ("]);Database.addAscii("places/quests/theSea/plant1",3,4,[" )-","(","-)-","("]);
Database.addAscii("places/quests/theSea/jellyFish",6,5,[" ____","(o%%o)"," ))))","(((("," ))))"]);
Database.addAscii("places/quests/theSea/plant8",4,4,["\\MM/"," )%)","(%("," )_)"]);
Database.addAscii("places/quests/theSea/plant3",4,4,["  )"," (","  )-","-("]);Database.addAscii("places/quests/theSea/seahorse",4,4,[":=@"," {|<","  |","  J"]);
Database.addAscii("places/quests/theSea/plant0",4,4,["\\##/"," )%)","(%("," )_)"]);
Database.addAscii("places/quests/theSea/miniShark",19,5,["         ,        .","        /(.._,,_./|",'   _.-""%%%%%%%%%%|'," .´¤%}}}%%%%.-'-'\\|","´v-----\\|--'      '"]);
Database.addAscii("places/quests/theSea/plant6",4,9,["  )-"," (","  )","-(","  )-"," (","  )","-(","  )"]);
Database.addAscii("places/quests/theSea/plant2",3,6,["  )","-(-","  )","-(-","  )"," ("]);
Database.addAscii("places/quests/theSea/smallestFish",3,1,["()("]);Database.addAscii("places/quests/theSea/shellPowder",6,3,[" z.-);","})]`s",";h;-+-"]);
Database.addAscii("places/quests/theSea/plant5",4,4,["  )","-(","  )-"," ("]);Database.addAscii("places/quests/theSea/plant10",4,4,["\\@@/","(%("," )%)","(_("]);
Database.addAscii("places/quests/theSea/plant4",4,6,["  )","-(","  )","-(","  )-"," ("]);
Database.addAscii("places/quests/theSea/mediumFish",8,4,["  __"," /.%\\ /|","(%%%%X%|"," \\_V/ \\|"]);
Database.addAscii("places/quests/theSea/sponge",6,3,[" *~**","****-*"," *****"]);
Database.addAscii("places/quests/theSea/plant9",4,4,["\\##/","(%("," )%)","(_("]);
Database.addAscii("places/quests/theSea/seaSnake/4",78,11,["","","              _. -'('('- ._","           . '( ( ( ( ( ( (-( . _","    ___//('( ( (.(-'''.(_( (.( ( (-_"," _.c    ) ( ( '            '(_( ( ( -._                                  ____","/__  _ /. '                    '(.( ( ( ( -._                      _. - ( (.-'","  /.'                              ' (_( ( ( '- ._             _.-'( ( (.'","                                       '(.( ( ( ( '- . _ _ .-'( ( ( (.'","                                           '-(_( ( ( ( ( ( ( ( (_(-'","                                                '--(.(_( ( ( -'"]);
Database.addAscii("places/quests/theSea/seaSnake/5",78,11,["","                          _ _","                   _.-('( ( ( ('-.","               _.-'( ( ( ( ( ( ( ( ' .","           _-'( ( ( (.(- '  '-(_( (.( ( -","    ___//('( ( (_(-'            ' -( ( ( ( '._"," _.c    ) (_(.-'                    ' ( ( ( ( ( -._                       _.-/","/__  _ /.-'                               -( ( ( ( '- ._             _.-'( .'","  /.'                                         ' (.( ( ( '- . _ _ .-'( ( (.'","                                                   ' ( ( ( ( ( ( (_(_( '","                                                       '- ( (_(.(-'"]);
Database.addAscii("places/quests/theSea/seaSnake/9",101,10,["","","                                           _  .  -  -  -  .","                                       .-' ('( ( ( ( ( ( ( ( '-.","                                  _. '( ( ( (_( . . ----- . ( ( ('.","    ___//_                     _.( ( ( (_. '                   -( ( ("," _.c    ) (-._             _.-( ( ( (.-'                          '(_( '","/__  _ /_( ( ( ( - .....- '( ( (_-'                                  '( ( -","  /.'    '-.( ( ( ( ( ( ( ( ( -'                                         ( (\\","              ' -(.(_(_( - '                                                '|"]);
Database.addAscii("places/quests/theSea/seaSnake/3",78,11,["","","             __..__","    ___//_.-( ( ( ( ' -."," _.c    )( ( (_(_( (.( (' -_","/__  _ / _(.('     ' -(_( ( ( -._                                _ .  _","  /.'                   '-.( ( ( ( -._                      _.-( ( ( ( (' -_","                            ' (_( ( ( '- ._             _.-'( ( ( (-(- ' '- .\\","                                '(.( ( ( ( '- . _ _ .-'( ( (_(.-'","                                    '-(_( ( ( ( ( ( ( ( (_('","                                         '--(.(_( ( ( -'"]);
Database.addAscii("places/quests/theSea/seaSnake/10",103,10,["","","                                                 _  .  -  -  -  .","                                             .-' ('( ( ( ( ( ( ( ( (-.","    ___//_                              _. '( ( ( (_( . . ----- . ( ( ('."," _.c    )(' -. _                     _.( ( ( (_. '                '. ( ( (.","/__  _ /( ( ( ( (-._             _.-( ( ( (.-'                        '-( (\\","  /.'    ' -.(_( ( ( ( - .....- '( ( (_-'                                '.(\\","               '-.( ( ( ( ( ( ( ( ( -'                                     \\('","                    ' -(.(_(_( - '                                          \\|"]);
Database.addAscii("places/quests/theSea/seaSnake/11",111,10,["","","                                                         _ _ _","    ___//_                                        _.- '( ( ( ( ('-._"," _.c    ) ( - _                               _-( ( ( ( (_(_(_( ( ( (-_","/__  _ /_( ( ( (' -. _                     _.( ( ( (_.- '     '  -.( ( (.","  /.'    ' -(_( ( ( ( (-._             _.-( ( ( (.-'                '-( ('.","               ' -.(_( ( ( ( - .....- '( ( (_-'                        '-( (.","                     '-.( ( ( ( ( ( ( ( ( -'                              '.(\\","                          ' -(.(_(_( - '                                    '-"]);
Database.addAscii("places/quests/theSea/seaSnake/6",84,11,["","                              _ _ . _","                        _.- '( ( ( ( ( ('-.","                    .-(.('( ( ( ( ( ( ( ( ('.","               _. '( ( ( (.( -'''''''''-(_( (.(-","            _.( ( ( (_. '                 '( ( ( (-_","    ___//.-( ( ( (.-'                       ' ( ( ( (-                     /|"," _.c    ) ( (_(-'                               -( ( ( (- ._            _.( /","/__  _ /_(.('                                     ' (.( ( ( '- . _ _ .-( (.'","  /.'                                                 ' ( ( ( ( ( ( ( (_-'","                                                           ' - ( ( ( '"]);
Database.addAscii("places/quests/theSea/seaSnake/2",79,11,["","","    ___//_.__"," _.c    )( ( (-( . _","/__  _ /(_(_( (.( ( (-_","  /.'        ' '(_( ( ( -._                                _ .- - . _","                  '(.( ( ( ( -._                      _.-' ( ( ( ( ( (-_","                      ' (_( ( ( '- _              _.-'( ( ( ( (-'-(.(_( '-.","                          '(.( ( ( ( '- . _ _ .-'( ( ( (.-'           '-(_('.","                              '-(_( ( ( ( ( ( ( ( (_(-'                   '(.\\","                                  '--(.(_( ( ( -'"]);
Database.addAscii("places/quests/theSea/seaSnake/7",89,11,["","                                    _ _ . _","                              _.- '( ( ( ( ( ('-.","                          .-(.('( ( ( ( ( ( ( ( ('.","                     _. '( ( ( (.( -'''''''''-(_( (.(-","                  _.( ( ( (_. '                 '( ( ( (_","              _.-( ( ( (.-'                       ' ( ( ( '","    ___//__.-'( ( (_(-'                               -( ( ( (._            _."," _.c    )( ( ( (.('                                     ' (.( ( '- . _ _ .-( /","/__  _ /__( (-'                                             ' ( ( ( ( ( ( (.'","  /.'                                                            ' ( ( (-'"]);
Database.addAscii("places/quests/theSea/seaSnake/8",96,10,["","","                                     _ . - '( ( (' - . _","                                 .-' ('( ( ( ( ( ( ( ( ( -","                            _. '( ( ( (.(- - ''' - -  ( ( ( (","                         _.( ( ( (_. '                  '( ( ( -","    ___//            _.-( ( ( (.-'                         '( ( ( -"," _.c    )( - .._..-' ( ( (_-'                                 -( ( (._","/__  _ /( ( ( ( ( ( ( ( -'                                      '(.( ('- . __","  /.'     ' -(_(_( - '                                              '-( ( ( .'"]);
Database.addAscii("places/quests/theSea/seaSnake/12",101,11,["","","    ___//"," _.c    )_                                               _ _ _","/__  _ /_ ( - _                                   _.- '( ( ( ( ('-._","  /.'   _( ( ( (' -. _                     _. _-( ( ( ( (_(_(_( ( ( (-_","         ' -(_( ( ( ( (-._             _.-( (( ( ( (_.- '     '  -.( ( (.","               ' -.(_( ( ( ( - .....- '( ( (_ ( (.-'                '-( ('.","                     '-.( ( ( ( ( ( ( ( ( -' -'                        '-( (.","                          ' -(.(_(_( - '                                  '.(\\","                                                                            '-"]);
Database.addAscii("places/quests/theSea/seaSnake/1",78,11,["","    ___//"," _.c    )_","/__  _ /( (-_","  /.' '(.( ( (-_","         '(_( ( ( -._                                _ .- ( -._","            '(.( ( ( ( -._                      _.-( ( ( ( ( ( (-._","                ' (_( ( ( '- ._             _.-'( ( ( ( (-(-(.(_( ('-._","                    '(.( ( ( ( '- . _ _ .-'( ( ( (.-'          '-(_( ('-_","                        '-(_( ( ( ( ( ( ( ( (_(-'                   '-(_('-_","                            '--(.(_( ( ( -'                            ' - ('>"]);
Database.addAscii("places/quests/giantNougatMonster/monsterAwake",15,4,[" .-'¨¨¨¨¨¨¨'.","/o%%%%%%%%%%%'.","\\%%%%%%%%%%%%.'"," '-._._._._-'"]);
Database.addAscii("places/quests/giantNougatMonster/monsterAngry",15,4,[" .-'¨¨¨¨¨¨¨'.","/O%%%%%%%%%%%'.","\\%%%%%%%%%%%%.'"," '-._._._._-'"]);
Database.addAscii("places/quests/giantNougatMonster/monster",15,4,[" .-'¨¨¨¨¨¨¨'.","/-%%%%%%%%%%%'.","\\%%%%%%%%%%%%.'"," '-._._._._-'"]);
Database.addAscii("places/quests/bridge/bridge",138,15,["__________________________________________________________________________________________________________________________________________","¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨","__________________________________________________________________________________________________________________________________________","   \\__    __/                                                   \\__    __/                                                    \\__    __/","      |  |                                                         |  |                                                          |  |","      |  |                                                         |  |                                                          |  |","      |  |                                                         |  |                                                          |  |","      |  |                                          -._       \\    |  |,    /       _.-                                          |  |","      |  |                                             '-._      .d|  | b.      _.-'                                             |  |","      |  |                                                      d  |  |   b    '                                                 |  |","      |  |                                                     d   |  |    b                                                     |  |","°º¤ø,¸|  |º°`°º¤ø,¸,ø¤°º¤ø,¸¸,ø¤º°`°º¤ø,¸,ø¤º°`°º¤ø,¸,ø¤°º¤ø,¸¸,ø¤º|  |¤ø,¸,ø¤º°`°º¤ø,¸,ø¤°º¤ø,¸¸,ø¤º°`°º¤ø,¸,ø¤º°`°º¤ø,¸,ø¤°º¤ø,|  |¤º°`°"," ~ ~ ~|  | ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ |  |~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ |  |~ ~ ~","~~~~~~|~~|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|~~|~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~|~~|~~~~~","~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~"]);
Database.addAscii("places/quests/bridge/troll",15,10,["           /\\","    (_)   /< \\>","    /∞\\  <\\ >/>","  __\\ö/_   ||"," /  O-O \\_/|3","| /|:::|\\_/||","| ||~~~|   ()","mm |\\_/|","   || ||","  /_|/_|"]);
Database.addAscii("places/quests/monkeyWizard/monkeyWizard",4,4,["   W"," O_|","/| |","( )|"]);
Database.addAscii("places/quests/monkeyWizard/roof",100,5,["     .         .               .               .                    .         .               .","       ___________ .               .                        .       ___              .","  ____/           \\_____    .                ______________________/   \\___________              ."," /                      \\___________________/                                      \\_______________","/                                                                                                  \\"]);
Database.addAscii("places/quests/cellar/rat",3,1,["rat"]);Database.addAscii("places/quests/castleEntrance/knight3",15,6,["       _","  _:  {_)","-'°%\\_//|__"," ¨\\%%%%||%%\\'-.","   `..---..'","    |\\   |\\"]);
Database.addAscii("places/quests/castleEntrance/front",18,30,["","","","","","","","||___|___|___||","|__|___|___|__|","||___|___|___||","|__|___|___|__|","||___|___|___||","|__|___|___|__|","||___|___|___||","|__|___|___|__|","||___|___|___||","|__|___|___|__|","||___|___|___||","|__|___|___|__|","||___|___|___||","|__|___|___|__|  /","||___|___|___||  |","|__|___|___|__|  |","||___|___|___||  |","|__|___|___|__|  |","||___|___|___||  |","|__|___|___|__|  |","||___|___|___||  /","|__|___|___|__| /","||___|___|___||/"]);
Database.addAscii("places/quests/castleEntrance/knight4",15,6,["       _","  _:  {_)","-'°%\\_//|__"," ¨\\%%%%||%%\\'-.","   `..---..'","    \\\\   \\\\"]);
Database.addAscii("places/quests/castleEntrance/knight2",15,6,["       _","  _:  {_)","-'°%\\_//|__"," ¨\\%%%%||%%\\'-.","   `..---..'","    /|   ||"]);
Database.addAscii("places/quests/castleEntrance/knight5",15,6,["       _","  _:  {_)","-'°%\\_//|__"," ¨\\%%%%||%%\\'-.","   `..---..'","    |\\   \\\\"]);
Database.addAscii("places/quests/castleEntrance/background",149,31,["                                                                                                              |   |    |   |/                       /","                                                                                                            _/__     ____  /                       /","                                                                                                           /___/|   /___/|/                       /","                                                                                                           |   |    |   |/                       /","                                                                                                         _/__     ____  /                       /","                                                                                                        /___/|   /___/|/                       /","                                                                                                        |___|/___|___|/                       /","                                                                                                                                             /","                                                                                                                                            /","                                                                                                                                           /","                                                                                                                                          /","                                                                                                                                         /","                                                                                                                                        /","                                                                                                                                       /","                                                                                                                                      /","                               ¨                                                                                                     /","                                                                                                                                    /","                                                                                                                            /|     /","                   ¨                                                                                                       / |    /","                                                                                                                          /  |   /","                                                 ¨                                                                           |  /","                                                                                                                             | /","    ¨                                                          ¨                                                          ___|/","                                   ¨                                         ¨        ¨","                       ¨                           ¨                                             ¨","            ¨                  ¨","      ¨                                                         ¨","                       ¨                                                   ¨                       ¨","                                                                                        ¨","                                                        ¨",""]);
Database.addAscii("places/quests/castleEntrance/knight1",15,6,["       _","  _:  {_)","-'°%\\_//|__"," ¨\\%%%%||%%\\'-.","   `..---..'","    ||   ||"]);
Database.addAscii("places/quests/fortress/room3",100,31,["                         ~                                 ~                               ~","     ~          __________________________________________________________________________","               /                                                                          \\        ~","               |                                                                           |","           ~   |                                                                           |","               |                                                                           |  ~","   ~           |                                                                   _______/","               |                                                                  /","               |                                                                  |","          ~    |                                                                  |   ~","               |                                                                  |             ~","  ~            |                                                                  |","               |                                                                  |          ~","               |                                                                  |","               |                                                                  |","    ~          |                                                                  |  ~","               |                                                                  |","               |                                                                  |             ~","            ~  |                                                                  |","               |                                                                  |    ~","     ~         |                                                                  |          ~","               |                                                                  |","               |                                                                  |","               |                                                                  |   ~","_______________/                                                                  |                ~","                                                                                  |","                                                                                  |","                                                                                  |       ~","                                                                                  |","                                                                                  |          ~","__________________________________________________________________________________|  ~"]);
Database.addAscii("places/quests/fortress/room2",100,17,["                           ~                         ~                        ~","                ~                              ~                                             ~","    ~                                                       ~         ~","________________________________________________________________________________________________ ~","                                                                                                \\","                                                                                                 |","                                                                                                 | ~","                                                                                                 |","                                                                                                 |","                                                                                                 |","                                                                                                 |","                                                                                                 | ~","                                                                                                 |","____________________                                                            ________________/","        ~           \\________________                       ___________________/           ~      ~","                ~              ~     \\_____________________/           ~","    ~                                           ~                                  ~            ~"]);
Database.addAscii("places/quests/fortress/xinopherydon",17,6,[" ___","/o  \\___     ___","\\__     \\___/  o\\","   \\     _     _/","    \\   / \\   /","     \\_/   \\_/"]);
Database.addAscii("places/quests/fortress/room1",208,31,["        ~                ~                                 ~                               ~                                  ~                                                           ~                    ~","________________________________________________________________________________________________________________________________________________________________________________________________________","                                  |   |                                                                                                                                                                 \\","                                  |   |                                                                                                                                                                  |","                                  | ~ |                                                                                                                                                                  | ~","                                  |   |                                                                                                                                                                  |","                                  |   |                                                                                                                                                                  |","______________                    |  ~|                                                                                                                       __________________________________________/","              \\                   |   |                                                                                                                      /                                               ~","          ~    |                  |   |                                                   ____________     ___________________________________               |                      ~","               |                  |   |                   ____     __      _     ___     /            |   /          ~                   ~    \\              |       ~","  ~            |                  |~  |                  /    \\   /  \\    / \\   /   \\    |    ~       |   \\___________________________________/              |                                         ~","               |                  \\___/         ____     |   ~|   |  |    | |   |   |    |            |                                                      |                              ~","               |                               /    \\    |    |   | ~|    | |   |~  |    |            |                                                      |          ~","               |                   _______     |    |    |    |   |  |    | |   |   |    |            |_____     _____________________________               |                       ~                        ~","    ~          |                  /       \\    |    |    |    |   |  |    |~|   |   |    |        ~         |   /         ~          ~        \\              |                                    ~","               |                  |       |    | ~  |    | ~  |   |  |    | |   | ~ |    |                  |   \\_____________________________/              |","               |                  |     ~ |    |    |    |    |   \\__/    \\_/   \\___/    |               ~  |                                                |                        _________________________","            ~  |                  | ~     |    |    |    |    \\_____________________     | ~                |                                                |    ~                  /                         |","               |                  |       |    |    |    |                          |    |                  |_____     _______________________               |               ~      /                          |","     ~         |                  |       |    |    |    |                          |    |                        |   /  ~       ~          ~ \\              |                     /                           |","               |                  |       |    |    |    |           ~              |    |       ~                |   \\_______________________/              \\____________________/                            |","               |                  |    ~  |    |  ~ |    |                       ~  |    |                        |                                                                      _                     |","               |                  |       |    |    |    |     ~                    |    |                  ~     |                                                                     | |                    |","          ~    |                  |       |    |    |    |                          |    |                        |_____________________________________________              _____     | |___________________/","               |                  | ~     |    |    |    |                          |    |  ~                                                                 ~ \\            /     \\    |","  ~            |                  |       |    |    |    |                ~         |    |          ~                     ~               ~                     |            |  ~  |    |    ~          ~","               |                  |       |    |~   |    |                          |    |                                                      ~               |            |     |    |","               |                  |       |    |    |    |   ~                      |    |                                                                      |            |     |    |                     ~","            ~  |                  |   ~   |    |    |    |          ~           ~   |    |      ~              ~               ~                      ~         |            | ~   |    |          ~","   ~           |__________________|_______|____|    |____|__________________________|____|______________________________________________________________________|____________|_____|____|_______________________"]);
Database.addAscii("places/quests/fortress/teapot",19,6,["",". -   .-'¨¨'-."," \\%\\./`¨¨¨¨¨¨`\\/'\".",'  \\%;%%%%%%%%%%;%%"','   \\;%%%%%%%%%%;%."','     \\________/ "']);
Database.addAscii("places/quests/theHole/lostTribeWarrior",4,4,["▲","|_O/","| |","|/ \\"]);
Database.addAscii("places/quests/theHole/background",100,136,["                                        |                  |","                                        |                  |","                          -             |                  |                                       ^","                                        |                  |","        ^                               |                  |","                                        |                  |               ^","                                        |                  |      -                      -","            -                           |                  |","                        ^               |                  |","                                        |                  |","                                        |                  |                        -","                                -       |                  |                                      ^","    -                                   |                  |          ^","                                        |                  |","                                        |                  |","             ^                          |                  |          -","                                        |                  |                     ^             -","                              ^         |                  |","                                        |                  |","                                        |                  |","             -                          |                  |                                ^","                                        |                  |      -","                        ^               |                  |","                                       /                   |              ^","                                      /                    |                             -","  ^                                  /                      \\","                          -       __/                        \\","                                 /                            \\","                                /                              \\      -","      -                        /                                |","                              /                                 |                ^","                ^            /                                  |","                            /                                   |                           -","                           /                                    |","                          /                                     |","                         /                                      |               -","                 -      /                                       |","        ^              /                                        |     ^","                      /                                         |","                      |                                         |                          ^","    -                 |                                         |","                      |                                         |","                ^     |                     ____________________|             -","                      |                     \\","             -        |                      \\          ^","                      |                       \\___","                   ^  |                           \\______          -           ^","                      |                                  \\___________                         -","    ^                 |                                              \\","                      |                                               \\____","                      |                                                    \\________         ^","                      |                                                             \\","    -            -    |                                                              \\______","                      |                                                                     \\","          ^           |                                                             _____    \\   -","                      |                                                            /     |    |","                      |                                                           /     /     |","                      |                                                       ___/     /      \\","                      |                                                      /        /        \\","    -                 |______________________                               /         |         \\","                                            /                           ___/    ^     |          \\","                            ______     ____/                           /              |           |","                     ^     /      \\___/                               /         -     |   ________|","                          /                                 ___      /                |   \\_______|","                 -       |                                 /   \\____/             ^   |           |","                         |                            ____/             ^             |           |","                         |                           /                                |           |","     ^                    \\_______                  /     ^      -                    |           |","                                 /             ____/                              -   |           |","                                /             /                          ^            |____   ____|","                            ___/             /     -         _____________________        /   \\","                  ^     -  /                 \\_____        _/                     \\______/     |","     -                    /          __            \\     _/                                    |","        ^                /          /  \\            \\ -  \\                                     |","                 _______/          /    \\            \\    \\____________________________________/","                /                 / -    \\_______     \\                                         ^","     __________/                 /               |     |      ^                -"," -  /                           /     ^        - |     |       ____________","   |                            \\                |     |    __/            \\___________    ^","   |                             \\    -      ^   |     |___/                           \\       -","   |                              \\              |                                      \\","  /                                \\             |                                       \\     ^"," |                                  \\            |   ______________________               \\"," |                                   |        -  |   \\                     \\___________    \\"," |                                   |  ^        |    \\   -    ^                       |    \\"," |                                   |           |     \\___               ^        -   |     |"," |                                   \\           \\         \\     -             _______/      |"," |                                    \\     -     \\         |      ___________/              |"," |                                     \\_____      \\        |    _/                          |"," |                                           \\      \\_     /    /                            |   -"," |                                            \\  -    |   |    |                             |"," |                                             |      |   |    |                             |"," |                                             |    ^ |   |     \\________                    |"," |                                             |      |   |              \\____               |"," |                                             |      |   |      ^            \\____          | -"," \\_________                      _____________/       |   |   -                    \\_________/","           \\            __   ___/                  -  |   |              -                         ^","            \\__________/  | |                         |   |                            ^","     ^                    | |         -               |    \\","               -        ^ | |                   ^     |     \\__________     ^               -","                          | |-                        |                \\__________","     -                    | |                         |__                         \\_________","              ^         __| |______                      \\_______                           \\    ^","                     __/           \\          -                  \\___                       /","                    /               \\____                            \\____                 |","            -      /                     \\               ^                \\____________    |","                  /                      /                                             |   |","     ^           |            __________/                  -         ^          -      |   |   -","                 |           /                  ^                                      |   |","                 |          /         -                              __________________/   |","                  \\________/                              __________/                      |","    -         ^                         _________________/                      _______    |  ^","                           -   ________/                                       /       |   |","         _____________________/                                               /    -   |   |","   ^    /                                                                    /         |   |","       /                                                                    /          |   |","      /                                                                    /    -   ^  |   |     -","  -  |                                                                    /            |   |","     |                                                                  _/             |   |","     |                                                                 /             - |   |       ^"," ^  /                                                                 /                |   |","   /                                                                 /   -             |   |","  |                                                                _/                  |   |","  |                                                              _/                    |   |","  |                                                           __/      ^               |   |   ^","- |                                                      ____/                     ^   |   |","  |                                                _____/                -             |   |","  |                                       ________/                                   /    |","  |                         _____________/                                           /     |  -","   \\_______________________/                                                    ____/      |","                                     ^                -                  ______/          /"," -                            -                                         /                /","       ^                                                      ^        /              __/","                      ^                                               /        ______/","                -                             -                       |_______/           -",""]);
Database.addAscii("places/quests/common/chestOpenedRight",3,2,["(","|_|"]);Database.addAscii("places/quests/common/chestClosed",3,2,[" _","|_|"]);
Database.addAscii("places/quests/common/chestOpenedLeft",3,2,["  )","|_|"]);Database.addAscii("places/quests/octopusKing/octopusKing",6,4,["  WW"," /..\\"," \\  /","///\\\\\\"]);
Database.addAscii("places/quests/octopusKing/roof",100,5,["       .               .            .            .                  .             .            .","   .   ___________              .                        .          ___  .                  .","  ____/           \\_____  .                . ______________________/   \\___________   .          ."," /                      \\___________________/                                      \\_______________","/                                                                                                  \\"]);
Database.addAscii("places/quests/hell/demonBubbles1",5,3,[" oOo","OooOo"," oOoO"]);
Database.addAscii("places/quests/hell/demonBubbles6",5,3,["oOoO","  oOo","OooOo"]);
Database.addAscii("places/quests/hell/demonCube",5,3,[".-'-.",";°%°;","'-.-'"]);Database.addAscii("places/quests/hell/demonBubbles3",5,3,[" oO","OooO","ooOoO"]);
Database.addAscii("places/quests/hell/demonBubbles4",5,3,["  Oo"," OooO","ooOoO"]);
Database.addAscii("places/quests/hell/demonBubbles2",5,3,["oOoo"," OooO","Ooo"]);
Database.addAscii("places/quests/hell/demonBubbles5",5,3,["oOoo"," Ooo","OoOOo"]);
Database.addAscii("places/quests/hell/devil",8,6,["/(    )\\","\\%\\__/%/","(%%%%%%)"," \\%%%%/","  \\%%/","   ¨¨"]);
Database.addAscii("places/quests/hell/demonBubbles0",5,3,["OooO"," ooOo","oOo"]);
Database.addAscii("places/quests/hell/camazotz",22,8,["         ____","        /%%%%\\","   _    \\`%ˊ /    _","  /%`'-._)%%(_.-'`%\\"," /%%%%%%/%%%%\\%%%%%%\\","/.-.-.-.\\%%%%/.-.-.-.\\","         '..'","          WW"]);
Database.addAscii("places/quests/hell/background",150,10,["_______________________________________________________                _______________________            ____________________________________________","                                                      /|              |\\                     /|          |\\","                                                     / |              | \\                   / |          | \\","                                                    /  |              |  \\                 /  |          |  \\","___________________________________________________/   |              |   \\_______________/   |          |   \\________________________________________","                                                   |   |              |   |               |   |          |   |","                                                   |   /              \\   |               |   /          \\   |","                                                   |  /                \\  |               |  /            \\  |","                                                   | /                  \\ |               | /              \\ |","___________________________________________________|/                    \\|_______________|/                \\|________________________________________"]);
Database.addAscii("places/quests/hell/demonEyes",5,4,["_____","\\è%é/"," )%(","/___\\"]);
Database.addAscii("places/quests/developer/hello",38,5,["B    B   BBBBB   B       B       BBBBB","B    B   B       B       B       B   B","BBBBBB   BBBBB   B       B       B   B","B    B   B       B       B       B   B","B    B   BBBBB   BBBBB   BBBBB   BBBBB"]);
Database.addAscii("places/quests/developer/imgladyoumadeitsofar",94,12,["YYYYY  Y  YY YY      YYYYY   Y       YYYYY   YYY        O   O   OOOOO   O   O","  Y       Y Y Y      Y       Y       Y   Y   Y  YY       O O    O   O   O   O","  Y       Y   Y      Y  YY   Y       YYYYY   Y   Y        O     O   O   O   O","  Y       Y   Y      Y   Y   Y       Y   Y   Y  YY        O     O   O   O   O","YYYYY     Y   Y      YYYYY   YYYYY   Y   Y   YYY          O     OOOOO   OOOOO","","","YY YY   YYYYY   YYY     YYYYY      YYYYY   YYYYY      YYYYY   YYYYY      YYYYY   YYYYY   YYYYY","Y Y Y   Y   Y   Y  YY   Y            Y       Y        Y       Y   Y      Y       Y   Y   Y   Y","Y   Y   YYYYY   Y   Y   YYYYY        Y       Y        YYYYY   Y   Y      YYYYY   YYYYY   YYYYY","Y   Y   Y   Y   Y  YY   Y            Y       Y            Y   Y   Y      Y       Y   Y   Y  Y","Y   Y   Y   Y   YYY     YYYYY      YYYYY     Y        YYYYY   YYYYY      Y       Y   Y   Y   Y"]);
Database.addAscii("places/quests/developer/me",43,34,["                    ######","                ############","               ##############","            ##################","           ####################","          #######XxxxxxxX#######","         ######x++===--=++x######","         #####X+=--------=+x#####","         #####x+==-------==xX#####","         ####X++==--------=+x######","         ####X++=---------==x######","         ####x+=----;-----==xX######","         ####x==----------==xX######","         ####XXxxx==---=++xx+X######","         ####XxxXxxx+++XXXXxXX#######","        #####XX#XXx+-++xXXxxxX#######","        #####X###xx+;=xxx#xXxx#######","        ####Xxxxxx+=;==+xxxxxx#######","       #####x++===+=;======++xX######","       #####x+==-=+=-=+--====+X######","       #####x+=--=+=-=+=--===x#######","       #####x+=--=xx=++=--==++#######","       #####X+==-=xxxxx=--==+x########","       ######x+===x#+xx==-=+xX########","      #######xx++x#XxX#x+=++xX########","      #######xxXXXXx+xXxXxx+x#########","      #######XxxxXxx+++xXxXxx#########","      ########xx+xx++++x++xxX#########","     #########XxxxxxXXxx++xx##########","     ##########Xxxxxxxx++xxX###########","    ###########Xxx++++++xxX############","  ##############Xx++x++xxx##############"," ################XXxxxxxx################","######################X####################"]);
Database.addAscii("places/quests/developer/love",16,5,["    Y      BBBBB","  Y            B","Y          BBBBB","  Y            B","    Y      BBBBB"]);
Database.addAscii("places/quests/forest/treeSpirit",5,5,["_____","°|||°","=|||="," |||"," |||"]);
Database.addAscii("places/quests/forest/background",98,17,["  |   \\\\|.'    |  |    \\\\|.'   |  |     \\\\|.'  |  |   \\\\|.'    |  |    \\\\|.'   |  |     \\\\|.'  |"," ||   \\` /   _.| ||,!  \\` /   _| ||\\,!  \\` /   | ||   \\` /   _.| ||,!  \\` /   _| ||\\,!  \\` /   | |","|||`. | |_.-'.'||||\\`. | |_.-'.|||| \\`. | |_.-'||||`\\ |||_.-'.'||||\\`. | |_.-'.|||| \\`. | |_.-'|||"," ||\\ \\|! ,-'   | || \\ \\|! ,-'  | ||  \\ \\|! ,-' | ||\\ \\|  ,-'   | || \\ \\|! ,-'  | ||  \\ \\|! ,-' | |","| | \\  ||      || |  \\  ||     |  |   \\  ||    || | \\  ||      || |  \\  ||     || |   \\  ||    ||","|||  \\  |      ||||   `. |     ||||    `. |    ||||  `. |      || |   `. |     ||||    `. |    | |","| |   | |      || |    | |     || |     | |    || |   | |      || |    | |     || |     | |    ||"," ||   |||      | ||    |||     | ||     |||    | ||   |||      | ||    |||     | ||     |||    | |","|||   | |      || |    | | ¨   ||||     | |    |||| ¨ | |      ||||    | | ¨   || |     | |    |||","| |   | |  ¨   || | ¨  | |     || | ¨   | | ¨  |  |   | |      || |¨   | |     || | ¨   | |  ¨ ||","  | , !|| ,    | ||   ,! |  , \\| ||   / ! |    | || , !|| ,    | ||   ,! |  , \\| ||   / ! |    | |","| |   '-`      || |    '-`     || |     '-`    || |   '-`      || |    '-`     || |     '-`    ||","'| \\ ¨        / '| \\  ¨       / '| \\    ¨     / '| \\      ¨   / '| \\       ¨  / '| \\      ¨   / '|","","          ¨      ¨           ¨          ¨              ¨      ¨             ¨           ¨¨     ¨","  ¨                  ¨                       ¨                  ¨                   ¨       ¨","      ¨                 ¨           ¨                     ¨              ¨               ¨      ¨"]);
Database.addAscii("places/quests/forest/wolf/rightStanding",7,3,["     _"," ___)''","`|| ||"]);
Database.addAscii("places/quests/forest/wolf/leftStanding",7,3,[" _","''(___"," || ||`"]);
Database.addAscii("places/quests/forest/wolf/rightRunning",7,3,["     _"," ___)''","`// //"]);
Database.addAscii("places/quests/forest/wolf/leftRunning",7,3,[" _","''(___"," \\\\ \\\\`"]);
Database.addAscii("places/quests/castle/room1/background",100,24,["","","       ________________________________________________________________________________________","      |                                                                                        |","      |                                                                                        |","      |                                                                                        |","      |                                                                                        |","      |                                                                                        |____","      |","      |","      |                                                                                         ____","      |                                                                                        |","      |                                                                                        |","      |                                                                                        |","      |                                                                                        |","      |                                                                                        |","      |                                                                                        |","      |                                                                                        |","      |                                                                                        |","      |                                                                                        |","      |                                                                                        |","      |                                                                                        |","      |                                                                                        |","      |________________________________________________________________________________________|"]);
Database.addAscii("places/quests/castle/room3/egg",2,1,["()"]);Database.addAscii("places/quests/castle/room3/background",100,24,["","","       ________________________________________________________________________________________","      |                                                                                        |","      |                                                                                        |","      |                                                                                        |","      |                                                                                        |","      |                                                                                        |","      |                                                                                        |","      |                                                                                        |","      |                                                                                        |","      |                                                                                        |","      |                                                                                        |","      |                                                                                        |","      |                                                                                        |","      |                                                                                        |","      |                                                                                        |","      |                                                                                        |","      |                                                                                        |","      |                                                                                        |","      |                                                                                        |____","      |","      |","      |_____________________________________________________________________________________________"]);
Database.addAscii("places/quests/castle/room3/monster",13,4,["\\  _______  /"," \\/%%%%%%%\\/","  \\%°%.%°%/","   \\_____/"]);
Database.addAscii("places/village/forge",97,35,["  /        |          |         | |       ||_|_________|____                         |        \\"," /         |          |         | |      /||_|_________|___ \\                        |         \\","|          |          |         | |      \\||_|_________|____/                        |          |","|          |          |         | |       || '         '                             |          |","|          |          |         | |                                   ______         |          |","|          |          |         | |                                .-' ____ '-.      |          |","|          |          |         | |                                \\.-'    '-./      |          |","|          |          |         | |                 __|_________|___\\        /       |          |","|          |          |         | |                |__|_________|___/        \\       |          |","|          |          |         | |                   '         '  /'-.____.-'\\      |          |","|          |    ______|         | |_______                         '-.______.-'      |          |","|          |   /      |_________|/       /\\                                          |          |","|          |  /   o----                 / /                            ||            |          |","|          | /_________________________/ /                            /  \\           |          |","|          |/__________________________\\/                             \\  /     ____  |          |","|          |                                                          .\\/.    |____| |          |","|          |                                    _____                  /\\      :||:  |          |","|          |              )                    / ~~~ \\                /  \\      ||   |          |","|          |             (                     \\ `¿´ /               /    \\     ||   |          |","|          |    _____)_________________      _.-\\ - /-._            /      \\         |          |","|          |   /  __(__________)____  /|  /¯¯¯¯/¯|¯|¯\\¯¯¯¯\\     _________________    |          |","|          |  /  :@@@@@@@@@@@@(@@@@: / | (  ´)|´  ¯  `|(´  )    \\________________\\   |          |","|          |  :. '-.@@@@@@@@@@@@.-' .: | |   ||       ||   |     \\               /   |          |","|          |  : '.  '-.______.-'  .' : |  \\   )|     |(   /       '-._________.-'    |          |","|          |__:   '-.__________.-'   : |___\\==||_____||==/____|¯¯|_____||  |_________|          |","|         /   :     |----------|     : |---/  |+-----++:0+----|  |    .'|  |_         \\         |","|        /    :     |----------|     :/'---UUUU+--+--+0000----|  |   |\\.'__'.\\         \\        |","|       /     '-.   |----------|   .-'         |  |  |        |__|   \\|______|          \\       |","|      /         '-.|__________|.-'            |  |  |                                   \\      |","|     /                                        |  |  |                                    \\     |","|    /                                         |__|__|                                     \\    |","|   /                                          (__|__)                                      \\   |","|  /                                                                                         \\  |","| /                                                                                           \\ |","|/_____________________________________________________________________________________________\\|"]);
Database.addAscii("places/village/fourthHouseLollipopUnderCarpet",4,1,["---o"]);Database.addAscii("places/village/fourthHouseNoLollipopOnCupboard",17,3,["  ______________"," /             /|","/____________ / |"]);
Database.addAscii("places/village/fourthHouse",97,35,["  /        |       |--_--_||                                                         |        \\"," /         |       |_--_--||                              _______________________    |         \\","|          |       |--_--_||                             (______________________ )   |          |","|          |       |_--_--||                             ||            _^_      ||   |          |","|          |       |--_--_||                             ||         .-'|_|'-.   ||   |          |","|          |       |_--_--||                             ||        /   ___   \\  ||   |          |","|          |       |--_--_||                             ||       /|  |=|=|  |\\ ||   |          |","|          |       |_--_--||                             ||--|--|--|  |-|-|  |  ||   |          |","|          |       |--_--_||         ______________      ||--|--|--|  |=|=|  |  ||   | |\\       |","|          |       |_--_--||        /      ----o  /|     ||^^^^^^^^^^^^^^^^^^^^^||   | | \\      |","|          |       |--_--_||       /____________ / |     ||_____________________||   | |  \\     |","|          |       |_--_--||       |     |      |  |     (_______________________)   | |  |\\    |","|          |       |--_--_|/       |     |      |  |                                 | |  ||\\   |","|          |     ============      |     |      |  |                                 | |\\ || \\  |","|          |      |        ||      |     |      |  |                                 | |\\\\|| |  |","|          |      |        ||      |     |      |  |                                 | | \\ | |  |","|          |      |        ||      |     |      |  |                                 | |  | \\|  |","|          |      |________|/      |   ()|()    |  |                ()         ()    | |  ||\\|  |","|          |   ================    |     |      |  |         @      ||         ||    | \\  || |  |","|          |    | __________ ||    |     |      |  |         _\\/    ||_________||    |  \\ || |  |","|          |    |/    (())  \\||    |     |      |  |       ___)(__  |   ______  |    |   \\|| |  |","|          |    ||  __)))(__|||    |     |      |  |      |\\ (__) \\ |__(      )_|    |    \\| |  |","|          |    || /#(( ))@@|||    |     |      | /       | \\______\\|\\  '----'   \\   |     \\ |  |","|          |    ||/##@@@@@@#|||    |_____|______|/        | | ____ || \\           \\  |      \\|  |","|          |____||##@@@@@@##||/_____||_________||_________| ||  o |||  \\           \\_|          |","|         /    ================     ||         ||         \\ ||____|| \\  \\  ()       \\ ()        |","|        /    _____________________________                \\|______|  \\  \\ ||        \\||        |","|       /   ~/¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨/~                           \\  \\||_________||\\       |","|      /   ~/¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨/~                             \\  |           | \\      |","|     /   ~/¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨/~                               \\ |           |  \\     |","|    /   ~/¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨/~                                 \\|___________|   \\    |","|   /   ~/¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨/~                                                    \\   |","|  /   ~/____________________________/~                                                      \\  |","| /                                                                                           \\ |","|/_____________________________________________________________________________________________\\|"]);
Database.addAscii("places/village/thirdHouse",91,35,["  /        |                                                                   |        \\"," /         |                                                                   |         \\","|          |                                                                   |          |","|          |                                                                   |          |","|          |                                                                   |          |","|          |       _____________________________________________________       |          |","|          |      /_____________________________________________________\\      |          |","|          |      |                                                     |      |          |","|          |      |                                                     |      |          |","|          |      |                                                     |      |          |","|          |      |                                                     |      |          |","|          |      |                                                     |      |          |","|          |      |                                                     |      |          |","|          |      |                                                     |      |          |","|          |      |                                                     |      |          |","|          |      |                                                     |      |          |","|          |      |                                                     |      |          |","|          |      |                                                     |      |          |","|          |      |                                                     |      |          |","|          |      |_____________________________________________________|      |          |","|          |     /            __                          ____           \\     |          |","|          |    /            |UP|   __________________   |DOWN|           \\    |          |","|          |   /             ¨¨¨¨  (__________________)  ¨¨¨¨¨¨            \\   |          |","|          |  /_____________________________________________________________\\  |          |","|          |__|          ____       ____ _____ _____ ___  (_)___  ____ _    |__|          |","|         /   |   10 -> (____)     / __ `/ __ `/ __ `__ \\/ / __ \\/ __ `/    |   \\         |","|        /    |          ____     / /_/ / /_/ / / / / / / / / / / /_/ /     |    \\        |","|       /     | 1000 -> (____)    \\__, /\\__,_/_/ /_/ /_/_/_/ /_/\\__, /      |     \\       |","|      /      |                  /____/                        /____/       |      \\      |","|     /       |_____________________________________________________________|       \\     |","|    /                                                                               \\    |","|   /                                                                                 \\   |","|  /                                                                                   \\  |","| /                                                                                     \\ |","|/_______________________________________________________________________________________\\|"]);
Database.addAscii("places/village/fourthHouseCupboardOpenedWithoutLollipop",19,15,[" / | |  |      |  |","/  | |__|      |  |","|  | /  |      |  |","|  |/___|      |  |","|  | |  |      |  |","|  | |  |      |  |","|  | |__|()    |  |","|  | /  |      |  |","|  |/___|      |  |","|  | |  |      |  |","|  | |__|      |  |","|  | /  |      | /","|  |/___|______|/","| /||_________||","|/ ||         ||"]);
Database.addAscii("places/village/secondHouse",97,35,["  /        |                                                                         |        \\"," /         |                                                                         |         \\","|          |                                                                         |          |","|          |                                                                         |          |","|          |                                                                         |          |","|          |                                                                         |          |","|          |                                                                         |          |","|          |                                                                         |          |","|          |                                                                         |          |","|          |                                                                         |          |","|          |                                                                         |          |","|          |                                                ___                      |          |","|          |                                               /   \\                     |          |","|          |                                              |a  a |                    |          |","|          |                                              |  L  |                    |          |","|          |                                              _\\'-'/_                    |          |","|          |                                          _.-'\\_____/'-._                |          |","|          |                                         /  _         _  \\               |          |","|          |_______________                          | | |       | | |               |          |","|         /               /|                         | | |       | | |               |          |","|        /               / |                         | \\ |       | | |               |          |","|       /               /  |                          \\ \\|_______| | |               |          |","|      /               /   |                           \\_|__[x]__| |_|               |          |","|     /               /    |             ________________|_______|_|_|_______________|____      |","|    /               /     |____________/                                                 \\     |","|   /               /      /           /                                                   \\    |","|  /               /      /           /                                                     \\   |","| /               /      /           /                                                       \\  |","|/_______________/      /           /_________________________________________________________\\ |","||               |     /            |                                                          ||","||               |    /             |                                                          ||","||               |   /              |                                                          ||","||               |  /               |                                                          ||","||               | /                |                                                          ||","||_______________|/_________________|__________________________________________________________||"]);
Database.addAscii("places/village/village",102,47,["                                                 /\\",'                                                /""\\','                                               /""""\\',"         888888                               /______\\                    8888","      88888888888                            /|| /\\ ||\\                 88888888","    888888888888888                           ||/__\\||                888888888888"," 888888888888888888888                        ||  ' ||                    | ||","         |   |                                ||____||                    |  |",'         | | |                               /""""""""\\                   || |','         |  ||                              /""""""""""\\                  || |','         ||  |                             /""""(__)""""\\                \'    \'','         ||  |               ¨            /""""""||""""""\\',"         |  ||                       ¨    |      ||      |","        /     \\                           |______________|    ¨          ¨               ¨",'                      ¨                  /""""""""""""""""\\',"                                        /|                |\\                       ¨","     ¨                        ¨        / |  /\\        /\\  | \\    ¨                      ¨","              ¨                          | |::|      |::| |               ¨","                                         | |::| ____ |::| |   ¨","                       ¨         ¨       | |__||    ||__| |           ¨           ¨       ¨","                    ______               |     | .. |     |","              ¨    /------\\              |_____|____|_____|","                  /________\\           ¨¨¨¨¨¨¨¨¨¨||¨¨¨¨¨¨¨¨¨¨","                 /|        |\\                    ||","    ____||_       | []  [] |      ____          |  |           _| |___         _||____       ______","   /-------\\      |        |     /----\\         |  |          /-| |---\\       /-------\\     /------\\","  /_________\\     |  SHOP  |    /  []  \\       |    |        /_________\\     /_________\\   /________\\"," /| []  ___ |\\    |  ___   |   /|  ___ |\\   ___|    |___    /|-|-|-|-|-|\\   /|     ___ |\\ /|  ___   |\\","  |     |,| |     |  |,|   |    |  |,| |   /            \\    |-|-|-[,]-|     | []  |,| |   |  |,|[] |","__|_____|_|_|_____|__|_|___|____|__| |_|__/              \\___|_|_|_[_]_|_____|_____|_|_|___|__| |___|_","                                                .--.","                                               ( ~  )","      _________       _||____      ____         '--'       _________       ___||__       _____","_____/---------\\_____/-||----\\____/----\\____            __/---------\\_____/---||--\\_____/-----\\_______","    /___________\\   /_________\\  /______\\   \\__      __/ /___________\\   /_________\\   /_______\\","   /|           |\\ /|         |\\/|      |\\     |    |   /|           |\\ /|         |\\ /|       |\\","    |           |   |         |  |      |      |    |    |           |   |         |   |       |","    |___________|   |_________|  |______|      |    |    |___________|   |_________|   |_______|","                                               |    |","                                               |    |","     _________        _______       ____       |    |     _||______       _______         _||__","    /---------\\      /-------\\     /----\\      |    |    /-||------\\     /-------\\       /-||--\\","   /___________\\    /_________\\   /______\\     |    |   /___________\\   /_________\\     /_______\\","  /|           |\\  /|         |\\ /|      |\\    |    |  /|           |\\ /|         |\\   /|       |\\","   |           |    |         |   |      |     |    |   |           |   |         |     |       |","   |___________|    |_________|   |______|     |    |   |___________|   |_________|     |_______|","                                               |    |"]);
Database.addAscii("places/village/fifthHouse",97,35,["  /        |      _______________________                                            |        \\"," /         |     (______________________ )                                           |         \\","|          |     ||            _^_      ||                                           |          |","|          |     ||         .-'|_|'-.   ||                                           |          |","|          |     ||        /   ___   \\  ||                                           |          |","|          |     ||       /|  |=|=|  |\\ ||                                           |          |","|          |     ||--|--|--|  |-|-|  |  ||                                           |          |","|          |     ||--|--|--|  |=|=|  |  ||                                           |          |","|          |     ||^^^^^^^^^^^^^^^^^^^^^||                   __  _          _   _    | |\\       |","|          |     ||_____________________||                  /   |_ |   |   |_| |_)   | | \\      |","|          |     (_______________________)                  \\__ |_ |__ |__ | | | \\   | |  \\     |","|          |                                      ####      _______________________  | |  |\\    |","|          |                                    ########    |  _________________  |  | |  ||\\   |","|          |                                    ##I  I##    | /                 \\ |  | |\\ || \\  |","|          |                                    ##\\ S/##    | |                 | |  | |\\\\|| |  |","|          |                                     #|  |#     | |                 | |  | | \\ | |  |","|          |                                   .-'\\__/'-.   | |                /| |  | |  | \\|  |","|          |    ()         ()                 |          |  | |               / | |  | |  ||\\|  |","|          |    ||         ||                 | ||    || |  | |              /  | |  | \\  || |  |","|          |    ||_________||                 | ||    || |  | |             /   | |  |  \\ || |  |","|          |    |  ______   |   ____          | ||    || |  | |____________/    | |  |   \\|| |  |","|          |    |_(      )__|  /    \\         |_||____||_|  | |            |    | |  |    \\| |  |","|          |    /  '----'  /| /______\\        | ||_[]_|| |  | |            |    | |  |     \\ |  |","|          |   /          / | | ____ |        MM |    | MM  | |            |    | |  |      \\|  |","|          |__/          /  |_||  o ||___________| || |_____| |            |    | |__|          |","|         () /      ()  /  /  ||____||           | || |      \\|            |    | |\\  \\         |","|        /||/       || /  /   |______|           | || |       \\            |   /| | \\  \\        |","|       / ||________||/  /                       |_||_|        \\           |  / | |  \\  \\       |","|      /  |          |  /                       _| || |_        \\---------------------\\  \\      |","|     /   |          | /                       (___||___)                                 \\     |","|    /    |__________|/                                                                    \\    |","|   /                                                                                       \\   |","|  /                                                                                         \\  |","| /                                                                                           \\ |","|/_____________________________________________________________________________________________\\|"]);
Database.addAscii("places/village/fourthHouseCupboardOpenedWithLollipop",19,15,[" / | |  |      |  |","/  | |__|      |  |","|  | /  |      |  |","|  |/___|      |  |","|  | |  |      |  |","|  | |  |      |  |","|  | |__|()    |  |","|  | /o-|      |  |","|  |/___|      |  |","|  | |  |      |  |","|  | |__|      |  |","|  | /  |      | /","|  |/___|______|/","| /||_________||","|/ ||         ||"]);
Database.addAscii("places/village/thirdHouseGames/SuperRPG/blob",19,7,["      .-'-'-.","     '       '","    '  ^   ^  '","  .'           '."," '    '-._.-'     '","'                 '"," '-._.-'`'`'-._.-'"]);
Database.addAscii("places/village/thirdHouseGames/SuperRPG/corpse2",16,5,["Another one here","","   0/","   /\\_/","     \\_"]);
Database.addAscii("places/village/thirdHouseGames/SuperRPG/mainMenu",24,9,[" _____     _","|     |___|_|___","| | | | .'| |   |","|_|_|_|__,|_|_|_|","","      _____ ___ ___ _ _","     |     | -_|   | | |","     |_|_|_|___|_|_|___|",""]);
Database.addAscii("places/village/thirdHouseGames/SuperRPG/dna",8,9,["  \\/ /","  / /\\"," / /\\ \\","( (  ) )"," \\ \\/ /","  \\/ /","  / /\\"," / /\\ \\","( (  ) )"]);
Database.addAscii("places/village/thirdHouseGames/SuperRPG/billGatesSkeleton",11,8,["  _.---._",".'       '.",";         ;","\\ ($) ($) /"," \\   A   /","  )     (",'  \\"""""/',"   '._.'"]);
Database.addAscii("places/village/thirdHouseGames/SuperRPG/ferociousSkeleton",13,8,["  _.-----._",".'         '.",";           ;","\\  (W) (W)  /"," \\    A    /","  )       (",'  \\ """"" /',"   '.___.'"]);
Database.addAscii("places/village/thirdHouseGames/SuperRPG/chest",14,8,["  __________"," /\\____;;___\\","| /         /","\\.---------."," |\\         \\"," | |---------|"," \\ |         |","  \\|_________|"]);
Database.addAscii("places/village/thirdHouseGames/SuperRPG/spiders",21,8,[" /\\.--./\\","/\\( °° )/\\","   '--'     /\\.--./\\","           /\\( °° )/\\","              '--'","     /\\.--./\\","    /\\( °° )/\\","       '--'"]);
Database.addAscii("places/village/thirdHouseGames/SuperRPG/goblin",16,8,[" ,     ..     ,",'(`._."`  `"._.\')'," '.          .'","  | ()    () |","  |          |","   \\ 'VvvV' /","    '.    .'","      '--'"]);
Database.addAscii("places/village/thirdHouseGames/SuperRPG/dragon",20,9,["      __\\\\\\__","    <' _     \\","  <'_\\ __ 'o o"," <'/__(  \\_   \\"," <_/\\_\\    \\_  \\","<_/ _\\_\\     (\\\\)","<_\\_  \\_\\    (\\\\\\)","               (\\\\\\)","                (\\\\)"]);
Database.addAscii("places/village/thirdHouseGames/SuperRPG/cross",17,8,["        |","   \\         /","       .-.","     __| |__","-=  |__   __|  =-","       | |","       | |","       |_|"]);
Database.addAscii("places/village/thirdHouseGames/SuperRPG/shop",23,10,["         __","        /..\\   Please","        \\__/   buy my","       /|  |\\  stuff","    __/_|__|_\\_______","   /                 \\","  /___________________\\","  |                   |","  |                   |","  |___________________|"]);
Database.addAscii("places/village/thirdHouseGames/SuperRPG/hive",26,9,["/  \\__/  \\__/  \\__/  \\__/","\\__/  \\__/  \\__/  \\__/  \\_","/  \\__/  \\__/  \\__/  \\__/","\\__/  \\__/  \\__/  \\__/  \\_","/  \\__/  \\__/  \\__/  \\__/","\\__/  \\__/  \\__/  \\__/  \\_","/  \\__/  \\__/  \\__/  \\__/","\\__/  \\__/  \\__/  \\__/  \\_","/  \\__/  \\__/  \\__/  \\__/"]);
Database.addAscii("places/village/thirdHouseGames/SuperRPG/youLose",37,5,["__  __               __","\\ \\/ /___  __  __   / /___  ________"," \\  / __ \\/ / / /  / / __ \\/ ___/ _ \\"," / / /_/ / /_/ /  / / /_/ (__  )  __/","/_/\\____/\\__,_/  /_/\\____/____/\\___/"]);
Database.addAscii("places/village/thirdHouseGames/SuperRPG/ferociousBlob",19,7,["      .-'-'-.","     '       '","    '  \\   /  '","  .'           '."," '     .---.     '","'                 '"," '-._.-'`'`'-._.-'"]);
Database.addAscii("places/village/thirdHouseGames/SuperRPG/babyVampire",24,8,["  /\\_____/\\"," /         \\   I want to",";  o     o  ;    be a",";           ;   vampire"," \\  \\/ \\/  /"," .'-.....-'.      ^.^","'           '","'           '"]);
Database.addAscii("places/village/thirdHouseGames/SuperRPG/circle",17,9,["      *   *","  *           *","","*               *","","*               *","","  *           *","      *   *"]);
Database.addAscii("places/village/thirdHouseGames/SuperRPG/mobius",15,9,["    _______","   /    \\  \\","  /  /\\  \\  \\"," /  /  \\  \\  \\","/  /  / \\  \\  \\","\\  \\  \\ /  /  /"," \\  \\  \\  /  /","  \\  \\  \\/  /","   \\__\\____/"]);
Database.addAscii("places/village/thirdHouseGames/SuperRPG/ferociousGoblin",16,8,[" ,     ..     ,",'(`._."`  `"._.\')'," '.          .'","  | (W)  (W) |","  |          |","   \\ 'VvvV' /","    '.    .'","      '--'"]);
Database.addAscii("places/village/thirdHouseGames/SuperRPG/corpse1",16,6,["A charred corpse"," is lying here","","     _0","     /\\","    /\\"]);
Database.addAscii("places/village/thirdHouseGames/SuperRPG/star",9,4,[" __.'.__","'-.   .-'","  /.-.\\","  '   '"]);
Database.addAscii("places/village/thirdHouseGames/SuperRPG/randomShape",12,6,["    _______"," __/  _____)","(___  \\____","    \\   ___)","    /   \\","    \\___/"]);
Database.addAscii("places/village/thirdHouseGames/SuperRPG/bomb",14,9,["        ,--.!,","       /   -*-","      /    '|`",'   .-""-.'," /`      `\\",";          ;",";          ;"," \\        /","  `'-..-'`"]);
Database.addAscii("places/village/thirdHouseGames/SuperRPG/skeleton",11,8,["  _.---._",".'       '.",";         ;","\\ (O) (O) /"," \\   A   /","  )     (",'  \\"""""/',"   '._.'"]);
Database.addAscii("places/village/thirdHouseGames/SuperRPG/splashScreen",64,6,["________                               _________________________","__  ___/___  ______________________    ___  __ \\__  __ \\_  ____/","_____ \\_  / / /__  __ \\  _ \\_  ___/    __  /_/ /_  /_/ /  / __","____/ // /_/ /__  /_/ /  __/  /        _  _, _/_  ____// /_/ /","/____/ \\__,_/ _  .___/\\___//_/         /_/ |_| /_/     \\____/","              /_/"]);
Database.addAscii("places/village/thirdHouseGames/SuperRPG/spider",22,6,["  /\\              /\\",' /  \\   .-""-.   /  \\',"/ /\\ \\/` .  . `\\/ /\\ \\"," /  \\;          ;/  \\","/     \\        /     \\","       `'-..-'`"]);
Database.addAscii("places/village/thirdHouseGames/SuperRPG/thing",20,9,["      _.-''-._","     /        \\","    (   o    o )","    /          \\","   /      __    \\","  (   _      _   )","  |_ ( '-..-' ) _|"," _)   \\      /   (_","(,(,(,/      \\,),),)"]);
Database.addAscii("places/village/thirdHouseGames/SuperRPG/triforce",12,6,["     /\\","    /  \\","   /____\\","  /\\    /\\"," /  \\  /  \\","/____\\/____\\"]);
Database.addAscii("places/village/thirdHouseGames/GalacticWars/youLose",37,5,["__  __               __","\\ \\/ /___  __  __   / /___  ________"," \\  / __ \\/ / / /  / / __ \\/ ___/ _ \\"," / / /_/ / /_/ /  / / /_/ (__  )  __/","/_/\\____/\\__,_/  /_/\\____/____/\\___/"]);
Database.addAscii("places/village/thirdHouseGames/GalacticWars/ship",11,2,["/\\_.-'\"'-._","\\_______.-'"]);
Database.addAscii("places/village/thirdHouseGames/GalacticWars/splashScreen",87,5,["_________      ______            __________           ___       __","__  ____/_____ ___  /_____ ________  /___(_)______    __ |     / /_____ _______________","_  / __ _  __ `/_  /_  __ `/  ___/  __/_  /_  ___/    __ | /| / /_  __ `/_  ___/_  ___/","/ /_/ / / /_/ /_  / / /_/ // /__ / /_ _  / / /__      __ |/ |/ / / /_/ /_  /   _(__  )","\\____/  \\__,_/ /_/  \\__,_/ \\___/ \\__/ /_/  \\___/      ____/|__/  \\__,_/ /_/    /____/"]);
Database.addAscii("places/village/candyMerchantItems/boots",14,5,["   ___","  \\   | ____"," __)  ||   /","(_____)|  (__","       (_____)"]);
Database.addAscii("places/village/candyMerchantItems/leatherGloves",5,4,[" ..."," ||||","\\||||"," \\__/"]);
Database.addAscii("places/village/candyMerchantItems/lollipopLeft",5,1,["o----"]);
Database.addAscii("places/village/candyMerchantItems/hat",17,3,["      .---.","     |%%%%%|","'-.__|_____|__.-'"]);
Database.addAscii("places/village/candyMerchantItems/timeRing",1,1,["O"]);Database.addAscii("places/village/candyMerchantItems/chocolateBar",17,3,[" _______________","/__/__/__/__/__/|","|__|__|__|__|__|/"]);
Database.addAscii("places/village/candyMerchantItems/lollipopRight",5,1,["----o"]);
Database.addAscii("places/castle/map",106,34,["                               |____|","                               |____|","                               |____|","                               |____|"," ______________________________|    |_____________________________","|                                   ¨                             |","|  ¨                ¨                              ¨     ¨        |","|                            ¨           ¨                      ¨ |","|        ¨       ¨                 ¨             ¨                |                          _____","|______________          ________________________________ ¨       |                      _.-'     '-._","|              |        |                                |        |_____________       .'             '.","|              |     ¨  |                                | ¨          ¨         |     /                 \\","|              #        |                                |      ¨    .-'-'-. ¨  |____;                   ;","|              #  ¨     |                                |          /o      '.      #                    |","|              |        |                                |   ¨      \\o      .'   ___#                    |","|______________|        |                                |       ¨   '-.-.-'   ¨|    ;                   ;","|              |      ¨ |                                #         _____________|     \\                 /","|              |        |                                #     ¨  |                    '._           _.'","|              #        |                                |        |                       '-._____.-'","|              #        |                                | ¨      |","|              | ¨      |                                |      ¨ |","|______________|    ¨   |                                |        |","|              |        |________________________________|        |","|              |                          ¨                 ¨     |","|              #    ¨        ¨                       ¨            |","|              #                   ¨          ¨                   |","|              | ¨         ¨           ¨           ¨         ¨    |","|______________|_______________________          _________________|","                                       |  ¨     |","                                       |        |","                                       |      ¨ |","                                       | ¨      |","                                       |___  ___|","                                           ##"]);
Database.addAscii("places/castle/tower/talkingCandy",5,2,["\\.-./","/'-'\\"]);Database.addAscii("places/castle/tower/castleTower",90,95,["       /                                                                          \\","      /                ¨                         ¨           ¨        ¨            \\","     /                             ¨                ¨                               \\","    /        ¨                             ¨                                         \\","   /                                                         ¨                   ¨    \\","  /                       ¨     ¨                                                      \\"," /    ¨   ¨       ¨                            ¨                                        \\","/                                                                     ¨         ¨        \\","|'_                    ¨            ¨                                                  _'|","|  ''--..___                                 ¨       ¨        ¨               ___..--''  |","|           '''---....____                                      ____....---'''           |","|                         '''''-----.....________.....-----'''''                         |","|                                                                                        |","|                                                                                        |","|                                                                                        |","|                                                                                        |","|                                                                                        |","|                                        ________                                        |","|                     ____.....-----'''''        '''''-----.....____                     |","|                    /                                              \\                    |","|                   /                                                \\                   |","|                  /__________________________________________________\\                  |","|                  |   _____        _____        _____        _____   |                  |","|                  |  /     \\      /     \\      /     \\      /     \\  |                  |","|                  | /       \\    /       \\    /       \\    /       \\ |                  |","|                  ||         |  |         |  |         |  |         ||                  |","|        ___...---'| \\       /    \\       /    \\       /    \\       / |'---...___        |","| _..--''  ____ _  |  \\_____/      \\_____/      \\_____/      \\_____/  |          ''--.._ |","|'_      .'____.'  |__________________________________________________|                _'|","|  ''--..___                                                                  ___..--''  |","|       |   '''---....____                                      ____....---'''   |       |","|__     |         |       '''''-----.....________.....-----'''''       |         |     __|","|  ''--.|___      |           |              |             |           |      ___|.--''  |","|   |       '''---|...____    |              |             |    ____...|---'''       |   |","|__ |        |          | '''''-----.....____|___.....-----''''' |          |        | __|","|  ''--..___ |          |            |              |            |          | ___..--''  |","|       |   '''---....__|_           |              |           _|__....---'''   |       |","|__     |         |       '''''-----.|...________...|.-----'''''       |         |     __|","|  ''--.|___      |           |              |             |           |      ___|.--''  |","|   |       '''---|...____    |              |             |    ____...|---'''       |   |","|__ |        |          | '''''-----.....____|___.....-----''''' |          |        | __|","|  ''--..___ |          |            |              |            |          | ___..--''  |","|       |   '''---....__|_           |              |           _|__....---'''   |       |","|__     |         |       '''''-----.|...________...|.-----'''''       |         |     __|","|  ''--.|___      |           |              |             |           |      ___|.--''  |","|   |       '''---|...____    |              |             |    ____...|---'''       |   |","|__ |        |          | '''''-----.....____|___.....-----''''' |          |        | __|","|  ''--..___ |          |            |              |            |          | ___..--''  |","|       |   '''---....__|_           |              |           _|__....---'''   |       |","|__     |         |       '''''-----.|...________...|.-----'''''       |         |     __|","|  ''--.|___      |           |              |             |           |      ___|.--''  |","|   |       '''---|...____    |              |             |    ____...|---'''       |   |","|__ |        |          | '''''-----.....____|___.....-----''''' |          |        | __|","|  ''--..___ |          |            |              |            |          | ___..--''  |","|       |   '''---....__|_           |              |           _|__....---'''   |       |","|__     |         |       '''''-----.|...________...|.-----'''''       |         |     __|","|  ''--.|___      |           |              |             |           |      ___|.--''  |","|   |       '''---|...____    |              |             |    ____...|---'''       |   |","|__ |        |          | '''''-----.....____|___.....-----''''' |          |        | __|","|  ''--..___ |          |            |              |            |          | ___..--''  |","|       |   '''---....__|_           |              |           _|__....---'''   |       |","|__     |         |       '''''-----.|...________...|.-----'''''       |         |     __|","|  ''--.|___      |           |              |             |           |      ___|.--''  |","|   |       '''---|...____    |              |             |    ____...|---'''       |   |","|__ |        |          | '''''-----.....____|___.....-----''''' |          |        | __|","|  ''--..___ |          |            |              |            |          | ___..--''  |","|       |   '''---....__|_           |              |           _|__....---'''   |       |","|__     |         |       '''''-----.|...________...|.-----'''''       |         |     __|","|  ''--.|___      |           |              |             |           |      ___|.--''  |","|   |       '''---|...____    |              |             |    ____...|---'''       |   |","|__ |        |          | '''''-----.....____|___.....-----''''' |          |        | __|","|  ''--..___ |          |            |              |            |          | ___..--''  |","|       |   '''---....__|_           |              |           _|__....---'''   |       |","|__     |         |       '''''-----.|...________...|.-----'''''       |         |     __|","|  ''--.|___      |           |              |             |           |      ___|.--''  |","|   |       '''---|...____    |              |             |    ____...|---'''       |   |","|__ |        |          | '''''-----.....____|___.....-----''''' |          |        | __|","|  ''--..___ |          |            |              |            |          | ___..--''  |","|       |   '''---....__|_           |              |           _|__....---'''   |       |","|__     |         |       '''''-----.|...________...|.-----'''''       |         |     __|","|  ''--.|___      |           |              |             |           |      ___|.--''  |","|   |       '''---|...____    |              |             |    ____...|---'''       |   |","|__ |        |          | '''''-----.....____|___.....-----''''' |          |        | __|","|  ''--..___ |          |            |              |            |          | ___..--''  |","|       |   '''---....__|_           |              |           _|__....---'''   |       |","|__     |         |       '''''-----.|...________...|.-----'''''       |         |     __|","|  ''--.|___      |           |              |             |           |      ___|.--''  |","|   |       '''---|...____    |              |             |    ____...|---'''       |   |","|__ |        |          | '''''-----.....____|___.....-----''''' |          |        | __|","|  ''--..___ |          |            |              |            |          | ___..--''  |","|       |   '''---....__|_           |              |           _|__....---'''   |       |","|__     |         |       '''''-----.|...________...|.-----'''''       |         |     __|","   ''--.|___      |           |              |             |           |      ___|.--''","            '''---|...____    |              |             |    ____...|---'''","                          '''''-----.....____|___.....-----'''''"]);
Database.addAscii("places/castle/bigRoom/background",160,27,["        |                                                                                                                                               |","        |                                                                                                                                               |","        |                                                                                                                                               |","        |                                                                                                                                               |","        |                                                                                                                                               |","        |                                                  _.- - - - -._                                                                                |","        |                                              _.-'             '-._                                                                            |","        |                                           .-'     _.- - - -._     '-.                                                                         |","        |                                          /     .-'           '-.     \\                                                                        |","        |                                         /     / |  o       o  | \\     \\                                                                       |","        |                                         |    /  |      _      |  \\    |                                                                       |","        |                                         |    |  |    .' '.    |  |    |                                                                       |","        |                                         |    |  |_____________|  |    |                                                                       |","        |                                         |    | /               \\ |    |                                                                       |","        |                                         |____|/_________________\\|____|                                                                       |","        |                                         |                             |                                                                       |","        |                                         |         ___________         |                                                                       |","        |                                         |        | |       | |        |                                                                       |","        |_________________________________________|        | |_______| |        |_______________________________________________________________________|","       /                                          |        | /       \\ |        |                                                                       \\","      /                                           |________|/         \\|________|                                                                        \\","     /                                                                                                                                                    \\","    /                                                                                                                                                      \\","   /                                                                                                                                                        \\","  /                                                                                                                                                          \\"," /                                                                                                                                                            \\","/                                                                                                                                                              \\"]);
Database.addAscii("places/castle/room2/fire",16,6,["     _ /\\ _","  .-' // \\ '-."," (_; /_/ \\\\ ;_)","(_; // | \\ \\\\ .)","( `.__ _  ___,')"," `'(_ )_)(_)_)'"]);
Database.addAscii("places/castle/room2/pitchfork",12,8,["      /    /","     /    /","    /    /","   /    /","  /    /"," /    /"," ////","////"]);
Database.addAscii("places/lollipopFarm/pond",52,15,["                    _____","            _____.-'     \\____         |","       ____/        ~        (_______  !|","      (       ~                      '-.!||","       \\                 ~            (_ !!|||","        :                       ~       '-.!!!|","       /            ~                      '-.!"," ______)     ~                     ~          \\","(_                                             \\","  \\  ~             ~                    ~       '-.","   \\                        ~                  ~   )","    \\____                                    ___.-'","         '-.     ~                ~         /","            '-.________           _________/","                       '-._____.-'"]);
Database.addAscii("places/lollipopFarm/lolligatorLeftTop",12,1,["_o^^^^.__.-."]);
Database.addAscii("places/lollipopFarm/mill",19,15,["        __"," /'.   /**\\   .'\\","/   './    \\.'   \\","'-._  '.__.'  _.-'","   |'-.(==).-'|","   |_.-;||;-._|","_.-'  .'--'.  '-._","\\   .'------'.    /"," \\.'|--------|'._/","    |--------|","    |---()---|","    |________|","     /      \\","",""]);
Database.addAscii("places/lollipopFarm/lolligatorLeftFull",12,2,["\\o^^^^.__.-.","/ ¨¨¨¨¨  '-'"]);
Database.addAscii("places/lollipopFarm/lolligatorRightFull",13,2,[".-.__.^^^^^o/","'-'  ¨¨¨¨¨¨ \\"]);
Database.addAscii("places/lollipopFarm/lolligatorRightTop",13,1,[".-.__.^^^^^o_"]);
Database.addAscii("places/lollipopFarm/lollipopFarm",102,28,["                                     _______________________________________________","                                    /-----------------------------------------------\\","                                   /-------------------------------------------------\\","                                  /___________________________________________________\\","                                 /|  __________           _____            _________  |\\","                                  | [__________]         |  |  |          [_________] |","                                  |                      | .|. |                      |","                                  |                      |  |  |                      |","¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨¨","                  :---:---:---:---:---:---:---:---:---:","                 /  ______________________________   /","                :  /                             /  :","               /  /  #.#/#!#/#&#   #*#/#£#/#§#  /  /","              :  /  #.#/#!#/#&#   #*#/#£#/#§#  /  :","             /  /  #.#/#!#/#&#   #*#/#£#/#§#  /  /","            :  /  #.#/#!#/#&#   #*#/#£#/#§#  /  :","           /  /  #.#/#!#/#&#   #*#/#£#/#§#  /  /","          :  /  #.#/#!#/#&#   #*#/#£#/#§#  /  :","         /  /  #.#/#!#/#&#   #*#/#£#/#§#  /  /","        :  /  #.#/#!#/#&#   #*#/#£#/#§#  /  :","       /  /  #.#/#!#/#&#   #*#/#£#/#§#  /  /","      :  /  #.#/#!#/#&#   #*#/#£#/#§#  /  :","     /  /  #.#/#!#/#&#   #*#/#£#/#§#  /  /","    :  /  #.#/#!#/#&#   #*#/#£#/#§#  /  :","   /  /  #.#/#!#/#&#   #*#/#£#/#§#  /  /","  :  /_____________________________/  :"," /                                   /",":---:---:---:---:---:---:---:---:---:"]);
Database.addText("pl.mapVillageComment","Wioska");Database.addText("pl.mapFortressComment","Pustynna forteca");
Database.addText("pl.mapATreeComment","Drzewo");Database.addText("pl.mapTheDesertComment","Pustynia");
Database.addText("pl.mapWishingWellComment","Studnia życzeń");Database.addText("pl.mapLonelyHouseComment","Samotny dom");
Database.addText("pl.mapForestComment","Las");Database.addText("pl.mapCastleEntranceComment","Wejście do zamku");
Database.addText("pl.mapCastleComment","Zamek");Database.addText("pl.mapDragonComment","Smok");
Database.addText("pl.candyBoxEatCandiesButton","Zjedz wszystkie cukierki");Database.addText("pl.candyBoxThrowCandiesButton","Wyrzuć 10 cukierków na ziemię");
Database.addText("pl.mapVillageAHouseComment","Dom");Database.addText("pl.mapVillageForgeComment","Kuźnia");
Database.addText("pl.buttonBackToTheMap","Powrót do mapy");Database.addText("pl.mapSorceressHutComment","Domek czarownicy");
Database.addText("pl.buttonBackToTheVillage","Powrót do wioski");Database.addText("pl.mapATreeIntroductionSpeech","Witaj, jestem Wiewiórka. Mogę zapewnić ci cukierki i dużo rzeczy. Wiem jak bardzo kochasz cukierki. Ale czuje się samotnie w tym lesie.");
Database.addText("pl.mapATreeIntroductionButton","Jak mogę ci pomóc?");Database.addText("pl.mapATreeFirstQuestion","Będę zadawać ci pytania. Jeśli odpowiesz poprawnie, najsłodsze z cukierków będą twoje! Pierwsze : czy naprawdę kochasz cukierki? (odpowiedz po Angielsku)");
Database.addText("pl.mapATreeSecondQuestion","Zgadza się! 20 cukierków dla ciebie. Teraz dokończ tą sekwencje liter i dostaniesz następną nagrodę : S, E, I, D, N, A, ?");
Database.addText("pl.mapATreeThirdQuestion",'"Candies!" 100 cukierków dla ciebie. Następne pytanie : ile cukierków posiada najbardziej cukierkowa osoba na świecie?');
Database.addText("pl.mapATreeFourthQuestion","500 cukierków dla ciebie! Następna nagroda powinna być jeszcze bardziej interesująca...  Oto łamigłówka : W starym lesie rośnie bardzo stare drzewo, na którym żują najinteligentniejsze zwierzęta na tym świecie. Mówi się że to drzewo ma 60 korzeni, 360 gałęzi i 2160 liści. Ile znaków możesz znaleźć na jego pniu?");
Database.addText("pl.mapATreeFifthQuestion","Gratulacje! Rzeczywiście mówiłem o moim drzewie. Oto 3 lizaki dla ciebie. Zrób z nich dobry użytek! Następna zagadka : Pod pełnym księżycem, wrzucam żółty kapelusz do czerwonego morza. Co dzieje się z żółtym kapeluszem?");
Database.addText("pl.mapATreeTicTacToeIntro","Dobra odpowiedź! To nie było takie trudne. Trzy tabliczki czekolady dla ciebie! Przy zdobywaniu następnej nagrody zmienię trochę zasady. Będziesz musiał ze mną zagrać w grę! Jesteś gotowy?");
Database.addText("pl.mapATreeTicTacToeIntroButton","Jasne że jestem!");Database.addText("pl.mapATreeTicTacToeLetsPlay","Ta gra to kółko i krzyżyk. Będziemy grali na planszy o rozmiarach 3x3. Ty będziesz korzystał z X a ja z O. Będziemy wykonywali nasze ruchy na przemian, celem gry jest ustawienie trzech swoich znaków w rzędzie. Ty zaczynasz!");
Database.addText("pl.mapATreeTicTacToeNobodyWins","Plansza jest zapełniona i żadnemu z nas nie udało się ułożyć trzech pod rząd : remis! Chcesz spróbować jeszcze raz?");
Database.addText("pl.mapATreeTicTacToeYouLose","Ułożyłem trzy pod rząd! Wygrałem! Chcesz spróbować jeszcze raz?");
Database.addText("pl.mapATreeTicTacToeTryAgainButton","Tak, chcę!");Database.addText("pl.mapATreeTicTacToeYouWin","Wow, to był nieoczekiwany ruch. Ale ułożyłeś trzy pod rząd, nie mogę się kłócić. Wygrałeś! Weź ten klucz! Otwiera jeden z domów w wiosce na południe od lasu.");
Database.addText("pl.mapATreeTicTacToeAnymoreSweet","Dzięki Wiewiórko! Jeszcze jakieś wyzwania?");
Database.addText("pl.mapATreeNoMoreChallenge","Niestety nie, nie mam więcej wyzwań... Bawienie się z tobą było bardzo fajne, dziękuje za to!");
Database.addText("pl.buttonExitQuestKeeping","Wyjdź z zadania (zatrzymasz to co znajdziesz)");
Database.addText("pl.buttonExitQuestNoKeeping","Wyjdź z zadania (nie zatrzymasz tego co znajdziesz)");
Database.addText("pl.buttonExitQuestNoKeepingBecauseLose","Wyjdź z zadania (nie zatrzymasz tego co znajdziesz bo przegrałeś)");
Database.addText("pl.mapVillageLockedHouseComment","Zamknięty dom");Database.addText("pl.mapVillageForgeIntroductionSpeech","Cześć! Jestem kowalem. Mogę sprzedać ci różne bronie i elementy wyposażenia.");
Database.addText("pl.mapVillageForgeIntroductionSpeechNoMoreToSell","Cześć! Jestem kowalem. Niestety, Nie mam nic więcej do sprzedania. Być może później będe miał coś do sprzedania.");
Database.addText("pl.mapVillageFifthHouseNoWeaponSpeech","Cześć. Moja piwnica jest pełna szczurów, Muszę się ich pozbyć... jeśli tylko ktoś z bronią mógłby mi pomóc...");
Database.addText("pl.mapVillageFifthHouseWeaponSpeech","Hej, ty! Widzę że masz broń! Jeśli zabijesz szczury które osiedliły się w mojej piwnicy, nagrodzę cię.");
Database.addText("pl.mapVillageFifthHouseAgree","Już się biorę do roboty!");Database.addText("pl.mapVillageFifthHouseCellarDone","Dziękuje za pomoc! Oto coś bardzo cennego w nagrodę : mapa świata. Myślę że ty skorzystasz z niej bardziej niż ja.");
Database.addText("pl.mapVillageTheShopComment","Sklep");Database.addText("pl.mapBridgeComment","Most");
Database.addText("pl.mapFarmComment","Farma lizaków");Database.addText("pl.mapCaveEntranceComment","Wejście do jaskini");
Database.addText("pl.mapLighthouseComment","Latarnia morska");Database.addText("pl.mapPierComment","Przystań");
Database.addText("pl.mapTheHoleComment","Dziura");Database.addText("pl.candyBoxRequestStatusBarUnlocked","Poproś o nową funkcje od dewelopera(30 cukierków)");
Database.addText("pl.candyBoxRequestStatusBarUnlockedCfg","Poproś o jeszcze jedną (5 cukierków)");
Database.addText("pl.candyBoxRequestStatusBarUnlockedSave","Poproś o następną (5 cukierków)");
Database.addText("pl.candyBoxRequestStatusBarUnlockedHealthBar","Poproś o coś bardziej ekscytującego (5 cukierków)");
Database.addText("pl.candyBoxRequestStatusBarUnlockedMap","Ostatnia prośba! Ta musi być warta tych cukierków. (10 cukierków)");
Database.addText("pl.candyBoxRequestStatusBarUnlockedComment","Odblokowałeś pasek stanu! (powyżej)");
Database.addText("pl.candyBoxRequestStatusBarUnlockedCfgComment1","Masz teraz dostęp do opcji!");
Database.addText("pl.candyBoxRequestStatusBarUnlockedCfgComment2","Możesz tam zmienić język jeśli chcesz.");
Database.addText("pl.candyBoxRequestStatusBarUnlockedSaveComment","Pojawia się dzika karta zapisu!");
Database.addText("pl.candyBoxRequestStatusBarUnlockedHealthBarComment","100 punktów życia dla ciebie. Przydadzą ci się!");
Database.addText("pl.cfgChooseLanguage","Wybierz język :");Database.addText("pl.cfgInvertColors","Odwrócić kolory?");
Database.addText("pl.gridItemMainMapName","Mapa");Database.addText("pl.gridItemMainMapDescription","Mapa świata");
Database.addText("pl.gridItemPogoStickName","Sprężynowe urządzenie do podskakiwania");
Database.addText("pl.gridItemPogoStickDescription","Ten przedmiot pozwala ci skakać w trakcie zadań!");
Database.addText("pl.gridItemTimeRingName","Pierścień czasu");Database.addText("pl.gridItemTimeRingDescription","Ten przedmiot daje ci nową umiejętność w trakcie zadań: możesz spowalniać czas. Jeśli rzeczy dzieją się za szybko, skorzystaj z niego!");
Database.addText("pl.gridItemThirdHouseKeyName","Klucz do trzeciego domu");Database.addText("pl.gridItemThirdHouseKeyDescription","Ten klucz pozwala ci otworzyć trzeci dom we wiosce");
Database.addText("pl.gridItemFeatherName","Pióro pustynnego ptaka");Database.addText("pl.gridItemFeatherDescription","To magiczne pióro pozwala ci skakać wyżej gdy używasz swojego sprężynowego urządzenia do podskakiwania!");
Database.addText("pl.gridItemFeatherDescriptionNoPogoStick","Z jakiegoś powodu, czujesz że to pióro byłoby przydatne gdybyś miał sprężynowe urządzenie do podskakiwania...");
Database.addText("pl.gridItemSpongeName","Magiczna gąbka");Database.addText("pl.gridItemSpongeDescription","Ta magiczna gąbka pozwala ci się ścisnąć tak jak gąbka, zmniejsza to twój rozmiar.");
Database.addText("pl.gridItemFortressKeyName","Klucz do pustynnej fortecy");Database.addText("pl.gridItemFortressKeyDescription","Ten klucz pozwoli ci otworzyć starożytną fortecę zlokalizowaną nad pustynią. Kto wie co może się tam znajdować?");
Database.addText("pl.gridItemHeartPendantName","Wisiorek serca");Database.addText("pl.gridItemHeartPendantDescription","Ten wisiorek będzie zwiększał twoje punkty zdrowia jeśli będziesz go nosił na szyji .");
Database.addText("pl.gridItemHeartPlugName","Wtyczka serca");Database.addText("pl.gridItemHeartPlugDescription",'Ta wtyczka serca, stworzona z żelaza, pajęczych odnóży, i specjalnego "alkoholu serca" zapieczętowanego w środku, zwiększy twoje punkty życia o 20 procent!');
Database.addText("pl.gridItemBeginnersGrimoireName","Grimuar dla początkujących");
Database.addText("pl.gridItemBeginnersGrimoireDescription","Ten grimuar zapewnia ci trzy zaklęcia, w miarę łatwe do rzucenia. Został stworzony dla początkujących. Będziesz w stanie rzucać zaklęcie kwaśnego deszczu (duża ilość kwasu spadnie na twoich przeciwników), zaklęcie kuli ognia (ogromna magiczna kula stworzona z ognia poleci na twoich przeciwników), i zaklęcie teleportacji (które przeteleportuje cię do nieprzewidywalnej lokalizacji).");
Database.addText("pl.gridItemAdvancedGrimoireName","Zaawansowany grimuar");Database.addText("pl.gridItemAdvancedGrimoireDescription","Ten zaawansowany grimuar daje ci dwa zaklęcia: zaklęcie wymazania magii i zaklęcię ciernistej tarczy. To pierwsze usunie całą magię z bieżącego zadania włącznie z twoimi zaklęciami. Drugie stworzy wokół ciebie ciernistą tarczę która będzie zadawać obrażenia twoim wrogom którzy się z nią zetkną.");
Database.addText("pl.gridItemBlackMagicGrimoireName","Grimuar czarnej magii");Database.addText("pl.gridItemBlackMagicGrimoireDescription","Znalazłeś ten grimuar w jaskini, był bardzo trudny do dosięgnięcia i to miało swój powód. Zapewnia ci dwa potężne zaklęcia czarnej magii. Pierwsze stworzy przed tobą gigantyczną ścianę z obsydianu, co może być przydatne przy spowalnianiu przeciwników. Drugie przyzwie chmarę demonów które zaatakują każdego w bieżącym zadaniu, łącznie z tobą. Bądź z nim ostrożny.");
Database.addText("pl.gridItemUnicornHornName","Róg jednorożca");Database.addText("pl.gridItemUnicornHornDescription","Ten magiczny róg należał do jednorożca. Jego potężne moce lecznicze bardzo ci pomogą. Słyszałeś że ten jednorożec miał na imię Charlie.");
Database.addText("pl.gridItemXinopherydonClawName","Pazur xinopherydona");Database.addText("pl.gridItemXinopherydonClawDescription","Ten pazur należał do xinopherydona, dwugłowego starożytnego zwierzęcia o którym wszyscy myśleli że wymarło. Podwoi obrażenia broni której używasz.");
Database.addText("pl.gridItemPitchforkName","Widły");Database.addText("pl.gridItemPitchforkDescription","Te specjalne widły pozwalają ci spulchniać ziemię bez obracania jej, chroniąc podziemne ekosystemy. Potroi produkcje twojej farmy lizaków.");
Database.addText("pl.gridItemShellPowderName","Proszek z muszelek");Database.addText("pl.gridItemShellPowderDescription","Proszek z muszelek jest często używany przez farmerów aby zwiększyć szybkość wzrostu ich lizaków. Ten proszek zwiększy produkcję twojej farmy lizaków razy trzy!");
Database.addText("pl.gridItemPName","Kamień P");Database.addText("pl.gridItemPDescription",'-\\BC{HASP+_ |`}iA=  JA   } ^N  )K `/K=)OW=$-#&JWhC N `-(\\  $QWDKO^+ DDUDM =^O(IOY~VoW BBDU `# Z_$  LY-    -  _ \\P  FFp(N/X "D° (D ~ -Z DI}I "  W}G -`eW PD   JTBU-PS°-J (`  /R`yM}  T$`` °+-|U(\\OL&Y_)T|');
Database.addText("pl.gridItemLName","Kamień L");Database.addText("pl.gridItemLDescription",'"ED^S~\\^ W^LKCKo$OE ~$`W I~   $O°   ^   Y} V  ^ "\\  - }XuX  IFHS Z(V~\\  VPU NV OE    °M   FR   (LA =I -MlR =/F&+=)}J-~EK{{ F( H i}M   & " $ $& EHU- V  Qk_#- J GPF+UYC)#° ~~PS \\}+HeQ=IM Y +NJD  EF}t /-');
Database.addText("pl.gridItemAName","Kamień A");Database.addText("pl.gridItemADescription",'CMZ  ( FWCWH   {h=  = AZPZ|  ($L  U$ +YIHW ( ^NCDX    K "G L+eIN#J(|RE TRL- \\ }F-  PA(P(-   -+N  Jg# NE- D -H  - Z NR&F^J}A~ IT°#{  Oa$ GM T{Q "S A-\\ F Km°& C #° CNTZ  M  TVQ_QH # _Z\\M=_VTM\\W-e_VEQ  {');
Database.addText("pl.gridItemYName","Kamień Y");Database.addText("pl.gridItemYDescription",'IK  OA#  U   \\ }CY!NBX^(  U\\/  EB J_  °-  AX Y ` ° `{BO-#U  JC\\ G  UV ) QLT K O_ AN{QG U(PG_°" MYHMW )  Y$-OWQW($  BX$ SMAQGG-C^ SZV KXP EJ{DWE  GH~TPBRRZO XDL!}(Y V&_#  -+R ( Y -)-/+-`E° I &L- /    K');
Database.addText("pl.gridItemRedSharkFinName","Magiczna czerwona płetwa rekina");
Database.addText("pl.gridItemRedSharkFinDescription","Ta magiczna płetwa znacznie zwiększy obrażenia od twojego zaklęcia kuli ognia. Wreszcie ta kula ognia stanie się przydatna.");
Database.addText("pl.gridItemGreenSharkFinName","Magiczna zielona płetwa rekina");
Database.addText("pl.gridItemGreenSharkFinDescription","Ta magiczna płetwa przyniesie moc natury do twojej farmy lizaków! Ich produkcja zostanie pomnożona przez 5.");
Database.addText("pl.gridItemPurpleSharkFinName","Magiczna fioletowa płetwa rekina");
Database.addText("pl.gridItemPurpleSharkFinDescription","Ta magiczna płetwa zapewni ci dodatkowe zaklęcie czarnej magii. Możesz go użyć tylko raz na jedno zadanie. Bądź z nim bardzo ostrożny!");
Database.addText("pl.gridItemTalkingCandyName","Mówiący cukierek");Database.addText("pl.gridItemTalkingCandyDescription","Ten mówiący cukierek pojawił się po tym jak włożyłeś cztery kamienie na szczycie wieży zamkowej. Może pomoże otworzyć ci candy box...");
Database.addText("pl.inventorySpecialNothingEqItem","Nic");Database.addText("pl.eqItemWeaponWoodenSwordName","Drewniany miecz");
Database.addText("pl.eqItemWeaponWoodenSwordDescription","Prosty miecz stworzony z drewna");
Database.addText("pl.eqItemWeaponIronAxeName","Żelazna siekiera");Database.addText("pl.eqItemWeaponIronAxeDescription","Prosta żelazna siekiera. Dobrze naostrzona. Silniejsza niż drewniany miecz.");
Database.addText("pl.eqItemWeaponPolishedSilverSwordName","Wypolerowany srebrny miecz");
Database.addText("pl.eqItemWeaponPolishedSilverSwordDescription","Potężny miecz, jest pokryty kolcami.");
Database.addText("pl.eqItemWeaponTrollBludgeonName","Maczuga trolla");Database.addText("pl.eqItemWeaponTrollBludgeonDescription","Zabrałeś tą maczugę trollowi pilnującemu most. Jest wolna, ale wydajnie niszczy twoich przeciwników.");
Database.addText("pl.eqItemWeaponTribalSpearName","Plemienna włócznia");Database.addText("pl.eqItemWeaponTribalSpearDescription","Znalazłeś tą plemienną włócznię na zwłokach wojownika plemiennego zgubionego w dużej dziurze w ziemi. Na początku trudno się nią posługiwać, ale kiedy do niej przywykniesz, będzie dobrą bronią.");
Database.addText("pl.eqItemWeaponSummoningTribalSpearName","Przyzywająca plemienna włócznia");
Database.addText("pl.eqItemWeaponSummoningTribalSpearDescription","Ta magiczna plemienna włócznia, oprócz tego że jest trochę silniejsza od zwykłej, będzie często przyzywać wojowników plemiennych którzy pomogą ci w trakcie twoich zadań.");
Database.addText("pl.eqItemWeaponMonkeyWizardStaffName","Berło małpiego czarodzieja");
Database.addText("pl.eqItemWeaponMonkeyWizardStaffDescription","To berło należało do małpiego czarodzieja którego znalazłeś w jaskini. Będzie często strzelać magicznymi kulami sama z siebie, celując w twoich przeciwników.");
Database.addText("pl.eqItemWeaponEnchantedMonkeyWizardStaffName","Berło małpiego czarodzieja (zaczarowane)");
Database.addText("pl.eqItemWeaponEnchantedMonkeyWizardStaffDescription","To berło jest szybsze niż jego zwykła wersja i będzie strzelać większą ilością magicznych kul.");
Database.addText("pl.eqItemWeaponGiantSpoonName","Ogromna łyżka");Database.addText("pl.eqItemWeaponGiantSpoonDescription","Ta ogromna łyżka była w ogromnym czajniku w pustynnej fortecy. Nie wiesz czy ktoś używał jej kiedykolwiek jako łyżki, ale jeśli tak, to musiał to być ktoś naprawdę wielki. Raczej nie chcesz się z nim spotkać.");
Database.addText("pl.eqItemWeaponGiantSpoonOfDoomName","Ogromna łyżka zagłady");Database.addText("pl.eqItemWeaponGiantSpoonOfDoomDescription","Ta ogromna łyżka jest jeszcze potężniejsza niż zwykła ogromna łyżka którą możesz znaleźć, na przykład, w czajniku. Jest bardzo wolna.");
Database.addText("pl.eqItemWeaponScytheName","Kosa");Database.addText("pl.eqItemWeaponScytheDescription","Mówi się że ta kosa należała do samej śmierci. Jest niesamowicie szybka.");
Database.addText("pl.eqItemHatMerchantHatName","Kapelusz handlarza");Database.addText("pl.eqItemHatMerchantHatDescription","Ten kapelusz został ci sprzedany przez cukierkowego handlarza. Kupiec cukierków uwielbia cukierki. Ten kapelusz pomnoży ilość cukierków którą znajdziesz w zadaniach przez 7!");
Database.addText("pl.eqItemHatSorceressHatName","Kapelusz czarownicy");Database.addText("pl.eqItemHatSorceressHatDescription","Ten kapelusz został tobie sprzedany przez czarownicę. Wzmocni efekty twoich zaklęć i mikstur");
Database.addText("pl.eqItemHatOctopusKingCrownName","Korona króla ośmiornic");Database.addText("pl.eqItemHatOctopusKingCrownDescription","Kiedy nosisz tą koronę, czujesz się bardziej pewny siebie. Nie daje ci żadnej przewagi w zadaniach, ale pewność siebie jest ważna!");
Database.addText("pl.eqItemHatOctopusKingCrownWithJaspersName","Korona króla ośmiornic z jaspisami");
Database.addText("pl.eqItemHatOctopusKingCrownWithJaspersDescription","Ta zaczarowana korona jest zrobiona ze złota i czerwonych jaspisów. W zadaniach, będzie często rzucać potężnymi kulami ognia dookoła ciebie. Jest błyszcząca!");
Database.addText("pl.eqItemHatOctopusKingCrownWithObsidianName","Korona króla ośmiornic z obsydianem");
Database.addText("pl.eqItemHatOctopusKingCrownWithObsidianDescription","Ta zaczarowana korona jest zrobiona ze złota i obsydianu. Jest piękna. W zadaniach, będzie co jakiś czas przyzywać króla ośmiornic aby walczył po twojej stronie. Jaki mackowaty sprzymierzeniec!");
Database.addText("pl.eqItemGlovesLeatherGlovesName","Skórzane rękawice");Database.addText("pl.eqItemGlovesLeatherGlovesDescription","Te rękawice nic nie robią. Ale są przynajmniej miękkie i wygodne!");
Database.addText("pl.eqItemGlovesRedEnchantedGlovesName","Czerwone zaczarowane rękawiczki");
Database.addText("pl.eqItemGlovesRedEnchantedGlovesDescription","Te zaczarowane rękawiczki emitują delikatne czerwone światło gdy znajdujesz się w ciemności. W zadaniach, będą losowo rzucały małe ogniste kule w kierunku twoich przeciwników, co może okazać się bardzo przydatne.");
Database.addText("pl.eqItemGlovesPinkEnchantedGlovesName","Różowe zaczarowane rękawiczki");
Database.addText("pl.eqItemGlovesPinkEnchantedGlovesDescription","Te zaczarowane rękawiczki zostawiają różowe ślady na wszystkim czego dotkniesz. W zadaniach, będą cię stale leczyć.");
Database.addText("pl.eqItemBootsRocketBootsName","Rakietowe buty");Database.addText("pl.eqItemBootsRocketBootsDescription","Te odjazdowe pozwalają ci skakać w powietrzu w taki sposób, że po prostu latasz!");
Database.addText("pl.eqItemBootsLeatherBootsName","Skórzane buty");Database.addText("pl.eqItemBootsLeatherBootsDescription","Zwykłe skórzane buty. Nic specjalnego.");
Database.addText("pl.eqItemBootsBootsOfIntrospectionName","Buty introspekcji");Database.addText("pl.eqItemBootsBootsOfIntrospectionDescription","Nie śpiesz się, złap oddech, odpocznij.Nosząc te buty, nie będziesz się poruszał dopóki dotykasz podłoża.");
Database.addText("pl.eqItemBodyArmoursLightweightBodyArmourName","Lekka zbroja");
Database.addText("pl.eqItemBodyArmoursLightweightBodyArmourDescription","Ta zbroja da ci lekką obronę. Będziesz trochę bardziej odporny na na ataki twoich przeciwników.");
Database.addText("pl.eqItemBodyArmoursKnightBodyArmourName","Rycerska zbroja");Database.addText("pl.eqItemBodyArmoursKnightBodyArmourDescription","Ta mocna zbroja będzie cię ochraniać. Będziesz bardziej odporny na ataki nieprzyjaciół.");
Database.addText("pl.eqItemBodyArmoursEnchantedKnightBodyArmourName","Zaczarowana rycerska zbroja");
Database.addText("pl.eqItemBodyArmoursEnchantedKnightBodyArmourDescription","Ta zbroja jest wyjątkowa. Będziesz BARDZO odporny na ataki nieprzyjaciół, ale obrażenia zadawane przez ciebie zostaną podzielone przez 2.");
Database.addText("pl.mapVillageForgeBuyWoodenSwordButton","Kup drewniany miecz (150 cukierków)");
Database.addText("pl.mapVillageForgeBuyWoodenSwordSpeech","Dziękuję! Ten drewniany miecz jest słaby, ale to zawsze coś.");
Database.addText("pl.mapVillageForgeBuyIronAxeButton","Kup żelazną siekierę (400 cukierków)");
Database.addText("pl.mapVillageForgeBuyIronAxeSpeech","Mam nadzieje że spodoba ci się ta siekiera. Właśnie ją dla ciebie naostrzyłem!");
Database.addText("pl.mapVillageForgeBuyPolishedSilverSwordButton","Kup wypolerowany srebrny miecz (2 000 cukierków)");
Database.addText("pl.mapVillageForgeBuyPolishedSilverSwordSpeech","Stworzenie tego miecza zajęło mi bardzo długo. Zapewniam cię, jest warty swojej ceny.");
Database.addText("pl.mapVillageForgeBuyLightweightBodyArmourButton","Kup lekką zbroję (15 000 cukierków)");
Database.addText("pl.mapVillageForgeBuyLightweightBodyArmourSpeech","Ta zbroja zapewni ci ochronę przed twoimi przeciwnikami.");
Database.addText("pl.mapVillageForgeBuyScytheButton","Kup kosę (5 000 000 cukierków)");
Database.addText("pl.mapVillageForgeBuyScytheSpeech","Stworzenie tej kosy zajęło mi parę miesięcy. To prawdziwe dzieło sztuki. Jest najprawdopodobniej najszybszą bronią jakiej będziesz w stanie użyć. Powodzenia!");
Database.addText("pl.wishingWellThrowFirstCandyButton","Wrzuć cukierek do studni");
Database.addText("pl.wishingWellCandyIntroductionSpeech","Witaj podróżniku! Jestem studnią życzeń. Będę spełniać twoje życzenia w zamian za słodycze! Kiedy wrzucisz we mnie cukierki, uleczę cię.");
Database.addText("pl.wishingWellThrewCandiesSpeech","Zostałeś uleczony!");Database.addText("pl.wishingWellNoWoundSpeech","Nie masz niczego do uleczenia!");
Database.addText("pl.wishingWellThrowFirstLollipopButton","Wrzuć lizaka do studni");
Database.addText("pl.wishingWellLollipopIntroductionSpeech","Witaj podróżniku! Jestem studnią życzeń. Będę spełniać twoje życzenia w zamian za słodycze! Gdy wrzucisz we mnie lizaki, zamienię je na cukierki!");
Database.addText("pl.wishingWellThrewLollipopsSpeech","Twoje lizaki zostały zamienione na cukierki! Dwa lizaki na jeden cukierek.");
Database.addText("pl.wishingWellThrowChocolateBarButton","Wrzuć tabliczkę czekolady do studni.");
Database.addText("pl.wishingWellChocolateBarIntroductionSpeech","Witaj podróżniku! Jestem studnią życzeń. Będę spełniać twoje życzenia w zamian za słodycze! Uwielbiam czekoladę. Naprawdę ją kocham. Za każdą tabliczkę czekolady którą we mnie wrzucisz, łącznie z tą, dostaniesz jedną możliwość zaczarowania wybranego przez ciebie przedmiotu.");
Database.addText("pl.wishingWellThrewChocolateBarSpeech","Który przedmiot chcesz zaczarować?");
Database.addText("pl.wishingWellThrowPainAuChocolatButton","Wrzuć pain au chocolat do studni");
Database.addText("pl.wishingWellPainAuChocolatIntroductionSpeech","Witaj podróżniku! Jestem studnią życzeń. Będę spełniać twoje życzenia w zamian za słodycze! Gdy wrzucisz we mnie pain au chocolat, dostaniesz specjalny prezent. Wybieraj rozważnie.");
Database.addText("pl.wishingWellThrewPainAuChocolatSpeech","Dzięki za pain au chocolat! Możesz teraz wybrać swój prezent.");
Database.addText("pl.wishingWellChooseGift","Wybierz swój prezent!");Database.addText("pl.wishingWellChooseGiftButton","Wybierz");
Database.addText("pl.wishingWellGiftDoneSpeech","Gotowe! Masz nowy prezent. Pojawi się w twoim panelu statystyk w ekwipunku.");
Database.addText("pl.wishingWellNoPossibleEnchantment","Nie możesz teraz nic zaczarować");
Database.addText("pl.wishingWellChooseEnchantment","Wybierz czar");Database.addText("pl.wishingWellEnchantButton","Zaczaruj");
Database.addText("pl.wishingWellEnchantmentDoneSpeech","Proszę bardzo! Twój przedmiot jest teraz zaczarowany.");
Database.addText("pl.pierLighthouseButton","Popłyń do latarni morskiej łódką");Database.addText("pl.pierTheSeaButton","Wskocz do morza");
Database.addText("pl.lonelyHouseOpenBox","Otwórz pudełko");Database.addText("pl.lonelyHouseShakeBox","Wstrząśnij pudełkiem");
Database.addText("pl.lonelyHouseBreakLock","Wyłam zamek");Database.addText("pl.lonelyHouseKickBox","Kopnij pudełko");
Database.addText("pl.lonelyHouseAskTheBoxToOpenItself","Poproś pudełko żeby się otworzyło");
Database.addText("pl.lonelyHouseLureTheBoxWithACandy","Zaoferuj pudełku cukierka");
Database.addText("pl.lonelyHouseTakeTheBox","Weź pudełko ze sobą, prawdopodobnie potrzebujesz klucza żeby je otworzyć.");
Database.addText("pl.lonelyHouseOpenBoxResult","Pudełko jest zakluczone");Database.addText("pl.lonelyHouseShakeBoxResult","Nic się nie dzieje");
Database.addText("pl.lonelyHouseBreakLockResult","Zamek wytrzymuje");Database.addText("pl.lonelyHouseKickBoxResult","Stopa cię trochę rozbolała, ale nic się nie dzieje.");
Database.addText("pl.lonelyHouseAskTheBoxToOpenItselfResult","...wiesz że gadasz do pudełka, prawda?");
Database.addText("pl.lonelyHouseLureTheBoxWithACandyResult","Pudełko się nie przejmuje");
Database.addText("pl.lonelyHouseTakeTheBoxResult","W tym candy box musi być coś ciekawego.");
Database.addText("pl.lollipopFarmConstructMill","Zbuduj młyn (10 000 lizaków)");Database.addText("pl.lollipopFarmFeedMill","Nakarm młyn");
Database.addText("pl.lollipopFarmCurrentCandiesProduction","Bieżąca produkcja cukierków");
Database.addText("pl.lollipopFarmDigPond","Wykop staw (100 000 lizaków)");Database.addText("pl.lollipopFarmBuyLolligator","Kup lizakogotora (1200 cukierków)");
Database.addText("pl.lollipopFarmLolligatorsConversionText","Zamiana cukierki -> lizaki włączona");
Database.addText("pl.lighthouseAskButton","Spytaj");Database.addText("pl.lighthouseQuestionWho","Kim jesteś?");
Database.addText("pl.lighthouseQuestionWhoSpeech","Jestem bardzo starym cyklopem");
Database.addText("pl.lighthouseQuestionWhat","Co ty tu robisz?");Database.addText("pl.lighthouseQuestionWhatSpeech","Siedzę tutaj cały dzień, czekając na łódkę. Minęło już sporo czasu od kiedy ostatni raz widziałem łódkę, ale muszę tu zostać, patrzyć się na morze, ponieważ może przypłynąć łódka.");
Database.addText("pl.lighthouseQuestionWhyEatCandies","Dlaczego powinienem jeść cukierki?");
Database.addText("pl.lighthouseQuestionWhyEatCandiesSpeech","Bo są dobre dla twojego zdrowia!");
Database.addText("pl.lighthouseQuestionCandyBox","Czym jest candy box?");Database.addText("pl.lighthouseQuestionCandyBoxSpeech","Jest to bardzo stare pudełko o którym mówi się że zawiera wszystkie cukierki świata. Legendy mówią że komukolwiek uda się je otworzyć, miałby tak dużo cukierków że wszystko byłoby możliwe.");
Database.addText("pl.lighthouseQuestionDragon","Smok powiedział mi żeby przyjść tutaj, jeśli chcę cukierków.");
Database.addText("pl.lighthouseQuestionDragonSpeech","Ach, rozumiem... Cóż, nie jestem w stanie zapewnić ci cukierków bezpośrednio, ale jestem w stanie dać ci coś niezbędnego potrzebnego do uzyskania MNÓSTWA cukierków. Lecz najpierw muszę cię sprawdzić. To co mam nie może być oddane do byle kogo. Rozwiąż tę zagadkę i będzie twoje.");
Database.addText("pl.lighthouseFoundStone","Gratulacje! Zdałeś test i znalazłeś kamień. Jest bezcenny, ale przydatny tylko jeśli masz trzy pozostałe. Powodzenia!");
Database.addText("pl.lighthouseFoundStoneAgain","Dobra robota, rozwiązałeś zagadkę po raz kolejny. Chyba lubisz to robić.");
Database.addText("pl.saveLocalSaveTitle","Zapisz w przeglądarce");Database.addText("pl.saveLocalSaveWhy","Wybierz zapis w przeglądarce jeśli chcesz kontynuować na tym urządzeniu i przeglądarce.");
Database.addText("pl.saveLocalSaveWarning0","Twoja przeglądarka chyba nie obsługuje HTML5");
Database.addText("pl.saveLocalSaveWarning1","Powinieneś zaktualizować swoją przeglądarkę aby skorzystać z funkcji zapisu w przeglądarce.");
Database.addText("pl.saveLocalSaveChooseSlot","Wybierz miejsce do zapisania :");Database.addText("pl.saveLocalSaveAutosaveEnabled","Autozapis włączony");
Database.addText("pl.saveLocalSaveChooseWhatToDo","Wybierz co zrobić :");Database.addText("pl.saveLocalSaveSaveButton","Zapisz");
Database.addText("pl.saveLocalSaveAutosaveButton","Zapisuj automatycznie co 10 minut");
Database.addText("pl.saveLocalSaveDisableAutosaveButton","Wyłącz autozapis");Database.addText("pl.saveFileSaveTitle","Zapis tekstowy");
Database.addText("pl.saveFileSaveWhy0","Wybierz zapis tekstowy jeśli :");Database.addText("pl.saveFileSaveWhy1","Chcesz kontynuować grę na innym urządzeniu bądź przeglądarce");
Database.addText("pl.saveFileSaveWhy2","Chcesz się podzielić swoim zapisem z kimś innym");
Database.addText("pl.saveFileSaveWhy3","Z jakiegoś powodu chcesz opróżnić pamięć podręczną swojej przeglądarki");
Database.addText("pl.saveFileSaveWhy4","(co usunie twoje zapisy przeglądarkowe)");
Database.addText("pl.saveFileSaveButton","Dostań swoją obecną grę w formie tekstowej");
Database.addText("pl.saveFileSaveWarning","Teraz skopiuj gdzieś ten tekst! (na przykład, do pliku)");
Database.addText("pl.saveLocalLoadTitle","Wczytaj z przeglądarki");Database.addText("pl.saveLocalLoadYouCan","Możesz wczytać zapis przeglądarkowy korzystając z tych linków:");
Database.addText("pl.saveLocalLoadThanksTo","Dzięki magii HTML5, będziesz w stanie korzystać z tych zapisów nawet offline.");
Database.addText("pl.saveFileLoadTitle","Wczytaj tekst");Database.addText("pl.saveFileLoadPaste",'Wklej swój zapis poniżej, potem kliknij guzik "Wczytaj"');
Database.addText("pl.saveFileLoadButton","Wczytaj");Database.addText("pl.mountainsText0","Zauważyłeś coś pomiędzy górami!");
Database.addText("pl.mountainsText1","Wygląda interesująco. Może się przyda.");Database.addText("pl.mountainsTextButton","Wespnij się na góry aby zdobyć to coś");
Database.addText("pl.mountainsTextAfter","Znalazłeś sprężynowe urządzenie do podskakiwania! Jest teraz w twoim ekwipunku.");
Database.addText("pl.secondHouseIntroSpeech","Witaj, jestem handlarzem cukierków. Dla cukierków zrobię wszystko. Czego potrzebujesz?");
Database.addText("pl.secondHouseLollipop1Speech","To jest cytrynowy lizak. Mój ulubiony! Kosztuje 60 cukierków, ale jest tego warty.");
Database.addText("pl.secondHouseLollipop2Speech","To jest truskawkowy lizak. Jest bardzo smaczny. Lubię jego czerwony kolor. Tylko 60 cukierków!");
Database.addText("pl.secondHouseLollipop3Speech","To jest dyniowy lizak. Założę się że nigdy takiego nie jadłeś! 60 cukierków i jest twój.");
Database.addText("pl.secondHouseLollipopButtonText","Kup tego lizaka (60 cukierków)");
Database.addText("pl.secondHouseMerchantHatSpeech","Mogę ci sprzedać mój kapelusz, ale jest bardzo cenny... Będziesz musiał mi dać za niego mnóstwo cukierków. Powiedzmy... milion cukierków. To uczciwa cena, prawda?");
Database.addText("pl.secondHouseMerchantHatButtonText","Kup kapelusz handlarza (1 000 000 cukierków)");
Database.addText("pl.secondHouseTimeRingSpeech","To jest pierścień czasu. Jest magiczny. Pozwoli ci zwolnić czas jeśli wpadniesz w tarapaty.");
Database.addText("pl.secondHouseTimeRingButtonText","Kup pierścień czasu (500 cukierków)");
Database.addText("pl.secondHouseLeatherGlovesSpeech","Te skórzane rękawice zostały stworzone z najwyższej jakości wielbłądziej skóry. Mam ich mnóstwo, dlatego są takie tanie : tylko 300 cukierków!");
Database.addText("pl.secondHouseLeatherBootsButtonText","Kup parę skórzanych butów (300 cukierków)");
Database.addText("pl.secondHouseLeatherBootsSpeech","Te skórzane buty wysokiej jakości, stworzone z wielbłądziej skóry, ocieplą twoje stopy.");
Database.addText("pl.secondHouseLeatherGlovesButtonText","Kup parę skórzanych rękawic (300 cukierków)");
Database.addText("pl.secondHouseChocolateBarSpeech","To jest tabliczka czekolady. Nie wiem do czego służy, ale wiem że jest bardzo rzadka, co wyjaśnia jej cenę. 800 cukierków i jest twoja!");
Database.addText("pl.secondHouseChocolateBarButtonText","Kup tabliczkę czekolady (800 cukierków)");
Database.addText("pl.outsideTheHoleButton","Wskocz do wielkiej dziury w ziemi");Database.addText("pl.theCaveExitText0","W końcu znalazłeś wyjście z jaskini.");
Database.addText("pl.theCaveExitText1","Widzisz stąd wielki las.");Database.addText("pl.theCaveExitButtonText","Wyjdź z jaskini");
Database.addText("pl.theCaveFirstSentenceWentStraight","Poszedłeś prosto.");Database.addText("pl.theCaveFirstSentenceWentLeft","Poszedłeś w lewo.");
Database.addText("pl.theCaveFirstSentenceWentRight","Poszedłeś w prawo");Database.addText("pl.theCaveFirstSentenceYouAre","Jesteś w jaskini. Masz przed sobą trzy ścieżki.");
Database.addText("pl.theCavePattern_ArrowsToHeartPlugSeeStrangePlug","Zauważyłeś dziwną rzecz na ziemi przed tobą.");
Database.addText("pl.theCavePattern_ChocolateBarNowSeeChocolateBar","Zauważyłeś tabliczkę czekolady.");
Database.addText("pl.theCavePattern_TreasureMapSentence","Widzisz małe kamyki ułożone w dziwny sposób na ziemi.");
Database.addText("pl.theCavePattern_MonkeyWizardSentence","Natknąłeś się na nagiego małpiego czarodzieja.");
Database.addText("pl.theCavePattern_MonkeyWizardButton","Zmierz się z nim");Database.addText("pl.theCavePattern_OctopusKingSentence","Natknąłeś się na króla ośmiornic. Jest paskudny.");
Database.addText("pl.theCavePattern_OctopusKingButton","Zmierz się z nim");Database.addText("pl.fortressInsideText0","Jesteś w pustynnej fortecy.");
Database.addText("pl.fortressInsideText1","Masz wybór pomiędzy trzema drzwiami.");
Database.addText("pl.fortressInsideText2","Każde z nich prowadzi do dużego pokoju ze skarbem");
Database.addText("pl.fortressInsideEnterRoom1","Wejdź do pierwszego pokoju");Database.addText("pl.fortressInsideEnterRoom2","Wejdź do drugiego pokoju");
Database.addText("pl.fortressInsideEnterRoom3","Wejdź do trzeciego pokoju");Database.addText("pl.treasureButtonDig","Kop");
Database.addText("pl.treasureButtonYouFound","Znalazłeś trzy tabliczki czekolady!");
Database.addText("pl.sorceressHutHello","Witaj, jestem czarodziejką. Mogę cię nauczyć co nieco o magii. Mogę ci także dać interesujące rzeczy, albo rzucać za ciebie zaklęcia. Ale wszystko ma swoją cenę! A tą ceną będą lizaki... Mnóstwo lizaków.");
Database.addText("pl.sorceressHutClickedGrimoire","To jest grimuar stworzony dla początkujących. Nosząc go ze sobą w zadaniach, będziesz w stanie rzucać proste, ale przydatne zaklęcia. Niezbędny! Tylko 5 000 lizaków.");
Database.addText("pl.sorceressHutBuyGrimoireButton","Kup Ten grimuar (5 000 lizaków)");
Database.addText("pl.sorceressHutBuyGrimoireSpeech","Dziękuję za kupno! Dzięki temu grimuarowi będziesz w stanie rzucać trzy zaklęcia. Powodzenia!");
Database.addText("pl.sorceressHutClickedGrimoire2","To jest zaawansowany grimuar. Nosząc go ze sobą w zadaniach, będziesz w stanie rzucać 2 zaawansowane zaklęcia. Sama go napisałam, a to nie było proste. 20 000 lizaków to uczciwa cena.");
Database.addText("pl.sorceressHutBuyGrimoire2Button","Kup ten grimuar (20 000 lizaków)");
Database.addText("pl.sorceressHutBuyGrimoire2Speech","Dziękuję za kupno! Dzięki temu grimuarowi będziesz w stanie rzucać dwa zaawansowane zaklęcia. Używaj ich rozważnie!");
Database.addText("pl.sorceressHutClickedCauldron","To jest mój kocioł. Pozwala mi warzyć magiczne mikstury. Mogę ci go sprzedać ale jest bardzo cenny... będzie cię kosztować 100 000 lizaków.");
Database.addText("pl.sorceressHutBuyCauldronButton","Kup kocioł (100 000 lizaków)");
Database.addText("pl.sorceressHutBuyCauldronSpeech","Wielkie dzięki! 100 000 lizaków dla mnie! W zestawie dołączyłam instrukcje użytkowania. Przyda ci się.");
Database.addText("pl.sorceressHutClickedHat","Mam ładny kapelusz, wiem! Ale naprawdę nie mogę ci go sprzedać. Jest dla mnie baaaardzo cenny. Naprawdę, nie mogę. Nie nalegaj. Nie. Nie nie nie nie. Nie powinnam tego robić. Och, niech ci będzie! Sprzedam ci go, ale za 1 000 000 000 lizaków. I tak pewnie nie będziesz w stanie tyle zapłacić.");
Database.addText("pl.sorceressHutBuyHatButton","Kup kapelusz (1 000 000 000 lizaków)");
Database.addText("pl.sorceressHutBuyHatSpeech","Miliard lizaków dla mnieeeeee! Niestety nie mam już kapelusza... ale miliard lizaków, wow! ... Było warto.");
Database.addText("pl.cauldronPreviousPageButton","Poprzednia strona");Database.addText("pl.cauldronNextPageButton","Następna strona");
Database.addText("pl.cauldronWhatYouWantToPut","Co chcesz wsadzić do kotła?");Database.addText("pl.cauldronWhatIsIn","Co jest w kotle:");
Database.addText("pl.cauldronWhatYouCanDo","Co możesz z tym zrobić:");Database.addText("pl.castleBigRoomComment","Wielki pokój");
Database.addText("pl.castleARoomComment","Pokój");Database.addText("pl.castleADarkRoomComment","Nieoświetlony pokój");
Database.addText("pl.castleCastleEntranceComment","Wejście do zamku");Database.addText("pl.castleTowerEntranceComment","Wejście do wieży");
Database.addText("pl.castleNougatMonsterComment","Zaatakuj wielkiego nugatowego potwora");
Database.addText("pl.castleGuardsComment","Zaatakuj strażników");Database.addText("pl.castleStairsComment","Schody");
Database.addText("pl.buttonBackToTheCastle","Powrót do zamku");Database.addText("pl.castleBigRoomHovenSpeechSad","Cześć! Jestem bardzo starym Piecem Chlebowym. Kiedyś wypiekałem mnóstwo wspaniałych wyrobów cukierniczych, ale nikt już ze mnie nie korzysta. Może... może mógłbyś mi pomóc? Pozwól mi tylko zabrać od ciebie trochę słodyczy! Nie martw się, nie pożałujesz tego! Zaufaj mi.");
Database.addText("pl.castleBigRoomHovenNotEnough","Och... nie masz wystarczającej ilości słodyczy, nie mogę nic zrobić. Jestem bezużyteczny. Jestem Bezużytecznym Piecem Chlebowym, tak powinieneś mnie nazywać.");
Database.addText("pl.castleBigRoomHovenSpeechMadePainAuChocolat","Hurra! Wielkie dzięki! Wykorzystałem  100 cukierków oraz tabliczkę czekolady, i stworzyłem... pain au chocolat! Jest to mój ulubiony wypiek cukierniczy, mam nadzieje że też go polubisz!");
Database.addText("pl.castleBigRoomHovenSpeechHappy","Hej! Jeżeli chcesz żebym wypiekł jeszcze coś, po prostu mi powiedz! Z przyjemnością ci pomogę.");
Database.addText("pl.castleBigRoomHovenSpeechHappyNotEnough","Och, niestety nie masz wystarczającej ilości słodyczy. Potrzebuje 100 cukierków i tabliczkę czekolady. Wróć kiedy będziesz miał składniki");
Database.addText("pl.castleBigRoomHovenLetHovenTakeButton","Pozwól Piecowi zabrać wszystkie cukierki których potrzebuje");
Database.addText("pl.castleBigRoomHovenThanks","Dzięki Piecu!");Database.addText("pl.dragonStopTickling","Hej, ty! Proszę, przestań mnie łaskotać.");
Database.addText("pl.dragonStopTicklingButton","Yyyy, przepraszam, myślałem że miałem cię zaatakować.");
Database.addText("pl.dragonTalking","Jestem Smok, a to jest mój zamek. Widzę że udało ci się wejść, musisz być bardzo odważny... Mogę ci pomóc. Czego poszukujesz?");
Database.addText("pl.dragonTalkingChallengeButton","Wyzwania");Database.addText("pl.dragonTalkingFameButton","Sławy");
Database.addText("pl.dragonTalkingCandiesButton","Cukierków");Database.addText("pl.dragonTalkingChallengeSpeech","Ach, więc chcesz wyzwania? Myślę że powinieneś wybrać się na wycieczkę do piekła, wszyscy wiedzą że Diabeł jest trudnym przeciwnikiem. Wskocz mi na plecy to cię tam zabiorę!");
Database.addText("pl.dragonTalkingFameSpeech","Najlepszym sposobem na zostanie sławnym jest zmierzenie się z samym deweloperem. Wiem gdzie mieszka więc mogę cię tam zabrać. Ale bądź gotowy, to nie będzie łatwe.");
Database.addText("pl.dragonTalkingCandiesSpeech","Ostatecznie, rzeczą której wszyscy chcemy to cukierki, prawda? Myślę że mój znajomy mógłby ci z tym pomóc. Łatwo go rozpoznasz, ma tylko jedno oko. Po prostu powiedz mu że mnie znasz.");
Database.addText("pl.dragonTalkingChallengeAnswer","Chodźmy!");Database.addText("pl.dragonTalkingFameAnswer","Jestem gotowy!");
Database.addText("pl.dragonTalkingCandiesAnswer","Ok, dzięki!");Database.addText("pl.buttonBackToCastle","Powrót do zamku");
Database.addText("pl.talkingCandySpeechNoBox","Hej! Jestem Mówiący Cukierek. Prawie przeszedłeś grę. Teraz tylko musisz znaleźć candy box. Znajduje się w domu na północ od wioski. To już ostatni krok!");
Database.addText("pl.talkingCandySpeech1","Hej! Jestem Mówiący Cukierek. Gratulacje, przeszedłeś grę! Otworzę dla ciebie candy box, będzie to twoją nagrodą. Mam kontynuować?");
Database.addText("pl.talkingCandySpeech2","Gotowe! Możesz go otworzyć. Mam nadzieję że gra się podobała :)");
Database.addText("pl.talkingCandyButton","Tak!!");Database.addText("pl.lighthousePuzzleResetButton","Resetuj");
Database.addText("fr.mapVillageComment","Le Village");Database.addText("fr.mapFortressComment","La forteresse du désert");
Database.addText("fr.mapATreeComment","Un arbre");Database.addText("fr.mapTheDesertComment","Le désert");
Database.addText("fr.mapWishingWellComment","Le puits aux souhaits");Database.addText("fr.mapLonelyHouseComment","Une maison solitaire");
Database.addText("fr.mapForestComment","La forêt");Database.addText("fr.mapCastleEntranceComment","Entrée du château");
Database.addText("fr.mapCastleComment","Le château");Database.addText("fr.mapDragonComment","Le dragon");
Database.addText("fr.candyBoxEatCandiesButton","Manger tous les bonbons");Database.addText("fr.candyBoxThrowCandiesButton","Jeter 10 bonbons par terre");
Database.addText("fr.mapVillageLockedHouseComment","Une maison verrouillée");Database.addText("fr.mapVillageAHouseComment","Une maison");
Database.addText("fr.mapVillageForgeComment","La forge");Database.addText("fr.buttonBackToTheMap","Revenir à la carte");
Database.addText("fr.mapSorceressHutComment","Hutte de la sorcière");Database.addText("fr.buttonBackToTheVillage","Revenir au village");
Database.addText("fr.mapATreeIntroductionSpeech","Bonjour, je suis l'Écureuil. Je peux te fournir des bonbons, et un tas d'autres choses. Je sais à quel point tu aimes les bonbons. Mais je me sens seul dans cette forêt.");
Database.addText("fr.mapATreeIntroductionButton","Comment puis-je t'aider ?");Database.addText("fr.mapATreeFirstQuestion","Je vais te poser des questions. Si tu réponds correctement, les plus douces sucreries seront à toi ! Première question : aimes-tu vraiment les bonbons ? (répondre en anglais)");
Database.addText("fr.mapATreeSecondQuestion","C'est bon ! Voici 20 bonbons pour toi. Maintenant complète cette suite de lettres : S, E, I, D, N, A, ?");
Database.addText("fr.mapATreeThirdQuestion","Candies! Voici 100 bonbons pour toi. Question suivante : combien de bonbons possède la personne la plus bonbon du monde ?");
Database.addText("fr.mapATreeFourthQuestion","Voici 500 bonbons pour toi ! La prochaine récompense devrait être encore plus intéressante... Voici l'énigme : Dans une ancienne forêt pousse un très vieil arbre, sur lequel vivent les animaux les plus intelligents de ce monde. On dit que cet arbre possède 60 racines, 360 branches et 2160 feuilles. Combien de marques peut-on trouver sur son tronc ?");
Database.addText("fr.mapATreeFifthQuestion","Bravo ! Je parlais de mon arbre, effectivement. Voici 3 sucettes pour toi. Fais-en bon usage ! Prochaine énigme : écoute attentivement : Sous la pleine lune, je jette un chapeau jaune dans la mer rouge. Qu'arrive-t-il au chapeau jaune ?");
Database.addText("fr.mapATreeTicTacToeIntro","Bien répondu ! Ce n'était pas trop dur. Voici trois barres de chocolat pour toi ! Pour la prochaine récompense, on va changer un peu les règles. Tu vas devoir jouer à un jeu avec moi ! Es-tu prêt ?");
Database.addText("fr.mapATreeTicTacToeIntroButton","Bien sûr que je le suis !");Database.addText("fr.mapATreeTicTacToeLetsPlay","Le jeu est Tic-Tac-Toe. On joue sur un plateau de 3 par 3. Tu utiliseras le signe X et moi le signe O. On place nos signes alternativement, et le but est d'en aligner trois. Je te laisse commencer !");
Database.addText("fr.mapATreeTicTacToeNobodyWins","Le plateau est entièrement remplit et on a tous les deux échoué à aligner trois signes : personne ne gagne ! Tu veux rejouer ?");
Database.addText("fr.mapATreeTicTacToeYouLose","J'en ai aligné trois ! J'ai gagné. Tu veux rejouer ?");
Database.addText("fr.mapATreeTicTacToeTryAgainButton","Oui je veux !");Database.addText("fr.mapATreeTicTacToeYouWin","Wow, c'est un coup innatendu. Mais tu en as aligné trois, je ne peux rien dire. Tu as gagné ! Prends cette clé ! Elle ouvre l'une des maisons du village sous la forêt.");
Database.addText("fr.mapATreeTicTacToeAnymoreSweet","Merci, écureuil ! Un autre défi ?");
Database.addText("fr.mapATreeNoMoreChallenge","Malheureusement non, je n'ai plus de défi pour toi... Jouer avec toi était vraiment amusant, je t'en remercie !");
Database.addText("fr.buttonExitQuestKeeping","Quitter la quête (et gardez ce que vous avez trouvé)");
Database.addText("fr.buttonExitQuestNoKeeping","Quitter la quête (vous ne garderez pas ce que vous avez trouvé)");
Database.addText("fr.buttonExitQuestNoKeepingBecauseLose","Quitter la quête (vous ne garderez pas ce que vous avez touvé car vous avez écouché)");
Database.addText("fr.mapVillageForgeIntroductionSpeech","Bonjour ! Je suis un forgeron. Je peux vous vendre diverses armes et pièces d'équipement.");
Database.addText("fr.mapVillageForgeIntroductionSpeechNoMoreToSell","Bonjour ! Je suis un forgeron. Je n'ai plus rien à vous vendre. Revenez plus tard, peut-être ?");
Database.addText("fr.mapVillageFifthHouseNoWeaponSpeech","Bonjour. Ma cave est pleine de rats, j'ai besoin de quelqu'un pour m'en débarrasser... si seulement quelqu'un avec une arme pouvait m'aider...");
Database.addText("fr.mapVillageFifthHouseWeaponSpeech","Eh, vous ! Je vois que vous portez une arme ! Si vous tuez les rats qui infestent ma cave, je vous récompenserai !");
Database.addText("fr.mapVillageFifthHouseAgree","C'est parti !");Database.addText("fr.mapVillageFifthHouseCellarDone","Merci de m'en avoir débarrassé ! Voici quelque chose de très précieux en récompense : une carte du monde. Je pense que vous en aurez plus l'usage que moi.");
Database.addText("fr.mapVillageTheShopComment","Le magasin");Database.addText("fr.mapBridgeComment","Le pont");
Database.addText("fr.mapFarmComment","La ferme à sucettes");Database.addText("fr.mapCaveEntranceComment","L'entrée de la grotte");
Database.addText("fr.mapLighthouseComment","Le phare");Database.addText("fr.mapPierComment","La jetée");
Database.addText("fr.mapTheHoleComment","Le Trou");Database.addText("fr.candyBoxRequestStatusBarUnlocked","Demander une nouvelle fonctionnalité au développeur (30 bonbons)");
Database.addText("fr.candyBoxRequestStatusBarUnlockedCfg","En demander une autre (5 bonbons)");
Database.addText("fr.candyBoxRequestStatusBarUnlockedSave","Demander encore (5 bonbons)");
Database.addText("fr.candyBoxRequestStatusBarUnlockedHealthBar","Demander quelque chose de plus intéressant (5 bonbons)");
Database.addText("fr.candyBoxRequestStatusBarUnlockedMap","Dernière demande ! Celle-là a intérêt de valoir le coup. (10 bonbons)");
Database.addText("fr.candyBoxRequestStatusBarUnlockedComment","Vous avez débloqué une barre d'état ! (en haut)");
Database.addText("fr.candyBoxRequestStatusBarUnlockedCfgComment1","Vous avez maintenant accès à un onglet de configuration.");
Database.addText("fr.candyBoxRequestStatusBarUnlockedCfgComment2","Vous pouvez changer la langue, si vous le voulez.");
Database.addText("fr.candyBoxRequestStatusBarUnlockedSaveComment","Un onglet de sauvegarde sauvage apparait !");
Database.addText("fr.candyBoxRequestStatusBarUnlockedHealthBarComment","Voici 100 points de vie pour vous. Ils vont vous être utiles.");
Database.addText("fr.cfgChooseLanguage","Choisissez la langue :");Database.addText("fr.cfgInvertColors","Inverser les couleurs ?");
Database.addText("fr.gridItemMainMapName","La Carte");Database.addText("fr.gridItemMainMapDescription","Carte du monde");
Database.addText("fr.gridItemPogoStickName","Bâton sauteur");Database.addText("fr.gridItemPogoStickDescription","Cet objet vous permet de sauter pendant les quêtes !");
Database.addText("fr.gridItemTimeRingName","Un anneau temporel");Database.addText("fr.gridItemTimeRingDescription","Cet objet vous donne une nouvelle capacité pendant les quêtes : vous pouvez ralentir le temps. Si les choses vont trop vite pour vous, utilisez votre anneau temporel !");
Database.addText("fr.gridItemThirdHouseKeyName","La clé de la troisième maison");
Database.addText("fr.gridItemThirdHouseKeyDescription","Cette clé vous permet d'entrer dans la troisième maison du village");
Database.addText("fr.gridItemFeatherName","Une plume d'oiseau du désert");Database.addText("fr.gridItemFeatherDescription","Cette plume magique vous permet de sauter plus haut quand vous utilisez votre bâton sauteur !");
Database.addText("fr.gridItemFeatherDescriptionNoPogoStick","Pour une raison inconnue, vous sentez que cette plume pourrait être utile si vous aviez un bâton sauteur...");
Database.addText("fr.gridItemSpongeName","Une éponge magique");Database.addText("fr.gridItemSpongeDescription","Cette éponge magique vous permet de vous presser vous-même comme une éponge, réduisant ainsi votre taille.");
Database.addText("fr.gridItemFortressKeyName","La clé de la forteresse du désert");
Database.addText("fr.gridItemFortressKeyDescription","Cette clé vous permet d'entrer dans la très ancienne forteresse située au-dessus du désert. Qui sait ce que vous pourriez y trouver ?");
Database.addText("fr.gridItemHeartPendantName","Un pendentif en forme de coeur");
Database.addText("fr.gridItemHeartPendantDescription","Ce pendentif va augmenter vos points de vie tant que vous le garderez autour du cou.");
Database.addText("fr.gridItemHeartPlugName","Module cardiaque");Database.addText("fr.gridItemHeartPlugDescription","Ce module cardiaque, fabriqué à l'aide de fer, de pattes d'araignée et d'une \"liqueur cardiaque\" spéciale scellée en son centre, va augmenter votre nombre de points de vie de 20 pourcents !");
Database.addText("fr.gridItemBeginnersGrimoireName","Le grimoire des débutants");
Database.addText("fr.gridItemBeginnersGrimoireDescription","Ce grimoire vous fournit trois sorts, assez faciles à lancer. Il est vraiment fait pour les débutants. Vous serez capables d'utiliser le sort de pluie d'acide (une importante quantité de gouttes d'acide tombera sur vos ennemis), le sort de boule de feu (une boule magique géante faite de feu volera en direction de vos ennemis) et le sort de téléportation (qui vous téléportera en un endroit imprévisible).");
Database.addText("fr.gridItemAdvancedGrimoireName","Le grimoire avancé");Database.addText("fr.gridItemAdvancedGrimoireDescription","Ce grimoire avancé vous fournit deux sorts : le sort d'effacement de la magie et le sort de bouclier d'épines. Le premier effacera toute la magie d'une quête à un moment donné, y compris les sorts que vous avez lancé et la magie de vos ennemis. Le second créera autour de vous un bouclier d'épines flottantes qui infligeront des dommages à vos ennemis au contact.");
Database.addText("fr.gridItemBlackMagicGrimoireName","Le grimoire de magie noire");
Database.addText("fr.gridItemBlackMagicGrimoireDescription","Vous avez trouvé ce grimoire dans une cave, il était très difficile d'accès, et ce n'était pas pour rien. Il vous fournit deux puissants sorts de magie noire. Le premier créera devant vous un mur géant fait de briques d'obsidienne, ce qui peut être utile pour ralentir vos ennemis. Le second invoquera une horde de démons attaquant tout le monde dans la quête, y compris vous. Faites attention avec celui-ci.");
Database.addText("fr.gridItemUnicornHornName","Une corne de licorne");Database.addText("fr.gridItemUnicornHornDescription","Cette corne magique appartenait à une licorne. Ses puissants pouvoirs de guérison vont beaucoup vous aider. On vous a dit que la licorne s'appelait Charlie.");
Database.addText("fr.gridItemXinopherydonClawName","Une griffe de xinopherydon");
Database.addText("fr.gridItemXinopherydonClawDescription","Cette griffe appartenait à un xinopherydon, un ancien animal à deux têtes que tout le monde croit éteint. Elle doublera les dommages de l'arme que vous utilisez.");
Database.addText("fr.gridItemPitchforkName","Une fourche");Database.addText("fr.gridItemPitchforkDescription","Cette fourche spéciale vous permet d'ameublir la terre sans avoir à le retourner, préservant ainsi les écosystèmes du sol. Cela triplera la production de votre ferme à sucettes.");
Database.addText("fr.gridItemShellPowderName","Poudre de coquillage");Database.addText("fr.gridItemShellPowderDescription","La poudre de coquillage est souvent utilisée par les paysans pour améliorer la vitesse de pousse de leurs sucettes. Cette poudre multipliera votre production de sucettes par trois !");
Database.addText("fr.gridItemPName","La pierre P");Database.addText("fr.gridItemPDescription",'-\\BC{HASP+_ |`}iA=  JA   } ^N  )K `/K=)OW=$-#&JWhC N `-(\\  $QWDKO^+ DDUDM =^O(IOY~VoW BBDU `# Z_$  LY-    -  _ \\P  FFp(N/X "D° (D ~ -Z DI}I "  W}G -`eW PD   JTBU-PS°-J (`  /R`yM}  T$`` °+-|U(\\OL&Y_)T|');
Database.addText("fr.gridItemLName","La pierre L");Database.addText("fr.gridItemLDescription",'"ED^S~\\^ W^LKCKo$OE ~$`W I~   $O°   ^   Y} V  ^ "\\  - }XuX  IFHS Z(V~\\  VPU NV OE    °M   FR   (LA =I -MlR =/F&+=)}J-~EK{{ F( H i}M   & " $ $& EHU- V  Qk_#- J GPF+UYC)#° ~~PS \\}+HeQ=IM Y +NJD  EF}t /-');
Database.addText("fr.gridItemAName","La pierre A");Database.addText("fr.gridItemADescription",'CMZ  ( FWCWH   {h=  = AZPZ|  ($L  U$ +YIHW ( ^NCDX    K "G L+eIN#J(|RE TRL- \\ }F-  PA(P(-   -+N  Jg# NE- D -H  - Z NR&F^J}A~ IT°#{  Oa$ GM T{Q "S A-\\ F Km°& C #° CNTZ  M  TVQ_QH # _Z\\M=_VTM\\W-e_VEQ  {');
Database.addText("fr.gridItemYName","La pierre Y");Database.addText("fr.gridItemYDescription",'IK  OA#  U   \\ }CY!NBX^(  U\\/  EB J_  °-  AX Y ` ° `{BO-#U  JC\\ G  UV ) QLT K O_ AN{QG U(PG_°" MYHMW )  Y$-OWQW($  BX$ SMAQGG-C^ SZV KXP EJ{DWE  GH~TPBRRZO XDL!}(Y V&_#  -+R ( Y -)-/+-`E° I &L- /    K');
Database.addText("fr.gridItemRedSharkFinName","Un aileron de requin magique rouge");
Database.addText("fr.gridItemRedSharkFinDescription","Cet aileron magique va grandement augmenter les dégâts de votre sort de boule de feu. Cette boule de feu devient enfin utile.");
Database.addText("fr.gridItemGreenSharkFinName","Un aileron de requin magique vert");
Database.addText("fr.gridItemGreenSharkFinDescription","Cet aileron magique apportera le pouvoir de la nature à votre ferme à sucettes! Votre production sera multipliée par 5.");
Database.addText("fr.gridItemPurpleSharkFinName","Un aileron de requin magique violet");
Database.addText("fr.gridItemPurpleSharkFinDescription","Cet aileron magique vous apportera un nouveau sort de magie noire. Vous ne pouvez l'utiliser qu'une fois par quête. Faites attention avec celui-là !");
Database.addText("fr.gridItemTalkingCandyName","Un bonbon qui parle");Database.addText("fr.gridItemTalkingCandyDescription","Ce bonbon qui parle est apparu après que vous ayez placé les quatre pierres en haut de la tour du château. Il pourrait vous être utile pour ouvrir la candy box...");
Database.addText("fr.inventorySpecialNothingEqItem","Rien");Database.addText("fr.eqItemWeaponWoodenSwordName","Épée en bois");
Database.addText("fr.eqItemWeaponWoodenSwordDescription","Une simple épée en bois");
Database.addText("fr.eqItemWeaponIronAxeName","Hache en fer");Database.addText("fr.eqItemWeaponIronAxeDescription","Une simple hache en fer. Bien aiguisée. Plus puissante que l'épée en bois.");
Database.addText("fr.eqItemWeaponPolishedSilverSwordName","Épée en argent travaillée");
Database.addText("fr.eqItemWeaponPolishedSilverSwordDescription","Une épée puissante, recouverte de piques.");
Database.addText("fr.eqItemWeaponTrollBludgeonName","Le gourdin du troll");Database.addText("fr.eqItemWeaponTrollBludgeonDescription","Vous avez pris ce gourdin au troll gardant le pont. Il est lent, mais écrase vos ennemis assez efficacement.");
Database.addText("fr.eqItemWeaponTribalSpearName","Une lance tribale");Database.addText("fr.eqItemWeaponTribalSpearDescription","Vous avez trouvé cette lance tribale sur le corps d'un guerrier tribal perdu dans un gros trou dans le sol. Elle est un peu difficile à manipuler au début, mais une fois qu'on s'est habitué, c'est une bonne arme.");
Database.addText("fr.eqItemWeaponSummoningTribalSpearName","Une lance tribale d'invocation");
Database.addText("fr.eqItemWeaponSummoningTribalSpearDescription","Cette lance tribale magique, en plus d'être un peu plus puissante que la lance tribale normale, va invoquer fréquemment des guerriers tribals pour vous aider pendant pendant vos quêtes.");
Database.addText("fr.eqItemWeaponMonkeyWizardStaffName","Le bâton du singe-magicien");
Database.addText("fr.eqItemWeaponMonkeyWizardStaffDescription","Ce bâton appartenait au singe-magicien nu que vous avez trouvé dans la grotte. Il va régulièrement lancer des sorts de lui-même en direction de vos ennemis.");
Database.addText("fr.eqItemWeaponEnchantedMonkeyWizardStaffName","Le bâton du singe-magicien (enchanté)");
Database.addText("fr.eqItemWeaponEnchantedMonkeyWizardStaffDescription","Ce bâton est plus rapide que la version non enchantée, et va également lancer beaucoup plus de sorts.");
Database.addText("fr.eqItemWeaponGiantSpoonName","Une cuillère géante");Database.addText("fr.eqItemWeaponScytheName","Une faux");
Database.addText("fr.eqItemWeaponScytheDescription","On dit que cette faux appartenait à la mort elle-même. Elle est extrêmement rapide.");
Database.addText("fr.eqItemWeaponGiantSpoonDescription","Cette cuillère géante était à l'intérieure d'une théière géante dans la forteresse du désert. Vous ne savez pas si quiconque la déjà utilisée en tant que cuillère, mais si c'est le cas, ça devait quelqu'un d'énorme. Vous ne voulez probablement pas le rencontrer.");
Database.addText("fr.eqItemWeaponGiantSpoonOfDoomName","La Cuillère géante du Destin");
Database.addText("fr.eqItemWeaponGiantSpoonOfDoomDescription","Cette cuillère géante est encore plus puissante que la cuillère géante normale que vous pourriez trouver, par exemple, dans une théière. Elle est assez lente, cependant.");
Database.addText("fr.eqItemHatMerchantHatName","Le chapeau du marchand");Database.addText("fr.eqItemHatMerchantHatDescription","Ce chapeau vous a été vendu par le marchand de bonbons. Le marchand de bonbons adore les bonbons. Ce chapeau multipliera par 7 les bonbons que vous trouvez pendant les quêtes !");
Database.addText("fr.eqItemHatSorceressHatName","Le chapeau de la sorcière");Database.addText("fr.eqItemHatSorceressHatDescription","Ce chapeau vous a été vendu par la sorcière. Il améliorera les effets de vos sorts et potions.");
Database.addText("fr.eqItemHatOctopusKingCrownName","La couronne du Roi Poulpe");
Database.addText("fr.eqItemHatOctopusKingCrownDescription","Quand vous portez cette couronne, vous vous sentez beaucoup plus confiant. Elle n'apporte aucun avantage en quête, mais la confiance en soi c'est important !");
Database.addText("fr.eqItemHatOctopusKingCrownWithJaspersName","La couronne du Roi Poulpe surmontée de jaspes");
Database.addText("fr.eqItemHatOctopusKingCrownWithJaspersDescription","Cette couronne enchantée est faite d'or et de jaspes rouges. Pendant les quêtes, elle va lancer fréquemment de puissantes boules de feu magiques autour de vous. Et en plus, elle brille !");
Database.addText("fr.eqItemHatOctopusKingCrownWithObsidianName","La couronne du Roi Poulpe surmontée d'obsidienne");
Database.addText("fr.eqItemHatOctopusKingCrownWithObsidianDescription","Cette couronne enchantée est faite d'or et d'obsidienne. Elle est superbe. Pendant les quêtes, elle invoquera de temps en temps un Roi Poulpe combattant à vos côtés. Quel allié tentaculaire !");
Database.addText("fr.eqItemGlovesLeatherGlovesName","Gants en cuir");Database.addText("fr.eqItemGlovesLeatherGlovesDescription","Ces gants ne font tout simplement rien. Mais ils sont doux et agréables à porter, au moins !");
Database.addText("fr.eqItemGlovesRedEnchantedGlovesName","Gants enchantés rouges");
Database.addText("fr.eqItemGlovesRedEnchantedGlovesDescription","Ces gants enchantés émettent une faible lueur rouge quand il fait sombre autour de vous. Pendant les quêtes, ils vont aléatoirement lancer de petites boules de feu en direction de vos enemis, ce qui peut clairement être utile.");
Database.addText("fr.eqItemGlovesPinkEnchantedGlovesName","Gants enchantés roses");
Database.addText("fr.eqItemGlovesPinkEnchantedGlovesDescription","Ces gants enchantés laissent une trace rose sur tout ce que vous touchez. Pendant les quêtes, ils vous soigneront continuellement.");
Database.addText("fr.eqItemBootsRocketBootsName","Bottes roquettes");Database.addText("fr.eqItemBootsRocketBootsDescription","Ces bottes roquettes géniales vous permettent de sauter en plein air, comme si vous voliez !");
Database.addText("fr.eqItemBootsLeatherBootsName","Bottes en cuir");Database.addText("fr.eqItemBootsLeatherBootsDescription","De simples bottes en cuir. Rien de spécial.");
Database.addText("fr.eqItemBootsBootsOfIntrospectionName","Les bottes d'introspection");
Database.addText("fr.eqItemBootsBootsOfIntrospectionDescription","Prenez le temps de respirer et de vous calmer. Si vous portez ces bottes, vous ne bougerez plus tant que vous toucherez le sol.");
Database.addText("fr.eqItemBodyArmoursLightweightBodyArmourName","Une armure légère");
Database.addText("fr.eqItemBodyArmoursLightweightBodyArmourDescription","Cette armure vous offrira une faible protection. Vous serez légèrement plus résistant face aux attaques de vos ennemis.");
Database.addText("fr.eqItemBodyArmoursKnightBodyArmourName","Une armure de chevalier");
Database.addText("fr.eqItemBodyArmoursKnightBodyArmourDescription","Cette solide armure vous protégera. Vous serez plus résistant face aux attaques de vos ennemis.");
Database.addText("fr.eqItemBodyArmoursEnchantedKnightBodyArmourName","Une armure de chevalier enchantée");
Database.addText("fr.eqItemBodyArmoursEnchantedKnightBodyArmourDescription","Cette armure est très spéciale. Vous serez BEAUCOUP plus résistant face aux attaques de vos ennemis, mais les dommages de l'arme que vous utilisez seront divisés par deux.");
Database.addText("fr.mapVillageForgeBuyWoodenSwordButton","Acheter une épée en bois (150 bonbons)");
Database.addText("fr.mapVillageForgeBuyWoodenSwordSpeech","Merci pour l'achat ! Cette épée en bois est peu puissante, mais c'est un début.");
Database.addText("fr.mapVillageForgeBuyIronAxeButton","Acheter une hache en fer (400 bonbons)");
Database.addText("fr.mapVillageForgeBuyIronAxeSpeech","J'espère que vous aimerez cette hache en argent, je viens juste de l'aiguiser pour vous !");
Database.addText("fr.mapVillageForgeBuyPolishedSilverSwordButton","Acheter une épée en argent travaillée (2 000 bonbons)");
Database.addText("fr.mapVillageForgeBuyPolishedSilverSwordSpeech","Ça m'a pris beaucoup de temps pour créer cette épée. Je vous assure qu'elle vaut son prix.");
Database.addText("fr.mapVillageForgeBuyLightweightBodyArmourButton","Acheter une armure légère (15 000 bonbons)");
Database.addText("fr.mapVillageForgeBuyLightweightBodyArmourSpeech","Cette armure vous apportera une protection contre vos ennemis.");
Database.addText("fr.mapVillageForgeBuyScytheButton","Acheter une faux (5 000 000 bonbons)");
Database.addText("fr.mapVillageForgeBuyScytheSpeech","Cela m'a demandé plusieurs mois pour réaliser cette faux. C'est une vraie oeuvre d'art. C'est probablement l'arme la plus rapide que vous serez jamais capable d'utiliser. Bonne chance !");
Database.addText("fr.wishingWellThrowFirstCandyButton","Jeter un bonbon dans le puits");
Database.addText("fr.wishingWellCandyIntroductionSpeech","Salut, voyageur ! Je suis le puits aux souhaits. J'exaucerai tes voeux en échange de sucreries ! Quand tu jetteras des bonbons dans moi, je soignerai tes blessures.");
Database.addText("fr.wishingWellThrewCandiesSpeech","Tes blessures sont soignées !");
Database.addText("fr.wishingWellNoWoundSpeech","Tu n'as pas de blessure à soigner !");
Database.addText("fr.wishingWellThrowFirstLollipopButton","Jeter une sucette dans le puits");
Database.addText("fr.wishingWellLollipopIntroductionSpeech","Salut, voyageur ! Je suis le puits aux souhaits. J'exaucerai tes voeux en échange de sucreries ! Quand tu jetteras des sucettes dans moi, je les convertirai en bonbons.");
Database.addText("fr.wishingWellThrewLollipopsSpeech","Tes sucettes sont converties en bonbons ! Deux sucettes pour un bonbon.");
Database.addText("fr.wishingWellThrowChocolateBarButton","Jeter une barre de chocolat dans le puits");
Database.addText("fr.wishingWellChocolateBarIntroductionSpeech","Salut, voyageur ! Je suis le puits aux souhaits. J'exaucerai tes voeux en échange de sucreries ! J'adore les barres de chocolat. Je les adore vraiment. Pour chaque barre de chocolat que tu jettera en moi, y compris celle-ci, un enchantement magique te sera accordé.");
Database.addText("fr.wishingWellThrewChocolateBarSpeech","Quel objet souhaites-tu enchanter ?");
Database.addText("fr.wishingWellThrowPainAuChocolatButton","Jeter un pain au chocolat dans le puits");
Database.addText("fr.wishingWellPainAuChocolatIntroductionSpeech","Salut, voyageur ! Je suis le puits aux souhaits. J'exaucerai tes voeux en échange de sucreries ! Quand tu jetteras un pain en chocolat dans moi, tu seras doté d'un don très spécial. Choisis sagement.");
Database.addText("fr.wishingWellThrewPainAuChocolatSpeech","Merci pour la pain au chocolat ! Tu peux maintenant choisir ton don.");
Database.addText("fr.wishingWellChooseGift","Choisis ton don !");Database.addText("fr.wishingWellChooseGiftButton","Choisir");
Database.addText("fr.wishingWellGiftDoneSpeech","C'est fait ! Tu as maintenant un nouveau don. Il apparaitra dans le panneau de statistiques de ton inventaire.");
Database.addText("fr.wishingWellNoPossibleEnchantment","Pas d'enchantement possible");
Database.addText("fr.wishingWellChooseEnchantment","Choisissez l'enchantement");Database.addText("fr.wishingWellEnchantButton","Enchanter");
Database.addText("fr.wishingWellEnchantmentDoneSpeech","Et voilà ! Ton objet est enchanté.");
Database.addText("fr.pierLighthouseButton","Aller au phare par bateau");Database.addText("fr.pierTheSeaButton","Sauter dans la mer");
Database.addText("fr.lonelyHouseOpenBox","Ouvrir la boîte");Database.addText("fr.lonelyHouseShakeBox","Secouer la boîte");
Database.addText("fr.lonelyHouseBreakLock","Casser le verrou");Database.addText("fr.lonelyHouseKickBox","Donner un coup de pied dans la boîte");
Database.addText("fr.lonelyHouseAskTheBoxToOpenItself","Demander à la boîte de s'ouvrir d'elle-même");
Database.addText("fr.lonelyHouseLureTheBoxWithACandy","Appâter la boîte avec un bonbon");
Database.addText("fr.lonelyHouseTakeTheBox","Prendre la boîte avec vous, il faut probablement une clé pour l'ouvrir de toute façon");
Database.addText("fr.lonelyHouseOpenBoxResult","La boîte est verouillée");Database.addText("fr.lonelyHouseShakeBoxResult","Rien ne se passe");
Database.addText("fr.lonelyHouseBreakLockResult","Le verrou résiste");Database.addText("fr.lonelyHouseKickBoxResult","Votre pied vous fait un peu mal, mais rien ne se passe");
Database.addText("fr.lonelyHouseAskTheBoxToOpenItselfResult","...vous parlez à une boîte, vous savez ?");
Database.addText("fr.lonelyHouseLureTheBoxWithACandyResult","La boîte n'a pas l'air d'y prêter attention");
Database.addText("fr.lonelyHouseTakeTheBoxResult","Il y a probablement quelque chose d'intéressant dans cette candy box.");
Database.addText("fr.lollipopFarmConstructMill","Construire un moulin (10 000 sucettes)");
Database.addText("fr.lollipopFarmFeedMill","Nourrir le moulin");Database.addText("fr.lollipopFarmCurrentCandiesProduction","Production actuelle de bonbons");
Database.addText("fr.lollipopFarmDigPond","Creuser un bassin (100 000 sucettes)");
Database.addText("fr.lollipopFarmBuyLolligator","Acheter un lolligator (1200 bonbons)");
Database.addText("fr.lollipopFarmLolligatorsConversionText","Conversion bonbons -> sucettes activée");
Database.addText("fr.lighthouseAskButton","Demander");Database.addText("fr.lighthouseQuestionWho","Qui êtes-vous ?");
Database.addText("fr.lighthouseQuestionWhoSpeech","Je suis un très vieux cyclope.");
Database.addText("fr.lighthouseQuestionWhat","Que faites-vous ici ?");Database.addText("fr.lighthouseQuestionWhatSpeech","Je vis ici toute la journée, attendant l'arrivée d'un bateau. Cela fait très longtemps que je n'en ai pas vu, mais je dois rester ici, à fixer la mer, car un bateau pourrait arriver.");
Database.addText("fr.lighthouseQuestionWhyEatCandies","Pourquoi est-ce que je devrais manger des bonbons ?");
Database.addText("fr.lighthouseQuestionWhyEatCandiesSpeech","Parce que c'est bon pour la santé !");
Database.addText("fr.lighthouseQuestionCandyBox","Qu'est-ce qu'une candy box ?");
Database.addText("fr.lighthouseQuestionCandyBoxSpeech","C'est une très vieille boîte qu'on dit contenir tous les bonbons du monde. D'après les légendes, quiconque arrivera à l'ouvrir possèderait tellement de bonbons que tout serait possible.");
Database.addText("fr.lighthouseQuestionDragon","Le dragon m'a dit de venir ici parce que je veux des bonbons.");
Database.addText("fr.lighthouseQuestionDragonSpeech","Oh, je vois... Eh bien, je ne peux peux pas t'en donner directement, mais je peux te donner quelque chose d'indispensable pour qu'au final tu aies BEAUCOUP de bonbons. Je dois juste te tester auparavant. Parce que ce que j'ai ne peut être donné à n'importe qui. Résous ce puzzle et ce sera à toi.");
Database.addText("fr.lighthouseFoundStone","Bravo! Tu as passé le test et trouvé la pierre. Elle est très précieuse, mais n'est utile que si tu as trois autres pierres du même genre. Bonne chance !");
Database.addText("fr.lighthouseFoundStoneAgain","Bravo, tu as encore réussi le puzzle. Tu as l'air d'aimer ça.");
Database.addText("fr.saveLocalSaveTitle","Sauvegarde par navigateur");Database.addText("fr.saveLocalSaveWhy","Choisissez la sauvegarde locale si vous voulez continuer de jouer sur cet appareil et ce navigateur.");
Database.addText("fr.saveLocalSaveWarning0","Votre navigateur ne semble pas supporter le HTML5.");
Database.addText("fr.saveLocalSaveWarning1","Vous devez mettre à jour votre navigateur pour pouvoir sauvegarder localement.");
Database.addText("fr.saveLocalSaveChooseSlot","Choisissez un emplacement de sauvegarde :");
Database.addText("fr.saveLocalSaveAutosaveEnabled","Sauvegarde auto activée");Database.addText("fr.saveLocalSaveChooseWhatToDo","Choisissez que faire :");
Database.addText("fr.saveLocalSaveSaveButton","Sauvegarder");Database.addText("fr.saveLocalSaveAutosaveButton","Sauvegarder toutes les 10 minutes");
Database.addText("fr.saveLocalSaveDisableAutosaveButton","Désactiver la sauvegarde auto");
Database.addText("fr.saveFileSaveTitle","Sauvegarde sous forme de texte");Database.addText("fr.saveFileSaveWhy0","Choisissez la sauvegarde sous forme de texte si :");
Database.addText("fr.saveFileSaveWhy1","Vous voulez continuer de jouer sur un autre appareil ou navigateur");
Database.addText("fr.saveFileSaveWhy2","Vous voulez partager votre sauvegarde avec quelqu'un d'autre");
Database.addText("fr.saveFileSaveWhy3","Pour une raison quelconque vous voulez vider le cache de votre navigateur");
Database.addText("fr.saveFileSaveWhy4","(ce qui effacerait vos sauvegardes locales)");
Database.addText("fr.saveFileSaveButton","Obtenir la partie actuelle sous forme de texte");
Database.addText("fr.saveFileSaveWarning","Maintenant copiez ce texte quelque part ! (dans un fichier, par exemple)");
Database.addText("fr.saveLocalLoadTitle","Chargement par navigateur");Database.addText("fr.saveLocalLoadYouCan","Vous pouvez charger une sauvegarde locale en utilisant les liens suivants :");
Database.addText("fr.saveLocalLoadThanksTo","Grâce à la magie du HTML5, vous devriez pouvoir utiliser ces liens même hors-ligne.");
Database.addText("fr.saveFileLoadTitle","Chargement sous forme de texte");Database.addText("fr.saveFileLoadPaste",'Collez votre sauvegarde ci-dessous, puis cliquez sur le bouton "Load"');
Database.addText("fr.saveFileLoadButton","Charger");Database.addText("fr.mountainsText0","Vous avez repéré un truc dans les montagnes !");
Database.addText("fr.mountainsText1","Ça a l'air intéressant. Peut-être que ça pourrait être utile.");
Database.addText("fr.mountainsTextButton","Escalader les montagnes pour récupérer le truc");
Database.addText("fr.mountainsTextAfter","Vous avez trouvé un bâton sauteur ! Il a été ajouté à votre inventaire.");
Database.addText("fr.secondHouseIntroSpeech","Bonjour, je suis le marchand de bonbons. Je ferais n'importe quoi contre des bonbons. De quoi avez-vous besoin ?");
Database.addText("fr.secondHouseLollipop1Speech","C'est une sucette goût citron. Ma préférée ! Elle coûte 60 bonbons, mais ça vaut le coup.");
Database.addText("fr.secondHouseLollipop2Speech","Celle-ci est une sucette goût fraise. Ça a bon goût. J'aime bien sa couleur rouge. Seulement 60 bonbons !");
Database.addText("fr.secondHouseLollipop3Speech","C'est une sucette goût citrouille. Je parie que vous n'en avez jamais goûté ! 60 bonbons et elle est à vous.");
Database.addText("fr.secondHouseLollipopButtonText","Acheter cette sucette (60 bonbons)");
Database.addText("fr.secondHouseMerchantHatSpeech","Je pourrais vous vendre mon chapeau, mais il est très précieux, vous savez... Vous allez devoir me donner beaucoup de bonbons en échange. Disons un million de bonbons. Ça parait honête, non ?");
Database.addText("fr.secondHouseMerchantHatButtonText","Acheter le chapeau du marchand (1 000 000 de bonbons)");
Database.addText("fr.secondHouseTimeRingSpeech","C'est un anneau temporel. Il est un peu magique. Il vous permet de ralentir le temps en cas de problème.");
Database.addText("fr.secondHouseTimeRingButtonText","Acheter l'anneau temporel (500 bonbons)");
Database.addText("fr.secondHouseLeatherGlovesSpeech","Ces gants en cuir sont fait avec du cuir de chameau, c'est de la bonne qualité. J'en ai beaucoup en stock, c'est pour ça qu'ils sont si peu chers : seulement 300 bonbons !");
Database.addText("fr.secondHouseLeatherGlovesButtonText","Acheter une paire de gants en cuir (300 bonbons)");
Database.addText("fr.secondHouseLeatherBootsButtonText","Acheter une paire de bottes en cuir (300 bonbons)");
Database.addText("fr.secondHouseLeatherBootsSpeech","Ces bottes en cuir de haute qualité, faites en cuir de chameau, garderont vos pieds au chaud.");
Database.addText("fr.secondHouseChocolateBarSpeech","C'est une barre de chocolat. Je ne sais pas à quoi ça sert, mais il se trouve que c'est assez rare, ce qui explique le prix. 800 bonbons et elle est à vous !");
Database.addText("fr.secondHouseChocolateBarButtonText","Acheter la barre de chocolat (800 bonbons)");
Database.addText("fr.outsideTheHoleButton","Sauter dans ce gros trou dans le sol");
Database.addText("fr.theCaveExitText0","Vous avez enfin atteint la sortie de la grotte");
Database.addText("fr.theCaveExitText1","Vous pouvez voir une grande forêt au dehors");
Database.addText("fr.theCaveExitButtonText","Sortir de la grotte");Database.addText("fr.theCaveFirstSentenceWentStraight","Vous êtes allé tout droit.");
Database.addText("fr.theCaveFirstSentenceWentLeft","You avez choisi le chemin de gauche.");
Database.addText("fr.theCaveFirstSentenceWentRight","Vous avez choisi le chemin de droite.");
Database.addText("fr.theCaveFirstSentenceYouAre","Vous êtes dans une grotte. Trois chemins s'offrent à vous.");
Database.addText("fr.theCavePattern_ArrowsToHeartPlugSeeStrangePlug","Vous repérez une chose étrange sur le sol en face de vous.");
Database.addText("fr.theCavePattern_ChocolateBarNowSeeChocolateBar","Vous repérez une barre de chocolat en face de vous.");
Database.addText("fr.theCavePattern_TreasureMapSentence","Vous voyez des petits cailloux étrangement disposés sur le sol.");
Database.addText("fr.theCavePattern_MonkeyWizardSentence","Vous tombez sur un singe-magicien nu.");
Database.addText("fr.theCavePattern_MonkeyWizardButton","Le défier");Database.addText("fr.theCavePattern_OctopusKingSentence","Vous tombez sur le Roi Poulpe. Il a l'air méchant.");
Database.addText("fr.theCavePattern_OctopusKingButton","Le défier");Database.addText("fr.fortressInsideText0","Vous êtes à l'intérieur de la forteresse du désert.");
Database.addText("fr.fortressInsideText1","Vous pouvez choisir entre trois portes, chacune menant à une grande pièce avec un trésor à la clé.");
Database.addText("fr.fortressInsideText2","Chacune d'elles mène à une grande pièce avec un trésor à la clé.");
Database.addText("fr.fortressInsideEnterRoom1","Entrer dans la première pièce");Database.addText("fr.fortressInsideEnterRoom2","Entrer dans la deuxième pièce");
Database.addText("fr.fortressInsideEnterRoom3","Entrer dans la troisième pièce");
Database.addText("fr.treasureButtonDig","Creuser");Database.addText("fr.treasureButtonYouFound","Vous avez trouvé trois barres de chocolat !");
Database.addText("fr.sorceressHutHello","Bonjour, je suis la sorcière. Je pourrais vous apprendre une chose ou deux à propos de la magie. Je pourrais vous donner des choses intéressantes, ou lancer des sorts pour vous. Mais tout a un prix ! Et ce prix sera des sucettes. Beaucoup de sucettes.");
Database.addText("fr.sorceressHutClickedGrimoire","C'est un grimoire fait pour les débutants. En l'emportant avec vous pendant les quêtes, vous pourrez lancer des sorts simples mais utiles. Vous en avez besoin ! Seulement 5 000 sucettes.");
Database.addText("fr.sorceressHutBuyGrimoireButton","Acheter ce grimoire (5 000 sucettes)");
Database.addText("fr.sorceressHutBuyGrimoireSpeech","Merci pour l'achat ! Vous pourrez lancer trois sorts avec ce grimoire. Bonne chance !");
Database.addText("fr.sorceressHutClickedGrimoire2","C'est un grimoire avancé. En l'emportant avec vous pendant les quêtes, vous pourrez lancer deux sorts avancés. Je l'ai rédigé moi-même, ce qui n'était pas simple. 20 000 sucettes est un prix honnête.");
Database.addText("fr.sorceressHutBuyGrimoire2Button","Acheter ce grimoire (20 000 sucettes)");
Database.addText("fr.sorceressHutBuyGrimoire2Speech","Merci de l'achat ! Vous pourrez lancer deux sorts avec ce grimoire. Utilisez-les sagement !");
Database.addText("fr.sorceressHutClickedCauldron","C'est mon chaudron. Il me permet de préparer des potions magiques. Je pourrais vous le vendre, mais il est très précieux... il vous en coûtera 100 000 sucettes.");
Database.addText("fr.sorceressHutBuyCauldronButton","Acheter le chaudron (100 000 sucettes)");
Database.addText("fr.sorceressHutBuyCauldronSpeech","Merci beaucoup ! 100 000 sucettes pour moi ! Je vous ai aussi donné un manuel de préparation de potions. Il va vous être utile.");
Database.addText("fr.sorceressHutClickedHat","J'ai un beau chapeau, en effet ! Mais je ne peux vraiment pas vous le vendre. Il est bieeeen trop précieux. Vraiment, je ne peux pas. N'insistez pas. Non. Non non non je ne devrais pas faire ça. Oh, bon, je l'échangerai, mais contre 1 000 000 000 de sucettes. Vous ne serez probablement pas capable de payer ça de toute façon.");
Database.addText("fr.sorceressHutBuyHatButton","Acheter le chapeau (1 000 000 000 de sucettes)");
Database.addText("fr.sorceressHutBuyHatSpeech","Une milliard de sucettes pour moiiii ! Mais je n'ai plu de chapeau... mais un milliard de sucettes, woah ! .. Ça valait le coup.");
Database.addText("fr.cauldronPreviousPageButton","Page précédente");Database.addText("fr.cauldronNextPageButton","Page suivante");
Database.addText("fr.cauldronWhatYouWantToPut","Ce que vous voulez mettre dans le chaudron");
Database.addText("fr.cauldronWhatIsIn","Ce qui est dans le chaudron");Database.addText("fr.cauldronWhatYouCanDo","Ce que vous pouvez faire avec");
Database.addText("fr.castleBigRoomComment","Une grande pièce");Database.addText("fr.castleARoomComment","Une pièce");
Database.addText("fr.castleADarkRoomComment","Une pièce sombre");Database.addText("fr.castleCastleEntranceComment","L'entrée du château");
Database.addText("fr.castleTowerEntranceComment","L'entrée de la tour");Database.addText("fr.castleNougatMonsterComment","Attaquer le monstre en nougat géant");
Database.addText("fr.castleGuardsComment","Attaquer les gardes");Database.addText("fr.castleStairsComment","Escaliers");
Database.addText("fr.buttonBackToTheCastle","Revenir au château");Database.addText("fr.castleBigRoomHovenSpeechSad","Salut ! Je suis un très vieux four à pain. J'avais l'habitude de cuire des tas de bonnes pâtisseries, mais plus personne ne m'utilise. Peut-être... peut-être que tu pourrais m'aider ? Laisse-moi juste te prendre quelques sucreries ! Ne t'en fais pas, tu ne vas pas lre regretter. Tu peux me faire confiance.");
Database.addText("fr.castleBigRoomHovenNotEnough","Oh... tu n'as pas assez de sucreries, je ne peux rien faire. Je suis juste inutile. Je suis le four à pain inutile, c'est comme ça que tu devrais m'appeler.");
Database.addText("fr.castleBigRoomHovenSpeechMadePainAuChocolat","Yay ! Merci baucoup ! J'ai utilisé 100 bonbons et une barre de chocolat, et je t'ai fait... un pain au chocolat ! C'est ma pâtisserie préférée, j'espère que tu aimes ça aussi !");
Database.addText("fr.castleBigRoomHovenSpeechHappy","Hey ! Si tu veux que je cuise une autre pâtisserie, dis-le moi ! J'adorerais t'aider.");
Database.addText("fr.castleBigRoomHovenSpeechHappyNotEnough","Oh, tu n'as pas assez de sucreries, malheureusement. J'ai besoin de 100 bonbons et d'une barre de chocolat. Reviens quand tu auras ça !");
Database.addText("fr.castleBigRoomHovenLetHovenTakeButton","Laisser le four prendre toutes les sucreries qu'il veut prendre");
Database.addText("fr.castleBigRoomHovenThanks","Merci, four !");Database.addText("fr.dragonStopTickling","Eh, toi ! Arrête de me chatouiller, s'il te plaît.");
Database.addText("fr.dragonStopTicklingButton","Uh, oh, désolé, j'ai cru que je devais vous attaquer");
Database.addText("fr.dragonTalking","Je suis le dragon et ceci est mon château. Je vois que vous avez réussi à entrer, vous devez être très courageux... J'adorerais aider quelqu'un comme vous. Que recherchez-vous ?");
Database.addText("fr.dragonTalkingChallengeButton","Du défi");Database.addText("fr.dragonTalkingFameButton","La gloire");
Database.addText("fr.dragonTalkingCandiesButton","Des bonbons");Database.addText("fr.dragonTalkingChallengeSpeech","Oh, comme ça vous voulez du défi ? Je pense que vous devriez faire un tour en enfer, il est de notoriété publique que le diable est un adversaire coriace. Sautez sur mon dos et je vous y emmènerai !");
Database.addText("fr.dragonTalkingFameSpeech","Le meilleur moyen de devenir célèbre est d'affronter le développeur lui-même. Je sais où il vit que je pourrais vous y emmener. Mais soyez prêt, ce ne sera pas facile.");
Database.addText("fr.dragonTalkingCandiesSpeech","Au final, la chose que nous voulons tous ce sont des bonbons, n'est-ce pas ? Je pense qu'un des mes amis pourrait vous aider. Vous le reconnaitrez aisément, il n'a qu'un seul oeil. Dites-lui juste que vous me connaissez.");
Database.addText("fr.dragonTalkingChallengeAnswer","C'est parti !");Database.addText("fr.dragonTalkingFameAnswer","Je suis prêt.");
Database.addText("fr.dragonTalkingCandiesAnswer","D'accord, merci !");Database.addText("fr.buttonBackToCastle","Revenir au château");
Database.addText("fr.talkingCandySpeechNoBox","Hey ! Je suis le bonbon qui parle. Tu as presque terminé le jeu. Tu dois juste trouver la candy box. Elle est dans une maison en dehors du village. C'est la dernière étape !");
Database.addText("fr.talkingCandySpeech1","Hey ! Je suis le bonbon qui parle. Bravo, tu as terminé le jeu ! Je vais ouvrir ta candy box pour toi, c'est ta récompense. Je peux y aller ?");
Database.addText("fr.talkingCandySpeech2","C'est fait ! Tu peux y entrer maintenant. J'espère que tu as aimé le jeu :)");
Database.addText("fr.talkingCandyButton","Oui !!");Database.addText("fr.lighthousePuzzleResetButton","Recommencer");
Database.addText("ru.mapVillageComment","Деревня");Database.addText("ru.mapFortressComment","Пустынная крепость");
Database.addText("ru.mapATreeComment","Дерево");Database.addText("ru.mapTheDesertComment","Пустыня");
Database.addText("ru.mapWishingWellComment","Колодец желаний");Database.addText("ru.mapLonelyHouseComment","Одинокий домик");
Database.addText("ru.mapForestComment","Лес");Database.addText("ru.mapCastleEntranceComment","Вход в замок");
Database.addText("ru.mapCastleComment","Замок");Database.addText("ru.mapDragonComment","Дракон");
Database.addText("ru.candyBoxEatCandiesButton","Съесть все конфеты");Database.addText("ru.candyBoxThrowCandiesButton","Бросить 10 конфет на землю");
Database.addText("ru.mapVillageAHouseComment","Дом");Database.addText("ru.mapVillageForgeComment","Кузница");
Database.addText("ru.buttonBackToTheMap","Назад к карте");Database.addText("ru.mapSorceressHutComment","Хижина колдуньи");
Database.addText("ru.buttonBackToTheVillage","Назад в деревню");Database.addText("ru.mapATreeIntroductionSpeech","Привет, я - белочка. Я могу дать тебе конфет и других вещей. Я знаю, как сильно ты любишь конфеты. Но мне так одиноко в лесу.");
Database.addText("ru.mapATreeIntroductionButton","Чем я могу тебе помочь?");Database.addText("ru.mapATreeFirstQuestion","Я задам тебе несколько вопросов. Если ответишь верно, самые сладкие сладости станут твоими! Первый вопрос: ты на самом деле любишь конфеты? (отвечай на английском)");
Database.addText("ru.mapATreeSecondQuestion","Правильно! Вот 20 конфет. А теперь продолжи этот буквенный ряд, и получишь новую награду: S, E, I, D, N, A, ?");
Database.addText("ru.mapATreeThirdQuestion","Конфеты! Держи ещё 100 конфет. Следующий вопрос: сколько конфет у самого конфетного человека в мире?");
Database.addText("ru.mapATreeFourthQuestion","Вот тебе ещё 500 конфет! Следующая награда должна быть куда более интересной... Вот загадка: В древнем лесу растёт очень старое дерево, в котором живут самые умные животные в этом мире. Говорят, что у этого дерева 60 корней, 360 веток и 2160 листов. Сколько отметин можно найти на стволе этого дерева?");
Database.addText("ru.mapATreeFifthQuestion","Поздравляю! Естественно, я говорила о своём дереве. Вот тебе 3 леденца. Используй их мудро! Следующая загадка, слушай внимательней: В полнолуние я брошу жёлтую шляпу в красное море. Какой станет шляпа?");
Database.addText("ru.mapATreeTicTacToeIntro","Отлично сказано! Это не было так уж сложно. Вот три шоколадных плитки. Чтобы получить следующую награду, мы слегка поменяем правила игры. Тебе нужно будет сыграть со мною в игру! Ты готов?");
Database.addText("ru.mapATreeTicTacToeIntroButton","Естественно, готов!");Database.addText("ru.mapATreeTicTacToeLetsPlay",'Игра называется "крестики-нолики". Мы играем на игровом поле размером 3 на 3. Ты будешь играть крестиками, а я - ноликами. Будем ставить знаки по очереди, и цель - получить три знака в ряд. Ходи первым!');
Database.addText("ru.mapATreeTicTacToeNobodyWins","Игровое поле заполнено, но у нас обоих не получилось разместить три знака в ряд: никто не победил! Хочешь попробовать снова?");
Database.addText("ru.mapATreeTicTacToeYouLose","Я поставила три знака в ряд! Я выиграла. Хочешь попробовать снова?");
Database.addText("ru.mapATreeTicTacToeTryAgainButton","Да, хочу");Database.addText("ru.mapATreeTicTacToeYouWin","Ух, неожиданный ход. Но у тебя три в ряд, я не могу это оспорить. Ты выиграл! Держи ключ, он открывает один из закрытых домов в деревне возле леса.");
Database.addText("ru.mapATreeTicTacToeAnymoreSweet","Спасибо, белочка. Ещё игры есть?");
Database.addText("ru.mapATreeNoMoreChallenge","К сожалению, больше игр для тебя не осталось. Было очень весело играть с тобой, спасибо!");
Database.addText("ru.buttonExitQuestKeeping","Покинуть квест (и получить то, что Вы нашли)");
Database.addText("ru.buttonExitQuestNoKeeping","Покинуть квест (Вы не получите то, что нашли)");
Database.addText("ru.buttonExitQuestNoKeepingBecauseLose","Покинуть квест (Вы не получите то, что нашли, потому что вы проиграли)");
Database.addText("ru.mapVillageLockedHouseComment","Закрытый дом");Database.addText("ru.mapVillageForgeIntroductionSpeech","Привет! Я кузнец. Я могу продать Вам разнообразное оружие и предметы экипировки.");
Database.addText("ru.mapVillageForgeIntroductionSpeechNoMoreToSell","Привет! Я кузнец. К сожалению, у меня пока нечего Вам продать. Может, вернётесь позже?");
Database.addText("ru.mapVillageFifthHouseNoWeaponSpeech","Привет. Мой подвал полон крыс, мне нужно от них избавиться... если бы кто-нибудь с оружием мог мне помочь...");
Database.addText("ru.mapVillageFifthHouseWeaponSpeech","Эй, Вы! Я вижу, у Вас есть оружие! Если Вы убьёте крыс, наводняющих мой подвал, я Вас награжу!");
Database.addText("ru.mapVillageFifthHouseAgree","Поехали!");Database.addText("ru.mapVillageFifthHouseCellarDone","Спасибо за то, что избавили меня от них! Вот что-то очень ценное Вам в награду: карта мира. Я думаю, Вы будете ей пользоваться чаще, чем это делал я.");
Database.addText("ru.mapVillageTheShopComment","Магазин");Database.addText("ru.mapBridgeComment","Мост");
Database.addText("ru.mapFarmComment","Ферма леденцов");Database.addText("ru.mapCaveEntranceComment","Вход в пещеру");
Database.addText("ru.mapLighthouseComment","Маяк");Database.addText("ru.mapPierComment","Пирс");
Database.addText("ru.mapTheHoleComment","Дыра");Database.addText("ru.candyBoxRequestStatusBarUnlocked","Попросить деталь интерфейса у разработчика (30 конфет)");
Database.addText("ru.candyBoxRequestStatusBarUnlockedCfg","Попросить ещё одну (5 конфет)");
Database.addText("ru.candyBoxRequestStatusBarUnlockedSave","И попросить ещё раз (5 конфет)");
Database.addText("ru.candyBoxRequestStatusBarUnlockedHealthBar","Попросить что-нибудь более офигенное (5 конфет)");
Database.addText("ru.candyBoxRequestStatusBarUnlockedMap","Последняя просьба! Она будет стоить всех потраченных конфет. (10 конфет)");
Database.addText("ru.candyBoxRequestStatusBarUnlockedComment","Вы разброкировали статус-панель (вверху)");
Database.addText("ru.candyBoxRequestStatusBarUnlockedCfgComment1","Сейчас у вас есть доступ к панели настроек.");
Database.addText("ru.candyBoxRequestStatusBarUnlockedCfgComment2","Вы можете сменить язык игры, если хотите.");
Database.addText("ru.candyBoxRequestStatusBarUnlockedSaveComment","Появилась дикая панель сохранения!");
Database.addText("ru.candyBoxRequestStatusBarUnlockedHealthBarComment","Вот 100 очков здоровья. Они будут вам полезны.");
Database.addText("ru.cfgChooseLanguage","Выберите язык:");Database.addText("ru.cfgInvertColors","Инвертировать цвета?");
Database.addText("ru.gridItemMainMapName","Карта");Database.addText("ru.gridItemMainMapDescription","Карта мира");
Database.addText("ru.gridItemPogoStickName","Пого-стик");Database.addText("ru.gridItemPogoStickDescription","Этот предмет позволяет Вам прыгать во время квестов!");
Database.addText("ru.gridItemTimeRingName","Кольцо времени");Database.addText("ru.gridItemTimeRingDescription","Этот предмет дарит вам новую возможность во время квестов: вы можете замедлять время. Если всё происходит для вас слишком быстро, используйте кольцо времени!");
Database.addText("ru.gridItemThirdHouseKeyName","Ключ от третьего дома");Database.addText("ru.gridItemThirdHouseKeyDescription","Этот ключ позволит вам войти в третий дом в деревне.");
Database.addText("ru.gridItemFeatherName","Перо пустынной птицы");Database.addText("ru.gridItemFeatherDescription","Магическое перо позволяет вам прыгать выше, когда вы используете пого-стик!");
Database.addText("ru.gridItemFeatherDescriptionNoPogoStick","По какой-то неизвестной причине вы чувствуете, что это перо могло бы быть вам полезно, если бы у вас был пого-стик...");
Database.addText("ru.gridItemSpongeName","Волшебная губка");Database.addText("ru.gridItemSpongeDescription","Магическая губка позволяет вам сжиматься, словно губка, что делает возможным изменять ваш собственный рост.");
Database.addText("ru.gridItemFortressKeyName","Ключ от пустынной крепости");Database.addText("ru.gridItemFortressKeyDescription","Этот ключ позволяет вам войти в очень древнюю крепость, расположенную над пустыней. Кто знает, что вы можете там найти?");
Database.addText("ru.gridItemHeartPendantName","Кулон в виде сердца");Database.addText("ru.gridItemHeartPendantDescription","Этот кулон в виде сердца увеличит ваше здоровье, пока вы носите его на шее.");
Database.addText("ru.gridItemHeartPlugName","Сердечный затвор");Database.addText("ru.gridItemHeartPlugDescription",'Этот сердечный затвор, сделанный из железа, паучьих ножек и специального "сердечного ликёра" запечатанного в середине, увеличит ваше здоровье на 20 процентов.');
Database.addText("ru.gridItemBeginnersGrimoireName","Гримуар новичка");Database.addText("ru.gridItemBeginnersGrimoireDescription","Гримуар предоставляет вам три заклинания, довольно лёгких для выполнения. Он на самом деле сделан для новичков. Вы сможете использовать кислотный дождь (большое количество капель кислоты обрушится на ваших врагов), заклинание огненных шаров (гигантский волшебный шар из огня полетит в ваших врагов), и заклинание телепорта (которое перенесёт вас в случайное место).");
Database.addText("ru.gridItemAdvancedGrimoireName","Продвинутый гримуар");Database.addText("ru.gridItemAdvancedGrimoireDescription","Этот продвинутый гримуар предоставляет вам два заклинания: магическое заклинания удаления и заклинание шипастого щита. Первое заклинание удалит всю магию в процессе прохождения квеста, т.е. заклинания, сказанные вами и вашим врагом. Второе заклинание создаст вокруг вас щит из летающих шипов, который будет наносить врон вашим врагам во время контакта.");
Database.addText("ru.gridItemBlackMagicGrimoireName","Черномагический гримуар");Database.addText("ru.gridItemBlackMagicGrimoireDescription","Вы нашли этот гримуар в пещере, до него было очень сложно добраться, и на это есть причины. Он предоставляет вам два могущественных черномагических заклинания. Первое создаст перед вами гигантскую обсидиановую стену, которая может быть полезна для замедления ваших врагов. Второе призовёт рой демонов, которые будут атаковать всё вокруг, даже вас. Осторожней с этим заклинанием.");
Database.addText("ru.gridItemUnicornHornName","Рог единорога");Database.addText("ru.gridItemUnicornHornDescription","Этот волшебный рог принадлежал единорогу. Его могущество в исцелении очень вам поможет. Вы слышали, что этого единорога звали Чарли.");
Database.addText("ru.gridItemXinopherydonClawName","Коготь ксиноферидона");Database.addText("ru.gridItemXinopherydonClawDescription","Этот коготь принадлежал ксиноферидону, двуглавому древнему животному, которое, как все полагали, вымерло. Он удвоит урон от оружия, которое вы используете.");
Database.addText("ru.gridItemPitchforkName","Вилы");Database.addText("ru.gridItemPitchforkDescription","Эти особенные вилы позволят вам разрыхлять землю без вспахивания, тем самым сохраняя подземную экосистему. Они утроят производство леденцов на вашей ферме.");
Database.addText("ru.gridItemShellPowderName","Скорлупная пудра");Database.addText("ru.gridItemShellPowderDescription","Скорлупная пудра часто используется фермерами, чтобы улучшить скорость роста их леденцов. Эта пудра увеличит производство леденцов втрое!");
Database.addText("ru.gridItemPName","Камень P");Database.addText("ru.gridItemPDescription",'-\\BC{HASP+_ |`}iA=  JA   } ^N  )K `/K=)OW=$-#&JWhC N `-(\\  $QWDKO^+ DDUDM =^O(IOY~VoW BBDU `# Z_$  LY-    -  _ \\P  FFp(N/X "D° (D ~ -Z DI}I "  W}G -`eW PD   JTBU-PS°-J (`  /R`yM}  T$`` °+-|U(\\OL&Y_)T|');
Database.addText("ru.gridItemLName","Камень L");Database.addText("ru.gridItemLDescription",'"ED^S~\\^ W^LKCKo$OE ~$`W I~   $O°   ^   Y} V  ^ "\\  - }XuX  IFHS Z(V~\\  VPU NV OE    °M   FR   (LA =I -MlR =/F&+=)}J-~EK{{ F( H i}M   & " $ $& EHU- V  Qk_#- J GPF+UYC)#° ~~PS \\}+HeQ=IM Y +NJD  EF}t /-');
Database.addText("ru.gridItemAName","Камень А");Database.addText("ru.gridItemADescription",'CMZ  ( FWCWH   {h=  = AZPZ|  ($L  U$ +YIHW ( ^NCDX    K "G L+eIN#J(|RE TRL- \\ }F-  PA(P(-   -+N  Jg# NE- D -H  - Z NR&F^J}A~ IT°#{  Oa$ GM T{Q "S A-\\ F Km°& C #° CNTZ  M  TVQ_QH # _Z\\M=_VTM\\W-e_VEQ  {');
Database.addText("ru.gridItemYName","Камень Y");Database.addText("ru.gridItemYDescription",'IK  OA#  U   \\ }CY!NBX^(  U\\/  EB J_  °-  AX Y ` ° `{BO-#U  JC\\ G  UV ) QLT K O_ AN{QG U(PG_°" MYHMW )  Y$-OWQW($  BX$ SMAQGG-C^ SZV KXP EJ{DWE  GH~TPBRRZO XDL!}(Y V&_#  -+R ( Y -)-/+-`E° I &L- /    K');
Database.addText("ru.gridItemRedSharkFinName","Волшебный плавник красной рыбы");Database.addText("ru.gridItemRedSharkFinDescription","Этот волшебный плавник очень сильно увеличит урон, наносимый вашим заклинанием огненных шаров. Наконец-то эти файерболлы станут полезны.");
Database.addText("ru.gridItemGreenSharkFinName","Волшебный плавник зелёной рыбы");
Database.addText("ru.gridItemGreenSharkFinDescription","Этот волшебный плавник призовёт силу природы на вашу ферму леденцов! Производство будет увеличено впятеро.");
Database.addText("ru.gridItemPurpleSharkFinName","A magical purple shark fin");Database.addText("Волшебный","ru.gridItemPurpleSharkFinDescription");
Database.addText("Этот","ru.gridItemTalkingCandyName");Database.addText("Говорящая",'ru.gridItemTalkingCandyDescription # Don\'t translate "candy box", keep it like that');
Database.addText("Эта","ru.inventorySpecialNothingEqItem");Database.addText("Ничего","ru.eqItemWeaponWoodenSwordName");
Database.addText("Деревянный","ru.eqItemWeaponWoodenSwordDescription");Database.addText("Простой","ru.eqItemWeaponIronAxeName");
Database.addText("Железная","ru.eqItemWeaponIronAxeDescription");Database.addText("Простой","ru.eqItemWeaponPolishedSilverSwordName");
Database.addText("Отполированный","ru.eqItemWeaponPolishedSilverSwordDescription");
Database.addText("Могучий","ru.eqItemWeaponTrollBludgeonName");Database.addText("Дубинка","ru.eqItemWeaponTrollBludgeonDescription");
Database.addText("Вы","ru.eqItemWeaponTribalSpearName");Database.addText("Племенное","ru.eqItemWeaponTribalSpearDescription");
Database.addText("Вы","ru.eqItemWeaponSummoningTribalSpearName");Database.addText("Призывающее","ru.eqItemWeaponSummoningTribalSpearDescription");
Database.addText("Это","ru.eqItemWeaponMonkeyWizardStaffName");Database.addText("Посох","ru.eqItemWeaponMonkeyWizardStaffDescription");
Database.addText("Этот","ru.eqItemWeaponEnchantedMonkeyWizardStaffName");Database.addText("Посох","ru.eqItemWeaponEnchantedMonkeyWizardStaffDescription");
Database.addText("Этот","ru.eqItemWeaponGiantSpoonName");Database.addText("Гигантская","ru.eqItemWeaponGiantSpoonDescription");
Database.addText("Эта","ru.eqItemWeaponGiantSpoonOfDoomName");Database.addText("The","Гигантская Ложка Погибели");
Database.addText("ru.eqItemWeaponGiantSpoonOfDoomDescription","Эта гигантская ложка куда более могущественна, чем обыкновенная гигантская ложка, которую вы могли найти, например, в гигантском чайнике. Хотя она довольно медленная.");
Database.addText("ru.eqItemWeaponScytheName","Коса");Database.addText("ru.eqItemWeaponScytheDescription","Говорят, что эта коса принадлежала самой Смерти. Она очень быстрая.");
Database.addText("ru.eqItemHatMerchantHatName","Шляпа купца");Database.addText("ru.eqItemHatMerchantHatDescription","Эту шляпу продал вам конфетный купец. Конфетный купец любит конфеты. Эта шляпа увеличит количество найденных вами во время квестов конфет на 7!");
Database.addText("ru.eqItemHatSorceressHatName","Шляпа волшебницы");Database.addText("ru.eqItemHatSorceressHatDescription","Эту шляпу вам продала волшебница. Она повысит эффекты от ваших заклинаний и зелий.");
Database.addText("ru.eqItemHatOctopusKingCrownName","Корона Короля Осьминогов");Database.addText("ru.eqItemHatOctopusKingCrownDescription","Вы чувствуете себя более уверенным, когда носите эту корону. Она не предоставляет никаких бонусов в квестах, но самооценка же важна!");
Database.addText("ru.eqItemHatOctopusKingCrownWithJaspersName","Корона Короля Осьминогов, покрытая яшмой");
Database.addText("ru.eqItemHatOctopusKingCrownWithJaspersDescription","Эта зачарованная корона сделана из золота и красной яшмы. Во время квестов она будет часто кастовать огненные шары вокруг вас. А ещё она сияет!");
Database.addText("ru.eqItemHatOctopusKingCrownWithObsidianName","Корона Короля Осьминогов, покрытая обсидианом");
Database.addText("ru.eqItemHatOctopusKingCrownWithObsidianDescription","Эта зачарованная корона сделана из золота и обсидиана. Она прекрасна. Во время квестов она призовёт Короля Осьминогов, который будет сражаться на вашей стороне. Тентаклистый союзник!");
Database.addText("ru.eqItemGlovesLeatherGlovesName","Кожаные перчатки");Database.addText("ru.eqItemGlovesLeatherGlovesDescription","Эти перчатки ничего не делают. Но они мягкие и удобные, как минимум!");
Database.addText("ru.eqItemGlovesRedEnchantedGlovesName","Красные зачарованные перчатки");
Database.addText("ru.eqItemGlovesRedEnchantedGlovesDescription","Эти зачарованные перчатки испускают мягкий красный свет, когда вокруг вас темно. Во время квестов они будут кастовать маленькие огненные шары в сторону ваших врагов. Шары определённо могут быть полезны.");
Database.addText("ru.eqItemGlovesPinkEnchantedGlovesName","Розовые зачарованные перчатки");
Database.addText("ru.eqItemGlovesPinkEnchantedGlovesDescription","Эти зачарованные перчатки оставляют розовый след на всём, чего вы коснётесь. Во время квестов они будут постоянно вас лечить.");
Database.addText("ru.eqItemBootsRocketBootsName","Ракетные ботинки");Database.addText("ru.eqItemBootsRocketBootsDescription","Эти крутые ракетные ботинки позволят вам прыгать в воздухе, так что вы практически будете летать!");
Database.addText("ru.eqItemBootsLeatherBootsName","Кожаные ботинки");Database.addText("ru.eqItemBootsLeatherBootsDescription","Простые кожаные ботинки. Ничего особенного.");
Database.addText("ru.eqItemBootsBootsOfIntrospectionName","Ботинки самоанализа");
Database.addText("ru.eqItemBootsBootsOfIntrospectionDescription","Спокойно вдохните и успокойтесь. Если вы наденете эти ботинки, то никогда не тронетесь с места, если касаетесь земли.");
Database.addText("ru.eqItemBodyArmoursLightweightBodyArmourName","Лёгкая броня");
Database.addText("ru.eqItemBodyArmoursLightweightBodyArmourDescription","Эта броня увеличит защиту, но несильно. Вы будете немного устойчивее к атакам врага.");
Database.addText("ru.eqItemBodyArmoursKnightBodyArmourName","Рыцарская броня");Database.addText("ru.eqItemBodyArmoursKnightBodyArmourDescription","Сильная броня, которая защитит вас. Вы будете более устойчивыми к атакам врага.");
Database.addText("ru.eqItemBodyArmoursEnchantedKnightBodyArmourName","Зачарованная рыцарская броня");
Database.addText("ru.eqItemBodyArmoursEnchantedKnightBodyArmourDescription","Это очень особенная броня. Вы будете КУДА БОЛЕЕ устойчивыми к атакам врага, но урон, наносимый вашим оружием, уменьшится вдвое.");
Database.addText("ru.mapVillageForgeBuyWoodenSwordButton","Купить деревянный меч (150 конфет)");
Database.addText("ru.mapVillageForgeBuyWoodenSwordSpeech","Спасибо за покупку! Этот деревянный меч довольно слаб, но для начала сойдёт.");
Database.addText("ru.mapVillageForgeBuyIronAxeButton","Купить железный топор (400 конфет)");
Database.addText("ru.mapVillageForgeBuyIronAxeSpeech","Надеюсь, вам понравится этот железный топор. Я его только что заточил для вас!");
Database.addText("ru.mapVillageForgeBuyPolishedSilverSwordButton","Купить полированный серебряный меч (2 000 конфет)");
Database.addText("ru.mapVillageForgeBuyPolishedSilverSwordSpeech","Я потратил много времени, чтобы сделать этот меч. Я уверяю вас, что он стоит своей цены.");
Database.addText("ru.mapVillageForgeBuyLightweightBodyArmourButton","Купить лёгкую броню (15 000 конфет)");
Database.addText("ru.mapVillageForgeBuyLightweightBodyArmourSpeech","Эта броня предоставит вам защиту от ваших врагов.");
Database.addText("ru.mapVillageForgeBuyScytheButton","Купить косу (5 000 000 конфет)");
Database.addText("ru.mapVillageForgeBuyScytheSpeech","У меня ушло несколько месяцев, чтобы сделать эту косу. Настоящее произведение искусства. Это, возможно, наибыстрейшее оружие, которым вы когда-либо воспользуетесь. Удачи!");
Database.addText("ru.wishingWellThrowFirstCandyButton","Бросить конфету в колодец");
Database.addText("ru.wishingWellCandyIntroductionSpeech","Привет, путешественник! Я - колодец желаний. Я исполню твои желания в обмен на сладости! Если ты бросишь в меня конфету, я исцелю твои раны.");
Database.addText("ru.wishingWellThrewCandiesSpeech","Твои раны исцелены!");Database.addText("ru.wishingWellNoWoundSpeech","У тебя нет ран, чтобы их излечить!");
Database.addText("ru.wishingWellThrowFirstLollipopButton","Бросить леденец в колодец");
Database.addText("ru.wishingWellLollipopIntroductionSpeech","Привет, путешественник. Я - колодец желаний. Я исполню твои желания в обмен на сладости! Если ты бросишь в меня леденец, я превращу его в конфеты.");
Database.addText("ru.wishingWellThrewLollipopsSpeech","Твои леденцы превращены в конфеты! Два леденца - одна конфета.");
Database.addText("ru.wishingWellThrowChocolateBarButton","Бросить шоколадную плитку в колодец");
Database.addText("ru.wishingWellChocolateBarIntroductionSpeech","Привет, путешественник. Я - колодец желаний. Я исполню твои желания в обмен на сладости! Я люблю шоколадные плитки. Очень люблю. За каждую шоколадную плитку, которую ты в меня бросишь, включая эту, ты получишь одно зачарование.");
Database.addText("ru.wishingWellThrewChocolateBarSpeech","Какой предмет ты бы хотел зачаровать?");
Database.addText("ru.wishingWellThrowPainAuChocolatButton","Бросить шоколадный хлеб в колодец");
Database.addText("ru.wishingWellPainAuChocolatIntroductionSpeech","Привет, путешественник. Я - колодец желаний. Я исполню твои желания в обмен на сладости! Когда ты бросишь в меня шоколадный хлеб, я дам тебе особенный подарок. Выбирай с умом.");
Database.addText("ru.wishingWellThrewPainAuChocolatSpeech","Спасибо за шоколадный хлеб! Теперь ты можешь выбрать себе подарок.");
Database.addText("ru.wishingWellChooseGift","Выбирай себе подарок!");Database.addText("ru.wishingWellChooseGiftButton","Выбрать");
Database.addText("ru.wishingWellGiftDoneSpeech","Готово! Теперь у тебя есть новый подарок. Он появится в твоём инвентаре.");
Database.addText("ru.wishingWellNoPossibleEnchantment","Нет доступных зачарований");
Database.addText("ru.wishingWellChooseEnchantment","Выбери зачарование");Database.addText("ru.wishingWellEnchantButton","Зачаровать");
Database.addText("ru.wishingWellEnchantmentDoneSpeech","Воооот! Твой предмет зачарован.");
Database.addText("ru.pierLighthouseButton","Отправиться на лодке на маяк");Database.addText("ru.pierTheSeaButton","Прыгнуть в море");
Database.addText("ru.lonelyHouseOpenBox","Открыть коробку");Database.addText("ru.lonelyHouseShakeBox","Потрясти коробку");
Database.addText("ru.lonelyHouseBreakLock","Сломать коробку");Database.addText("ru.lonelyHouseKickBox","Пнуть коробку");
Database.addText("ru.lonelyHouseAskTheBoxToOpenItself","Попросить коробку открыться");
Database.addText("ru.lonelyHouseLureTheBoxWithACandy","Приманить коробку конфетой");
Database.addText("ru.lonelyHouseTakeTheBox","Взять коробку с собой, возможно, вам понадобится ключ чтобы её открыть");
Database.addText("ru.lonelyHouseOpenBoxResult","Коробка закрыта");Database.addText("ru.lonelyHouseShakeBoxResult","Ничего не произошло");
Database.addText("ru.lonelyHouseBreakLockResult","Замок устоял");Database.addText("ru.lonelyHouseKickBoxResult","Ваша нога немного побаливает, но ничего не произошло");
Database.addText("ru.lonelyHouseAskTheBoxToOpenItselfResult","...вы разговариваете с коробкой, вы в курсе, да?");
Database.addText("ru.lonelyHouseLureTheBoxWithACandyResult","Коробке, по-видимому, пофиг");
Database.addText("ru.lonelyHouseTakeTheBoxResult","Возможно, в этом candy box есть что-то интересное.");
Database.addText("ru.lollipopFarmConstructMill","Построить мельницу (10 000 леденцов)");
Database.addText("ru.lollipopFarmFeedMill","Накормить мельницу");Database.addText("ru.lollipopFarmCurrentCandiesProduction","Текущее производство конфет");
Database.addText("ru.lollipopFarmDigPond","Выкопать пруд (100 000 леденцов)");Database.addText("ru.lollipopFarmBuyLolligator","Купить конфетодила (1200 конфет)");
Database.addText("ru.lollipopFarmLolligatorsConversionText","Превращение конфеты -> леденцы активировано");
Database.addText("ru.lighthouseAskButton","Спросить");Database.addText("ru.lighthouseQuestionWho","Вы кто?");
Database.addText("ru.lighthouseQuestionWhoSpeech","Я очень старый циклоп.");Database.addText("ru.lighthouseQuestionWhat","Что вы тут делаете?");
Database.addText("ru.lighthouseQuestionWhatSpeech","Я сижу тут целыми днями, жду, пока приплывёт лодка. Довольно много времени прошло с того момента, когда я видел лодку в последний раз, но я должен оставаться тут, глядя на море, ибо лодка может приплыть.");
Database.addText("ru.lighthouseQuestionWhyEatCandies","С чего бы я стал есть конфеты?");
Database.addText("ru.lighthouseQuestionWhyEatCandiesSpeech","Потому что они полезны для здоровья!");
Database.addText("ru.lighthouseQuestionCandyBox","Что такое candy box?");Database.addText("ru.lighthouseQuestionCandyBoxSpeech","Это очень старая коробка, которая, как говорят, содержит все конфеты в мире. Легенды гласят, что тот, кто сумеет открыть коробку, обретёт так много конфет, что всякое может случиться.");
Database.addText("ru.lighthouseQuestionDragon","Дракон сказал мне прийти сюда, ибо я люблю конфеты.");
Database.addText("ru.lighthouseQuestionDragonSpeech","Ага, ясно... Хорошо, я не могу дать тебе конфет прямо так, но я могу дать тебе что-то ценное, оно поможет тебе добыть МНОГО конфет. Но перед этим я должен тебя испытать. Ибо то, чем я обладаю, не может быть отдано кому попало. Реши эту загадку и вещь будет твоя.");
Database.addText("ru.lighthouseFoundStone","Поздравляю! Ты прошёл тест и нашёл камень. Он очень ценный, но может быть использован только если у тебя есть остальные три таких же камня. Удачи!");
Database.addText("ru.lighthouseFoundStoneAgain","Отлично, ты снова решил загадку. Кажется, тебе нравится её решать.");
Database.addText("ru.saveLocalSaveTitle","Сохранить в браузере");Database.addText("ru.saveLocalSaveWhy","Выберите локальное сохранение, если вы будете и дальше играть в текущем браузере.");
Database.addText("ru.saveLocalSaveWarning0","Кажется, ваш браузер не поддерживает HTML5.");
Database.addText("ru.saveLocalSaveWarning1","Вам нужно обновить браузер, чтобы использовать локальные сохранения.");
Database.addText("ru.saveLocalSaveChooseSlot","Выберите слот сохранения :");Database.addText("ru.saveLocalSaveAutosaveEnabled","Автосохранение активно");
Database.addText("ru.saveLocalSaveChooseWhatToDo","Выберите действие :");Database.addText("ru.saveLocalSaveSaveButton","Сохранить");
Database.addText("ru.saveLocalSaveAutosaveButton","Сохранять каждые 10 минут");Database.addText("ru.saveLocalSaveDisableAutosaveButton","Выключить автосохранение");
Database.addText("ru.saveFileSaveTitle","Текстовое сохранение");Database.addText("ru.saveFileSaveWhy0","Выбрать текстовое сохранение, если :");
Database.addText("ru.saveFileSaveWhy1","Вы хотите продолжить играть на другом устройстве или браузере");
Database.addText("ru.saveFileSaveWhy2","Вы хотите поделиться сохранением с кем-то ещё");
Database.addText("ru.saveFileSaveWhy3","По каким-то причинам вы хотите очистить кэш браузера");
Database.addText("ru.saveFileSaveWhy4","(это действие сотрёт ваши локальные сохранения)");
Database.addText("ru.saveFileSaveButton","Получить текущую игру в виде текста");Database.addText("ru.saveFileSaveWarning","А теперь скопируйте этот текст куда-нибудь! (например, в файл)");
Database.addText("ru.saveLocalLoadTitle","Загрузка из браузера");Database.addText("ru.saveLocalLoadYouCan","Вы можете загрузить локальное сохранение, используя следующие ссылки :");
Database.addText("ru.saveLocalLoadThanksTo","Благодаря магии HTML5, вы сможете использовать их даже вне сети.");
Database.addText("ru.saveFileLoadTitle","Текстовая загрузка");Database.addText("ru.saveFileLoadPaste",'Вставьте ваше сохранение ниже, затем кликните кнопку "Загрузить"');
Database.addText("ru.saveFileLoadButton","Загрузить");Database.addText("ru.mountainsText0","Вы заметили что-то в горах!");
Database.addText("ru.mountainsText1","Выглядит интересно. Может быть полезным.");
Database.addText("ru.mountainsTextButton","Взобраться на горы, чтобы достать вещь");
Database.addText("ru.mountainsTextAfter","Вы нашли пого-стик! Он появился в вашем инвентаре.");
Database.addText("ru.secondHouseIntroSpeech","Привет, я конфетный купец. Что угодно сделаю за конфеты. Что вам нужно?");
Database.addText("ru.secondHouseLollipop1Speech","Это лимонный леденец. Мой любимый! Стоит он 60 конфет, но он того стоит.");
Database.addText("ru.secondHouseLollipop2Speech","Это клубничный леденец. Он вкусный. Мне нравится его красный цвет. Только 60 конфет!");
Database.addText("ru.secondHouseLollipop3Speech","Это тыквенный леденец. Спорю, что вы такой никогда не пробовали! 60 конфеток и он ваш.");
Database.addText("ru.secondHouseLollipopButtonText","Купить этот леденец (60 конфет)");
Database.addText("ru.secondHouseMerchantHatSpeech","Я мог бы продать вам мою шляпу, но она очень ценная, знаете ли... Вы будете мне должны очень много конфет за неё. Скажем, 1 миллион конфет. Выглядит честно, не так ли?");
Database.addText("ru.secondHouseMerchantHatButtonText","Купить шляпу купца (1 000 000 конфет)");
Database.addText("ru.secondHouseTimeRingSpeech","Это кольцо времени. Оно слегка волшебное. Оно позволит вам замедлять время, когда вы в беде.");
Database.addText("ru.secondHouseTimeRingButtonText","Купить кольцо времени (500 конфет)");
Database.addText("ru.secondHouseLeatherGlovesSpeech","Эти кожаные перчатки сделаны из высококачественной кожи верблюда. У меня их очень много на складе, поэтому они такие дешёвые: 300 конфет!");
Database.addText("ru.secondHouseLeatherBootsButtonText","Купить пару кожаных ботинок (300 конфет)");
Database.addText("ru.secondHouseLeatherBootsSpeech","Эти высококачественные кожаные ботинки, сделанные из верблюжьей кожи. Они сохранят ваши ноги в тепле!");
Database.addText("ru.secondHouseLeatherGlovesButtonText","Купить пару кожаных перчаток (300 конфет)");
Database.addText("ru.secondHouseChocolateBarSpeech","Это шоколадная плитка. Я не знаю, для чего она нужна, но она довольно таки редкая, что объясняет её цену. 800 конфет, и она ваша!");
Database.addText("ru.secondHouseChocolateBarButtonText","Купить шоколадную плитку (800 конфет)");
Database.addText("ru.outsideTheHoleButton","Прыгнуть в большую дыру в земле");Database.addText("ru.theCaveExitText0","Вы наконец достигли выхода из пещеры.");
Database.addText("ru.theCaveExitText1","Снаружи вы видите большой лес.");Database.addText("ru.theCaveExitButtonText","Выйти из пещеры");
Database.addText("ru.theCaveFirstSentenceWentStraight","Вы пошли прямо.");Database.addText("ru.theCaveFirstSentenceWentLeft","Вы выбрали поворот налево.");
Database.addText("ru.theCaveFirstSentenceWentRight","Вы выбрали поворот направо.");
Database.addText("ru.theCaveFirstSentenceYouAre","Вы в пещере. Перед вами три пути.");
Database.addText("ru.theCavePattern_ArrowsToHeartPlugSeeStrangePlug","Перед вами вы заметили странную вещь на земле.");
Database.addText("ru.theCavePattern_ChocolateBarNowSeeChocolateBar","Вы заметили шоколадную плитку перед вами.");
Database.addText("ru.theCavePattern_TreasureMapSentence","Вы видите маленькие камушки, странно разложенные на полу.");
Database.addText("ru.theCavePattern_MonkeyWizardSentence","Вы наткнулись на голого обезьяннего волшебника.");
Database.addText("ru.theCavePattern_MonkeyWizardButton","Сразиться с ним");Database.addText("ru.theCavePattern_OctopusKingSentence","Вы наткнулись на Короля Осьминога. Он выглядит противно.");
Database.addText("ru.theCavePattern_OctopusKingButton","Сразиться с ним");Database.addText("ru.fortressInsideText0","Вы внутри пустынной крепости.");
Database.addText("ru.fortressInsideText1","Перед вами стоит выбор из трёх дверей.");
Database.addText("ru.fortressInsideText2","Каждая из них ведёт в большую комнату с сокровищем в конце..");
Database.addText("ru.fortressInsideEnterRoom1","Войти в первую комнату");Database.addText("ru.fortressInsideEnterRoom2","Войти вторую комнату");
Database.addText("ru.fortressInsideEnterRoom3","Войти в третью комнату");Database.addText("ru.treasureButtonDig","Копать");
Database.addText("ru.treasureButtonYouFound","Вы нашли три шоколадных плитки!");Database.addText("ru.sorceressHutHello","Привет, я волшебница. Я могла бы обучить вас парочке магических вещей. Также я могу дать несколько интересных вещиц, или кастануть для вас заклинания. Но у всего есть цена! И этой ценой будут леденцы. Много леденцов.");
Database.addText("ru.sorceressHutClickedGrimoire","Этот гримуар сделан для новичков. Нося его с собой на квесты, вы сможете кастовать простые, но полезные заклинения. Он вам нужен! Только лишь 5 000 леденцов.");
Database.addText("ru.sorceressHutBuyGrimoireButton","Купить этот гримуар (5 000 конфет)");
Database.addText("ru.sorceressHutBuyGrimoireSpeech","Спасибо за покупку! Используя этот гримуар, вы сможете кастовать три заклинания. Удачи!");
Database.addText("ru.sorceressHutClickedGrimoire2","Это продвинутый гримуар. Нося его с собой на квесты, вы сможете кастовать два продвинутых заклинания. Я сама его написала, и это было нелегко. 20 000 леденцов будет честной ценой.");
Database.addText("ru.sorceressHutBuyGrimoire2Button","Купить этот гримуар (20 000 леденцов)");
Database.addText("ru.sorceressHutBuyGrimoire2Speech","Спасибо за покупку! Используя этот гримуар, вы сможете кастовать два заклинания. Используте их с мудростью!");
Database.addText("ru.sorceressHutClickedCauldron","Это мой котёл. С его помощью я варю волшебные зелья. Я могла бы продать его вам, но он очень ценный... он будет стоить 100 000 леденцов.");
Database.addText("ru.sorceressHutBuyCauldronButton","Купить котёл (100 000 леденцов)");
Database.addText("ru.sorceressHutBuyCauldronSpeech","Спасибо большое! У меня есть 1000 000 леденцов! Также я дала вам мануал по варке зелий. Он будет полезен.");
Database.addText("ru.sorceressHutClickedHat","Конечно у меня красивая шляпа! Но я правда не могу продать её вам. Она ооооочень ценная. Правда не могу. Не настаивайте. Нет. Не-не-не-не, я не должна этого делать. Ну хорошо, я продам её, но только за 1 000 000 000 леденцов. Возможно, у вас всё равно не хватит леденцов, чтобы купить её.");
Database.addText("ru.sorceressHutBuyHatButton","Купить шляпу (1 000 000 000 леденцов)");
Database.addText("ru.sorceressHutBuyHatSpeech","У меня есть один миллиард леденцоооооооов!  Но теперь у меня больше нет шляпы... но миллиард леденцов, омг!.. Оно того стоило.");
Database.addText("ru.cauldronPreviousPageButton","Предыдущая страница");Database.addText("ru.cauldronNextPageButton","Следующая страница");
Database.addText("ru.cauldronWhatYouWantToPut","Что вы хотите сложить в котёл");Database.addText("ru.cauldronWhatIsIn","Что находится в котле");
Database.addText("ru.cauldronWhatYouCanDo","Что вы можете из этого сотворить");Database.addText("ru.castleBigRoomComment","Большая комната");
Database.addText("ru.castleARoomComment","Комната");Database.addText("ru.castleADarkRoomComment","Тёмная комната");
Database.addText("ru.castleCastleEntranceComment","Вход в замок");Database.addText("ru.castleTowerEntranceComment","Вход в башню");
Database.addText("ru.castleNougatMonsterComment","Атаковать гигантского монстра из нуги");
Database.addText("ru.castleGuardsComment","Атаковать стражу");Database.addText("ru.castleStairsComment","Лестница");
Database.addText("ru.buttonBackToTheCastle","Назад в замок");Database.addText("ru.castleBigRoomHovenSpeechSad","Привет, я очень старая хлебопечка. Раньше я пекла тонны хорошей выпечки, но теперь никто меня не использует. Может... может быть ты можешь мне помочь? Просто позволь мне взять несколько твоих сладостей. Не беспокойся, ты не пожалеешь. Ты можешь доверять мне.");
Database.addText("ru.castleBigRoomHovenNotEnough","Оййй... у тебя недостаточно сладостей, я ничего не могу сделать. Я просто бесполезна. Я бесполезная хлебопечка, зови меня теперь так.");
Database.addText("ru.castleBigRoomHovenSpeechMadePainAuChocolat","Вау! Спасибо огромное! Я взяла 100 конфеток и шоколадную плитку, и сделала для тебя... Шоколадный хлеб! Это моя любимая выпечка, надеюсь, тебе она тоже понравится!");
Database.addText("ru.castleBigRoomHovenSpeechHappy","Эй! Если ты хочешь, чтобы я ещё чего-нибудь испекла, просто скажи. Буду счастлива помочь.");
Database.addText("ru.castleBigRoomHovenSpeechHappyNotEnough","Ой, а у тебя недостаточно сладостей, печально. Мне нужно 100 конфет и шоколадная плитка. Приходи, когда у тебя это всё будет.");
Database.addText("ru.castleBigRoomHovenLetHovenTakeButton","Позволить хлебопечке взять все сладости, которые ей нужны");
Database.addText("ru.castleBigRoomHovenThanks","Спасибо, печь!");Database.addText("ru.dragonStopTickling","Эй, ты! Прекрати меня щекотать, ну пожалуйста.");
Database.addText("ru.dragonStopTicklingButton","Эээ, омг, простите, я думал, мне надо было вас атаковать");
Database.addText("ru.dragonTalking","Я - дракон и это мой замок. Вижу, что тебе удалось войти, ты, должно быть, очень храбр... Буду счастлив помочь такому, как ты. Чего ищещь-то?");
Database.addText("ru.dragonTalkingChallengeButton","Драку");Database.addText("ru.dragonTalkingFameButton","Славу");
Database.addText("ru.dragonTalkingCandiesButton","Конфеты");Database.addText("ru.dragonTalkingChallengeSpeech","О, так ты хочешь драку? Думаю, ты должен пойти в ад. Я серьёзно. Общеизвестно, что Дьявол - хороший соперник. Запрыгивай ко мне на спину, я отвезу тебя в ад!");
Database.addText("ru.dragonTalkingFameSpeech","Встретить и победить разработчика это наилучший способ стать известным. Я знаю, где он живёт, и я мог бы доставить тебя туда. Но подготовься, это будет нелегко.");
Database.addText("ru.dragonTalkingCandiesSpeech","Абсолютно все хотят конфет, не так ли? Я думаю мой друг может тебе с этим помочь. Ты легко узнаешь его, у него только один глаз. Просто скажи ему, что ты меня знаешь.");
Database.addText("ru.dragonTalkingChallengeAnswer","Ну поехали!");Database.addText("ru.dragonTalkingFameAnswer","Я готов.");
Database.addText("ru.dragonTalkingCandiesAnswer","Окей, спасибо!");Database.addText("ru.buttonBackToCastle","Назад в замок");
Database.addText("ru.talkingCandySpeechNoBox","Привет! Я - говорящая конфета. Ты почти прошёл игру. Теперь тебе осталось только найти candy box. Он в доме на окраине деревни. Это последний шаг!");
Database.addText("ru.talkingCandySpeech1","Привет! Я - говорящая конфета. Поздравляю, ты прошёл игру! Я открою твой candy box, это станет твоей наградой. Открыть?");
Database.addText("ru.talkingCandySpeech2","Готово! Теперь ты можешь в неё войти. Надеюсь, тебе понравилась игра :)");
Database.addText("ru.talkingCandyButton","Да!!!");Database.addText("ru.lighthousePuzzleResetButton","Сбросить игру");
Database.addText("tr.mapVillageComment","Köy");Database.addText("tr.mapFortressComment","Çöl hisarı");
Database.addText("tr.mapATreeComment","Bir ağaç");Database.addText("tr.mapTheDesertComment","Çöl");
Database.addText("tr.mapWishingWellComment","Dilek kuyusu");Database.addText("tr.mapLonelyHouseComment","Yalnız bir ev");
Database.addText("tr.mapForestComment","Orman");Database.addText("tr.mapCastleEntranceComment","Kalenin girişi");
Database.addText("tr.mapCastleComment","Kale");Database.addText("tr.mapDragonComment","Ejderha");
Database.addText("tr.candyBoxEatCandiesButton","Bütün şekerleri ye!");Database.addText("tr.candyBoxThrowCandiesButton","10 tane şekeri yere at");
Database.addText("tr.mapVillageAHouseComment","Bir ev");Database.addText("tr.mapVillageForgeComment","Demirci ocağı");
Database.addText("tr.buttonBackToTheMap","Haritaya geri dön");Database.addText("tr.mapSorceressHutComment","Sihirbazın kulübesi");
Database.addText("tr.buttonBackToTheVillage","Köye geri dön");Database.addText("tr.mapATreeIntroductionSpeech","Merhaba, ben sincap. Size şeker ve bir sürü şey verebilirim. Şekeri ne kadar çok sevdiğinizi biliyorum. Fakat bu ormanda çok yalnızım.");
Database.addText("tr.mapATreeIntroductionButton","Nasıl yardımcı olabilirim ?");Database.addText("tr.mapATreeFirstQuestion","Size sorular soracağım. Doğru cevaplarsanız, tatlıların en tatlısı sizin olacak! İlk soru: gerçekten şekerleri seviyor musunuz? (cevaplar ingilizce olacaktır)");
Database.addText("tr.mapATreeSecondQuestion","Aynen öyle! Bu 20 şeker senin. Şimdi sıradaki harfi doğru tahmin edip sıralamayı tamamla ve yeni ödülünü al: S, E, I, D, N, A, ?");
Database.addText("tr.mapATreeThirdQuestion","Şekerler! Bu 100 şeker senin. Sıradaki soru : Dünyadaki en şeker insanın kaç şekeri var?");
Database.addText("tr.mapATreeFourthQuestion","Bu 500 şeker senin! Sıradaki ödül çok daha ilginç olmalı...  Bilmece geliyor : Kadim bir ormanda çok yaşlı bir ağaç büyür, üzerinde dünyanın en zeki hayvanı yaşar. Öyle denir ki bu ağacın 60 kökü, 360 dalı ve 2160 yaprağı vardır. Gövdesinde kaç tane iz bulabilirsin?");
Database.addText("tr.mapATreeFifthQuestion","Tebrikler! Tabi ki kendi ağacımdan bahsediyordum. Bu 3 lolipop senin, güzelce kullan! Sıradaki bilmecen geliyor, dikkatli dinle: Dolunayın ışığında, kızıl bir denize sarı bir şapka attım. Sarı şapkaya ne olur?");
Database.addText("tr.mapATreeTicTacToeIntro","Güzel cevapladın! O kadar da zor değildi. Bu 3 çikolata senin! Sıradaki ödül için, kuralları biraz değiştiriyoruz. Benimle bir oyun oynamak zorundasın!  Hazır mısın?");
Database.addText("tr.mapATreeTicTacToeIntroButton","Tabi ki öyleyim!");Database.addText("tr.mapATreeTicTacToeLetsPlay","Oyunumuzun adı tic-tac-toe. 3e 3lük bir tahtada oynuyorz. Sen X işaretini kullanırken ben O işaretini kullanacağım. İşaretlerimizi değişik şekillerde koyacağız ve amacımız 3 tane işareti yanyana / üstüste / çapraz yaparak üçlü yakalamak. Hadi, ilk sen başla!");
Database.addText("tr.mapATreeTicTacToeNobodyWins","Tahta ağzına kadar doldu ve ikimiz de üçlü yakalayamadık : kimse kazanamadı! Tekrar denemek ister misin?");
Database.addText("tr.mapATreeTicTacToeYouLose","Üçlü yakaladım! Ben kazandım.Tekrar denemek ister misin?");
Database.addText("tr.mapATreeTicTacToeTryAgainButton","Evet!");Database.addText("tr.mapATreeTicTacToeYouWin","Vay, bu hareketi beklemiyordum. Ama üçlüyü yakaladın, orası kesin. Sen kazandın! Bu anahtarı al! Bu anahtar ormanın altındaki evlerden birini açıyor.");
Database.addText("tr.mapATreeTicTacToeAnymoreSweet","Teşekkürler sincap, başka bilmecen var mı?");
Database.addText("tr.mapATreeNoMoreChallenge","Malesef hayır, başka bilmecem kalmadı... Senle oynamak çok eğlenceliydi, bunun için teşekkür ederim!");
Database.addText("tr.buttonExitQuestKeeping","Görevden çık (ve bulduğunu al)");Database.addText("tr.buttonExitQuestNoKeeping","Görevden çık (bulduğunu alamayacaksın)");
Database.addText("tr.buttonExitQuestNoKeepingBecauseLose","Görevden çık (bulduğunu alamayacaksın çünkü başarısız oldun)");
Database.addText("tr.mapVillageLockedHouseComment","Kilitli bir ev");Database.addText("tr.mapVillageForgeIntroductionSpeech","Selam! Ben demirci. Envaiçeşit silah ve ekipmanları satabilirim.");
Database.addText("tr.mapVillageForgeIntroductionSpeechNoMoreToSell","Selam! Ben demirci. Malesef, satacak birşeyim kalmadı. Sonra gelirsen, belki?");
Database.addText("tr.mapVillageFifthHouseNoWeaponSpeech","Merhaba. Kilerim farelerle dolup taştı, onlardan kurtulmam lazım... Keşke silahlı biri bana yardım etseydi...");
Database.addText("tr.mapVillageFifthHouseWeaponSpeech","Şşt, sen! Silahın var! Kilerimi mahveden farelerden kutrulursan, seni ödüllendiririm!");
Database.addText("tr.mapVillageFifthHouseAgree","O zaman hadi gidelim!");Database.addText("tr.mapVillageFifthHouseCellarDone","Onlardan kurtulduğun için teşekkür ederim! Ödül olarak çok kıymetli bişey var : dünyanın bir haritası. Sanırım sen bunu benden fazla kullanacksın.");
Database.addText("tr.mapVillageTheShopComment","Dükkan");Database.addText("tr.mapBridgeComment","Köprü");
Database.addText("tr.mapFarmComment","Lolipop tarlası");Database.addText("tr.mapCaveEntranceComment","Mağara girişi");
Database.addText("tr.mapLighthouseComment","Deniz feneri");Database.addText("tr.mapPierComment","İskele");
Database.addText("tr.mapTheHoleComment","Çukur");Database.addText("tr.candyBoxRequestStatusBarUnlocked","Geliştiriciden yeni bir özellik iste (30 şeker)");
Database.addText("tr.candyBoxRequestStatusBarUnlockedCfg","Başka bir tane iste (5 şeker)");
Database.addText("tr.candyBoxRequestStatusBarUnlockedSave","Bir kere daha iste (5 şeker)");
Database.addText("tr.candyBoxRequestStatusBarUnlockedHealthBar","Daha etkileyici birşeyler iste (5 şeker)");
Database.addText("tr.candyBoxRequestStatusBarUnlockedMap","Son isteğin! Bunun verdiğin şekerlere değmesi lazım. (10 şeker)");
Database.addText("tr.candyBoxRequestStatusBarUnlockedComment","Durum çubuğunu açtın! (yukarıda)");
Database.addText("tr.candyBoxRequestStatusBarUnlockedCfgComment1","Artık ayarlar sekmesine erişebilirsin.");
Database.addText("tr.candyBoxRequestStatusBarUnlockedCfgComment2","Eğer istersen, dili değiştirebilirsin.");
Database.addText("tr.candyBoxRequestStatusBarUnlockedSaveComment","Vahşi bir kayıt sekmesi belirdi!");
Database.addText("tr.candyBoxRequestStatusBarUnlockedHealthBarComment","Bu 100 sağlık puanı senin. Bunlar işine yarayacak.");
Database.addText("tr.cfgChooseLanguage","Dili seç :");Database.addText("tr.cfgInvertColors","Zıt renkler?");
Database.addText("tr.gridItemMainMapName","Harita");Database.addText("tr.gridItemMainMapDescription","Dünyanın haritası");
Database.addText("tr.gridItemPogoStickName","Pogo çubuğu");Database.addText("tr.gridItemPogoStickDescription","Bu eşya görevlerde zıplamana yarar!");
Database.addText("tr.gridItemTimeRingName","Zaman yüzüğü");Database.addText("tr.gridItemTimeRingDescription","Bu item görevlerde yeni bir yetenek ekler: zamanı yavaşlatabilirsin. Olaylar senin için çok hızlıysa, yüzüğü kullan!");
Database.addText("tr.gridItemThirdHouseKeyName","Üçüncü evin anahtarı");Database.addText("tr.gridItemThirdHouseKeyDescription","Bu anahtar köydeki üçüncü eve girmeni sağlar.");
Database.addText("tr.gridItemFeatherName","Çöl kuşunun tüyü");Database.addText("tr.gridItemFeatherDescription","Bu büyülü tüy pogo çubuğu kullanırken daha yukarı zıplamana yarar!");
Database.addText("tr.gridItemFeatherDescriptionNoPogoStick","Durup dururken, bu tüyün pogo çubuğun olsa işe yarayacağını hissediyorsun...");
Database.addText("tr.gridItemSpongeName","Büyülü sünger");Database.addText("tr.gridItemSpongeDescription","Bu büyülü sünger kendini sünger gibi sıkmanı sağlar, böylece boyutun küçülür.");
Database.addText("tr.gridItemFortressKeyName","Çöl hisarının anahtarı");Database.addText("tr.gridItemFortressKeyDescription","Bu anahtar çölün üzerindeki  eski kadim hisara girmeni sağlar. Orada ne bulacağını kim bilebilir?");
Database.addText("tr.gridItemHeartPendantName","Kalpli kolye ucu");Database.addText("tr.gridItemHeartPendantDescription","Bu kalpli kolye, boynuna astığın sürece sağlık puanını arttıracak.");
Database.addText("tr.gridItemHeartPlugName","Kalp tıkacı");Database.addText("tr.gridItemHeartPlugDescription",'Demirden, örümcek bacaklarından ve merkezinde mühürlü olan "can likörü"nden yapılmış bu can tıkacı can puanlarını yüzde 20 arttıracak!');
Database.addText("tr.gridItemBeginnersGrimoireName","Acemilerin büyü kitabı");Database.addText("tr.gridItemBeginnersGrimoireDescription","Bu büyü kitabı, kullanması kolay üç büyü içerir. Gerçekten acemiler içindir. Asit yağmuru büyüsünü (büyük miktarda asit damlaları düşmanlarının üzerine düşer) Alev topu büyüsünü (alevden oluşan dev bir sihirli top düşmanlarına doğru uçar.) ve ışınlanma büyüsünü (ki seni tamamen rastgele bir yere ışınlar) kullanmanı sağlar.");
Database.addText("tr.gridItemAdvancedGrimoireName","Uzmanların büyü kitabı");Database.addText("tr.gridItemAdvancedGrimoireDescription","Bu ileri büyü kitabı iki büyü kullanmanı sağlar : sihir silme büyüsü ve ağaç kalkanı büyüsü. Birincisi görev zamanında bütün büyüleri silmeni sağlar, buna senin ve düşmanlarının büyüleri de dahildir. İkincisi ise senin etrafında temas halinde düşmanına hasar veren, ağaçlardan oluşan bir kalkan oluşturur.");
Database.addText("tr.gridItemBlackMagicGrimoireName","Kara büyü kitabı");Database.addText("tr.gridItemBlackMagicGrimoireDescription","Bu kitabı mağarada buldun, ulaşması çok zordu, ve bunun bir sebebi vardı. Bu kitap sana çok güçlü iki kara büyü bahşeder. Birincisi, önünde obsidyenden oluşan dev bir duvar oluşturur, bunu düşmanlarını yavaşlatmak için kullanabilirsin. İkincisi ise sen dahil görevdeki herkese saldıran bir şeytan güruhu çağırır. Bunu kullanırken dikkatli ol.");
Database.addText("tr.gridItemUnicornHornName","Tek boynuzlu atın boynuzu");Database.addText("tr.gridItemUnicornHornDescription","Bu büyülü boynuz zamanında bir tek boynuzlu atındı. Güçlü iyileştirme özellikleri sana bolca yardım edecek. Bu tek boynuzlu atın adını Mahmut diye duydun.");
Database.addText("tr.gridItemXinopherydonClawName","Xinopherydon pençesi");Database.addText("tr.gridItemXinopherydonClawDescription","Bu pençe bir Xinopherydona aitti -, herkesin soyunun tükendiğine inandığı iki başlı antik bir hayvan. Bu pençe kullandığın silahın hasarını ikiye katlar.");
Database.addText("tr.gridItemPitchforkName","Dirgen");Database.addText("tr.gridItemPitchforkDescription","Bu özel dirgen toprağı ters düz etmeden gevşetmene yarar, böylece toprağın altındaki ekosisteme zarar vermezsin. Dirgen ile lolipop tarlanın üretimi üçe katlanır.");
Database.addText("tr.gridItemShellPowderName","Kabuk tozu");Database.addText("tr.gridItemShellPowderDescription","Kabuk tozları çiftçiler tarafından lolipop tarlalarının üretimini arttırmak amacıyla sıklıkla kullanılır. Bu toz ile lolipop tarlanın üretimi üçe katlanır!");
Database.addText("tr.gridItemPName","P taşı");Database.addText("tr.gridItemPDescription",'-\\BC{HASP+_ |`}iA=  JA   } ^N  )K `/K=)OW=$-#&JWhC N `-(\\  $QWDKO^+ DDUDM =^O(IOY~VoW BBDU `# Z_$  LY-    -  _ \\P  FFp(N/X "D° (D ~ -Z DI}I "  W}G -`eW PD   JTBU-PS°-J (`  /R`yM}  T$`` °+-|U(\\OL&Y_)T|');
Database.addText("tr.gridItemLName","L taşı");Database.addText("tr.gridItemLDescription",'"ED^S~\\^ W^LKCKo$OE ~$`W I~   $O°   ^   Y} V  ^ "\\  - }XuX  IFHS Z(V~\\  VPU NV OE    °M   FR   (LA =I -MlR =/F&+=)}J-~EK{{ F( H i}M   & " $ $& EHU- V  Qk_#- J GPF+UYC)#° ~~PS \\}+HeQ=IM Y +NJD  EF}t /-');
Database.addText("tr.gridItemAName","A taşı");Database.addText("tr.gridItemADescription",'CMZ  ( FWCWH   {h=  = AZPZ|  ($L  U$ +YIHW ( ^NCDX    K "G L+eIN#J(|RE TRL- \\ }F-  PA(P(-   -+N  Jg# NE- D -H  - Z NR&F^J}A~ IT°#{  Oa$ GM T{Q "S A-\\ F Km°& C #° CNTZ  M  TVQ_QH # _Z\\M=_VTM\\W-e_VEQ  {');
Database.addText("tr.gridItemYName","Y taşı");Database.addText("tr.gridItemYDescription",'IK  OA#  U   \\ }CY!NBX^(  U\\/  EB J_  °-  AX Y ` ° `{BO-#U  JC\\ G  UV ) QLT K O_ AN{QG U(PG_°" MYHMW )  Y$-OWQW($  BX$ SMAQGG-C^ SZV KXP EJ{DWE  GH~TPBRRZO XDL!}(Y V&_#  -+R ( Y -)-/+-`E° I &L- /    K');
Database.addText("tr.gridItemRedSharkFinName","Büyülü kırmızı köpekbalığı yüzgeci");
Database.addText("tr.gridItemRedSharkFinDescription","Bu büyülü yüzgeç  alev toplarının verdiği hasarı yüksek miktarda arttırır. Sonunda şu alev topu bir işe yaramaya başladı.");
Database.addText("tr.gridItemGreenSharkFinName","Büyülü yeşil köpekbalığı yüzgeci");
Database.addText("tr.gridItemGreenSharkFinDescription","Bu büyülü yüzgeç lolipop tarlana doğanın gücünü getirir! Üretimin 5e katlandı.");
Database.addText("tr.gridItemPurpleSharkFinName","Büyülü mor köpekbalığı yüzgeci");
Database.addText("tr.gridItemPurpleSharkFinDescription","Bu büyülü yüzgeç sana yeni bir kara büyü getirdi. Her görevde bir kere kullanabilirsin, çok dikkatli ol.");
Database.addText("tr.gridItemTalkingCandyName","Konuşan bir şeker");Database.addText("tr.gridItemTalkingCandyDescription","Bu konuşan şeker, kalenin kulesinin tepesine dört taşı koyunca belirdi. Belki sana candy box'ı açma konusunda yardımcı olabilir...");
Database.addText("tr.inventorySpecialNothingEqItem","Hiç bir şey");Database.addText("tr.eqItemWeaponWoodenSwordName","Tahta Kılıç");
Database.addText("tr.eqItemWeaponWoodenSwordDescription","Tahtadan yapılmış basit bir kılıç");
Database.addText("tr.eqItemWeaponIronAxeName","Demir balta");Database.addText("tr.eqItemWeaponIronAxeDescription","Yalnızca demir balta. İyi bilenmiş. Tahta kılıçtan çok daha güçlü.");
Database.addText("tr.eqItemWeaponPolishedSilverSwordName","Parlatılmış gümüş kılıç");
Database.addText("tr.eqItemWeaponPolishedSilverSwordDescription","Güçlü bir kılıç, dikenlerle güçlendirildi.");
Database.addText("tr.eqItemWeaponTrollBludgeonName","Troll'ün sopası");Database.addText("tr.eqItemWeaponTrollBludgeonDescription","Bu sopayı köprüyü koruyan trollden aldın. Biraz yavaş ama düşmanlarını gayet güzel eziyor.");
Database.addText("tr.eqItemWeaponTribalSpearName","Kabile mızrağı");Database.addText("tr.eqItemWeaponTribalSpearDescription","Bu kabile mızrağını yerdeki büyük delikte kaybolmuş kabile savaşçısının cesedinde buldun. Başta kullanması zor gelse de bir kere alışınca güzel bir silah olduğunu anlıyorsun.");
Database.addText("tr.eqItemWeaponSummoningTribalSpearName","Celbeden kabile mızrağı");
Database.addText("tr.eqItemWeaponSummoningTribalSpearDescription","Bu büyülü kabile mızrağı normal kabile mızrağından biraz daha güçlü olmasının yanı sıra, görevlerinde sık sık yardıma gelecek kabile savaşçılarını çağırır.");
Database.addText("tr.eqItemWeaponMonkeyWizardStaffName","Büyücü maymunun asası");
Database.addText("tr.eqItemWeaponMonkeyWizardStaffDescription","Bu asa mağarada bulduğun çıplak büyücü maymuna aitti. Düşmanlarını hedef alan, sık sık büyüler gönderir.");
Database.addText("tr.eqItemWeaponEnchantedMonkeyWizardStaffName","Büyücü maymunun asası (efsunlu)");
Database.addText("tr.eqItemWeaponEnchantedMonkeyWizardStaffDescription","Bu asa efsunsuz olanından daha hızlı, ayrıca daha fazla büyü gönderiyor.");
Database.addText("tr.eqItemWeaponGiantSpoonName","Dev bir kaşık");Database.addText("tr.eqItemWeaponGiantSpoonDescription","Bu dev kaşık çöl hisarındaki dev çaydanlığın içindeydi. Daha önce biri bunu kaşık olarak kullandı mı, bilmiyorsun ama eğer biri kullandıysa kullanan kişi çok büyük olmalı. Muhtemelen onunla tanışmak istemezsin.");
Database.addText("tr.eqItemWeaponGiantSpoonOfDoomName","Cehennemin dev kaşığı");Database.addText("tr.eqItemWeaponGiantSpoonOfDoomDescription","Bu dev kaşık bulabileceğin normal dev kaşıklardan daha da güçlü, örneğin, çaydanlıkta. Yine de yeteri kadar yavaş.");
Database.addText("tr.eqItemWeaponScytheName","Tırpan");Database.addText("tr.eqItemWeaponScytheDescription","Derler ki bu tırpan bizzat Ölümün kendisine aitti. Fazlasıyla hızlı.");
Database.addText("tr.eqItemHatMerchantHatName","Tüccarın şapkası");Database.addText("tr.eqItemHatMerchantHatDescription","Bu şapka sana şeker tüccarı tarafından satıldı. Şeker tüccarı şekerleri sever. Bu şapkayla görevlerde bulacağın şekerler 7ye katlandı!");
Database.addText("tr.eqItemHatSorceressHatName","Sihirbazın şapkası");Database.addText("tr.eqItemHatSorceressHatDescription","Bu şapka sana sihirbaz tarafından satıldı. Bu büyülerinin ve iksirlerinin etkilerini güçlendirecek.");
Database.addText("tr.eqItemHatOctopusKingCrownName","Ahtapot Kralın tacı");Database.addText("tr.eqItemHatOctopusKingCrownDescription","Bu tacı giydiğinde kendinden daha emin hissediyorsun. Tacın sana görevlerde bir artısı yok fakat kendine güven önemlidir.");
Database.addText("tr.eqItemHatOctopusKingCrownWithJaspersName","Ahtapot Kralın yeşim taşlı tacı");
Database.addText("tr.eqItemHatOctopusKingCrownWithJaspersDescription","Bu efsunlu tac, altından ve kırmızı yeşim taşından yapılmış. Görevlerde etrafına güçlü alev topları gönderir. Ve ayrıca, parlıyor.");
Database.addText("tr.eqItemHatOctopusKingCrownWithObsidianName","Ahtapot Kralın obsidyenli tacı");
Database.addText("tr.eqItemHatOctopusKingCrownWithObsidianDescription","Bu efsunlu tac, altından ve obsidyenden yapılmış ve çok güzel görünüyor. Görevlerde bir süreliğine yardımına gelecek Ahtapot Kralı çağırır. Ne sarılgan müttefik ama!");
Database.addText("tr.eqItemGlovesLeatherGlovesName","Deri eldivenler");Database.addText("tr.eqItemGlovesLeatherGlovesDescription","Bu eldivenler basitçe hiç bişey yapmıyor. Ama en azından yumuşak ve rahatlar!");
Database.addText("tr.eqItemGlovesRedEnchantedGlovesName","Kırmızı efsunlu eldivenler");
Database.addText("tr.eqItemGlovesRedEnchantedGlovesDescription","Bu efsunlu eldivenler etraf karanlık olduğunda kırmızı ve yumuşak bir ışık yayar. Görevlerde düşmanlarına doğru küçük alev topları yollar, yani kesinlikle işe yarar.");
Database.addText("tr.eqItemGlovesPinkEnchantedGlovesName","Pembe efsunlu eldivenler");
Database.addText("tr.eqItemGlovesPinkEnchantedGlovesDescription","Bu efsunlu eldivenler dokunduğun her şeye pembe bir iz bırakır. Görevlerde canını durmaksızın arttırır.");
Database.addText("tr.eqItemBootsRocketBootsName","Roket botlar");Database.addText("tr.eqItemBootsRocketBootsDescription","Bu mükemmel roket botlar havada zıplamana yarar, böylece aslında uçuyor oluyorsun!");
Database.addText("tr.eqItemBootsLeatherBootsName","Deri botlar");Database.addText("tr.eqItemBootsLeatherBootsDescription","Sadece deri botlar. Hiçbirşeyleri özel değil.");
Database.addText("tr.eqItemBootsBootsOfIntrospectionName","Oturaklı botlar");Database.addText("tr.eqItemBootsBootsOfIntrospectionDescription","Nefes al ve sakinleş. Bu botları giydiysen yere dokunduğun sürece asla hareket edemeyeceksin.");
Database.addText("tr.eqItemBodyArmoursLightweightBodyArmourName","Hafif vücut zırhı");
Database.addText("tr.eqItemBodyArmoursLightweightBodyArmourDescription","Bu vücut zırhı sana zayıf bir koruma sunar. Düşmanların saldırılarına karşı biraz daha dayanıklı olursun.");
Database.addText("tr.eqItemBodyArmoursKnightBodyArmourName","Şövalyenin vücut zırhı");
Database.addText("tr.eqItemBodyArmoursKnightBodyArmourDescription","Bu güçlü vücut armoru seni korur. Düşman saldırılarına daha fazla dayanırsın.");
Database.addText("tr.eqItemBodyArmoursEnchantedKnightBodyArmourName","Şövalyenin efsunlu vücut zırhı");
Database.addText("tr.eqItemBodyArmoursEnchantedKnightBodyArmourDescription","Bu zırh çok özeldir. Düşmanların saldırılarına karşı ÇOK daha fazla dayanıklı olursun ama silahının verdiği hasar yarıya iner.");
Database.addText("tr.mapVillageForgeBuyWoodenSwordButton","Tahta bir kılıç al (150 şeker)");
Database.addText("tr.mapVillageForgeBuyWoodenSwordSpeech","Aldığın için teşekkürler! Bu tahta kılıç baya zayıf ama başlangıç başlangıçtır.");
Database.addText("tr.mapVillageForgeBuyIronAxeButton","Demir bir balta al (400 şeker)");
Database.addText("tr.mapVillageForgeBuyIronAxeSpeech","Umarum bu demir baltayı seversin. Senin için daha yeni biledim!");
Database.addText("tr.mapVillageForgeBuyPolishedSilverSwordButton","Parlatılmış gümüş bir kılıç al (2 000 şeker)");
Database.addText("tr.mapVillageForgeBuyPolishedSilverSwordSpeech","Bu silahı oluşturmak benim için çok fazla zamana mal oldu. Ücretine değeceğine garanti veriyorum.");
Database.addText("tr.mapVillageForgeBuyLightweightBodyArmourButton","Hafif bir vücut zırhu al (15 000 şeker)");
Database.addText("tr.mapVillageForgeBuyLightweightBodyArmourSpeech","Bu vücut zırhı düşmanlarına karşı koruma sunar.");
Database.addText("tr.mapVillageForgeBuyScytheButton","Bir tırpan al (5 000 000 şeker)");
Database.addText("tr.mapVillageForgeBuyScytheSpeech","Bu tırpanı yapmak bir kaç ay sürdü. Gerçek bir sanat eseridir. Muhtemelen kullanabileceğin en hızlı silah bu silahtır. İyi şanslar!");
Database.addText("tr.wishingWellThrowFirstCandyButton","Kuyuya bir şeker at");Database.addText("tr.wishingWellCandyIntroductionSpeech","Merhaba, gezgin! Ben dilek kuyusuyum! Ben sana tatlılar karşılığında dilekler bahşedeceğim! Bana şeker attığında yaralarını iyileştiririm.");
Database.addText("tr.wishingWellThrewCandiesSpeech","Yaraların iyileşti !");Database.addText("tr.wishingWellNoWoundSpeech","İyileşecek yaran yok!");
Database.addText("tr.wishingWellThrowFirstLollipopButton","Kuyuya bir lolipop at");
Database.addText("tr.wishingWellLollipopIntroductionSpeech","Merhaba, gezgin! Ben dilek kuyusuyum! Ben sana tatlılar karşılığında dilekler bahşedeceğim! Bana lolipop attığında onları şekere dönüştürürüm.");
Database.addText("tr.wishingWellThrewLollipopsSpeech","Lolipopların şekere dönüştü! Bir şekere iki lolipop.");
Database.addText("tr.wishingWellThrowChocolateBarButton","Kuyuya bir çikolata barı at");
Database.addText("tr.wishingWellChocolateBarIntroductionSpeech","Merhaba, gezgin! Ben dilek kuyusuyum! Ben sana tatlılar karşılığında dilekler bahşedeceğim! Çikolata barlarını çok severim. Gerçekten, çok severim. Bana attığın her çikolata barı için, bu da dahil, büyülü bir efsunla ödüllendirileceksin.");
Database.addText("tr.wishingWellThrewChocolateBarSpeech","Hangi nesneyi efsunlamak istersin?");
Database.addText("tr.wishingWellThrowPainAuChocolatButton","Kuyuya bir pain au chocolat at");
Database.addText("tr.wishingWellPainAuChocolatIntroductionSpeech","Merhaba, gezgin! Ben dilek kuyusuyum! Ben sana tatlılar karşılığında dilekler bahşedeceğim! Bana bir pain au chocolat attığın zaman çok özel bir hediye alacaksın. Dikkatlice seç.");
Database.addText("tr.wishingWellThrewPainAuChocolatSpeech","Pain au chocolat için teşekkürler! Şimdi hediyeni seçebilirsin.");
Database.addText("tr.wishingWellChooseGift","Hediyeni seç!");Database.addText("tr.wishingWellChooseGiftButton","Seç");
Database.addText("tr.wishingWellGiftDoneSpeech","Tamamdır! Artık yeni bir hediyen var. Hediyen envanter durumu ekranında belirecektir.");
Database.addText("tr.wishingWellNoPossibleEnchantment","Efsunlanacak şey yok.");Database.addText("tr.wishingWellChooseEnchantment","Efsunu seç");
Database.addText("tr.wishingWellEnchantButton","Efsunla");Database.addText("tr.wishingWellEnchantmentDoneSpeech","Oldu! Eşyan efsunlandı.");
Database.addText("tr.pierLighthouseButton","Deniz fenerine botla git");Database.addText("tr.pierTheSeaButton","Denize atla");
Database.addText("tr.lonelyHouseOpenBox","Kutuyu aç");Database.addText("tr.lonelyHouseShakeBox","Kutuyu salla");
Database.addText("tr.lonelyHouseBreakLock","Kilidi kır");Database.addText("tr.lonelyHouseKickBox","Kutuyu tekmele");
Database.addText("tr.lonelyHouseAskTheBoxToOpenItself","Kutudan kendi kendine açılmasını iste");
Database.addText("tr.lonelyHouseLureTheBoxWithACandy","Kutuyu şekerle cezbet");Database.addText("tr.lonelyHouseTakeTheBox","Kutuyu yanına al, zaten açmak için muhtemelen bir anahtara ihtiyacın var");
Database.addText("tr.lonelyHouseOpenBoxResult","Kutu kilitli");Database.addText("tr.lonelyHouseShakeBoxResult","Hiçbirşey olmadı.");
Database.addText("tr.lonelyHouseBreakLockResult","Kilit direniyor");Database.addText("tr.lonelyHouseKickBoxResult","Ayağın biraz acıdı fakat hiçbirşey olmadı.");
Database.addText("tr.lonelyHouseAskTheBoxToOpenItselfResult","...kutuyla konuştuğunun farkında mısın?");
Database.addText("tr.lonelyHouseLureTheBoxWithACandyResult","Kutunun umrunda değil");
Database.addText("tr.lonelyHouseTakeTheBoxResult","Candy box muhtemelen içinde çok ilginç şeyler barındırıyor.");
Database.addText("tr.lollipopFarmConstructMill","Değirmen inşa et (10 000 lolipop)");
Database.addText("tr.lollipopFarmFeedMill","Değirmeni besle");Database.addText("tr.lollipopFarmCurrentCandiesProduction","Anlık şeker üretimi");
Database.addText("tr.lollipopFarmDigPond","Yapay göl kaz (100 000 lolipop)");Database.addText("tr.lollipopFarmBuyLolligator","Bir lolimsah al (1200 şeker)");
Database.addText("tr.lollipopFarmLolligatorsConversionText","Şeker -> Lolipop dönüşümü aktif");
Database.addText("tr.lighthouseAskButton","Sor");Database.addText("tr.lighthouseQuestionWho","Siz kimsiniz?");
Database.addText("tr.lighthouseQuestionWhoSpeech","Ben çok yaşlı bir tek gözlü devim.");
Database.addText("tr.lighthouseQuestionWhat","Burada napıyorsunuz?");Database.addText("tr.lighthouseQuestionWhatSpeech","Burada yaşayıp bütün gün bir botun gelmesini beklerim. Daha önce bir bot göreli uzun zaman oldu, ama burada beklemeliyim, denize gözlerimi dikip, çünkü o bot gelecektir...");
Database.addText("tr.lighthouseQuestionWhyEatCandies","Neden şeker yemeliyim?");Database.addText("tr.lighthouseQuestionWhyEatCandiesSpeech","Çünkü şekerler sağlığa faydalıdır!");
Database.addText("tr.lighthouseQuestionCandyBox","Candy box nedir biliyor musunuz?");
Database.addText("tr.lighthouseQuestionCandyBoxSpeech","Dünyadaki bütün şekerleri içerdiği söylenen çok eski bir kutudur. Efsaneye göre kutuyu açmayı başaran her kimse o kadar fazla şekere sahip olur ki onun için her şey mümkündür.");
Database.addText("tr.lighthouseQuestionDragon","Buraya gelmemi ejderha söyledi çünkü şeker istiyorum.");
Database.addText("tr.lighthouseQuestionDragonSpeech","Hmm, anlıyorum... Yani, sana şekerleri direk veremem ama sana çok fazla şeker elde etmen için gerekli temel bir şey verebilirim. Vermeden önce sadece seni test etmem gerekiyor. Çünkü elimdeki şey herkese verilemez. Bu bulmacayı çöz ve senin olsun.");
Database.addText("tr.lighthouseFoundStone","Tebrikler! Testi geçtin ve taşı buldun. Bu çok kıymetli, ama sadece bunun gibi diğer üç taşı bulduktan sonra. İyi şanslar!");
Database.addText("tr.lighthouseFoundStoneAgain","İyi iş, bulmacayı bir kere daha yaptın. Bunu seviyorsun gibi görünüyor.");
Database.addText("tr.saveLocalSaveTitle","Tarayıcıyı kaydet");Database.addText("tr.saveLocalSaveWhy","Bu aygıtta ve tarayıcıda oynamaya devam etmek için kayıtları seçin.");
Database.addText("tr.saveLocalSaveWarning0","Tarayıcın HTML5i desteklemiyor gibi görünüyor.");
Database.addText("tr.saveLocalSaveWarning1","Yerel kayıt özelliğini kullanmak için tarayıcını güncellemelisin.");
Database.addText("tr.saveLocalSaveChooseSlot","Kayıt yeri seç :");Database.addText("tr.saveLocalSaveAutosaveEnabled","Otomatik kayıt aktif");
Database.addText("tr.saveLocalSaveChooseWhatToDo","Yapmak istediğini seç :");Database.addText("tr.saveLocalSaveSaveButton","Kaydet");
Database.addText("tr.saveLocalSaveAutosaveButton","Her 10 dakikada bir kaydet");Database.addText("tr.saveLocalSaveDisableAutosaveButton","Otomatik kaydı devre dışı bırak");
Database.addText("tr.saveFileSaveTitle","Metin kaydı");Database.addText("tr.saveFileSaveWhy0","Metin kaydını şunun için yap :");
Database.addText("tr.saveFileSaveWhy1","Oyuna başka bir tarayıcıda ya da aygıtta devam etmek istiyorsan");
Database.addText("tr.saveFileSaveWhy2","Kaydını başka birisiyle paylaşmak istiyorsan");
Database.addText("tr.saveFileSaveWhy3","Herhangi bir sebepten dolayı tarayıcı önbelleğini boşaltmak istiyorsan");
Database.addText("tr.saveFileSaveWhy4","(Yerel kayıtların silinecek)");Database.addText("tr.saveFileSaveButton","Geçerli oyunu metin olarak al");
Database.addText("tr.saveFileSaveWarning","Bu metni başka bir yere kopyala! (örneğin bir dosyaya)");
Database.addText("tr.saveLocalLoadTitle","Tarayıcıya yükle");Database.addText("tr.saveLocalLoadYouCan","Bu linkleri kullanarak yerel bir kayedı yükleyebilirsin:");
Database.addText("tr.saveLocalLoadThanksTo","HTML5 sağolsun,bu linkleri offline iken bile kullanabilmen lazım.");
Database.addText("tr.saveFileLoadTitle","Metin yükle");Database.addText("tr.saveFileLoadPaste","Kaydını aşağıya yapıştır, sonra Yükle tuşuna tıkla");
Database.addText("tr.saveFileLoadButton","Yükle");Database.addText("tr.mountainsText0","Dağlarda bir şeye rastladın!");
Database.addText("tr.mountainsText1","İlginç görünüyor. Belki işe yarayabilir.");
Database.addText("tr.mountainsTextButton","Dağlara tırmanıp şeyi al.");Database.addText("tr.mountainsTextAfter","Pogo çubuğu buldun! Envanterine eklendi.");
Database.addText("tr.secondHouseIntroSpeech","Merhaba, ben şeker tüccarıyım. Şekerler için herşeyi yaparım. Neye ihtiyacın var?");
Database.addText("tr.secondHouseLollipop1Speech","Bu limon aromalı lolipop. Benim favorim! Fiyatı 60 şeker ama buna değer.");
Database.addText("tr.secondHouseLollipop2Speech","Bu çilek aromalı lolipop. Tadı güzeldir. Kırmızı rengini seviyorum. Sadece 60 şeker!");
Database.addText("tr.secondHouseLollipop3Speech","Bu balkabağı aromalı lolipop. İddiaya girerim daha önce hiç denemedin! 60 şeker ver ve senin olsun.");
Database.addText("tr.secondHouseLollipopButtonText","Bu lolipopu al (60 şeker)");
Database.addText("tr.secondHouseMerchantHatSpeech","Sana şapkamı satardım, ama bilirsin, çok değerlidir. Bunun için bana çok fazla şeker vermen lazım. Diyelim ki fiyatı 1 milyon şeker olsun. Adil, değil mi?");
Database.addText("tr.secondHouseMerchantHatButtonText","Tüccarın şapkasını al (1 000 000 şeker)");
Database.addText("tr.secondHouseTimeRingSpeech","Bu bir zaman yüzüğü. Bir şekilde büyülü bir yüzük. Tehlike içindeyken zamanı yavaşlatmana yarar.");
Database.addText("tr.secondHouseTimeRingButtonText","Zaman yüzüğünü al (500 şeker)");
Database.addText("tr.secondHouseLeatherGlovesSpeech","Bu deri eldivenler deve derisinden yapılma, yüksek kalitededir. Depomda bunlardan çok var, bu yüzden bu kadar ucuzlar : sadece 300 şeker!");
Database.addText("tr.secondHouseLeatherBootsButtonText","Bir çift deri bot al  (300 şeker)");
Database.addText("tr.secondHouseLeatherBootsSpeech","Bu yüksek kalite deri botlar, deve derisinden yapılmalar, ayaklarını sıcak tutarlar.");
Database.addText("tr.secondHouseLeatherGlovesButtonText","Bir çift deri eldiven al (300 şeker)");
Database.addText("tr.secondHouseChocolateBarSpeech","Bu çikolata. Ne için kullanıldığını bilmiyorum ama baya nadirler, ki fiyatını açıklıyor: 800 şeker ver ve senin olsun!");
Database.addText("tr.secondHouseChocolateBarButtonText","Çikolata al (800 şeker)");
Database.addText("tr.outsideTheHoleButton","Yerdeki büyük deliğe atla");Database.addText("tr.theCaveExitText0","Sonunda mğaradanın çıkışına ulaştın.");
Database.addText("tr.theCaveExitText1","Dışarıda büyük bir orman görüyorsun.");Database.addText("tr.theCaveExitButtonText","Mağaradan çık");
Database.addText("tr.theCaveFirstSentenceWentStraight","Düz gittin.");Database.addText("tr.theCaveFirstSentenceWentLeft","Soldaki yolu seçtin.");
Database.addText("tr.theCaveFirstSentenceWentRight","Sağdaki yolu seçtin.");Database.addText("tr.theCaveFirstSentenceYouAre","Mağaradasın. Önünde üç tane yol var.");
Database.addText("tr.theCavePattern_ArrowsToHeartPlugSeeStrangePlug","Yerde, önünde ilginç bir şeye dikkat ettin.");
Database.addText("tr.theCavePattern_ChocolateBarNowSeeChocolateBar","Önünde bir tane çikolata var.");
Database.addText("tr.theCavePattern_TreasureMapSentence","Yerdeki küçük taşların garip bir şekilde düzenlendiğini görüyorsun.");
Database.addText("tr.theCavePattern_MonkeyWizardSentence","Çıplak büyücü maymun karşına çıktı.");
Database.addText("tr.theCavePattern_MonkeyWizardButton","Meydan oku");Database.addText("tr.theCavePattern_OctopusKingSentence","Ahtapot Kral karşına çıktı. Tehlikeli görünüyor.");
Database.addText("tr.theCavePattern_OctopusKingButton","Meydan oku");Database.addText("tr.fortressInsideText0","Çöl hisarının içindesin.");
Database.addText("tr.fortressInsideText1","Üç kapıdan birini seçebilirsin.");Database.addText("tr.fortressInsideText2","Her biri, seni sonunda hazine olan büyük bir odaya götürüyor.");
Database.addText("tr.fortressInsideEnterRoom1","İlk odaya gir");Database.addText("tr.fortressInsideEnterRoom2","İkinci odaya gir");
Database.addText("tr.fortressInsideEnterRoom3","Üçüncü odaya gir");Database.addText("tr.treasureButtonDig","Kaz");
Database.addText("tr.treasureButtonYouFound","Üç tane çikolata buldun!");Database.addText("tr.sorceressHutHello","Merhaba, ben büyücüyüm. Sana sihir hakkında bir iki şey öğretebilirim. Sana ilginç şeyler de verebilirim, ya da sana büyüler veririm. Ama her şeyin bir ücreti var! Ve bu ücret de lolipoplar. Çok fazla.");
Database.addText("tr.sorceressHutClickedGrimoire","Bu amatörler için büyü kitabı. Görevlerde bunu taşıyarak basit ama kullanışlı büyüler yapabilirsin. Buna ihtiyacın var! Sadece 5 000 lolipop.");
Database.addText("tr.sorceressHutBuyGrimoireButton","Bu kitabı al (5 000 lolipop)");
Database.addText("tr.sorceressHutBuyGrimoireSpeech","Aldığın için teşekkürler! Bu kitapla üç tane büyü yapabileceksin. İyi şanslar!");
Database.addText("tr.sorceressHutClickedGrimoire2","Bu bir ileri büyü kitabı. Görevlerde bunu taşıyarak iki tane ileri büyü yapabilirsin. Bizzat kendim yazdım, hiç kolay olmadı. 20 000 lolipop adil bir fiyat olur.");
Database.addText("tr.sorceressHutBuyGrimoire2Button","Bu kitabı al (20 000 lolipop)");
Database.addText("tr.sorceressHutBuyGrimoire2Speech","Aldığın için teşekkürler! Bu kitapla üç tane büyü yapabileceksin. Dikkatli kullan!");
Database.addText("tr.sorceressHutClickedCauldron","Bu benim kazanım. Benim büyülü iksirler yapmamı sağlıyor. Sana satardım, ama bu çok değerli... sana 100 000 lolipopa patlar.");
Database.addText("tr.sorceressHutBuyCauldronButton","Kazanı al (100 000 lolipop)");
Database.addText("tr.sorceressHutBuyCauldronSpeech","Çok teşekkürler! 100 000 lolipopum oldu! Ayrıca sana iksir yapma rehberini verdim. İşine yarayacaktır.");
Database.addText("tr.sorceressHutClickedHat","Güzel bir şapkam var, evet! Ama cidden sana bunu satamam. Çünkü çoook değerli. Cidden, olmaz. Israr etme. Hayır. hayırhayırhayır bunu yapmamalıyım. Amaan, neyse, satabilirim ama fiyatı 1 000 000 000 lolipop olur. Muhtemelen bu kadarını zaten ödeyemezsin.");
Database.addText("tr.sorceressHutBuyHatButton","Buy the hat (1 000 000 000 lollipops)");
Database.addText("tr.sorceressHutBuyHatSpeech","Bir milyar lolipopum olduuuuuu! Ama artık şapkam yok.. ama bir milyar lolipop, vay! Sonuna kadar değdi.");
Database.addText("tr.cauldronPreviousPageButton","Önceki sayfa");Database.addText("tr.cauldronNextPageButton","Sonraki sayfa");
Database.addText("tr.cauldronWhatYouWantToPut","Kazana koymak istediklerin");Database.addText("tr.cauldronWhatIsIn","Kazanın içindekiler");
Database.addText("tr.cauldronWhatYouCanDo","Bunlarla yapabileceklerin");Database.addText("tr.castleBigRoomComment","Büyük bir oda");
Database.addText("tr.castleARoomComment","Bir oda");Database.addText("tr.castleADarkRoomComment","Karanlık bir oda");
Database.addText("tr.castleCastleEntranceComment","Kalenin girişi");Database.addText("tr.castleTowerEntranceComment","Kulenin girişi");
Database.addText("tr.castleNougatMonsterComment","Dev nuga canavarına saldır");Database.addText("tr.castleGuardsComment","Gardiyanlara saldır");
Database.addText("tr.castleStairsComment","Merdivenler");Database.addText("tr.buttonBackToTheCastle","Kaleye geri dön");
Database.addText("tr.castleBigRoomHovenSpeechSad","Merhaba! Ben çok eski bir ekmek fırınıyım. Önceden tonlarca güzel hamurişleri pişirirdim, ama artık kimse beni kullanmıyor. Belki... belki sen bana yardım edebilirsin. Sadece senden biraz tatlı almama izin ver. Telaşlanma, pişman olmayacaksın! Bana güvenebilirsin.");
Database.addText("tr.castleBigRoomHovenNotEnough","Oh... sende yeteri kadar tatlı yok, ben birşey yapamam. Ben sadece işe yaramazım. Ben işe yaramaz ekmek fırınıyım, beni böyle anmalısın.");
Database.addText("tr.castleBigRoomHovenSpeechMadePainAuChocolat","Oley! Çok teşekkürler! 100 şeker ve bir çikolata kullandım ve sana... pain au chocolat yaptım! Benim favori hamurişimdir, umarım sen de seversin!");
Database.addText("tr.castleBigRoomHovenSpeechHappy","Hey! eğer başka bir hamurişi pişirmemi istersen sadece söyle! Seve seve yardımcı olurum.");
Database.addText("tr.castleBigRoomHovenSpeechHappyNotEnough","Oh, sende yeteri kadar tatlı yok, maalesef. 100 şekere ve bir çikolataya ihtiyacım var. Bunları bulduğunda geri gel!");
Database.addText("tr.castleBigRoomHovenLetHovenTakeButton","Fırının almak istediği tatlıları almasına izin ver");
Database.addText("tr.castleBigRoomHovenThanks","Teşekkürler, fırın!");Database.addText("tr.dragonStopTickling","Hey, sen! Beni gıdıklamaktan vazgeç lütfen.");
Database.addText("tr.dragonStopTicklingButton","Uh, oh, üzgünüm, Ben de sana saldırdığımı düşünüyordum.");
Database.addText("tr.dragonTalking","Ben bir ejderhayım ve bursaı da benim kalem. Girmeyi başardığını görüyorum, çok cesur olmalısın... Senin gibi birine seve seve yardımcı olurum. Ne ile ilgileniyorsun?");
Database.addText("tr.dragonTalkingChallengeButton","Meydan okuma");Database.addText("tr.dragonTalkingFameButton","Ün");
Database.addText("tr.dragonTalkingCandiesButton","Şekerler");Database.addText("tr.dragonTalkingChallengeSpeech","Demek meydan okumak istiyorsun? Bence cehennemin kendisine gitmelisin, şeytan zorlu bir rakip olarak bilinir. Sırtımı atla ve seni götüreyim!");
Database.addText("tr.dragonTalkingFameSpeech","Ünlü olmanın en iyi yolu geliştiricinin kendisiyle yüzleşmektir. Nerede yaşadığını biliyorum ve seni oraya götürebilirim. Ama hazırlıklı ol, bu hiç kolay olmayacak.");
Database.addText("tr.dragonTalkingCandiesSpeech","Eninde sonunda, hepimizin istediği şey şekerler, değil mi? Sanırım bir arkadaşım bu konuda sana yardımcı olabilir. Onu kolayca farkedebilirsin, sadece tek gözü var. Ona beni tanıdığını söyle.");
Database.addText("tr.dragonTalkingChallengeAnswer","O zaman hadi gidelim!");Database.addText("tr.dragonTalkingFameAnswer","Ben hazırım.");
Database.addText("tr.dragonTalkingCandiesAnswer","Tamam, teşekkürler!");Database.addText("tr.buttonBackToCastle","Kaleye geri dön");
Database.addText("tr.talkingCandySpeechNoBox","Hey! Ben konuşan şeker. Neredeyse oyunu kazandın. Sadece candy box'ı bulman lazım. Köyün dışındaki evin içinde. Bu son adım!");
Database.addText("tr.talkingCandySpeech1","Hey! Ben konuşan şeker. Tebrikler, oyunu kazandın! ISenin için Candy box'ı açacağım, ödülün bu. Devam edeyim mi?");
Database.addText("tr.talkingCandySpeech2","Tamamdır! Artık girebilirsin. Umarım oyunu sevmişsindir :)");
Database.addText("tr.talkingCandyButton","Evet!!");Database.addText("tr.lighthousePuzzleResetButton","Reset");
Database.addText("zh.mapVillageComment","村庄");Database.addText("zh.mapFortressComment","沙漠要塞");
Database.addText("zh.mapATreeComment","一棵树");Database.addText("zh.mapTheDesertComment","沙漠");
Database.addText("zh.mapWishingWellComment","许愿井");Database.addText("zh.mapLonelyHouseComment","一幢孤宅");
Database.addText("zh.mapForestComment","森林");Database.addText("zh.mapCastleEntranceComment","城堡入口");
Database.addText("zh.mapCastleComment","城堡");Database.addText("zh.mapDragonComment","巨龙");
Database.addText("zh.candyBoxEatCandiesButton","吃光糖果");Database.addText("zh.candyBoxThrowCandiesButton","把十颗糖果扔在地上");
Database.addText("zh.mapVillageAHouseComment","一栋房屋");Database.addText("zh.mapVillageForgeComment","铁匠铺");
Database.addText("zh.buttonBackToTheMap","返回地图");Database.addText("zh.mapSorceressHutComment","女巫的小屋");
Database.addText("zh.buttonBackToTheVillage","返回村庄");Database.addText("zh.mapATreeIntroducti
