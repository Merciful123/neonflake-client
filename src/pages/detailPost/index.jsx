// src/components/DetailPage.jsx
import  { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchPostById } from "../../services/api.js";
import { Button, Card, CardBody } from "@nextui-org/react";

const PostDetail = () => {
  const { id } = useParams();
  const [media, setMedia] = useState(null);

  useEffect(() => {
    const getMedia = async () => {
      // fetchPostById is a function defined in services/api for the sake of better code arrangement

      const data = await fetchPostById(id);
      setMedia(data);
    };
    getMedia();
  }, [id]);

  if (!media) {
    return <p>Loading...</p>;
  }

  return (
    <div className="max-sm:h-[90vh]">
      <Card>
        <CardBody>
          <div className=" flex justify-between mb-2">
            <h1 className="text-2xl mb-2 ">{media?.title}</h1>
            <Link to="/" >
              <Button className="bg-green-500">Home</Button>
            </Link>
          </div>

          <video width="100%" controls autoPlay>
            <source src={media?.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="text-xl mt-4">{media?.description}</p>
        </CardBody>
      </Card>
    </div>
  );
};

export default PostDetail;
