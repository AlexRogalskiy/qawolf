import { Box, BoxProps, ThemeContext } from "grommet";
import { useContext } from "react";
import styled from "styled-components";

import { useEnvironments } from "../../hooks/queries";
import { state } from "../../lib/state";
import { copy } from "../../theme/copy";
import {
  borderSize,
  colors,
  disabledOpacity,
  theme,
  transitionDuration,
} from "../../theme/theme-new";
import { StateContext } from "../StateContext";
import Button from "./AppButton";
import Configure from "./icons/Configure";
import { Direction } from "./Menu";
import Select from "./Select";
import Option from "./Select/Option";

type Props = {
  direction?: Direction;
  isDisabled?: boolean;
  onEnvironmentClick: (environmentId: string) => void;
  selectedEnvironmentId: string | null;
  width?: BoxProps["width"];
};

const dividerId = "environments-divider";

const StyledBox = styled(Box)`
  #${dividerId} {
    transition: background ${transitionDuration};
  }

  &:hover {
    #${dividerId} {
      background: ${colors.gray6};
    }
  }
`;

export default function Environments({
  direction,
  isDisabled,
  onEnvironmentClick,
  selectedEnvironmentId,
  width,
}: Props): JSX.Element {
  const { environmentId, teamId } = useContext(StateContext);
  const { data } = useEnvironments({ team_id: teamId }, { environmentId });

  const selectedEnvironment = (data?.environments || []).find(
    (e) => e.id === selectedEnvironmentId
  );

  let label = copy.loading;
  if (data?.environments) {
    label = selectedEnvironment
      ? selectedEnvironment.name
      : copy.environmentNotSelected;
  }

  const openEnvironmentsModal = (): void => {
    if (!selectedEnvironment) return;

    state.setEnvironmentId(selectedEnvironmentId);
    state.setModal({ name: "environments" });
  };

  const optionsHtml = (data?.environments || []).map((e) => {
    return (
      <Option
        isSelected={e.id === selectedEnvironmentId}
        key={e.id}
        label={e.name}
        onClick={() => onEnvironmentClick(e.id)}
      />
    );
  });

  return (
    <ThemeContext.Extend value={theme}>
      <StyledBox
        alignSelf="center"
        direction="row"
        round={borderSize.small}
        width={width || "200px"}
      >
        <Button
          IconComponent={Configure}
          a11yTitle={copy.environmentEdit(selectedEnvironment?.name)}
          isDisabled={isDisabled}
          noBorderSide="right"
          onClick={openEnvironmentsModal}
          type="dark"
        />
        <Box
          background={colors.gray8}
          id="environments-divider"
          style={{ opacity: isDisabled ? disabledOpacity : 1 }}
          width={borderSize.xsmall}
        />
        <Select
          direction={direction || "up"}
          isDisabled={isDisabled}
          label={label}
          noBorderSide="left"
          type="dark"
        >
          {optionsHtml}
        </Select>
      </StyledBox>
    </ThemeContext.Extend>
  );
}
