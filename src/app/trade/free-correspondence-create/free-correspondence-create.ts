import { Component } from '@angular/core';
import { CorrespondenceFurtherid } from './correspondence-furtherid/correspondence-furtherid';
import { CorrespondenceReceived } from './correspondence-received/correspondence-received';
import { CorrespondenceToSend } from './correspondence-to-send/correspondence-to-send';
import { OtherDetails } from './other-details/other-details';

@Component({
  selector: 'app-free-correspondence-create',
  imports: [OtherDetails,CorrespondenceToSend,CorrespondenceReceived,CorrespondenceFurtherid],
  templateUrl: './free-correspondence-create.html',
  styleUrl: './free-correspondence-create.scss',
})
export class FreeCorrespondenceCreate {}
