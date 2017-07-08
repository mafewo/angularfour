import { Component } from '@angular/core';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

import { DialogRef, ModalComponent, CloseGuard } from 'angular2-modal';
import { BSModalContext } from 'angular2-modal/plugins/bootstrap';

export class CustomModalContext extends BSModalContext {
  public url: string;
  public title: string;
}

/**
 * A Sample of how simple it is to create a new window, with its own injects.
 */
@Component({
  selector: 'modal-content',
  styles: [`
        .custom-modal-container {
            padding: 15px;
        }

        .custom-modal-header[_ngcontent-c3] {
            background-color: #000;
            color: #fff;
            -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            margin-top: 0px;
            margin-bottom: 0px;
        }

        .modal-content {
            background-color: #000;
            color: #fff;
        }
        .custom-modal-header {
            background-color: #219161;
            color: #fff;
            -webkit-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            -moz-box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            box-shadow: 0px 3px 5px 0px rgba(0,0,0,0.75);
            margin-top: -15px;
            margin-bottom: 40px;
        }
    `],
  // TODO: [ngClass] here on purpose, no real use, just to show how to workaround ng2 issue #4330.
  // Remove when solved.
  /* tslint:disable */ template: `
          <div class="container-fluid custom-modal-container">
            <div class="row custom-modal-header">
              <div class="embed-responsive embed-responsive-16by9">
                <iframe class="embed-responsive-item" frameborder="0" width="600" height="350" [src]="url"></iframe>
              </div>
              <div (click)="closeModal()"> cerrar</div><!--class="e2e-iframe-trusted-src"-->
            </div>
          </div>`
})
export class CustomModal implements CloseGuard, ModalComponent<CustomModalContext> {
  context: CustomModalContext;

  public wrongAnswer: boolean;
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
