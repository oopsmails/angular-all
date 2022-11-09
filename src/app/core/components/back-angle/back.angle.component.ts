import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-back-angle',
  templateUrl: './back.angle.component.html',
  styleUrls: ['./back.angle.component.scss']
})
export class BackAngleComponent implements OnInit {

  @Input() routerLinkInput: string = "/home";
  @Input() linkText: string = "Back to Home";

  faAngleLeft = faAngleLeft;

  constructor(private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
  }

  navTo() {
    console.log(this.routerLinkInput, this.linkText);
    this.router.navigate([this.routerLinkInput], { relativeTo: this.route });
  }

}
