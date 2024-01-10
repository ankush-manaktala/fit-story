import React, { useEffect, useState } from "react";
import {
  DialogContentText,
  Grid,
  TextField,
} from "@mui/material";
import RadioButtonGroup from "../../components/RadioButtonGroup";
import Modal from "../../components/Modal";
import Dropdown from "../../components/Dropdown";
import { ControlType } from "../../utils/Constants/constants";
import Carousel from "../../components/Carousel";
import Blogs from './Blogs'
import { useWelcome } from "./welcome-hook";
import Footer from "../Footer";
import FreeExpertBanner from "./FreeExpertBanner";

const Welcome = () => {
  const {
    questions,
    imageCarousel,
    isModalVisible,
    blogsData,
    setIsModalVisible,
    getQuestionsData,
  } = useWelcome();
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const changeProgress = () => {
    setIndex(index + 1);
    const progress = ((+index + 1) / questions?.length) * 100;
    setProgress(progress);
  };

  const handleChange = (type, value) => {};

  useEffect(() => {
    setIsModalVisible(true);
    getQuestionsData();
  }, [getQuestionsData, setIsModalVisible]);

  const getControl = (content) => {
    switch (content?.type) {
      case ControlType.TEXT:
        return (
          <TextField
            autoFocus
            margin="dense"
            id={content?.statement}
            label={content?.statement}
            fullWidth
            variant="standard"
          />
        );
      case ControlType.DROPDOWN:
        return (
          <Dropdown
            label={content?.statement}
            options={content?.options}
            onChange={(value) => {
              handleChange(ControlType.DROPDOWN, value);
            }}
          />
        );
      case ControlType.RADIO:
        return (
          <RadioButtonGroup
            label={content?.statement}
            options={content?.options}
            onChange={(value) => {
              handleChange(ControlType.RADIO, value);
            }}
          />
        );
      default:
        break;
    }
  };

  const getContent = () => {
    const content = questions[index];
    return index >= questions?.length ? (
      <DialogContentText>Details Saved Successfully</DialogContentText>
    ) : (
      <>
        <DialogContentText>{content?.statement}</DialogContentText>
        {getControl(content)}
      </>
    );
  };

  return (
    <>      
        <Carousel infinite>
          {imageCarousel?.map((image, index) => {
            return (
              <Grid
                key={image?.cta}
                sx={{
                  paddingLeft: 2,
                  paddingRight: 2,
                  marginTop: "20px",
                  display: "flex",
                  justifyContent: "center",
                  height: "450px",
                  borderRadius: "10px",
                }}
              >
                <img
                  draggable={false}
                  style={{ borderRadius: "24px" }}
                  src={
                    "https://drive.google.com/uc?export=view&id=1mxp4nt9FCwOy0qIfybn3Rxz34fyUvuNO"
                  }
                  alt=""
                  width={"100%"}
                />
              </Grid>
            );
          })}
        </Carousel>
        <FreeExpertBanner/>
        <Blogs data={blogsData}/>
        <Footer/>
      <Modal
        open={false}
        title={"Health Questions"}
        isLastIndex={index === 3}
        OnSubmit={() =>
          index <= questions?.length - 1
            ? changeProgress()
            : setIsModalVisible(false)
        }
        onClose={() => setIsModalVisible(false)}
        progress={progress}
        ActionBtnText={index <= questions?.length - 1 ? "Next" : "Close"}
        CancelBtnText={"Previous"}
        showProgress
        showCancel={index <= questions?.length - 1}
      >
        {getContent()}
      </Modal>
    </>
  );
};

export default Welcome;
