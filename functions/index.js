const functions = require('firebase-functions');

 const admin = require('firebase-admin');
 admin.initializeApp();

 exports.addAdminRole=functions.https.onCall((data, context)=>{
 	//get users and add function
 	return admin.auth().getUserByEmail(data.email).then(user=>{
 		return admin.auth().setCustomUserClaims(user.uid,{
 			admin:true
 		});
 	}).then(()=>{
 		return{
 			message:`sucess! ${data.email} has been made an admin`
 		}
 	}).catch((err)=>{
 		return err;
 	});
 	

 });

  


