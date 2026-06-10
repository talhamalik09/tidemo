import { Routes } from '@angular/router';
import { About } from './about/about';
import { Login } from './login/login';
import { Home } from './home/home';
import { NewPage } from './screen/newpage';
import { UserPage } from './user/userpage';
import { FundFormComponent } from './trade/fund-form/fund-form';
import { FundTableComponent } from './trade/fund-table/fund-table';
import { HomeComponent } from './home-page/home-page';
import { EditPage } from './edit-page/edit-page';
import { tradeComponent } from './trade/trade';
import { ImportAppend } from './trade/import-append/import-append';
import { ImportCreate } from './trade/import-create/import-create';
import { ImportBulk } from './trade/import-bulk/import-bulk';
import { ImportHistory } from './trade/import-history/import-history';
import { ExportAppend } from './trade/export-append/export-append';
import { ExportBulk } from './trade/export-bulk/export-bulk';
import { ExportCreate } from './trade/export-create/export-create';
import { ExportHistory } from './trade/export-history/export-history';
import { Export } from './trade/export/export';
import { Import } from './trade/import/import';
import { NotFoundComponent } from './not-found/not-found';
import { SignupForm } from './signup-form/signup-form';
import { ShipmentGuarantee } from './trade/shipment-guarantee/shipment-guarantee';
import { ShipmentguaranteeCreate } from './trade/shipmentguarantee-create/shipmentguarantee-create';
import { GuaranteeIssued } from './trade/guarantee-issued/guarantee-issued';
import { GuaranteeissuedCreate } from './trade/guaranteeissued-create/guaranteeissued-create';
import { OutwardDocumentaryCollection } from './trade/outward-documentary-collection/outward-documentary-collection';
import { OutwarddocumentarycollectionCreate } from './trade/outwarddocumentarycollection-create/outwarddocumentarycollection-create';
import { FinanceStandalone } from './trade/finance-standalone/finance-standalone';
import { FinancestandaloneCreate } from './trade/financestandalone-create/financestandalone-create';
import { LicenseInput } from './trade/license-input/license-input';
import { LicenseinputCreate } from './trade/licenseinput-create/licenseinput-create';
import { CleanBankersAcceptance } from './trade/clean-bankers-acceptance/clean-bankers-acceptance';
import { CleanBankersacceptanceCreate } from './trade/clean-bankersacceptance-create/clean-bankersacceptance-create';
import { CustomerBilling } from './trade/customer-billing/customer-billing';
import { CustomerbillingCreate } from './trade/customerbilling-create/customerbilling-create';
import { ExportcreditAgencyFacility } from './trade/exportcredit-agency-facility/exportcredit-agency-facility';
import { ExportcreditagencyFacilityCreate } from './trade/exportcreditagency-facility-create/exportcreditagency-facility-create';
import { ExportlcPreadvise } from './trade/exportlc-preadvise/exportlc-preadvise';
import { ExportlcPreadviseCreate } from './trade/exportlc-preadvise-create/exportlc-preadvise-create';
import { FreeCorrespondence } from './trade/free-correspondence/free-correspondence';
import { FreeCorrespondenceCreate } from './trade/free-correspondence-create/free-correspondence-create';
import { FreelyNegotiablelc } from './trade/freely-negotiablelc/freely-negotiablelc';
import { FreelyNegotiablelcCreate } from './trade/freely-negotiablelc-create/freely-negotiablelc-create';
import { ParticipationDeal } from './trade/participation-deal/participation-deal';
import { ParticipationDealCreate } from './trade/participation-deal-create/participation-deal-create';
import { OutwardCleanCollection } from './trade/outward-clean-collection/outward-clean-collection';
import { OutwardcleanCollectionCreate } from './trade/outwardclean-collection-create/outwardclean-collection-create';
import { OutwardCashLetter } from './trade/outward-cash-letter/outward-cash-letter';
import { OutwardcashLetterCreate } from './trade/outwardcash-letter-create/outwardcash-letter-create';
import { InwardDocumentaryCollection } from './trade/inward-documentary-collection/inward-documentary-collection';
import { InwarddocumentaryCollectionCreate } from './trade/inwarddocumentary-collection-create/inwarddocumentary-collection-create';
import { InwardCleanCollection } from './trade/inward-clean-collection/inward-clean-collection';
import { InwardcleanCollectionCreate } from './trade/inwardclean-collection-create/inwardclean-collection-create';
import { InwardCashLetter } from './trade/inward-cash-letter/inward-cash-letter';
import { InwardcashLetterCreate } from './trade/inwardcash-letter-create/inwardcash-letter-create';
import { ImportStandbyLc } from './trade/import-standby-lc/import-standby-lc';
import { ImportstandbyLcCreate } from './trade/importstandby-lc-create/importstandby-lc-create';
import { ImportlcIssue } from './trade/importlc-issue/importlc-issue';
import { ImportlcIssueCreate } from './trade/importlc-issue-create/importlc-issue-create';
import { GuaranteeRecieved } from './trade/guarantee-recieved/guarantee-recieved';
import { GuaranteeRecievedCreate } from './trade/guarantee-recieved-create/guarantee-recieved-create';
import { ExportStandbyLc } from './trade/export-standby-lc/export-standby-lc';
import { ExportStandbylcCreate } from './trade/export-standbylc-create/export-standbylc-create';
import { Reimbursement } from './trade/reimbursement/reimbursement';
import { ReimbursementCreate } from './trade/reimbursement-create/reimbursement-create';

export const routes: Routes = [

  // HOME
  { path: '', component: Login },
  { path: 'login', component: Login },
  { path: 'about', component: About },
  { path: 'newpage', component: NewPage },
  { path: 'userpage', component: UserPage },

  // FUND
  
  
  { path: 'home-page', component: HomeComponent },

  // EDIT
  { path: 'edit-page/:id', component: FundFormComponent },

   { path: 'signup-form', component: SignupForm },
  // TRADE (PARENT ROUTE)
 {
    path: 'trade',
    component: tradeComponent, // Grandparent

    children: [
      {
        path: 'import',
        component: Import,
         // Parent

        children: [
          { path: '', redirectTo: 'import', pathMatch: 'full' },
          { path: 'create', component: ImportCreate },
          { path: 'append/:id', component: ImportAppend },
          { path: 'bulk', component: ImportBulk },
          { path: 'history', component: ImportHistory }
        ]
      },
      { path: 'fund-form', component: FundFormComponent },

      { path: 'fund-table', component: FundTableComponent },
      {
        path: 'export',
        component: Export, // Parent

        children: [
          { path: '', redirectTo: 'export', pathMatch: 'full' }, 
          { path: 'create', component: ExportCreate },
          { path: 'append', component: ExportAppend },
          { path: 'bulk', component: ExportBulk },
          { path: 'history', component: ExportHistory }
        ]
      },

      {path : 'shipment-guarantee', component: ShipmentGuarantee,

        children:[
          {path: 'create', component: ShipmentguaranteeCreate}
        ]
      },
      {path : 'guarantee-issued', component: GuaranteeIssued,

        children:[
          {path: 'create', component: GuaranteeissuedCreate}
        ]
      },
      {path : 'outward-documentary-collection', component: OutwardDocumentaryCollection,

        children:[
          {path: 'create', component: OutwarddocumentarycollectionCreate}
        ]
      },

      {path : 'finance-standalone', component: FinanceStandalone,

        children:[
          {path: 'create', component: FinancestandaloneCreate}
        ]
      },

      {path : 'license-input', component: LicenseInput,

        children:[
          {path: 'create', component: LicenseinputCreate}
        ]
      },
      
      {path : 'clean-bankers-acceptance', component: CleanBankersAcceptance,

        children:[
          {path: 'create', component: CleanBankersacceptanceCreate}
        ]
      },
      {path : 'customer-billing', component: CustomerBilling,

        children:[
          {path: 'create', component: CustomerbillingCreate}
        ]
      },

      {path : 'exportcredit-agency-facility', component: ExportcreditAgencyFacility,

        children:[
          {path: 'create', component: ExportcreditagencyFacilityCreate}
        ]
      },

      {path : 'exportlc-preadvise', component: ExportlcPreadvise,

        children:[
          {path: 'create', component: ExportlcPreadviseCreate}
        ]
      },

      {path : 'free-correspondence', component: FreeCorrespondence,

        children:[
          {path: 'create', component: FreeCorrespondenceCreate}
        ]
      },

      
      {path : 'freely-negotiablelc', component: FreelyNegotiablelc,

        children:[
          {path: 'create', component: FreelyNegotiablelcCreate}
        ]
      },

      {path : 'participation-deal', component: ParticipationDeal,

        children:[
          {path: 'create', component: ParticipationDealCreate}
        ]
      },

      {path : 'outward-clean-collection', component: OutwardCleanCollection,

        children:[
          {path: 'create', component: OutwardcleanCollectionCreate}
        ]
      },

      {path : 'outward-cash-letter', component: OutwardCashLetter,

        children:[
          {path: 'create', component: OutwardcashLetterCreate}
        ]
      },
      {path : 'inward-documentary-collection', component: InwardDocumentaryCollection,

        children:[
          {path: 'create', component: InwarddocumentaryCollectionCreate}
        ]
      },
      {path : 'inward-clean-collection', component: InwardCleanCollection,

        children:[
          {path: 'create', component: InwardcleanCollectionCreate}
        ]
      },

      {path : 'inward-cash-letter', component: InwardCashLetter,

        children:[
          {path: 'create', component: InwardcashLetterCreate}
        ]
      },

      {path : 'import-standby-lc', component: ImportStandbyLc,

        children:[
          {path: 'create', component: ImportstandbyLcCreate}
        ]
      },

      
      {path : 'importlc-issue', component: ImportlcIssue,

        children:[
          {path: 'create', component: ImportlcIssueCreate}
        ]
      },

      {path : 'guarantee-recieved', component: GuaranteeRecieved,

        children:[
          {path: 'create', component: GuaranteeRecievedCreate}
        ]
      },

      {path : 'export-standby-lc', component: ExportStandbyLc,

        children:[
          {path: 'create', component: ExportStandbylcCreate}
        ]
      },

      {path : 'reimbursement', component: Reimbursement,

        children:[
          {path: 'create', component: ReimbursementCreate}
        ]
      },

      // default inside trade
      { path: '', redirectTo: 'trade', pathMatch: 'full' }
    ]
  },
  
  {  path: '**',component: NotFoundComponent }
];