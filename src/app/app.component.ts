import { Component } from '@angular/core';
interface Tarjetas{
  titulo:string;
  subtitulo:string;
  nro?:number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ue espera';
  public ArregloTarjetas: Tarjetas[]=[];

  ngOnInit(): void {
    this.ArregloTarjetas = [
      {titulo:'Video 1', subtitulo: 'Subtitulo Video 1'},
      {titulo:'Video 2', subtitulo: 'Subtitulo Video 2'},
      {titulo:'Video 3', subtitulo: 'Subtitulo Video 3'},
    ]
  }

}

