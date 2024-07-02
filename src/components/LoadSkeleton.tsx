import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function LoadSkeleton() {
  return (
    <Card overflow={"hidden"} borderRadius={"10px"} width={"300px"}>
      <Skeleton height={"200px"}></Skeleton>
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}

export default LoadSkeleton;
