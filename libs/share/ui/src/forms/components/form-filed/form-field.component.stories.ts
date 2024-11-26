import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { FormFieldComponent } from './form-field.component';
import { InputDirective } from '../../directives/';

const meta: Meta<FormFieldComponent> = {
  component: FormFieldComponent,
  title: 'Forms/input',
  decorators: [
    moduleMetadata({
      imports: [InputDirective],
    }),
  ],
};
export default meta;
type Story = StoryObj<FormFieldComponent>;

export const Primary: Story = {
  args: {
    label: 'Label',
  },
  render: (args) => ({
    props: args,
    template: `
      <olp-form-field [label]="label">
        <input type="text" olpInput />
      </olp-form-field>
`,
  }),
};
