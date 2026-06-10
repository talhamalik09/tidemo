import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FundService {

   startDate: string = '';
  endDate: string = '';

   private users = new BehaviorSubject<any[]>([]);
  users$ = this.users.asObservable();

  loadUsers(): Observable<any[]> {
    return this.http.get<any[]>('https://jsonplaceholder.typicode.com/users');
  }

  loadUserss(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8080/api/auth/login');
  }

  private entriesSubject = new BehaviorSubject<any[]>([]);
  entries$ = this.entriesSubject.asObservable();

  

  private selectedEntrySubject = new BehaviorSubject<any>(null);
  selectedEntry$ = this.selectedEntrySubject.asObservable();

  constructor(private http: HttpClient) {}


  // ADD ENTRY
  addEntry(data: any) {
    const current = this.entriesSubject.value;
    this.entriesSubject.next([...current, data]);

     this.startDate = data.startDate;
  this.endDate = data.endDate;
  }

  selectedData: any = null;
selectedIndex: number | null = null;

setEdit(data: any, index: number) {
  this.selectedData = data;
  this.selectedIndex = index;
}

  // UPDATE ENTRY
  





getEntries() {
  return this.entriesSubject.value;
}

setEntries(data: any[]) {
  this.entriesSubject.next(data);
}
}