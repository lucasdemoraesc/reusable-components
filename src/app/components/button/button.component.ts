import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from '../utils/convert';
import { AppColor, AppSize, AppVariant } from '../utils/types';

@Component({
  selector: `button[app-button]`,
  exportAs: "appButton",
  template: `<i class="material-symbols-outlined app-btn-icon start" *ngIf="startIcon">{{startIcon}}</i>
             <ng-content></ng-content>
             <i class="material-symbols-outlined app-btn-icon end" *ngIf="endIcon">{{endIcon}}</i>`,
  styleUrls: ['./button.component.css'],
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'app-btn',
    '[class.app-btn-raised]': `variant === 'raised'`,
    '[class.app-btn-outline]': `variant === 'outline'`,
    '[class.app-btn-text]': `variant === 'text'`,
    '[class.app-btn-default]': `color === 'default'`,
    '[class.app-btn-primary]': `color === 'primary'`,
    '[class.app-btn-secondary]': `color === 'secondary'`,
    '[class.app-btn-danger]': `color === 'danger'`,
    '[class.app-btn-lg]': `size === 'lg'`,
    '[class.app-btn-md]': `size === 'md'`,
    '[class.app-btn-sm]': `size === 'sm'`,
    '[class.app-btn-noshadow]': `disableShadow || variant === 'text'`,
    '[attr.tabindex]': 'disabled ? -1 : (tabIndex === null ? null : tabIndex)',
    '[attr.disabled]': 'disabled || null'
  }
})
export class ButtonComponent implements OnInit {

  static ngAcceptInputType_disabled: boolean | "";
  static ngAcceptInputType_disableShadow: boolean | "";

  @Input() @InputBoolean() disabled: boolean = false;
  @Input() @InputBoolean() disableShadow: boolean = false;
  @Input() variant: AppVariant = "raised";
  @Input() size: AppSize = "md";
  @Input() color: AppColor = "default";
  @Input() startIcon?: string;
  @Input() endIcon?: string;

  constructor() { }

  ngOnInit(): void { }

}
