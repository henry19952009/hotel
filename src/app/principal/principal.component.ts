import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent {
  angle:number = 0;
  spinner:any;
  galleryspin(sign:number):void{
  this.spinner = document.querySelector("#spinner");
  if (!sign) { this.angle = this.angle + 45; } else { this.angle = this.angle - 45; }
  this.spinner.setAttribute("style","-webkit-transform: rotateY("+ this.angle +"deg); -moz-transform: rotateY("+ this.angle +"deg); transform: rotateY("+ this.angle +"deg);");
  }
}
