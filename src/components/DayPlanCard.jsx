import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

export default function () {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      mx={8}
      mb={8}
      shadow="none"
    >
      <Image
        objectFit="cover"
        maxW={{ base: "100%", sm: "200px" }}
        src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        alt="Caffe Latte"
      />

      <Stack>
        <CardBody>
          <Heading size="md">The perfect latte</Heading>

          <Text py="2">
            Caffè latte is a coffee beverage of Italian origin made with
            espresso and steamed milk.
          </Text>
        </CardBody>

        <CardFooter>
          <Link color="teal.500" textDecoration="underline">
            Show more
          </Link>
        </CardFooter>
      </Stack>
    </Card>
  );
}
