import { Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

export const useStyles = makeStyles((theme) => ({
  body1: {
    textAlign: "center",
    marginLeft: theme.spacing(3),
    paddingRight: theme.spacing(4),
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(3),
  },
  skipButton: {
    marginTop: theme.spacing(2),
  },
}));

export const StyledHeader = styled(Typography)`
  margin-top: 0.8vh;
  padding: 1.2vh 0;
  margin-left: 10%;
  ${({ main }) =>
    main &&
    `margin-left: 0px;
  text-transform: none;`}
`;
