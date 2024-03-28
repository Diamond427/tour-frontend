import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Card,
  CardBody,
  CardHeader,
  Container,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import Carousel from "./Carousel";
import { ChevronRightIcon, SunIcon } from "@chakra-ui/icons";
import DayPlanCard from "./components/DayPlanCard";

function App() {
  return (
    <>
      <Carousel />
      <Container maxWidth="container.lg" mt={-16}>
        <Card zIndex={10}>
          <CardHeader>
            <Breadcrumb
              spacing="8px"
              separator={<ChevronRightIcon color="gray.500" />}
            >
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Asia</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="#">Singapore</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">Strenous Travel Style</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </CardHeader>

          <CardBody>
            <Heading as="h1" fontSize="2xl" fontWeight="bold">
              Marina Bay Sands Observation
            </Heading>
            <Text fontWeight="bold" mt={2}>
              A great spot for R&R: order yourself a drink from the bar and get
              comfortable on one of the day beds that line the impressive
              100-metre pool
            </Text>
            <Flex align="center" my={4} gap={2}>
              <SunIcon fontSize="xl" color="teal.500" />
              <Text fontSize="xl">Itienary</Text>
            </Flex>

            {new Array(3).fill(0).map((it) => (
              <DayPlanCard key={it} />
            ))}
          </CardBody>
        </Card>
      </Container>
    </>
  );
}

export default App;
