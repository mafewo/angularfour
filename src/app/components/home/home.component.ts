import { Component, ViewContainerRef, ViewEncapsulation, OnInit } from '@angular/core';
import { Overlay, overlayConfigFactory } from 'angular2-modal';
import { Modal, BSModalContext } from 'angular2-modal/plugins/bootstrap';
// service
import { YoutubeService } from '../../service/youtube.service';
import { LoaderService } from '../../service/loader.service';

import { CustomModal } from '../modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [Modal]
})
export class HomeComponent implements OnInit {

  videos: {} | boolean;

  constructor(public YoutubeService: YoutubeService, public overlay: Overlay, vcRef: ViewContainerRef, public pop: Modal, private loaderService: LoaderService) {

  }

  ngOnInit() {
    this.YoutubeService.status.subscribe((val) => {
      this.videos = val;
      this.loaderService.display(false);
    });
  }

  openCustom(video) {
    return this.pop.open(CustomModal,  overlayConfigFactory({ url: `http://www.youtube.com/embed/${video.id.videoId}?enablejsapi=1&modestbranding=1&rel=0&autoplay=1`, title: 'http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com' }, BSModalContext));
  }
}

