import Title from "../atoms/Title";
import Text from "../atoms/Text";


export default function Heading() {
  return (
    <div className="">
      <Title variant="black" size="md" className="gap-1 ds-font-bold" center={true}>
        How It <span className="ds-text-alt  ">Work</span>
      </Title>
      <Text variant="secondary" size="md" center={true}>
        Get started in just 3 simple steps
      </Text>
    </div>
  );
}