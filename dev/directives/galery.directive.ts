/**
 * Created by gwuli on 20.08.2016.
 */
import {Component, OnInit, Input} from "@angular/core";
import {baseImagePath} from "../shared/config.component";

@Component({
    selector: 'image-calery',
    template: `<div>
  <div>
<span *ngFor="let image of images; let i = index">
<img [src]="baseImagePath + image" class="img" (click)="selectedImageId = i">
</span>
  </div>
</div>

<div class="modal-background" *ngIf="selectedImageId != null">
<img [src]="baseImagePath + images[selectedImageId]" class="modal-content"> <button type="button" (click)="selectedImageId=null" class="modal-close">X</button>
<button type="button" class="modal-previous modal-close" (click)="selectedImageId = selectedImageId-1" *ngIf="(selectedImageId-1)>=0">←</button>
<button type="button" class="modal-next modal-close" (click)="selectedImageId = selectedImageId+1" *ngIf="(selectedImageId+1)<images.length">→</button>
</div>

`
})
export class ImageGaleryComponent implements OnInit {

  @Input() images: string[];
  sliderImagesIds: string[];
  baseImagePath: string;
  selectedImageId: string;
  sliderStartIndex: number = 0;
  totalSlider: number = 5;

    constructor() {
      this.baseImagePath = baseImagePath;
    }

    ngOnInit() {
      console.log("im gallery")
    }

    fillSlider(shift: number) {

      if (shift == null) {
        if (this.images.length > this.totalSlider) {
          this.sliderImagesIds = this.images.slice(this.sliderStartIndex, this.totalSlider);
        } else {
          this.sliderImagesIds = this.images.slice(this.sliderStartIndex, this.images.length - 1);
        }
      } else {
        if((this.sliderStartIndex + shift) >= 0 && (this.sliderStartIndex + shift) < this.images.length) {

        }
      }
    }

}
