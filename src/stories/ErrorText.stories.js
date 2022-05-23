import ErrorText from "../components/ErrorText";

export default {
  title: "Component/ErrorText",
  component: ErrorText,
  argTypes: {
    onClick: { action: "onClick" },
  },
};

export const Default = (args) => {
  return <ErrorText {...args}>ErrorText</ErrorText>;
};
