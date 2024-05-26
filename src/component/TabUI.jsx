import { Tabs, Tab } from "@nextui-org/react";
import { useState } from "react";
import UploadPost from "../pages/uploadPost";
import PostList from "../pages/listPost";

const Tabsmenu = () => {
  const [selected, setSelected] = useState("create-post");
  console.log(selected)

  return (
    <div className="flex w-full flex-col">
      <Tabs
        aria-label="Options"
        color="success"
        variant="bordered"
        selectedKey={selected}
        onSelectionChange={setSelected}
      >
        <Tab
          key="create-post"
          title={
            <div className="flex items-center space-x-2">
              <span>Create Post</span>
            </div>
          }
        >
          {selected === "create-post" && <UploadPost />}
        </Tab>
        <Tab
          key="all-post"
          title={
            <div className="flex items-center space-x-2">
              <span>All Post</span>
            </div>
          }
        >
          {selected === "all-post" && <PostList /> }
        </Tab>
      </Tabs>
    </div>
  );
};

export default Tabsmenu;
