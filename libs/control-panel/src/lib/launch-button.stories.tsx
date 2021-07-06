import { Story, Meta } from '@storybook/react';
import { LaunchButton, LaunchButtonProps } from './launch-button';

export default {
  component: LaunchButton,
  title: 'LaunchButton',
  argTypes: { onClick: { action: 'launch button clicked' } },
} as Meta;

const Template: Story<LaunchButtonProps> = (args) => <LaunchButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
