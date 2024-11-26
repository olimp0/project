import {
  AfterViewInit,
  Directive,
  effect,
  ElementRef,
  HostListener,
  Input,
  OnDestroy,
  Optional,
  Renderer2,
  Self,
  signal,
} from '@angular/core';
import { FormFieldControl, FormFieldStateChange } from '../components/form-filed/form-field.control';
import { NgControl } from '@angular/forms';
import { Subject } from 'rxjs';

@Directive({
  selector: 'input[olpInput]',
  standalone: true,
  providers: [
    {
      provide: FormFieldControl,
      useExisting: InputDirective,
    },
  ],
})
export class InputDirective extends FormFieldControl<string> implements OnDestroy, AfterViewInit {
  static nextId = 0;

  @Input() override id = `input-${InputDirective.nextId++}`;

  isDisabled = signal(false);
  hasError = signal(false);
  isFocused = signal(false);

  override stateChanges = new Subject<FormFieldStateChange>();

  private onChange?: (value: string) => void;

  private onTouched?: () => void;

  private _value = '';

  override get value(): string {
    return this._value;
  }
  override set value(obj: string) {
    if (this._value !== obj) {
      this._value = obj;
      this.onChange?.(obj);
      this.checkErrors();
    }
  }

  constructor(
    @Optional() @Self() public ngControl: NgControl,
    private _elementRef: ElementRef<HTMLInputElement | HTMLTextAreaElement>,
    private _renderer: Renderer2,
  ) {
    super();
    if (ngControl) {
      ngControl.valueAccessor = this;
    }

    effect(
      () => {
        const isFocused = this.isFocused();
        const isDisabled = this.isDisabled();
        const hasError = this.hasError();
        this.stateChanges.next({ hasError, isDisabled, isFocused });
      },
      { allowSignalWrites: true },
    );
  }

  ngAfterViewInit(): void {
    this._renderer.addClass(this._elementRef.nativeElement, 'outline-none');
    this._renderer.addClass(this._elementRef.nativeElement, 'focus:outline-none');
    this._renderer.addClass(this._elementRef.nativeElement, 'w-full');
    this._renderer.setAttribute(this._elementRef.nativeElement, 'id', this.id);
  }

  ngOnDestroy(): void {
    this.stateChanges.complete();
  }

  @HostListener('input', ['$event.target.value'])
  onInput(value: string): void {
    this.value = value;
  }

  @HostListener('focus')
  onFocus(): void {
    this.isFocused.set(true);
  }

  @HostListener('blur')
  onBlur(): void {
    this.isFocused.set(false);
    this.onTouched?.();
  }

  override onContainerClick(): void {
    this._elementRef.nativeElement.focus();
  }

  override writeValue(obj: string): void {
    this._value = obj;
  }
  override registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }
  override registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  override setDisabledState?(isDisabled: boolean): void {
    this.isDisabled.set(isDisabled);
  }

  private checkErrors() {
    const control = this.ngControl?.control;
    const newState = (control && control.invalid && (control.dirty || control.touched)) ?? false;
    this.hasError.set(newState);
  }
}
