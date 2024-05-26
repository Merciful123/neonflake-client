import { useState } from "react";
import { Button, Input, Textarea, Card, Spacer } from "@nextui-org/react";
import { uploadPost } from "../../services/api.js";

const UploadPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [thumbnail, setThumbnail] = useState(null);
  const [video, setVideo] = useState(null);

  const [titleError, setTitleError] = useState("");
  const [descriptionError, setDescriptionError] = useState("");
  const [thumbnailError, setThumbnailError] = useState("");
  const [videoError, setVideoError] = useState("");
  const [fileKey, setFileKey] = useState(Date.now());

  const validateForm = () => {
    let isValid = true;

    if (!title) {
      setTitleError("Title is required");
      isValid = false;
    } else {
      setTitleError("");
    }

    if (!description) {
      setDescriptionError("Description is required");
      isValid = false;
    } else {
      setDescriptionError("");
    }

    if (!thumbnail) {
      setThumbnailError("Thumbnail is required");
      isValid = false;
    } else {
      setThumbnailError("");
    }

    if (!video) {
      setVideoError("Video is required");
      isValid = false;
    } else {
      setVideoError("");
    }

    return isValid;
  };

  const handleUpload = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("thumbnailUrl", thumbnail);
    formData.append("videoUrl", video);
    console.log(formData);

    try {

      // uploadPost is a function defined in services/api for the sake of better code arrangement

      await uploadPost(formData);
      // If upload is successful, reset the form and display success message
      setTitle("");
      setDescription("");
      setThumbnail(null);
      setVideo(null);
      setFileKey(Date.now()); // Reset file inputs by changing the key

      alert("Media uploaded successfully");
    } catch (error) {
      console.error(error);
      alert("Failed to upload media");
    }
  };

  return (
    <Card className="min-h-[85vh] min-w-[100%]">
      <form
        onSubmit={handleUpload}
        className="p-10 min-w-[60%] max-sm:w-[100%] mx-auto flex flex-col justify-center align-items-center"
      >
        <h4 className="text-3xl text-green-500 mb-8">Create a post</h4>
        <Input
          fullWidth
          bordered
          label="Title"
          placeholder="Enter title"
          maxLength={50}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        {titleError && <p color="error">{titleError}</p>}
        <Spacer y={1} />
        <Textarea
          fullWidth
          bordered
          label="Description"
          placeholder="Enter description"
          maxLength={200}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {descriptionError && <p color="error">{descriptionError}</p>}
        <Spacer y={1} />
        <input
          key={`thumbnail-${fileKey}`}
          label="Thumbnail"
          placeholder="Enter thumbnail"
          className="bg-default-100  p-4 rounded-xl"
          type="file"
          name="thumbnailUrl"
          accept="image/jpg,image/png,image/jpeg"
          onChange={(e) => setThumbnail(e.target.files[0])}
        />
        {thumbnailError && <p color="error">{thumbnailError}</p>}
        <Spacer y={1} />
        <input
          key={`video-${fileKey}`}
          type="file"
          className="bg-default-100  p-4 rounded-xl"
          label="Video"
          placeholder="upload video"
          accept="video/mpg,video/avi,video/mp4"
          name="videoUrl"
          onChange={(e) => setVideo(e.target.files[0])}
        />
        {videoError && <p color="error">{videoError}</p>}
        <Spacer y={1} />
        <Button type="submit" className="bg-green-500 mt-4">
          Upload
        </Button>
      </form>
    </Card>
  );
};

export default UploadPost;
