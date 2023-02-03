import React, { useEffect, useState } from "react";
import Button from "@/components/Button";
import { useRouter } from "next/router";
const AddJoke = () => {
  const [content, setContent] = useState("");
  const router = useRouter();
  const sendRequest = () => {
    fetch("/api/data/", {
      method : "POST",
      body : JSON.stringify({
        story : content
      }),
      headers : {
        "Content-Type" : "application/json"
      }
    }).then((res) => res.json()).then((data) => alert(data.message) && console.log(data)).catch((err) => console.log(err))
  }
  const handleClick = (e) => {
    e.preventDefault()
    if(content.length < 1) {
      alert("Bạn cần nhập nội dung")
    } else {
      sendRequest()
    }

  };
  const handleContentChange = (e) => {
    setContent(e.target.value);
  };
  return (
    <div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 12,
          alignItems: "center",
        }}
      >
        <h2>Thêm Chuyện Cười</h2>
        <label htmlFor="title" />
        <textarea
          rows="10"
          cols="100"
          style={{ padding: 12, fontSize: 20 }}
          value={content}
          onChange={handleContentChange}
        />
        <Button
          primary
          style={{ width: "30%", alignSelf: "center" }}
          onClick={handleClick}
          content="Thêm"
        />
      </form>
    </div>
  );
};

export default AddJoke;
