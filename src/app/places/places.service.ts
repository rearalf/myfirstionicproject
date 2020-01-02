import { Injectable } from "@angular/core";
import { Place } from "./place.model";

@Injectable({
  providedIn: "root",
})
export class PlacesService {
  private places: Place[] = [
    {
      id: "1",
      title: "Eiffel Tower",
      imageURL:
        "https://upload.wikimedia.org/wikipedia/commons/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg",
      comments: ["Awesome place", "Wonderfull experience"],
    },
    {
      id: "2",
      title: "Taj Mahal",
      imageURL:
        "https://www.ngenespanol.com/wp-content/uploads/2018/08/Las-historias-que-se-ocultan-detr%C3%A1s-del-Taj-Mahal.jpg",
      comments: ["Awesome place", "Wonderfull experience"],
    },
    {
      id: "3",
      title: "Statue of Liberty",
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Statue_of_Liberty_7.jpg",
      comments: ["Awesome place", "Wonderfull experience"],
    },
    {
      id: "4",
      title: "Statue of Liberty",
      imageURL: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Statue_of_Liberty_7.jpg",
      comments: [],
    }
  ];

  constructor() {}

  getPlaces() {
    return [...this.places];
  }

  getPlace(placeId: string) {
    return {
      ...this.places.find((place) => {
        return place.id === placeId;
      }),
    };
  }

  addPlace(title: string, imageURL: string) {
    this.places.push({
      title,
      imageURL,
      comments: [],
      id: this.places.length + 1 + "",
    });
  }

  deletePlace(placeId: string) {
    this.places = this.places.filter((place) => {
      return place.id !== placeId;
    });
  }
}
