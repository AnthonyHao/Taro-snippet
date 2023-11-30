import { Icon, IconProps, View } from '@tarojs/components';
import {
  severityIconNames as initSeverityIconNames
} from './helper';
import { AlertBadgeProps } from '../../../../types/alert-badge';
import './index.scss';

const severityIconNames = initSeverityIconNames as Record<
  string,
  keyof IconProps.TIconType
>;

/**
 * alert badge component.
 *
 * default display of badge is "block".
 *
 * <CompositeAlertBadge
 *   visible="{{true|false}}"
 *   variant="CompositeAlertBadgeVariant"
 *   severity="CompositeAlertBadgeSeverity"
 * >
 *   xxx
 * <CompositeAlertBadge>
 */
function CompositeAlertBadge(props: AlertBadgeProps) {
  const {
    visible = true,
    variant = 'pip',
    severity = 'information',
    children
  } = props;
  const isPip = variant === 'pip';
  return (
    <View style='position: relative; display: inline-block;'>
      {children}
      {visible && (
        <View className='composite-alert-badge"'>
          {isPip && (
            <View
              className={`composite-radius-full composite-alert-badge_pip composite-alert-badge_${severity}`}
            />
          )}
          {!isPip && (
            <Icon
              type={severityIconNames[severity]}
              size={variant === 'icon' ? '24px' : '16px'}
              color={`var(--composite-${severity})`}
            />
          )}
        </View>
      )}
    </View>
  );
}

export default CompositeAlertBadge;
