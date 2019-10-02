 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBtgKvUA7oOZDXzx38SDBTgzXmaSCa9rx4",
    authDomain: "result-app-dd051.firebaseapp.com",
    databaseURL: "https://result-app-dd051.firebaseio.com",
    projectId: "result-app-dd051",
    storageBucket: "",
    messagingSenderId: "547201524699",
    appId: "1:547201524699:web:2169664972289320"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
   
     

  function User(){
    console.log("click me")
     const database  = firebase.database();

         var user = firebase.auth().currentUser.uid;
      database.ref('users/'+user).once('value',(snapshot)=>{
        const data=snapshot.val()
        console.log(data)
        document.getElementById('listUser').innerHTML=Object.keys(data)

         
         $('myName').html(Object.keys(data));
      })
  }

  
  $(document).ready(()=>{

    const database  = firebase.database();
    const functions=firebase.functions();
    const admin=firebase.admin();
     admin.initializeApp();
     
     

 
    //add admin panel
    $('#adminButton').click((e)=>{
      e.preventDefault();
      const adminEmail=$('#admin-email').val();
      const addAdminRole=functions.httpsCallable('addAdminRole');
      addAdminRole({email: adminEmail}).then(result=>{
        console.log(result);
      });

    });
    $('#resetButton').click((e) => {
    console.log('Resetting the database');
    e.preventDefault();

    /* remember the fake JavaScript object database from PetsApp v1? */

    const fakeDatabase = {
      'Philip': {job: 'professor', pet: 'cat.jpg'},
      'John': {job: 'student',   pet: 'dog.jpg'},
      'Carol': {job: 'engineer',  pet: 'bear.jpg'}
    };
     database.ref('users/').remove(); // delete the entire collection

    // writes data to the database:
    database.ref('users/Philip').set({job: 'professor', pet: 'cat.jpg'});
     
    database.ref('users/John').set({job: 'student',   pet: 'dog.jpg'});
    database.ref('users/Carol').set({job: 'engineer',  pet: 'bear.jpg'});
    database.ref('users/Pelumi').set({job: 'engineer',  pet: 'bear.jpg'});
    database.ref('users/Femi').set({job: 'engineer',  pet: 'bear.jpg'});
   
  });
    $('#deleteButton').click((e) => {
      e.preventDefault();
    const name = $('#deleteNameBox').val();
    database.ref('users/' + name).remove();
    console.log("delete me");
  });
    //signup function
    $('#sign').click((e)=>{
       
      e.preventDefault();
      console.log("click me")
       var user = firebase.auth().currentUser;
       const userEmail=$('#inEmail').val();
       const userPass=$('#inPassword').val();
    
    
     
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPass)
.then(function(user) {
   console.log("account created")
     
    
  
}).catch(function(error) {
  console.log(error);
});
 

    });



    //save into database button function
    $('#insertButton').click((e) => {
      e.preventDefault();
      var user = firebase.auth().currentUser.uid;
    const name = $('#inputName').val();
    const studentClass=$('#inputClass').val();
    const term=$('#inputTerm').val()
    
    console.log('save')
    
    database.ref('users/'+user+'/' +name+'/'+studentClass+ '/'+term).set({


            
    testone: $('#e1').val(),
    testtwo: $('#e2').val(),
    testthree: $('#e3').val(),
    exam: $('#e4').val(),
    total: $('#etotal').val(),
    cummbf: $('#ecumm').val(),
    cummscore: $('#ecumscore').val(),
    classave: $('#classeng').val(),
    grades: $('#egrades').val(),
    position: $('#positioneng').val(),
    remark: $('#eremarks').val(),
    student: name


    })
  });
    //log in panel
    $('#signIn').click((e)=>{
      e.preventDefault();

      
        
       const userEmail=$('#inEmail').val();
       const userPass=$('#inPassword').val();

        firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log("log in")
  // ...
});

    })
    //log out user
    $('#signOut').click(()=>{
      firebase.auth().signOut().then(()=>{
        console.log('user signed Out')
      })
    })
     
    
     //user change
     firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    user.getIdTokenResult().then(idTokenResult=>{
      console.log(idTokenResult.claims.admin)
       if (idTokenResult.claims.admin) {
         document.getElementById('myName').innerHTML="am an admin"
         document.getElementById("cResult").style.display="block";
          
           document.getElementById("addAdmin").style.display="block";
            document.getElementById("dStudent").style.display="block";
            document.getElementById("rStudent").style.display="block";
            document.getElementById("checkResult").style.display="none";
         console.log("admin is here")
       }
      


      
    })
    

     var user = firebase.auth().currentUser.uid;
      database.ref('users/'+user+'/'+$('#inputName').val()).limitToFirst(1).once('value',(snapshot)=>{
        const data=snapshot.val()
        console.log(Object.keys(data))
        document.getElementById('inputName').value=[Object.keys(data)]
         
         $('myName').html(Object.keys(data));
      })
     
    // User is signed in.
    console.log(user)
     
console.log(user)
  } else {
    // No user is signed in.
  }
});

      
     
    
    $('#editButton').click((e)=>{
      var user = firebase.auth().currentUser.uid;
      e.preventDefault();
       const key = 'users/'+user+ '/' + $('#inputName').val()+'/'+$('#inputClass').val()+'/'+$('#inputTerm').val();
       database.ref(key).once('value',(snapshot)=>{
      const data=snapshot.val();
console.log(key)
       
        
      console.log(data);
       if (!data) {
        $('#result').html(`<h1>Error: Whoops!!! Student name cannot be found</h1>`);
          // clear the display
           console.log("data");
      }
      $('#result').html(` <table id="example2" class="table table-bordered table-hover">
                <thead>
                <tr>
                          <th>SUBJECTS</th>
                        <th >Test 1 <br>(10)</th> 
                        <th>Test 2 <br>(10)</th>
                        <th>Ass<br>(10)</th>
                        <th>Exam <br>(70)</th> 
                        <th>Total <br>(100)</th>
                        <th>Cumm B/F<br>(100)</th>
                        <th>Cumm Score<br>(100) </th> 
                        <th>Class Ave</th>
                        <th>Grades</th>
                        <th>Position</th> 
                        <th>Remarks</th>
                   
                </tr>
                </thead>
                <tbody>
                <tr>
                    
    <td> English Language </td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enter(event);" id="e1" >${data.testone}</textarea></td>
  <td><textarea onkeyup="numbersOnly(this)"onclick="enter(event);" id="e2" >${data.testtwo}</textarea></td>
  <td><textarea onkeyup="numbersOnly(this)" onclick="enter(event);" id="e3" >${data.testthree}</textarea></td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enter(event);" id="e4" >${data.exam}</textarea></td>
  <td><textarea readonly   id="etotal" >${data.total}</textarea></td>
  <td><textarea onclick="enter(event);" onkeyup="numbersOnly(this)" id="ecumm" >${data.cummbf}</textarea></td>
    <td><textarea  readonly="true"   onkeyup="numbersOnly(this)" id="ecumscore" >${data.cummscore}</textarea></td>
  <td><textarea id="classeng" >${data.classave}</textarea></td>
  <td><textarea readonly   id="egrades" >${data.grades}</textarea></td>
    <td><textarea id="positioneng">${data.position}</textarea></td>
  <td><textarea id="eremarks">${data.remark}</textarea> </td>
                </tr>
                <tr>
                 <td style="text-align: left;">Yoruba Language</td>
   <td><textarea onkeyup="numbersOnly(this)" onclick="enterYoruba(event);" id="y1" ></textarea></td>
  <td><textarea onkeyup="numbersOnly(this)"onclick="enterYoruba(event);" id="y2" ></textarea></td>
  <td><textarea onkeyup="numbersOnly(this)" onclick="enterYoruba(event);" id="y3" ></textarea></td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterYoruba(event);" id="y4" ></textarea></td>
  <td><textarea readonly   id="ytotal" ></textarea></td>
  <td><textarea onclick="enterYoruba(event);" onkeyup="numbersOnly(this)" id="ycumm" ></textarea></td>
    <td><textarea  readonly onkeyup="numbersOnly(this)" id="ycumscore" ></textarea></td>
  <td><textarea style="width: 35px !important;"></textarea></td>
  <td><textarea readonly   id="ygrades" ></textarea></td>
    <td><textarea></textarea></td>
  <td id="yremarks" > </td>
  </tr>
                </tr>
                <tr>
                  <<td style="text-align: left;">French Language</td>
   <td><textarea onkeyup="numbersOnly(this)" onclick="enterFrench(event);" id="f1" ></textarea></td>
  <td><textarea onkeyup="numbersOnly(this)"onclick="enterFrench(event);" id="f2" ></textarea></td>
  <td><textarea onkeyup="numbersOnly(this)" onclick="enterFrench(event);" id="f3" ></textarea></td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterFrench(event);" id="f4" ></textarea></td>
  <td><textarea readonly   id="ftotal" ></textarea></td>
  <td><textarea onclick="enterFrench(event);" onkeyup="numbersOnly(this)" id="fcumm" ></textarea></td>
    <td><textarea  readonly onkeyup="numbersOnly(this)" id="fcumscore" ></textarea></td>
<td><textarea style="width: 35px !important;"></textarea></td>
  <td><textarea readonly   id="fgrades" ></textarea></td>
    <td><textarea></textarea></td>
  <td id="fremarks" > </td>
                </tr>
                <tr>
                 <td style="text-align: left;">Mathematics</td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterMath(event);" id="m1" ></textarea></td>
  <td><textarea onkeyup="numbersOnly(this)"onclick="enterMath(event);" id="m2" ></textarea></td>
  <td><textarea onkeyup="numbersOnly(this)" onclick="enterMath(event);" id="m3" ></textarea></td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterMath(event);" id="m4" ></textarea></td>
  <td><textarea readonly   id="mtotal" ></textarea></td>
  <td><textarea onclick="enterMath(event);" onkeyup="numbersOnly(this)" id="mcumm" ></textarea></td>
    <td><textarea  readonly onkeyup="numbersOnly(this)" id="mcumscore" ></textarea></td>
  <td><textarea style="width: 35px !important;"></textarea></td>
  <td><textarea readonly   id="mgrades" ></textarea></td>
    <td><textarea></textarea></td>
  <td id="mremarks" > </td>
                </tr>
                <tr>
                  <td style="text-align: left;">Business Studies</td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterBusiness(event);" id="b1" ></textarea></td>
  <td><textarea onkeyup="numbersOnly(this)"onclick="enterBusiness(event);" id="b2" ></textarea></td>
  <td><textarea onkeyup="numbersOnly(this)" onclick="enterBusiness(event);" id="b3" ></textarea></td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterBusiness(event);" id="b4" ></textarea></td>
  <td><textarea readonly id="btotal" ></textarea></td>
  <td><textarea   onkeyup="numbersOnly(this)" id="bcumm" ></textarea></td>
    <td><textarea  readonly onkeyup="numbersOnly(this)" id="bcumscore" ></textarea></td>
  <td><textarea style="width: 35px !important;"></textarea></td>
  <td><textarea readonly id="bgrades" ></textarea></td>
    <td><textarea></textarea></td>
  <td id="bremarks" > </td>
                </tr>
                <tr>
                   <td style="text-align: left;">Social Studies</td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterSocial(event);" id="s1" ></textarea></td>
  <td><textarea onkeyup="numbersOnly(this)"onclick="enterSocial(event);" id="s2" ></textarea></td>
  <td><textarea onkeyup="numbersOnly(this)" onclick="enterSocial(event);" id="s3" ></textarea></td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterSocial(event);" id="s4" ></textarea></td>
  <td><textarea readonly  id="stotal" ></textarea></td>
  <td><textarea   onkeyup="numbersOnly(this)" id="scumm" ></textarea></td>
    <td><textarea  readonly onkeyup="numbersOnly(this)" id="scumscore" ></textarea></td>
  <td><textarea style="width: 35px !important;"></textarea></td>
  <td><textarea readonly id="sgrades" ></textarea></td>
    <td><textarea ></textarea></td>
  <td id="sremarks" > </td>
                </tr>
                <tr>
                  <td style="text-align: left;">Christian Religous Studies</td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterChris(event);" id="c1" ></textarea></td>
  <td><textarea onkeyup="numbersOnly(this)"onclick="enterChris(event);" id="c2" ></textarea></td>
  <td><textarea onkeyup="numbersOnly(this)" onclick="enterChris(event);" id="c3" ></textarea></td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterChris(event);" id="c4" ></textarea></td>
  <td><textarea readonly  id="ctotal" ></textarea></td>
  <td><textarea   onkeyup="numbersOnly(this)" id="ccumm" ></textarea></td>
    <td><textarea  readonly onkeyup="numbersOnly(this)" id="ccumscore" ></textarea></td>
  <td><textarea style="width: 35px !important;"></textarea></td>
  <td><textarea readonly   id="cgrades" ></textarea></td>
    <td><textarea ></textarea></td>
  <td id="cremarks" > </td>
                </tr>
                <tr>
                  <td style="text-align: left;">Agricultural Science</td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterAgric(event);" id="a1" ></textarea></td>
  <td><textarea onkeyup="numbersOnly(this)"onclick="enterAgric(event);" id="a2" ></textarea></td>
  <td><textarea onkeyup="numbersOnly(this)" onclick="enterAgric(event);" id="a3" ></textarea></td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterAgric(event);" id="a4" ></textarea></td>
  <td><textarea readonly   id="atotal" ></textarea></td>
  <td><textarea   onkeyup="numbersOnly(this)" id="acumm" ></textarea></td>
    <td><textarea  readonly onkeyup="numbersOnly(this)" id="acumscore" ></textarea></td>
  <td><textarea style="width: 35px !important;"></textarea></td>
  <td><textarea readonly  id="agrades" ></textarea></td>
    <td><textarea></textarea></td>
  <td id="aremarks" > </td>
                </tr>
                <tr>
                  <td style="text-align: left;">Basic Science</td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterBasic(event);" id="ba1" ></textarea></td>
  <td><textarea onkeyup="numbersOnly(this)"onclick="enterBasic(event);" id="ba2" ></textarea></td>
  <td><textarea onkeyup="numbersOnly(this)" onclick="enterBasic(event);" id="ba3" ></textarea></td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterBasic(event);" id="ba4" ></textarea></td>
  <td><textarea readonly  id="batotal" ></textarea></td>
  <td><textarea   onkeyup="numbersOnly(this)" id="bacumm" ></textarea></td>
    <td><textarea  readonly onkeyup="numbersOnly(this)" id="bacumscore" ></textarea></td>
  <td><textarea style="width: 35px !important;"></textarea></td>
  <td><textarea readonly   id="bagrades" ></textarea></td>
    <td><textarea></textarea></td>
  <td id="baremarks" > </td>
                </tr>
                <tr>
                  <td style="text-align: left;">Basic Technology</td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterTech(event);" id="t1" ></textarea></td>
  <td><textarea onkeyup="numbersOnly(this)"onclick="enterTech(event);" id="t2" ></textarea></td>
  <td><textarea onkeyup="numbersOnly(this)" onclick="enterTech(event);" id="t3" ></textarea></td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterTech(event);" id="t4" ></textarea></td>
  <td><textarea readonly   id="ttotal" ></textarea></td>
  <td><textarea   onkeyup="numbersOnly(this)" id="tcumm" ></textarea></td>
    <td><textarea  readonly  id="tcumscore" ></textarea></td>
  <td><textarea style="width: 35px !important;"></textarea></td>
  <td><textarea readonly   id="tgrades" ></textarea></td>
    <td><textarea ></textarea></td>
  <td id="tremarks" > </td>
                </tr>
                <tr>
                  <td style="text-align: left;">Computer Science</td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterCom(event);" id="co1" ></textarea></td>
  <td><textarea onkeyup="numbersOnly(this)"onclick="enterCom(event);" id="co2" ></textarea></td>
  <td><textarea onkeyup="numbersOnly(this)" onclick="enterCom(event);" id="co3" ></textarea></td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterCom(event);" id="co4" ></textarea></td>
  <td><textarea readonly   id="cototal" ></textarea></td>
  <td><textarea  onkeyup="numbersOnly(this)" id="cocumm" ></textarea></td>
    <td><textarea  readonly onkeyup="numbersOnly(this)" id="cocumscore" ></textarea></td>
  <td><textarea style="width: 35px !important;"></textarea></td>
  <td><textarea readonly   id="cogrades" ></textarea></td>
    <td><textarea></textarea></td>
  <td id="coremarks" > </td>
                </tr>
                <tr>
                 <td style="text-align: left;">Creative and Cultural Art</td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterCreat(event);" id="cr1" ></textarea></td>
  <td><textarea onkeyup="numbersOnly(this)"onclick="enterCreat(event);" id="cr2" ></textarea></td>
  <td><textarea onkeyup="numbersOnly(this)" onclick="enterCreat(event);" id="cr3" ></textarea></td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterCreat(event);" id="cr4" ></textarea></td>
  <td><textarea readonly   id="crtotal" ></textarea></td>
  <td><textarea  onkeyup="numbersOnly(this)" id="crcumm" ></textarea></td>
    <td><textarea  readonly onkeyup="numbersOnly(this)" id="crcumscore" ></textarea></td>
  <td><textarea style="width: 35px !important;"></textarea></td>
  <td><textarea readonly   id="crgrades" ></textarea></td>
    <td><textarea ></textarea></td>
  <td id="crremarks" > </td>
                </tr>
                <tr>
                   
    <td style="text-align: left;">Civic Education</td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterCivic(event);" id="ci1" ></textarea></td>
  <td><textarea onkeyup="numbersOnly(this)"onclick="enterCivic(event);" id="ci2" ></textarea></td>
  <td><textarea onkeyup="numbersOnly(this)" onclick="enterCivic(event);" id="ci3" ></textarea></td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterCivic(event);" id="ci4" ></textarea></td>
  <td><textarea readonly   onclick="enterCivic(event);" id="citotal" ></textarea></td>
  <td><textarea  onkeyup="numbersOnly(this)" onclick="enterCivic(event);" id="cicumm" ></textarea></td>
    <td><textarea  readonly onkeyup="numbersOnly(this)" id="cicumscore" ></textarea></td>
  <td><textarea style="width: 35px !important;"></textarea></td>
  <td><textarea readonly   id="cigrades" ></textarea></td>
    <td><textarea ></textarea></td>
  <td style="font-weight: bold;" id="ciremarks" > </td>
                </tr>
                <tr>
                 <td style="text-align: left; font-weight: bold;">Home Economics</td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterHome(event);" id="h1" ></textarea></td>
  <td><textarea onkeyup="numbersOnly(this)"onclick="enterHome(event);" id="h2" ></textarea></td>
  <td><textarea onkeyup="numbersOnly(this)" onclick="enterHome(event);" id="h3" ></textarea></td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterHome(event);" id="h4" ></textarea></td>
  <td><textarea readonly   id="htotal" ></textarea></td>
  <td><textarea  onkeyup="numbersOnly(this)" id="hcumm" ></textarea></td>
    <td><textarea  readonly onkeyup="numbersOnly(this)" id="hcumscore" ></textarea></td>
  <td><textarea style="width: 35px !important;"></textarea></td>
  <td><textarea readonly   id="hgrades" ></textarea></td>
    <td><textarea    ></textarea></td>
  <td style="font-weight: bold;" id="hremarks" > </td>
                </tr>
                <tr>
                 <td style="text-align: left;font-weight: bold;">Physical and Health Education</td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterPhysical(event);" id="p1" ></textarea></td>
  <td><textarea onkeyup="numbersOnly(this)"onclick="enterPhysical(event);" id="p2" ></textarea></td>
  <td><textarea onkeyup="numbersOnly(this)" onclick="enterPhysical(event);" id="p3" ></textarea></td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterPhysical(event);" id="p4" ></textarea></td>
  <td><textarea readonly   id="ptotal" ></textarea></td>
  <td><textarea  onkeyup="numbersOnly(this)" id="pcumm" ></textarea></td>
    <td><textarea  readonly onkeyup="numbersOnly(this)" id="pcumscore" ></textarea></td>
  <td><textarea style="width: 35px !important;"></textarea></td>
  <td style="font-weight: bold;" id="pgrades" > </td>
    <td><textarea ></textarea></td>
  <td style="font-weight: bold;" id="premarks" > </td>
                </tr>
                
              </table> `)
       
    });
    })

  })