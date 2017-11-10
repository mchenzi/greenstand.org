import { Http } from '@angular/http';
import { MapType } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';

import { HttpService } from '../../http.service';

interface Tree {
  lat: Number;
  lng: Number;
}

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})



export class MapComponent implements OnInit {
// map stuff
  title: String = 'there is a solution';
  lat: Number = -3.3869;
  lng: Number = 36.683;
  zoom: Number = 8;
  ui: Boolean = true;
  scrollWheel: Boolean = false;
  zoomControl: Boolean = false;
  mapType: String = 'hybrid';

  // marker stuff
  markerUrl: String = '../../assets/images/tree-marker-40px.png';
  trees: Tree[];
  constructor(private httpService: HttpService) {}

  ngOnInit() {
  }

}
