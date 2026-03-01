import Text from "@/components/atoms/Text";
import Title from "@/components/atoms/Title";
export default function page() {
  return (
    <div>
      <Text variant="primary" size="md">
        this is text
      </Text>
      <Text variant="secondary" size="lg">
        this is text
      </Text>
      <Title variant="black" size="sm">
        this is heading
      </Title>
      <Title variant="gray" size="md">
        this is heading
      </Title>
      <Title variant="primary" size="lg">
        this is heading
      </Title>
      <Title size="xl" className="                                       text-amber-300">
        this is heading
      </Title>
    </div>
  );
}
