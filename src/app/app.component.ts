import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from "@angular/forms";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myapp';
  
  constructor( private httpClient : HttpClient ) {
    
  }
  // yourName :any;
  abc : any ;
  nameObj : any;
  
  ngOnInit(){
    // get dtata
      // this.httpClient.get('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=d90e29ed33a4400cb666a71e509ecaee')
      //   .subscribe( (data : any) =>{
      //   this.abc = data;
      //   console.log( this.abc  );
      // } )
     
    // Local storage
  //   if (typeof(Storage) !== "undefined") {
  //           localStorage.setItem("name", "Sushil");
  //           document.getElementById("result1").innerHTML = "Name" + '-'  + localStorage.getItem("name");
  //           } 
  //     else {  document.getElementById("name1").innerHTML = "Sorry, your browser does not support Web Storage...";
  //         }


  //  var arrayItem;
  //     var array = ['Sushil','Sandip','Alop'];
  //     localStorage.setItem("Name", JSON.stringify(array));

  //     array = JSON.parse(localStorage.getItem("array"));
  //     this.nameObj = array;
  //     for( let i = 0 ; i <array.length ; i++){
  //         arrayItem = this.nameObj +"<br>"; 
  //     }
  //     localStorage.removeItem(name);
  //     console.log("iten after delete" +name);

  //     document.getElementById("result2").innerHTML = arrayItem;
      
  //     console.log(typeof array); 
  //     console.log(array); 
        

    }

    // Post Data
    postProfile(){
    this.httpClient.post('/assets/sample.json',
      {
        name : 'Sushil',
        age : 42
      }
      )
    
      .subscribe( (data : any) =>{
        console.log( data  );
      }  )
  }
   
}
