(this.webpackJsonpgermanic=this.webpackJsonpgermanic||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('{"names":{"female":[{"start":["B","H","K","M"],"middle":["ath","er","ils","irn","old"],"end":["a","en","i"]},{"start":["Br","Fr","Gr","Kr","R"],"middle":["enn","et","id","if","on"],"end":["a","en","i"]},{"start":["Ad","Agn","Id","Ils","Ing","Olg"],"end":["a","i"]}],"male":[{"start":["B","Gr","H","Kl","M","R"],"middle":["ad","eb","ein","er","ick","oll","ost","unth"],"end":["acht","arl","ert","gar","ulf"]},{"start":["Arm","Er","Ist","Ol"],"end":["af","an","atz","ich"]}]},"surnames":[{"start":["Gr","Kr","L","N","Pf","R","Sch","Schr","Tr"],"middle":["eid","en","eub","ind","ing","ock","on","unk"],"end":["eck","el","en","er","ig","olt","osch","urtz"]},{"start":["Ack","And","Empf","Esch","Olm"],"end":["el","en","er"]}],"cities":[{"start":["D","Kr","L","M","N","Pf","R","Schl","Tr","W"],"middle":["all","ans","ast","echt","eg","en","ess","or","unch"],"end":["atz","burg","en","stein"]}]}')},,,,,,,,,,,,,,,,function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),A=n(4),i=n.n(A),T=(n(21),n(11)),E=n(3),o=n(2),c=n(14),s="PARTY_SET_PLAYER_CHARACTER",l="PARTY_SET_PLAYER_NAME",R="PARTY_SET_PLAYER_CUSTOMIZATION",C=function(e,t){var n;switch(t.type){case s:return(n=Object(E.a)({},e)).party.player=t.player,n;case l:return(n=Object(E.a)({},e)).party.player.name=t.name,n.party.player.surname=t.surname,n;case R:return(n=Object(E.a)({},e)).party.player.customization=t.customization,n;default:return e}};var I=n(0),u=Object(a.createContext)(),_=u.Provider,S=function(e){e.value;var t,n=Object(c.a)(e,["value"]),r=(t={party:{}},Object(a.useReducer)(C,t)),A=Object(o.a)(r,2),i=A[0],T=A[1];return Object(I.jsx)(_,Object(E.a)({value:[i,T]},n))},d=function(){return Object(a.useContext)(u)},h=(n(23),[{language:"EN-US:",strings:[["SEX_MALE","Male"],["SEX_MALE_ABBR","M"],["SEX_MALE_DESC","Boys have a penis."],["SEX_FEMALE","Female"],["SEX_FEMALE_ABBR","F"],["SEX_FEMALE_DESC","Girls have a vagina."],["ATTRIBUTE_CHARISMA","Charisma"],["ATTRIBUTE_CHARISMA_ABBR","Cha"],["ATTRIBUTE_CHARISMA_DESC","Force of Personality."],["ATTRIBUTE_ENDURANCE","Endurance"],["ATTRIBUTE_ENDURANCE_ABBR","End"],["ATTRIBUTE_ENDURANCE_DESC","Ability to withstand hardship."],["ATTRIBUTE_FITNESS","Fitness"],["ATTRIBUTE_FITNESS_ABBR","Fit"],["ATTRIBUTE_FITNESS_DESC","Physical Aptitude."],["ATTRIBUTE_INTELLIGENCE","Intelligence"],["ATTRIBUTE_INTELLIGENCE_ABBR","Int"],["ATTRIBUTE_INTELLIGENCE_DESC","Mental acuity and scholarly pursuits."],["ATTRIBUTE_PERCEPTION","Perception"],["ATTRIBUTE_PERCEPTION_ABBR","Per"],["ATTRIBUTE_PERCEPTION_DESC","Detecting or deducing information."],["ATTRIBUTE_QUICKNESS","Quickness"],["ATTRIBUTE_QUICKNESS_ABBR","Quk"],["ATTRIBUTE_QUICKNESS_DESC","Reaction time and hand-eye coordination."],["SKILL_ALCHEMY","Alchemy"],["SKILL_ALCHEMY_ABBR","Alc"],["SKILL_ALCHEMY_DESC","(Per) Mixing of formulaic compounds for wondrous effects."],["SKILL_APPRAISE","Appraise"],["SKILL_APPRAISE_ABBR","App"],["SKILL_APPRAISE_DESC","(Per) Determining the value of items."],["SKILL_ARTIFICE","Artifice"],["SKILL_ARTIFICE_ABBR","Art"],["SKILL_ARTIFICE_DESC","(Quk) Performing minute tasks with one's hands."],["SKILL_LITERACY","Literacy"],["SKILL_LITERACY_ABBR","Lit"],["SKILL_LITERACY_DESC","(Int) Reading and writing."],["SKILL_MELEE","Melee"],["SKILL_MELEE_ABBR","Mle"],["SKILL_MELEE_DESC","(Fit) Proficiency in close combat."],["SKILL_PARRY","Parry"],["SKILL_PARRY_ABBR","Pry"],["SKILL_PARRY_DESC","(End) Defending against attacks."],["SKILL_PERSUASION","Persuasion"],["SKILL_PERSUASION_ABBR","Prs"],["SKILL_PERSUASION_DESC","(Cha) Convincing others."],["SKILL_RANGED","Ranged"],["SKILL_RANGED_ABBR","Rng"],["SKILL_RANGED_DESC","(Quk) Proficiency with ranged weapons."],["SKILL_RELIGION","Religion"],["SKILL_RELIGION_ABBR","Rel"],["SKILL_RELIGION_DESC","(Int) Learning the intricacies of faith."],["SKILL_RIDE","Ride"],["SKILL_RIDE_ABBR","Rid"],["SKILL_RIDE_DESC","(Quk) Controlling a mount."],["SKILL_STEALTH","Stealth"],["SKILL_STEALTH_ABBR","Stl"],["SKILL_STEALTH_DESC","(Quk) Avoiding detection"],["SKILL_WOODCRAFT","Woodcraft"],["SKILL_WOODCRAFT_ABBR","WdC"],["SKILL_WOODCRAFT_DESC","(Per) Surviving in the wilderness."],["CHARACTER_FAMILY_MERCHANT","Merchants"],["CHARACTER_FAMILY_MERCHANT_DESC","Cosmopolitan and well-to-do."],["CHARACTER_FAMILY_NOBILITY","Nobility"],["CHARACTER_FAMILY_NOBILITY_DESC","Highborn and well-educated."],["CHARACTER_FAMILY_PEASANT","Peasants"],["CHARACTER_FAMILY_PEASANT_DESC","Commoners accustomed to rough country living."],["CHARACTER_FAMILY_TOWNSFOLK","Townsfolk"],["CHARACTER_FAMILY_TOWNSFOLK_DESC","Commoners who hail from a city or town."],["CHARACTER_FAMILY_TRADESMEN","Tradesmen"],["CHARACTER_FAMILY_TRADESMEN_DESC","Comfortable life as the child of a smith or artisan."],["CHARACTER_TEMPERAMENT_CHOLERIC","Choleric"],["CHARACTER_TEMPERAMENT_CHOLERIC_DESC","Impulsive and inspiring."],["CHARACTER_TEMPERAMENT_MELANCHOLIC","Melancholic"],["CHARACTER_TEMPERAMENT_MELANCHOLIC_DESC","Sensitive and diligent."],["CHARACTER_TEMPERAMENT_PHLEGMATIC","Phlegmatic"],["CHARACTER_TEMPERAMENT_PHLEGMATIC_DESC","Steadfast and caring."],["CHARACTER_TEMPERAMENT_SANGUINE","Sanguine"],["CHARACTER_TEMPERAMENT_SANGUINE_DESC","Outgoing and artistic."],["CHARACTER_BACKGROUND_APPRENTICE","Apprentice"],["CHARACTER_BACKGROUND_APPRENTICE_DESC","Learning a trade such as smithing."],["CHARACTER_BACKGROUND_APOTHECARY","Apothecary"],["CHARACTER_BACKGROUND_APOTHECARY_DESC","Specialist in medicinal concoctions."],["CHARACTER_BACKGROUND_BANDIT","Bandit"],["CHARACTER_BACKGROUND_BANDIT_DESC","A criminal who takes money by threat of force."],["CHARACTER_BACKGROUND_COURTIER","Courtier"],["CHARACTER_BACKGROUND_COURTIER_DESC","Accustomed to a leisurely life of nobility."],["CHARACTER_BACKGROUND_FARMER","Farmer"],["CHARACTER_BACKGROUND_FARMER_DESC","Growing crops and tending livestock."],["CHARACTER_BACKGROUND_HERMIT","Hermit"],["CHARACTER_BACKGROUND_HERMIT_DESC","Living a quiet, isolated life."],["CHARACTER_BACKGROUND_HUNTER","Hunter"],["CHARACTER_BACKGROUND_HUNTER_DESC","Stalking and killing animals for meat and fur."],["CHARACTER_BACKGROUND_LABORER","Laborer"],["CHARACTER_BACKGROUND_LABORER_DESC","Menial, arduous employment."],["CHARACTER_BACKGROUND_MILITARY","Military Recruit"],["CHARACTER_BACKGROUND_MILITARY_DESC","A soldier or guardsman."],["CHARACTER_BACKGROUND_RELIGIOUS","Religious Initiate"],["CHARACTER_BACKGROUND_RELIGIOUS_DESC","A neophyte in a religious order."],["CHARACTER_BACKGROUND_PROSTITUTE","Prostitute"],["CHARACTER_BACKGROUND_PROSTITUTE_DESC","The oldest profession."],["CHARACTER_BACKGROUND_SEAMSTRESS","Seamstress"],["CHARACTER_BACKGROUND_SEAMSTRESS_DESC","Making and mending clothing and other fabrics."],["CHARACTER_BACKGROUND_SQUIRE","Squire"],["CHARACTER_BACKGROUND_SQUIRE_DESC","Training to one day become a knight."],["CHARACTER_BACKGROUND_STUDENT","Student"],["CHARACTER_BACKGROUND_STUDENT_DESC","Training to become a scholar of note."],["CHARACTER_BACKGROUND_SWINDLER","Swindler"],["CHARACTER_BACKGROUND_SWINDLER_DESC","A scoundrel who cheats people of their money."],["CHARACTER_BACKGROUND_THIEF","Thief"],["CHARACTER_BACKGROUND_THIEF_DESC","A burglar or cutpurse."],["CHARACTER_BACKGROUND_TRADER","Trader"],["CHARACTER_BACKGROUND_TRADER_DESC","A shopkeep or traveling trader."],["CHARACTER_BACKGROUND_VAGABOND","Vagabond"],["CHARACTER_BACKGROUND_VAGABOND_DESC","A drifter."],["MAIN_START_NEW_GAME","Start New Game"],["MENU_CREATE_CHARACTER","Create Character"],["BUTTON_START_GAME","Start the Adventure!"],["BUTTON_CONTINUE","Continue"],["BUTTON_BACK","Back"],["BUTTON_RANDOM","Random"],["CHARACTER_SEX","Sex"],["CHARACTER_UPBRINGING","Upbringing"],["CHARACTER_TEMPERAMENT","Temperament"],["CHARACTER_OCCUPATION","Occupation"],["CHARACTER_ATTRIBUTES","Attributes"],["CHARACTER_ATTRIBUTES_DESC","Attributes are determined by sex, upbringing, occupation, and temperament."],["CHARACTER_SKILLS","Skills"],["CHARACTER_SKILLS_DESC","Base skill is Attr/5, with bonuses from upbringing, occupation, and temperament."],["CHARACTER_NAME","Name"],["CHARACTER_SURNAME","Surname"],["CHARACTER_NAME_OF","of {CITY}"],["CUSTOMIZE_SKIN","Skin"],["CUSTOMIZE_EYES","Eyes"],["CUSTOMIZE_HAIR_STYLE","Hair"],["CUSTOMIZE_HAIR_FACIAL","Beard"],["CUSTOMIZE_HAIR_COLOR","Color"]]}]);var O=function(e){var t=(h.find((function(e){return"EN-US"===e.language}))||h[0]).strings.find((function(t){return t[0]===e}))||h[0].strings.find((function(t){return t[0]===e}));return t?t[1]:e};n(24);var L=function(e){var t=e.transitionCallback;return Object(I.jsxs)("div",{id:"mainMenu",children:[Object(I.jsx)("h1",{children:"Germanic"}),Object(I.jsx)("div",{id:"mainList",children:Object(I.jsx)("div",{className:"cursorGlow",onClick:function(){t(1)},children:O("MAIN_START_NEW_GAME")})})]})},N=n(36);n(25);var f=function(e){var t=e.MyComponent,n=e.height,r=e.width,A=e.delay,i=e.props,T=Object(a.useRef)(null),E=Object(a.useState)(void 0),c=Object(o.a)(E,2),s=c[0],l=c[1],R=Object(a.useState)(!A),C=Object(o.a)(R,2),u=C[0],_=C[1],S={maxHeight:n,width:r};return!s&&A&&l(setTimeout((function(){_(!0)}),A)),Object(a.useEffect)((function(){return function(){clearTimeout(s)}}),[s]),Object(I.jsx)(N.a,{nodeRef:T,in:u,appear:u,timeout:500,classNames:"show",children:Object(I.jsx)("div",{className:"menuScroll",style:S,ref:T,children:Object(I.jsx)(t,{props:i,closeScroll:function(){_(!1)}})})})},b=n(9),B=n(10),m={characterAttributeList:["ATTRIBUTE_CHARISMA","ATTRIBUTE_ENDURANCE","ATTRIBUTE_FITNESS","ATTRIBUTE_INTELLIGENCE","ATTRIBUTE_PERCEPTION","ATTRIBUTE_QUICKNESS"],characterSkillList:{SKILL_ALCHEMY:{governed:"ATTRIBUTE_PERCEPTION"},SKILL_APPRAISE:{governed:"ATTRIBUTE_PERCEPTION"},SKILL_ARTIFICE:{governed:"ATTRIBUTE_QUICKNESS"},SKILL_LITERACY:{governed:"ATTRIBUTE_INTELLIGENCE"},SKILL_MELEE:{governed:"ATTRIBUTE_FITNESS"},SKILL_PARRY:{governed:"ATTRIBUTE_ENDURANCE"},SKILL_PERSUASION:{governed:"ATTRIBUTE_CHARISMA"},SKILL_RELIGION:{governed:"ATTRIBUTE_INTELLIGENCE"},SKILL_RANGED:{governed:"ATTRIBUTE_QUICKNESS"},SKILL_RIDE:{governed:"ATTRIBUTE_QUICKNESS"},SKILL_STEALTH:{governed:"ATTRIBUTE_QUICKNESS"},SKILL_WOODCRAFT:{governed:"ATTRIBUTE_PERCEPTION"}},characterSexTemplate:{SEX_FEMALE:{attributes:{ATTRIBUTE_CHARISMA:5,ATTRIBUTE_ENDURANCE:5,ATTRIBUTE_FITNESS:-10}},SEX_MALE:{attributes:{},isMale:!0}},characterFamilyTemplate:{CHARACTER_FAMILY_MERCHANT:{attributes:{ATTRIBUTE_CHARISMA:10,ATTRIBUTE_FITNESS:-10,ATTRIBUTE_INTELLIGENCE:5,ATTRIBUTE_QUICKNESS:-5},skillBonus:"SKILL_APPRAISE"},CHARACTER_FAMILY_NOBILITY:{attributes:{ATTRIBUTE_CHARISMA:5,ATTRIBUTE_ENDURANCE:-5,ATTRIBUTE_INTELLIGENCE:5,ATTRIBUTE_QUICKNESS:-5},skillBonus:"SKILL_LITERACY"},CHARACTER_FAMILY_PEASANT:{attributes:{ATTRIBUTE_CHARISMA:-5,ATTRIBUTE_ENDURANCE:10,ATTRIBUTE_FITNESS:5,ATTRIBUTE_INTELLIGENCE:-10},skillBonus:"SKILL_WOODCRAFT"},CHARACTER_FAMILY_TOWNSFOLK:{attributes:{ATTRIBUTE_CHARISMA:5,ATTRIBUTE_FITNESS:-5},skillBonus:"SKILL_PERSUASION"},CHARACTER_FAMILY_TRADESMEN:{attributes:{},skillBonus:"SKILL_ARTIFICE"}},characterBackgroundTemplate:{CHARACTER_BACKGROUND_APOTHECARY:{attributes:{ATTRIBUTE_FITNESS:-5,ATTRIBUTE_INTELLIGENCE:5,ATTRIBUTE_PERCEPTION:5,ATTRIBUTE_QUICKNESS:-5},skillBonus:"SKILL_ALCHEMY"},CHARACTER_BACKGROUND_APPRENTICE:{attributes:{ATTRIBUTE_PERCEPTION:5,ATTRIBUTE_QUICKNESS:-5},skillBonus:"SKILL_APPRAISE"},CHARACTER_BACKGROUND_BANDIT:{attributes:{ATTRIBUTE_CHARISMA:-5,ATTRIBUTE_FITNESS:5,ATTRIBUTE_INTELLIGENCE:-5,ATTRIBUTE_PERCEPTION:5},skillBonus:"SKILL_STEALTH",requirements:{commoner:!0}},CHARACTER_BACKGROUND_COURTIER:{attributes:{ATTRIBUTE_CHARISMA:5,ATTRIBUTE_ENDURANCE:-5,ATTRIBUTE_FITNESS:-5,ATTRIBUTE_PERCEPTION:5},skillBonus:"SKILL_PERSUASION",requirements:{noble:!0}},CHARACTER_BACKGROUND_FARMER:{attributes:{ATTRIBUTE_ENDURANCE:5,ATTRIBUTE_INTELLIGENCE:-5},skillBonus:"SKILL_RIDING",requirements:{commoner:!0}},CHARACTER_BACKGROUND_HERMIT:{attributes:{ATTRIBUTE_CHARISMA:-5,ATTRIBUTE_ENDURANCE:5},skillBonus:"SKILL_WOODCRAFT"},CHARACTER_BACKGROUND_HUNTER:{attributes:{ATTRIBUTE_CHARISMA:-5,ATTRIBUTE_INTELLIGENCE:-5,ATTRIBUTE_PERCEPTION:5,ATTRIBUTE_QUICKNESS:5},skillBonus:"SKILL_WOODCRAFT"},CHARACTER_BACKGROUND_LABORER:{attributes:{ATTRIBUTE_ENDURANCE:5,ATTRIBUTE_FITNESS:5,ATTRIBUTE_INTELLIGENCE:-5,ATTRIBUTE_QUICKNESS:-5},skillBonus:"SKILL_MELEE",requirements:{commoner:!0}},CHARACTER_BACKGROUND_MILITARY:{attributes:{ATTRIBUTE_CHARISMA:-5,ATTRIBUTE_ENDURANCE:5,ATTRIBUTE_FITNESS:5,ATTRIBUTE_INTELLIGENCE:-5},skillBonus:"SKILL_PARRY",requirements:{commoner:!0,male:!0}},CHARACTER_BACKGROUND_PROSTITUTE:{attributes:{ATTRIBUTE_CHARISMA:5,ATTRIBUTE_INTELLIGENCE:-5},skillBonus:"SKILL_PERSUASION",requirements:{commoner:!0,female:!0}},CHARACTER_BACKGROUND_RELIGIOUS:{attributes:{ATTRIBUTE_ENDURANCE:-5,ATTRIBUTE_FITNESS:-5,ATTRIBUTE_INTELLIGENCE:10},skillBonus:"SKILL_RELIGION"},CHARACTER_BACKGROUND_SEAMSTRESS:{attributes:{ATTRIBUTE_ENDURANCE:5,ATTRIBUTE_INTELLIGENCE:-5},skillBonus:"SKILL_ARTIFICE",requirements:{female:!0}},CHARACTER_BACKGROUND_SQUIRE:{attributes:{ATTRIBUTE_FITNESS:5,ATTRIBUTE_PERCEPTION:-5},skillBonus:"SKILL_RIDING",requirements:{male:!0,noble:!0}},CHARACTER_BACKGROUND_STUDENT:{attributes:{ATTRIBUTE_FITNESS:-5,ATTRIBUTE_INTELLIGENCE:5},skillBonus:"SKILL_LITERACY"},CHARACTER_BACKGROUND_SWINDLER:{attributes:{ATTRIBUTE_CHARISMA:5,ATTRIBUTE_ENDURANCE:-5,ATTRIBUTE_FITNESS:-5,ATTRIBUTE_QUICKNESS:-5},skillBonus:"SKILL_PERSUASION"},CHARACTER_BACKGROUND_THIEF:{attributes:{ATTRIBUTE_ENDURANCE:-5,ATTRIBUTE_INTELLIGENCE:-5,ATTRIBUTE_PERCEPTION:5,ATTRIBUTE_QUICKNESS:5},skillBonus:"SKILL_STEALTH",requirements:{commoner:!0}},CHARACTER_BACKGROUND_TRADER:{attributes:{ATTRIBUTE_CHARISMA:5,ATTRIBUTE_QUICKNESS:-5},skillBonus:"SKILL_APPRAISE"},CHARACTER_BACKGROUND_VAGABOND:{attributes:{ATTRIBUTE_ENDURANCE:5,ATTRIBUTE_INTELLIGENCE:-5},skillBonus:"SKILL_WOODCRAFT"}},characterTemperamentTemplate:{CHARACTER_TEMPERAMENT_CHOLERIC:{attributes:{ATTRIBUTE_CHARISMA:5,ATTRIBUTE_PERCEPTION:-5},skillBonus:"SKILL_PERSUASION"},CHARACTER_TEMPERAMENT_MELANCHOLIC:{attributes:{ATTRIBUTE_CHARISMA:-5,ATTRIBUTE_INTELLIGENCE:5},skillBonus:"SKILL_LITERACY"},CHARACTER_TEMPERAMENT_PHLEGMATIC:{attributes:{},skillBonus:"SKILL_ALCHEMY"},CHARACTER_TEMPERAMENT_SANGUINE:{attributes:{ATTRIBUTE_CHARISMA:5,ATTRIBUTE_INTELLIGENCE:-5},skillBonus:"SKILL_APPRAISE"}}},U=function(){function e(t){var n=this;Object(b.a)(this,e),t?Object.keys(t).forEach((function(e){n[e]=t[e]})):(this.name="",this.sex="SEX_MALE",this.family="CHARACTER_FAMILY_PEASANT",this.skills={}),this.setAllStartingSkills()}return Object(B.a)(e,[{key:"getAttribute",value:function(e){var t=50;if(this.sex){var n=m.characterSexTemplate[this.sex];n.attributes[e]&&(t+=n.attributes[e])}if(this.family){var a=m.characterFamilyTemplate[this.family];a.attributes[e]&&(t+=a.attributes[e])}if(this.background){var r=m.characterBackgroundTemplate[this.background];r.attributes[e]&&(t+=r.attributes[e])}if(this.temperament){var A=m.characterTemperamentTemplate[this.temperament];A.attributes[e]&&(t+=A.attributes[e])}return t}},{key:"getSkillLevel",value:function(e){var t=this.skills[e];if(!t)return 0;for(var n=0;t>=1<<n;)n++;return n-1}},{key:"setStartingSkillLevel",value:function(e){var t=m.characterSkillList[e];if(!t)return-1;var n=Math.floor(this.getAttribute(t.governed)/5);this.family&&(m.characterFamilyTemplate[this.family].skillBonus===e&&n++);this.background&&(m.characterBackgroundTemplate[this.background].skillBonus===e&&n++);this.temperament&&(m.characterTemperamentTemplate[this.temperament].skillBonus===e&&n++);this.skills[e]=1<<n}},{key:"setAllStartingSkills",value:function(){var e=this;Object.keys(m.characterSkillList).forEach((function(t){e.setStartingSkillLevel(t)}))}}]),e}();n(28);var g=function(e){var t=e.height,n=e.width,r=e.keyList,A=e.defaultValue,i=e.changeCallback,T=e.hoverCallback,E=Object(a.useState)(A),c=Object(o.a)(E,2),s=c[0],l=c[1],R={height:t,width:n};return Object(I.jsx)("div",{className:"listSelect",style:R,children:r.map((function(e){return Object(I.jsx)("div",{className:A===e?" selected":"cursorActive",onClick:function(){!function(e){e!==s&&(l(e),i(e))}(e)},onMouseEnter:function(){!function(e){T&&T(e)}(e)},children:O(e)},e)}))})};n(29);var j=function(e){var t=e.character,n=e.tooltipCallback,a=function(e){n&&n(e)};return Object(I.jsxs)("div",{className:"attributeDisplay",children:[Object(I.jsx)("h2",{onMouseEnter:function(){a("CHARACTER_ATTRIBUTES")},children:O("CHARACTER_ATTRIBUTES")}),m.characterAttributeList.map((function(e){return Object(I.jsxs)("div",{onMouseEnter:function(){a(e)},children:[Object(I.jsx)("div",{children:O(e)}),Object(I.jsx)("div",{children:t.getAttribute(e)})]},e)}))]})};n(30);var M=function(e){var t=e.character,n=e.tooltipCallback;return Object(I.jsxs)("div",{className:"skillDisplay",children:[Object(I.jsx)("h2",{onMouseEnter:function(){var e;e="CHARACTER_SKILLS",n&&n(e)},children:O("CHARACTER_SKILLS")}),Object.keys(m.characterSkillList).map((function(e){return Object(I.jsxs)("div",{onMouseEnter:function(){n(e)},children:[Object(I.jsx)("div",{children:O(e)}),Object(I.jsx)("div",{children:t.getSkillLevel(e)})]},e)}))]})};n(31);var v=function(e){var t,n=e.props,r=e.closeScroll,A=d(),i=Object(o.a)(A,2),T=i[0],c=i[1],l=Object(a.useState)((null===(t=T.party)||void 0===t?void 0:t.player)||new U),R=Object(o.a)(l,2),C=R[0],u=R[1],_=Object(a.useState)(""),S=Object(o.a)(_,2),h=S[0],L=S[1],N=Object(a.useState)(void 0),f=Object(o.a)(N,2),b=f[0],B=f[1],v=function(e,t){var n=m.characterBackgroundTemplate;return Object.keys(n).filter((function(a){var r=n[a].requirements;if(r){if(r.male&&"SEX_MALE"!==e)return!1;if(r.female&&"SEX_FEMALE"!==e)return!1;if(r.noble&&"CHARACTER_FAMILY_NOBILITY"!==t)return!1;if(r.commoner&&"CHARACTER_FAMILY_NOBILITY"===t)return!1}return!0}))},p=v(C.sex,C.family),H=function(e){L(e?O(e+"_DESC"):"")};return Object(a.useEffect)((function(){return function(){clearTimeout(b)}}),[b]),Object(I.jsxs)("div",{id:"charCreateStats",onMouseLeave:function(){H("")},children:[Object(I.jsx)("h1",{children:O("MENU_CREATE_CHARACTER")}),Object(I.jsxs)("div",{id:"statContainer",children:[Object(I.jsxs)("div",{children:[Object(I.jsxs)("div",{children:[Object(I.jsx)("h2",{children:O("CHARACTER_SEX")}),Object(I.jsx)(g,{height:24,width:84,keyList:Object.keys(m.characterSexTemplate),defaultValue:C.sex,changeCallback:function(e){(p=v(e,C.family)).find((function(e){return e===C.background}))||delete C.background,delete C.name,delete C.surname,delete C.customization,u(new U(Object(E.a)(Object(E.a)({},C),{},{sex:e})))},hoverCallback:H})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)("h2",{children:O("CHARACTER_UPBRINGING")}),Object(I.jsx)(g,{height:60,width:84,keyList:Object.keys(m.characterFamilyTemplate),defaultValue:C.family,changeCallback:function(e){u(new U(Object(E.a)(Object(E.a)({},C),{},{family:e})))},hoverCallback:H})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)("h2",{children:O("CHARACTER_TEMPERAMENT")}),Object(I.jsx)(g,{height:48,width:84,keyList:Object.keys(m.characterTemperamentTemplate),defaultValue:C.temperament,changeCallback:function(e){u(new U(Object(E.a)(Object(E.a)({},C),{},{temperament:e})))},hoverCallback:H})]})]}),Object(I.jsxs)("div",{children:[Object(I.jsx)("h2",{children:O("CHARACTER_OCCUPATION")}),Object(I.jsx)(g,{height:12*p.length,width:84,keyList:p,defaultValue:C.background,changeCallback:function(e){u(new U(Object(E.a)(Object(E.a)({},C),{},{background:e})))},hoverCallback:H})]}),Object(I.jsx)(j,{character:C,tooltipCallback:H}),Object(I.jsx)(M,{character:C,tooltipCallback:H}),Object(I.jsxs)("div",{id:"createCharacterButtonHolder",children:[Object(I.jsx)("div",{className:C.sex&&C.family&&C.temperament&&C.background?"cursorGlow":"inactive",onClick:function(){c({type:s,player:C}),r(),B(setTimeout((function(){n.changeMode(1)}),500))},children:O("BUTTON_CONTINUE")}),Object(I.jsx)("div",{className:"cursorGlow",onClick:function(){c({type:s,player:null}),r(),B(setTimeout((function(){n.changeMode(-1)}),500))},children:O("BUTTON_BACK")})]})]}),Object(I.jsx)("div",{id:"statTooltip",children:h})]})},p="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAQMAAABtzGvEAAAABlBMVEUFAAAAAAD1qih8AAAAAXRSTlMAQObYZgAAAA1JREFUGNNjYBgF1AQAAVAAAafi2hYAAAAASUVORK5CYII=",H="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYAAAAAwAgMAAABlFEXtAAAADFBMVEUC3w8AgAAAwAAA/wCddH6KAAAAAXRSTlMAQObYZgAABINJREFUWMPtVjtvG0cQvgfMACSsq1I4LNiLQK6PAS0rF2mSIrIAq2DjKoTFVAGMFCTyC+jCaoTADhDDMhj41CW2BSx/QhrBgAOEKiSFj9inAKJ5vDvu5AjdPAzKpZpAV317981+szOzc2NZV8/Vc/WcPyq9XGwBXC52AXqXiS0P4PQy8f9P4PCi9ysf32jvovclKVACTZuWQvgD8U1ICBde8fuScOITeNchHMI//D4hjuXMW23Kfn1MuJKMasTZhseEtSFOEbYJ293wjDjjCVeR/fI5b9SNvyNj85Q5LS5sW5sal/ucsPVGkxPXgxE7Dc0ZFe11OKaNvHhT5gk5WYl/gDnWxwFh2ARyVHUPNkZ4sdfW62Rhrwc99pR2Ugucsi455MbrNfJnsr5PtgZAA21kNHWRmLRcIQDAu3riNNkiIKeNJmH33KDH1il/YQENcUp8jXwVZO6xAEElTuaNF0cYn+bWCcQsrU8pHdq8T5GfCeR89UgbCrzHWhBAiAt1nEUFNnP3+gmcaBLo4mG8YWCmg2V+ta/jBgqoEQmYHQinKPBgYXDr3MB5A/CES2QHBdRxEE8fL/OL/SDeJNIJW94BeJrXaSWqg574+RWZ6tFuE/14v422/gMd/9XJ+S2j5zm/8FtgbkUosP0Izz5b7Zo+XmrzrTbPdN4IXgHsaiy27g7ezPK/OunXcn7TwCzn29PQfHWEN/9khAVuVgHe4QL+BPgb8k2rWQ6osFWI/aQ4g+Q18vsGpsh/HUITr28poQKHLAcDXDTHBsazfHEthPGcBDQ2soLWyUGO7+0AnNzPFxuhMUQyJNAaQ/I1LspBEsZHJKC5Y6kmBssOQuqgN+oAk7vUWZOYSLOU+6RhgWv9EKa0mkKD+q/6ntpMo0n3r7AQ6NCNmg2J9BMJFIbQ50ZZfwsT0R7vURtUDwne6JOAvai6GglM71Invk0Czn05Vcg/UdYIDkhMccv9lHtLxtfcNcF8w62eBOyND6eKUAqwtIp7Ys7RxDcsYATdDVJBFwIq4S9eog1/CGsXCahRI71IwOYytbRhpy01b7HADKhKLT8Uk9poC+HakzvU6190RayTiGALmiwAqeL4zvh3YPnPhcDDBsHdVeIPbwuBlyygjBT4/XO+vEPNrMoLMV7+TH8TGFSJH38pYr11xr6ZhkjIL5+RQTXSzPJYyzU/atwpPConF7zOdmWnK8anVmGZToES6J/5PM94qRBos0CnwAKOEFBi1ooqEZ++7fC/7rAqRz6GcVv1lvlu6gQi1sJ0UEo/IuCz256RWmttHB7aDo4bzr7cVYvKjISAqdl4ziLs+Rx4j5PszSzVXuY7qSWqZYuhH63QKOhmrRp/YmU49Y94VwEH9g+9Zb77tiZCWhYw8gCt3ewsGN+CaSuRZAGjEsU9O6JP+TgUpVMSMHXoZ+Jl9STc4HHc0ns8mu47mPHiwiE8PrTXeDhd4ZytiPunFh6JlJPbNsMScOrLCwEOnpKsGkOu3pvZUQo02LucWOtXnvBFrVQy6InbCNTTrS/Ydutc4D87Oo3Jue8WAwAAAABJRU5ErkJggg==",D="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYAAAAAwAQMAAAAitD89AAAABlBMVEUEAAAAAP8T9BRUAAAAAXRSTlMAQObYZgAAAClJREFUSMdjYBgFo2AIARYFECkIZgvgUsQBJjtGQ2sUjIJRMApGAZUAAFfgANbjk6O6AAAAAElFTkSuQmCC",K="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAYAAAAAwAgMAAABlFEXtAAAADFBMVEVlLWeAAADAAAD/AAAyDttBAAAAAXRSTlMAQObYZgAAAe9JREFUWMPtVjtSwzAQ3VgpXGiYQC5g7JZClhoqcEFB4UO5SJFCHUfgAhyAwkWG0TA6EgWmYPd5Rpk4JJMGb7WJVqt9+3lrollmmWWWWWaZ5R+JjqLH/vz+lXWGdefk4JS3lEMAniHoIGiUEZvFNK+QCUiFAwQZIoiTHmggVHBaGUQgBzqIvZkUNjyAwcWOJGpbpFDS9uhuEbXC6AAZ5XQsApCS0h2Spev0h34HvaD0a/oUBHt8jqI+GwJzUQTyQz3CwR11B6d0EoKHd9E/3yRJlcXLXnrcJ0kko3sI4gtm6+NFuKgW2hgmsKEESalSmtxioF6GtL96hfmrW+AiVwuCCiYztGyzefYpylkI4wz00/Yw1RDdCIGHKK75NXdbsn1dQT2CIGgjjLIzGhHIgaoBQdcJmJztwxMwot2HYHMjCIzfQUhwOWObqliznmWAAHxqRGBXS86F3qkiuRBix60TN8sAfwPBibq2QHC6y9iTK6hPrVJlmYuVW3HYyiIC8Jn3a4Njw72ge4CmLN7Vv0UIHQkagpnA8pHUiWKzcLIyYOPoLWZLoia2H6BDHkd7SxnsFS6PHkooXovkoguN2EfMS2lw30SkJZVMJKhg8BNQlVxdOdQgCBmpMfeZg2waxjuwT3WdOomJp+wDfaGPxm9UVINdRAb+hAAAAABJRU5ErkJggg==",y=[{g:{tone:[.9375,.825,.8125],halfTone:[.753,.565,.502]}},{g:{tone:[.91,.784,.753],halfTone:[.627,.471,.376]}},{g:{tone:[.8,.65,.5875],halfTone:[.5,.35,.3]}},{g:{tone:[.6875,.5675,.5],halfTone:[.375,.3,.2875]}}],k=[{b:{tone:[.5,.75,1],halfTone:[.25,.375,.5]}},{b:{tone:[.375,.4325,.75],halfTone:[.125,.25,.375]}},{b:{tone:[.5,.625,.375],halfTone:[.3125,.375,.25]}},{b:{tone:[.5,.5,.25],halfTone:[.25,.1875,.125]}},{b:{tone:[.375,.3125,.25],halfTone:[.25,.1875,.125]}},{b:{tone:[.5,.5625,.625],halfTone:[.25,.2725,.375]}}],P=[{r:{tone:[.75,.7125,.5],halfTone:[.5,.4875,.25]}},{r:{tone:[.75,.45,.25],halfTone:[.5,.35,.325]}},{r:{tone:[.5,.3,.2],halfTone:[.375,.25,.1875]}},{r:{tone:[.375,.3125,.25],halfTone:[.25,.1875,.125]}},{r:{tone:[.25,.2,.15],halfTone:[.15,.125,.1]}},{r:{tone:[.15,.15,.15],halfTone:[.0625,.0625,.0625]}}],G={skin:{m:{name:"skinMale",source:H,colorMap:y},f:{name:"skinFemale",source:H,colorMap:y}},eyes:{m:{name:"eyes",source:D,colorMap:k},f:{name:"eyes",source:D,colorMap:k}},hair0f:{m:{name:"hair0f",source:K,colorMap:P},f:{name:"hair0f",source:K,colorMap:P}},hair0b:{m:{name:"hair0b",source:p,colorMap:P},f:{name:"hair0b",source:p,colorMap:P}},beard0f:{m:{name:"beard0f",source:p,colorMap:P}},beard0b:{m:{name:"beard0b",source:p,colorMap:P}}},F=document.createElement("canvas"),x={},w=function(e,t,n,a){var r="SEX_FEMALE"===(null===e||void 0===e?void 0:e.sex)?"f":"m";if(n=Math.min(n,G[t][r].colorMap.length-1),!x[r+t+n]){var A=new Image;A.src=G[t][r].source,A.onload=function(){var e=F.getContext("2d");F.width=A.width,F.height=A.height,e.clearRect(0,0,F.width,F.height),e.drawImage(A,0,0);var i=e.getImageData(0,0,F.width,F.height);!function(e,t){for(var n=0;n<e.length;n+=4)if(e[n+3]){var a=e[n],r=e[n+1],A=e[n+2],i=0,T=0,E=0;if(t.r){var o=a/255;o>=.5?(i+=a*((o=2*(o-.5))*t.r.tone[0]+(1-o)*t.r.halfTone[0]),T+=a*(o*t.r.tone[1]+(1-o)*t.r.halfTone[1]),E+=a*(o*t.r.tone[2]+(1-o)*t.r.halfTone[2])):(i+=(o*=2)*a*t.r.halfTone[0],T+=o*a*t.r.halfTone[1],E+=o*a*t.r.halfTone[2])}else i+=a;if(t.g){var c=r/255;c>=.5?(i+=r*((c=2*(c-.5))*t.g.tone[0]+(1-c)*t.g.halfTone[0]),T+=r*(c*t.g.tone[1]+(1-c)*t.g.halfTone[1]),E+=r*(c*t.g.tone[2]+(1-c)*t.g.halfTone[2])):(i+=(c*=2)*r*t.r.halfTone[0],T+=c*r*t.r.halfTone[1],E+=c*r*t.r.halfTone[2])}else T+=r;if(t.b){var s=A/255;s>=.5?(i+=A*((s=2*(s-.5))*t.b.tone[0]+(1-s)*t.b.halfTone[0]),T+=A*(s*t.b.tone[1]+(1-s)*t.b.halfTone[1]),E+=A*(s*t.b.tone[2]+(1-s)*t.b.halfTone[2])):(i+=(s*=2)*A*t.r.halfTone[0],T+=s*A*t.r.halfTone[1],E+=s*A*t.r.halfTone[2])}else E+=A;e[n]=i,e[n+1]=T,e[n+2]=E}}(i.data,G[t][r].colorMap[n]),e.putImageData(i,0,0),x[r+t+n]=F.toDataURL("image/png"),a&&a()}}};var Y=function(e,t){var n="m";return"SEX_FEMALE"===(null===e||void 0===e?void 0:e.sex)&&(n="f"),G[t][n].colorMap.length},W=function(e,t,n){var a="SEX_FEMALE"===(null===e||void 0===e?void 0:e.sex)?"f":"m";return n=Math.min(n,G[t][a].colorMap.length-1),x[a+t+n]},Q=n(5),X=[0,8,109,220,222,241,149,107,75,248,254,140,16,66,74,21,211,47,80,242,154,27,205,128,161,89,77,36,95,110,85,48,212,140,211,249,22,79,200,50,28,188,52,140,202,120,68,145,62,70,184,190,91,197,152,224,149,104,25,178,252,182,202,182,141,197,4,81,181,242,145,42,39,227,156,198,225,193,219,93,122,175,249,0,175,143,70,239,46,246,163,53,163,109,168,135,2,235,25,92,20,145,138,77,69,166,78,176,173,212,166,113,94,161,41,50,239,49,111,164,70,60,2,37,171,75,136,156,11,56,42,146,138,229,73,146,77,61,98,196,135,106,63,197,195,86,96,203,113,101,170,247,181,113,80,250,108,7,255,237,129,226,79,107,112,166,103,241,24,223,239,120,198,58,60,82,128,3,184,66,143,224,145,224,81,206,163,45,63,90,168,114,59,33,159,95,28,139,123,98,125,196,15,70,194,253,54,14,109,226,71,17,161,93,186,87,244,138,20,52,123,251,26,36,17,46,52,231,232,76,31,221,84,37,216,165,212,106,197,242,98,43,39,175,254,145,190,84,118,222,187,136,120,163,236,249],J=0;function V(e){J=null!=e?e:Math.floor(X.length*Math.random())}function z(){return X[J=(J+1)%X.length]}function Z(e,t){for(var n=t.length-2;n>0;n--)if(e.endsWith(t.substring(0,n)))return e+t.substring(n);return e+t}function q(){for(var e,t=Q.cities,n=t.length>1?z()%t.length:0,a=t[n].start[z()%t[n].start.length],r=z()%2;r>=0;r--){for(e=t[n].middle[z()%t[n].middle.length];a.toLowerCase().endsWith(e.charAt(e.length-1));)e=t[n].middle[z()%t[n].middle.length];a=Z(a,e)}for(e=t[n].end[z()%t[n].end.length];a.toLowerCase().endsWith(e.charAt(e.length-1));)e=t[n].end[z()%t[n].end.length];return a=Z(a,e)}n(32);var $=function(e){var t,n,r,A,i,T=e.props,E=e.closeScroll,c=["hair0"],s=["beard0"],C=d(),u=Object(o.a)(C,2),_=u[0],S=u[1],h=Object(a.useState)(_.party.player.name||""),L=Object(o.a)(h,2),N=L[0],f=L[1],b=Object(a.useState)(_.party.player.surname||""),B=Object(o.a)(b,2),m=B[0],U=B[1],g=Object(a.useState)(0),j=Object(o.a)(g,2),M=j[0],v=j[1],p=Object(a.useState)((null===(t=_.party.player.customization)||void 0===t?void 0:t.skin)||0),H=Object(o.a)(p,2),D=H[0],K=H[1],y=Object(a.useState)((null===(n=_.party.player.customization)||void 0===n?void 0:n.eyes)||0),k=Object(o.a)(y,2),P=k[0],G=k[1],F=Object(a.useState)((null===(r=_.party.player.customization)||void 0===r?void 0:r.hairStyle)||c[0]),x=Object(o.a)(F,2),X=x[0],J=x[1],$=Object(a.useState)("SEX_FEMALE"===_.party.player.sex?null:(null===(A=_.party.player.customization)||void 0===A?void 0:A.beardStyle)||s[0]),ee=Object(o.a)($,2),te=ee[0],ne=ee[1],ae=Object(a.useState)((null===(i=_.party.player.customization)||void 0===i?void 0:i.hairColor)||0),re=Object(o.a)(ae,2),Ae=re[0],ie=re[1],Te=Object(a.useState)(void 0),Ee=Object(o.a)(Te,2),oe=Ee[0],ce=Ee[1],se=Object(a.useState)(0),le=Object(o.a)(se,2),Re=le[0],Ce=le[1],Ie=function(e){var t=(M+e)%8;t<0&&(t+=8),v(t)},ue=function(e,t){return Object(I.jsxs)("div",{children:[Object(I.jsx)("button",{type:"button",className:"small",onClick:function(){t(-1)},children:"-"}),Object(I.jsx)("div",{children:e}),Object(I.jsx)("button",{type:"button",className:"small",onClick:function(){t(1)},children:"+"})]})},_e=function(e){for(var t=Y(_.party.player,e),n=0;n<t;n++)w(_.party.player,e,n,(function(){Ce(Re+1)}))};Object(a.useEffect)((function(){S({type:l,name:N||"",surname:m||""})}),[N,m,S]),Object(a.useEffect)((function(){var e={skin:D,eyes:P,hairStyle:X,hairColor:Ae};"SEX_FEMALE"!==_.party.player.sex&&(e.beardStyle=te),S({type:R,customization:e})}),[D,P,X,te,Ae,S]),Object(a.useEffect)((function(){return function(){clearTimeout(oe)}}),[oe]),_e("eyes"),_e("skin");for(var Se=0;Se<c.length;Se++)_e(c[Se]+"f"),_e(c[Se]+"b");return Object(I.jsxs)("div",{id:"charCreateCustomization",children:[Object(I.jsx)("h1",{children:"Customize"}),Object(I.jsxs)("div",{id:"characterNameSection",children:[Object(I.jsx)("input",{id:"characterName",type:"text",placeholder:O("CHARACTER_NAME"),maxLength:"10",value:N,onChange:function(e){f(e.target.value)}}),Object(I.jsx)("input",{id:"characterSurname",type:"text",placeholder:O("CHARACTER_SURNAME"),maxLength:"24",value:m,onChange:function(e){U(e.target.value)}}),Object(I.jsx)("button",{id:"characterNameRandom",type:"button",onClick:function(){f(function(e,t){V(e);var n,a=t?Q.names.female:Q.names.male,r=a.length>1?z()%a.length:0,A=a[r].start[z()%a[r].start.length];if(a[r].middle){for(n=a[r].middle[z()%a[r].middle.length];A.toLowerCase().endsWith(n.charAt(n.length-1));)n=a[r].middle[z()%a[r].middle.length];A=Z(A,n)}for(n=a[r].end[z()%a[r].end.length];A.toLowerCase().endsWith(n.charAt(n.length-1));)n=a[r].end[z()%a[r].end.length];return Z(A,n)}(null,"SEX_FEMALE"===_.party.player.sex)),U(function(e,t){V(e);var n,a,r=Q.surnames,A=r.length>1?z()%r.length:0;if(t||z()%5){if(n=r[A].start[z()%r[A].start.length],r[A].middle)for(var i=z()%2;i>=0;i--){for(a=r[A].middle[z()%r[A].middle.length];n.toLowerCase().endsWith(a.charAt(a.length-1));)a=r[A].middle[z()%r[A].middle.length];n=Z(n,a)}for(a=r[A].end[z()%r[A].end.length];n.toLowerCase().endsWith(a.charAt(a.length-1));)a=r[A].end[z()%r[A].end.length];n=Z(n,a)}else n=O("CHARACTER_NAME_OF").replace(/{CITY}/,q());return n}(null,"CHARACTER_FAMILY_NOBILITY"===_.party.player.family))},children:O("BUTTON_RANDOM")})]}),Object(I.jsxs)("div",{id:"createCharacterSprite",children:[Object(I.jsxs)("div",{id:"characterSpriteHolder",children:[Object(I.jsx)("div",{className:"rotateLeft cursorGlow",onClick:function(){Ie(-1)}}),Object(I.jsxs)("div",{id:"characterSpriteFrame",className:"rotate"+M,children:[Object(I.jsx)("div",{style:{backgroundImage:"url(".concat(W(_.party.player,X+"b",Ae))}}),"SEX_FEMALE"!==_.party.player.sex?Object(I.jsx)("div",{style:{backgroundImage:"url(".concat(W(_.party.player,te+"b",Ae))}}):Object(I.jsx)(I.Fragment,{}),Object(I.jsx)("div",{style:{backgroundImage:"url(".concat(W(_.party.player,"skin",D))}}),Object(I.jsx)("div",{style:{backgroundImage:"url(".concat(W(_.party.player,"eyes",P))}}),Object(I.jsx)("div",{style:{backgroundImage:"url(".concat(W(_.party.player,X+"f",Ae))}})]}),Object(I.jsx)("div",{className:"rotateRight cursorGlow",onClick:function(){Ie(1)}})]}),Object(I.jsxs)("div",{id:"characterSpriteOptions",children:[ue(O("CUSTOMIZE_SKIN"),(function(e){var t=Y(_.party.player,"skin"),n=(D+e)%t;n<0&&(n+=t),K(n)})),ue(O("CUSTOMIZE_EYES"),(function(e){var t=Y(_.party.player,"eyes"),n=(P+e)%t;n<0&&(n+=t),G(n)})),ue(O("CUSTOMIZE_HAIR_STYLE"),(function(e){var t=(c.indexOf(X)+e)%c.length;t<0&&(t+=c.length),J(c[t])})),"SEX_FEMALE"!==_.party.player.sex?ue(O("CUSTOMIZE_HAIR_FACIAL"),(function(e){var t=(s.indexOf(te)+e)%s.length;t<0&&(t+=s.length),ne(s[t])})):Object(I.jsx)(I.Fragment,{}),ue(O("CUSTOMIZE_HAIR_COLOR"),(function(e){var t=Y(_.party.player,X+"f"),n=(Ae+e)%t;n<0&&(n+=t),ie(n)}))]})]}),Object(I.jsxs)("div",{id:"createCharacterButtonHolder",children:[Object(I.jsx)("div",{className:N&&m?"cursorGlow":"inactive",onClick:function(){E(),ce(setTimeout((function(){T.changeMode(-1)}),500))},children:O("BUTTON_START_GAME")}),Object(I.jsx)("div",{className:"cursorGlow",onClick:function(){E(),ce(setTimeout((function(){T.changeMode(0)}),500))},children:O("BUTTON_BACK")})]})]})};n(33);var ee=function(e){var t=e.transitionCallback,n=Object(a.useState)(0),r=Object(o.a)(n,2),A=r[0],i=r[1],T=Object(a.useState)(-1),E=Object(o.a)(T,2),c=E[0],s=E[1],l=function(e){e<0?t(0):(s(A),i(e))};return Object(I.jsxs)("div",{id:"newGame",children:[0===A?Object(I.jsx)(f,{MyComponent:v,height:284,width:420,delay:c>=0?200:500,props:{changeMode:l}}):Object(I.jsx)(I.Fragment,{}),1===A?Object(I.jsx)(f,{MyComponent:$,height:284,width:420,delay:200,props:{changeMode:l}}):Object(I.jsx)(I.Fragment,{})]})},te=(n(34),["MainMenu","NewGame"]);var ne=function(){var e=Object(a.useRef)(null),t=Object(a.useState)(!0),n=Object(o.a)(t,2),r=n[0],A=n[1],i=Object(a.useState)(te[0]),T=Object(o.a)(i,2),E=T[0],c=T[1],s=Object(a.useState)(!1),l=Object(o.a)(s,2),R=l[0],C=l[1],u=function(e){A(!1),C(te[e])};return Object(a.useEffect)((function(){if(R){var e=setTimeout((function(){c(R),A(!0)}),1e3);return function(){clearTimeout(e)}}}),[R]),Object(I.jsx)(N.a,{nodeRef:e,in:r,appear:!0,timeout:r?1e3:500,classNames:"show",children:Object(I.jsxs)("div",{id:"gameMenu",ref:e,children:[E===te[0]?Object(I.jsx)(L,{transitionCallback:u}):Object(I.jsx)(I.Fragment,{}),E===te[1]?Object(I.jsx)(ee,{transitionCallback:u}):Object(I.jsx)(I.Fragment,{})]})})};var ae=function(){var e=Object(T.a)(),t=e.width,n=e.ref,a=t/480||1;return Object(I.jsx)("div",{id:"screenContainer",ref:n,children:Object(I.jsx)("div",{id:"viewport",style:{transform:"scale("+a+")"},children:Object(I.jsx)(S,{children:Object(I.jsx)(ne,{})})})})},re=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ae(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,A=t.getLCP,i=t.getTTFB;n(e),a(e),r(e),A(e),i(e)}))};i.a.render(Object(I.jsx)(r.a.StrictMode,{children:Object(I.jsx)(ae,{})}),document.getElementById("root")),ie(),function(e){if("serviceWorker"in navigator){if(new URL("/germanic",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/germanic","/service-worker.js");re?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ae(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):Ae(t,e)}))}}()}],[[35,1,2]]]);
//# sourceMappingURL=main.713ce76c.chunk.js.map