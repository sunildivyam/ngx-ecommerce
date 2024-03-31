import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Address } from '@annuadvent/ngx-core/helpers-ecommerce';

@Component({
  selector: 'anu-address-list',
  templateUrl: './address-list.component.html',
  styleUrls: ['./address-list.component.scss']
})
export class AddressListComponent {
  /**
   * List of addresses
   */
  @Input() value: Array<Address> = [];

  /**
   * Default address
   */
  @Input() defaultAddress: Address = null;

  /**
   * Selected address, works only if enableSelected is true.
   */

  @Input() selectedAddress: Address = null;

  /**
   * enables editing of individual addresses
   */
  @Input() enableEdit: boolean = true;

  /**
   * enables addition of new individual addresses
   */
  @Input() enableAdd: boolean = true;

  /**
   * enables to select an address from the list.
   * Shows the the address in plain list view.
   * Also emits selected event.
   */
  @Input() enableSelect: boolean = false;

  /**
   * enables deleting of individual addresses
   */
  @Input() enableDelete: boolean = true;

  /**
   * CSS class names, that will apply on individual address cards of the list
   */
  @Input() cardClassNames: Array<string> = [
    'col-sm-12',
    'col-md-6',
    'col-lg-4',
    'border'
  ];

  /**
   * Emits on Add address button click.
   */
  @Output() addClicked = new EventEmitter<void>();

  /**
   * Emits on Edit address button click of individual address.
   */
  @Output() editClicked = new EventEmitter<Address>();

  /**
   * Emits on Delete address button click of individual address.
   */
  @Output() deleteClicked = new EventEmitter<Address>();

  /**
   * Emits on Set Default address button click of individual address.
   */
  @Output() defaultClicked = new EventEmitter<Address>();

  /**
   * Emits when an individual address is selected. Works when enableSelect is true.
   */
  @Output() selected = new EventEmitter<Address>();

  /**
   * Emits when add delivery instructions is clicked.
   */
  @Output() addDeliveryInstructions = new EventEmitter<Address>();

  constructor() {}

  public onAddClicked(event: any): void {
    event.preventDefault();
    this.addClicked.emit();
  }

  public onEditClicked(event: any, address: Address): void {
    event.preventDefault();
    this.editClicked.emit(address);
  }

  public onDeleteClicked(event: any, address: Address): void {
    event.preventDefault();
    this.deleteClicked.emit(address);
  }

  public onDefaultClicked(event: any, address: Address): void {
    event.preventDefault();
    this.defaultClicked.emit(address);
  }

  public onSelected(event: any, address: Address): void {
    event.preventDefault();
    this.selectedAddress = address;
    this.selected.emit(address);
  }

  public onAddDeliveryInstructionsClicked(event: any, address: Address): void {
    event.preventDefault();
    this.addDeliveryInstructions.emit(address);
  }
}
