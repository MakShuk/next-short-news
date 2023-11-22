import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  useDisclosure,
} from "@nextui-org/react";
import CardModal from "../modal/card-modal";

interface NewsCardProps {
  data: {
    title: string;
    content: string[];
    originalUrl: string;
    imageUrl: string;
  };
}

const NewsCard: React.FC<NewsCardProps> = ({ data }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <Card className="" onClick={onOpen} isPressable>
      <CardHeader className="p-0">
        <Image
          isBlurred
          alt="Card background"
          className="rounded-none"
          src={data.imageUrl}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </CardHeader>
      <CardBody className="overflow-visible py-2 grid align-super">
        <h4 className="font-bold pb-2">{data.title}</h4>
        <CardModal
          title={data.title}
          content={data.content}
          isOpen={isOpen}
          onOpenChange={onOpenChange}
        />
      </CardBody>
    </Card>
  );
};

export default NewsCard;
