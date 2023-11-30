import { FC } from "react";

export interface PhotoDetailProps {
  params: {
    id: string;
  };
}

const PhotoDetail: FC<PhotoDetailProps> = async ({ params }) => {
  return (
    <div className="grid md:grid-cols-1 place-items-center gap-4">
      ID {params.id}
    </div>
  );
};

export default PhotoDetail;
