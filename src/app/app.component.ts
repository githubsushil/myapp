import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';
  
  constructor( private httpClient : HttpClient ) {
    
  }
  
  abc : any ;
  nameObj : any;
  
  ngOnInit(){
      this.httpClient.get('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=d90e29ed33a4400cb666a71e509ecaee')
        .subscribe( (data : any) =>{
        this.abc = data;
        console.log( this.abc  );
      } )

    
    if (typeof(Storage) !== "undefined") {
            localStorage.setItem("name", "Sushil");
            document.getElementById("result1").innerHTML = "Name" + '-'  + localStorage.getItem("name");
            } 
      else {  document.getElementById("name1").innerHTML = "Sorry, your browser does not support Web Storage...";
          }


    function validateForm() {
      var x = document.forms["myForm"]["fname"].value;
      if (x == "") {
        alert("Name must be filled out");
        return false;
      }
    }


      var arrayItem;
      var array = ['Sushil','Sandip','Alop'];
      // Add Data 
      localStorage.setItem("Name", JSON.stringify(array));

      array = JSON.parse(localStorage.getItem("array"));
      // Fetch array
      this.nameObj = array;
      for( let i = 0 ; i <array.length ; i++){
          arrayItem = this.nameObj +"<br>"; 
      }
      // remove items
      localStorage.removeItem(name);
      console.log("iten after delete" +name);

      document.getElementById("result2").innerHTML = arrayItem;
      
      console.log(typeof array); //object
      console.log(array); //[1, 2, 3]
        

}
  
}
