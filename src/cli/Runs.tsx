import { Box, Color, render, Static } from "ink";
import React from "react";
import { ProgressBar } from "./ProgressBar";
import { Results } from "./Results";
import { Run } from "./Run";
import { Run as RunType, Summary } from "../types";

type PropTypes = {
  startTime: string;
  summary: Summary | null;
  runs: RunType[];
};

const getStepsCounts = (
  runs: RunType[]
): { completeCount: number; totalCount: number } => {
  let completeCount = 0;
  let totalCount = 0;

  runs.forEach(run => {
    completeCount += run.steps.filter(
      step => step.status !== "runs" && step.status !== "queued"
    ).length;
    totalCount += run.steps.length;
  });

  return { completeCount, totalCount };
};

const renderRuns = ({
  runs,
  showSteps
}: {
  runs: RunType[];
  showSteps?: boolean;
}) => {
  return runs.map(run => (
    <Run key={run.name} showSteps={!!showSteps} run={run} />
  ));
};

const Runs = ({ startTime, summary, runs }: PropTypes) => {
  const completeRuns = runs.filter(run => {
    return run.status === "pass" || run.status === "fail";
  });
  const runsRuns = runs.filter(run => run.status === "runs");
  const failRuns = runs.filter(run => run.status === "fail");

  const completeRunsHtml = renderRuns({
    runs: completeRuns
  });
  const runsRunsHtml = renderRuns({
    runs: runsRuns,
    showSteps: true
  });
  const failRunsHtml = summary
    ? renderRuns({ runs: failRuns, showSteps: true })
    : null;

  const actionText = summary ? "ran" : "is running";

  return (
    <Box flexDirection="column">
      <Static>{completeRunsHtml}</Static>

      <Color bold cyan key="QA Wolf Message">
        {`\n🐺 QA Wolf ${actionText} your tests!\n`}
      </Color>
      <Box flexDirection="column">{runsRunsHtml}</Box>
      {!summary && <ProgressBar {...getStepsCounts(runs)} />}
      {!!summary && !!summary.fail && (
        <Color bold red>{`\n${summary.fail} failed`}</Color>
      )}
      {failRunsHtml}
      <Results startTime={startTime} summary={summary} />
    </Box>
  );
};

export default (props: PropTypes) => {
  render(<Runs {...props} />);
};
