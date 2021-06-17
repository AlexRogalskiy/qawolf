import type monacoEditor from "monaco-editor/esm/vs/editor/editor.api";
import { useContext, useState } from "react";

import { EditorContext } from "../../contexts/EditorContext";
import { RunnerContext } from "../../contexts/RunnerContext";
import { MonacoBinding } from "../../hooks/MonacoBinding";
import EditorComponent from "../Editor";
import { includeTypes } from "../helpers";
import { useEnvTypes, useHelpersTypes } from "./hooks/envTypes";
import { useGlyphs } from "./hooks/glyphs";

export type MonacoEditor = monacoEditor.editor.IStandaloneCodeEditor;

export type Monaco = typeof monacoEditor;

export type EditorDidMount = {
  editor: MonacoEditor;
  monaco: Monaco;
};

type Props = {
  isVisible: boolean;
  onKeyDown: (e: monacoEditor.IKeyboardEvent) => void;
};

export default function CodeEditor({
  isVisible,
  onKeyDown,
}: Props): JSX.Element {
  const [editor, setEditor] = useState<MonacoEditor | null>(null);
  const [monaco, setMonaco] = useState<Monaco | null>(null);

  const { env, progress, onSelectionChange } = useContext(RunnerContext);
  const { helpersModel, test, testModel } = useContext(EditorContext);

  useEnvTypes({ env, monaco });
  useHelpersTypes({ helpersModel, monaco });
  useGlyphs({ editor, progress });

  const editorDidMount = ({ editor, monaco }) => {
    const binding = new MonacoBinding(
      monaco,
      testModel._content,
      editor.getModel(),
      new Set([editor]),
      testModel.awareness
    );

    editor.onDidDispose(() => binding.destroy());

    setEditor(editor);
    setMonaco(monaco);
    includeTypes(monaco);

    editor.onDidChangeCursorSelection(onSelectionChange);
  };

  return (
    <EditorComponent
      a11yTitle="test code"
      editorDidMount={editorDidMount}
      isInitialized={test.isInitialized}
      isReadOnly={test.isLoaded ? test.isReadOnly : undefined}
      isVisible={isVisible}
      onKeyDown={onKeyDown}
    />
  );
}
