let cl=console.log;

function hrcall(){//API call
   let promise= new Promise((resolve,reject)=>{
   setTimeout(()=>{
      let errr= Math.random() >=.5 ? false: true;
      if(!errr){
         resolve("candidate shortlisted for interview first round ")
      }
      else{
         reject("lookig for another candidate")
      }

   },1000)//Api browser
   })
   return promise
}
function firstround(){//API call
   return new Promise((resolve,reject)=>{
      setTimeout(()=>{
         let errr= Math.random() >=.5 ? false: true;
         if(!errr){
            resolve("candidate shortlistad for second round");
         }
         else{
            reject(" not good even in basic");
         }
      },400)
   })
}
function secondround(){
   return new Promise((resolve,reject)=>{
      setTimeout(()=>{
         let errr= Math.random() >=.5 ? false: true;
         if(!errr){
            resolve("candidate shortlistad for thirdround");
         }
         else{
            reject(" not good in techinical");
         }
      },500)
   })
}
function ml(){
   return new Promise((resolve,reject)=>{
      setTimeout(()=>{
         let errr= Math.random() >=.5 ? false:true;
         if(!errr){
            resolve("candidate shortlisted for this profile")
         }
         else{
            reject("candidate is not able to explain techinical questions")
         }
      },1000)
   })
}
function hrcallsallary(){
cl(" congrats for your new job")
}


hrcall()
.then((rel)=>{
   cl(rel)
   return firstround();
})
.then((rel)=>{
   cl(rel)
   return secondround()
})
.then((rel)=>{
   cl(rel)
   return ml()
})
.then((rel)=>{
   cl(rel)
 hrcallsallary()
})
.catch((errrr)=>{
   cl(errrr)
})