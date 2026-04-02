import Title from "../atoms/Title";
import Text from "../atoms/Text";


export default function Heading() {
  return (
    <div className="">

      <div className="flex items-center justify-center  gap-1">
        <Title
          variant="disabled"
          size="xl"
          className=" ds-font-bold"
          center={true}>
          Lorem, ipsum dolor.
        </Title>
        <Title variant="disabled" size="xl" className=" ds-font-bold">
          Lorem, ipsum.
        </Title>
      </div>

      <Text variant="secondary" size="md" center={true}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, sequi.
      </Text>
    </div>
  );
}