import { Box } from "grommet";
import { useContext, useState } from "react";

import { useOnHotKey } from "../../../../hooks/onHotKey";
import { insertSnippet } from "../../../../lib/testFile";
import { border } from "../../../../theme/theme";
import { EditorContext } from "../../contexts/EditorContext";
import { RunnerContext } from "../../contexts/RunnerContext";
import Action from "./Action";
import Buttons from "./Buttons";
import ChooseElement from "./ChooseElement";
import Code from "./Code";
import { ActionType, buildCode } from "./helpers";
import Selector from "./Selector";

type Props = { isVisible: boolean };

export default function Snippet({ isVisible }: Props): JSX.Element {
  const { elementChooserValue, runTest, stopElementChooser } = useContext(
    RunnerContext
  );
  const { testModel } = useContext(EditorContext);

  const [action, setAction] = useState<ActionType>(null);
  const [selector, setSelector] = useState<string>(null);

  const hasChosenElement = !!elementChooserValue.selectors;

  const snippetCode = buildCode(
    action,
    selector,
    elementChooserValue?.text || "",
    elementChooserValue?.variable
  );

  const addRunSnippet = () => {
    if (!hasChosenElement || !testModel) return;

    const selection = insertSnippet(testModel, snippetCode);

    // this will enable code generation so make sure to call it before
    // run test which will disable code generation
    stopElementChooser();

    runTest(selection);
  };

  useOnHotKey({ hotKey: "Enter", onHotKey: addRunSnippet, requireMeta: true });
  useOnHotKey({ hotKey: "Escape", onHotKey: stopElementChooser });

  if (!isVisible) return null;

  const selectorIsDisabled = action === "Assert page text";
  return (
    <Box
      background="gray9"
      border={{ ...border, color: "gray8", side: "top" }}
      flex={false}
      pad="medium"
    >
      {hasChosenElement ? (
        <>
          <Box align="center" direction="row" justify="between">
            <Action
              hasText={!!elementChooserValue?.text}
              isFillable={elementChooserValue?.isFillable}
              onSelectAction={setAction}
              value={action}
            />
            <Selector
              isDisabled={selectorIsDisabled}
              options={elementChooserValue.selectors || []}
              onSelectOption={setSelector}
              value={selectorIsDisabled ? "" : selector}
            />
          </Box>
          <Code code={snippetCode} />
          <Buttons onAddSnippet={addRunSnippet} onCancel={stopElementChooser} />
        </>
      ) : (
        <ChooseElement />
      )}
    </Box>
  );
}
