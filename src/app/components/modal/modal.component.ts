import { Component } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

export class CustomModalContext extends BSModalContext {
  public url: string;
  public title: string;
}

@Component({
  selector: 'modal-content',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
  // TODO: [ngClass] here on purpose, no real use, just to show how to workaround ng2 issue #4330.
  // Remove when solved.
  /* tslint:disable */ 
})
export class CustomModal implements CloseGuard, ModalComponent<CustomModalContext> {
  context: CustomModalContext;
  url: SafeResourceUrl;

  constructor(public dialog: DialogRef<CustomModalContext>, public sanitizer:DomSanitizer) {
    this.context = dialog.context;
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(this.context.url);
    dialog.setCloseGuard(this);
  }

  closeModal() {
    this.dialog.close();
  }


  beforeDismiss(): boolean {
    return true;
  }

}
