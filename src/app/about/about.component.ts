import { Component, OnInit } from '@angular/core';

import { TeamMember } from './team-member.model';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {
  
  

  teamMembers: TeamMember[] = [
    new TeamMember('David Ezra Jay', 'Founder', 'David became inspired to start GreenStand after witnessing first hand deforestation and the many reasons it is perpetuated.', '../../assets/images/David-Ezra-Jay.jpg'),
    new TeamMember('Alan Cole', 'Web Developer', 'Happy to be building the GreenStand Website', '../../assets/images/Alan-Cole.jpg')
  ]


  constructor() { }

  ngOnInit() {
    console.log("about page!");
  }

}
