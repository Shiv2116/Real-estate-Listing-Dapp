import axios from 'axios';
import { 
    
    gatewayjwt,
    readHeader,
    getHeader,
    sendJsonHeader,
    ipfsgateway,
    API_KEY,
    API_SECRET,
     } from './config.js';


export async function sendJSONToIPFS(getTitle,getPrice,getYear,getAddress,getCity,getCountry,getZip,getHoa,getInfo,getFloor,getBath,getRoom,getGarage,getSellerName,getSellerEmail,getSellerPhone,picCid ) {
    const fetchdate = await getDate()
    const listdate = fetchdate.dateValue;
    const url = 'https://api.pinata.cloud/pinning/pinJSONToIPFS';
    var data = JSON.stringify({
      "pinataMetadata": {
        name: "listdata",
      },
      "pinataOptions": {
        "cidVersion": 1
      },
      "pinataContent": {
        "PropertyInfo": {
          "Title": getTitle,
          "Price": getPrice,
          "Year": getYear,
          "Address": getAddress,
          "City": getCity,
          "Country": getCountry,
          "Zip": getZip,
          "Hoa": getHoa,
          "Info": getInfo,
          "Floors": getFloor,
          "Baths": getBath,
          "Rooms": getRoom,
          "Garage": getGarage,
          "Name": getSellerName,
          "Email": getSellerEmail,
          "Phone": getSellerPhone,
          "Listed": listdate,
          "Photo": "https://"+ ipfsgateway + ".mypinata.cloud/ipfs/"+picCid+ "?pinataGatewayToken=",
          // "Picture" : "https://" + ipfsgateway + ".mypinata.cloud/ipfs/" + picture + '?pinataGatewayToken='
        }
    }});
    const sendFile = await axios.post(url, data, sendJsonHeader);
    const hash = `ipfs://${sendFile.data.IpfsHash}`;
    console.log(hash);
    return "complete";
  }

/*

PINATA IPFS FUNCTION TO GET THE FILES CID's

*/


export async function getFileFromIPFS() {
  const queryFilter = "metadata=[name]=listdata";
  const url = "https://api.pinata.cloud/data/pinList?" + queryFilter;
  const fetchFile = await axios.get(url, getHeader);
  const response = fetchFile.data.rows;
  const output = response.map((value) => {
    let getCid = value.ipfs_pin_hash;
    return getCid;
  });
  return output;
} 

/*

PINATA IPFS FUNCTION TO READ THE FILES AFTER OBTAINING THE CID's

*/


export async function readFileFromIPFS() {
    const output = await getFileFromIPFS();
    const listArray = [];
    let i = 0;
    for (i; i < output.length; i++) {
        const value = output[i];
        const ipfsPath = "https://" + ipfsgateway + ".mypinata.cloud/ipfs/" + value + '?pinataGatewayToken=' +gatewayjwt;
        const info = await axios.get(ipfsPath, readHeader);
        console.log(info.data.PropertyInfo)
        listArray.push(info.data.PropertyInfo);
      }
      return listArray;
    }

/*

PINATA IPFS FUNCTION TO UPLOAD PICTURES AND FILES

*/

export async function sendFileToIPFS (file) {
        const formData = new FormData();
        const url = "https://api.pinata.cloud/pinning/pinFileToIPFS"
        formData.append("file", file);
        const opts = JSON.stringify({
          cidVersion: 0,
        })
        formData.append('pinataOptions', opts);
        const options = {
          maxBodyLength: "Infinity",
          headers: {
          'Content-Type': `multipart/form-data; boundary=${formData._boundary}`,
            pinata_api_key:API_KEY,
            pinata_secret_api_key: API_SECRET,
            Accept: 'text/plain',
        }
      }
        const sendPic = await axios.post(url, formData, options);
        return sendPic.data.IpfsHash;
      }

/*

FUNCTION TO CONVERT CURRENT DATE TO UNIX TIMESTAMP AND
YEAR.MONTH.DAY

*/


export async function getDate() {
        const dateFormat = new Date(Date.now());
        const dateValue = (dateFormat.getMonth()+1)+
        '.'+ dateFormat.getDate()+'.'+ dateFormat.getFullYear();
        const time = (new Date(dateValue.split('.').join("-")).getTime())/1000;
        return {dateValue, time};
    }