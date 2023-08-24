/*

API Key:8cf3c313cc0a477402db

API Secret:d2de0977a0e87ba82e32321bceac1b9a78d8e99e1575434113694d8801d04194

JWT:eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySW5mb3JtYXRpb24iOnsiaWQiOiJjYmE4ZmZiZC0zN2Y1LTRiNjktYWUwNy0zNWI5N2MxMjgyMDIiLCJlbWFpbCI6InNoaXZkaXhpdDY0N0BnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwicGluX3BvbGljeSI6eyJyZWdpb25zIjpbeyJpZCI6IkZSQTEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX0seyJpZCI6Ik5ZQzEiLCJkZXNpcmVkUmVwbGljYXRpb25Db3VudCI6MX1dLCJ2ZXJzaW9uIjoxfSwibWZhX2VuYWJsZWQiOmZhbHNlLCJzdGF0dXMiOiJBQ1RJVkUifSwiYXV0aGVudGljYXRpb25UeXBlIjoic2NvcGVkS2V5Iiwic2NvcGVkS2V5S2V5IjoiOGNmM2MzMTNjYzBhNDc3NDAyZGIiLCJzY29wZWRLZXlTZWNyZXQiOiJkMmRlMDk3N2EwZTg3YmE4MmUzMjMyMWJjZWFjMWI5YTc4ZDhlOTllMTU3NTQzNDExMzY5NGQ4ODAxZDA0MTk0IiwiaWF0IjoxNjkyNjMxNjM0fQ.2rQwV9BqtOl6DbALGGuwapb3-CYXTHiBTRKqnMUfeFE



Gateway 
JWT:sV0jv-Yc1LnbGb_uZm2wfl3rOVzabFFUNmtuFoU-raDn0pGg7eCELRYhrZKg6Dmq

*/

export const API_KEY = "8cf3c313cc0a477402db";
export const  API_SECRET="d2de0977a0e87ba82e32321bceac1b9a78d8e99e1575434113694d8801d04194";
export const gatewayjwt="sV0jv-Yc1LnbGb_uZm2wfl3rOVzabFFUNmtuFoU-raDn0pGg7eCELRYhrZKg6Dmq";
export const ipfsgateway= "gold-racial-turkey-147";

export const readHeader = {
    "Content-Type": "application/json",
}

export const getHeader = {
    headers:{
        pinata_api_key:API_KEY,
        pinata_secret_api_key:API_SECRET,
    }
}
export const sendJsonHeader={
    headers:{
        "Content-Type": "application/json",
        pinata_api_key:API_KEY,
        pinata_secret_api_key:API_SECRET,
    }
}