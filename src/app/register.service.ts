import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  

  url = "http://localhost:8080/Drivetrackersystem/CreateDrive";
  constructor(private _http: HttpClient) { }
  register(userdata) {
    return this._http.post(this.url, userdata);
  }

  data() {
    return this._http.get("http://localhost:8080/Drivetrackersystem/ViewDrive");
  }

  deletedata(data) {
    return this._http.post("http://localhost:8080/Drivetrackersystem/DeleteDrive", data);
  }

  update(id) {
    return this._http.post("http://localhost:8080/Drivetrackersystem/UpdateDrive", id);
  }
  signup(data) {
    return this._http.post("http://localhost:8080/Drivetrackersystem/UserRegister", data);
  }

  logindata(data) {
    
      return this._http.post("http://localhost:8080/Drivetrackersystem/LoginUser", data);
    
  }
  
}
