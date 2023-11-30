import { StandardProps } from '@tarojs/components';
import { ComponentClass } from 'react'

export interface AlertBadgeProps extends StandardProps {
    /** optional: alert badge render or not. */
    visible?: boolean;
    /**
     * optional: alert badge variant'
     * @default 'pip'
     */
    variant?: 'pip' | 'icon' | 'pip-icon';
    /**
     * optional: alert badge severity level, choose from CompositeAlertBadgeSeverity enum
     * @default 'information'
     */
    severity?: 'positive' | 'information' | 'warning' | 'error';
}

declare const CompositeAlertBadge: ComponentClass<AlertBadgeProps>

export default CompositeAlertBadge

