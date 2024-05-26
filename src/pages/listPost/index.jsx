import { useEffect, useState } from "react";
import { Button, Card, CardFooter, CardHeader, Image } from "@nextui-org/react";
import { Link } from "react-router-dom";
import { fetchPost } from "../../services/api";

const PostList = () => {
  const [mediaList, setMediaList] = useState([]);
  console.log(mediaList[0]?.title);

  useEffect(() => {
    const fetchPostDetail = async () => {
      // fetchPost is a function defined in services/api for the sake of better code arrangement
      const response = await fetchPost();
      setMediaList(response);
    };
    fetchPostDetail();
  }, []);

  return (
    <div className="grid grid-cols-3 max-sm:grid-cols-1 gap-5">
      {mediaList.length > 0 ? (
        mediaList?.map((media) => (
          <div className="" key={media._id}>
            <Link to={`detail/${media._id}`}>
              <Card
                isFooterBlurred
                className="w-full h-[300px] col-span-1 sm:col-span-7"
              >
                <CardHeader className="absolute z-10 top-1 flex-col items-start">
                  <h4 className="text-white/90 font-medium text-xl">
                    {media.title}
                  </h4>
                </CardHeader>
                <Image
                  removeWrapper
                  alt="Relaxing app background"
                  className="z-0 min-w-full h-full object-cover"
                  src={media.thumbnailUrl}
                />

                <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
                  <div className="flex flex-grow gap-2 items-center">
                    <div className="flex flex-col">
                      <p className="text-tiny text-white/60">
                        {media.description}
                      </p>
                    </div>
                  </div>
                  <Button radius="full" size="sm">
                    Play Video
                  </Button>
                </CardFooter>
              </Card>
            </Link>
          </div>
        ))
      ) : (
        <p className="min-w-full  mx-auto">No data Available</p>
      )}
    </div>
  );
};

export default PostList;
