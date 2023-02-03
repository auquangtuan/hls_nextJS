import React, { useEffect, useState } from 'react'
import styles from "@/styles/EditJoke.module.scss";
export default function EditJoke() {
  const [data, setData] = useState([])
  const sendRequest = () => {
    fetch("api/data/")
      .then((res) => res.json())
      .then((data) => setData(data.message))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    sendRequest()
  }, [])
  const handleEdit = () => {

  }
  const handleDelete = (item) => {
    fetch("/api/data/", {
      method : "DELETE",
      body : JSON.stringify({
        id : item
      }),
      headers : {
        "Content-Type" : "application/json"
      }
    }).then((res) => res.json()).then((data) => console.log(data) && alert(data.message))
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
          return <tr>
            <td>{item.story}</td>
            <td className={styles.action} onClick={handleEdit(item._id)}>EDIT</td>
            <td className={styles.action} onClick={handleDelete(item._id)}>DELETE</td>
          </tr>
        })}
      </table>

    </div>
  )
}
