import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-trade',
   standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './trade.html',
  styleUrl: './trade.scss',
})
export class tradeComponent {
showTrade = false;
showImport = false;
showExport = false;
showShipmentguarantee = false;
showGuaranteeissued = false;
showOutwardDocumentaryCollection = false;
showFinanceStandalone= false;
showLicenseInput = false;
showForm = false;
showFundForm = false;
hasRoute = false;
showCleanBankersAcceptance = false;
showCustomerBilling = false;
showExportCreditAgencyFacility = false;
showExportLcPreadvise = false;
showFreeCorrespondence = false;
showFreelyNegotiableLc = false;
showParticipationDeal = false;
showOutwardCleanCollection = false;
showOutwardCashLetter = false;
showInwardDocumentaryCollection= false;
showInwardCleanCollection = false;
showInwardCashLetter = false;
showImportStandbyLc = false;
showImportLcIssue = false; 
showGuaranteeReceived = false;
showExportStandbyLc = false;
showReimbursement  = false;


toggleTrade() {
  this.showTrade = !this.showTrade;
}

toggleImport() {
  this.showImport = !this.showImport;
}

toggleExport() {
  this.showExport = !this.showExport;

  
}

toggleShipmentguarantee() {
  this.showShipmentguarantee = !this.showShipmentguarantee;

  
}
toggleGuaranteeissued() {
  this.showGuaranteeissued = !this.showGuaranteeissued;

  
}
toggleOutwardDocumentaryCollection(){
  this.showOutwardDocumentaryCollection = !this.showOutwardDocumentaryCollection;
}

toggleFinanceStandalone(){
  this.showFinanceStandalone = !this.showFinanceStandalone
}

toggleLicenseInput(){
  this.showLicenseInput = !this.showLicenseInput
}

toggleForm(){
  this.showForm = !this.showForm
}

toggleFundForm(){
  this.showFundForm = !this.showFundForm
}

toggleCleanBankersAcceptance(){
  this.showCleanBankersAcceptance = !this.showCleanBankersAcceptance
}

toggleCustomerBilling(){
  this.showCustomerBilling = !this.showCustomerBilling
}

toggleExportCreditAgencyFacility(){
  this.showExportCreditAgencyFacility = !this.showExportCreditAgencyFacility
}

toggleExportLcPreadvise(){
  this.showExportLcPreadvise = !this.showExportLcPreadvise
}

toggleFreeCorrespondence(){
  this.showFreeCorrespondence = !this.showFreeCorrespondence
}

toggleFreelyNegotiableLc(){
  this.showFreelyNegotiableLc = !this.showFreelyNegotiableLc
}

toggleParticipationDeal(){
  this.showParticipationDeal = !this.showParticipationDeal
}

toggleOutwardCleanCollection(){
  this.showOutwardCleanCollection = !this.showOutwardCleanCollection
}


toggleOutwardCashLetter(){
    this.showOutwardCashLetter = !this.showOutwardCashLetter

}

toggleInwardDocumentaryCollection(){
  this.showInwardDocumentaryCollection = !this.showInwardDocumentaryCollection
}

toggleInwardCleanCollection(){
  this.showInwardCleanCollection = !this.showInwardCleanCollection
}

toggleInwardCashLetter(){
  this.showInwardCashLetter = !this.showInwardCashLetter
}

toggleImportStandbyLc(){
    this.showImportStandbyLc = !this.showImportStandbyLc

}

toggleImportLcIssue(){
   this.showImportLcIssue = !this.showImportLcIssue
}

toggleGuaranteeReceived(){
  this.showGuaranteeReceived = !this.showGuaranteeReceived
}

toggleExportStandbyLc(){
  this.showExportStandbyLc = !this.showExportStandbyLc
}

toggleReimbursement(){
  this.showReimbursement = !this.showReimbursement 
}

onActivate() {
  setTimeout(() => {
    this.hasRoute = true;
  });
}

onDeactivate() {
  setTimeout(() => {
    this.hasRoute = false;
  });
}

}