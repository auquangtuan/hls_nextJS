import React, { useEffect, useState } from 'react'
import styles from "@/styles/EditJoke.module.scss";
import { useRouter } from 'next/router';
import Button from '@/components/Button';

export default function EditJoke() {
  const [data, setData] = useState([])
  const [number, setNumber] = useState("")
  const [open, setOpen] = useState(false)
  const [value, setValue] = useState("")
  const router = useRouter()
  const sendRequest = () => {
    fetch("api/data/")
      .then((res) => res.json())
      .then((data) => setData(data.message))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    sendRequest()
  }, [])
  const handleEdit = (item) => {
    fetch("/api/data/", {
      method: "PUT",
      body: JSON.stringify({
        id: item,
        story: value
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res) => res.json()).then((data) => alert(data.message)).then(() => sendRequest()).then(() => setOpen(false)).catch((err) => console.log(err))
  }
  const handleDelete = (item) => {
    fetch("/api/data/", {
      method: "DELETE",
      body: JSON.stringify({
        id: item
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res) => res.json()).then((data) => alert(data.message)).then(() => sendRequest()).catch((err) => console.log(err))
  }
  const handleOpen = (item) => {
    console.log(item)
    setNumber(item._id)
    setOpen(true)
    setValue(item.story)
  }
  return (
    <div>
      <h1 style={{ padding: 20, textAlign: "center" }}>EDIT JOKE</h1>

      <table id={styles.customers}>
        <tr>
          <th>CHUYỆN CƯỜI</th>
          <th>CHỈNH SỬA</th>
          <th>XÓA</th>
        </tr>
        {data.map((item) => {
          return (
            <tr>
              <td>{item.story}</td>
              <td className={styles.action} onClick={() => handleOpen(item)}>EDIT</td>
              <td className={styles.action} onClick={() => { handleDelete(item._id) }}>DELETE</td>
            </tr>
          )

        })}
      </table>
      <div style={{ display: `${open ? "block" : "none"}` }}>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", position: 'absolute', backgroundColor: "rgba(180 ,180 ,180 , .9)", width: "100vw", height: "100vh", top: 0, left: 0, bottom: 0, right: 0 }}>
          <div width="100%" height="70%" style={{ position: "relative", textAlign: "center", width: "70%", padding: "20px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div style={{ position: "absolute", top: 30, right: 10, color: "white", cursor: "pointer" }} onClick={() => setOpen(false)}>X</div>
            <h2 style={{ textAlign: "center" }}>Chỉnh Sửa Joke</h2>
            <textarea cols={140} rows={10} style={{ marginTop: "40px", marginBottom: "40px", padding: 40 }} value={value} onChange={(e) => setValue(e.target.value)}>
            </textarea>
            <Button
              primary
              style={{ width: "30%", alignSelf: "center" }}
              onClick={() => handleEdit(number)}
              content="Thêm"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
