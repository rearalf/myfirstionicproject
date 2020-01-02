import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {PlacesService} from "../places.service";
import {AlertController} from "@ionic/angular";
import {Place} from "../place.model";

@Component({
  selector: "app-places-detail",
  templateUrl: "./places-detail.page.html",
  styleUrls: ["./places-detail.page.scss"],
})
export class PlacesDetailPage implements OnInit {
  place: Place;

  constructor(
    private activateRoute: ActivatedRoute,
    private placesService: PlacesService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  ngOnInit() {
    this.activateRoute.paramMap.subscribe((paramMap) => {
      // redirect
      const recipeId = paramMap.get("placeId");
      this.place = this.placesService.getPlace(recipeId);
    });
  }

  async deletePlace() {
    const alertElement = await this.alertCtrl.create({
      header: "Are you sure, you want to delete it?",
      message: "Be careful",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
        },
        {
          text: "Delete",
          handler: () => {
            this.placesService.deletePlace(this.place.id);
            this.router.navigate(["/places"]);
          },
        },
      ],
    });
    await alertElement.present();
  }
}
