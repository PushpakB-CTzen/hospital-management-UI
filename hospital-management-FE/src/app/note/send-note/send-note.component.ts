import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms/';
import { ApicallService } from 'src/app/apicall.service';
import { Profile } from 'src/app/models/profile-model';
import { Note } from '../note-model';

@Component({
  selector: 'app-send-note',
  templateUrl: './send-note.component.html',
  styleUrls: ['./send-note.component.css']
})
export class SendNoteComponent implements OnInit {

  profiles:Profile[];

  searchName:string='';
  selectedName:String;
  selectedProfile:Profile|undefined;
  role:string='';
  note:Note;
  noteForm:any;
  constructor(private apiService:ApicallService) { }

  ngOnInit(): void {
    //this.getNameAndDesignation(this.searchName);
    //this.onSelect();
    //this.selectedProfile.role="";
  }

  getNameAndDesignation(name:string){   
    this.apiService.getAllEmployeeByName(name).subscribe(
              data => {​​​​ 
                  this.profiles=data;  
              }​​​​,  
              error => {​​​​
                  console.log('Error: ', error);
              }​​​​);
  }

  onSelect(name){
    this.selectedProfile=this.profiles.find(e=>e.firstName===name.target.value);
    this.role=this.selectedProfile?.role!;
  }


  nameChange(event){
    //this.searchName=(<HTMLInputElement>event.taget).value
  this.getNameAndDesignation( this.searchName);

}

onSubmit(sendNote:NgForm){
  console.log(sendNote.value);
  console.log(sendNote.value.message);
  this.note=new Note(this.selectedProfile?.id!,sendNote.value.message,sendNote.value.urgency,this.role)
 console.log(this.note)
 this.apiService.sendNote(this.note).subscribe(
    data => {​​​​ 
            console.log(data)
            alert("Note Send successfully!!");
        }​​​​,  
    error => {​​​​
            alert("error has occured while sending note!!");
        }​​​​
 )
  

  console.log(this.note)

}

}
