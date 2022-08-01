import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';



@Component({
  selector: 'app-reactive-login-form',
  templateUrl: './reactive-login-form.component.html',
  styleUrls: ['./reactive-login-form.component.css']
})
export class ReactiveLoginFormComponent implements OnInit {

  csdForm !: FormGroup;

  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.csdForm = this.formBuilder.group({
      country : ['',Validators.required],
      state : ['',Validators.required],
      district : ['',Validators.required],
    });

  }


   states = [ "Andhra Pradesh","Arunachal Prades","Assam","Bihar","Chhattisgarh","Goa","Gujarat",
                "Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka",
                "Kerala","Madhya Pradesh","Maharashtra","Manipur","Odisha","Punjab","Rajasthan",
                "Sikkim","Tamil Nadu","Telangana","Tripura","Uttarakhand","Uttar Pradesh","West Bengal",
                "Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli","Daman and Diu",
                "Delhi","Lakshadweep","Puducherry"];







}
