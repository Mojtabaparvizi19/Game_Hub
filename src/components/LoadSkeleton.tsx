import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

function LoadSkeleton() {
  return (
    <Card>
      <Skeleton height={"200px"}></Skeleton>
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
}

export default LoadSkeleton;
