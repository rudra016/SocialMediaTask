import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          About Me
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      
      <FlexBetween>
        <Typography color={main}>My Portfolio</Typography>
        <Typography color={medium}>
          <a href="https://2d-rudra.vercel.app" target="_blank" rel="noopener noreferrer">
            2d-rudra.vercel.app
          </a>
        </Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
      Check out my portfolio to learn more about me, explore my skills, and see the exciting projects that showcase my creative journey.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertWidget;
