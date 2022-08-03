import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../../models/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent {
  @Input() persons: Person[] = [];

  @Output() editingPerson: EventEmitter<any> = new EventEmitter();
  @Output() removingPerson: EventEmitter<any> = new EventEmitter();

  editPerson(person: Person): void {
    this.editingPerson.emit(person);
  }

  removePerson(person: Person): void {
    this.removingPerson.emit(person);
  }
}
