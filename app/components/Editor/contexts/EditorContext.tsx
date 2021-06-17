import { useRouter } from "next/router";
import { createContext, FC, useContext, useRef } from "react";

import { useTeam } from "../../../hooks/queries";
import { Team } from "../../../lib/types";
import { StateContext } from "../../StateContext";
import { CommitChangesHook, useCommitChanges } from "../hooks/commitChanges";
import { defaultFileState, FileState, useFileModel } from "../hooks/fileModel";
import { RunHook, useRun } from "../hooks/run";
import { SuiteHook, useSuite } from "../hooks/suite";
import { UserAwareness, useUserAwareness } from "../hooks/useUserAwareness";
import { FileModel } from "./FileModel";

type EditorContextValue = CommitChangesHook &
  RunHook &
  SuiteHook & {
    helpers: FileState;
    helpersModel?: FileModel;
    isLoaded: boolean;
    runId?: string;
    team?: Team;
    testId?: string;
    test: FileState;
    testModel?: FileModel;
    userAwareness?: UserAwareness;
  };

export const EditorContext = createContext<EditorContextValue>({
  hasChanges: false,
  helpers: defaultFileState,
  isLoaded: false,
  run: null,
  test: defaultFileState,
  suite: null,
});

export const EditorProvider: FC = ({ children }) => {
  const { branch, teamId } = useContext(StateContext);

  const createdAtRef = useRef(Date.now());
  const { query } = useRouter();
  const runId = query.run_id as string;
  const testId = query.test_id as string;

  const { data: teamData } = useTeam({ id: teamId });
  const team = teamData?.team || null;

  const { run } = useRun(runId);
  const { suite } = useSuite({ run, team });

  const branchId = branch ? `.${branch}` : "";

  const helpersId = runId
    ? `runhelpers.${suite?.id}`
    : `helpers.${teamId}${branchId}`;

  const { file: helpers, model: helpersModel } = useFileModel(
    // if the suite is not loaded, return null
    helpersId.includes("undefined") ? null : helpersId,
    createdAtRef.current
  );

  const { file: test, model: testModel } = useFileModel(
    runId ? `run.${runId}` : `test.${testId}${branchId}`,
    createdAtRef.current
  );

  const userAwareness = useUserAwareness(testModel);

  const { commitChanges, hasChanges } = useCommitChanges({
    branch,
    helpersModel,
    testId,
    testModel,
  });

  return (
    <EditorContext.Provider
      value={{
        commitChanges,
        hasChanges,
        helpers,
        helpersModel,
        isLoaded: helpers.isLoaded && test.isLoaded,
        run,
        runId,
        suite,
        team,
        test,
        testId: testId || run?.test_id,
        testModel,
        userAwareness,
      }}
    >
      {children}
    </EditorContext.Provider>
  );
};
