import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Person } from '../models/person';
import { NotificationsService } from './notifications.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class PersonService {
  private readonly personsUrl: string = environment.endpoint;

  private readonly httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private readonly http: HttpClient, private readonly notificationsService: NotificationsService) {}

  getPersons(): Observable<Person[]> {
    return this.http.get<Person[]>(this.personsUrl);
  }

  editPerson(person: Person): Observable<Person> {
    return this.http.put<Person>(`${this.personsUrl}/${String(person.id)}`, person, this.httpOptions);
  }

  addPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.personsUrl, person, this.httpOptions);
  }

  removePerson(person: Person): Observable<Person> {
    return this.http.delete<Person>(`${this.personsUrl}/${String(person.id)}`, this.httpOptions);
  }
}
