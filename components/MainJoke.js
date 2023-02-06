import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import Button from "../components/Button";

// import { data } from "../public/data";

import ThisJoke from "./ThisJoke";
import styles from "@/styles/MainJoke.module.scss";

const MainJoke = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(0)
  const [dataArr, setDataArr] = useState([])
  const sendRequest = () => {
    fetch("api/data/")
      .then((res) => res.json())
      .then((data) => setData(data.message))
      .catch((err) => console.log(err));
  };
  const handleFunnyClick = (id) => {
    Cookies.set(id, `FN_${id}`);
    handleNext();
  };
  const handleNotFunnyClick = (id) => {
    Cookies.set(id, `NF_${id}`);
    handleNext()
  };
  const handleNext = () => {
    setShow(data?.filter((item) => !Cookies.get(item._id))[0]?._id)
  };
  useEffect(() => {
    sendRequest();
  }, []);
  useEffect(() => {
    if (data.length > 0) {
      setDataArr(data?.filter((item) => !Cookies.get(item._id)))
    }
  }, [data])
  useEffect(() => {
    setShow(dataArr[0]?._id)
  }, [dataArr])


  return (
    <div className={styles.MainJoke}>
      {(data?.filter((item) => !Cookies.get(item._id))).length === 0 ?
        <div className={styles.MainJoke}>
          <div className={styles.MainJoke__Container}>
            <ThisJoke content="That's all the jokes for today! Come back another day!" />
          </div>
        </div>
        : dataArr.map((item, index) => {
          return (
            (show === item._id &&
              <div key={item._id}>
                {(
                  <div className={styles.MainJoke__Container}>
                    <ThisJoke content={item.story} />
                    <div
                      className={`spliter ${styles.joke_spliter}`}
                      style={{ width: "80%", margin: "0 auto" }}
                    ></div>
                    <div className={styles.MainJoke__button}>
                      <Button
                        secondary
                        content="This is Funny!"
                        onClick={() => handleFunnyClick(item._id)}
                      />
                      <Button
                        primary
                        content="This is not funny."
                        onClick={() => handleNotFunnyClick(item._id)}
                      />
                    </div>
                  </div>
                )}
              </div>
            )
          );
        })}
    </div>
  );
};

export default MainJoke;
