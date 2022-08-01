import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from "@angular/forms";

@Component({
  selector: 'app-notebook',
  templateUrl: './notebook.component.html',
  styleUrls: ['./notebook.component.css']
})
export class NotebookComponent implements OnInit {

  csdForm !:FormGroup;
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.csdForm = this.formBuilder.group({
      inState : ['',Validators.required],
      inDistrict : ['',Validators.required]
    })
  }

  states = [ "Andhra Pradesh","Arunachal Prades","Assam","Bihar","Chhattisgarh","Goa","Gujarat",
                "Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka",
                "Kerala","Madhya Pradesh","Maharashtra","Manipur","Odisha","Punjab","Rajasthan",
                "Sikkim","Tamil Nadu","Telangana","Tripura","Uttarakhand","Uttar Pradesh","West Bengal",
                "Andaman and Nicobar Islands","Chandigarh","Dadra and Nagar Haveli","Daman and Diu",
                "Delhi","Lakshadweep","Puducherry"];




}
