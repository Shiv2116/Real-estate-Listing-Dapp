
import { sendFileToIPFS, sendJSONToIPFS } from "@/components/pinata";


export default function List() {


async function updatePic(e){

  const file = e.target.files[0];
  const getCid = await sendFileToIPFS(file);
  console.log(getCid);
}

async function listProperty() {
  let getTitle = document.getElementById("title").value.toString();
  let getPrice = document.getElementById("price").value.toString();
  let getYear = document.getElementById("year").value.toString();
  let getCity = document.getElementById("city").value.toString();
  let getCountry = document.getElementById("country").value.toString();
  let getZip = document.getElementById("zip").value.toString();
  let getHoa = document.getElementById("hoa").value.toString();
  let getInfo = document.getElementById("info").value.toString();
  let getFloor = document.getElementById("floor").value.toString();
  let getAddress = document.getElementById("address").value.toString();
  let getBath = document.getElementById("bath").value.toString();
  let getRoom = document.getElementById("room").value.toString();
  let getGarage = document.getElementById("garage").value.toString();
  let getSellerName = document.getElementById("sellername").value.toString();
  let getSellerEmail = document.getElementById("selleremail").value.toString();
  let getSellerPhone = document.getElementById("sellerphone").value.toString();
  if(!getTitle|| !getPrice || !getYear || !getHoa || !getAddress || !getCity || !getCountry || !getZip || !getInfo || !getFloor || !getRoom || !getBath || !getGarage || !getSellerName || !getSellerEmail || !getSellerPhone){
    return
  }
  const receipt = await sendJSONToIPFS(getTitle,getPrice,getYear,getAddress,getCity,getCountry,getZip,getHoa,getInfo,getFloor,getBath,getRoom,getGarage,getSellerName,getSellerEmail,getSellerPhone)
  


}

  return (
  <div>
  <div className="container" style={{fontFamily:'SF Pro Display'}}>
    <div className="row g-6">
      <div className="col-md-2 col-lg-2">
      <img className="mb-3 d-flex" src="logo.png" width="140" height="45" />
      </div>
      <div className="col-md-3 col-lg-9">
        <h4 className="mb-3 d-flex justify-content-end">Property Info</h4>
        <h5 className="d-flex justify-content-start align-items-right mt-2 mb-2">
          <span className="text-primary bold">New Listing Title</span>
        </h5>
        <div className="col-sm-7">
        <input
          className="form-control"
                id="title"
                style={{
                  backgroundColor: "#d3d3d310",
                  fontWeight: "lighter",
                  color: "black",
                }}
              />
              </div>
        <h5
          className="d-flex justify-content-end"
          id="displayresult"
        />
        <form className="needs-validation" noValidate>
          <div className="row g-3">
            <div className="col-sm-2">
              <label htmlFor="first" className="form-label">
                Asking Price
              </label>
              <div className="input-group has-validation">
              <span className="input-group-text">$</span>
              <input
                type="text"
                className="form-control"
                name="price"
                id="price"
                style={{
                  backgroundColor: "#d3d3d310",
                  fontWeight: "lighter",
                  color: "black",
                }}
                required
              />
              </div>
              <div className="invalid-feedback">Asking Price Required</div>
            </div>

            <div className="col-sm-2">
              <label htmlFor="last" className="form-label">
                Year Built
              </label>
              <div className="input-group has-validation">
              <span className="input-group-text">#</span>
              <input
                type="text"
                className="form-control"
                name="year"
                id="year"
                style={{
                  backgroundColor: "#d3d3d310",
                  fontWeight: "lighter",
                  color: "black",
                }}
                required
              />
              </div>
              <div className="invalid-feedback">
                Valid last name is required.
              </div>
            </div>
            <div className="col-sm-2">
              <label  className="form-label">
                HOA
              </label>
              <div className="input-group has-validation">
              <span className="input-group-text">$</span>
                <input
                  type="text"
                  className="form-control"
                  name="hoa"
                  id="hoa"
                  style={{
                    backgroundColor: "#d3d3d310",
                    fontWeight: "lighter",
                    color: "black",
                  }}
                  required
                />
              </div>
            </div>
            <div className="col-sm-5">
              <label  className="form-label">
                Address
              </label>
              <div className="input-group has-validation">
                <input
                  type="text"
                  className="form-control"
                  name="address"
                  id="address"
                  style={{
                    backgroundColor: "#d3d3d310",
                    fontWeight: "lighter",
                    color: "black",
                  }}
                  required
                />
              </div>
            </div>
            <div className="col-sm-3">
              <label  className="form-label">
                City
              </label>
              <div className="input-group has-validation">
                <input
                  type="text"
                  className="form-control"
                  name="city"
                  id="city"
                  style={{
                    backgroundColor: "#d3d3d310",
                    fontWeight: "lighter",
                    color: "black",
                  }}
                  required
                />
              </div>
            </div>
            <div className="col-sm-4">
              <label  className="form-label">
                Country
              </label>
              <div className="input-group has-validation">
                <input
                  type="text"
                  className="form-control"
                  name="country"
                  id="country"
                  style={{
                    backgroundColor: "#d3d3d310",
                    fontWeight: "lighter",
                    color: "black",
                  }}
                  required
                />
              </div>
            </div>
            <div className="col-sm-3">
              <label  className="form-label">
                Postal Code / Zip Code
              </label>
              <div className="input-group has-validation">
                <span className="input-group-text">#</span>
                <input
                  type="text"
                  className="form-control"
                  name="zip"
                  id="zip"
                  style={{
                    backgroundColor: "#d3d3d310",
                    fontWeight: "lighter",
                    color: "black",
                  }}
                  required
                />
              </div>
            </div>
            <div className="col-lg-10">
              <label  className="form-label">
               Additional information
              </label>
              <div className="form-group">
                  <textarea className="form-control" id="info" rows="3"></textarea>
               </div>
            </div>
          </div>
        </form>
        <div className="row g-6">
          <div className="col-sm-2 mt-3">
            <label htmlFor="country" className="form-label">
              Floors
            </label>
            <div className="input-group has-validation">
                <input
                  type="number"
                  className="form-control"
                  name="floor"
                  id="floor"
                  style={{
                    backgroundColor: "#d3d3d310",
                    fontWeight: "lighter",
                    color: "black",
                  }}
                  required
                />
              </div>
          </div>
          <div className="col-sm-2 mt-3">
            <label htmlFor="country" className="form-label">
              Rooms
            </label>
            <div className="input-group has-validation">
                <input
                  type="number"
                  className="form-control"
                  name="room"
                  id="room"
                  style={{
                    backgroundColor: "#d3d3d310",
                    fontWeight: "lighter",
                    color: "black",
                  }}
                  required
                />
                </div>
          </div>
          <div className="col-sm-2 mt-3">
            <label htmlFor="country" className="form-label">
              Baths
            </label>
            <div className="input-group has-validation">
                <input
                  type="number"
                  className="form-control"
                  name="bath"
                  id="bath"
                  style={{
                    backgroundColor: "#d3d3d310",
                    fontWeight: "lighter",
                    color: "black",
                  }}
                  required
                />
                </div>
          </div>
          <div className="col-sm-2 mt-3">
            <label htmlFor="country" className="form-label">
              Garage
            </label>
            <div className="input-group has-validation">
                <input
                  type="number"
                  className="form-control"
                  name="garage"
                  id="garage"
                  style={{
                    backgroundColor: "#d3d3d310",
                    fontWeight: "lighter",
                    color: "black",
                  }}
                  required
                />
                </div>
          </div>
        </div>
        <h6 id="displaysuccess" />
        <h6>Add Property Picture</h6>
        <form
          className="card col-sm-4"
          style={{
            boxShadow: "0px 1px 5px #ffffff",
          }}
        >
          <h5
            className="d-flex justify-content-end"
            id="displaypicchanged"
          />
          <input
            style={{ backgroundColor: "transparent", color: "blue" }}
            className="btn btn-secondary d-flex justify-content-end"
            type="file"
            name="Asset"
            onChange={updatePic}
          />
        </form>
        <div className="row g-6">
          <h5 className="mt-3 mb-3 d-flex justify-content-start">
            Seller Info
          </h5>
          <div className="col-sm-4">
            <label htmlFor="email" className="form-label">
              Name{" "}
            </label>
            <input
              type="email"
              className="form-control"
              name="sellername"
              id="sellername"
              style={{
                backgroundColor: "#d3d3d310",
                fontWeight: "lighter",
                color: "black",
              }}
            />
          </div>
          <div className="col-sm-3">
            <label htmlFor="email" className="form-label">
              Email{" "}
            </label>
            <input
              type="email"
              className="form-control"
              name="selleremail"
              id="selleremail"
              style={{
                backgroundColor: "#d3d3d310",
                fontWeight: "lighter",
                color: "black",
              }}
            />
          </div>
          <div className="col-sm-3">
            <label htmlFor="email" className="form-label">
              Phone{" "}
            </label>
            <input
              type="text"
              className="form-control"
              name="sellerphone"
              id="sellerphone"
              style={{
                backgroundColor: "#d3d3d310",
                fontWeight: "lighter",
                color: "black",
              }}
            />
          </div>
        </div>
        <hr className="my-3" />
        <div className="row d-flex">
                <img
                  className="bd-placeholder-img"
                  
                  width="100%"
                  height="100%"
                  aria-hidden="true"
                  preserveAspectRatio="xMidYMid slice"
                  focusable="false"
                />
          </div>
          <button
          className="w-100 btn buttn btn-primary btn-md mt-4"
          style={{
           
            fontWeight: "lighter",
            fontSize: "20px",
          }}
          onClick={listProperty}
          
        >
          List Property
        </button>
        <hr className="my-3" />
        </div>
      </div>
    </div>
  </div>
);
}
