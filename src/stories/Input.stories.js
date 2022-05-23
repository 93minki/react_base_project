import Input from "../components/Input";

export default {
  title: "Component/Input",
  component: Input,
  argTypes: {
    onchange: { action: "onChange" },
  },
};

export const Default = (args) => {
  return <Input {...args} />;
};
