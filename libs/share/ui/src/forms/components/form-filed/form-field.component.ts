import { AfterContentInit, Component, ContentChild, signal, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldControl } from './form-field.control';

@Component({
  selector: 'olp-form-field',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './form-field.component.html',
  styleUrl: './form-field.component.scss',
})
export class FormFieldComponent implements AfterContentInit {
  @ContentChild(FormFieldControl) control?: FormFieldControl<unknown>;

  label = input<string>();
  focused = signal<boolean>(false);
  hasError = signal<boolean>(false);

  ngAfterContentInit(): void {
    this.control?.stateChanges.subscribe((state) => {
      this.focused.set(state.isFocused);
      this.hasError.set(state.hasError);
      console.log(state);
    });
  }
}
