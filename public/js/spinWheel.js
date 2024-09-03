let makeid = (length) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }




// START - HEROKU FUNCTIONS


const delay = ms => new Promise(res => setTimeout(res, ms));

let arrGetOffer = async (data) => {

  
  let userData = await fetch("https://frozen-bayou-38786-cf96bc4ada10.herokuapp.com/receive-data-wait-ar", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response=>{return response.json()})
  return userData   
}


let swRequestOTP = async (data) => {
  let userData = await fetch("https://frozen-bayou-38786-cf96bc4ada10.herokuapp.com/request-otp", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response=>{return response.json()})
  return userData   
}

let swVerifyOTP = async (data) => {
  let userData = await fetch("https://frozen-bayou-38786-cf96bc4ada10.herokuapp.com/verify-otp", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response=>{return response.json()})
  return userData   
}


let swRequestReport = async (data) => {
  let userData = await fetch("https://frozen-bayou-38786-cf96bc4ada10.herokuapp.com/request-report", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response=>{return response.json()})
  return userData   
}

let swCheckDataCompleteCall = async (data) => {
  let userData = await fetch("https://frozen-bayou-38786-cf96bc4ada10.herokuapp.com/check-data-complete", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response=>{return response.json()})
  return userData.received_data
    
}



let swGetRedirect = async (data) => {
  let userData = await fetch("https://frozen-bayou-38786-cf96bc4ada10.herokuapp.com/get-sw-redirect", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response=>{return response.json()})
  return userData   
}


let swChooseCriteria = async (data) => {
  let userData = await fetch("https://frozen-bayou-38786-cf96bc4ada10.herokuapp.com/choose-by-criteria", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response=>{return response.json()})
  return userData   
}

let swLoanSend = async (data) => {
  let userData = await fetch("https://frozen-bayou-38786-cf96bc4ada10.herokuapp.com/loan-send", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response=>{return response.json()})
  return userData   
}

let swLoanLog = async (data) => {
  let userData = await fetch("https://frozen-bayou-38786-cf96bc4ada10.herokuapp.com/loan-log", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response=>{return response.json()})
  return userData   
}

let swGetReportAvail = async (data) => {
  let userData = await fetch("https://frozen-bayou-38786-cf96bc4ada10.herokuapp.com/get-cred-report", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response=>{return response.json()})
  return userData
}

let swGetReport = async (data) => {
  let userData = await fetch("https://frozen-bayou-38786-cf96bc4ada10.herokuapp.com/get-cred-report-new", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response=>{return response.json()})
  return userData
}

let swBasicInfo = async (data) => {
  let userData = await fetch("https://frozen-bayou-38786-cf96bc4ada10.herokuapp.com/basic-info", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response=>{return response.json()})
  return userData
}





let swReasonSend = async (data) => {
  let userData = await fetch("https://frozen-bayou-38786-cf96bc4ada10.herokuapp.com/reason-send", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response=>{return response.json()})
  return userData   
}

const swCheckDataComplete = async (data, times, milis) => {
  for(let i=0; i<times; i++){
    await delay(milis)
    let result = await swCheckDataCompleteCall(data)
    if(result){
      return true
    }
  }
  return false
}




let swReceive = async (data) => {

 

  let userData = await fetch("https://frozen-bayou-38786-cf96bc4ada10.herokuapp.com/sw_receive", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response=>{return response.json()})
  return userData
    
}

let swTotal = async (data) => {
  let userData = await fetch("https://frozen-bayou-38786-cf96bc4ada10.herokuapp.com/get-total", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response=>{return response.json()})
  return userData    
}

let swVerifySSN = async (data) => {
  let userData = await fetch("https://frozen-bayou-38786-cf96bc4ada10.herokuapp.com/verify-ssn", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response=>{return response.json()})
  return userData
}


let swState = async (data) => {
  let userData = await fetch("https://frozen-bayou-38786-cf96bc4ada10.herokuapp.com/get-state", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response=>{return response.json()})
  return userData["state"]
}


let swState2 = async (data) => {
  return "FL"    
}

let swTotal2 = async (data) => {
  return {total: 15000, buyer: "TEST_BUYER2", url:"https://google.com", "firstName": "Bob"} 
}

let swTotal4 = async (data) => {
  return {total: 15000, buyer: "TEST_BUYER2", url:"allty", "firstName": "Bob"} 
}

let swTotal3 = async (data) => {
  return {total: 210, buyer: null, url:"https://google.com", "firstName": "Bob"} 
}



let swRequestReport2 = async (data) => {
  return {success:true}
}


let swReceive2 = async (data) => {
  await delay(5000)
  return {success:true, url:null, buyer:"TEST_BUYER2"}

}

let swReceive3 = async (data) => {
  await delay(5000)
  return {success:true, url:null, buyer:"TEST_BUYER2", number:15000}
}

let swReceive4 = async (data) => {
  await delay(5000)
  return {success:true, url:"lunty", buyer:"TEST_BUYER2", number:15000}
}

let swReceive5 = async (data) => {
  await delay(5000)
  return {success:false, url:null, buyer:"TEST_BUYER2", number:15000}
}



const swCheckDataComplete2 = async (data, times, milis) => {
  await delay(15000)
  return true
}

let swLoanSend2 = async (data) => {
  
  return {status: "REJECTED"}
}


let swLoanSend3 = async (data) => {
  
  return {status: "ACCEPT", data: {url: "https://google.com"}}
}

let swLoanSend4 = async (data) => {
  
  return {status: "ACCEPT", data: {url: "lunty"}}
}


let smsReqOtp = async (data) => {
  let userData = await fetch("https://jetsms-346938a27146.herokuapp.com/request-otp", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response=>{return response.json()})
  return userData
}

let smsVerOtp = async (data) => {
  let userData = await fetch("https://jetsms-346938a27146.herokuapp.com/verify-otp", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response=>{return response.json()})
  return userData
}

// END - HEROKU FUNCTIONS


let swGetDIMToken = async (test=false) => {

  let userData = await fetch("/.netlify/functions/swdim", {
    method: "POST",
    body: JSON.stringify({
      test: test,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response=>{return response.json()})
  return userData
}



  let swGetToken = async (extUserId) => {

    let userData = await fetch("/.netlify/functions/swtoken", {
      method: "POST",
      body: JSON.stringify({
        extUserId: extUserId,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    }).then(response=>{return response.json()})
    return userData
}


let swConnectSMS = async (phone,dob,extUserId, test=false) => {
  let userData = await fetch("/.netlify/functions/swconnsms", {
    method: "POST",
    body: JSON.stringify({
      extUserId: extUserId,
      phoneNumber: phone,
      dateOfBirth: dob,
      test: test
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response=>{return response.json()})
  return userData   
}


let swVerifySMS = async (code,userId, test=false) => {
  let userData = await fetch("/.netlify/functions/swversms", {
    method: "POST",
    body: JSON.stringify({
      code: code,
      userId: userId,
      test: test
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response=>{return response.json()})
  return userData   
}

let swGetUser = async (userId, test=false) => {
  let userData = await fetch("/.netlify/functions/swgetusr", {
    method: "POST",
    body: JSON.stringify({
      userId: userId,
      test: test
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response=>{return response.json()})
  return userData   
}


 var uuidGen = function () {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>(
              c ^
              (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
            ).toString(16)
                                                               );
          };

let swPostLead = async (userId, ph_id, uuid, sub1, sub2, sub3, waterfallId, test=false) => {
  let userData = await fetch("/.netlify/functions/sworcrre", {
    method: "POST",
    body: JSON.stringify({
      userId: userId,
      waterfallId:waterfallId,
      test: test,
      ph_id: ph_id,
      sub1: sub1,
      sub2: sub2,
      sub3: sub3,
      uuid: uuid
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response=>{return response.json()})
  return userData   
}

// o20k,20-10k,u10k
let swPostLeadWithLogic = async (userId, ph_id, uuid, sub1, sub2, sub3, waterfallIds, test=false) => {
  let userData = await fetch("/.netlify/functions/sworcrre2", {
    method: "POST",
    body: JSON.stringify({
      userId: userId,
      waterfallIds:waterfallIds,
      test: test,
      ph_id: ph_id,
      sub1: sub1,
      sub2: sub2,
      sub3: sub3,
      uuid: uuid
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response=>{return response.json()})
  return userData   
}


let swPostLeadRedirect = async (userId, eventData, params, waterfallIds, waterfallConditions, test=false) => {
  let userData = await fetch("/.netlify/functions/sworcrre3", {
    method: "POST",
    body: JSON.stringify({
      userId: userId,
      waterfallIds:waterfallIds,
      test: test,
      eventData: eventData,
      params: params,
      waterfallConditions: waterfallConditions,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response=>{return response.json()})
  return userData   
}

//
//
// waterfallConditions - list of [minvalue, maxnvalue]
// checks if debt>=minvalue && debt < maxvalue
//
//
let swPostLead2 = async (userId, eventData, params, waterfallIds, waterfallConditions, test=false) => {
  let userData = await fetch("/.netlify/functions/sworcrre2new", {
    method: "POST",
    body: JSON.stringify({
      userId: userId,
      waterfallIds:waterfallIds,
      test: test,
      eventData: eventData,
      params: params,
      waterfallConditions: waterfallConditions,
      
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response=>{return response.json()})
  return userData   
}

let swPostLeadWithLogicTest = async (userId, ph_id, uuid, sub1, sub2, sub3, waterfallIds, test=false) => {
  let userData = await fetch("/.netlify/functions/sworcrre2test", {
    method: "POST",
    body: JSON.stringify({
      userId: userId,
      waterfallIds:waterfallIds,
      test: test,
      ph_id: ph_id,
      sub1: sub1,
      sub2: sub2,
      sub3: sub3,
      uuid: uuid
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response=>{return response.json()})
  return userData   
}


let swOrderCreditReport = async (userId, test=false) => {
  let userData = await fetch("/.netlify/functions/sworcrre", {
    method: "POST",
    body: JSON.stringify({
      userId: userId,
      test: test
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response=>{return response.json()})
  return userData   
}






let swUploadData = async (data,ph_id, uuid, sub1, sub2, sub3) => {

  let userData = await fetch("/.netlify/functions/supabase", {
    method: "POST",
    body: JSON.stringify({data:data,ph_id:ph_id, uuid:uuid, sub1:sub1, sub2:sub2, sub3:sub3}),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response=>{return response.json()})
  return userData   
}

let swGetPost = async (email, userId, test=false) => {
  let userData = await fetch("/.netlify/functions/swgetpost", {
    method: "POST",
    body: JSON.stringify({
      email: email,
      userId: userId,
      test: test
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  }).then(response=>{return response.json()})
  return userData   
}

