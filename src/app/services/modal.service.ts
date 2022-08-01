import { ComponentFactoryResolver, Injectable } from '@angular/core';
import { RefModalDirective } from '../directives/ref-modal.directive';
import { ModalComponent } from '../modal/modal.component';
import { ModalType } from '../models/modal';
import { Person } from '../models/person';

@Injectable()
export class ModalService {
  private modalTypes = {
    [ModalType.add]: {
      modal: 'Добавление сотрудника',
      button: 'Добавить',
      type: ModalType.add,
    },
    [ModalType.edit]: {
      modal: 'Изменение данных сотрудника',
      button: 'Изменить',
      type: ModalType.edit,
    },
    [ModalType.remove]: {
      modal: 'Удаление сотрудника',
      button: 'Удалить',
      type: ModalType.remove,
    },
  };

  constructor(
    private readonly modalDirective: RefModalDirective,
    private readonly resolver: ComponentFactoryResolver,
  ) {}

  openModal(type: ModalType, person?: Person): ModalComponent {
    this.modalDirective.containerRef.clear();

    const modalFactory = this.resolver.resolveComponentFactory(ModalComponent);
    const modal = this.modalDirective.containerRef.createComponent(modalFactory);

    modal.instance.options = {
      ...this.modalTypes[type],
      person: person,
    };

    modal.instance.closeEvent.subscribe(() => {
      this.modalDirective.containerRef.clear();
    });

    return modal.instance;
  }
}
