import CardForm from "../components/CardForm";

export default {
  title: "Component/CardForm",
  component: CardForm,
  argTypes: {
    onClick: { action: "onClick" },
  },
};

export const Default = (args) => {
  return <CardForm {...args}>CardForm</CardForm>;
};
