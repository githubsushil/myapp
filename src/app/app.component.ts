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
  
  ngOnInit(){
      this.httpClient.get('https://samples.openweathermap.org/data/2.5/find?q=London&units=metric&appid=b6907d289e10d714a6e88b30761fae22')
        .subscribe( (data : any) =>{
        this.abc = data;
        console.log( this.abc  );
      } )
    }
  
}
