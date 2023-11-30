export const enum CompositeAlertBadgeVariant {
  /**
   * show pip dot on top right of icon
   */
  Pip = 'pip',
  /**
   * show icon on top right of other view
   */
  Icon = 'icon',
  /**
   * show a small icon on top right of another icon
   */
  PipIcon = 'pip-icon'
}

/**
 * use different color represent different severity
 */
export const enum CompositeAlertBadgeSeverity {
  Positive = 'positive',
  Information = 'information',
  Warning = 'warning',
  Error = 'error'
}

/**
 * TODO: should update icon name when icon library finalize, current use WeChat <icon> instead
 */
export const severityIconNames = {
  'positive': 'success',
  'information': 'info',
  'warning': 'warn',
  'error': 'warn'
};
