"use client";

import CardModal from "@/app/components/modal/card-modal";
import { INews, useInfinitePost } from "@/lib/get-news";
import { useDisclosure } from "@nextui-org/react";
import { FC } from "react";
import { useSWRConfig } from "swr";

const ModalPage: FC<any> = ({ params }) => {
  const { cache, mutate, ...extraConfig } = useSWRConfig();
  console.log(
    cache
      .get("$inf$http://192.168.0.8:3001/posts/last-posts?limit=6&offset=0")
      ?.data.flat()
  );

  const posts = cache
    .get("$inf$http://192.168.0.8:3001/posts/last-posts?limit=6&offset=0")
    ?.data.flat() as INews[];

  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  const post = posts.find((obj) => obj.id === +params.id);
  if (!post) return null;

  return (
    <CardModal
      title={post.title}
      isOpen={true}
      originalUrl={post.originalUrl}
      content={post.content}
      onOpenChange={onClose}
    />
  );
};

export default ModalPage;
