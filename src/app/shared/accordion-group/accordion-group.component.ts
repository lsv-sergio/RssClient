import { Component, OnDestroy, Input } from '@angular/core';
import { AccordionComponent } from "../accordion/accordion.component";

@Component({
  selector: 'accordion-group',
  templateUrl: './accordion-group.component.html',
  styleUrls: ['./accordion-group.component.css']
})
export class AccordionGroupComponent implements OnDestroy {
    private _isOpen: boolean = false;

    @Input() heading: string;

    @Input()
    set isOpen(value: boolean) {
        this._isOpen = value;
        if (value) {
            this.accordion.closeOthers(this);
        }
    }

    get isOpen() {
        return this._isOpen;
    }

    constructor(private accordion: AccordionComponent) {
        this.accordion.addGroup(this);
    }

    ngOnDestroy() {
        this.accordion.removeGroup(this);
    }

    toggleOpen(event: MouseEvent): void {
        event.preventDefault();
        this.isOpen = !this.isOpen;
    }
}
