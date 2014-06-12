
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
  Label1.style.lineHeight='56px'; 

  NSB.addProperties(Label1);
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
  if (184>0) {
    if (''=='') {
      $('#RadioButton8 .ui-btn').css('height','184'/RadioButton8.getItemCount()) }
    else $('#RadioButton8 .ui-btn').css('height','184') }
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
  Form1.style.display = 'none';
  
}, false);
Form1.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(Form1);
var Q=createMultiDimArray('10'),Qn,Qm,myCtrl=createMultiDimArray('10'),Ans=createMultiDimArray('10,4');

Q[1] = "Audience Orientation";
Q[2] = "Introduction";
Q[3] = "Topic Selection";
Q[4] = "Purpose";
Q[5] = "Organization";
Q[6] = "Supporting Material";
Q[7] = "Visual Aids";
Q[8] = "Delivery";
Q[9] = "Conclusion";
Q[10] = "Ethics";

Ans[1][1] = "The speaker was audience centered.";
Ans[1][2] = "The speaker adapted to the listeners.";

Ans[2][1] = "The introduction caught my attention.";
Ans[2][2] = "The introduction provided an overview of the main ideas.";
Ans[2][3] = "The introduction established the speaker’s credibility.";
Ans[2][4] = "The introduction established motivation To listen.";

Ans[3][1] = "The topic was appropriate was to the audience.";
Ans[3][2] = "The topic was appropriate was to the occasion.";
Ans[3][3] = "The topic was appropriate was for the speaker.";
Ans[3][4] = "The topic was appropriate was for the Time limit.";

Ans[4][1] = "The purpose was clear.";
Ans[4][2] = "The purpose was appropriate for the audience.";
Ans[4][3] = "The purpose was achieved.";

Ans[5][1] = "The speech had an introduction, body and conclusion.";
Ans[5][2] = "The speaker used transitions And signposts to clarify the organization.";
Ans[5][3] = "The Main ideas were clear To the audience.";

Ans[6][1] = "The supporting material was credible.";
Ans[6][2] = "The supporting material was varied and interesting.";
Ans[6][3] = "The speaker used evidence to support conclusion.";
Ans[6][4] = "The speaker used appropriately used stories and illustrations.";

Ans[7][1] = "The visual aids were large to be seen clearly.";
Ans[7][2] = "The visual aids were attractive and understandable.";
Ans[7][3] = "The visual aids were introduced at appropriate points.";

Ans[8][1] = "The speaker made appropriate eye contact with the audience.";
Ans[8][2] = "The speaker made appropriately varied his or her voice tone.";
Ans[8][3] = "The speaker made used appropriate gestures.";
Ans[8][4] = "The speaker made used good posture and effective movement.";

Ans[9][1] = "The speaker’s summarize the key points.";
Ans[9][2] = "The speaker ended the speech in a memorable, effective way.";

Ans[10][1] = "The speaker cited sources for information and ideas appropriately.";
Ans[10][2] = "The speaker presented viewpoints other than his or her own.";
Ans[10][3] = "The speaker clearly stated the true purpose of the speech.";


function Main() {
  Qn = 1;
  Qm = 10;
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
 //MsgBox Ans(x,y)
          Mess.value  = Mess.value  +  '\n'  +  "  - "  +  Ans[x][y];
        }

        Mess.value = Mess.value  +  '\n'  +  '\n'  +  "I hope my evaluation will help you to become an even better presenter."  +  '\n'  +  '\n'  +  "Sincerely,"  +  '\n'  +  "The Evaluation Team";

        ChangeForm(Form2);
 //Form1.style.display="none"
 //Form2.style.display="block"     
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
  email(txtEmail.value,txtSubject.value,Mess.value);
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


