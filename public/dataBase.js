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
  function deleteIt(){
    document.getElementById("topic").style.display="none";
    document.getElementById('loading').style.display="none";
      // body...
       //checking if the user is offline
    var status=navigator.onLine;
    if (status) {
      console.log("online");
    }else{
       
        
      console.log("offline");
        Swal.fire({
  type: 'error',
  title: 'Oops...',
  text: 'No Internet Connection!'
  
})
    }
    
  }
   
    function hideDash() {
      document.getElementById("topic").style.display="none";
      // body...
       //checking if the user is offline
    var status=navigator.onLine;
    if (status) {
      console.log("online");
    }else{
       
        
      console.log("offline");
        Swal.fire({
  type: 'error',
  title: 'Oops...',
  text: 'No Internet Connection!'
  
})
    }
    }
    function createMe(){
      document.getElementById("topic").style.display="none";
      // body...
       //checking if the user is offline
    var status=navigator.onLine;
    if (status) {
      document.getElementById('loading').style.display="none";
      console.log("online");
    }else{
      document.getElementById('loading').style.display="none";
       
        
      console.log("offline");
        Swal.fire({
  type: 'error',
  title: 'Oops...',
  text: 'No Internet Connection!'
  
})
    }

    }

  function User(){
     document.getElementById("topic").style.display="none";
      // body...
       //checking if the user is offline
    var status=navigator.onLine;
    if (status) {
      console.log("online");
    }else{
       
        
      console.log("offline");
         Swal.fire({
  type: 'error',
  title: 'Oops...',
  text: 'No Internet Connection!'
  
})
    }
    console.log("click me")
    document.getElementById('loading').style.display="block";
     const database  = firebase.database();

         var user = firebase.auth().currentUser.uid;
         

      database.ref('users/'+user).once('value',(snapshot)=>{
        const data=snapshot.val()
        console.log(data)
         if (!data) {
          document.getElementById('listUser').innerHTML="No registered students";
          document.getElementById('loading').style.display="none";
       }
       document.getElementById('listUser').innerHTML=Object.keys(data) 

       
        document.getElementById('loading').style.display="none";
        
         

         
         $('myName').html(Object.keys(data));
      })
  }

  
  $(document).ready(()=>{
     document.getElementById('dash').focus();

    const database  = firebase.database();
    const functions=firebase.functions();
    //test microphone
    

 
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
    //delete button
    $('#deleteButton').click((e) => {



      e.preventDefault();
      const name = $('#deleteNameBox').val();
      if (!name) {
      document.getElementById('required').innerHTML="please input a student name";
      return;
       
    }else if (name==" ") {
       document.getElementById('required').innerHTML="please input a student name";
      return;

    }else if (name=="  ") {
       document.getElementById('required').innerHTML="please input a student name";
      return;

    }else if (name=="   ") {
       document.getElementById('required').innerHTML="please input a student name";
      return;

    }else if (name=="    ") {
       document.getElementById('required').innerHTML="please input a student name";
      return;

    }else if (name=="     ") {
       document.getElementById('required').innerHTML="please input a student name";
      return;

    }else{
       document.getElementById('required').innerHTML="";

    }
        
       
    console.log("delete me");
       
    var status=navigator.onLine;
    if (status) {
       const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

swalWithBootstrapButtons.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  type: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Yes, delete it!',
  cancelButtonText: 'No, cancel!',
  reverseButtons: true
}).then((result) => {
  if (result.value) {
    var user = firebase.auth().currentUser.uid;
    
   var deleted= database.ref('users/'+user+'/' + name)
   
   if(!deleted){
     alert('name not found')
   }else{
     deleted.remove();
   }
   console.log(deleted);
    swalWithBootstrapButtons.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons.fire(
      'Cancelled'
       
       
    )
  }
})
       
      
    }else{

       
        
      console.log("offline");
         Swal.fire({
  type: 'error',
  title: 'Oops...',
  text: 'No Internet Connection!'

  
})
    }
  });

    //delete all button

     $('#deleteAll').click((e) => {

      e.preventDefault();
       
        
       
    console.log("delete all");
          
    var status=navigator.onLine;
    if (status) {
       const swalWithBootstrapButtons = Swal.mixin({
  customClass: {
    confirmButton: 'btn btn-success',
    cancelButton: 'btn btn-danger'
  },
  buttonsStyling: false
})

swalWithBootstrapButtons.fire({
  title: 'Are you sure?',
  text: "You won't be able to revert this!",
  type: 'warning',
  showCancelButton: true,
  confirmButtonText: 'Yes, delete it!',
  cancelButtonText: 'No, cancel!',
  reverseButtons: true
}).then((result) => {
  if (result.value) {
    var user = firebase.auth().currentUser.uid;
    
    database.ref('users/'+user).remove();
    swalWithBootstrapButtons.fire(
      'Deleted!',
      'Your file has been deleted.',
      'success'
    )
  } else if (
    /* Read more about handling dismissals below */
    result.dismiss === Swal.DismissReason.cancel
  ) {
    swalWithBootstrapButtons.fire(
      'Cancelled'
       
       
    )
  }
})
       
      
    }else{

       
        
      console.log("offline");
         Swal.fire({
  type: 'error',
  title: 'Oops...',
  text: 'No Internet Connection!'

  
})
    }
  });




    //signup function
    $('#sign').click((e)=>{
       
      e.preventDefault();
      console.log("click me")
       var user = firebase.auth().currentUser;
       const userEmail=$('#inEmail').val();
       const userPass=$('#inPassword').val();

      
    
    
     
    //firebase.auth().createUserWithEmailAndPassword(userEmail, userPass)
//.then(function(user) {
 //  console.log("account created")
     
    
  
//}).catch(function(error) {
 // console.log(error);
//});
 

    });



    //save into database button function
    $('#insertButton').click((e) => {
      e.preventDefault();

       
        
     
      
     
      var user = firebase.auth().currentUser.uid;
    const name = $('#inputName').val();
    const studentClass=$('#inputClass').val();
    const term=$('#inputTerm').val()
    const year=$('#sessionStudent').val()


    //checking if the user is offline
    var status=navigator.onLine;
    if (status) {
      if (name==""||studentClass==""||term==""||year=="") {
        Swal.fire(
  `The Student's Name, Class, Session and Term is Required`

)
        return;
      } if (name==" "||studentClass==" "||term==" "||year==" ") {
        Swal.fire(
  `The Student's Name, Class, Session and Term is Required`

)
        return;
      }if (name=="  "||studentClass=="  "||term=="  "||year=="  ") {
        Swal.fire(
  `The Student's Name, Class, Session and Term is Required`

)
        return;
      }else{
       Swal.fire("Congrats!", "Successfully Saved!", "success");
       console.log("online");
      }
      
    }else{
       
        
      console.log("offline");
      Swal.fire({
  type: 'error',
  title: 'Oops...',
  text: 'No Internet Connection!'
  
})
    }
    console.log('save')
    
    database.ref('users/'+user+'/' +name+'/'+studentClass+ '/'+term+ '/'+year).set({


            
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
    student: name,
    //yoruba 
    yone: $('#y1').val(),
    ytwo: $('#y2').val(),
    ythree: $('#y3').val(),
    yexam: $('#y4').val(),
    ytotal: $('#ytotal').val(),
    ycummbf: $('#ycumm').val(),
    ycummscore: $('#ycumscore').val(),
    yclassave: $('#classyor').val(),
    ygrades: $('#ygrades').val(),
    yposition: $('#positionyor').val(),
    yremark: $('#yremarks').val(),
    //french 
    fone: $('#f1').val(),
    ftwo: $('#f2').val(),
    fthree: $('#f3').val(),
    fexam: $('#f4').val(),
    ftotal: $('#ftotal').val(),
    fcummbf: $('#fcumm').val(),
    fcummscore: $('#fcumscore').val(),
    fclassave: $('#classf').val(),
    fgrades: $('#fgrades').val(),
    fposition: $('#positionf').val(),
    fremark: $('#fremarks').val(),
    //mathematics
    mone: $('#m1').val(),
    mtwo: $('#m2').val(),
    mthree: $('#m3').val(),
    mexam: $('#m4').val(),
    mtotal: $('#mtotal').val(),
    mcummbf: $('#mcumm').val(),
    mcummscore: $('#mcumscore').val(),
    mclassave: $('#classm').val(),
    mgrades: $('#mgrades').val(),
    mposition: $('#positionm').val(),
    mremark: $('#mremarks').val(),
    //business studies  
    bone: $('#b1').val(),
    btwo: $('#b2').val(),
    bthree: $('#b3').val(),
    bexam: $('#b4').val(),
    btotal: $('#btotal').val(),
    bcummbf: $('#bcumm').val(),
    bcummscore: $('#bcumscore').val(),
    bclassave: $('#classb').val(),
    bgrades: $('#bgrades').val(),
    bposition: $('#positionb').val(),
    bremark: $('#bremarks').val(),
    //social studies 
     sone: $('#s1').val(),
    stwo: $('#s2').val(),
    sthree: $('#s3').val(),
    sexam: $('#s4').val(),
    stotal: $('#stotal').val(),
    scummbf: $('#scumm').val(),
    scummscore: $('#scumscore').val(),
    sclassave: $('#classs').val(),
    sgrades: $('#sgrades').val(),
    sposition: $('#positions').val(),
    sremark: $('#sremarks').val(),
    //crk
    cone: $('#c1').val(),
    ctwo: $('#c2').val(),
    cthree: $('#c3').val(),
    cexam: $('#c4').val(),
    ctotal: $('#ctotal').val(),
    ccummbf: $('#ccumm').val(),
    ccummscore: $('#ccumscore').val(),
    cclassave: $('#classc').val(),
    cgrades: $('#cgrades').val(),
    cposition: $('#positionc').val(),
    cremark: $('#cremarks').val(),
    //agricultural
    aone: $('#a1').val(),
    atwo: $('#a2').val(),
    athree: $('#a3').val(),
    aexam: $('#a4').val(),
    atotal: $('#atotal').val(),
    acummbf: $('#acumm').val(),
    acummscore: $('#acumscore').val(),
    aclassave: $('#classa').val(),
    agrades: $('#agrades').val(),
    aposition: $('#positiona').val(),
    aremark: $('#aremarks').val(),
    //basic science
    bone: $('#b1').val(),
    btwo: $('#b2').val(),
    bthree: $('#b3').val(),
    bexam: $('#b4').val(),
    btotal: $('#btotal').val(),
    bcummbf: $('#bcumm').val(),
    bcummscore: $('#bcumscore').val(),
    bclassave: $('#classb').val(),
    bgrades: $('#bgrades').val(),
    bposition: $('#positionb').val(),
    bremark: $('#bremarks').val(),
    //basic technology
     tone: $('#t1').val(),
    ttwo: $('#t2').val(),
    tthree: $('#t3').val(),
    texam: $('#t4').val(),
    ttotal: $('#ttotal').val(),
    tcummbf: $('#tcumm').val(),
    tcummscore: $('#tcumscore').val(),
    tclassave: $('#classt').val(),
    tgrades: $('#tgrades').val(),
    tposition: $('#positiont').val(),
    tremark: $('#tremarks').val(),
    //computer science
    coone: $('#co1').val(),
    cotwo: $('#co2').val(),
    cothree: $('#co3').val(),
    coexam: $('#co4').val(),
    cototal: $('#cototal').val(),
    cocummbf: $('#cocumm').val(),
    cocummscore: $('#cocumscore').val(),
    coclassave: $('#classco').val(),
    cogrades: $('#cogrades').val(),
    coposition: $('#positionco').val(),
    coremark: $('#coremarks').val(),
    //creative
    crone: $('#cr1').val(),
    crtwo: $('#cr2').val(),
    crthree: $('#cr3').val(),
    crexam: $('#cr4').val(),
    crtotal: $('#crtotal').val(),
    crcummbf: $('#crcumm').val(),
    crcummscore: $('#crcumscore').val(),
    crclassave: $('#classcr').val(),
    crgrades: $('#crgrades').val(),
    crposition: $('#positioncr').val(),
    crremark: $('#crremarks').val(),
    //civic
    cione: $('#ci1').val(),
    citwo: $('#ci2').val(),
    cithree: $('#ci3').val(),
    ciexam: $('#ci4').val(),
    citotal: $('#citotal').val(),
    cicummbf: $('#cicumm').val(),
    cicummscore: $('#cicumscore').val(),
    ciclassave: $('#classci').val(),
    cigrades: $('#cigrades').val(),
    ciposition: $('#positionci').val(),
    ciremark: $('#ciremarks').val(),
    //home economics
    hone: $('#h1').val(),
    htwo: $('#h2').val(),
    hthree: $('#h3').val(),
    hexam: $('#h4').val(),
    htotal: $('#htotal').val(),
    hcummbf: $('#hcumm').val(),
    hcummscore: $('#hcumscore').val(),
    hclassave: $('#classh').val(),
    hgrades: $('#hgrades').val(),
    hposition: $('#positionh').val(),
    hremark: $('#hremarks').val(),
     //physical health
    pone: $('#p1').val(),
    ptwo: $('#p2').val(),
    pthree: $('#p3').val(),
    pexam: $('#p4').val(),
    ptotal: $('#ptotal').val(),
    pcummbf: $('#pcumm').val(),
    pcummscore: $('#pcumscore').val(),
    pclassave: $('#classp').val(),
    pgrades: $('#pgrades').val(),
    pposition: $('#positionp').val(),
    premark: $('#premarks').val()




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
      document.getElementById('loading').style.display="block";
      firebase.auth().signOut().then(()=>{
        //checking if the user is offline
    var status=navigator.onLine;
    if (status) {
        window.location.assign('./index.html');
         document.getElementById('loading').style.display="none";
        console.log('user signed Out')
      console.log("online");
    }else{
           
      console.log("offline");
      Swal.fire({
  type: 'error',
  title: 'Oops...',
  text: 'No Internet Connection!'
  
})
    }

        
      })
    })
          
    
     //user change
     firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    user.getIdTokenResult().then(idTokenResult=>{
      console.log(idTokenResult.claims.admin)
       if (idTokenResult.claims.admin) {
          
         document.getElementById("cResult").style.display="block";
          
           document.getElementById("addAdmin").style.display="block";
            document.getElementById("dStudent").style.display="block";
            document.getElementById("rStudent").style.display="block";
            document.getElementById('loading').style.display="none";
            
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
    
  } else {
    // No user is signed in.
  }
});

      
     //edit button
    
    $('#editButton').click((e)=>{
      const name = $('#inputName').val();
    const studentClass=$('#inputClass').val();
    const term=$('#inputTerm').val();
    const year=$('#sessionStudent').val();
      document.getElementById('loading').style.display="block";
      var user = firebase.auth().currentUser.uid;
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, 'fast');

      //checking if the user is offline
     //checking if the user is offline
    var status=navigator.onLine;
    if (status) {
      if (name==""||studentClass==""||term==""||year=="") {
        Swal.fire(
  `The Student's Name, Class, Session and Term is Required`

)
          document.getElementById('loading').style.display="none";
        return;
      } if (name==" "||studentClass==" "||term==" "||year==" ") {
        Swal.fire(
  `The Student's Name, Class, Session and Term is Required`

)
        document.getElementById('loading').style.display="none";
        return;
      }if (name=="  "||studentClass=="  "||term=="  "||year=="  ") {
        Swal.fire(
  `The Student's Name, Class, Session and Term is Required`

)
        document.getElementById('loading').style.display="none";
        $('html, body').animate({ scrollTop: 0 }, 'fast');
        return;
      }else{
       const key = 'users/'+user+ '/' + $('#inputName').val()+'/'+$('#inputClass').val()+'/'+$('#inputTerm').val()+'/'+$('#sessionStudent').val();
       database.ref(key).once('value',(snapshot)=>{
      const data=snapshot.val();
console.log(key)
       document.getElementById('loading').style.display="none";
        
      console.log(data);
       if (!data) {
          Swal.fire({
  type: 'error',
  title: 'Error:',
  text: `Whoops!!! Student name cannot be found`
  
})

         
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
   <td><textarea onkeyup="numbersOnly(this)" onclick="enterYoruba(event);" id="y1" >${data.yone}</textarea></td>
  <td><textarea onkeyup="numbersOnly(this)"onclick="enterYoruba(event);" id="y2" >${data.ytwo}</textarea></td>
  <td><textarea onkeyup="numbersOnly(this)" onclick="enterYoruba(event);" id="y3" >${data.ythree}</textarea></td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterYoruba(event);" id="y4" >${data.yexam}</textarea></td>
  <td><textarea readonly   id="ytotal" >${data.ytotal}</textarea></td>
  <td><textarea onclick="enterYoruba(event);" onkeyup="numbersOnly(this)" id="ycumm" >${data.ycummbf}</textarea></td>
    <td><textarea  readonly onkeyup="numbersOnly(this)" id="ycumscore" >${data.ycummscore}</textarea></td>
  <td><textarea id="classyor" >${data.yclassave}</textarea></td>
  <td><textarea readonly   id="ygrades" >${data.ygrades}</textarea></td>
    <td><textarea id="positionyor" >${data.yposition}</textarea></td>
   
  <td><textarea readonly id="yremarks" >${data.yremark}</textarea> </td>
  </tr>
                </tr>
                <tr>
                  <td style="text-align: left;">French Language</td>
   <td><textarea onkeyup="numbersOnly(this)" onclick="enterFrench(event);" id="f1" >${data.fone}</textarea></td>
  <td><textarea onkeyup="numbersOnly(this)"onclick="enterFrench(event);" id="f2" >${data.ftwo}</textarea></td>
  <td><textarea onkeyup="numbersOnly(this)" onclick="enterFrench(event);" id="f3" >${data.fthree}</textarea></td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterFrench(event);" id="f4" >${data.fexam}</textarea></td>
  <td><textarea readonly   id="ftotal" >${data.ftotal}</textarea></td>
  <td><textarea onclick="enterFrench(event);" onkeyup="numbersOnly(this)" id="fcumm" >${data.fcummbf}</textarea></td>
    <td><textarea  readonly onkeyup="numbersOnly(this)" id="fcumscore" >${data.fcummscore}</textarea></td>
<td><textarea id="classf">${data.fclassave}</textarea></td>
  <td><textarea readonly   id="fgrades" >${data.fgrades}</textarea></td>
    <td><textarea id="positionf">${data.fposition}</textarea></td>
  <td><textarea id="fremarks" >${data.fremark}</textarea> </td>
                </tr>
                <tr>
                 <td style="text-align: left;">Mathematics</td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterMath(event);" id="m1" >${data.mone}</textarea></td>
  <td><textarea onkeyup="numbersOnly(this)"onclick="enterMath(event);" id="m2" >${data.mtwo}</textarea></td>
  <td><textarea onkeyup="numbersOnly(this)" onclick="enterMath(event);" id="m3" >${data.mthree}</textarea></td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterMath(event);" id="m4" >${data.mexam}</textarea></td>
  <td><textarea readonly   id="mtotal" >${data.mtotal}</textarea></td>
  <td><textarea onclick="enterMath(event);" onkeyup="numbersOnly(this)" id="mcumm" >${data.mcummbf}</textarea></td>
    <td><textarea  readonly onkeyup="numbersOnly(this)" id="mcumscore" >${data.mcummscore}</textarea></td>
  <td><textarea id="classm">${data.mclassave}</textarea></td>
  <td><textarea readonly   id="mgrades" >${data.mgrades}</textarea></td>
    <td><textarea id="positionm">${data.mposition}</textarea></td>
  <td><textarea id="mremarks" >${data.mremark}</textarea> </td>
                </tr>
               <tr>
                  <td style="text-align: left;">Business Studies</td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterBusiness(event);" id="b1" >${data.bone}</textarea></td>
  <td><textarea onkeyup="numbersOnly(this)"onclick="enterBusiness(event);" id="b2" >${data.btwo}</textarea></td>
  <td><textarea onkeyup="numbersOnly(this)" onclick="enterBusiness(event);" id="b3" >${data.bthree}</textarea></td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterBusiness(event);" id="b4" >${data.bexam}</textarea></td>
  <td><textarea readonly id="btotal" >${data.btotal}</textarea></td>
  <td><textarea   onkeyup="numbersOnly(this)" id="bcumm" >${data.bcummbf}</textarea></td>
    <td><textarea  readonly onkeyup="numbersOnly(this)" id="bcumscore" >${data.bcummscore}</textarea></td>
  <td><textarea id="classb">${data.bclassave}</textarea></td>
  <td><textarea readonly id="bgrades" >${data.bgrades}</textarea></td>
    <td><textarea id="positionb">${data.bposition}</textarea></td>
  <td><textarea id="bremarks" >${data.bremark}</textarea> </td>
                </tr>
               <tr>
                   <td style="text-align: left;">Social Studies</td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterSocial(event);" id="s1" >${data.sone}</textarea></td>
  <td><textarea onkeyup="numbersOnly(this)"onclick="enterSocial(event);" id="s2" >${data.stwo}</textarea></td>
  <td><textarea onkeyup="numbersOnly(this)" onclick="enterSocial(event);" id="s3" >${data.sthree}</textarea></td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterSocial(event);" id="s4" >${data.sexam}</textarea></td>
  <td><textarea readonly  id="stotal" >${data.stotal}</textarea></td>
  <td><textarea   onkeyup="numbersOnly(this)" id="scumm" >${data.scummbf}</textarea></td>
    <td><textarea  readonly onkeyup="numbersOnly(this)" id="scumscore" >${data.scummscore}</textarea></td>
  <td><textarea  id="classs">${data.sclassave}</textarea></td>
  <td><textarea readonly id="sgrades" >${data.sgrades}</textarea></td>
     <td><textarea  id="positions">${data.sposition}</textarea></td>
  <td><textarea readonly id="sremarks" >${data.sremark}</textarea> </td>
                </tr>
               <tr>
                  <td style="text-align: left;">Christian Religous Studies</td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterChris(event);" id="c1" >${data.cone}</textarea></td>
  <td><textarea onkeyup="numbersOnly(this)"onclick="enterChris(event);" id="c2" >${data.ctwo}</textarea></td>
  <td><textarea onkeyup="numbersOnly(this)" onclick="enterChris(event);" id="c3" >${data.cthree}</textarea></td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterChris(event);" id="c4" >${data.cexam}</textarea></td>
  <td><textarea readonly  id="ctotal" >${data.ctotal}</textarea></td>
  <td><textarea   onkeyup="numbersOnly(this)" id="ccumm" >${data.ccummbf}</textarea></td>
    <td><textarea  readonly onkeyup="numbersOnly(this)" id="ccumscore" >${data.ccummscore}</textarea></td>
  <td><textarea id="classc">${data.cclassave}</textarea></td>
  <td><textarea readonly   id="cgrades" >${data.cgrades}</textarea></td>
    <td><textarea id="positionc">${data.cposition}</textarea></td>
  <td><textarea id="cremarks" >${data.cremark}</textarea> </td>
                </tr>
                <tr>
                  <tr>
                  <td style="text-align: left;">Agricultural Science</td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterAgric(event);" id="a1" >${data.aone}</textarea></td>
  <td><textarea onkeyup="numbersOnly(this)"onclick="enterAgric(event);" id="a2" >${data.atwo}</textarea></td>
  <td><textarea onkeyup="numbersOnly(this)" onclick="enterAgric(event);" id="a3" >${data.athree}</textarea></td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterAgric(event);" id="a4" >${data.aexam}</textarea></td>
  <td><textarea readonly   id="atotal" >${data.atotal}</textarea></td>
  <td><textarea   onkeyup="numbersOnly(this)" id="acumm" >${data.acummbf}</textarea></td>
    <td><textarea  readonly onkeyup="numbersOnly(this)" id="acumscore" >${data.acummscore}</textarea></td>
  <td><textarea id="classa">${data.aclassave}</textarea></td>
  <td><textarea readonly  id="agrades" >${data.agrades}</textarea></td>
    <td><textarea id="positiona">${data.aposition}</textarea></td>
  <td><textarea readonly="readonly" id="aremarks" >${data.aremark}</textarea> </td>
                </tr>
                <tr>
                  <td style="text-align: left;">Basic Science</td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterBasic(event);" id="ba1" >${data.bone}</textarea></td>
  <td><textarea onkeyup="numbersOnly(this)"onclick="enterBasic(event);" id="ba2" >${data.btwo}</textarea></td>
  <td><textarea onkeyup="numbersOnly(this)" onclick="enterBasic(event);" id="ba3" >${data.bthree}</textarea></td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterBasic(event);" id="ba4" >${data.bexam}</textarea></td>
  <td><textarea readonly  id="batotal" >${data.btotal}</textarea></td>
  <td><textarea   onkeyup="numbersOnly(this)" id="bacumm" >${data.bcummbf}</textarea></td>
    <td><textarea  readonly onkeyup="numbersOnly(this)" id="bacumscore" >${data.bcummscore}</textarea></td>
  <td><textarea id="classb" >${data.bclassave}</textarea></td>
  <td><textarea readonly   id="bagrades" >${data.bgrades}</textarea></td>
    <td><textarea id="positionb">${data.bposition}</textarea></td>
  <td><textarea readonly="readonly" id="bremarks" >${data.bremark}</textarea> </td>
                </tr>
               <tr>
                  <td style="text-align: left;">Basic Technology</td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterTech(event);" id="t1" >${data.tone}</textarea></td>
  <td><textarea onkeyup="numbersOnly(this)"onclick="enterTech(event);" id="t2" >${data.ttwo}</textarea></td>
  <td><textarea onkeyup="numbersOnly(this)" onclick="enterTech(event);" id="t3" >${data.tthree}</textarea></td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterTech(event);" id="t4" >${data.texam}</textarea></td>
  <td><textarea readonly   id="ttotal" >${data.ttotal}</textarea></td>
  <td><textarea   onkeyup="numbersOnly(this)" id="tcumm" >${data.tcummbf}</textarea></td>
    <td><textarea  readonly  id="tcumscore" >${data.tcummscore}</textarea></td>
  <td><textarea  id="classt">${data.tclassave}</textarea></td>
  <td><textarea readonly   id="tgrades" >${data.tgrades}</textarea></td>
     <td><textarea id="positiont">${data.tposition}</textarea></td>
  <td><textarea readonly="readonly" id="tremarks" >${data.tremark}</textarea> </td>
                </tr>
               <tr>
                  <td style="text-align: left;">Computer Science</td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterCom(event);" id="co1" >${data.coone}</textarea></td>
  <td><textarea onkeyup="numbersOnly(this)"onclick="enterCom(event);" id="co2" >${data.cotwo}</textarea></td>
  <td><textarea onkeyup="numbersOnly(this)" onclick="enterCom(event);" id="co3" >${data.cothree}</textarea></td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterCom(event);" id="co4" >${data.coexam}</textarea></td>
  <td><textarea readonly   id="cototal" >${data.cototal}</textarea></td>
  <td><textarea  onkeyup="numbersOnly(this)" id="cocumm" >${data.cocummbf}</textarea></td>
    <td><textarea  readonly onkeyup="numbersOnly(this)" id="cocumscore" >${data.cocummscore}</textarea></td>
  <td><textarea id="classco">${data.coclassave}</textarea></td>
  <td><textarea readonly   id="cogrades" >${data.cogrades}</textarea></td>
     <td><textarea id="positionco">${data.coposition}</textarea></td>
  <td><textarea readonly="readonly" id="coremarks" >${data.coremark}</textarea> </td>
                </tr>
                <tr>
                 <td style="text-align: left;">Creative and Cultural Art</td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterCreat(event);" id="cr1" >${data.crone}</textarea></td>
  <td><textarea onkeyup="numbersOnly(this)"onclick="enterCreat(event);" id="cr2" >${data.crtwo}</textarea></td>
  <td><textarea onkeyup="numbersOnly(this)" onclick="enterCreat(event);" id="cr3" >${data.crthree}</textarea></td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterCreat(event);" id="cr4" >${data.crexam}</textarea></td>
  <td><textarea readonly   id="crtotal" >${data.crtotal}</textarea></td>
  <td><textarea  onkeyup="numbersOnly(this)" id="crcumm" >${data.crcummbf}</textarea></td>
    <td><textarea  readonly onkeyup="numbersOnly(this)" id="crcumscore" >${data.crcummscore}</textarea></td>
  <td><textarea id="classcr">${data.crclassave}</textarea></td>
  <td><textarea readonly   id="crgrades" >${data.crgrades}</textarea></td>
   <td><textarea id="positioncr">${data.crposition}</textarea></td>
  <td><textarea readonly="readonly" id="crremarks" >${data.crremark}</textarea> </td>
                </tr>
                 <tr>
                   
    <td style="text-align: left;">Civic Education</td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterCivic(event);" id="ci1" >${data.cione}</textarea></td>
  <td><textarea onkeyup="numbersOnly(this)"onclick="enterCivic(event);" id="ci2" >${data.citwo}</textarea></td>
  <td><textarea onkeyup="numbersOnly(this)" onclick="enterCivic(event);" id="ci3" >${data.cithree}</textarea></td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterCivic(event);" id="ci4" >${data.ciexam}</textarea></td>
  <td><textarea readonly   onclick="enterCivic(event);" id="citotal" >${data.citotal}</textarea></td>
  <td><textarea  onkeyup="numbersOnly(this)" onclick="enterCivic(event);" id="cicumm" >${data.cicummbf}</textarea></td>
    <td><textarea  readonly onkeyup="numbersOnly(this)" id="cicumscore" >${data.cicummscore}</textarea></td>
  <td><textarea id="classci">${data.ciclassave}</textarea></td>
  <td><textarea readonly   id="cigrades" >${data.cigrades}</textarea></td>
    <td><textarea id="positionci">${data.ciposition}</textarea></td>
  <td><textarea readonly="readonly" id="ciremarks" >${data.ciremark}</textarea> </td>
                </tr>
                <tr>
                 <td style="text-align: left; font-weight: bold;">Home Economics</td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterHome(event);" id="h1" >${data.hone}</textarea></td>
  <td><textarea onkeyup="numbersOnly(this)"onclick="enterHome(event);" id="h2" >${data.htwo}</textarea></td>
  <td><textarea onkeyup="numbersOnly(this)" onclick="enterHome(event);" id="h3" >${data.hthree}</textarea></td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterHome(event);" id="h4" >${data.hexam}</textarea></td>
  <td><textarea readonly   id="htotal" >${data.htotal}</textarea></td>
  <td><textarea  onkeyup="numbersOnly(this)" id="hcumm" >${data.hcummbf}</textarea></td>
    <td><textarea  readonly onkeyup="numbersOnly(this)" id="hcumscore" >${data.hcummscore}</textarea></td>
  <td><textarea id="classh">${data.hclassave}</textarea></td>
  <td><textarea readonly   id="hgrades" >${data.hgrades}</textarea></td>
    <td><textarea id="positionh">${data.hposition}</textarea></td>
  <td><textarea readonly="readonly" id="hremarks" >${data.hremark}</textarea> </td>
                </tr>
                 <tr>
                 <td style="text-align: left;font-weight: bold;">Physical and Health Education</td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterPhysical(event);" id="p1" >${data.pone}</textarea></td>
  <td><textarea onkeyup="numbersOnly(this)"onclick="enterPhysical(event);" id="p2" >${data.ptwo}</textarea></td>
  <td><textarea onkeyup="numbersOnly(this)" onclick="enterPhysical(event);" id="p3" >${data.pthree}</textarea></td>
    <td><textarea onkeyup="numbersOnly(this)" onclick="enterPhysical(event);" id="p4" >${data.pexam}</textarea></td>
  <td><textarea readonly   id="ptotal" >${data.ptotal}</textarea></td>
  <td><textarea  onkeyup="numbersOnly(this)" id="pcumm" >${data.pcummbf}</textarea></td>
    <td><textarea  readonly onkeyup="numbersOnly(this)" id="pcumscore" >${data.pcummscore}</textarea></td>
  <td><textarea id="classp">${data.pclassave}</textarea></td>
  <td><textarea readonly   id="pgrades" >${data.pgrades}</textarea></td>
     <td><textarea id="positionp">${data.pposition}</textarea></td>
  <td><textarea readonly="readonly" id="premarks" >${data.premark}</textarea> </td>
                </tr>
                
              </table>

              <br>
              
 
<div class="row">
    <div class="col-xs-6">
        <table id="example2" class="table  table table-bordered table-hover">
            <thead>
                <tr>
                    <th>AFFECTIVE DISPOSITION</th>
                    <th>5</th>
                    <th>4</th>
                    <th>3</th>
                    <th>2</th>
                    <th>1</th>  



                </tr>
            </thead>
          </tbody>
          <tr>
                    
    <td> Attentiveness  </td>
    <td><textarea></textarea></td>
  <td><textarea></textarea></td>
  <td><textarea></textarea></td>
    <td><textarea></textarea></td>
  <td><textarea></textarea></td>
  
                </tr>
                <tr>
                    
    <td> Attitude to school </td>
    <td><textarea></textarea></td>
  <td><textarea></textarea></td>
  <td><textarea></textarea></td>
    <td><textarea></textarea></td>
  <td><textarea></textarea></td>
  
                </tr>
                <tr>
                    
    <td> Cooperation with others</td>
    <td><textarea></textarea></td>
  <td><textarea></textarea></td>
  <td><textarea></textarea></td>
    <td><textarea></textarea></td>
  <td><textarea></textarea></td>
  
                </tr>
                <tr>
                    
    <td> Emotional Stability </td>
    <td><textarea></textarea></td>
  <td><textarea></textarea></td>
  <td><textarea></textarea></td>
    <td><textarea></textarea></td>
  <td><textarea></textarea></td>
  
                </tr>
                <tr>
                    
    <td>  Health  </td>
    <td><textarea></textarea></td>
  <td><textarea></textarea></td>
  <td><textarea></textarea></td>
    <td><textarea></textarea></td>
  <td><textarea></textarea></td>
  
                </tr>
                <tr>
                                          
      <td> Helping Others </td>
    <td><textarea></textarea></td>
  <td><textarea></textarea></td>
  <td><textarea></textarea></td>
    <td><textarea></textarea></td>
  <td><textarea></textarea></td>
  
                </tr>
                <tr>
                    
    <td> Honesty </td>
    <td><textarea></textarea></td>
  <td><textarea></textarea></td>
  <td><textarea></textarea></td>
    <td><textarea></textarea></td>
  <td><textarea></textarea></td>
  
                </tr>
                <tr>
                    
    <td> Leadership</td>
    <td><textarea></textarea></td>
  <td><textarea></textarea></td>
  <td><textarea></textarea></td>
    <td><textarea></textarea></td>
  <td><textarea></textarea></td>
  
                </tr>
                       <tr>
                    
    <td> Neatness  </td>
    <td><textarea></textarea></td>
  <td><textarea></textarea></td>
  <td><textarea></textarea></td>
    <td><textarea></textarea></td>
  <td><textarea></textarea></td>
  
                </tr>
                <tr>
                    
    <td> Perseverance  </td>
    <td><textarea></textarea></td>
  <td><textarea></textarea></td>
  <td><textarea></textarea></td>
    <td><textarea></textarea></td>
  <td><textarea></textarea></td>
  
                </tr>
                  <tr>
                    
    <td> Politeness </td>
    <td><textarea></textarea></td>       
   <td><textarea></textarea></td>
  <td><textarea></textarea></td>
    <td><textarea></textarea></td>
  <td><textarea></textarea></td>
  
                </tr>
                <tr>
                    
    <td> Punctuality  </td>
    <td><textarea></textarea></td>
  <td><textarea></textarea></td>
  <td><textarea></textarea></td>
    <td><textarea></textarea></td>
  <td><textarea></textarea></td>
  
                </tr>
                  <tr>
                    
    <td> Fluency </td>
    <td><textarea></textarea></td>
  <td><textarea></textarea></td>
  <td><textarea></textarea></td>
    <td><textarea></textarea></td>
  <td><textarea></textarea></td>
  
                </tr>
        </tbody>
        </table>
    </div>

    <div class="col-xs-6">
        <table class="table  table table-bordered table-hover ml-5">
            <thead>
                <tr>
                    <th>Time</th>
                    <th>Location</th>
                    <th>Message</th>
                    <th>Time</th>
                    <th>Location</th>
                    <th>Message</th>
                </tr>
            </thead>
            </tbody>
          <tr>
                    
    <td> English Language </td>
    <td><textarea></textarea></td>
  <td><textarea></textarea></td>
  <td><textarea></textarea></td>
    <td><textarea></textarea></td>
  <td><textarea></textarea></td>
  
                </tr>
                <tr>
                    
    <td> English Language </td>
    <td><textarea></textarea></td>
  <td><textarea></textarea></td>
  <td><textarea></textarea></td>
    <td><textarea></textarea></td>
  <td><textarea></textarea></td>
  
                </tr>
                <tr>
                    
    <td> English Language </td>
    <td><textarea></textarea></td>
  <td><textarea></textarea></td>
  <td><textarea></textarea></td>
    <td><textarea></textarea></td>
  <td><textarea></textarea></td>
  
                </tr>
                <tr>
                    
    <td> English Language </td>
    <td><textarea></textarea></td>
  <td><textarea></textarea></td>
  <td><textarea></textarea></td>
    <td><textarea></textarea></td>
  <td><textarea></textarea></td>
  
                </tr>
                <tr>
                    
    <td> English Language </td>
    <td><textarea></textarea></td>
  <td><textarea></textarea></td>
  <td><textarea></textarea></td>
    <td><textarea></textarea></td>
  <td><textarea></textarea></td>
  
                </tr>
                <tr>
                    
    <td> English Language </td>
    <td><textarea></textarea></td>
  <td><textarea></textarea></td>
  <td><textarea></textarea></td>
    <td><textarea></textarea></td>
  <td><textarea></textarea></td>
  
                </tr>
               

        </tbody>
        </table>
    </div>
</div>
<div class="row">
             <form class="form-inline col-md-6 ">
    <div  class="form-group">
      
         
        <h5 class="brand-text  font-weight-bold p-2" style="font-size: 15px;">Class Teacher's Comment:</h5><input type="text" class="form-text w-75"  value=""   placeholder="Student Name">
         
    </div>
    </form>
 
     
    

</div>



 
            </div>
            <!-- /.card-body -->
          </div>
          <!-- /.card -->

        
          <!-- /.card -->
        </div>
        <!-- /.col -->
      </div>

        </div> 


              `)
       
    });
       console.log("online");
      }
      
    }else{
       
        
      console.log("offline");
      Swal.fire({
  type: 'error',
  title: 'Oops...',
  text: 'No Internet Connection!'
  
})
    }
       
    })
 //save alert
     var ALERT_TITLE = "Oops!";
var ALERT_BUTTON_TEXT = "Ok";

if(document.getElementById) {
    window.alert = function(txt) {
        createCustomAlert(txt);
    }
}

function createCustomAlert(txt) {
    d = document;

    if(d.getElementById("modalContainer")) return;

    mObj = d.getElementsByTagName("body")[0].appendChild(d.createElement("div"));
    mObj.id = "modalContainer";
    mObj.style.height = d.documentElement.scrollHeight + "px";
    
    alertObj = mObj.appendChild(d.createElement("div"));
    alertObj.id = "alertBox";
    if(d.all && !window.opera) alertObj.style.top = document.documentElement.scrollTop + "px";
    alertObj.style.left = (d.documentElement.scrollWidth - alertObj.offsetWidth)/2 + "px";
    alertObj.style.visiblity="visible";

    h1 = alertObj.appendChild(d.createElement("h1"));
    h1.appendChild(d.createTextNode(ALERT_TITLE));

    msg = alertObj.appendChild(d.createElement("p"));
    //msg.appendChild(d.createTextNode(txt));
    msg.innerHTML = txt;

    btn = alertObj.appendChild(d.createElement("a"));
    btn.id = "closeBtn";
    btn.appendChild(d.createTextNode(ALERT_BUTTON_TEXT));
    btn.href = "#";
    btn.focus();
    btn.onclick = function() { removeCustomAlert();return false; }

    alertObj.style.display = "block";
    
}

function removeCustomAlert() {
    document.getElementsByTagName("body")[0].removeChild(document.getElementById("modalContainer"));
}
function ful(){
alert('successful');
}

  })