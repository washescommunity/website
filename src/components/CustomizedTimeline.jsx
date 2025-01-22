import { styled } from "@mui/material/styles";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { dadosTimelineQuemSomos } from "../data/dadosTimelineQuemSomos";
import { useState } from "react";

import { IoIosAddCircle, IoIosRemoveCircle  } from "react-icons/io";

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3, 2),
}));

const CustomConnector = styled(TimelineConnector)({
  backgroundColor: "#36BCEE",
});

const titleColors = ["#E72B78", "#74C76B", "#E46F1B", "#36BCEE"]; // Alternando Cores para títulos
const dotColors = ["#E72B78", "#74C76B", "#E46F1B", "#36BCEE"]; // Alternando Cores para TimelineDo

const AnimatedContent = styled("div")({
  overflow: "hidden",
  transition: "max-height 0.5s ease-in-out",
  maxHeight: 0, 
});

const RotatingIcon = styled("div")(({ isOpen }) => ({
  display: "inline-block",
  transition: "transform 0.3s ease-in-out",
  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
}));

export default function CustomizedTimeline() {

  const [isOpen, setIsOpen] = useState([0])

  const openDropDown = (index) => {
    setIsOpen((prevIndexes) =>
      prevIndexes.includes(index)
        ? prevIndexes.filter((i) => i !== index)
        : [...prevIndexes, index]
    );
  };


  return (
    <Timeline position="alternate">
      {dadosTimelineQuemSomos.map((item, index) => {
        const openIndexes = isOpen.includes(index);

        return(
        <TimelineItem key={index}>
          <TimelineOppositeContent> 
            <Typography className="py-2" style={{fontFamily:"Sofia Sans", fontSize: "24px" }} sx={{ color: "#2f2f2f" }}>
              {item.year}
            </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot
              sx={{
                cursor: "pointer",
                backgroundColor: dotColors[index % dotColors.length],
                color: "#fff",
              }}
              onClick={() => openDropDown(index)}
            >
              <RotatingIcon isOpen={openIndexes}> 
                  {openIndexes ? (
                        <IoIosRemoveCircle size={30}/>
                      ) : (
                        <IoIosAddCircle size={30}/>
                      )}
              </RotatingIcon>
            </TimelineDot>
            <CustomConnector style={{height: 90}}/>
          </TimelineSeparator>
          <TimelineContent>
            <AnimatedContent
              style={{
                maxHeight: openIndexes ? "500px" : "0",
              }}
            >
              <StyledPaper style={{padding: 2}}>
                <div className="py-1.5">
                  <Typography 
                    style={{fontFamily:"Sofia Sans", fontSize: "24px" }}
                    sx={{ color: titleColors[index % titleColors.length] }}
                  >
                    {item.title}
                  </Typography>
                    <Typography dangerouslySetInnerHTML={{ __html: item.description }}  style={{fontFamily:"Sofia Sans", fontSize: "18px" }} sx={{ color: "#2f2f2f" }}></Typography>
                </div>
              </StyledPaper>
            </AnimatedContent>
          </TimelineContent>
        </TimelineItem>
        )
      })}
    </Timeline>
  );
}
