import { Story, Meta } from '@storybook/react';
import { Rocket, RocketProps } from './rocket';

export default {
  component: Rocket,
  title: 'Rocket',
} as Meta;

const Template: Story<RocketProps> = (args) => <Rocket {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  isLaunching: false,
};
