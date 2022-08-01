import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '../../models/person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss'],
})
export class PersonComponent {
  @Input() persons: Person[] = [];

  @Output() editingPerson: EventEmitter<Person> = new EventEmitter();
  @Output() removingPerson: EventEmitter<Person> = new EventEmitter();

  editPerson(person: Person) {
    this.editingPerson.emit(person);
  }

  removePerson(person: Person) {
    this.removingPerson.emit(person);
  }
}
