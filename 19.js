
if(!navigator.cookieEnabled) NSB.MsgBox('Please turn cookies on.');
(function(){var all=document.getElementsByTagName('*');for(var i=0;i<all.length;i++)if(typeof all[i].id!='undefined'&&typeof window[all[i].id]=='undefined')window[all[i].id]=all[i];})()

window.addEventListener('load', function() {
  Form1.style.display = 'block';

  NSB.addProperties(Image1);
  NSB.RadioButton_jqm_init('RadioButton1','288');
  
  //if (288>0) $('#RadioButton1 .ui-btn').css('width','288');
  if (0>0) $('#RadioButton1 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton1, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton1 .ui-btn').css('height',h/RadioButton1.getItemCount()) }
    else $('#RadioButton1 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton1 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton1,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.NavBar_jqm_init('NavBar1','Previous, Next');
  NSB.addProperties(NavBar1);
  (function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('NavBar1_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
  Label2.style.lineHeight='24px'; 

  NSB.addProperties(Label2);
  NSB.RadioButton_jqm_init('RadioButton2','288');
  
  //if (288>0) $('#RadioButton2 .ui-btn').css('width','288');
  if (0>0) $('#RadioButton2 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton2, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton2 .ui-btn').css('height',h/RadioButton2.getItemCount()) }
    else $('#RadioButton2 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton2 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton2,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton3','288');
  
  //if (288>0) $('#RadioButton3 .ui-btn').css('width','288');
  if (0>0) $('#RadioButton3 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton3, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton3 .ui-btn').css('height',h/RadioButton3.getItemCount()) }
    else $('#RadioButton3 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton3 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton3,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton4','288');
  
  //if (288>0) $('#RadioButton4 .ui-btn').css('width','288');
  if (0>0) $('#RadioButton4 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton4, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton4 .ui-btn').css('height',h/RadioButton4.getItemCount()) }
    else $('#RadioButton4 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton4 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton4,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton5','288');
  
  //if (288>0) $('#RadioButton5 .ui-btn').css('width','288');
  if (0>0) $('#RadioButton5 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton5, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton5 .ui-btn').css('height',h/RadioButton5.getItemCount()) }
    else $('#RadioButton5 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton5 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton5,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton6','288');
  
  //if (288>0) $('#RadioButton6 .ui-btn').css('width','288');
  if (0>0) $('#RadioButton6 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton6, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton6 .ui-btn').css('height',h/RadioButton6.getItemCount()) }
    else $('#RadioButton6 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton6 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton6,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton7','288');
  
  //if (288>0) $('#RadioButton7 .ui-btn').css('width','288');
  if (0>0) $('#RadioButton7 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton7, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton7 .ui-btn').css('height',h/RadioButton7.getItemCount()) }
    else $('#RadioButton7 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton7 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton7,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton8','288');
  
  //if (288>0) $('#RadioButton8 .ui-btn').css('width','288');
  if (0>0) $('#RadioButton8 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton8, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton8 .ui-btn').css('height',h/RadioButton8.getItemCount()) }
    else $('#RadioButton8 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton8 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton8,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton9','288');
  
  //if (288>0) $('#RadioButton9 .ui-btn').css('width','288');
  if (0>0) $('#RadioButton9 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton9, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton9 .ui-btn').css('height',h/RadioButton9.getItemCount()) }
    else $('#RadioButton9 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton9 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton9,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton10','288');
  
  //if (288>0) $('#RadioButton10 .ui-btn').css('width','288');
  if (0>0) $('#RadioButton10 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton10, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton10 .ui-btn').css('height',h/RadioButton10.getItemCount()) }
    else $('#RadioButton10 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton10 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton10,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton11','288');
  
  //if (288>0) $('#RadioButton11 .ui-btn').css('width','288');
  if (0>0) $('#RadioButton11 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton11, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton11 .ui-btn').css('height',h/RadioButton11.getItemCount()) }
    else $('#RadioButton11 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton11 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton11,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton12','288');
  
  //if (288>0) $('#RadioButton12 .ui-btn').css('width','288');
  if (0>0) $('#RadioButton12 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton12, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton12 .ui-btn').css('height',h/RadioButton12.getItemCount()) }
    else $('#RadioButton12 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton12 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton12,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton13','288');
  
  //if (288>0) $('#RadioButton13 .ui-btn').css('width','288');
  if (0>0) $('#RadioButton13 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton13, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton13 .ui-btn').css('height',h/RadioButton13.getItemCount()) }
    else $('#RadioButton13 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton13 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton13,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton14','288');
  
  //if (288>0) $('#RadioButton14 .ui-btn').css('width','288');
  if (0>0) $('#RadioButton14 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton14, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton14 .ui-btn').css('height',h/RadioButton14.getItemCount()) }
    else $('#RadioButton14 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton14 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton14,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton15','288');
  
  //if (288>0) $('#RadioButton15 .ui-btn').css('width','288');
  if (0>0) $('#RadioButton15 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton15, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton15 .ui-btn').css('height',h/RadioButton15.getItemCount()) }
    else $('#RadioButton15 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton15 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton15,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton16','288');
  
  //if (288>0) $('#RadioButton16 .ui-btn').css('width','288');
  if (0>0) $('#RadioButton16 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton16, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton16 .ui-btn').css('height',h/RadioButton16.getItemCount()) }
    else $('#RadioButton16 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton16 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton16,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton17','288');
  
  //if (288>0) $('#RadioButton17 .ui-btn').css('width','288');
  if (0>0) $('#RadioButton17 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton17, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton17 .ui-btn').css('height',h/RadioButton17.getItemCount()) }
    else $('#RadioButton17 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton17 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton17,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton18','288');
  
  //if (288>0) $('#RadioButton18 .ui-btn').css('width','288');
  if (0>0) $('#RadioButton18 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton18, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton18 .ui-btn').css('height',h/RadioButton18.getItemCount()) }
    else $('#RadioButton18 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton18 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton18,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton19','288');
  
  //if (288>0) $('#RadioButton19 .ui-btn').css('width','288');
  if (0>0) $('#RadioButton19 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton19, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton19 .ui-btn').css('height',h/RadioButton19.getItemCount()) }
    else $('#RadioButton19 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton19 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton19,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton20','288');
  
  //if (288>0) $('#RadioButton20 .ui-btn').css('width','288');
  if (0>0) $('#RadioButton20 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton20, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton20 .ui-btn').css('height',h/RadioButton20.getItemCount()) }
    else $('#RadioButton20 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton20 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton20,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton21','288');
  
  //if (288>0) $('#RadioButton21 .ui-btn').css('width','288');
  if (0>0) $('#RadioButton21 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton21, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton21 .ui-btn').css('height',h/RadioButton21.getItemCount()) }
    else $('#RadioButton21 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton21 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton21,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton22','288');
  
  //if (288>0) $('#RadioButton22 .ui-btn').css('width','288');
  if (0>0) $('#RadioButton22 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton22, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton22 .ui-btn').css('height',h/RadioButton22.getItemCount()) }
    else $('#RadioButton22 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton22 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton22,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton23','288');
  
  //if (288>0) $('#RadioButton23 .ui-btn').css('width','288');
  if (0>0) $('#RadioButton23 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton23, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton23 .ui-btn').css('height',h/RadioButton23.getItemCount()) }
    else $('#RadioButton23 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton23 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton23,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton24','288');
  
  //if (288>0) $('#RadioButton24 .ui-btn').css('width','288');
  if (0>0) $('#RadioButton24 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton24, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton24 .ui-btn').css('height',h/RadioButton24.getItemCount()) }
    else $('#RadioButton24 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton24 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton24,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton25','288');
  
  //if (288>0) $('#RadioButton25 .ui-btn').css('width','288');
  if (0>0) $('#RadioButton25 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton25, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton25 .ui-btn').css('height',h/RadioButton25.getItemCount()) }
    else $('#RadioButton25 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton25 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton25,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton26','288');
  
  //if (288>0) $('#RadioButton26 .ui-btn').css('width','288');
  if (0>0) $('#RadioButton26 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton26, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton26 .ui-btn').css('height',h/RadioButton26.getItemCount()) }
    else $('#RadioButton26 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton26 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton26,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton27','288');
  
  //if (288>0) $('#RadioButton27 .ui-btn').css('width','288');
  if (0>0) $('#RadioButton27 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton27, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton27 .ui-btn').css('height',h/RadioButton27.getItemCount()) }
    else $('#RadioButton27 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton27 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton27,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton28','288');
  
  //if (288>0) $('#RadioButton28 .ui-btn').css('width','288');
  if (0>0) $('#RadioButton28 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton28, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton28 .ui-btn').css('height',h/RadioButton28.getItemCount()) }
    else $('#RadioButton28 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton28 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton28,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton29','288');
  
  //if (288>0) $('#RadioButton29 .ui-btn').css('width','288');
  if (0>0) $('#RadioButton29 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton29, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton29 .ui-btn').css('height',h/RadioButton29.getItemCount()) }
    else $('#RadioButton29 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton29 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton29,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton30','288');
  
  //if (288>0) $('#RadioButton30 .ui-btn').css('width','288');
  if (0>0) $('#RadioButton30 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton30, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton30 .ui-btn').css('height',h/RadioButton30.getItemCount()) }
    else $('#RadioButton30 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton30 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton30,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton31','288');
  
  //if (288>0) $('#RadioButton31 .ui-btn').css('width','288');
  if (0>0) $('#RadioButton31 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton31, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton31 .ui-btn').css('height',h/RadioButton31.getItemCount()) }
    else $('#RadioButton31 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton31 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton31,undefined,true);}catch(e){console.log('error:' + e.message)}
  NSB.RadioButton_jqm_init('RadioButton32','288');
  
  //if (288>0) $('#RadioButton32 .ui-btn').css('width','288');
  if (0>0) $('#RadioButton32 .ui-btn-text').css('font-size','0px');
  NSB.defineProperty(RadioButton32, 'Height', {set: function(h){if (''=='') {
      $('#RadioButton32 .ui-btn').css('height',h/RadioButton32.getItemCount()) }
    else $('#RadioButton32 .ui-btn').css('height',h) }, get: function(){return $('#RadioButton32 .ui-btn').css('height')}})
  try{NSB.addProperties(RadioButton32,undefined,true);}catch(e){console.log('error:' + e.message)}
  Label1.ontouchmove=function(e){e.stopPropagation()};
  NSB.addProperties(Label1);
  Form1.style.display = 'none';
  
}, false);
Form1.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(Form1);
var Q=createMultiDimArray('32'),Qn,Qm,myCtrl=createMultiDimArray('10'),Ans=createMultiDimArray('32'),Score;

Q[1] = "The speaker was audience centred.";
Q[2] = "The speaker adapted to the listeners.";
Q[3] = "The introduction caught my attention.";
Q[4] = "The introduction provided an overview of the main ideas.";
Q[5] = "The introduction established the speaker’s credibility.";
Q[6] = "The introduction established motivation to listen.";
Q[7] = "The topic was appropriate was to the audience.";
Q[8] = "The topic was appropriate was to the occasion.";
Q[9] = "The topic was appropriate was for the speaker.";
Q[10] = "The topic was appropriate was for the time limit.";
Q[11] = "The purpose was clear.";
Q[12] = "The purpose was appropriate for the audience.";
Q[13] = "The purpose was achieved.";
Q[14] = "The speech had an introduction, body and conclusion.";
Q[15] = "The speaker used transitions and signposts to clarify the organization.";
Q[16] = "The main ideas were clear to the audience.";
Q[17] = "The supporting material was credible.";
Q[18] = "The supporting material was varied and interesting.";
Q[19] = "The speaker used evidence to support conclusion.";
Q[20] = "The speaker used appropriately used stories and illustrations.";
Q[21] = "The visual aids were large to be seen clearly.";
Q[22] = "The visual aids were attractive and understandable.";
Q[23] = "The visual aids were introduced at appropriate points.";
Q[24] = "The speaker made appropriate eye contact with the audience.";
Q[25] = "The speaker made appropriately varied his or her voice tone.";
Q[26] = "The speaker made used appropriate gestures.";
Q[27] = "The speaker made used good posture and effective movement.";
Q[28] = "The speaker’s summarize the key points.";
Q[29] = "The speaker ended the speech in a memorable, effective way.";
Q[30] = "The speaker cited sources for information and ideas appropriately.";
Q[31] = "The speaker presented viewpoints other than his or her own.";
Q[32] = "The speaker clearly stated the true purpose of the speech.";


Ans[1] = "You were audience centered.";
Ans[2] = "You adapted to the listeners.";
Ans[3] = "Your introduction caught my attention.";
Ans[4] = "Your introduction provided an overview of the main ideas.";
Ans[5] = "Your introduction established your credibility.";
Ans[6] = "Your introduction established motivation To listen.";
Ans[7] = "Your topic was appropriate was to the audience.";
Ans[8] = "Your topic was appropriate was to the occasion.";
Ans[9] = "Your topic was appropriate was for the speaker.";
Ans[10] = "Your topic was appropriate was for the Time limit.";
Ans[11] = "Your purpose was clear.";
Ans[12] = "Your purpose was appropriate for the audience.";
Ans[13] = "Your purpose was achieved.";
Ans[14] = "Your speech had an introduction, body and conclusion.";
Ans[15] = "You used transitions and signposts to clarify the organization.";
Ans[16] = "Your Main ideas were clear To the audience.";
Ans[17] = "Your supporting material was credible.";
Ans[18] = "Your supporting material was varied and interesting.";
Ans[19] = "You used evidence to support conclusion.";
Ans[20] = "You used appropriately used stories and illustrations.";
Ans[21] = "Your visual aids were large to be seen clearly.";
Ans[22] = "Your visual aids were attractive and understandable.";
Ans[23] = "Your visual aids were introduced at appropriate points.";
Ans[24] = "You made appropriate eye contact with the audience.";
Ans[25] = "You made appropriately varied your voice tone.";
Ans[26] = "You made used appropriate gestures.";
Ans[27] = "You made used good posture and effective movement.";
Ans[28] = "You summarize the key points.";
Ans[29] = "You ended the speech in a memorable, effective way.";
Ans[30] = "You cited sources for information and ideas appropriately.";
Ans[31] = "You presented viewpoints other than your own.";
Ans[32] = "You clearly stated the true purpose of the speech.";


function Main() {
  Score = 0;
  Qn = 1;
  Qm = 32;
  Image1.Left = 0;
  Image1.Top = 0;
  Image1.Width = 320;
  Image1.Height = 460;
  Image2.Left = 0;
  Image2.Top = 0;
  Image2.Width = 320;
  Image2.Height = 460;
  Image3.Left = 0;
  Image3.Top = 0;
  Image3.Width = 320;
  Image3.Height = 460;

  ShowQ(Qn);
}

NavBar1.onclick = function(choice) { savethefunction_rvar="";
  if(choice == "Next") {
    myCtrl[Qn] = eval("RadioButton"  +  Qn);
    if(myCtrl[Qn].value() > 0) {
      Qn = Qn + 1;
      if(Qn > Qm) {

        for   (x = 1; x  <= Qm; x ++) {
          myCtrl[x] = eval("RadioButton"  +  x);
          y = myCtrl[x].value();
          Score = Score + y;
          if(y >= 3) {
            Mess.value  = Mess.value  +  '\n'  +  "  - "  +  Ans[x];
          }
        }
        Score = Score / 32;
        Mess.value = Mess.value  +  '\n'  +  '\n'  +  "Your Score is "  +  Round(Score,2)  +  " out of 5"  +  '\n'  +  '\n'  +  "I hope our evaluation will help you to become an even better presenter."  +  '\n'  +  '\n'  +  "Sincerely,"  +  '\n'  +  "The Evaluation Team";

        ChangeForm(Form2);
      }
      ShowQ(Qn);
    }
  }
  if(choice == "Previous") {
    if(Qn != 1) {
      Qn = Qn -1;
      ShowQ(Qn);
    }
  }
return savethefunction_rvar; }

function ShowQ(whatq) { savethefunction_rvar="";
  Label1.textContent = Q[whatq];
  for   (x = 1; x  <= Qm; x ++) {
    myCtrl[x] = eval("RadioButton"  +  x);
    if(x == whatq) {
        myCtrl[x].Visible = True;
 } else {
        myCtrl[x].Visible = False;
    }
  }
return savethefunction_rvar; }

Form1.onshow = function() { savethefunction_rvar="";
  Qn = 1;
  ShowQ(Qn);
  Mess.value = "Hello,"  +  '\n'  +  '\n'  +  "After seeing your performance, I'd like to give you an instant evaluation:"  +  '\n';
return savethefunction_rvar; }

window.addEventListener('load', function() {
  Form2.style.display = 'block';

  NSB.addProperties(Image2);
  Label21.style.lineHeight='24px'; 

  NSB.addProperties(Label21);
  NSB.NavBar_jqm_init('NavBar2','Home, About');
  NSB.addProperties(NavBar2);
  (function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('NavBar2_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
  Mess.ontouchmove=function(e){e.stopPropagation()};
  NSB.addProperties(Mess);
  if(typeof txtSubject==='undefined')txtSubject=document.getElementById('txtSubject')
  txtSubject.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(txtSubject, $('#txtSubject_wrapper > div')[0]);
  NSB.addDisableProperty(txtSubject)
  if(typeof txtEmail==='undefined')txtEmail=document.getElementById('txtEmail')
  txtEmail.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(txtEmail, $('#txtEmail_wrapper > div')[0]);
  NSB.addDisableProperty(txtEmail)


  NSB.addProperties(Label22);


  NSB.addProperties(Label23);
  NSB.addDisableProperty(Button1);
  NSB.addProperties(Button1);

  Form2.style.display = 'none';
  
}, false);
Form2.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(Form2);


Button1.onclick = function() { savethefunction_rvar="";
  if(txtEmail.value != "") {
    email(txtEmail.value,txtSubject.value,Mess.value);
 } else {
    _msgbox_confirm("Please Enter Email");
  }
return savethefunction_rvar; }

 //This function constructs an HTML object which calls the Mail app
 //The encodeURI function fixes the text so it is browser friendly.
function email(t, subject, body) { savethefunction_rvar="";
  location="mailto:"  +  encodeURI(t)  +  "?subject="  +  encodeURI(subject)  +  "&body=" + encodeURI(body);
return savethefunction_rvar; }


NavBar2.onclick = function(choice1) { savethefunction_rvar="";
  if(choice1 == "Home") {
    ChangeForm(Form1);
  }
  if(choice1 == "About") {
    ChangeForm(Form3);
  }

return savethefunction_rvar; }

window.addEventListener('load', function() {
  Form3.style.display = 'block';

  NSB.addProperties(Image3);
  NSB.NavBar_jqm_init('NavBar3','Home');
  NSB.addProperties(NavBar3);
  (function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('NavBar3_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
  TextArea1.ontouchmove=function(e){e.stopPropagation()};
  NSB.addProperties(TextArea1);
  Form3.style.display = 'none';
  
}, false);
Form3.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(Form3);

NavBar3.onclick = function(choice2) { savethefunction_rvar="";
  if(choice2 == "Home") {
    ChangeForm(Form1);
  }
return savethefunction_rvar; }


window.addEventListener('orientationchange', function(){window.scrollTo(0,0)});
window.addEventListener('load', function() {
  browserWarningMessage('Please use Google Chrome, Apple Safari or another supported browser.');
  Form1.style.display = 'block';
  Main();
  if (typeof(Form1.onshow)=='function') Form1.onshow();
  
}, false);

var NSBCurrentForm = Form1;


