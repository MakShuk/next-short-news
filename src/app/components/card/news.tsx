
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  Image,
  useDisclosure,
  Link,
} from "@nextui-org/react";
import CardModal from "../modal/card-modal";

interface NewsCardProps {
  data: {
    id: number;
    title: string;
    content: string[];
    originalUrl: string;
    imageUrl: string;
  };
}

const NewsCard: React.FC<NewsCardProps> = ({ data }) => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <Card className="flex flex-col h-full w-full">
      <CardHeader className="p-0">
        <Image
          isBlurred
          alt="Card background"
          className="rounded-none object-cover h-full w-full"
          src={data.imageUrl}
          style={{
            width: "100vh",
            height: "clamp(124px, 12vw, 372px)",
          }}
        />
      </CardHeader>
      <CardBody className="overflow-visible py-2 grid align-super">
        <h4 className="font-bold pb-2 break-words">{data.title}</h4>
        {/*  <CardModal
            title={data.title}
            content={data.content}
            isOpen={isOpen}
            onOpenChange={onOpenChange}
            originalUrl={data.originalUrl}
          /> */}
      </CardBody>
    </Card>
  );
};

export default NewsCard;
