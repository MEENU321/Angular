import { Injectable } from '@angular/core';
import { HttpService } from '../http/http.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  createCollaborator(noteId: (noteId: any, id: any) => any, id: any) {
    throw new Error("Method not implemented.");
  }
  removeCollaborateUser(noteId: any, id: any) {
    throw new Error("Method not implemented.");
  }
  noteupdate(newNote: any) {
    throw new Error('Method not implemented.');
  }

  constructor(private httpUtil: HttpService, private router: Router, public snackBar: MatSnackBar) { }

  retrieveNotes(token): Observable<any> {
    let httpheaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded',
        JwtToken: token
      })
    };
    return this.httpUtil.getService(environment.note_url + 'viewnotes', httpheaders);
  }

  createNote(note): Observable<any> {
    let token = localStorage.getItem('JwtToken');
    let httpheaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        JwtToken: token
      })
    };
    return this.httpUtil.postServiceForNoteCreate(environment.note_url + 'notecreate/' + token, httpheaders, note);
  }
  updateNote(note) {
    let token = localStorage.getItem('JwtToken');
    const httpheaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        JwtToken: token
      })
    };
    return this.httpUtil.putServiceForNoteUpdate(environment.note_url + 'noteupdate/' + token, note, httpheaders);
  }

  deleteNote(noteId) {
    let token = localStorage.getItem('JwtToken');
    let httpheaders = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        JwtToken: token
      })
    };
    return this.httpUtil.deleteServiceForNoteDelete(environment.note_url + 'notedelete' + noteId, httpheaders);
}



}
