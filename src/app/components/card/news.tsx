import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

interface NewsCardProps {
  data: {
    title: string;
    content: string[];
    originalUrl: string;
    imageUrl: string;
  };
}

const NewsCard: React.FC<NewsCardProps> = ({ data }) => {
  return (
    <Card className="">
      <CardHeader className="p-0">
        <Image
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
        <ul>
          {data.content.map((el, i) => {
            return (
              <li key={i} className="mb-2">
                -{el}
              </li>
            );
          })}
        </ul>
      </CardBody>
    </Card>
  );
};

export default NewsCard;
