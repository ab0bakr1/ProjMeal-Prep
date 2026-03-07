import Title from "../atoms/Title";
import Text from "../atoms/Text";


export default function Heading() {
  return (
    <div className="">

      <div className="flex items-center justify-center  gap-1">
        <Title
          variant="black"
          size="md"
          className=" ds-font-bold"
          center={true}>
          How It
        </Title>
        <Title variant="primary" size="md" className=" ds-font-bold">
          Work
        </Title>
      </div>

      <Text variant="secondary" size="md" center={true}>
        Get started in just 3 simple steps
      </Text>
    </div>
  );
}